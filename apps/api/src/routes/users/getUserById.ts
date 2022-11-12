import prisma from '@/utils/db'
import { Request, Response } from 'express'

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
    },
    where: {
      id: Number(id),
    },
  })
  return res.status(200).json(user)
}

export default getUserById
