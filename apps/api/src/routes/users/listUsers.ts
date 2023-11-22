import { Request, Response } from "express"

import prisma from "@/utils/db"

const listUsers = async (request: Request, response: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      clerkId: true,
    },
  })
  return response.json(users)
}

export default listUsers
