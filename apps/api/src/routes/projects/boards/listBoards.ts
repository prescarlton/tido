import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'
import { Request, Response } from 'express'

const listBoards = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params as { projectId: string }

    const boards = await prisma.board.findMany({
      where: {
        projectId,
      },
    })

    return res.status(200).json({
      message: 'Success',
      data: boards,
    })
  } catch (err) {
    return errorHandler(res, err, 'Unable to list boards')
  }
}

export default listBoards
