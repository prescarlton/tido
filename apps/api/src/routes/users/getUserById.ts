import prisma from '@/utils/db'
import { Request, Response } from 'express'

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
    where: {
      id,
    },
  })
  return res.status(200).json(user)
}

export default getUserById