import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import {
  Box,
  Card,
  Group,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core"
import { Task, TaskStatus } from "shared/types/tasks"

import AddTaskButton from "./AddTaskButton"
import TaskCard from "./TaskCard"

interface IBoardColumn {
  status: TaskStatus
  tasks: Task[]
}

const BoardColumn = ({ status, tasks }: IBoardColumn) => {
  const { setNodeRef } = useDroppable({ id: status.name })
  const colorScheme = useComputedColorScheme("light")
  return (
    <Card
      withBorder
      style={(theme) => ({
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        flexGrow: 0,
        backgroundColor:
          colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        maxHeight: "100%",
        gap: 8,
        borderRadius: theme.radius.sm,
      })}
      p={4}
      pt={12}
      ref={setNodeRef}
    >
      <Group gap={"sm"} pl={"xs"}>
        <Title size="h6">{status.name}</Title>
        <Title size="h6" c="dimmed">
          {tasks.length}
        </Title>
      </Group>
      <SortableContext
        items={tasks}
        strategy={verticalListSortingStrategy}
        id={status.name}
      >
        <Box
          style={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing.xs,
            overflowY: "auto",
            overflowX: "hidden",
          })}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Box>
      </SortableContext>
      <AddTaskButton statusId={status.id} />
    </Card>
  )
}
export default BoardColumn
