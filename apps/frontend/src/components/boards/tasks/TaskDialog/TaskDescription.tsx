import { Box, darken, Icon, Typography, useTheme } from "@mui/material"
import { AlignLeft } from "react-feather"

const TaskDescription = () => {
  const theme = useTheme()
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
          // backgroundColor: "background.paper",
          backgroundColor: darken(theme.palette.background.paper, 0.1),
        }}
      ></Box>
    </Box>
  )
}

export default TaskDescription
