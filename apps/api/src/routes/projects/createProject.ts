import { User } from "@prisma/client"
import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

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
      },
    })

    return res.status(200).json({ message: "Project created", data: project })
  } catch (error) {
    return errorHandler(res, error, "Error creating project")
  }
}

export default createProject
