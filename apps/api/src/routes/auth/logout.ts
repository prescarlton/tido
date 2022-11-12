import prisma from '@/utils/db'
import { Request, Response } from 'express'

const logout = async (req: Request, res: Response) => {
  const user = res.locals.user
  if (!user) {
    return res.status(400).json({ message: 'No user found' })
  }
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: null,
    },
  })

  res.clearCookie('accessToken')
  res.clearCookie('refreshToken')
  res.status(200).json({ message: 'Logged out' })
}

export default logout
