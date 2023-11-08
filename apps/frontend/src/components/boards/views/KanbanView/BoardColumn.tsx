import { Card, Stack, Title } from "@mantine/core"
import { Task } from "shared/types/tasks"

import TaskCard from "./TaskCard"

interface IBoardColumn {
  title: string
  tasks: Task[]
}

const BoardColumn = ({ title, tasks }: IBoardColumn) => {
  return (
    <Stack spacing="sm">
      <Title size="h3">{title}</Title>
      <Card
        sx={{
          dislpay: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Card>
    </Stack>
  )
}
export default BoardColumn
