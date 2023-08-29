import { Router } from "express"
import { UpdateGenProjSettingsSchema } from "shared/types/projects"
import { processRequest } from "zod-express-middleware"

import getGeneralSettings from "@/routes/projects/settings/getGeneralSettings"
import updateGeneralSettings from "@/routes/projects/settings/updateGeneralSettings"

const projectSettingsRouter: Router = Router({ mergeParams: true })

// GET
projectSettingsRouter.get("/general", getGeneralSettings)

// PUT
projectSettingsRouter.put(
  "/general",
  processRequest(UpdateGenProjSettingsSchema),

  updateGeneralSettings
)

export default projectSettingsRouter
