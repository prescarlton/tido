import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"
import { userSelect } from "@/utils/selects/users"

const listProjects = async (_req: Request, res: Response) => {
  try {
    const userClerkId = res.locals.userClerkId
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
            user: {
              clerkId: userClerkId,
            },
          },
        },
      },
    })
    return res.json({ data: projects })
  } catch (err) {
    return errorHandler(res, err, "Unable to list projects")
  }
}

export default listProjects
