import { Request, Response } from "express"
import { GetTaskParams } from "shared/types/tasks"

import { prisma } from "@/prismaConnection"
import { userSelect } from "@/utils/selects/users"

const getTaskActivity = async (req: Request<GetTaskParams>, res: Response) => {
  const { taskId } = req.params
  const activity = await prisma.taskActivity.findMany({
    where: {
      taskId,
    },
    include: {
      user: {
        select: userSelect,
      },
    },
    orderBy: {
      created: "desc",
    },
  })

  return res.json({ message: "success", data: activity })
}

export default getTaskActivity
