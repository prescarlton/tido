import bcrypt from "bcrypt"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"
const acceptInvite = async (req: Request, res: Response) => {
  const { code, email, username, password } = req.body
  // first, make sure the invite is valid
  const invite = await prisma.workspaceInvite.findUnique({
    where: {
      code,
    },
  })
  if (!invite || invite.email != email) {
    return res.status(404).json({ message: "Invite code not found" })
  }
  // if the code exists and is for that user, carry on
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: hash,
      workspaces: {
        create: {
          workspaceId: invite.workspaceId,
        },
      },
    },
  })
  return req.login(user, (err) => {
    if (err) {
      return res.status(400).json({ message: "Login failed" })
    }
    return res.json({ message: "success" })
  })
}
export default acceptInvite
