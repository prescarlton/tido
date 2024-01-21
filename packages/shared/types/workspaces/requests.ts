import { z } from "zod"

export const SetMyActiveWorkspaceSchema = {
  params: z.object({
    workspaceId: z.string({ required_error: "Workspace ID is required" }),
  }),
}

export type SetMyActiveWorkspaceParams = z.infer<
  typeof SetMyActiveWorkspaceSchema.params
>
