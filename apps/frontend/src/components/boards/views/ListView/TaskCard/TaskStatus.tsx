import { Box, Text } from "@mantine/core"
import { Task } from "shared/types/tasks"

interface ITaskStatus {
  task: Task
}

const TaskStatus = ({ task }: ITaskStatus) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: task.status.color,
        }).background,
        borderRadius: theme.radius.sm,
      })}
      px="xs"
    >
      <Text color={task.status.color} size="xs" weight="bold">
        {task.status.name}
      </Text>
    </Box>
  )
}

export default TaskStatus
