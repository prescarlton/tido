import { Router } from "express"

import getActiveWorkspace from "./handlers/getActiveWorkspace"
import getInviteDetailsByCode from "./handlers/getInviteDetailsByCode"
import inviteUserToWorkspace from "./handlers/inviteUserToWorkspace"
import listMyWorkspaces from "./handlers/listMyWorkspaces"
import listWorkspaceUsers from "./handlers/listWorkspaceUsers"
import setActiveWorkspace from "./handlers/setActiveWorkspace"
const WorkspaceRouter: Router = Router()

// GET
WorkspaceRouter.get("/", listMyWorkspaces)
WorkspaceRouter.get("/active", getActiveWorkspace)
WorkspaceRouter.get("/users", listWorkspaceUsers)

// PUT
WorkspaceRouter.put("/active/:workspaceId", setActiveWorkspace)

// POST
WorkspaceRouter.post("/invite", inviteUserToWorkspace)

export default WorkspaceRouter
