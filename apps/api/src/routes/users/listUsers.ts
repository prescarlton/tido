import prisma from '@/utils/db'
import { Request, Response } from 'express'

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
