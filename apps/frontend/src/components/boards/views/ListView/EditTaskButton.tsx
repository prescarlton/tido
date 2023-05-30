import { IconButton, ListItemButton, Menu } from "@mui/material"
import { ReactNode, SyntheticEvent, useState } from "react"

interface IEditTaskButton {
  icon: ReactNode
}
const EditTaskButton = ({ icon }: IEditTaskButton) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>()
  const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setMenuAnchor(e.currentTarget)
  }
  const onClose = () => {
    setMenuAnchor(undefined)
  }

  return (
    <>
      <IconButton onClick={onClick}>{icon}</IconButton>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={onClose}
        onClick={(e) => e.stopPropagation()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ListItemButton>Open</ListItemButton>
        <ListItemButton>Get Link</ListItemButton>
        <ListItemButton>Clone</ListItemButton>
        <ListItemButton sx={{ color: "error.main" }}>Delete</ListItemButton>
      </Menu>
    </>
  )
}

export default EditTaskButton
