import { Request, Response } from "express"
import { GetMyFavoritesResponse } from "shared/types/favorites"

import prisma from "@/utils/db"
import { projectSelect } from "@/utils/selects/projects"

const getMyFavorites = async (
  _req: Request,
  res: Response<GetMyFavoritesResponse>
) => {
  const userClerkId = res.locals.userClerkId

  const projects = await prisma.userFavoriteProject.findMany({
    where: {
      user: {
        clerkId: userClerkId,
      },
    },
    select: {
      project: {
        select: projectSelect,
      },
    },
  })

  const data = {
    projects: projects.map((proj) => proj.project),
  }

  return res.json({ message: "success", data })
}
export default getMyFavorites
