import { Router } from "express"

import getActiveWorkspace from "./handlers/getActiveWorkspace"
import listMyWorkspaces from "./handlers/listMyWorkspaces"
import setActiveWorkspace from "./handlers/setActiveWorkspace"
const WorkspaceRouter: Router = Router()

// GET
WorkspaceRouter.get("/", listMyWorkspaces)
WorkspaceRouter.get("/active", getActiveWorkspace)

// PUT
WorkspaceRouter.put("/active/:workspaceId", setActiveWorkspace)

export default WorkspaceRouter
