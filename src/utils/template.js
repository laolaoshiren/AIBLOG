const commonStyles = `
    :root {
        --primary-color: #ff7e5f;
        --text-color: #e4e4e7;
        --text-secondary: #a1a1aa;
        --bg-color: #18181b;
        --card-bg: #27272a;
        --card-hover: #323232;
        --border-color: #3f3f46;
        --tag-bg: #3f3f46;
        --tag-color: #d4d4d8;
        --header-height: 60px;
        --sidebar-width: 300px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        line-height: 1.6;
        color: var(--text-color);
        background-color: var(--bg-color);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    .header {
        margin-bottom: 2rem;
        text-align: center;
        padding: 2rem 0;
        border-bottom: 1px solid var(--border-color);
        background-color: var(--card-bg);
    }

    .header-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .nav {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1.5rem;
    }

    .nav-link {
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .nav-link:hover {
        color: var(--primary-color);
    }

    .nav-link i {
        font-size: 1.25rem;
    }

    .site-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--primary-color);
    }

    .site-description {
        color: var(--text-secondary);
        font-size: 1.1rem;
    }

    .main {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 2rem;
        align-items: start;
    }

    .posts-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .post-card {
        background-color: var(--card-bg);
        border-radius: 1rem;
        overflow: hidden;
        transition: transform 0.2s, background-color 0.2s;
        display: flex;
        min-height: 120px;
        position: relative;
        padding: 1.5rem;
        gap: 1.5rem;
        border: 1px solid var(--border-color);
    }

    .post-card:hover {
        background-color: var(--card-hover);
        transform: translateY(-2px);
    }

    .post-cover {
        width: 200px;
        height: 120px;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 0.5rem;
        order: 2;
    }

    .post-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    .post-card:hover .post-cover img {
        transform: scale(1.05);
    }

    .post-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        position: relative;
        padding-right: 2rem;
    }

    .post-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.75rem;
        color: var(--text-secondary);
        font-size: 0.875rem;
    }

    .post-meta i {
        font-size: 1rem;
        margin-right: 0.25rem;
    }

    .post-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-color);
        text-decoration: none;
        margin-bottom: 1rem;
        line-height: 1.4;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .post-title:hover {
        color: var(--primary-color);
    }

    .post-excerpt {
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.6;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 1rem;
    }

    .post-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto;
    }

    .tag {
        background-color: var(--tag-bg);
        color: var(--tag-color);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        text-decoration: none;
        transition: background-color 0.2s, transform 0.2s;
    }

    .tag:hover {
        background-color: var(--primary-color);
        color: white;
        transform: translateY(-1px);
    }

    .post-arrow {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-secondary);
        font-size: 1.5rem;
        transition: transform 0.2s;
    }

    .post-card:hover .post-arrow {
        transform: translate(4px, -50%);
        color: var(--primary-color);
    }

    .sidebar {
        position: sticky;
        top: 2rem;
    }

    .widget {
        background-color: var(--card-bg);
        border-radius: 1rem;
        padding: 1.5rem;
        margin-bottom: 2rem;
        border: 1px solid var(--border-color);
    }

    .profile-widget {
        text-align: center;
    }

    .profile-avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 0 auto 1rem;
        overflow: hidden;
        border: 3px solid var(--primary-color);
    }

    .profile-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile-name {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-color);
    }

    .profile-bio {
        color: var(--text-secondary);
        font-size: 0.875rem;
        margin-bottom: 1rem;
    }

    .profile-social {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .social-link {
        color: var(--text-secondary);
        font-size: 1.25rem;
        transition: color 0.2s, transform 0.2s;
    }

    .social-link:hover {
        color: var(--primary-color);
        transform: translateY(-2px);
    }

    .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag-cloud-tag {
        background-color: var(--tag-bg);
        color: var(--tag-color);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        text-decoration: none;
        transition: all 0.2s;
    }

    .tag-cloud-tag:hover {
        background-color: var(--primary-color);
        color: white;
        transform: translateY(-1px);
    }

    .tag-cloud-tag[data-weight="1"] { font-size: 0.75rem; }
    .tag-cloud-tag[data-weight="2"] { font-size: 0.875rem; }
    .tag-cloud-tag[data-weight="3"] { font-size: 1rem; }
    .tag-cloud-tag[data-weight="4"] { font-size: 1.125rem; }
    .tag-cloud-tag[data-weight="5"] { font-size: 1.25rem; }

    .widget-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--border-color);
        color: var(--primary-color);
    }

    .recent-post {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        transition: background-color 0.2s;
    }

    .recent-post:hover {
        background-color: var(--card-hover);
    }

    .recent-post:last-child {
        margin-bottom: 0;
    }

    .recent-post-link {
        color: var(--text-color);
        text-decoration: none;
        font-size: 0.875rem;
        line-height: 1.4;
        font-weight: 500;
        transition: color 0.2s;
    }

    .recent-post-link:hover {
        color: var(--primary-color);
    }

    .recent-post-date {
        color: var(--text-secondary);
        font-size: 0.75rem;
    }

    .error-message {
        padding: 1rem;
        background-color: var(--card-bg);
        border-radius: 0.5rem;
        color: var(--text-secondary);
        text-align: center;
        border: 1px solid var(--border-color);
    }

    @media (max-width: 768px) {
        .main {
            grid-template-columns: 1fr;
        }

        .post-card {
            flex-direction: column;
            height: auto;
            gap: 1rem;
            padding: 1rem;
        }

        .post-cover {
            width: 100%;
            height: 200px;
            order: -1;
        }

        .post-content {
            padding-right: 0;
        }

        .post-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
        }

        .post-excerpt {
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
        }

        .post-arrow {
            display: none;
        }

        .site-title {
            font-size: 2rem;
        }

        .site-description {
            font-size: 1rem;
        }

        .header {
            padding: 1.5rem 0;
        }

        .container {
            padding: 1rem;
        }
    }

    .page-header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }

    .page-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    .page-description {
        color: var(--text-secondary);
    }

    .archive-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .archive-year {
        margin-bottom: 1rem;
    }

    .archive-year-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .archive-posts {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left: 1.5rem;
        border-left: 2px solid var(--border-color);
    }

    .archive-post {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        transition: background-color 0.2s;
    }

    .archive-post:hover {
        background-color: var(--card-bg);
    }

    .archive-post-date {
        color: var(--text-secondary);
        font-size: 0.875rem;
        min-width: 100px;
    }

    .archive-post-title {
        color: var(--text-color);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
    }

    .archive-post-title:hover {
        color: var(--primary-color);
    }

    .categories-list, .tags-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }

    .category-card, .tag-card {
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        padding: 1rem;
        transition: transform 0.2s, background-color 0.2s;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .category-card:hover, .tag-card:hover {
        transform: translateY(-2px);
        background-color: var(--card-hover);
    }

    .category-name, .tag-name {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--primary-color);
    }

    .category-count, .tag-count {
        color: var(--text-secondary);
        font-size: 0.875rem;
    }

    .post-detail {
        background-color: var(--card-bg);
        border-radius: 1rem;
        padding: 2rem;
        border: 1px solid var(--border-color);
    }

    .post-detail-header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }

    .post-detail-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-color);
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    .post-detail-meta {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: var(--text-secondary);
        font-size: 0.875rem;
    }

    .post-detail-meta i {
        margin-right: 0.5rem;
    }

    .post-detail-content {
        font-size: 1.125rem;
        line-height: 1.8;
        color: var(--text-color);
    }

    .post-detail-content p {
        margin-bottom: 1.5rem;
    }

    .post-detail-content img {
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin: 1.5rem 0;
    }

    .post-detail-content h1,
    .post-detail-content h2,
    .post-detail-content h3,
    .post-detail-content h4,
    .post-detail-content h5,
    .post-detail-content h6 {
        margin: 2rem 0 1rem;
        color: var(--primary-color);
    }

    .post-detail-content a {
        color: var(--primary-color);
        text-decoration: none;
        border-bottom: 1px solid var(--primary-color);
    }

    .post-detail-content a:hover {
        opacity: 0.8;
    }

    .post-detail-content blockquote {
        border-left: 4px solid var(--primary-color);
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: var(--text-secondary);
    }

    .post-detail-content code {
        background-color: var(--tag-bg);
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: monospace;
    }

    .post-detail-content pre {
        background-color: var(--tag-bg);
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin: 1.5rem 0;
    }

    .post-detail-content pre code {
        background-color: transparent;
        padding: 0;
    }

    .post-detail-footer {
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }

    .post-detail-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
`;

const templates = {
    admin: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>后台管理 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                :root {
                    --primary-color: #3498db;
                    --danger-color: #e74c3c;
                    --success-color: #2ecc71;
                    --warning-color: #f1c40f;
                    --text-color: #2c3e50;
                    --text-secondary: #7f8c8d;
                    --bg-color: #f5f6fa;
                    --card-bg: #ffffff;
                    --border-color: #dcdde1;
                    --sidebar-width: 240px;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    line-height: 1.6;
                    color: var(--text-color);
                    background: var(--bg-color);
                }

                .admin-container {
                    display: flex;
                    min-height: 100vh;
                }

                .sidebar {
                    width: var(--sidebar-width);
                    background: var(--card-bg);
                    border-right: 1px solid var(--border-color);
                    padding: 2rem 0;
                    position: fixed;
                    height: 100vh;
                    overflow-y: auto;
                }

                .sidebar-header {
                    padding: 0 1.5rem 2rem;
                    border-bottom: 1px solid var(--border-color);
                }

                .sidebar-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                }

                .sidebar-subtitle {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }

                .nav-menu {
                    padding: 1.5rem 0;
                }

                .nav-item {
                    padding: 0.75rem 1.5rem;
                    display: flex;
                    align-items: center;
                    color: var(--text-color);
                    text-decoration: none;
                    transition: all 0.2s;
                }

                .nav-item:hover,
                .nav-item.active {
                    background: var(--bg-color);
                    color: var(--primary-color);
                }

                .nav-item i {
                    margin-right: 0.75rem;
                    font-size: 1.25rem;
                }

                .main-content {
                    flex: 1;
                    margin-left: var(--sidebar-width);
                    padding: 2rem;
                }

                .page-header {
                    margin-bottom: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .page-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    border: none;
                    cursor: pointer;
                    font-size: 0.875rem;
                    transition: all 0.2s;
                }

                .btn i {
                    margin-right: 0.5rem;
                }

                .btn-primary {
                    background: var(--primary-color);
                    color: white;
                }

                .btn-primary:hover {
                    opacity: 0.9;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .stat-card {
                    background: var(--card-bg);
                    border-radius: 0.5rem;
                    padding: 1.5rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .stat-title {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    margin-bottom: 0.5rem;
                }

                .stat-value {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: var(--text-color);
                }

                .stat-icon {
                    float: right;
                    font-size: 2rem;
                    color: var(--primary-color);
                    opacity: 0.2;
                }
            </style>
        </head>
        <body>
            <div class="admin-container">
                <aside class="sidebar">
                    <div class="sidebar-header">
                        <h1 class="sidebar-title">博客管理系统</h1>
                        <p class="sidebar-subtitle">管理你的博客内容</p>
                    </div>
                    <nav class="nav-menu">
                        <a href="/admin" class="nav-item active">
                            <i class="ri-dashboard-line"></i>
                            仪表盘
                        </a>
                        <a href="/admin/posts" class="nav-item">
                            <i class="ri-article-line"></i>
                            文章管理
                        </a>
                        <a href="/admin/categories" class="nav-item">
                            <i class="ri-folder-line"></i>
                            分类管理
                        </a>
                        <a href="/admin/tags" class="nav-item">
                            <i class="ri-price-tag-line"></i>
                            标签管理
                        </a>
                        <a href="/admin/settings" class="nav-item">
                            <i class="ri-settings-line"></i>
                            网站设置
                        </a>
                        <a href="javascript:void(0)" onclick="logout()" class="nav-item">
                            <i class="ri-logout-box-line"></i>
                            退出登录
                        </a>
                    </nav>
                </aside>
                <main class="main-content">
                    <div class="page-header">
                        <h2 class="page-title">仪表盘</h2>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <i class="ri-article-line stat-icon"></i>
                            <div class="stat-title">文章总数</div>
                            <div class="stat-value" id="totalPosts">0</div>
                        </div>
                        <div class="stat-card">
                            <i class="ri-folder-line stat-icon"></i>
                            <div class="stat-title">分类总数</div>
                            <div class="stat-value" id="totalCategories">0</div>
                        </div>
                        <div class="stat-card">
                            <i class="ri-price-tag-line stat-icon"></i>
                            <div class="stat-title">标签总数</div>
                            <div class="stat-value" id="totalTags">0</div>
                        </div>
                        <div class="stat-card">
                            <i class="ri-eye-line stat-icon"></i>
                            <div class="stat-title">总访问量</div>
                            <div class="stat-value" id="totalViews">0</div>
                        </div>
                    </div>
                </main>
            </div>
            <script>
            // 检查登录状态
            const token = localStorage.getItem('admin_token');
            if (!token) {
                window.location.href = '/admin/login';
            }

            // 加载统计数据
            async function loadDashboard() {
                try {
                    const response = await fetch('/api/posts');
                    const posts = await response.json();
                    
                    // 更新统计数据
                    document.getElementById('totalPosts').textContent = posts.length;
                    
                    // 统计分类
                    const categories = new Set(posts.map(post => post.category));
                    document.getElementById('totalCategories').textContent = categories.size;
                    
                    // 统计标签
                    const tags = new Set(posts.flatMap(post => 
                        Array.isArray(post.tags) ? post.tags : []
                    ));
                    document.getElementById('totalTags').textContent = tags.size;
                    
                    // 统计总访问量
                    const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);
                    document.getElementById('totalViews').textContent = totalViews;
                } catch (error) {
                    console.error('Error loading dashboard:', error);
                }
            }

            // 退出登录
            function logout() {
                localStorage.removeItem('admin_token');
                window.location.href = '/admin/login';
            }

            // 初始加载
            loadDashboard();
            </script>
        </body>
        </html>`,
    posts: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>文章管理 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                /* 复用之前的样式变量和基础样式 */
                :root {
                    --primary-color: #3498db;
                    --danger-color: #e74c3c;
                    --success-color: #2ecc71;
                    --warning-color: #f1c40f;
                    --text-color: #2c3e50;
                    --text-secondary: #7f8c8d;
                    --bg-color: #f5f6fa;
                    --card-bg: #ffffff;
                    --border-color: #dcdde1;
                    --sidebar-width: 240px;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    line-height: 1.6;
                    color: var(--text-color);
                    background: var(--bg-color);
                }

                .admin-container {
                    display: flex;
                    min-height: 100vh;
                }

                /* 复用之前的侧边栏样式 */
                .sidebar {
                    width: var(--sidebar-width);
                    background: var(--card-bg);
                    border-right: 1px solid var(--border-color);
                    padding: 2rem 0;
                    position: fixed;
                    height: 100vh;
                    overflow-y: auto;
                }

                .sidebar-header {
                    padding: 0 1.5rem 2rem;
                    border-bottom: 1px solid var(--border-color);
                }

                .sidebar-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                }

                .sidebar-subtitle {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }

                .nav-menu {
                    padding: 1.5rem 0;
                }

                .nav-item {
                    padding: 0.75rem 1.5rem;
                    display: flex;
                    align-items: center;
                    color: var(--text-color);
                    text-decoration: none;
                    transition: all 0.2s;
                }

                .nav-item:hover,
                .nav-item.active {
                    background: var(--bg-color);
                    color: var(--primary-color);
                }

                .nav-item i {
                    margin-right: 0.75rem;
                    font-size: 1.25rem;
                }

                .main-content {
                    flex: 1;
                    margin-left: var(--sidebar-width);
                    padding: 2rem;
                }

                .page-header {
                    margin-bottom: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .page-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                }

                /* 文章管理特定样式 */
                .posts-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .search-box {
                    display: flex;
                    gap: 0.5rem;
                }

                .search-input {
                    padding: 0.5rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                    width: 300px;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    border: none;
                    cursor: pointer;
                    font-size: 0.875rem;
                    transition: all 0.2s;
                }

                .btn i {
                    margin-right: 0.5rem;
                }

                .btn-primary {
                    background: var(--primary-color);
                    color: white;
                }

                .btn-primary:hover {
                    opacity: 0.9;
                }

                .posts-table {
                    width: 100%;
                    background: var(--card-bg);
                    border-radius: 0.5rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    overflow: hidden;
                }

                .posts-table table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .posts-table th,
                .posts-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid var(--border-color);
                }

                .posts-table th {
                    background: var(--bg-color);
                    font-weight: 600;
                    color: var(--text-secondary);
                }

                .posts-table tr:last-child td {
                    border-bottom: none;
                }

                .posts-table tr:hover {
                    background: var(--bg-color);
                }

                .tag {
                    display: inline-block;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    background: var(--bg-color);
                    color: var(--text-secondary);
                    font-size: 0.75rem;
                    margin-right: 0.5rem;
                }

                .action-btn {
                    padding: 0.25rem;
                    border-radius: 0.25rem;
                    border: none;
                    cursor: pointer;
                    color: var(--text-secondary);
                    background: none;
                    transition: all 0.2s;
                }

                .action-btn:hover {
                    color: var(--primary-color);
                    background: var(--bg-color);
                }

                .action-btn.delete:hover {
                    color: var(--danger-color);
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2rem;
                    gap: 0.5rem;
                }

                .page-btn {
                    padding: 0.5rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 0.375rem;
                    background: var(--card-bg);
                    color: var(--text-color);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .page-btn:hover,
                .page-btn.active {
                    background: var(--primary-color);
                    color: white;
                    border-color: var(--primary-color);
                }

                .page-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            </style>
        </head>
        <body>
            <div class="admin-container">
                <aside class="sidebar">
                    <div class="sidebar-header">
                        <h1 class="sidebar-title">博客管理系统</h1>
                        <p class="sidebar-subtitle">管理你的博客内容</p>
                    </div>
                    <nav class="nav-menu">
                        <a href="/admin" class="nav-item">
                            <i class="ri-dashboard-line"></i>
                            仪表盘
                        </a>
                        <a href="/admin/posts" class="nav-item active">
                            <i class="ri-article-line"></i>
                            文章管理
                        </a>
                        <a href="/admin/categories" class="nav-item">
                            <i class="ri-folder-line"></i>
                            分类管理
                        </a>
                        <a href="/admin/tags" class="nav-item">
                            <i class="ri-price-tag-line"></i>
                            标签管理
                        </a>
                        <a href="/admin/settings" class="nav-item">
                            <i class="ri-settings-line"></i>
                            网站设置
                        </a>
                        <a href="javascript:void(0)" onclick="logout()" class="nav-item">
                            <i class="ri-logout-box-line"></i>
                            退出登录
                        </a>
                    </nav>
                </aside>
                <main class="main-content">
                    <div class="page-header">
                        <h2 class="page-title">文章管理</h2>
                        <button class="btn btn-primary" onclick="createPost()">
                            <i class="ri-add-line"></i>
                            新建文章
                        </button>
                    </div>
                    <div class="posts-toolbar">
                        <div class="search-box">
                            <input type="text" class="search-input" placeholder="搜索文章标题..." id="searchInput">
                            <button class="btn btn-primary" onclick="searchPosts()">
                                <i class="ri-search-line"></i>
                                搜索
                            </button>
                        </div>
                    </div>
                    <div class="posts-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>标题</th>
                                    <th>分类</th>
                                    <th>标签</th>
                                    <th>发布时间</th>
                                    <th>访问量</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="postsTableBody"></tbody>
                        </table>
                    </div>
                    <div class="pagination" id="pagination"></div>
                </main>
            </div>
            <script>
            // 检查登录状态
            const token = localStorage.getItem('admin_token');
            if (!token) {
                window.location.href = '/admin/login';
            }

            let currentPage = 1;
            const postsPerPage = 10;
            let allPosts = [];
            let filteredPosts = [];

            // 加载文章列表
            async function loadPosts() {
                try {
                    const response = await fetch('/api/posts');
                    allPosts = await response.json();
                    filteredPosts = [...allPosts];
                    displayPosts();
                    updatePagination();
                } catch (error) {
                    console.error('Error loading posts:', error);
                }
            }

            // 显示文章
            function displayPosts() {
                const startIndex = (currentPage - 1) * postsPerPage;
                const endIndex = startIndex + postsPerPage;
                const postsToShow = filteredPosts.slice(startIndex, endIndex);
                
                const tbody = document.getElementById('postsTableBody');
                tbody.innerHTML = postsToShow.map(post => \`
                    <tr>
                        <td>\${post.title}</td>
                        <td>\${post.category || '无分类'}</td>
                        <td>\${Array.isArray(post.tags) ? post.tags.map(tag => 
                            \`<span class="tag">\${tag}</span>\`).join('') : ''}</td>
                        <td>\${new Date(post.published_at).toLocaleDateString('zh-CN')}</td>
                        <td>\${post.views || 0}</td>
                        <td>\${post.status === 'published' ? '已发布' : '草稿'}</td>
                        <td>
                            <button class="action-btn" onclick="editPost(\${post.id})">
                                <i class="ri-edit-line"></i>
                            </button>
                            <button class="action-btn delete" onclick="deletePost(\${post.id})">
                                <i class="ri-delete-bin-line"></i>
                            </button>
                        </td>
                    </tr>
                \`).join('');
            }

            // 更新分页
            function updatePagination() {
                const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
                const pagination = document.getElementById('pagination');
                
                let paginationHtml = \`
                    <button class="page-btn" \${currentPage === 1 ? 'disabled' : ''} 
                            onclick="changePage(\${currentPage - 1})">
                        <i class="ri-arrow-left-s-line"></i>
                    </button>
                \`;
                
                for (let i = 1; i <= totalPages; i++) {
                    paginationHtml += \`
                        <button class="page-btn \${currentPage === i ? 'active' : ''}" 
                                onclick="changePage(\${i})">\${i}</button>
                    \`;
                }
                
                paginationHtml += \`
                    <button class="page-btn" \${currentPage === totalPages ? 'disabled' : ''} 
                            onclick="changePage(\${currentPage + 1})">
                        <i class="ri-arrow-right-s-line"></i>
                    </button>
                \`;
                
                pagination.innerHTML = paginationHtml;
            }

            // 切换页面
            function changePage(page) {
                if (page < 1 || page > Math.ceil(filteredPosts.length / postsPerPage)) return;
                currentPage = page;
                displayPosts();
                updatePagination();
            }

            // 搜索文章
            function searchPosts() {
                const searchTerm = document.getElementById('searchInput').value.toLowerCase();
                filteredPosts = allPosts.filter(post => 
                    post.title.toLowerCase().includes(searchTerm) ||
                    post.category?.toLowerCase().includes(searchTerm) ||
                    (Array.isArray(post.tags) && post.tags.some(tag => 
                        tag.toLowerCase().includes(searchTerm)
                    ))
                );
                currentPage = 1;
                displayPosts();
                updatePagination();
            }

            // 新建文章
            function createPost() {
                // TODO: 实现新建文章功能
                console.log('Create new post');
            }

            // 编辑文章
            function editPost(id) {
                // TODO: 实现编辑文章功能
                console.log('Edit post:', id);
            }

            // 删除文章
            async function deletePost(id) {
                if (!confirm('确定要删除这篇文章吗？')) return;
                
                try {
                    const response = await fetch(\`/api/admin/posts/\${id}\`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': \`Bearer \${token}\`
                        }
                    });
                    
                    if (response.ok) {
                        loadPosts();
                    } else {
                        throw new Error('Failed to delete post');
                    }
                } catch (error) {
                    console.error('Error deleting post:', error);
                }
            }

            // 退出登录
            function logout() {
                localStorage.removeItem('admin_token');
                window.location.href = '/admin/login';
            }

            // 监听搜索框输入
            document.getElementById('searchInput').addEventListener('input', searchPosts);

            // 初始加载
            loadPosts();
            </script>
        </body>
        </html>`,
    index: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="posts-container" id="postsContainer"></div>
                    <aside class="sidebar">
                        <section class="widget profile-widget">
                            <div class="profile-avatar">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="头像">
                            </div>
                            <h2 class="profile-name">岩浆块</h2>
                            <p class="profile-bio">热爱编程和开源，喜欢分享技术经验</p>
                            <div class="profile-social">
                                <a href="https://github.com/yourusername" class="social-link" target="_blank"><i class="ri-github-fill"></i></a>
                                <a href="mailto:your@email.com" class="social-link"><i class="ri-mail-fill"></i></a>
                                <a href="/rss" class="social-link"><i class="ri-rss-fill"></i></a>
                            </div>
                        </section>
                        <section class="widget">
                            <h3 class="widget-title">最新文章</h3>
                            <div class="recent-posts" id="recentPosts"></div>
                        </section>
                        <section class="widget">
                            <h3 class="widget-title">标签云</h3>
                            <div class="tag-cloud" id="tagCloud"></div>
                        </section>
                    </aside>
                </main>
            </div>
            <script>
            async function fetchPosts() {
                try {
                    const response = await fetch('/api/posts');
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    
                    const postsContainer = document.getElementById('postsContainer');
                    if (!postsContainer) return;
                    
                    // 渲染文章列表
                    postsContainer.innerHTML = posts.map(post => {
                        const imageMatch = post.content?.match(/!\\[.*?\\]\\((.*?)\\)/);
                        const imageUrl = imageMatch ? imageMatch[1] : null;
                        const contentWithoutImage = post.content?.replace(/!\\[.*?\\]\\(.*?\\)/, '').trim() || '';
                        const excerpt = post.excerpt || contentWithoutImage.slice(0, 100);
                        
                        return \`
                            <article class="post-card">
                                <div class="post-content">
                                    <div class="post-meta">
                                        <span><i class="ri-calendar-line"></i>\${new Date(post.published_at).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g, '-')}</span>
                                        <span><i class="ri-folder-line"></i>\${post.category || '无类别'}</span>
                                        <span><i class="ri-eye-line"></i>\${post.views || 0} 次阅读</span>
                                    </div>
                                    <a href="/post/\${post.id}" class="post-title">\${post.title}</a>
                                    <p class="post-excerpt">\${excerpt}</p>
                                    <div class="post-tags">
                                        \${Array.isArray(post.tags) ? post.tags.map(tag => \`<a href="/tag/\${tag.toLowerCase()}" class="tag">\${tag}</a>\`).join('') : ''}
                                    </div>
                                    <i class="ri-arrow-right-s-line post-arrow"></i>
                                </div>
                                \${imageUrl ? \`
                                <div class="post-image">
                                    <img src="\${imageUrl}" alt="\${post.title}" loading="lazy">
                                </div>
                                \` : ''}
                            </article>
                        \`;
                    }).join('');

                    // 更新标签云
                    const tagCloud = document.getElementById('tagCloud');
                    if (tagCloud) {
                        const allTags = posts.reduce((tags, post) => {
                            if (Array.isArray(post.tags)) {
                                post.tags.forEach(tag => {
                                    tags[tag] = (tags[tag] || 0) + 1;
                                });
                            }
                            return tags;
                        }, {});

                        tagCloud.innerHTML = Object.entries(allTags)
                            .sort((a, b) => b[1] - a[1])
                            .map(([tag, count]) => \`
                                <a href="/tag/\${tag.toLowerCase()}" class="tag" title="\${count} 篇文章">
                                    \${tag}
                                </a>
                            \`).join('');
                    }

                    // 更新分类列表
                    const categoryList = document.getElementById('categoryList');
                    if (categoryList) {
                        const categories = posts.reduce((cats, post) => {
                            const category = post.category || '未分类';
                            cats[category] = (cats[category] || 0) + 1;
                            return cats;
                        }, {});

                        categoryList.innerHTML = Object.entries(categories)
                            .sort((a, b) => b[1] - a[1])
                            .map(([category, count]) => \`
                                <a href="/category/\${category}" class="category-item">
                                    \${category}
                                    <span class="count">\${count}</span>
                                </a>
                            \`).join('');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const postsContainer = document.getElementById('postsContainer');
                    if (postsContainer) {
                        postsContainer.innerHTML = '<div class="error">加载文章失败，请稍后重试</div>';
                    }
                }
            }

            document.addEventListener('DOMContentLoaded', fetchPosts);
            </script>
        </body>
        </html>`,
    archives: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>归档 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="content">
                        <div class="page-header">
                            <h1 class="page-title">文章归档</h1>
                            <p class="page-description">共有 <span id="postCount">0</span> 篇文章</p>
                        </div>
                        <div class="archive-list" id="archiveList"></div>
                    </div>
                </main>
            </div>
            <script>
            async function fetchArchives() {
                try {
                    const response = await fetch('/api/posts');
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    
                    document.getElementById('postCount').textContent = posts.length;
                    
                    const archiveList = document.getElementById('archiveList');
                    const postsByYear = {};
                    
                    posts.forEach(post => {
                        const year = new Date(post.published_at).getFullYear();
                        if (!postsByYear[year]) {
                            postsByYear[year] = [];
                        }
                        postsByYear[year].push(post);
                    });
                    
                    const sortedYears = Object.keys(postsByYear).sort((a, b) => b - a);
                    
                    archiveList.innerHTML = sortedYears.map(year => \`
                        <div class="archive-year">
                            <h2 class="archive-year-title">\${year}</h2>
                            <div class="archive-posts">
                                \${postsByYear[year]
                                    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
                                    .map(post => \`
                                        <div class="archive-post">
                                            <span class="archive-post-date">
                                                \${new Date(post.published_at).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }).replace(/\\//g, '-')}
                                            </span>
                                            <a href="/post/\${post.id}" class="archive-post-title">\${post.title}</a>
                                        </div>
                                    \`).join('')}
                            </div>
                        </div>
                    \`).join('');
                } catch (error) {
                    console.error('Error:', error);
                    document.getElementById('archiveList').innerHTML = '<div class="error-message">加载归档失败</div>';
                }
            }

            document.addEventListener('DOMContentLoaded', fetchArchives);
            </script>
        </body>
        </html>`,
    post: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{{title}} - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <article class="post-detail">
                        <header class="post-detail-header">
                            <h1 class="post-detail-title">{{title}}</h1>
                            <div class="post-detail-meta">
                                <span><i class="ri-calendar-line"></i>{{published_at}}</span>
                                <span><i class="ri-folder-line"></i>{{category}}</span>
                                <span><i class="ri-eye-line"></i>{{views}} 阅读</span>
                            </div>
                        </header>
                        <div class="post-detail-content">
                            {{content}}
                        </div>
                        <footer class="post-detail-footer">
                            <div class="post-detail-tags">
                                {{tags}}
                            </div>
                        </footer>
                    </article>
                    <aside class="sidebar">
                        <section class="widget">
                            <h3 class="widget-title">最新文章</h3>
                            <div class="recent-posts" id="recentPosts"></div>
                        </section>
                        <section class="widget">
                            <h3 class="widget-title">标签云</h3>
                            <div class="tag-cloud" id="tagCloud"></div>
                        </section>
                    </aside>
                </main>
            </div>
            <script>
            async function fetchSidebarData() {
                try {
                    const response = await fetch('/api/posts');
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    
                    // 更新最新文章列表
                    const recentPosts = document.getElementById('recentPosts');
                    if (recentPosts) {
                        recentPosts.innerHTML = posts.slice(0, 5).map(post => \`
                            <div class="recent-post">
                                <a href="/post/\${post.id}" class="recent-post-link">
                                    \${post.title}
                                </a>
                                <small class="recent-post-date">\${new Date(post.published_at).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g, '-')}</small>
                            </div>
                        \`).join('');
                    }

                    // 生成标签云
                    const tagCloud = document.getElementById('tagCloud');
                    if (tagCloud) {
                        const tags = {};
                        posts.forEach(post => {
                            if (Array.isArray(post.tags)) {
                                post.tags.forEach(tag => {
                                    tags[tag] = (tags[tag] || 0) + 1;
                                });
                            }
                        });
                        
                        const maxCount = Math.max(...Object.values(tags));
                        const minCount = Math.min(...Object.values(tags));
                        const range = maxCount - minCount;
                        
                        tagCloud.innerHTML = Object.entries(tags)
                            .sort((a, b) => b[1] - a[1])
                            .map(([tag, count]) => {
                                const weight = Math.ceil(((count - minCount) / range) * 5) || 1;
                                return \`<a href="/tag/\${tag.toLowerCase()}" class="tag-cloud-tag" data-weight="\${weight}">\${tag}</a>\`;
                            })
                            .join('');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }

            document.addEventListener('DOMContentLoaded', fetchSidebarData);
            </script>
        </body>
        </html>`,
    '404': `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>页面未找到 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
                .error-container {
                    text-align: center;
                    padding: 100px 20px;
                }
                .error-code {
                    font-size: 72px;
                    color: #ff4d4f;
                    margin-bottom: 20px;
                }
                .error-message {
                    font-size: 24px;
                    color: #666;
                    margin-bottom: 30px;
                }
                .back-home {
                    display: inline-block;
                    padding: 10px 20px;
                    background: #1890ff;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    transition: background 0.3s;
                }
                .back-home:hover {
                    background: #40a9ff;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="error-container">
                        <div class="error-code">404</div>
                        <div class="error-message">{{message}}</div>
                        <a href="/" class="back-home">返回首页</a>
                    </div>
                </main>
            </div>
        </body>
        </html>`,
    '500': `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>服务器错误 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
                .error-container {
                    text-align: center;
                    padding: 100px 20px;
                }
                .error-code {
                    font-size: 72px;
                    color: #ff4d4f;
                    margin-bottom: 20px;
                }
                .error-message {
                    font-size: 24px;
                    color: #666;
                    margin-bottom: 30px;
                }
                .back-home {
                    display: inline-block;
                    padding: 10px 20px;
                    background: #1890ff;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    transition: background 0.3s;
                }
                .back-home:hover {
                    background: #40a9ff;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="error-container">
                        <div class="error-code">500</div>
                        <div class="error-message">{{message}}</div>
                        <a href="/" class="back-home">返回首页</a>
                    </div>
                </main>
            </div>
        </body>
        </html>`,
    category: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{{category}} - 分类 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="content">
                        <div class="page-header">
                            <h1 class="page-title">分类：{{category}}</h1>
                            <p class="page-description">该分类下共有 <span id="postCount">0</span> 篇文章</p>
                        </div>
                        <div class="posts-container" id="postsContainer"></div>
                    </div>
                    <aside class="sidebar">
                        <section class="widget">
                            <h3 class="widget-title">所有分类</h3>
                            <div class="categories-list" id="categoriesList"></div>
                        </section>
                    </aside>
                </main>
            </div>
            <script>
            async function fetchCategoryPosts() {
                try {
                    const category = '{{category}}';
                    const response = await fetch(\`/api/categories/\${category}/posts\`);
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    
                    document.getElementById('postCount').textContent = posts.length;
                    
                    const postsContainer = document.getElementById('postsContainer');
                    if (postsContainer) {
                        postsContainer.innerHTML = posts.map(post => {
                            const imageMatch = post.content?.match(/!\\[.*?\\]\\((.*?)\\)/);
                            const imageUrl = imageMatch ? imageMatch[1] : null;
                            const excerpt = post.excerpt || post.content?.slice(0, 200) || '';
                            
                            return \`
                                <article class="post-card">
                                    <div class="post-content">
                                        <div class="post-meta">
                                            <span><i class="ri-calendar-line"></i>\${new Date(post.published_at).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g, '-')}</span>
                                            <span><i class="ri-folder-line"></i>\${post.category || '无类别'}</span>
                                            <span><i class="ri-eye-line"></i>\${post.views || 0} 次阅读</span>
                                        </div>
                                        <a href="/post/\${post.id}" class="post-title">\${post.title}</a>
                                        <p class="post-excerpt">\${excerpt}</p>
                                        <div class="post-tags">
                                            \${Array.isArray(post.tags) ? post.tags.map(tag => \`<a href="/tag/\${tag.toLowerCase()}" class="tag">\${tag}</a>\`).join('') : ''}
                                        </div>
                                        <i class="ri-arrow-right-s-line post-arrow"></i>
                                    </div>
                                    \${imageUrl ? \`
                                    <div class="post-image">
                                        <img src="\${imageUrl}" alt="\${post.title}" loading="lazy">
                                    </div>
                                    \` : ''}
                                </article>
                            \`;
                        }).join('') || '<div class="error-message">该分类下暂无文章</div>';
                    }

                    // 获取所有分类
                    const allPostsResponse = await fetch('/api/posts');
                    if (!allPostsResponse.ok) throw new Error('Failed to fetch all posts');
                    const allPosts = await allPostsResponse.json();
                    
                    const categoriesList = document.getElementById('categoriesList');
                    if (categoriesList) {
                        const categories = allPosts.reduce((cats, post) => {
                            const category = post.category || '未分类';
                            cats[category] = (cats[category] || 0) + 1;
                            return cats;
                        }, {});
                        
                        categoriesList.innerHTML = Object.entries(categories)
                            .sort((a, b) => b[1] - a[1])
                            .map(([cat, count]) => \`
                                <a href="/category/\${cat}" class="category-item \${cat === category ? 'active' : ''}">
                                    \${cat}
                                    <span class="count">\${count}</span>
                                </a>
                            \`).join('');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const postsContainer = document.getElementById('postsContainer');
                    if (postsContainer) {
                        postsContainer.innerHTML = '<div class="error-message">加载文章失败，请稍后重试</div>';
                    }
                }
            }

            document.addEventListener('DOMContentLoaded', fetchCategoryPosts);
            </script>
        </body>
        </html>`,
    categories: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>分类 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
                .categories-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                .category-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 1rem;
                    padding: 1.5rem;
                    transition: transform 0.2s, background-color 0.2s;
                }
                .category-card:hover {
                    transform: translateY(-2px);
                    background: var(--card-hover);
                }
                .category-name {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--primary-color);
                    margin-bottom: 0.5rem;
                }
                .category-count {
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                    margin-bottom: 1rem;
                }
                .category-posts {
                    margin-top: 1rem;
                }
                .category-post-link {
                    display: block;
                    color: var(--text-color);
                    text-decoration: none;
                    padding: 0.5rem 0;
                    border-top: 1px solid var(--border-color);
                    transition: color 0.2s;
                }
                .category-post-link:hover {
                    color: var(--primary-color);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="content">
                        <div class="page-header">
                            <h1 class="page-title">文章分类</h1>
                            <p class="page-description">共有 <span id="categoryCount">0</span> 个分类</p>
                        </div>
                        <div class="categories-grid" id="categoriesGrid"></div>
                    </div>
                </main>
            </div>
            <script>
            async function fetchCategories() {
                try {
                    const response = await fetch('/api/posts');
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    
                    // 按分类组织文章
                    const categories = posts.reduce((cats, post) => {
                        const category = post.category || '未分类';
                        if (!cats[category]) {
                            cats[category] = [];
                        }
                        cats[category].push(post);
                        return cats;
                    }, {});
                    
                    document.getElementById('categoryCount').textContent = Object.keys(categories).length;
                    
                    const categoriesGrid = document.getElementById('categoriesGrid');
                    if (categoriesGrid) {
                        categoriesGrid.innerHTML = Object.entries(categories)
                            .sort((a, b) => b[1].length - a[1].length)
                            .map(([category, posts]) => \`
                                <div class="category-card">
                                    <h2 class="category-name">\${category}</h2>
                                    <div class="category-count">\${posts.length} 篇文章</div>
                                    <div class="category-posts">
                                        \${posts
                                            .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
                                            .slice(0, 3)
                                            .map(post => \`
                                                <a href="/post/\${post.id}" class="category-post-link">\${post.title}</a>
                                            \`).join('')}
                                        \${posts.length > 3 ? \`
                                            <a href="/category/\${category}" class="category-post-link">
                                                查看更多 (\${posts.length - 3})
                                            </a>
                                        \` : ''}
                                    </div>
                                </div>
                            \`).join('');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const categoriesGrid = document.getElementById('categoriesGrid');
                    if (categoriesGrid) {
                        categoriesGrid.innerHTML = '<div class="error-message">加载分类失败，请稍后重试</div>';
                    }
                }
            }

            document.addEventListener('DOMContentLoaded', fetchCategories);
            </script>
        </body>
        </html>`,
    tags: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>标签 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
                .tags-cloud {
                    margin-top: 2rem;
                    padding: 2rem;
                    background: var(--card-bg);
                    border-radius: 1rem;
                    border: 1px solid var(--border-color);
                }
                .tag-item {
                    display: inline-block;
                    margin: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: var(--tag-bg);
                    border-radius: 2rem;
                    color: var(--text-color);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .tag-item:hover {
                    background: var(--primary-color);
                    color: white;
                    transform: translateY(-2px);
                }
                .tag-count {
                    margin-left: 0.5rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }
                .tag-weight-1 { font-size: 1rem; }
                .tag-weight-2 { font-size: 1.2rem; }
                .tag-weight-3 { font-size: 1.4rem; }
                .tag-weight-4 { font-size: 1.6rem; }
                .tag-weight-5 { font-size: 1.8rem; }
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="content">
                        <div class="page-header">
                            <h1 class="page-title">标签云</h1>
                            <p class="page-description">共有 <span id="tagCount">0</span> 个标签</p>
                        </div>
                        <div class="tags-cloud" id="tagsCloud"></div>
                    </div>
                </main>
            </div>
            <script>
            async function fetchTags() {
                try {
                    const response = await fetch('/api/posts');
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    
                    // 统计标签
                    const tags = {};
                    posts.forEach(post => {
                        if (Array.isArray(post.tags)) {
                            post.tags.forEach(tag => {
                                tags[tag] = (tags[tag] || 0) + 1;
                            });
                        }
                    });
                    
                    document.getElementById('tagCount').textContent = Object.keys(tags).length;
                    
                    // 计算标签权重
                    const maxCount = Math.max(...Object.values(tags));
                    const minCount = Math.min(...Object.values(tags));
                    const range = maxCount - minCount;
                    
                    const tagsCloud = document.getElementById('tagsCloud');
                    if (tagsCloud) {
                        tagsCloud.innerHTML = Object.entries(tags)
                            .sort((a, b) => b[1] - a[1])
                            .map(([tag, count]) => {
                                const weight = Math.ceil(((count - minCount) / range) * 5) || 1;
                                return \`
                                    <a href="/tag/\${tag.toLowerCase()}" class="tag-item tag-weight-\${weight}">
                                        \${tag}
                                        <span class="tag-count">\${count}</span>
                                    </a>
                                \`;
                            })
                            .join('');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const tagsCloud = document.getElementById('tagsCloud');
                    if (tagsCloud) {
                        tagsCloud.innerHTML = '<div class="error-message">加载标签失败，请稍后重试</div>';
                    }
                }
            }

            document.addEventListener('DOMContentLoaded', fetchTags);
            </script>
        </body>
        </html>`,
    tag: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{{tag}} - 标签 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="content">
                        <div class="page-header">
                            <h1 class="page-title">标签：{{tag}}</h1>
                            <p class="page-description">该标签下共有 <span id="postCount">0</span> 篇文章</p>
                        </div>
                        <div class="posts-container" id="postsContainer"></div>
                    </div>
                    <aside class="sidebar">
                        <section class="widget">
                            <h3 class="widget-title">所有标签</h3>
                            <div class="tag-cloud" id="tagCloud"></div>
                        </section>
                    </aside>
                </main>
            </div>
            <script>
            async function fetchTagPosts() {
                try {
                    const tag = '{{tag}}';
                    const response = await fetch(\`/api/tags/\${tag}/posts\`);
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    
                    document.getElementById('postCount').textContent = posts.length;
                    
                    const postsContainer = document.getElementById('postsContainer');
                    if (postsContainer) {
                        postsContainer.innerHTML = posts.map(post => {
                            const imageMatch = post.content?.match(/!\\[.*?\\]\\((.*?)\\)/);
                            const imageUrl = imageMatch ? imageMatch[1] : null;
                            const excerpt = post.excerpt || post.content?.slice(0, 200) || '';
                            
                            return \`
                                <article class="post-card">
                                    <div class="post-content">
                                        <div class="post-meta">
                                            <span><i class="ri-calendar-line"></i>\${new Date(post.published_at).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g, '-')}</span>
                                            <span><i class="ri-folder-line"></i>\${post.category || '无类别'}</span>
                                            <span><i class="ri-eye-line"></i>\${post.views || 0} 次阅读</span>
                                        </div>
                                        <a href="/post/\${post.id}" class="post-title">\${post.title}</a>
                                        <p class="post-excerpt">\${excerpt}</p>
                                        <div class="post-tags">
                                            \${Array.isArray(post.tags) ? post.tags.map(tag => \`<a href="/tag/\${tag.toLowerCase()}" class="tag">\${tag}</a>\`).join('') : ''}
                                        </div>
                                        <i class="ri-arrow-right-s-line post-arrow"></i>
                                    </div>
                                    \${imageUrl ? \`
                                    <div class="post-image">
                                        <img src="\${imageUrl}" alt="\${post.title}" loading="lazy">
                                    </div>
                                    \` : ''}
                                </article>
                            \`;
                        }).join('') || '<div class="error-message">该标签下暂无文章</div>';
                    }

                    // 获取所有标签
                    const allPostsResponse = await fetch('/api/posts');
                    if (!allPostsResponse.ok) throw new Error('Failed to fetch all posts');
                    const allPosts = await allPostsResponse.json();
                    
                    const tagCloud = document.getElementById('tagCloud');
                    if (tagCloud) {
                        const tags = {};
                        allPosts.forEach(post => {
                            if (Array.isArray(post.tags)) {
                                post.tags.forEach(t => {
                                    tags[t] = (tags[t] || 0) + 1;
                                });
                            }
                        });
                        
                        const maxCount = Math.max(...Object.values(tags));
                        const minCount = Math.min(...Object.values(tags));
                        const range = maxCount - minCount;
                        
                        tagCloud.innerHTML = Object.entries(tags)
                            .sort((a, b) => b[1] - a[1])
                            .map(([t, count]) => {
                                const weight = Math.ceil(((count - minCount) / range) * 5) || 1;
                                return \`
                                    <a href="/tag/\${t.toLowerCase()}" 
                                       class="tag-cloud-tag \${t.toLowerCase() === tag.toLowerCase() ? 'active' : ''}" 
                                       data-weight="\${weight}">
                                        \${t}
                                    </a>
                                \`;
                            })
                            .join('');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const postsContainer = document.getElementById('postsContainer');
                    if (postsContainer) {
                        postsContainer.innerHTML = '<div class="error-message">加载文章失败，请稍后重试</div>';
                    }
                }
            }

            document.addEventListener('DOMContentLoaded', fetchTagPosts);
            </script>
        </body>
        </html>`,
    about: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>关于 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
                .about-content {
                    background: var(--card-bg);
                    border-radius: 1rem;
                    padding: 2rem;
                    border: 1px solid var(--border-color);
                }
                .about-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .about-avatar {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    margin: 0 auto 1.5rem;
                    overflow: hidden;
                    border: 3px solid var(--primary-color);
                }
                .about-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .about-name {
                    font-size: 1.75rem;
                    font-weight: 600;
                    color: var(--primary-color);
                    margin-bottom: 0.5rem;
                }
                .about-bio {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                }
                .about-social {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .social-link {
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    transition: all 0.3s ease;
                }
                .social-link:hover {
                    color: var(--primary-color);
                    transform: translateY(-2px);
                }
                .about-section {
                    margin-bottom: 2rem;
                }
                .about-section:last-child {
                    margin-bottom: 0;
                }
                .section-title {
                    font-size: 1.5rem;
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid var(--border-color);
                }
                .skill-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .skill-item {
                    background: var(--tag-bg);
                    color: var(--text-color);
                    padding: 0.5rem 1rem;
                    border-radius: 2rem;
                    font-size: 0.875rem;
                }
                .timeline {
                    position: relative;
                    padding-left: 2rem;
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--border-color);
                }
                .timeline-item {
                    position: relative;
                    padding-bottom: 2rem;
                }
                .timeline-item:last-child {
                    padding-bottom: 0;
                }
                .timeline-item::before {
                    content: '';
                    position: absolute;
                    left: -2rem;
                    top: 0.5rem;
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    background: var(--primary-color);
                    border: 2px solid var(--bg-color);
                }
                .timeline-date {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    margin-bottom: 0.5rem;
                }
                .timeline-title {
                    font-size: 1.1rem;
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                }
                .timeline-description {
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <div class="header-content">
                        <h1 class="site-title">岩浆块的博客</h1>
                        <p class="site-description">记录学习与生活</p>
                        <nav class="nav">
                            <a href="/" class="nav-link"><i class="ri-home-line"></i>首页</a>
                            <a href="/archives" class="nav-link"><i class="ri-archive-line"></i>归档</a>
                            <a href="/categories" class="nav-link"><i class="ri-folder-line"></i>分类</a>
                            <a href="/tags" class="nav-link"><i class="ri-price-tag-line"></i>标签</a>
                            <a href="/about" class="nav-link"><i class="ri-user-line"></i>关于</a>
                        </nav>
                    </div>
                </header>
                <main class="main">
                    <div class="content">
                        <div class="about-content">
                            <div class="about-header">
                                <div class="about-avatar">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="头像">
                                </div>
                                <h1 class="about-name">岩浆块</h1>
                                <p class="about-bio">热爱编程和开源，喜欢分享技术经验</p>
                                <div class="about-social">
                                    <a href="https://github.com/yourusername" class="social-link" target="_blank" title="GitHub">
                                        <i class="ri-github-fill"></i>
                                    </a>
                                    <a href="mailto:your@email.com" class="social-link" title="Email">
                                        <i class="ri-mail-fill"></i>
                                    </a>
                                    <a href="https://twitter.com/yourusername" class="social-link" target="_blank" title="Twitter">
                                        <i class="ri-twitter-fill"></i>
                                    </a>
                                    <a href="/rss" class="social-link" title="RSS">
                                        <i class="ri-rss-fill"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="about-section">
                                <h2 class="section-title">关于我</h2>
                                <p>你好！我是岩浆块，一名全栈开发者。我热爱编程和技术，喜欢探索新技术并分享学习经验。这个博客是我用来记录学习心得和技术分享的地方。</p>
                            </div>
                            
                            <div class="about-section">
                                <h2 class="section-title">技术栈</h2>
                                <div class="skill-list">
                                    <span class="skill-item">JavaScript</span>
                                    <span class="skill-item">TypeScript</span>
                                    <span class="skill-item">React</span>
                                    <span class="skill-item">Vue</span>
                                    <span class="skill-item">Node.js</span>
                                    <span class="skill-item">Python</span>
                                    <span class="skill-item">Docker</span>
                                    <span class="skill-item">Kubernetes</span>
                                    <span class="skill-item">Cloud Native</span>
                                </div>
                            </div>
                            
                            <div class="about-section">
                                <h2 class="section-title">经历</h2>
                                <div class="timeline">
                                    <div class="timeline-item">
                                        <div class="timeline-date">2023 - 现在</div>
                                        <div class="timeline-title">全栈开发工程师</div>
                                        <div class="timeline-description">
                                            负责公司核心产品的前后端开发，参与架构设计和技术选型。主导了多个重要项目的开发和落地。
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-date">2021 - 2023</div>
                                        <div class="timeline-title">前端开发工程师</div>
                                        <div class="timeline-description">
                                            负责公司产品的前端开发，使用 React 和 Vue 开发企业级应用，优化前端性能和用户体验。
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-date">2019 - 2021</div>
                                        <div class="timeline-title">实习生</div>
                                        <div class="timeline-description">
                                            参与公司多个项目的开发，学习前端技术栈和工程化实践，积累实战经验。
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="about-section">
                                <h2 class="section-title">联系我</h2>
                                <p>如果你对我的文章或者项目有任何问题，欢迎通过以下方式联系我：</p>
                                <ul>
                                    <li>Email: your@email.com</li>
                                    <li>GitHub: github.com/yourusername</li>
                                    <li>Twitter: @yourusername</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </body>
        </html>`,
    login: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>后台登录 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
                .login-container {
                    max-width: 400px;
                    margin: 100px auto;
                    padding: 2rem;
                    background: var(--card-bg);
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .login-title {
                    text-align: center;
                    margin-bottom: 2rem;
                    color: var(--primary-color);
                }
                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .form-group label {
                    color: var(--text-color);
                    font-weight: 500;
                }
                .form-group input {
                    padding: 0.75rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 0.5rem;
                    background: var(--bg-color);
                    color: var(--text-color);
                }
                .login-btn {
                    background: var(--primary-color);
                    color: white;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-weight: 500;
                    transition: opacity 0.2s;
                }
                .login-btn:hover {
                    opacity: 0.9;
                }
                .error-message {
                    color: #dc2626;
                    text-align: center;
                    margin-top: 1rem;
                    display: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="login-container">
                    <h1 class="login-title">后台登录</h1>
                    <form class="login-form" id="loginForm">
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" id="password" name="password" required>
                        </div>
                        <button type="submit" class="login-btn">登录</button>
                        <div class="error-message" id="errorMessage">密码错误</div>
                    </form>
                </div>
            </div>
            <script>
            document.getElementById('loginForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const password = document.getElementById('password').value;
                const errorMessage = document.getElementById('errorMessage');
                
                try {
                    const response = await fetch('/api/admin/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ password })
                    });
                    
                    if (response.ok) {
                        const { token } = await response.json();
                        localStorage.setItem('admin_token', token);
                        window.location.href = '/admin';
                    } else {
                        errorMessage.style.display = 'block';
                    }
                } catch (error) {
                    console.error('Login error:', error);
                    errorMessage.style.display = 'block';
                }
            });
            </script>
        </body>
        </html>`,
    editor: `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>编辑文章 - 岩浆块的博客</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js"></script>
            <style>
                :root {
                    --primary-color: #3498db;
                    --danger-color: #e74c3c;
                    --success-color: #2ecc71;
                    --warning-color: #f1c40f;
                    --text-color: #2c3e50;
                    --text-secondary: #7f8c8d;
                    --bg-color: #f5f6fa;
                    --card-bg: #ffffff;
                    --border-color: #dcdde1;
                    --sidebar-width: 240px;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    line-height: 1.6;
                    color: var(--text-color);
                    background: var(--bg-color);
                }

                .admin-container {
                    display: flex;
                    min-height: 100vh;
                }

                .sidebar {
                    width: var(--sidebar-width);
                    background: var(--card-bg);
                    border-right: 1px solid var(--border-color);
                    padding: 2rem 0;
                    position: fixed;
                    height: 100vh;
                    overflow-y: auto;
                }

                .sidebar-header {
                    padding: 0 1.5rem 2rem;
                    border-bottom: 1px solid var(--border-color);
                }

                .sidebar-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                }

                .sidebar-subtitle {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }

                .nav-menu {
                    padding: 1.5rem 0;
                }

                .nav-item {
                    padding: 0.75rem 1.5rem;
                    display: flex;
                    align-items: center;
                    color: var(--text-color);
                    text-decoration: none;
                    transition: all 0.2s;
                }

                .nav-item:hover,
                .nav-item.active {
                    background: var(--bg-color);
                    color: var(--primary-color);
                }

                .nav-item i {
                    margin-right: 0.75rem;
                    font-size: 1.25rem;
                }

                .main-content {
                    flex: 1;
                    margin-left: var(--sidebar-width);
                    padding: 2rem;
                }

                .page-header {
                    margin-bottom: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .page-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                }

                .editor-container {
                    background: var(--card-bg);
                    border-radius: 0.5rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    padding: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }

                .form-input {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid var(--border-color);
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                }

                .form-input:focus {
                    outline: none;
                    border-color: var(--primary-color);
                }

                .tag-input {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    padding: 0.5rem;
                    border: 1px solid var(--border-color);
                    border-radius: 0.375rem;
                    min-height: 2.5rem;
                }

                .tag {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.25rem 0.5rem;
                    background: var(--bg-color);
                    border-radius: 0.25rem;
                    font-size: 0.75rem;
                }

                .tag i {
                    margin-left: 0.25rem;
                    cursor: pointer;
                }

                .tag-input input {
                    border: none;
                    outline: none;
                    padding: 0.25rem;
                    font-size: 0.875rem;
                    flex: 1;
                }

                .btn-group {
                    display: flex;
                    gap: 1rem;
                    margin-top: 2rem;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    border: none;
                    cursor: pointer;
                    font-size: 0.875rem;
                    transition: all 0.2s;
                }

                .btn i {
                    margin-right: 0.5rem;
                }

                .btn-primary {
                    background: var(--primary-color);
                    color: white;
                }

                .btn-primary:hover {
                    opacity: 0.9;
                }

                .btn-secondary {
                    background: var(--bg-color);
                    color: var(--text-color);
                }

                .btn-secondary:hover {
                    background: var(--border-color);
                }

                .CodeMirror {
                    height: 500px !important;
                }
            </style>
        </head>
        <body>
            <div class="admin-container">
                <aside class="sidebar">
                    <div class="sidebar-header">
                        <h1 class="sidebar-title">博客管理系统</h1>
                        <p class="sidebar-subtitle">管理你的博客内容</p>
                    </div>
                    <nav class="nav-menu">
                        <a href="/admin" class="nav-item">
                            <i class="ri-dashboard-line"></i>
                            仪表盘
                        </a>
                        <a href="/admin/posts" class="nav-item active">
                            <i class="ri-article-line"></i>
                            文章管理
                        </a>
                        <a href="/admin/categories" class="nav-item">
                            <i class="ri-folder-line"></i>
                            分类管理
                        </a>
                        <a href="/admin/tags" class="nav-item">
                            <i class="ri-price-tag-line"></i>
                            标签管理
                        </a>
                        <a href="/admin/settings" class="nav-item">
                            <i class="ri-settings-line"></i>
                            网站设置
                        </a>
                        <a href="javascript:void(0)" onclick="logout()" class="nav-item">
                            <i class="ri-logout-box-line"></i>
                            退出登录
                        </a>
                    </nav>
                </aside>
                <main class="main-content">
                    <div class="page-header">
                        <h2 class="page-title" id="pageTitle">新建文章</h2>
                    </div>
                    <div class="editor-container">
                        <form id="postForm" onsubmit="return false;">
                            <div class="form-group">
                                <label class="form-label">标题</label>
                                <input type="text" class="form-input" id="title" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">分类</label>
                                <input type="text" class="form-input" id="category" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">标签</label>
                                <div class="tag-input" id="tagInput">
                                    <input type="text" placeholder="输入标签后按回车" id="tagInputField">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">摘要</label>
                                <textarea class="form-input" id="excerpt" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label class="form-label">内容</label>
                                <textarea id="content"></textarea>
                            </div>
                            <div class="form-group">
                                <label class="form-label">状态</label>
                                <select class="form-input" id="status">
                                    <option value="published">发布</option>
                                    <option value="draft">草稿</option>
                                </select>
                            </div>
                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary" onclick="savePost()">
                                    <i class="ri-save-line"></i>
                                    保存
                                </button>
                                <button type="button" class="btn btn-secondary" onclick="window.location.href='/admin/posts'">
                                    <i class="ri-arrow-left-line"></i>
                                    返回
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
            <script>
            // 检查登录状态
            const token = localStorage.getItem('admin_token');
            if (!token) {
                window.location.href = '/admin/login';
            }

            let editor;
            let tags = [];
            let postId = null;

            // 初始化编辑器
            document.addEventListener('DOMContentLoaded', () => {
                editor = new EasyMDE({
                    element: document.getElementById('content'),
                    spellChecker: false,
                    autosave: {
                        enabled: true,
                        uniqueId: 'blogPost'
                    }
                });

                // 获取文章ID
                const urlParams = new URLSearchParams(window.location.search);
                postId = urlParams.get('id');

                if (postId) {
                    document.getElementById('pageTitle').textContent = '编辑文章';
                    loadPost(postId);
                }

                // 监听标签输入
                document.getElementById('tagInputField').addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const value = e.target.value.trim();
                        if (value && !tags.includes(value)) {
                            tags.push(value);
                            renderTags();
                        }
                        e.target.value = '';
                    }
                });
            });

            // 渲染标签
            function renderTags() {
                const tagInput = document.getElementById('tagInput');
                const inputField = document.getElementById('tagInputField');
                const tagElements = tags.map(tag => \`
                    <span class="tag">
                        \${tag}
                        <i class="ri-close-line" onclick="removeTag('\${tag}')"></i>
                    </span>
                \`).join('');
                
                tagInput.innerHTML = tagElements;
                tagInput.appendChild(inputField);
            }

            // 移除标签
            function removeTag(tag) {
                tags = tags.filter(t => t !== tag);
                renderTags();
            }

            // 加载文章
            async function loadPost(id) {
                try {
                    const response = await fetch(\`/api/posts/\${id}\`);
                    if (!response.ok) throw new Error('Failed to fetch post');
                    const post = await response.json();

                    document.getElementById('title').value = post.title;
                    document.getElementById('category').value = post.category || '';
                    document.getElementById('excerpt').value = post.excerpt || '';
                    document.getElementById('status').value = post.status || 'published';
                    editor.value(post.content || '');
                    
                    if (Array.isArray(post.tags)) {
                        tags = post.tags;
                        renderTags();
                    }
                } catch (error) {
                    console.error('Error loading post:', error);
                    alert('加载文章失败');
                }
            }

            // 保存文章
            async function savePost() {
                const data = {
                    title: document.getElementById('title').value,
                    category: document.getElementById('category').value,
                    excerpt: document.getElementById('excerpt').value,
                    content: editor.value(),
                    status: document.getElementById('status').value,
                    tags
                };

                try {
                    const url = postId ? \`/api/admin/posts/\${postId}\` : '/api/admin/posts';
                    const method = postId ? 'PUT' : 'POST';
                    
                    const response = await fetch(url, {
                        method,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': \`Bearer \${token}\`
                        },
                        body: JSON.stringify(data)
                    });

                    if (!response.ok) throw new Error('Failed to save post');
                    
                    window.location.href = '/admin/posts';
                } catch (error) {
                    console.error('Error saving post:', error);
                    alert('保存文章失败');
                }
            }

            // 退出登录
            function logout() {
                localStorage.removeItem('admin_token');
                window.location.href = '/admin/login';
            }
            </script>
        </body>
        </html>`
};

// 获取模板函数
function getTemplate(name) {
    return templates[name] || '';
}

module.exports = {
    getTemplate
};