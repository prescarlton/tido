import { resend } from "."
import { workspaceInviteTemplate } from "./templates/workspaceInvite"

const sendEmail = async (to: string, subject: string, html: string) => {
  return resend.emails.send({
    from: "invites@tido.work",
    to,
    subject,
    html,
  })
}

export const sendInviteEmail = async (
  to: string,
  workspaceName: string,
  code: string,
) => {
  const subject = `Tido - You have been invited to join ${workspaceName}`
  const link = `${process.env.APP_URL}/accept-invite?code=${code}`
  const html = workspaceInviteTemplate({ workspaceName, link })
  await sendEmail(to, subject, html)
}
