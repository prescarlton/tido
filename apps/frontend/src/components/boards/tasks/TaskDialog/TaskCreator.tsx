import { Group, Skeleton, Text } from "@mantine/core"
import { Task } from "shared/types/tasks"

import UserChip from "@/components/boards/tasks/TaskDialog/TaskMembers/UserChip"

interface ITaskCreator {
  creator?: Task["createdBy"]
}

const TaskCreator = ({ creator }: ITaskCreator) => {
  return (
    <Group gap="xl">
      <Text color="dimmed" w={100}>
        Created By
      </Text>
      {creator ? (
        <UserChip user={creator} />
      ) : (
        <Skeleton radius="xl" height={32} />
      )}
    </Group>
  )
}

export default TaskCreator
