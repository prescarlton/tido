import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

import { ClerkJWT } from "@/types/DecodedClerkJWT"

/* 
  Clerk's built-in middleware for express is dogwater, 
  so we have to manually verify the session.
*/
const verifyClerkSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // express uses the goofy ahh ParsedQ's type, which is incompatible
  // with clerk's middleware -- EVEN THOUGH THEIR DOCS DO THE SAME THING
  const clerkKey = process.env.CLERK_PEM_PUBLIC_KEY || ""
  const sessionToken = req.headers.authorization
  if (!sessionToken)
    return res.status(401).json({ message: "No token provided" })
  try {
    const decoded = jwt.verify(sessionToken, clerkKey) as ClerkJWT
    const { userId } = decoded
    res.locals.userClerkId = userId
  } catch (err) {
    console.error(err)
    return res.status(401).json({ message: "Unauthorized" })
  }
  return next()
}

export default verifyClerkSession
