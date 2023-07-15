import { Router } from "express"
import {
  CreateTagSchema,
  GetBoardByIdRequestSchema,
  RenameBoardSchema,
} from "shared/types/boards"
import { processRequest } from "zod-express-middleware"

import createTag from "@/routes/projects/boards/createTag"
import listTags from "@/routes/projects/boards/listTags"
import renameBoard from "@/routes/projects/boards/renameBoard"
import TaskRouter from "@/routes/projects/tasks/routes"

import createBoard from "./createBoard"
import deleteBoard from "./deleteBoard"
import getBoardById from "./getBoardById"
import listBoards from "./listBoards"

const BoardRouter: Router = Router({ mergeParams: true })

BoardRouter.use("/:boardId/tasks", TaskRouter)

// get
BoardRouter.get("/", listBoards)
BoardRouter.get("/:boardId", getBoardById)
BoardRouter.get(
  "/:id/tags",
  processRequest(GetBoardByIdRequestSchema),
  listTags
)

// post
BoardRouter.post("/", createBoard)
BoardRouter.post("/:boardId/tags", processRequest(CreateTagSchema), createTag)

// put
BoardRouter.put(
  "/:boardId/rename",
  processRequest(RenameBoardSchema),
  renameBoard
)

// delete
BoardRouter.delete(
  "/:id",
  processRequest(GetBoardByIdRequestSchema),
  deleteBoard
)

export default BoardRouter
