import { Router } from "express"

import checkProjectAccess from "@/middleware/checkProjectAccess"
import projectSettingsRouter from "@/routes/projects/settings/routes"

import listTaskStatuses from "./boards/listTaskStatuses"
import BoardRouter from "./boards/routes"
import createProject from "./createProject"
import getProjectById from "./getProjectById"
import favoriteProject from "./handlers/favoriteProject"
import listProjectMembers from "./listProjectMembers"
import listProjects from "./listProjects"

const ProjectRouter: Router = Router()

// get
ProjectRouter.get("/", listProjects)
ProjectRouter.get("/:projectId", getProjectById)
ProjectRouter.get("/:projectId/statuses", checkProjectAccess, listTaskStatuses)
ProjectRouter.get("/:projectId/members", checkProjectAccess, listProjectMembers)

// post
ProjectRouter.post("/", createProject)

// delete
ProjectRouter.delete("/:projectId", getProjectById)

// put
ProjectRouter.put("/:projectId/favorite", checkProjectAccess, favoriteProject)

ProjectRouter.use("/:projectId/boards", checkProjectAccess, BoardRouter)
ProjectRouter.use(
  "/:projectId/settings",
  checkProjectAccess,
  projectSettingsRouter,
)

export default ProjectRouter
