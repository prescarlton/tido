import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Box, Card, Group, Title } from "@mantine/core"
import { useEffect } from "react"
import { Task } from "shared/types/tasks"

import AddTaskButton from "./AddTaskButton"
import TaskCard from "./TaskCard"

interface IBoardColumn {
  title: string
  tasks: Task[]
}

const BoardColumn = ({ title, tasks }: IBoardColumn) => {
  const { setNodeRef, over, isOver } = useDroppable({ id: title })
  return (
    <Card
      withBorder
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        flexGrow: 0,
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        maxHeight: "100%",
        gap: 12,
      })}
      p={8}
      pt={12}
      ref={setNodeRef}
    >
      <Group spacing={"sm"}>
        <Title size="h6">{title}</Title>
        <Title size="h6" c="dimmed">
          {tasks.length}
        </Title>
      </Group>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <Box
          sx={(theme) => ({
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
      <AddTaskButton />
    </Card>
  )
}
export default BoardColumn
