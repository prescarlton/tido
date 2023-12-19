import { Badge } from "@mantine/core"
import { Task } from "shared/types/tasks"

interface ITaskStatus {
  task: Task
}

const TaskStatus = ({ task }: ITaskStatus) => {
  return (
    <Badge variant="light" color={task.status.color} radius="sm">
      {task.status.name}
    </Badge>
  )
}

export default TaskStatus
