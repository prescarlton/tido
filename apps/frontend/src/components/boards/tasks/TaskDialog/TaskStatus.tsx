import { Box, Chip, Group, Text } from "@mantine/core"
import { Task } from "shared/types/tasks"

interface ITaskStatus {
  task: Task
}

const TaskStatus = ({ task }: ITaskStatus) => {
  return (
    <Group spacing="xl">
      <Text color="dimmed" w={100}>
        Status
      </Text>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.fn.variant({
            variant: "light",
            color: task.complete ? "green" : "red",
          }).background,
          borderRadius: theme.radius.sm,
        })}
        px="xs"
      >
        <Text color={task.complete ? "green" : "red"} size="xs" weight="bold">
          {task.complete ? "Complete" : "Incomplete"}
        </Text>
      </Box>
    </Group>
  )
}

export default TaskStatus
