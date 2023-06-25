import { Box, Typography } from "@mui/material"

const MyTasks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.25,
      }}
    >
      <Typography variant="h3">My Tasks</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Typography>Coming soon</Typography>
      </Box>
    </Box>
  )
}

export default MyTasks
