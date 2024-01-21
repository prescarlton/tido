import { User } from "database"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"
import getUserActiveWorkspace from "@/utils/getUserActiveWorkspace"
import { userSelect } from "@/utils/selects/users"

const listProjects = async (req: Request, res: Response) => {
  try {
    const user = req.user as User
    // only get the projects in the workspace the user has as "active"
    const activeWorkspace = await getUserActiveWorkspace(user.id)
    const projects = await prisma.project.findMany({
      include: {
        users: {
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
        workspaceId: activeWorkspace?.id,
        users: {
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
