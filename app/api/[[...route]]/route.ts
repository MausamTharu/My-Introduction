import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

app.get('/', (context) => {
  return context.json({
    message: 'Hello Next.js!',
    name:"mausam"
  })
})

app.notFound((context) => {
  return context.text(`not found ${context.req.param('route')}`, 404)
})
export const GET = handle(app)
export const POST = handle(app)