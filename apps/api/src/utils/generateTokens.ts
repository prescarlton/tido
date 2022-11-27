import { Response } from 'express'
import { generateRefreshToken, generateToken } from './jwt'

const generateTokens = async (userId: string, res: Response) => {
  const accessToken = await generateToken(userId)
  const refreshToken = await generateRefreshToken(userId)

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
  })
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
  })
}

export default generateTokens
