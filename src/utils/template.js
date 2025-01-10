// 模板对象
const templates = {
    admin: `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Blog Admin55</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            margin-bottom: 2rem;
        }
        header h1 {
            margin: 0;
            text-align: center;
        }
        .post-form {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }
        .form-group input[type="text"],
        .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .form-group textarea {
            height: 200px;
            resize: vertical;
        }
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
        }
        button:hover {
            background-color: #2980b9;
        }
        .posts-list {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .post-item {
            border-bottom: 1px solid #eee;
            padding: 1rem 0;
        }
        .post-item:last-child {
            border-bottom: none;
        }
        .post-item h3 {
            margin: 0 0 0.5rem 0;
        }
        .post-actions {
            margin-top: 0.5rem;
        }
        .post-actions button {
            margin-right: 0.5rem;
        }
        .delete-btn {
            background-color: #e74c3c;
        }
        .delete-btn:hover {
            background-color: #c0392b;
        }
        .edit-btn {
            background-color: #2ecc71;
        }
        .edit-btn:hover {
            background-color: #27ae60;
        }
        .home-link {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #2c3e50;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            text-decoration: none;
        }
        .home-link:hover {
            background-color: #34495e;
        }
    </style>
</head>
<body>
    <header>
        <h1>AI Blog 管理后台</h1>
    </header>
    <div class="container">
        <div class="post-form">
            <h2>发布新文章</h2>
            <form id="postForm">
                <div class="form-group">
                    <label for="title">标题</label>
                    <input type="text" id="title" name="title" required>
                </div>
                <div class="form-group">
                    <label for="content">内容</label>
                    <textarea id="content" name="content" required></textarea>
                </div>
                <button type="submit">发布文章</button>
            </form>
        </div>

        <div class="posts-list">
            <h2>文章列表</h2>
            <div id="postsList"></div>
        </div>
    </div>
    <a href="/" class="home-link">返回首页</a>

    <script>
        // 获取文章列表
        async function fetchPosts() {
            try {
                const response = await fetch('/api/posts');
                const posts = await response.json();
                const postsListElement = document.getElementById('postsList');
                
                postsListElement.innerHTML = posts.map(post => \`
                    <div class="post-item" data-id="\${post.id}">
                        <h3>\${post.title}</h3>
                        <p>\${post.content.substring(0, 100)}...</p>
                        <div class="post-actions">
                            <button class="edit-btn" onclick="editPost(\${post.id})">编辑</button>
                            <button class="delete-btn" onclick="deletePost(\${post.id})">删除</button>
                        </div>
                    </div>
                \`).join('');
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        // 创建新文章
        document.getElementById('postForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            try {
                const response = await fetch('/api/admin/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title,
                        content,
                        status: 'published'
                    })
                });

                if (response.ok) {
                    document.getElementById('title').value = '';
                    document.getElementById('content').value = '';
                    fetchPosts();
                    alert('文章发布成功！');
                } else {
                    alert('发布失败，请重试');
                }
            } catch (error) {
                console.error('Error creating post:', error);
                alert('发布失败，请重试');
            }
        });

        // 编辑文章
        async function editPost(id) {
            try {
                const response = await fetch(\`/api/posts/\${id}\`);
                const post = await response.json();
                
                const title = prompt('编辑标题', post.title);
                const content = prompt('编辑内容', post.content);
                
                if (title === null || content === null) return;

                const updateResponse = await fetch(\`/api/admin/posts/\${id}\`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title,
                        content,
                        status: 'published'
                    })
                });

                if (updateResponse.ok) {
                    fetchPosts();
                    alert('文章更新成功！');
                } else {
                    alert('更新失败，请重试');
                }
            } catch (error) {
                console.error('Error updating post:', error);
                alert('更新失败，请重试');
            }
        }

        // 删除文章
        async function deletePost(id) {
            if (!confirm('确定要删除这篇文章吗？')) return;

            try {
                const response = await fetch(\`/api/admin/posts/\${id}\`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    fetchPosts();
                    alert('文章删除成功！');
                } else {
                    alert('删除失败，请重试');
                }
            } catch (error) {
                console.error('Error deleting post:', error);
                alert('删除失败，请重试');
            }
        }

        // 页面加载完成后获取文章列表
        document.addEventListener('DOMContentLoaded', fetchPosts);
    </script>
</body>
</html>`,

    index: `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Blog</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 1rem;
            margin-bottom: 2rem;
        }
        header h1 {
            margin: 0;
            color: #2c3e50;
            text-align: center;
        }
        .post {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .post h2 {
            margin-top: 0;
            color: #2c3e50;
        }
        .post-meta {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        #posts {
            margin-top: 2rem;
        }
        .loading {
            text-align: center;
            padding: 2rem;
            font-size: 1.2rem;
            color: #666;
        }
        .admin-link {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #2c3e50;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            text-decoration: none;
        }
        .admin-link:hover {
            background-color: #34495e;
        }
    </style>
</head>
<body>
    <header>
        <h1>AI Blog</h1>
    </header>
    <div class="container">
        <div id="posts">
            <div class="loading">加载中...</div>
        </div>
    </div>
    <a href="/admin" class="admin-link">管理后台</a>
    <script>
        async function fetchPosts() {
            try {
                const response = await fetch('/api/posts');
                const posts = await response.json();
                const postsContainer = document.getElementById('posts');
                postsContainer.innerHTML = posts.map(post => \`
                    <article class="post">
                        <h2>\${post.title}</h2>
                        <div class="post-meta">
                            <span>作者: \${post.author_name || 'Unknown'}</span>
                            <span>发布时间: \${new Date(post.published_at).toLocaleDateString()}</span>
                        </div>
                        <div class="post-content">
                            \${post.content}
                        </div>
                    </article>
                \`).join('');
            } catch (error) {
                console.error('Error fetching posts:', error);
                document.getElementById('posts').innerHTML = '<div class="loading">加载失败，请稍后重试</div>';
            }
        }

        // 页面加载完成后获取文章
        document.addEventListener('DOMContentLoaded', fetchPosts);
    </script>
</body>
</html>`
};

// 获取模板函数
export function getTemplate(name) {
    return templates[name] || '';
}
