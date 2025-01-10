import { Hono } from 'hono';
import { getTemplate } from './utils/template';
import { Post } from './models/Post';
import { User } from './models/User';
import { verifyToken } from './middleware/auth';

const app = new Hono();

// 前台 API
app.get('/', (c) => {
    return c.html(getTemplate('index'))
});

app.get('/api/posts', async (c) => {
    const { DB } = c.env;
    try {
        const posts = await DB.prepare(`
            SELECT 
                p.*,
                u.username as author_name,
                GROUP_CONCAT(t.name) as tags,
                pm.views_count,
                pm.likes_count,
                pm.reading_time
            FROM posts p
            LEFT JOIN users u ON p.author_id = u.id
            LEFT JOIN post_tags pt ON p.id = pt.post_id
            LEFT JOIN tags t ON pt.tag_id = t.id
            LEFT JOIN post_metadata pm ON p.id = pm.post_id
            WHERE p.status = 'published'
            GROUP BY p.id
            ORDER BY p.published_at DESC
        `).all();

        // 处理每篇文章的标签
        const processedPosts = posts.results.map(post => ({
            ...post,
            tags: post.tags ? post.tags.split(',') : []
        }));

        return c.json(processedPosts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return c.json({ error: 'Failed to fetch posts' }, 500);
    }
});

// 管理后台 API
app.get('/admin', (c) => {
    return c.html(getTemplate('admin'));
});

app.post('/api/auth/login', async (c) => {
    const { username, password } = await c.req.json();
    const user = new User(c.env.DB);
    const token = await user.login(username, password);
    
    if (token) {
        return c.json({ token });
    }
    return c.json({ error: 'Invalid credentials' }, 401);
});

// 需要认证的 API
app.post('/api/admin/posts', verifyToken, async (c) => {
    const post = new Post(c.env.DB);
    const data = await c.req.json();
    const result = await post.create(data);
    return c.json(result);
});

app.put('/api/admin/posts/:id', verifyToken, async (c) => {
    const post = new Post(c.env.DB);
    const id = c.req.param('id');
    const data = await c.req.json();
    const result = await post.update(id, data);
    return c.json(result);
});

app.delete('/api/admin/posts/:id', verifyToken, async (c) => {
    const post = new Post(c.env.DB);
    const id = c.req.param('id');
    const result = await post.delete(id);
    return c.json(result);
});

// 标签相关 API
app.get('/api/tags', async (c) => {
    const { DB } = c.env;
    try {
        const tags = await DB.prepare(`
            SELECT t.*, COUNT(pt.post_id) as post_count
            FROM tags t
            LEFT JOIN post_tags pt ON t.id = pt.tag_id
            GROUP BY t.id
            ORDER BY post_count DESC
        `).all();
        return c.json(tags.results);
    } catch (error) {
        console.error('Error fetching tags:', error);
        return c.json({ error: 'Failed to fetch tags' }, 500);
    }
});

// 评论相关 API
app.get('/api/posts/:id/comments', async (c) => {
    const { DB } = c.env;
    const postId = c.req.param('id');
    try {
        const comments = await DB.prepare(`
            SELECT *
            FROM comments
            WHERE post_id = ?
            AND status = 'approved'
            ORDER BY created_at DESC
        `).bind(postId).all();
        return c.json(comments.results);
    } catch (error) {
        console.error('Error fetching comments:', error);
        return c.json({ error: 'Failed to fetch comments' }, 500);
    }
});

app.post('/api/posts/:id/comments', async (c) => {
    const { DB } = c.env;
    const postId = c.req.param('id');
    const { author_name, author_email, content } = await c.req.json();
    
    try {
        const result = await DB.prepare(`
            INSERT INTO comments (post_id, author_name, author_email, content)
            VALUES (?, ?, ?, ?)
        `).bind(postId, author_name, author_email, content).run();
        
        return c.json({ success: true, id: result.lastRowId });
    } catch (error) {
        console.error('Error creating comment:', error);
        return c.json({ error: 'Failed to create comment' }, 500);
    }
});

export default app;
