import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Post } from './models/Post';
import { User } from './models/User';
import { auth, generateToken } from './middleware/auth';
import { getTemplate } from './utils/template';

const app = new Hono();

// 启用 CORS
app.use('*', cors());

// 管理后台
app.get('/admin', (c) => c.html(getTemplate('admin')));

// 博客首页
app.get('/', (c) => c.html(getTemplate('index')));

// 博客前台 API
app.get('/api/posts', async (c) => {
    const post = new Post(c.env.DB);
    const posts = await post.findAll();
    return c.json(posts);
});

app.get('/api/posts/:id', async (c) => {
    const post = new Post(c.env.DB);
    const postData = await post.findById(c.req.param('id'));
    if (!postData) {
        return c.json({ error: 'Post not found' }, 404);
    }
    return c.json(postData);
});

// 管理后台 API（暂时移除 auth 中间件）
app.post('/api/admin/posts', async (c) => {
    const post = new Post(c.env.DB);
    const data = await c.req.json();
    const id = await post.create({
        ...data,
        author_id: 1 // 暂时硬编码为管理员ID
    });
    return c.json({ id });
});

app.put('/api/admin/posts/:id', async (c) => {
    const post = new Post(c.env.DB);
    const data = await c.req.json();
    const success = await post.update(c.req.param('id'), data);
    return c.json({ success });
});

app.delete('/api/admin/posts/:id', async (c) => {
    const post = new Post(c.env.DB);
    const success = await post.delete(c.req.param('id'));
    return c.json({ success });
});

// 认证 API
app.post('/api/auth/login', async (c) => {
    const { username, password } = await c.req.json();
    const user = new User(c.env.DB);
    const userData = await user.findByUsername(username);
    
    if (!userData || userData.password !== password) { // 实际应用中应该使用密码哈希
        return c.json({ error: 'Invalid credentials' }, 401);
    }
    
    const token = await generateToken(userData);
    return c.json({ token });
});

export default app;
