import { Request, Response } from 'express'

import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'

const getBoardById = async (req: Request, res: Response) => {
  const { boardId } = req.params as { boardId: string }
  try {
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    })
    return res.status(200).json({
      message: 'Success',
      data: board,
    })
  } catch (err) {
    return errorHandler(res, err, 'Unable to get board')
  }
}

export default getBoardById
