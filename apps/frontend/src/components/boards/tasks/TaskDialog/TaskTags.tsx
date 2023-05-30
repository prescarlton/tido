import { Box, Stack, Typography } from "@mui/material"

import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"

const TaskTags = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="h6">Tags</Typography>
      <Stack direction="row" spacing={1}>
        <TaskTag />
        <TaskTag />
        <TaskTag />
        <TaskTag />
      </Stack>
    </Box>
  )
}

export default TaskTags
