import { z } from "zod"

export const AuthRequestSchema = {
  body: z.object({
    username: z
      .string({ required_error: "Username is required" })
      .min(1, { message: "Username is required" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, { message: "Password is required" }),
  }),
}

export type AuthRequestBody = z.infer<typeof AuthRequestSchema.body>
