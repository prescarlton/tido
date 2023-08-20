import { Router } from "express"

import getUserById from "./getUserById"
import listUsers from "./listUsers"

const UserRouter: Router = Router()

UserRouter.get("/", listUsers)
UserRouter.get("/:id", getUserById)

export default UserRouter
