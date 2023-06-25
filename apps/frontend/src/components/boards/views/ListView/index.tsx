import { Box } from "@mui/material"
import { Task } from "shared/types/tasks"

import TaskCard from "@/components/boards/views/ListView/TaskCard"

interface IBoardListView {
  tasks: Task[]
}

const BoardListView = ({ tasks }: IBoardListView) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          paddingX: 4,
          paddingY: 3,
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Box>
    </Box>
  )
}

export default BoardListView
