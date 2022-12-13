import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'
import { Request, Response } from 'express'

const getProjectById = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params as { projectId: string }

    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    })

    if (!project) {
      return res.status(404).json({
        error: 'Project not found',
      })
    }

    return res.status(200).json({ message: 'Success', data: project })
  } catch (err) {
    return errorHandler(res, err, 'Unable to get project')
  }
}

export default getProjectById
