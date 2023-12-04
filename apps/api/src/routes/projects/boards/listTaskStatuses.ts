import { Request, Response } from "express"
import {
  GetBoardByIdParams,
  ListTaskStatusesResponse,
} from "shared/types/boards"

import prisma from "@/utils/db"
import errorHandler from "@/utils/errorHandler"

const listTaskStatuses = async (
  req: Request<GetBoardByIdParams, never, never, never>,
  res: Response<ListTaskStatusesResponse>
) => {
  const { id } = req.params

  try {
    const taskStatuses = await prisma.taskStatus.findMany({
      where: {
        boardId: id,
      },
      orderBy: {
        order: "asc",
      },
    })
    return res.json({ message: "success", data: taskStatuses })
  } catch (err) {
    return errorHandler(res, err, "Unable to find task statuses")
  }
}
export default listTaskStatuses
