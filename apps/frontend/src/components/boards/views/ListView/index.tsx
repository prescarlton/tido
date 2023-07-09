import { Box, Divider, Stack } from "@mantine/core"
import { Task } from "shared/types/tasks"

import TaskCard from "@/components/boards/views/ListView/TaskCard"

interface IBoardListView {
  tasks: Task[]
}

const BoardListView = ({ tasks }: IBoardListView) => {
  const completeTasks = tasks.filter((task) => task.complete)
  const incompleteTasks = tasks.filter((task) => !task.complete)
  return (
    <Stack sx={{ padding: "1rem" }} spacing="md">
      <Stack spacing="xs">
        {incompleteTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>
      <Divider />
      <Stack spacing="xs">
        {completeTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>
    </Stack>
  )
}

export default BoardListView
