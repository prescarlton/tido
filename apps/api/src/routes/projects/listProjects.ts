import prisma from '@/utils/db'
import { Request, Response } from 'express'

const listProjects = async (req: Request, res: Response) => {
  const projects = await prisma.project.findMany({
    where: {
      ownerId: res.locals.user.id,
    },
  })
  res.status(200).json({ data: projects })
}

export default listProjects
