import { Request, Response } from "express"
import { RenameBoardBody, RenameBoardParams } from "shared/types/boards"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const renameBoard = async (
  req: Request<RenameBoardParams, never, RenameBoardBody>,
  res: Response
) => {
  const { name } = req.body
  const { boardId } = req.params

  // throw a fit if the board doesn't exist
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
  })
  if (!board) return res.status(404).json({ message: "Board not found" })
  // if it does exist, update it
  try {
    await prisma.board.update({
      where: {
        id: board.id,
      },
      data: {
        name,
      },
    })
    return res.json({ message: "success" })
  } catch (err) {
    return errorHandler(res, err, "Unable to rename board")
  }
}
export default renameBoard
