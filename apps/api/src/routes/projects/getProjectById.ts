import { User } from "@prisma/client"
import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const getProjectById = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params as { projectId: string }
    const userId = (req.user as User)?.id
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        userFavorites: {
          where: {
            userId,
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
