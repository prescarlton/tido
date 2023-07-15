import { Modal, Tabs, Title } from "@mantine/core"

import BoardPermissionSettings from "@/components/boards/BoardSettingsDialog/BoardPermissionSettings"
import GeneralBoardSettings from "@/components/boards/BoardSettingsDialog/GeneralBoardSettings"

interface IBoardSettingsDialog {
  boardId: string
  opened: boolean
  onClose: () => void
}

const BoardSettingsDialog = ({
  opened,
  onClose,
  boardId,
}: IBoardSettingsDialog) => {
  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false}>
      <Modal.Header>
        <Modal.Title>
          <Title size="h4">Board Settings</Title>
        </Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Tabs defaultValue="general" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="general">General</Tabs.Tab>
          <Tabs.Tab value="permissions">Permissions</Tabs.Tab>
        </Tabs.List>
        <GeneralBoardSettings />
        <BoardPermissionSettings />
      </Tabs>
    </Modal>
  )
}

export default BoardSettingsDialog
