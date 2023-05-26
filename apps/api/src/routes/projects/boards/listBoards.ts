import { Request, Response } from "express"
import { BoardListResponse } from "shared/types/boards"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const listBoards = async (req: Request, res: Response<BoardListResponse>) => {
  try {
    const { projectId } = req.params as { projectId: string }

    const boards = await prisma.board.findMany({
      where: {
        projectId,
      },
      select: {
        id: true,
        name: true,
        tasks: true,
      },
    })

    return res.status(200).json({
      message: "Success",
      data: boards,
      total: boards.length,
    })
  } catch (err) {
    return errorHandler(res, err, "Unable to list boards")
  }
}

export default listBoards
