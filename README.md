# CF Workers 博客系统
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=laolaoshiren.AIBLOG)
![GitHub stars](https://img.shields.io/github/stars/laolaoshiren/AIBLOG?style=social)
![GitHub forks](https://img.shields.io/github/forks/laolaoshiren/AIBLOG?style=social)
![GitHub issues](https://img.shields.io/github/issues/laolaoshiren/AIBLOG)
![GitHub license](https://img.shields.io/github/license/laolaoshiren/AIBLOG)
这是一个基于 Cloudflare Workers 和 D1 数据库构建的现代化博客系统。

## 核心特性

- 🚀 基于 Cloudflare Workers 构建，具有极致的性能和可靠性
- 📊 使用 Cloudflare D1 数据库存储数据
- 🤖 集成 aipen 实现文章自动生成
- 🎨 支持动态主题切换
- 🔍 针对搜索引擎优化的架构设计

## 技术架构

### 前端技术栈
- HTML5 + CSS3 + JavaScript
- 混合渲染策略:
  - 首页和文章列表页: SSR (服务端渲染)
  - 后台管理界面: CSR (客户端渲染)
  - 文章详情页: SSR + 客户端水合(Hydration)

### 后端技术栈
- Cloudflare Workers (无服务器架构)
- Cloudflare D1 (SQLite 数据库)
- aipen (AI 文章生成)

## 主要功能模块

### 1. 内容管理
- 文章的 CRUD 操作
- AI 自动生成文章
- Markdown 编辑器支持
- 文章分类和标签管理
- 文章定时发布

### 2. 主题系统
- 动态主题切换
- 自定义主题上传
- 主题在线编辑
- 主题实时预览

### 3. SEO 优化
- 服务端渲染(SSR)
- 自动生成 sitemap
- Meta 标签优化
- 结构化数据支持
- URL 优化
- 页面预渲染

### 4. 系统管理
- 用户权限管理
- 系统配置
- 数据备份
- 访问统计
- 性能监控

## 数据库设计

### 文章表 (articles)
```sql
CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT CHECK(status IN ('draft', 'published', 'scheduled')) NOT NULL,
  publish_time DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 主题表 (themes)
```sql
CREATE TABLE themes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  is_active BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 部署说明

1. 克隆项目
2. 配置 Cloudflare Workers
3. 初始化 D1 数据库
4. 部署 Workers

## 开发计划

- [ ] 基础框架搭建
- [ ] 数据库设计与实现
- [ ] 文章管理功能
- [ ] AI 文章生成集成
- [ ] 主题系统实现
- [ ] SEO 优化
- [ ] 系统测试
- [ ] 部署上线

## 注意事项

1. 主题系统实现需要参考 Cloudflare 官方文档中关于 Workers 存储和检索动态内容的最佳实践
2. SEO 优化需要根据主流搜索引擎的最新标准进行实现
3. 需要合理使用 Cloudflare 的配额限制
4. 确保 AI 生成的内容质量和原创性

## 项目说明

一个基于 Cloudflare Workers 的博客系统，使用 D1 数据库存储数据。

## 功能特点

- 🚀 基于 Cloudflare Workers，快速且可靠
- 📝 支持文章的增删改查
- 👥 管理员后台
- 💾 使用 D1 数据库存储数据
- 🔒 JWT 认证
- 📱 响应式设计

## 技术栈

- Cloudflare Workers - 无服务器运行时
- Hono - Web 框架
- D1 - SQLite 数据库
- JWT - 用户认证

## 项目结构

```
src/
├── controllers/    # 控制器
├── middleware/     # 中间件
│   └── auth.js    # JWT 认证
├── models/        # 数据模型
│   ├── Post.js    # 文章模型
│   └── User.js    # 用户模型
├── utils/         # 工具函数
│   └── template.js # HTML 模板
└── index.js       # 主应用入口

schema.sql         # 数据库模式
seed.sql          # 初始数据
```

## 快速开始

1. 克隆项目
```bash
git clone [your-repo-url]
cd aiblog
```

2. 安装依赖
```bash
npm install
```

3. 创建数据库
```bash
npm run db:create
```

4. 创建表结构
```bash
npm run db:migrate
```

5. 本地开发
```bash
npm run dev
```

6. 部署
```bash
npm run deploy
```

## API 接口

### 博客前台
- `GET /` - 博客首页
- `GET /api/posts` - 获取所有文章
- `GET /api/posts/:id` - 获取单篇文章

### 管理后台
- `GET /admin` - 管理后台页面
- `POST /api/admin/posts` - 创建文章
- `PUT /api/admin/posts/:id` - 更新文章
- `DELETE /api/admin/posts/:id` - 删除文章
- `POST /api/auth/login` - 管理员登录

## 版本历史

### v1.0.0
- ✨ 基础博客功能
- 📝 文章管理
- 🔒 管理员认证
- 💅 响应式设计

## 许可证

MIT
