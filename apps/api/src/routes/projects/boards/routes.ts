import { Router } from "express"
import { RenameBoardSchema } from "shared/types/boards"
import { processRequest } from "zod-express-middleware"

import renameBoard from "@/routes/projects/boards/renameBoard"
import TaskRouter from "@/routes/projects/tasks/routes"

import createBoard from "./createBoard"
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

export default BoardRouter
