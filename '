import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"
import { userSelect } from "@/utils/selects/users"
const listProjectMembers = async (req: Request, res: Response) => {
  const { projectId } = req.params

  try {
    const members = await prisma.projectUser.findMany({
      where: {
        projectId,
      },
      select: {
        user: {
          select: userSelect,
        },
      },
    })
    return res.json({ message: "success", data: members })
  } catch (err) {
    return errorHandler(res, err, "Unable to get list of project members")
  }
}
export default listProjectMembers
