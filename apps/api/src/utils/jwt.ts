import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

import prisma from './db'

export const generateToken = async (userId: string) => {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET || 'secret',
    {
      expiresIn: '5m',
    }
  )
  return token
}

export const generateRefreshToken = async (userId: string) => {
  const refreshToken = jwt.sign(
    {
      userId,
    },
    process.env.JWT_REFRESH_SECRET || 'secret',
    {
      expiresIn: '7d',
    }
  )

  const salt = await bcrypt.genSalt(10)
  const hashedToken = await bcrypt.hash(refreshToken, salt)

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      refreshToken: hashedToken,
    },
  })

  return refreshToken
}
