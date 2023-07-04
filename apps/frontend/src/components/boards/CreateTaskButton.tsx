import { Button, Input, Menu } from "@mantine/core"
import { SyntheticEvent, useRef, useState } from "react"
import { Plus } from "react-feather"
import { useParams } from "react-router-dom"

import useCreateTask from "@/hooks/api/tasks/useCreateTask"

const CreateTaskButton = () => {
  const { projectId, boardId } = useParams() as {
    projectId: string
    boardId: string
  }
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  const [taskName, setTaskName] = useState("")

  const onClick = ({ currentTarget }: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(currentTarget)
  }

  return (
    <Menu>
      <Menu.Target>
        <Button variant="subtle" leftIcon={<Plus />} onClick={onClick}>
          Create Task
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Input
          id="createTaskField"
          value={taskName}
          onChange={({ target }) => setTaskName(target.value)}
          placeholder="Task Name"
          autoComplete="off"
        />
      </Menu.Dropdown>
    </Menu>
  )
}

export default CreateTaskButton
