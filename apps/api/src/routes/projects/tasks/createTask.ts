import { Request, Response } from "express"
import { CreateTaskBody, CreateTaskParams } from "shared/types/tasks"

import prisma from "@/utils/db"

const createTask = async (
  req: Request<CreateTaskParams, never, CreateTaskBody>,
  res: Response
) => {
  const { boardId } = req.params
  const { name } = req.body
  const userClerkId = res.locals.userClerkId

  // find out what the highest task code is in this project
  const project = await prisma.project.findFirst({
    where: {
      boards: {
        some: {
          id: boardId,
        },
      },
    },
  })
  if (!project)
    return res
      .status(500)
      .json({ message: "Board is not attached to a project" })

  const highestTask = await prisma.task.findFirst({
    select: { code: true },
    where: { board: { projectId: project.id } },
    orderBy: {
      code: "desc",
    },
  })

  // if no task was found, this is the first task. code can be 1
  const code = highestTask?.code || 0
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userClerkId,
    },
  })
  if (!user) return res.status(400).json({ message: "User not found" })
  const task = await prisma.task.create({
    data: {
      boardId,
      name,
      createdByUserId: user.id,
      code: code + 1,
    },
  })

  return res.json({ message: "Task created successfully", data: task })
}

export default createTask
