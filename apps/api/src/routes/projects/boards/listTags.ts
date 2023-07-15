import { Request, Response } from "express"
import { GetBoardByIdParams, ListTagsResponse } from "shared/types/boards"

import prisma from "@/utils/db"

const listTags = async (
  req: Request<GetBoardByIdParams, never, never, never>,
  res: Response<ListTagsResponse>
) => {
  const { id } = req.params

  const tags = await prisma.taskTag.findMany({
    where: {
      boardId: id,
    },
    select: {
      id: true,
      name: true,
      color: true,
    },
  })

  return res.json({ message: "success", data: tags })
}

export default listTags
