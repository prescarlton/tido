import { Request, Response } from "express"

import { prisma } from "@/prismaConnection"

const listUsers = async (request: Request, response: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
  })
  return response.json(users)
}

export default listUsers
