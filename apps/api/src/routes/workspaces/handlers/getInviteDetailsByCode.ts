import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"

const getInviteDetailsByCode = async (req: Request, res: Response) => {
  const { code } = req.params
  // find the dern thing
  const invite = await prisma.workspaceInvite.findUnique({
    where: {
      code,
    },
    include: {
      workspace: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })
  if (!invite) {
    return res.status(404).json({ message: "Invite not found" })
  }

  // if we do find the invite, we want the email addy and the workspace
  // they were invited to.

  return res.json({ message: "success", data: invite })
}

export default getInviteDetailsByCode
