import { Group, Text } from "@mantine/core"

import UserChip from "@/components/boards/tasks/TaskDialog/TaskMembers/UserChip"

const TaskMembers = () => {
  return (
    <Group gap="xl">
      <Text color="dimmed" w={100}>
        Assigned To
      </Text>
      <Group gap="xs">
        {/* <UserChip />
        <UserChip />
        <UserChip /> */}
      </Group>
    </Group>
  )
}

export default TaskMembers
