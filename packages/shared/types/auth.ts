import { z } from 'zod'

export const AuthRequestSchema = {
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
}

export type AuthRequestBody = z.infer<typeof AuthRequestSchema.body>
