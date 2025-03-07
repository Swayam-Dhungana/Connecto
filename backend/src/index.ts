import { Hono } from 'hono'
import userAuth from './routes/userAuth'
const app = new Hono()

app.route('/api/auth', userAuth)

export default app
