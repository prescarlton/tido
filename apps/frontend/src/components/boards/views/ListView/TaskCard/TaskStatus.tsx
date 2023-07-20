import { Box } from "@mantine/core"
import { Task } from "shared/types/tasks"

interface ITaskStatus {
  task: Task
}

const TaskStatus = ({ task }: ITaskStatus) => {
  return <Box>{task.complete ? "Completed" : "Incomplete"}</Box>
}

export default TaskStatus
