import { IconButton, ListItemButton, Menu } from "@mui/material"
import { ReactNode, SyntheticEvent, useState } from "react"
import { Task } from "shared/types/tasks"

import useDeleteTask from "@/hooks/api/tasks/useDeleteTask"

interface IEditTaskButton {
  icon: ReactNode
  task: Task
}
const EditTaskButton = ({ icon, task }: IEditTaskButton) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>()
  const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setMenuAnchor(e.currentTarget)
  }
  const onClose = () => {
    setMenuAnchor(undefined)
  }

  const deleteMutation = useDeleteTask(task.id)

  const onDeleteClick = async () => {
    await deleteMutation.mutateAsync()
  }

  return (
    <>
      <IconButton
        onClick={onClick}
        className="EditTaskButton"
        sx={{ visibility: "hidden" }}
      >
        {icon}
      </IconButton>
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
        <ListItemButton sx={{ color: "error.main" }} onClick={onDeleteClick}>
          Delete
        </ListItemButton>
      </Menu>
    </>
  )
}

export default EditTaskButton
