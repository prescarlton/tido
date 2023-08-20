import { JSONContent } from "@tiptap/core"
import { Request, Response } from "express"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskBody,
} from "shared/types/tasks"

import prisma from "@/utils/db"
import { taskTagSelect } from "@/utils/selects/tasks"
import { userSelect } from "@/utils/selects/users"
import convertRawFromJSON from "@/utils/tasks/convertRawFromJSON"
import createTaskActivity from "@/utils/tasks/createTaskActivity"

const updateTask = async (
  req: Request<GetTaskParams, never, UpdateTaskBody>,
  res: Response<GetTaskByIdResponse>
) => {
  const { taskId } = req.params
  const { name, rawDescription } = req.body

  const task = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  })
  if (!task) return res.status(404).json({ message: "Task not found" })

  // convert that raw description to text
  const textDescription = convertRawFromJSON(rawDescription)

  const updTask = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      name,
      rawDescription,
      textDescription,
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
  await createTaskActivity(task, { ...req.body, textDescription }, req)

  return res.json({ message: "success", data: updTask })
}

export default updateTask
