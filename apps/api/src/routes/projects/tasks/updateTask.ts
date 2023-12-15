import { User } from "@prisma/client"
import { Request, Response } from "express"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskBody,
} from "shared/types/tasks"

import prisma from "@/utils/db"
import { taskDetailsInclude, taskInclude } from "@/utils/selects/tasks"
import convertRawFromJSON from "@/utils/tasks/convertRawFromJSON"
import createTaskActivity from "@/utils/tasks/createTaskActivity"

const updateTask = async (
  req: Request<GetTaskParams, never, UpdateTaskBody>,
  res: Response<GetTaskByIdResponse>
) => {
  const { taskId, projectId } = req.params
  const { name, rawDescription, status } = req.body
  const user = req.user as User
  const userId = user.id

  const task = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  })
  if (!task) return res.status(404).json({ message: "Task not found" })

  // convert that raw description to text
  const textDescription = convertRawFromJSON(rawDescription)

  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      name,
      rawDescription,
      textDescription,
    },
    include: taskInclude,
  })
  // if we've provided status and its a string, lets find the status we're tryna update to
  if (status && typeof status === "string") {
    await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        status: {
          connect: {
            projectId_name: {
              projectId,
              name: status,
            },
          },
        },
      },
    })
  } else if (typeof status === "number") {
    await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        status: {
          connect: {
            id: status,
          },
        },
      },
    })
  }

  const updTask = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
    include: taskDetailsInclude,
  })
  if (!updTask) return res.status(404).json({ message: "Task not found." })

  // once we've updated the task, update the activity log
  await createTaskActivity(task, { ...req.body, textDescription }, userId)

  return res.json({ message: "success", data: updTask })
}

export default updateTask
