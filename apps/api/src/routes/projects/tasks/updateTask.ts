import { User } from "database"
import { Request, Response } from "express"
import { isNaN } from "lodash"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskBody,
} from "shared/types/tasks"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"
import { taskDetailsInclude, taskInclude } from "@/utils/selects/tasks"
import convertRawFromJSON from "@/utils/tasks/convertRawFromJSON"
import createTaskActivity from "@/utils/tasks/createTaskActivity"

const updateTask = async (
  req: Request<GetTaskParams, never, UpdateTaskBody>,
  res: Response<GetTaskByIdResponse>,
) => {
  try {
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
    if (status && typeof status === "string" && isNaN(Number(status))) {
      // if the status isnt a number, we can assume we're trying to use the status name
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
    } else if (typeof status === "number" || !isNaN(Number(status))) {
      await prisma.task.update({
        where: {
          id: taskId,
        },
        data: {
          status: {
            connect: {
              id: Number(status),
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
  } catch (err) {
    return errorHandler(res, err, "Unable to update Task")
  }
}

export default updateTask
