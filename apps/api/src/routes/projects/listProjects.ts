import { Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const listProjects = async (_req: Request, res: Response) => {
  try {
    const userClerkId = res.locals.userClerkId
    const projects = await prisma.project.findMany({
      include: {
        members: true,
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
    res.json({ data: projects })
  } catch (err) {
    return errorHandler(res, err, "Unable to list projects")
  }
}

export default listProjects
