import { Box, Text } from "@mantine/core"
import { TaskTag as TaskTagType } from "shared/types/tasks"

interface ITaskTag {
  tag: TaskTagType
  compact?: boolean
  grow?: boolean
}

const TaskTag = ({ tag, grow = false, compact = false }: ITaskTag) => {
  return (
    <Box
      className="taskTag"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: tag.color,
        }).background,
        borderRadius: theme.radius.sm,
        height: compact ? 20 : 32,
        display: "flex",
        alignItems: "center",
        ...(grow && { flex: 1 }),
      })}
      px="xs"
    >
      <Text color={tag.color} size="xs" weight="bold" truncate>
        {tag.name}
      </Text>
    </Box>
  )
}

export default TaskTag
