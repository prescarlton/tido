import { Request, Response } from "express"
import { CompleteTaskBody, CompleteTaskParams } from "shared/types/tasks"

import { prisma } from "@/prismaConnection"

const completeTask = async (
  req: Request<CompleteTaskParams, never, CompleteTaskBody>,
  res: Response,
) => {
  const { taskId } = req.params
  const { complete } = req.body

  const task = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      complete,
    },
  })

  if (!task) return res.status(404).json({ message: "Task not found" })

  return res.json({ message: "success", data: task })
}

export default completeTask
