import { Request, Response } from "express"

const logout = async (req: Request, res: Response) => {
  const user = res.locals.user
  if (!user) {
    return res.status(400).json({ message: "No user found" })
  }

  res.clearCookie("accessToken")
  res.clearCookie("refreshToken")
  return res.json({ message: "Logged out" })
}

export default logout
