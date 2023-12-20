import { User } from "database"
import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"
import { defaultTaskStatuses } from "@/utils/tasks/defaultTaskStatuses"

const createProject = async (req: Request, res: Response) => {
  const { name } = req.body as {
    name: string
  }
  const user = req.user as User
  try {
    const project = await prisma.project.create({
      data: {
        name,
        members: {
          create: {
            userId: user.id,
            role: "ADMIN",
          },
        },
        activity: {
          create: {
            message: "Project created",
          },
        },
      },
    })
    // once we got that lil fella in dea, create some statuses
    await prisma.taskStatus.createMany({
      data: defaultTaskStatuses.map((stat) => ({
        name: stat.name,
        color: stat.color,
        order: stat.order,
        projectId: project.id,
      })),
    })
    return res.json({ message: "Project created", data: project })
  } catch (error) {
    return errorHandler(res, error, "Error creating project")
  }
}

export default createProject
