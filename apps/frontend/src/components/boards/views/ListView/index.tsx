import { Box, Stack } from "@mantine/core"
import { Task } from "shared/types/tasks"

import TaskCard from "@/components/boards/views/ListView/TaskCard"

interface IBoardListView {
  tasks: Task[]
}

const BoardListView = ({ tasks }: IBoardListView) => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Stack spacing={8}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>
    </Box>
  )
}

export default BoardListView
