import { Request, Response } from "express"
import {
  GetTaskByIdResponse,
  UpdateTaskTagsBody,
  UpdateTaskTagsParams,
} from "shared/types/tasks"

import prisma from "@/utils/db"
import { taskTagSelect } from "@/utils/selects/tasks"
import { userSelect } from "@/utils/selects/users"

const updateTaskTags = async (
  req: Request<UpdateTaskTagsParams, never, UpdateTaskTagsBody, never, never>,
  res: Response<GetTaskByIdResponse>
) => {
  const { tags } = req.body
  const { taskId } = req.params

  // make sure the task exists first
  const task = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  })
  if (!task) return res.status(404).json({ message: "Task not found" })
  // if the task exists, let's go ahead and update it

  const updTask = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      tags: {
        set: tags.map((tag) => ({ id: tag })),
      },
    },
    include: {
      tags: {
        select: taskTagSelect,
      },
      createdBy: {
        select: userSelect,
      },
    },
  })

  return res.json({ message: "success", data: updTask })
}

export default updateTaskTags
