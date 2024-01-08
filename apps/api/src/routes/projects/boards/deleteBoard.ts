import { Request, Response } from "express"
import { GetBoardByIdParams } from "shared/types/boards"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"

const deleteBoard = async (req: Request<GetBoardByIdParams>, res: Response) => {
  try {
    const { id } = req.params

    await prisma.board.delete({
      where: {
        id,
      },
    })

    return res.json({ message: "success" })
  } catch (err) {
    return errorHandler(res, err, "Unable to delete board")
  }
}

export default deleteBoard
