import { Box, Text, useMantineTheme } from "@mantine/core"

const TaskTag = () => {
  const theme = useMantineTheme()
  const colors = ["red", "orange", "yellow", "green", "lime", "violet"]
  const color = colors[Math.floor(Math.random() * 5)]

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({
          variant: "light",
          color,
        }).background,
        borderRadius: theme.radius.sm,
      })}
      px="xs"
    >
      <Text color={color} size="xs" weight="bold">
        Tag
      </Text>
    </Box>
  )
}

export default TaskTag
