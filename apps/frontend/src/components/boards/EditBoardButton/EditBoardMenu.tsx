import { ListItem, ListItemButton, Menu, MenuList } from "@mui/material"
import { useParams } from "react-router-dom"

import useDeleteBoard from "@/hooks/api/boards/useDeleteBoard"

const EditBoardMenu = ({
  anchorEl,
  onClose,
}: {
  anchorEl: HTMLElement | null
  onClose: () => void
}) => {
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }

  const deleteMutation = useDeleteBoard({ id: boardId, projectId })

  const handleDelete = async () => {
    await deleteMutation.mutateAsync()
  }

  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={onClose}>
      <MenuList>
        <ListItemButton onClick={handleDelete}>Delete Board</ListItemButton>
      </MenuList>
    </Menu>
  )
}

export default EditBoardMenu
