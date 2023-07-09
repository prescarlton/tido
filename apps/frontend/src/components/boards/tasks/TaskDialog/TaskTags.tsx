import { Group, Text } from "@mantine/core"

import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"

const TaskTags = () => {
  return (
    <Group spacing="xl">
      <Text color="dimmed" w={100}>
        Tags
      </Text>
      <Group spacing="xs">
        <TaskTag />
      </Group>
    </Group>
  )
}

export default TaskTags
