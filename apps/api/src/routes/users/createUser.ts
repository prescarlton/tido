import prisma from '@/utils/db'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, username } = req.body
  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      username,
      password: bcrypt.hashSync(password, 10),
    },
  })
  return res.status(200).json(user)
}

export default createUser
