import checkAppToken from '@/middleware/checkAppToken'
import { Router } from 'express'
import login from './login'
import logout from './logout'
import refreshToken from './refresh'
import register from './register'

const AuthRouter = Router()

AuthRouter.post('/login', login)
AuthRouter.post('/register', register)
AuthRouter.post('/logout', checkAppToken, logout)
AuthRouter.get('/refresh', refreshToken)

export default AuthRouter
