import { Request, Response } from "express"
import { GetBoardByIdParams } from "shared/types/boards"

import prisma from "@/utils/db"

const deleteBoard = async (req: Request<GetBoardByIdParams>, res: Response) => {
  const { id } = req.params

  await prisma.board.delete({
    where: {
      id,
    },
  })

  return res.json({ message: "success" })
}

export default deleteBoard
