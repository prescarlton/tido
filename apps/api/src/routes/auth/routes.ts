import { Router } from "express"
import passport from "passport"

import verifyUser from "@/middleware/verifyUser"

import getInviteDetailsByCode from "../workspaces/handlers/getInviteDetailsByCode"
import acceptInvite from "./handlers/acceptInvite"
import getMe from "./handlers/getMe"
import logout from "./handlers/logout"

const AuthRouter: Router = Router()

// get
AuthRouter.get("/me", verifyUser, getMe)
AuthRouter.get("/invite/:code", getInviteDetailsByCode)
// post
AuthRouter.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err: any, user: any) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." })
    }
    req.login(user, function(err) {
      if (err) {
        return next(err)
      }
      return res.json({ message: "success" })
    })
  })(req, res, next)
})

AuthRouter.post("/sign-up")
AuthRouter.post("/logout", logout)
AuthRouter.post("/accept-invite", acceptInvite)

export default AuthRouter
