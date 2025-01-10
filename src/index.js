import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/*', serveStatic({ root: './public' }))

// API routes
app.get('/api/posts', (c) => {
  return c.json([
    {
      id: 1,
      title: '欢迎来到我的博客',
      content: '这是我的第一篇博客文章。',
      date: '2024-01-10'
    }
  ])
})

export default app
