import { ListItem, Menu, MenuList } from "@mui/material"
import { useParams } from "react-router-dom"

const EditBoardMenu = ({
  anchorEl,
  onClose,
}: {
  anchorEl: HTMLElement | null
  onClose: () => void
}) => {
  const { boardId, projectId } = useParams()

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this board?")) {
      console.log("delete")
    }
  }

  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={onClose}>
      <MenuList>
        <ListItem onClick={handleDelete}>Delete</ListItem>
      </MenuList>
    </Menu>
  )
}

export default EditBoardMenu
