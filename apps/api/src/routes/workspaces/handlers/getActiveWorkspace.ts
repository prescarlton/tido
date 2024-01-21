import { User } from "database"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"
const getActiveWorkspace = async (req: Request, res: Response) => {
  const user = req.user as User
  try {
    const pUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        activeWorkspace: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    if (!pUser) {
      return res.status(401).json({ message: "User not found" })
    }
    return res.json({ message: "success", data: pUser.activeWorkspace })
  } catch (err) {
    return errorHandler(res, err, "Unable to get active workspace")
  }
}

export default getActiveWorkspace
