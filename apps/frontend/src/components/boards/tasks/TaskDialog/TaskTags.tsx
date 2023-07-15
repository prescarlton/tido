import { Group, Text } from "@mantine/core"

import AddTagButton from "@/components/boards/tasks/TaskDialog/AddTagButton"
import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"

const TaskTags = () => {
  return (
    <Group spacing="xl">
      <Text color="dimmed" w={100}>
        Tags
      </Text>
      <Group spacing="xs">
        <AddTagButton />
      </Group>
    </Group>
  )
}

export default TaskTags
