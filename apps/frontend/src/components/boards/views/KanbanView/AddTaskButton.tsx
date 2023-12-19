import { UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import TaskDialog from "../../tasks/TaskDialog"

const AddTaskButton = ({ statusId }: { statusId: number }) => {
  const [opened, { close, open }] = useDisclosure()
  return (
    <>
      <UnstyledButton
        style={(theme) => ({
          borderRadius: theme.radius.md,
          paddingLeft: theme.spacing.xs,
          height: 32,
          minHeight: 32,
          width: 250,
          fontWeight: 600,
          transition: ".1s all ease-in-out",
          "&:hover": {
            backgroundColor: "#00000020",
          },
        })}
        c="dimmed"
        onClick={open}
      >
        + Add a Task
      </UnstyledButton>
      {opened && (
        <TaskDialog onClose={close} opened={opened} statusId={statusId} />
      )}
    </>
  )
}
export default AddTaskButton
