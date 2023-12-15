import { Button } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconPlus } from "@tabler/icons-react"

import TaskDialog from "./tasks/TaskDialog"

const CreateTaskButton = () => {
  const [opened, { close, open }] = useDisclosure()

  return (
    <>
      <Button
        variant="filled"
        leftIcon={<IconPlus />}
        sx={{ alignSelf: "flex-start" }}
        onClick={open}
      >
        Create Task
      </Button>
      {opened && <TaskDialog onClose={close} opened={opened} />}
    </>
  )
}

export default CreateTaskButton
