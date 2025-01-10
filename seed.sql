-- 插入示例标签
INSERT INTO tags (name, slug) VALUES
('JavaScript', 'javascript'),
('Node.js', 'nodejs'),
('React', 'react'),
('Vue', 'vue'),
('TypeScript', 'typescript'),
('Python', 'python'),
('Docker', 'docker'),
('Kubernetes', 'kubernetes'),
('AI', 'ai'),
('Web开发', 'web-dev')
ON CONFLICT(slug) DO NOTHING;

-- 插入示例文章
INSERT INTO posts (title, content, excerpt, slug, author_id, status, published_at)
VALUES 
(
    'Vue 3 组合式 API 最佳实践',
    '![Vue 3 Composition API](https://res.cloudinary.com/practicaldev/image/fetch/s--xKWyj8SG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hxh5qj8l2vvxwpqhy44d.png)

Vue 3 的组合式 API（Composition API）是一个游戏规则改变者。它不仅提供了更好的代码组织方式，还能显著提高性能。

## 为什么选择组合式 API？

1. 更好的代码组织
2. 更强的类型推导
3. 更小的打包体积
4. 更好的性能

## 最佳实践

### 1. 使用 setup 语法糖

```vue
<script setup>
import { ref, onMounted } from ''vue''

const count = ref(0)

function increment() {
  count.value++
}
</script>
```

### 2. 抽取可复用的逻辑

```vue
// useCounter.js
export function useCounter() {
  const count = ref(0)
  
  function increment() {
    count.value++
  }
  
  return {
    count,
    increment
  }
}
```

## 总结

组合式 API 让我们能够编写更易维护和扩展的 Vue 应用。通过合理使用这些新特性，我们可以构建出更好的应用。',
    'Vue 3 的组合式 API 带来了全新的开发体验。本文将介绍组合式 API 的最佳实践，帮助你更好地使用这个强大的特性。',
    'vue3-composition-api-best-practices',
    1,
    'published',
    CURRENT_TIMESTAMP
),
(
    'Next.js 13 完全指南',
    '![Next.js 13](https://res.cloudinary.com/practicaldev/image/fetch/s--5u1FyR51--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4anecy5mdl4pqz1xgmpq.jpg)

Next.js 13 带来了革命性的变化，包括新的 App Router、服务器组件、Streaming 等特性。让我们深入了解这些新特性。

## App Router

新的 App Router 提供了：

- 基于文件系统的路由
- 布局和嵌套布局
- 加载和错误处理
- 路由组和动态路由

```jsx
// app/page.js
export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js 13</h1>
    </main>
  )
}
```

## 服务器组件

服务器组件允许我们在服务器端渲染复杂的UI逻辑，减少客户端的 JavaScript 体积。

```jsx
// app/posts/page.js
async function getPosts() {
  const res = await fetch(''https://api.example.com/posts'')
  return res.json()
}

export default async function Posts() {
  const posts = await getPosts()
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

## Streaming

Streaming 允许我们逐步渲染页面，提供更好的用户体验：

```jsx
import { Suspense } from ''react''

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  )
}
```',
    'Next.js 13 引入了许多激动人心的新特性。本文将详细介绍 App Router、服务器组件、Streaming 等核心概念，帮助你掌握这个强大的框架。',
    'nextjs-13-complete-guide',
    1,
    'published',
    CURRENT_TIMESTAMP
),
(
    'AI 驱动的前端开发：提高效率的秘诀',
    '![AI Frontend Development](https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaR1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk1h7oizzqs5l.png)

人工智能正在改变前端开发的方式。从代码补全到自动化测试，AI 工具正在帮助开发者提高效率。

## AI 开发工具

### 1. GitHub Copilot

GitHub Copilot 是一个强大的 AI 编程助手，它可以：

- 自动补全代码
- 生成函数实现
- 提供智能建议

### 2. Tabnine

Tabnine 提供了：

- 全行代码补全
- 多语言支持
- 本地运行选项

## AI 辅助测试

```javascript
describe(''AI generated tests'', () => {
  it(''should validate user input'', () => {
    const input = ''test@example.com''
    expect(validateEmail(input)).toBe(true)
  })
})
```

## 最佳实践

1. 不要盲目信任 AI 生成的代码
2. 始终进行代码审查
3. 理解生成的代码逻辑
4. 保持安全意识

## 未来展望

AI 将继续改变开发方式，但不会完全取代开发者。相反，它将成为开发者的得力助手。',
    'AI 正在改变前端开发的方式。本文探讨了如何利用 AI 工具提高开发效率，包括代码补全、自动化测试等方面。',
    'ai-driven-frontend-development',
    1,
    'published',
    CURRENT_TIMESTAMP
);

-- 为文章添加标签
INSERT INTO post_tags (post_id, tag_id)
SELECT (SELECT id FROM posts WHERE slug = 'vue3-composition-api-best-practices'), id 
FROM tags WHERE slug IN ('vue', 'javascript', 'web-dev');

INSERT INTO post_tags (post_id, tag_id)
SELECT (SELECT id FROM posts WHERE slug = 'nextjs-13-complete-guide'), id 
FROM tags WHERE slug IN ('react', 'javascript', 'web-dev');

INSERT INTO post_tags (post_id, tag_id)
SELECT (SELECT id FROM posts WHERE slug = 'ai-driven-frontend-development'), id 
FROM tags WHERE slug IN ('ai', 'javascript', 'web-dev');

-- 插入示例评论
INSERT INTO comments (post_id, author_name, author_email, content, status)
VALUES 
((SELECT id FROM posts WHERE slug = 'vue3-composition-api-best-practices'), 
 '张三', 'zhangsan@example.com', '组合式 API 确实好用，特别是在大型项目中！', 'approved'),
((SELECT id FROM posts WHERE slug = 'nextjs-13-complete-guide'), 
 '李四', 'lisi@example.com', '服务器组件这个特性太棒了！', 'approved'),
((SELECT id FROM posts WHERE slug = 'ai-driven-frontend-development'), 
 '王五', 'wangwu@example.com', '已经开始使用 GitHub Copilot，确实提高了效率。', 'approved');
