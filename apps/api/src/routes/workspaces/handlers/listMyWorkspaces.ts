import { User } from "database"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"

const listMyWorkspaces = async (req: Request, res: Response) => {
  const user = req.user as User
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
}
export default listMyWorkspaces
