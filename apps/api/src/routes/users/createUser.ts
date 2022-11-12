import prisma from '@/utils/db'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    },
  })
  return res.status(200).json(user)
}

export default createUser
