import { Request, Response } from "express"
import {
  UpdateGenProjSettingsBody,
  UpdateGenProjSettingsParams,
} from "shared/types/projects"

import prisma from "@/utils/db"

const updateGeneralSettings = async (
  req: Request<UpdateGenProjSettingsParams, never, UpdateGenProjSettingsBody>,
  res: Response
) => {
  const { projectId } = req.params
  const { name, description } = req.body

  const project = await prisma.project.update({
    where: {
      id: projectId,
    },
    data: {
      name,
      description,
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  })
  return res.json({ message: "success", data: project })
}

export default updateGeneralSettings
