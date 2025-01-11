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
            <title>博客管理后台</title>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
            <style>
                ${commonStyles}
            </style>
        </head>
        <body>
            <div class="container">
                <h1>博客管理后台</h1>
            </div>
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
        </html>`
};

// 获取模板函数
function getTemplate(name) {
    return templates[name] || '';
}

module.exports = {
    getTemplate
};
