import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'
import { Request, Response } from 'express'

const listProjects = async (req: Request, res: Response) => {
  try {
    const { user } = res.locals
    console.log(user.id)
    const projects = await prisma.project.findMany({
      include: {
        members: true,
      },
      where: {
        members: {
          some: {
            user: {
              id: user.id,
            },
          },
        },
      },
    })
    res.status(200).json({ data: projects })
  } catch (err) {
    return errorHandler(res, err, 'Unable to list projects')
  }
}

export default listProjects
