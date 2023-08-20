import { User } from "@prisma/client"
import { Request, Response } from "express"

import prisma from "@/utils/db"

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
  return res.status(200).json({ message: "Success", data: user })
}

export default getMe
