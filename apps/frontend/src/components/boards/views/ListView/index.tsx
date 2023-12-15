import { Divider, Stack } from "@mantine/core"

import BoardViewLayout, {
  IBoardView,
} from "@/components/boards/BoardViewLayout"
import TaskCard from "@/components/boards/views/ListView/TaskCard"

const BoardListView = ({ tasks }: IBoardView) => {
  const completeTasks = tasks.filter((task) => task.complete)
  const incompleteTasks = tasks.filter((task) => !task.complete)
  return (
    <BoardViewLayout tasks={tasks}>
      <Stack spacing="md" p="sm" sx={{ overflowY: "auto", flex: 1 }}>
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
    </BoardViewLayout>
  )
}

export default BoardListView
