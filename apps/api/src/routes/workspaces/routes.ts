import { Router } from "express"

import listMyWorkspaces from "./handlers/listMyWorkspaces"
const WorkspaceRouter: Router = Router()

WorkspaceRouter.get("/", listMyWorkspaces)

export default WorkspaceRouter
