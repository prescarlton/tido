import { Group, Paper, Tooltip } from "@mantine/core"
import { Task } from "shared/types/tasks"

import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"

interface ITaskTags {
  task: Task
  compact?: boolean
  showAll?: boolean
}

const TaskTags = ({ task, compact = false, showAll = false }: ITaskTags) => {
  // if there's no tags, just return nothing
  if (!task.tags.length) return null

  // only want to display the first two tags and truncate the rest to (+X)
  const firstTwo = task.tags.slice(0, 2)
  const tagList = showAll ? task.tags : firstTwo

  return (
    <Group gap="xs" style={{ flexWrap: showAll ? "wrap" : "nowrap" }}>
      {tagList.map((tag) => (
        <TaskTag key={tag.id} tag={tag} compact={compact} />
      ))}
      {!showAll && task.tags.length > 2 && (
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
