import { Group, Skeleton, Text } from "@mantine/core"

import UserChip from "@/components/boards/tasks/TaskDialog/TaskMembers/UserChip"
import { Task } from "shared/types/tasks"

interface ITaskCreator {
  creator?: Task["createdBy"]
}

const TaskCreator = ({ creator }: ITaskCreator) => {
  return (
    <Group spacing="xl">
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
