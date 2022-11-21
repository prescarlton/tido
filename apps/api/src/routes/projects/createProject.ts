import prisma from '@/utils/db'
import { Request, Response } from 'express'

const createProject = async (req: Request, res: Response) => {
  const { name, description, userId } = req.body as {
    name: string
    description: string
    userId: string
  }

  if (res.locals.user.id !== userId) {
    return res.status(403).json({ message: 'Unauthorized' })
  }

  const project = await prisma.project.create({
    data: {
      name,
      ownerId: userId,
    },
  })

  return res.status(200).json({ message: 'Project created', data: project })
}

export default createProject
