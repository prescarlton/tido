import { User } from "database"
import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"

const getMe = async (req: Request, res: Response) => {
  const id = (req.user as User)?.id
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      username: true,
    },
  })
  return res.json({ message: "Success", data: user })
}

export default getMe
