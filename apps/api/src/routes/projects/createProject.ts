import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const createProject = async (req: Request, res: Response) => {
  const { name } = req.body as {
    name: string
  }
  const user = await prisma.user.findUnique({
    where: {
      clerkId: res.locals.userClerkId,
    },
  })
  if (!user) return res.status(401).json({ message: "User not found" })
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

    return res.json({ message: "Project created", data: project })
  } catch (error) {
    return errorHandler(res, error, "Error creating project")
  }
}

export default createProject
