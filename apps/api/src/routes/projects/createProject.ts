import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'
import { Request, Response } from 'express'

const createProject = async (req: Request, res: Response) => {
  const { name } = req.body as {
    name: string
  }
  try {
    const project = await prisma.project.create({
      data: {
        name,
        owner: {
          connect: {
            id: res.locals.user.id,
          },
        },
      },
    })

    return res.status(200).json({ message: 'Project created', data: project })
  } catch (error) {
    return errorHandler(res, error, 'Error creating project')
  }
}

export default createProject
