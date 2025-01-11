-- 插入测试文章
INSERT INTO posts (
    title,
    content,
    excerpt,
    status,
    category,
    tags,
    views,
    published_at
) VALUES (
    '使用 Cloudflare Workers 搭建个人博客',
    '# 使用 Cloudflare Workers 搭建个人博客

在这篇文章中，我将介绍如何使用 Cloudflare Workers 搭建一个现代化的个人博客系统。

## 技术栈

- Cloudflare Workers
- D1 数据库
- Hono 框架
- SQLite

## 主要特性

1. 支持 Markdown
2. 响应式设计
3. 标签云
4. 文章归档

## 实现步骤

详细的实现步骤...',
    '在这篇文章中，我将介绍如何使用 Cloudflare Workers 搭建一个现代化的个人博客系统。',
    'published',
    '技术',
    '["Cloudflare", "JavaScript", "Web开发"]',
    10,
    '2024-01-10 12:00:00'
),
(
    'JavaScript 异步编程实践',
    '# JavaScript 异步编程实践

异步编程是 JavaScript 中的重要概念，本文将详细介绍异步编程的最佳实践。

## 目录

1. Promise 的使用
2. async/await 语法
3. 错误处理
4. 实际案例

## 详细内容

...',
    '异步编程是 JavaScript 中的重要概念，本文将详细介绍异步编程的最佳实践。',
    'published',
    '编程',
    '["JavaScript", "异步编程", "教程"]',
    5,
    '2024-01-09 15:30:00'
);
