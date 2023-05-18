import { Router } from "express"
import {
  CreateTaskRequestSchema,
  ListTasksRequestSchema,
} from "shared/types/tasks"
import { processRequest } from "zod-express-middleware"

import listTasks from "@/routes/projects/boards/listTasks"
import createTask from "@/routes/projects/tasks/createTask"

const TaskRouter: Router = Router({ mergeParams: true })

// GET
TaskRouter.get("/", processRequest(ListTasksRequestSchema), listTasks)

// POST
TaskRouter.post("/", processRequest(CreateTaskRequestSchema), createTask)

export default TaskRouter
