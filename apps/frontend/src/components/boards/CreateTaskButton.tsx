import { ActionIcon, Button, Menu, TextInput } from "@mantine/core"
import { getHotkeyHandler, useDisclosure } from "@mantine/hooks"
import { IconChevronRight, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

import TaskDialog from "./tasks/TaskDialog"

const CreateTaskButton = () => {
  const [opened, { close, open }] = useDisclosure()

  const onClick = () => {
    open()
  }

  return (
    <>
      <Button
        variant="filled"
        leftIcon={<IconPlus />}
        sx={{ alignSelf: "flex-start" }}
        onClick={onClick}
      >
        Create Task
      </Button>
      {opened && <TaskDialog onClose={close} opened={opened} />}
    </>
  )
}

export default CreateTaskButton
