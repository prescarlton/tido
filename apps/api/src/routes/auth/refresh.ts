import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'
import generateTokens from '@/utils/generateTokens'
import { compareSync } from 'bcrypt'
import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

const refreshToken = async (req: Request, res: Response) => {
  try {
    // Get refresh token from headers
    const token = req.cookies.refreshToken

    if (!token) {
      return res.status(401).json({ message: 'No JWT provided' })
    }

    const jwtSecret: string | undefined = process.env.JWT_REFRESH_SECRET

    // Check for jwt secret
    if (!jwtSecret) {
      throw new Error('Missing JWT secret')
    }
    // Parse refresh token
    const parsedToken = verify(token, jwtSecret) || null

    // If parsedToken is null respond with 401
    if (!parsedToken) {
      return res.status(401).json({ message: 'Invalid refresh token' })
    }

    // Check to make sure parsed token
    const id = typeof parsedToken === 'object' && parsedToken?.id

    const user = await prisma.user.findFirst({
      select: {
        id: true,
        refreshToken: true,
      },
      where: {
        id: id,
        NOT: {
          refreshToken: null,
        },
      },
    })

    // If user not found or user does not have an active refresh token respond with 401
    if (!user || !user?.refreshToken) {
      return res.status(401).json({ message: 'Invalid refresh token' })
    }

    // Compare refresh tokens
    if (!compareSync(token, user?.refreshToken)) {
      return res.status(401).json({ message: 'Invalid refresh token' })
    }

    // generate login tokens
    await generateTokens(user.id, res)

    return res.status(200).json({
      message: 'Tokens refreshed',
      data: { id: user.id },
    })
  } catch (err) {
    return errorHandler(res, err, 'Error checking refresh token')
  }
}

export default refreshToken
