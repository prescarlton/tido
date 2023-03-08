import { Request, Response } from 'express'
import {
  GetGenProjSettingsResponse,
  GetProjectParams,
} from 'shared/types/projects'

import prisma from '@/utils/db'

const getGeneralSettings = async (
  req: Request<GetProjectParams>,
  res: Response<GetGenProjSettingsResponse>
) => {
  const { projectId } = req.params

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  })
  if (!project) return res.status(404).json({ message: 'Project not found' })

  return res.json({ message: 'success', data: project })
}

export default getGeneralSettings
