import { Router } from "express"
import passport from "passport"

import verifyUser from "@/middleware/verifyUser"

import getMe from "./handlers/getMe"
import logout from "./handlers/logout"

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
AuthRouter.post("/logout", logout)

export default AuthRouter
