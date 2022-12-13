import prisma from '@/utils/db'
import { Request, Response } from 'express'

const getMe = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: res.locals.user.id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      username: true,
    },
  })
  return res.status(200).json({ message: 'Success', data: user })
}

export default getMe
