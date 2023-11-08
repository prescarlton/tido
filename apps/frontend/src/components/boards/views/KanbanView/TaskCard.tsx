import { Card, Text } from "@mantine/core"
import { Task } from "shared/types/tasks"

interface ITaskCard {
  task: Task
}

const TaskCard = ({ task }: ITaskCard) => {
  return (
    <Card>
      <Text size="sm">{task.name}</Text>
    </Card>
  )
}
export default TaskCard
