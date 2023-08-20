import { Request, Response } from "express"

import prisma from "@/utils/db"

const listUsers = async (request: Request, response: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      username: true,
      firstName: true,
      lastName: true,
    },
  })
  return response.status(200).json(users)
}

export default listUsers
