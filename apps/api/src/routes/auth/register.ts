import prisma from '@/utils/db'
import generateTokens from '@/utils/generateTokens'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string }
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
    },
  })
  await generateTokens(newUser.id, res)
  return res.status(200).json({ message: 'User created', data: newUser })
}

export default register
