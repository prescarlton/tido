import { RadioButtonUnchecked, TaskAlt } from "@mui/icons-material"
import { Box, Card, Checkbox, Typography } from "@mui/material"
import { Task } from "shared/types/tasks"

interface ITaskCard {
  task: Task
}

const TaskCard = ({ task }: ITaskCard) => {
  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
      }}
    >
      <Box>
        <Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<TaskAlt />} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {task.name}
        </Typography>
        <Typography variant="caption">Task Description</Typography>
      </Box>
    </Card>
  )
}

export default TaskCard
