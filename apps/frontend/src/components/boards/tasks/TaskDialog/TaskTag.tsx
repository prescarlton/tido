import { Box, Text, useMantineTheme } from "@mantine/core"
import { TaskTag as TaskTagType } from "shared/types/tasks"

interface ITaskTag {
  tag: TaskTagType
}

const TaskTag = ({ tag }: ITaskTag) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: tag.color,
        }).background,
        borderRadius: theme.radius.sm,
      })}
      px="xs"
    >
      <Text color={tag.color} size="xs" weight="bold">
        {tag.name}
      </Text>
    </Box>
  )
}

export default TaskTag
