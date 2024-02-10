import { User } from "database"
import { Request, Response } from "express"

import errorHandler from "@/utils/errorHandler"
import getUserActiveWorkspace from "@/utils/getUserActiveWorkspace"
import { sendInviteEmail } from "@/utils/projects/emails/sendEmail"

const inviteUserToWorkspace = async (req: Request, res: Response) => {
  const user = req.user as User
  try {
    const workspace = await getUserActiveWorkspace(user.id)
    const { email } = req.body

    // try somethin crazy here
    await sendInviteEmail(email, workspace.name)
    return res.status(200).json({ message: "success" })
  } catch (err) {
    return errorHandler(res, err, "Unable to invite user to workspace")
  }
}
export default inviteUserToWorkspace
