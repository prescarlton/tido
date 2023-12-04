import { Router } from "express"
import {
  CreateTagSchema,
  DeleteTagSchema,
  GetBoardByIdRequestSchema,
  RenameBoardSchema,
  UpdateTagSchema,
} from "shared/types/boards"
import { processRequest } from "zod-express-middleware"

import createTag from "@/routes/projects/boards/createTag"
import deleteTag from "@/routes/projects/boards/deleteTag"
import listTags from "@/routes/projects/boards/listTags"
import renameBoard from "@/routes/projects/boards/renameBoard"
import updateTag from "@/routes/projects/boards/updateTag"
import TaskRouter from "@/routes/projects/tasks/routes"

import createBoard from "./createBoard"
import deleteBoard from "./deleteBoard"
import getBoardById from "./getBoardById"
import listBoards from "./listBoards"
import listTaskStatuses from "./listTaskStatuses"

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
BoardRouter.get(
  "/:id/statuses",
  processRequest(GetBoardByIdRequestSchema),
  listTaskStatuses
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
BoardRouter.put(
  "/:boardId/tags/:tagId",
  processRequest(UpdateTagSchema),
  updateTag
)

// delete
BoardRouter.delete(
  "/:id",
  processRequest(GetBoardByIdRequestSchema),
  deleteBoard
)
BoardRouter.delete(
  "/:boardId/tags/:tagId",
  processRequest(DeleteTagSchema),
  deleteTag
)

export default BoardRouter
