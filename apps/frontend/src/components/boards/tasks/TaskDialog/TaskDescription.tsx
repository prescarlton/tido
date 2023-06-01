import { Box, Icon, Typography } from "@mui/material"
import { AlignLeft } from "react-feather"

const TaskDescription = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Icon fontSize="small">
          <AlignLeft />
        </Icon>
        <Typography variant="h6">Description</Typography>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          minHeight: 75,
          backgroundColor: "background.paper",
        }}
      ></Box>
    </Box>
  )
}

export default TaskDescription
