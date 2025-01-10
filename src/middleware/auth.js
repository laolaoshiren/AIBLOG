import { sign, verify } from '@tsndr/cloudflare-worker-jwt';

const SECRET = 'your-jwt-secret'; // 在生产环境中应该使用环境变量

export async function auth(c, next) {
    const authHeader = c.req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

    const token = authHeader.split(' ')[1];
    
    try {
        const isValid = await verify(token, SECRET);
        if (!isValid) {
            return c.json({ error: 'Invalid token' }, 401);
        }

        const payload = JSON.parse(
            Buffer.from(token.split('.')[1], 'base64').toString()
        );
        
        c.set('user', payload);
        await next();
    } catch (err) {
        return c.json({ error: 'Invalid token' }, 401);
    }
}

export async function verifyToken(c, next) {
    try {
        const token = c.req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return c.json({ error: 'No token provided' }, 401);
        }

        const isValid = await verify(token, SECRET);
        
        if (!isValid) {
            return c.json({ error: 'Invalid token' }, 401);
        }

        // 解码 token 并添加到请求上下文
        const decoded = JSON.parse(atob(token.split('.')[1]));
        c.set('user', decoded);

        await next();
    } catch (error) {
        return c.json({ error: 'Invalid token' }, 401);
    }
}

export async function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    };

    return await sign(payload, SECRET);
}
