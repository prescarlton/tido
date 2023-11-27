import { Request, Response } from "express"

const logout = async (req: Request, res: Response) => {
  res.clearCookie("accessToken")
  res.clearCookie("refreshToken")
  req.logout(function () {
    return res.json({ message: "Logged out" })
  })
}

export default logout
