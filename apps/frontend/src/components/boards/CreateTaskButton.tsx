import { ActionIcon, Button, Input, Menu } from "@mantine/core"
import { SyntheticEvent, useRef, useState } from "react"
import { Plus } from "react-feather"
import { useParams } from "react-router-dom"

import useCreateTask from "@/hooks/api/tasks/useCreateTask"
import { ChevronRight } from "tabler-icons-react"
import { getHotkeyHandler } from "@mantine/hooks"

const CreateTaskButton = () => {
  const { projectId, boardId } = useParams() as {
    projectId: string
    boardId: string
  }
  const [opened, setOpened] = useState(false)
  const [taskName, setTaskName] = useState("")

  const createMutation = useCreateTask({ projectId, boardId })

  const onClickSubmit = async () => {
    await createMutation.mutateAsync({ name: taskName })
    setTaskName("")
    setOpened(false)
  }

  return (
    <Menu position="right" opened={opened} onChange={setOpened}>
      <Menu.Target>
        <Button
          variant="subtle"
          leftIcon={<Plus />}
          sx={{ alignSelf: "flex-start" }}
        >
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
          rightSection={
            <ActionIcon onClick={onClickSubmit}>
              <ChevronRight />
            </ActionIcon>
          }
          onKeyDown={getHotkeyHandler([["Enter", onClickSubmit]])}
        />
      </Menu.Dropdown>
    </Menu>
  )
}

export default CreateTaskButton
