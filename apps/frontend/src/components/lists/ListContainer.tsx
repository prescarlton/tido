import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { MouseEvent, useState } from "react"
import { MoreVertical, Plus } from "react-feather"

import BoardTaskCard from "./BoardTaskCard"
import ListContextMenu from "./ListContextMenu"

const ListContainer = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null)

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => setMenuAnchorEl(null)

  return (
    <Box
      sx={{
        display: "inline-block",
        height: "100%",
        mx: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: 275,
          borderRadius: 0.75,
          flex: "none",
          px: 1,
          py: 0.5,
          maxHeight: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 900 }}>
            To Do
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <IconButton>
              <Plus />
            </IconButton>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertical />
            </IconButton>
          </Stack>
        </Box>
        <Box
          sx={{
            overflowY: "auto",
            flex: 1,
          }}
        >
          <BoardTaskCard />
          <BoardTaskCard />
          <BoardTaskCard />
        </Box>
        <Button
          variant="text"
          startIcon={<Plus />}
          sx={{
            color: "text.secondary",
            textTransform: "none",
            justifyContent: "flex-start",
            mt: -1,
          }}
        >
          Add a task
        </Button>
      </Box>
      <ListContextMenu anchorEl={menuAnchorEl} onClose={handleMenuClose} />
    </Box>
  )
}

export default ListContainer
