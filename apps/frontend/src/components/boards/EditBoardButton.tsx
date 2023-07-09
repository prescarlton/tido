import { ActionIcon, Menu } from "@mantine/core"
import { MoreHorizontal } from "react-feather"
import { useParams } from "react-router-dom"

import useDeleteBoard from "@/hooks/api/boards/useDeleteBoard"
import { Trash } from "tabler-icons-react"

const EditBoardButton = () => {
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }

  const deleteMutation = useDeleteBoard({ id: boardId, projectId })

  const handleDelete = async () => {
    await deleteMutation.mutateAsync()
  }
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon>
          <MoreHorizontal />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<Trash />} onClick={handleDelete} color="red.6">
          Delete Board
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default EditBoardButton
