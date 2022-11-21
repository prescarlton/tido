import { Response } from 'express'
import { generateRefreshToken, generateToken } from './jwt'

const generateTokens = async (userId: string, res: Response) => {
  const accessToken = await generateToken(userId)
  const refreshToken = await generateRefreshToken(userId)

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 15, // 15 m
  })
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  })
}

export default generateTokens
