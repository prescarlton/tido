import { User } from "database"
import { Response } from "express"
import { FavoriteProjectRequest } from "shared/types/favorites"

import prisma from "@/utils/db"

const favoriteProject = async (req: FavoriteProjectRequest, res: Response) => {
  const { projectId } = req.params
  const { favorite } = req.body
  const user = req.user as User
  if (!user) return res.status(401).json({ message: "User not found" })
  const userId = user.id
  // make sure project exists first and that the user is a member of it
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      members: {
        some: {
          userId,
        },
      },
    },
  })
  if (!project) return res.status(404).json({ message: "Project not found" })

  // if the project does exist,update its favorite status for this user
  if (favorite)
    await prisma.userFavoriteProject.create({
      data: {
        userId,
        projectId,
      },
    })
  else
    await prisma.userFavoriteProject.delete({
      where: {
        userId_projectId: {
          userId,
          projectId,
        },
      },
    })

  return res.json({ message: "success" })
}
export default favoriteProject
