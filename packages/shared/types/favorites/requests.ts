import { Request } from "express"
import { z } from "zod"

export const FavoriteProjectRequestSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
  }),
  body: z.object({
    favorite: z.boolean({ required_error: "Favorite is required" }),
  }),
}

export type FavoriteProjectRequestParms = z.infer<
  typeof FavoriteProjectRequestSchema.params
>
export type FavoriteProjectRequestBody = z.infer<
  typeof FavoriteProjectRequestSchema.body
>

export type FavoriteProjectRequest = Request<
  FavoriteProjectRequestParms,
  never,
  FavoriteProjectRequestBody,
  never
>
