import { Router } from "express"
import {
  GetBoardByIdRequestSchema,
  RenameBoardSchema,
} from "shared/types/boards"
import { processRequest } from "zod-express-middleware"

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

// post
BoardRouter.post("/", createBoard)

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
