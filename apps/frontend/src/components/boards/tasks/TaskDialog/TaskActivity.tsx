import { Stack, Text, Title } from "@mantine/core"

const TaskActivity = () => {
  return (
    <Stack spacing="xs">
      <Title size="h6">Activity</Title>
      <Text color="dimmed" size="sm">
        Once things start happening with this task, update history will show up
        here.
      </Text>
    </Stack>
  )
}

export default TaskActivity
