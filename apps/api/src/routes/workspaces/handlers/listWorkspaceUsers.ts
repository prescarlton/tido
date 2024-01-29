import { User } from "database"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"
import getUserActiveWorkspace from "@/utils/getUserActiveWorkspace"
import { userSelect } from "@/utils/selects/users"
const listWorkspaceUsers = async (req: Request, res: Response) => {
  const user = req.user as User
  try {
    const workspace = await getUserActiveWorkspace(user.id)

    // get all the workspaceUsers in it
    const users = await prisma.workspaceUser.findMany({
      where: {
        workspaceId: workspace.id,
      },
      select: {
        user: { select: userSelect },
      },
    })

    return res.json({ message: "success", data: users })
  } catch (err) {
    return errorHandler(res, err, "Unable to list workspace members")
  }
}
export default listWorkspaceUsers
