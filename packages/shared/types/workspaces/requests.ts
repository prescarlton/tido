import { z } from "zod"

export const SetMyActiveWorkspaceSchema = {
  params: z.object({
    workspaceId: z.string({ required_error: "Workspace ID is required" }),
  }),
}

export type SetMyActiveWorkspaceParams = z.infer<
  typeof SetMyActiveWorkspaceSchema.params
>

export const InviteUserToWorkspaceSchema = {
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email" }),
  }),
}
export type InviteUserToWorkspaceBody = z.infer<
  typeof InviteUserToWorkspaceSchema.body
>
