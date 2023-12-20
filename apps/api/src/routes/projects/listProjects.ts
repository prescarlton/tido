import { User } from "database"
import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"
import { userSelect } from "@/utils/selects/users"

const listProjects = async (req: Request, res: Response) => {
  try {
    const user = req.user as User
    const projects = await prisma.project.findMany({
      include: {
        members: {
          include: {
            user: {
              select: userSelect,
            },
          },
        },
        activity: {
          take: 1,
          orderBy: {
            created: "desc",
          },
        },
      },
      where: {
        members: {
          some: {
            userId: user.id,
          },
        },
      },
      orderBy: {
        updated: "asc",
      },
    })
    return res.json({ data: projects })
  } catch (err) {
    return errorHandler(res, err, "Unable to list projects")
  }
}

export default listProjects
