import { resend } from "."

const sendEmail = async (to: string, subject: string, html: string) => {
  return resend.emails.send({
    from: "invites@tido.work",
    to,
    subject,
    html,
  })
}

export const sendInviteEmail = async (to: string, workspaceName: string) => {
  const subject = `Tido - You have been invited to join ${workspaceName}`
  const html = `
<h1>welcome to tido.</h1>
<p>You have been invited to join ${workspaceName}</p>`
  return sendEmail(to, subject, html)
}
