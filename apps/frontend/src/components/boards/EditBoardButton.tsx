import { ActionIcon, Menu } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { MoreHorizontal } from "react-feather"
import { useParams } from "react-router-dom"
import { Settings, Trash } from "tabler-icons-react"

import BoardSettingsDialog from "@/components/boards/BoardSettingsDialog"
import useDeleteBoard from "@/hooks/api/boards/useDeleteBoard"

const EditBoardButton = () => {
  const [opened, { open, close }] = useDisclosure()
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }

  const deleteMutation = useDeleteBoard({ id: boardId, projectId })

  const handleClickDelete = async () => {
    await deleteMutation.mutateAsync()
  }
  const handleClickSettings = () => {
    open()
  }
  return (
    <>
      <Menu>
        <Menu.Target>
          <ActionIcon>
            <MoreHorizontal />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<Settings />} onClick={handleClickSettings}>
            Board Settings
          </Menu.Item>
          <Menu.Item icon={<Trash />} onClick={handleClickDelete} color="red.6">
            Delete Board
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <BoardSettingsDialog opened={opened} onClose={close} boardId={boardId} />
    </>
  )
}

export default EditBoardButton
