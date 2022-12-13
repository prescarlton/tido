import checkAppToken from '@/middleware/checkAppToken'
import { Router } from 'express'
import login from './login'
import logout from './logout'
import getMe from './me'
import refreshToken from './refresh'
import register from './register'

const AuthRouter = Router()

// get
AuthRouter.get('/refresh', refreshToken)
AuthRouter.get('/me', checkAppToken, getMe)

// post
AuthRouter.post('/register', register)
AuthRouter.post('/login', login)
AuthRouter.post('/logout', checkAppToken, logout)

export default AuthRouter
