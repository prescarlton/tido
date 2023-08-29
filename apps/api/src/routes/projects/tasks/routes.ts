import { Router } from "express"
import { GetByIdRequestSchema } from "shared/types/shared"
import {
  CompleteTaskRequestSchema,
  CreateTaskRequestSchema,
  GetTaskRequestSchema,
  ListTasksRequestSchema,
  UpdateTaskRequestSchema,
  UpdateTaskTagsSchema,
} from "shared/types/tasks"
import { processRequest } from "zod-express-middleware"

import listTasks from "@/routes/projects/boards/listTasks"
import completeTask from "@/routes/projects/tasks/completeTask"
import createTask from "@/routes/projects/tasks/createTask"
import deleteTask from "@/routes/projects/tasks/deleteTask"
import getTaskActivity from "@/routes/projects/tasks/getTaskActivity"
import getTaskById from "@/routes/projects/tasks/getTaskById"
import updateTask from "@/routes/projects/tasks/updateTask"
import updateTaskTags from "@/routes/projects/tasks/updateTaskTags"

const TaskRouter: Router = Router({ mergeParams: true })

// GET
TaskRouter.get("/", processRequest(ListTasksRequestSchema), listTasks)
TaskRouter.get("/:id", processRequest(GetByIdRequestSchema), getTaskById)
TaskRouter.get(
  "/:taskId/activity",
  processRequest(GetTaskRequestSchema),
  getTaskActivity
)

// POST
TaskRouter.post("/", processRequest(CreateTaskRequestSchema), createTask)

// PUT
TaskRouter.put(
  "/:taskId/complete",
  processRequest(CompleteTaskRequestSchema),
  completeTask
)
TaskRouter.put("/:taskId", processRequest(UpdateTaskRequestSchema), updateTask)
TaskRouter.put(
  "/:taskId/tags",
  processRequest(UpdateTaskTagsSchema),
  updateTaskTags
)

// DELETE
TaskRouter.delete("/:taskId", processRequest(GetTaskRequestSchema), deleteTask)

export default TaskRouter
