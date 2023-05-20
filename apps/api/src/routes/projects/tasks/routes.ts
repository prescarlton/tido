import { Router } from "express"
import {
  CompleteTaskRequestSchema,
  CreateTaskRequestSchema,
  DeleteTaskRequestSchema,
  ListTasksRequestSchema,
} from "shared/types/tasks"
import { processRequest } from "zod-express-middleware"

import listTasks from "@/routes/projects/boards/listTasks"
import completeTask from "@/routes/projects/tasks/completeTask"
import createTask from "@/routes/projects/tasks/createTask"
import deleteTask from "@/routes/projects/tasks/deleteTask"

const TaskRouter: Router = Router({ mergeParams: true })

// GET
TaskRouter.get("/", processRequest(ListTasksRequestSchema), listTasks)

// POST
TaskRouter.post("/", processRequest(CreateTaskRequestSchema), createTask)

// PUT
TaskRouter.put(
  "/:taskId",
  processRequest(CompleteTaskRequestSchema),
  completeTask
)

// DELETE
TaskRouter.delete(
  "/:taskId",
  processRequest(DeleteTaskRequestSchema),
  deleteTask
)

export default TaskRouter
