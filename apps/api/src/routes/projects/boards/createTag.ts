import { Request, Response } from "express"
import { CreateTagBody, CreateTagParams } from "shared/types/boards"

import { prisma } from "@/prismaConnection"

const createTag = async (
  req: Request<CreateTagParams, never, CreateTagBody, never>,
  res: Response,
) => {
  const body = req.body
  const { boardId } = req.params

  const tag = await prisma.taskTag.create({
    data: {
      ...body,
      boardId,
    },
    select: {
      id: true,
      name: true,
      color: true,
    },
  })

  return res.json({ message: "success", data: tag })
}
export default createTag
