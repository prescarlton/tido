import { User } from "database"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"

const listMyWorkspaces = async (req: Request, res: Response) => {
  const user = req.user as User
  try {
    const workspaces = await prisma.workspace.findMany({
      where: {
        workspaceUser: {
          some: {
            userId: user.id,
          },
        },
      },
    })

    return res.json({ message: "success", data: workspaces })
  } catch (err) {
    return errorHandler(res, err, "Unable to list your workspaces.")
  }
}
export default listMyWorkspaces
