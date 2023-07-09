import { Request, Response } from "express"
import { GetByIdParams } from "shared/types/shared"
import { GetTaskByIdResponse } from "shared/types/tasks"

import prisma from "@/utils/db"
import { userSelect } from "@/utils/selects/users"

const getTaskById = async (
  req: Request<GetByIdParams>,
  res: Response<GetTaskByIdResponse>
) => {
  const { id } = req.params
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
    include: {
      createdBy: {
        select: userSelect,
      },
    },
  })
  if (!task) return res.status(404).json({ message: "Task not found" })

  return res.json({ message: "success", data: task })
}
export default getTaskById
