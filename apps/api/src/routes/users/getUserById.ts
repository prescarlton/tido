import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      id,
    },
  })
  return res.json(user)
}

export default getUserById
