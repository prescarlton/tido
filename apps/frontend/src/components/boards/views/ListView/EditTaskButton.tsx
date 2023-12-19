import { ActionIcon, Menu } from "@mantine/core"
import { IconArchive, IconCopy, IconDots, IconEdit } from "@tabler/icons-react"
import { SyntheticEvent } from "react"
import { Task } from "shared/types/tasks"

import useDeleteTask from "@/hooks/api/tasks/useDeleteTask"

interface IEditTaskButton {
  task: Task
}
const EditTaskButton = ({ task }: IEditTaskButton) => {
  const deleteMutation = useDeleteTask(task.id)

  const onClickDelete = async (e: SyntheticEvent) => {
    e.stopPropagation()
    await deleteMutation.mutateAsync()
  }
  const onClickDuplicate = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <ActionIcon
          onClick={(e) => e.stopPropagation()}
          style={{ height: "100%", width: "3.25rem" }}
        >
          <IconDots />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconEdit />}>Edit Task</Menu.Item>
        <Menu.Item leftSection={<IconCopy />} onClick={onClickDuplicate}>
          Duplicate Task
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconArchive />}
          onClick={onClickDelete}
        >
          Archive Task
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default EditTaskButton
