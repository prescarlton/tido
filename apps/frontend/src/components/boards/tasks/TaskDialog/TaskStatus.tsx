import { Box, Chip, Group, Text } from "@mantine/core"

const TaskStatus = () => {
  return (
    <Group spacing="xl">
      <Text color="dimmed" w={100}>
        Status
      </Text>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.fn.variant({
            variant: "light",
            color: "lime",
          }).background,
          borderRadius: theme.radius.sm,
        })}
        px="xs"
      >
        <Text color={"lime"} size="xs" weight="bold">
          Tag
        </Text>
      </Box>
    </Group>
  )
}

export default TaskStatus
