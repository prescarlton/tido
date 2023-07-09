import { Request, Response } from "express"
import { ListTasksParams, ListTasksResponse } from "shared/types/tasks/index"

import prisma from "@/utils/db"
import { userSelect } from "@/utils/selects/users"

const listTasks = async (
  req: Request<ListTasksParams>,
  res: Response<ListTasksResponse>
) => {
  const { boardId } = req.params

  // find all tasks in specified board
  const tasks = await prisma.task.findMany({
    where: {
      boardId,
    },
    orderBy: {
      complete: "asc",
    },
    include: {
      createdBy: {
        select: userSelect,
      },
    },
  })

  return res.json({ data: tasks })
}

export default listTasks
