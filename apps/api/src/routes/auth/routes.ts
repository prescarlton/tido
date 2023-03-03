import { Router } from 'express'
import passport from 'passport'

import verifyUser from '@/middleware/verifyUser'

import getMe from './me'
import register from './register'

const AuthRouter: Router = Router()

// get
AuthRouter.get('/me', verifyUser, getMe)

// post
AuthRouter.post('/register', register)
AuthRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
  })
)
// AuthRouter.post('/login', login)
// AuthRouter.post('/logout', (req, res) => {
//   req.session.destroy()
// })

export default AuthRouter
