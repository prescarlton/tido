import { Request, Response } from "express"
import { UpdateTagParams } from "shared/types/boards"

import { prisma } from "@/prismaConnection"

const deleteTag = async (
  req: Request<UpdateTagParams, never, never, never, never>,
  res: Response,
) => {
  const { tagId } = req.params
  // make sure tag exists first
  const tag = await prisma.taskTag.findUnique({
    where: {
      id: tagId,
    },
  })
  if (!tag) return res.status(404).json({ message: "Tag not found" })

  await prisma.taskTag.delete({
    where: {
      id: tagId,
    },
  })

  return res.json({ message: "success" })
}
export default deleteTag
