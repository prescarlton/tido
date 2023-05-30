import { Avatar, Box, Typography } from "@mui/material"

const TaskMembers = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="h6">Members</Typography>
      <Avatar sx={{ width: 32, height: 32 }} />
    </Box>
  )
}

export default TaskMembers
