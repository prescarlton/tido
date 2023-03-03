import { Request, Response } from 'express'
import { DeleteProjectParams } from 'shared/types/projects'

import prisma from '@/utils/db'

const deleteProject = async (
  req: Request<DeleteProjectParams>,
  res: Response
) => {
  const { id } = req.params

  // delete the project from db
  const project = await prisma.project.delete({
    where: {
      id,
    },
  })

  res.json({ message: 'success', data: project })
}

export default deleteProject
