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
        </html>`
};

// 获取模板函数
function getTemplate(name) {
    return templates[name] || '';
}

module.exports = {
    getTemplate
};