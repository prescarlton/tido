import { ActionIcon, Menu } from "@mantine/core"
import { SyntheticEvent } from "react"
import { Task } from "shared/types/tasks"
import { Archive, Copy, Dots, Edit } from "tabler-icons-react"

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
          sx={{ height: "100%", width: "3.25rem" }}
        >
          <Dots />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<Edit />}>Edit Task</Menu.Item>
        <Menu.Item icon={<Copy />} onClick={onClickDuplicate}>
          Duplicate Task
        </Menu.Item>
        <Menu.Item color="red" icon={<Archive />} onClick={onClickDelete}>
          Archive Task
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default EditTaskButton
