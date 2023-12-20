import { User } from "database"
import { Request, Response } from "express"
import { GetMyFavoritesResponse } from "shared/types/favorites"

import prisma from "@/utils/db"
import { projectSelect } from "@/utils/selects/projects"

const getMyFavorites = async (
  req: Request,
  res: Response<GetMyFavoritesResponse>,
) => {
  const user = req.user as User

  const projects = await prisma.userFavoriteProject.findMany({
    where: {
      user: {
        id: user.id,
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
