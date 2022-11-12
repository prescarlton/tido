import { PrismaClient } from '@prisma/client'
import express from 'express'
import 'dotenv/config'
import cookies from 'cookie-parser'
import UserRouter from './routes/users/routes'
import ProjectRouter from './routes/projects/routes'
import AuthRouter from './routes/auth/routes'
import checkAppToken from './middleware/checkAppToken'

const app = express()

app.use(express.json())
app.use(cookies())

app.use('/auth', AuthRouter)
app.use('/users', checkAppToken, UserRouter)
app.use('/projects', checkAppToken, ProjectRouter)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API base url' })
})

const server = app.listen(process.env.PORT, () =>
  console.log('Server is running on port 5000')
)
