import { User } from "database"
import { Request, Response } from "express"
import { CreateTaskBody, CreateTaskParams } from "shared/types/tasks"

import prisma from "@/utils/db"
import createProjectActivity from "@/utils/projects/createProjectActivity"
import convertRawFromJSON from "@/utils/tasks/convertRawFromJSON"

const createTask = async (
  req: Request<CreateTaskParams, never, CreateTaskBody>,
  res: Response
) => {
  const { boardId } = req.params
  const { name, status, rawDescription } = req.body
  const user = req.user as User

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
  // find what the status of the task should be
  const defaultStatus = await prisma.taskStatus.findFirst({
    where: {
      projectId: project.id,
    },
    select: { id: true },
    orderBy: {
      order: "asc",
    },
    take: 1,
  })
  if (!defaultStatus)
    return res
      .status(400)
      .json({ message: "Your project does not have any valid statuses" })

  const textDescription = convertRawFromJSON(rawDescription)
  // if no task was found, this is the first task. code can be 1
  const code = highestTask?.code || 0
  const task = await prisma.task.create({
    data: {
      boardId,
      name,
      createdByUserId: user.id,
      code: code + 1,
      taskStatusId: Number(status) || defaultStatus.id,
      textDescription,
      rawDescription,
    },
  })
  // once the task has been created, update the project
  await createProjectActivity(
    project.id,
    user.id,
    `Created a task: ${task.name}`
  )
  return res.json({ message: "Task created successfully", data: task })
}

export default createTask
