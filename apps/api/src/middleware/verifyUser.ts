import { NextFunction, Request, Response } from "express"

const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next()
  // Consider showing either an error, or simply redirect the user to log in page
  return res.status(401).json({ message: "Unauthorized" })
}

export default verifyUser
