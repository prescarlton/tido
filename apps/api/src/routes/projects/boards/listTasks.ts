import { Request, Response } from "express"
import {
  ListTasksParams,
  ListTasksQuery,
  ListTasksResponse,
} from "shared/types/tasks/index"

import { prisma } from "@/prismaConnection"
import errorHandler from "@/utils/errorHandler"
import { taskInclude } from "@/utils/selects/tasks"

const listTasks = async (
  req: Request<ListTasksParams, never, never, ListTasksQuery>,
  res: Response<ListTasksResponse>,
) => {
  try {
    const { boardId } = req.params
    const { search, tags: rawTags, sortColumn, sortDir } = req.query
    const tags = (rawTags as string)
      ?.split(",")
      .filter((val) => Boolean(val))
      .map((tag) => Number(tag))
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
            tags: {
              some: {
                id: {
                  in: tags,
                },
              },
            },
          }
          : {}),
      },
      orderBy: [
        {
          complete: "asc",
        },
        {
          ...(sortColumn !== "status"
            ? {
              [sortColumn || "updated"]: sortDir || "desc",
            }
            : {
              status: {
                order: sortDir || "asc",
              },
            }),
        },
      ],
      include: taskInclude,
    })

    return res.json({ data: tasks })
  } catch (err) {
    return errorHandler(res, err, "Unable to list tasks")
  }
}

export default listTasks
