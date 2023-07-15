import { Request, Response } from "express"
import { UpdateTagBody, UpdateTagParams } from "shared/types/boards"

import prisma from "@/utils/db"

const updateTag = async (
  req: Request<UpdateTagParams, never, UpdateTagBody, never, never>,
  res: Response
) => {
  const body = req.body
  const { tagId } = req.params
  // make sure tag exists
  const tag = await prisma.taskTag.findUnique({
    where: {
      id: tagId,
    },
  })
  if (!tag) return res.status(404).json({ message: "Tag not found" })

  const updTag = await prisma.taskTag.update({
    where: {
      id: tag.id,
    },
    data: body,
  })

  return res.json({ message: "success", data: updTag })
}

export default updateTag
