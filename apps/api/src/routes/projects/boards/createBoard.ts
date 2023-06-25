import { Request, Response } from "express"
import { CreateBoardBody, CreateBoardParams } from "shared/types/boards"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const createBoard = async (
  req: Request<CreateBoardParams, never, CreateBoardBody, never>,
  res: Response
) => {
  const { projectId } = req.params as { projectId: string }
  const { name, color } = req.body

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  })

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    })
  }

  try {
    const board = await prisma.board.create({
      data: {
        name,
        projectId,
        color,
      },
      select: {
        projectId: true,
        id: true,
        name: true,
      },
    })

    return res.status(200).json({
      message: "Success",
      data: board,
    })
  } catch (err) {
    return errorHandler(res, err, "Unable to create board")
  }
}

export default createBoard
