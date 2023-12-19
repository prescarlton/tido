import { Badge } from "@mantine/core"
import { TaskTag as TaskTagType } from "shared/types/tasks"

interface ITaskTag {
  tag: TaskTagType
  compact?: boolean
  grow?: boolean
}

const TaskTag = ({ tag, grow = false, compact = false }: ITaskTag) => {
  return (
    <Badge
      variant="light"
      color={tag.color}
      radius="sm"
      style={{ height: compact ? 20 : 32, ...(grow && { flex: 1 }) }}
    >
      {tag.name}
    </Badge>
  )
}

export default TaskTag
