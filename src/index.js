import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Post } from './models/Post';
import { marked } from 'marked';
import { getTemplate } from './utils/template';

const app = new Hono();

app.use('*', cors());

app.get('/', (c) => c.html(getTemplate('index')));

// API 路由
app.get('/api/posts', async (c) => {
    try {
        const posts = await Post.findAll(c.env.DB);
        if (!posts) {
            throw new Error('No posts found');
        }
        return c.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error.message, error.stack);
        return c.json({ error: error.message || 'Failed to fetch posts' }, 500);
    }
});

app.get('/api/posts/:id', async (c) => {
    try {
        const id = c.req.param('id');
        const post = await Post.findById(c.env.DB, id);
        if (!post) {
            return c.json({ error: 'Post not found' }, 404);
        }
        return c.json(post);
    } catch (error) {
        console.error('Error fetching post:', error.message, error.stack);
        return c.json({ error: error.message || 'Failed to fetch post' }, 500);
    }
});

app.get('/api/tags/:tag/posts', async (c) => {
    try {
        const tag = c.req.param('tag');
        const posts = await Post.findByTag(c.env.DB, tag);
        return c.json(posts);
    } catch (error) {
        console.error('Error fetching posts by tag:', error.message, error.stack);
        return c.json({ error: error.message || 'Failed to fetch posts' }, 500);
    }
});

app.get('/api/categories/:category/posts', async (c) => {
    try {
        const category = c.req.param('category');
        const posts = await Post.findByCategory(c.env.DB, category);
        return c.json(posts);
    } catch (error) {
        console.error('Error fetching posts by category:', error.message, error.stack);
        return c.json({ error: error.message || 'Failed to fetch posts' }, 500);
    }
});

// 页面路由
app.get('/archives', async (c) => {
    return c.html(getTemplate('archives'));
});

app.get('/categories', async (c) => {
    return c.html(getTemplate('categories'));
});

app.get('/tags', async (c) => {
    return c.html(getTemplate('tags'));
});

app.get('/about', async (c) => {
    return c.html(getTemplate('about'));
});

app.get('/post/:id', async (c) => {
    try {
        const id = c.req.param('id');
        console.log('Fetching post with ID:', id);
        
        const post = await Post.findById(c.env.DB, id);
        console.log('Found post:', post);
        
        if (!post) {
            console.log('Post not found, returning 404');
            return c.html(getTemplate('404').replace('{{message}}', '文章不存在'), 404);
        }

        // 将 Markdown 转换为 HTML
        const content = marked.parse(post.content);
        console.log('Markdown parsed successfully');
        
        // 格式化日期
        const published_at = new Date(post.published_at).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\//g, '-');

        // 格式化标签
        const tags = Array.isArray(post.tags) 
            ? post.tags.map(tag => `<a href="/tag/${tag.toLowerCase()}" class="tag">${tag}</a>`).join('')
            : '';

        // 替换模板中的占位符
        let html = getTemplate('post')
            .replace(/{{title}}/g, post.title)
            .replace(/{{published_at}}/g, published_at)
            .replace(/{{category}}/g, post.category || '无类别')
            .replace(/{{content}}/g, content)
            .replace(/{{tags}}/g, tags)
            .replace(/{{views}}/g, post.views || 0);

        console.log('Template rendered successfully');
        return c.html(html);
    } catch (error) {
        console.error('Error in post detail route:', error);
        return c.html(getTemplate('500').replace('{{message}}', '服务器错误'), 500);
    }
});

app.get('/tag/:tag', async (c) => {
    try {
        const tag = c.req.param('tag');
        console.log('Fetching tag page for:', tag);
        
        // 检查标签是否存在
        const posts = await Post.findByTag(c.env.DB, tag);
        if (!posts || posts.length === 0) {
            console.log('Tag not found, returning 404');
            return c.html(getTemplate('404').replace('{{message}}', '该标签不存在'), 404);
        }
        
        return c.html(getTemplate('tag').replace(/{{tag}}/g, tag));
    } catch (error) {
        console.error('Error in tag route:', error);
        return c.html(getTemplate('500').replace('{{message}}', '服务器错误'), 500);
    }
});

app.get('/category/:category', async (c) => {
    try {
        const category = c.req.param('category');
        console.log('Fetching category page for:', category);
        
        // 检查分类是否存在
        const posts = await Post.findByCategory(c.env.DB, category);
        if (!posts || posts.length === 0) {
            console.log('Category not found, returning 404');
            return c.html(getTemplate('404').replace('{{message}}', '该分类不存在'), 404);
        }
        
        return c.html(getTemplate('category').replace(/{{category}}/g, category));
    } catch (error) {
        console.error('Error in category route:', error);
        return c.html(getTemplate('500').replace('{{message}}', '服务器错误'), 500);
    }
});

export default app;
