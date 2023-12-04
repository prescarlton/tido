import { Box, Group, Stack, Title } from "@mantine/core"
import { Task } from "shared/types/tasks"

import AddTaskButton from "./AddTaskButton"
import TaskCard from "./TaskCard"

interface IBoardColumn {
  title: string
  tasks: Task[]
}

const BoardColumn = ({ title, tasks }: IBoardColumn) => {
  return (
    <Stack
      spacing="sm"
      sx={(theme) => ({
        width: 250,
        flexShrink: 0,
        flexGrow: 0,
        borderRadius: theme.radius.sm,
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        maxHeight: "100%",
        boxShadow: theme.shadows.sm,
        gap: 12,
      })}
      p={8}
      pt={12}
    >
      <Group spacing={"sm"}>
        <Title size="h6">{title}</Title>
        <Title size="h6" c="dimmed">
          {tasks.length}
        </Title>
      </Group>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.xs,
          flex: 1,
          overflowY: "auto",
        })}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Box>
      <AddTaskButton />
    </Stack>
  )
}
export default BoardColumn
