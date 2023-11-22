import { Request, Response } from "express"
import {
  ListTasksParams,
  ListTasksQuery,
  ListTasksResponse,
} from "shared/types/tasks/index"

import prisma from "@/utils/db"
import { taskTagSelect } from "@/utils/selects/tasks"
import { userSelect } from "@/utils/selects/users"

const listTasks = async (
  req: Request<ListTasksParams, never, never, ListTasksQuery>,
  res: Response<ListTasksResponse>
) => {
  const { boardId } = req.params
  const { search, tags: rawTags, sortColumn, sortDir } = req.query

  const tags = (rawTags as string)?.split(",").filter((val) => Boolean(val))
  // find all non-archived tasks in specified board
  const tasks = await prisma.task.findMany({
    where: {
      boardId,
      archived: false,
      OR: [
        {
          name: {
            contains: search,
          },
        },
        {
          textDescription: {
            contains: search,
          },
        },
      ],
      ...(tags?.length
        ? {
            AND: [
              ...tags.map((tag) => ({
                tags: {
                  some: {
                    id: tag,
                  },
                },
              })),
            ],
          }
        : {}),
    },
    orderBy: [
      {
        complete: "asc",
      },
      {
        [sortColumn || "updated"]: sortDir || "desc",
      },
    ],
    include: {
      createdBy: {
        select: userSelect,
      },
      tags: {
        select: taskTagSelect,
      },
    },
  })

  return res.json({ data: tasks })
}

export default listTasks
