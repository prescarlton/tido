import { Request, Response } from "express"
import { GetTaskParams } from "shared/types/tasks"

import prisma from "@/utils/db"

const deleteTask = async (req: Request<GetTaskParams>, res: Response) => {
  const { taskId } = req.params

  const task = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      archived: true,
    },
  })

  if (!task) return res.status(404).json({ message: "Task not found" })

  return res.json({ message: "success" })
}

export default deleteTask
