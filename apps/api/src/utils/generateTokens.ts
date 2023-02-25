import { Response } from 'express'

import { generateRefreshToken, generateToken } from './jwt'

const generateTokens = async (userId: string, res: Response) => {
  const accessToken = await generateToken(userId)
  const refreshToken = await generateRefreshToken(userId)

  res.cookie('accessToken', accessToken, {
    secure: process.env.NODE_ENV === 'production',
  })
  res.cookie('refreshToken', refreshToken, {
    secure: process.env.NODE_ENV === 'production',
  })
}

export default generateTokens
