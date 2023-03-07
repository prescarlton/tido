import 'dotenv/config'

import express from 'express'

import setupMiddleware from '@/middleware/setupMiddleware'
import verifyUser from '@/middleware/verifyUser'

import AuthRouter from './routes/auth/routes'
import ProjectRouter from './routes/projects/routes'
import UserRouter from './routes/users/routes'

const app = express()
setupMiddleware(app)

app.use('/auth', AuthRouter)
app.use('/users', verifyUser, UserRouter)
app.use('/projects', verifyUser, ProjectRouter)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API base url' })
})

app.listen(process.env.PORT, () =>
  console.info('Server is running on port 5000')
)
