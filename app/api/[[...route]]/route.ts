import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'

export const runtime = 'edge';

const app = new Hono().basePath('/api')

const schema = z.object({
    name: z.string(),
    age: z.number(),
})

app
    .get('/hello/:name', 
        clerkMiddleware(),
        (c) => {
            const auth = getAuth(c)

            if (!auth?.userId) {
                return c.json({
                    message: 'You are not logged in.'
                })
            }

            const name = c.req.param('name')
            return c.json({
                message: `Hello ${name}!`,
            })
        })

export const GET = handle(app)
export const POST = handle(app)