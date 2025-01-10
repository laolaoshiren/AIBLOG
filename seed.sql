-- 创建管理员用户 (密码: admin123)
INSERT INTO users (username, password, email, role) 
VALUES ('admin', 'admin123', 'admin@example.com', 'admin');

-- 创建一些测试文章
INSERT INTO posts (title, content, excerpt, author_id, status, published_at) 
VALUES 
('欢迎使用AI博客系统', '这是使用Cloudflare Workers和D1数据库构建的现代化博客系统。', '系统介绍', 1, 'published', CURRENT_TIMESTAMP),
('Markdown支持测试', '# 标题1\n## 标题2\n这是一个**粗体**测试。', 'Markdown格式测试', 1, 'published', CURRENT_TIMESTAMP);
