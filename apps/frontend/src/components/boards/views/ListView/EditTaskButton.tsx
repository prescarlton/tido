import { Task } from "shared/types/tasks"

import useDeleteTask from "@/hooks/api/tasks/useDeleteTask"
import { ActionIcon, Menu } from "@mantine/core"
import { Dots } from "tabler-icons-react"

interface IEditTaskButton {
  task: Task
}
const EditTaskButton = ({ task }: IEditTaskButton) => {
  const deleteMutation = useDeleteTask(task.id)

  const onDeleteClick = async () => {
    await deleteMutation.mutateAsync()
  }

  return (
    <Menu>
      <Menu.Target>
        <ActionIcon onClick={(e) => e.stopPropagation()}>
          <Dots />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default EditTaskButton
