import { Box, Typography } from "@mui/material"

const SidebarHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "primary.main",
        }}
      >
        tido
      </Typography>
    </Box>
  )
}

export default SidebarHeader
