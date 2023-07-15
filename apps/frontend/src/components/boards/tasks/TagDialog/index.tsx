import { Modal } from "@mantine/core"

interface ITagDialog {
  opened: boolean
  onClose: () => void
  taskId?: string
}

const TagDialog = ({ opened, onClose }: ITagDialog) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Tags"
      styles={{
        overlay: { zIndex: 10002 },
        inner: { zIndex: 10003 },
      }}
    >
      idk tag shit go here
    </Modal>
  )
}

export default TagDialog
