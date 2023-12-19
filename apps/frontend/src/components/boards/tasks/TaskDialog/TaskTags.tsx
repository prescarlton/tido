import { Flex, Group, Skeleton, Text } from "@mantine/core"
import { TaskDetails } from "shared/types/tasks"

import AddTagButton from "@/components/boards/tasks/TaskDialog/AddTagButton"
import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"

interface ITaskTags {
  task?: TaskDetails
}

const TaskTags = ({ task }: ITaskTags) => {
  return (
    <Group gap="xl" wrap="nowrap" align="flex-start">
      <Text c="dimmed" w={100}>
        Tags
      </Text>
      <Flex gap="xs" wrap="wrap" align="center">
        {task ? (
          <>
            {task.tags.map((tag) => (
              <TaskTag key={tag.id} tag={tag} />
            ))}
            <AddTagButton taskId={task.id} startingTags={task.tags} />
          </>
        ) : (
          <Skeleton radius="sm">
            <Text>Tag</Text>
          </Skeleton>
        )}
      </Flex>
    </Group>
  )
}

export default TaskTags
