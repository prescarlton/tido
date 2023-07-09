import { z } from "zod"

export const GetByIdRequestSchema = {
  params: z.object({
    id: z.string({ required_error: "ID is required" }),
  }),
}

// PARAMS
export type GetByIdParams = z.infer<typeof GetByIdRequestSchema.params>
