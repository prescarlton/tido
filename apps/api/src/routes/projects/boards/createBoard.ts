import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'
import { Request, Response } from 'express'

const createBoard = async (req: Request, res: Response) => {
  const { projectId } = req.params as { projectId: string }
  const { name } = req.body as { name: string }

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  })

  if (!project) {
    return res.status(404).json({
      message: 'Project not found',
    })
  }

  try {
    const board = await prisma.board.create({
      data: {
        name,
        projectId,
      },
      select: {
        projectId: true,
        id: true,
        name: true,
      },
    })

    return res.status(200).json({
      message: 'Success',
      data: board,
    })
  } catch (err) {
    return errorHandler(res, err, 'Unable to create board')
  }
}

export default createBoard
