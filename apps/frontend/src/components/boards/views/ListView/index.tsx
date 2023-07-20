import { Divider, Stack } from "@mantine/core"
import { Task } from "shared/types/tasks"

import TaskCard from "@/components/boards/views/ListView/TaskCard"

interface IBoardListView {
  tasks: Task[]
}

const BoardListView = ({ tasks }: IBoardListView) => {
  const completeTasks = tasks.filter((task) => task.complete)
  const incompleteTasks = tasks.filter((task) => !task.complete)
  return (
    <Stack spacing="md" p="sm">
      <Stack spacing="xs">
        {incompleteTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>
      <Divider label="Completed Tasks" />
      <Stack spacing="xs">
        {completeTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>
    </Stack>
  )
}

export default BoardListView
