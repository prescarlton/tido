import prisma from '@/utils/db'
import errorHandler from '@/utils/errorHandler'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const checkAppToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.accessToken
    let decodedToken: any

    if (!token) {
      return res.status(400).json({ message: 'No JWT Found' })
    }
    try {
      // if this fails, the token is invalid and we should return an error
      decodedToken = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    } catch (error) {
      let message = 'Error validating token'
      if (error instanceof Error && error.name === 'TokenExpiredError') {
        message = 'Token has expired'
      }
      return res.status(401).json({ message })
    }
    // if we couldn't decode the token, it's invalid
    if (!decodedToken) {
      return res.status(401).json({ message: 'Error validating JWT' })
    }

    const userData = prisma.user.findUnique({
      select: {
        id: true,
      },
      where: {
        id: decodedToken.userId,
      },
    })

    if (!userData) {
      return res.status(401).json({ message: 'Error getting user data' })
    }

    // if we made it this far, the user is good to go
    res.locals.user = userData
  } catch (error) {
    return errorHandler(res, error, 'Error validating JWT')
  }
  next()
}

export default checkAppToken
