import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const getProjectById = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params as { projectId: string }
    const user = await prisma.user.findUnique({
      where: {
        clerkId: res.locals.userClerkId,
      },
    })
    if (!user) return res.status(401).json({ message: "User not found" })
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        userFavorites: {
          where: {
            userId: user.id,
          },
        },
      },
    })

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      })
    }
    const data = {
      ...project,
      favorited: Boolean(project.userFavorites.length),
    }

    return res.json({ message: "Success", data })
  } catch (err) {
    return errorHandler(res, err, "Unable to get project")
  }
}

export default getProjectById
