import { Request, Response } from "express"
import { CreateBoardBody, CreateBoardParams } from "shared/types/boards"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"
import { defaultTaskStatuses } from "@/utils/tasks/defaultTaskStatuses"

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
    // once board is created, give it some default statuses as well
    await prisma.taskStatus.createMany({
      data: defaultTaskStatuses.map((stat) => ({
        name: stat.name,
        color: stat.color,
        order: stat.order,
        boardId: board.id,
      })),
    })

    return res.json({
      message: "Success",
      data: board,
    })
  } catch (err) {
    return errorHandler(res, err, "Unable to create board")
  }
}

export default createBoard
