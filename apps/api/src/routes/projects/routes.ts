import { Router } from "express"

import checkProjectAccess from "@/middleware/checkProjectAccess"
import projectSettingsRouter from "@/routes/projects/settings/routes"

import BoardRouter from "./boards/routes"
import createProject from "./createProject"
import getProjectById from "./getProjectById"
import favoriteProject from "./handlers/favoriteProject"
import listProjects from "./listProjects"

const ProjectRouter: Router = Router()

// get
ProjectRouter.get("/", listProjects)
ProjectRouter.get("/:projectId", getProjectById)

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
  projectSettingsRouter
)

export default ProjectRouter
