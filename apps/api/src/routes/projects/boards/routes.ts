import { Router } from "express"
import { RenameBoardSchema } from "shared/types/boards"
import { processRequest } from "zod-express-middleware"

import renameBoard from "@/routes/projects/boards/renameBoard"

import createBoard from "./createBoard"
import getBoardById from "./getBoardById"
import listBoards from "./listBoards"

const BoardsRouter: Router = Router({ mergeParams: true })

// get
BoardsRouter.get("/", listBoards)
BoardsRouter.get("/:boardId", getBoardById)

// post
BoardsRouter.post("/", createBoard)

// put
BoardsRouter.put(
  "/:boardId/rename",
  processRequest(RenameBoardSchema),
  renameBoard
)

export default BoardsRouter
