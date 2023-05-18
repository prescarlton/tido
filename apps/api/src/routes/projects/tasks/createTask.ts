import { Request, Response } from "express"
import { CreateTaskBody, CreateTaskParams } from "shared/types/tasks"

import prisma from "@/utils/db"

const createTask = async (
  req: Request<CreateTaskParams, never, CreateTaskBody>,
  res: Response
) => {
  const { boardId } = req.params
  const { name } = req.body

  const task = await prisma.task.create({
    data: {
      boardId,
      name,
    },
  })

  return res.json({ message: "Task created successfully", data: task })
}

export default createTask
