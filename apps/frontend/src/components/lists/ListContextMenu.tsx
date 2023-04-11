import { Sort } from "@mui/icons-material"
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material"
import { Edit2, Plus, Trash2 } from "react-feather"

const ListContextMenu = ({
  anchorEl,
  onClose,
}: {
  anchorEl: HTMLElement | null
  onClose: () => void
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      PaperProps={{
        sx: {
          width: 200,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        List Actions
      </Typography>
      <Divider flexItem sx={{ mt: 1, mx: 1 }} />
      <MenuList sx={{ py: 0.5 }}>
        <MenuItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <ListItemText>
            <Typography variant="body2">Add a task</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography variant="body2">Sort list</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography variant="body2">Rename list</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <Typography variant="body2">Set task limit</Typography>
          </ListItemText>
        </MenuItem>
      </MenuList>
      <Divider flexItem sx={{ mx: 1 }} />
      <MenuList sx={{ py: 0.5 }}>
        <MenuItem sx={{ "& *": { color: "error.main" } }}>
          <ListItemText>
            <Typography variant="body2">Delete list</Typography>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ListContextMenu
