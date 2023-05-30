import { Box, Icon, Typography } from "@mui/material"
import { Activity } from "react-feather"

const TaskActivity = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Icon fontSize="small">
        <Activity />
      </Icon>
      <Typography variant="h6">Activity</Typography>
    </Box>
  )
}

export default TaskActivity
