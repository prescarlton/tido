import { Router } from "express"
import passport from "passport"

import verifyUser from "@/middleware/verifyUser"

import getMe from "./me"

const AuthRouter: Router = Router()

// get
AuthRouter.get("/me", verifyUser, getMe)

// post
AuthRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
  })
)

export default AuthRouter
