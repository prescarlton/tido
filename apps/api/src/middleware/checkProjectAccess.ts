import { NextFunction, Request, Response } from "express"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const checkProjectAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { projectId } = req.params as { projectId: string }
    const userClerkId = res.locals.userClerkId

    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      select: {
        members: {
          select: {
            user: {
              select: {
                clerkId: true,
              },
            },
            projectId: true,
          },
        },
      },
    })

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      })
    }

    // Check if user is a member of the project, if not, return 403
    const isMember = project.members.some(
      (member) => member.user.clerkId === userClerkId
    )
    if (!isMember) {
      return res.status(403).json({
        message: "You do not have access to this project",
      })
    }

    // if we made it this far, the user is a member of the project
    return next()
  } catch (err) {
    return errorHandler(res, err, "Unable to check project access")
  }
}

export default checkProjectAccess
