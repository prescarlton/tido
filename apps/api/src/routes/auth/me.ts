import prisma from '@/utils/db'
import { Request, Response } from 'express'

const getMe = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: res.locals.user.id,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      username: true,
    },
  })
  return res.status(200).json(user)
}

export default getMe
