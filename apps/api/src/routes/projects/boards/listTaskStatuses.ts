import { Request, Response } from "express"
import { ListTaskStatusesResponse } from "shared/types/boards"
import { GetProjectParams } from "shared/types/projects"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"

const listTaskStatuses = async (
  req: Request<GetProjectParams, never, never, never>,
  res: Response<ListTaskStatusesResponse>,
) => {
  const { projectId } = req.params

  try {
    const taskStatuses = await prisma.taskStatus.findMany({
      where: {
        projectId,
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
