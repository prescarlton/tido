import { Group, Paper, Tooltip } from "@mantine/core"
import { Task } from "shared/types/tasks"

import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"

interface ITaskTags {
  task: Task
  compact?: boolean
}

const TaskTags = ({ task, compact = false }: ITaskTags) => {
  // if there's no tags, just return nothing
  if (!task.tags.length) return null
  // only want to display the first two tags and truncate the rest to (+X)
  const firstTwo = task.tags.slice(0, 2)

  return (
    <Group gap="xs" style={{ flexWrap: "nowrap" }}>
      {firstTwo.map((tag) => (
        <TaskTag key={tag.id} tag={tag} compact={compact} />
      ))}
      {task.tags.length > 2 && (
        <Tooltip
          label={task.tags
            .slice(2)
            .map((tag) => tag.name)
            .join(", ")}
        >
          <Paper
            style={(theme) => ({
              display: "flex",
              alignItems: "center",
              height: 32,
            })}
            px="xs"
          >
            +{task.tags.length - 2}
          </Paper>
        </Tooltip>
      )}
    </Group>
  )
}

export default TaskTags
