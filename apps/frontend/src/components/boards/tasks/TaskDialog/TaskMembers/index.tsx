import { Group, Text } from "@mantine/core"

import UserChip from "@/components/boards/tasks/TaskDialog/TaskMembers/UserChip"

const TaskMembers = () => {
  return (
    <Group spacing="xl">
      <Text color="dimmed" w={100}>
        Assigned To
      </Text>
      <Group spacing="xs">
        {/* <UserChip />
        <UserChip />
        <UserChip /> */}
      </Group>
    </Group>
  )
}

export default TaskMembers
