import { Request, Response } from "express"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskBody,
} from "shared/types/tasks"

import prisma from "@/utils/db"
import { taskTagSelect } from "@/utils/selects/tasks"
import { userSelect } from "@/utils/selects/users"
import createTaskActivity from "@/utils/tasks/createTaskActivity"

const updateTask = async (
  req: Request<GetTaskParams, never, UpdateTaskBody>,
  res: Response<GetTaskByIdResponse>
) => {
  const { taskId } = req.params
  const { name, description } = req.body

  const task = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  })
  if (!task) return res.status(404).json({ message: "Task not found" })

  const updTask = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      name,
      description,
    },
    include: {
      createdBy: {
        select: userSelect,
      },
      tags: {
        select: taskTagSelect,
      },
    },
  })

  // once we've updated the task, update the activity log
  await createTaskActivity(task, req.body, req)

  return res.json({ message: "success", data: updTask })
}

export default updateTask
