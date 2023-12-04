import { UnstyledButton } from "@mantine/core"

const AddTaskButton = () => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        borderRadius: theme.radius.md,
        paddingLeft: theme.spacing.xs,
        height: 32,
        minHeight: 32,
        fontWeight: 600,
        transition: ".1s all ease-in-out",
        "&:hover": {
          backgroundColor: "#00000020",
        },
      })}
      c="dimmed"
    >
      + Add a Task
    </UnstyledButton>
  )
}
export default AddTaskButton
