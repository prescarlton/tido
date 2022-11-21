import prisma from '@/utils/db'
import bcrypt from 'bcrypt'

import { Request, Response } from 'express'
import generateTokens from '@/utils/generateTokens'

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      password: true,
    },
  })
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  const validPassword = await bcrypt.compare(password, user?.password)

  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }
  // if we made it this far, the user should be authenticated

  await generateTokens(user.id, res)
  // make another request for the user data w/o the password
  const userData = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      username: true,
    },
  })

  return res.status(200).json({ message: 'Authenticated', data: userData })
}

export default login
