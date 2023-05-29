import { Box, Collapse, IconButton, Typography } from "@mui/material"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "react-feather"

const SidebarFavorites = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => setOpen((prev) => !prev)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2">Favorites</Typography>
        <IconButton onClick={toggleCollapse}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </IconButton>
      </Box>
      <Collapse in={open}>
        <Typography variant="subtitle2">You have no favorites.</Typography>
      </Collapse>
    </Box>
  )
}

export default SidebarFavorites
