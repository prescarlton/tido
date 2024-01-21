import { User } from "database"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"

const setActiveWorkspace = async (req: Request, res: Response) => {
  const { workspaceId } = req.params
  const user = req.user as User
  try {
    // make sure the user is apart of the workspace
    const workspaceUser = await prisma.workspaceUser.findFirst({
      where: {
        userId: user.id,
        workspaceId,
      },
      select: {
        workspace: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    if (!workspaceUser) {
      // what the hell!?! is this user trying to hack us????
      return res.status(404).json({ message: "Workspace not found" })
    }
    // if the user is legit, complete their request
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        activeWorkspaceId: workspaceId,
      },
    })

    return res.json({ message: "success", data: workspaceUser.workspace })
  } catch (err) {
    return errorHandler(res, err, "Unable to update active workspace.")
  }
}
export default setActiveWorkspace
