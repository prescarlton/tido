import { Card, Text, UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Task } from "shared/types/tasks"

import TaskDialog from "../../tasks/TaskDialog"
import TaskTags from "../ListView/TaskCard/TaskTags"

interface ITaskCard {
  task: Task
}

const TaskCard = ({ task }: ITaskCard) => {
  const [opened, { close, open }] = useDisclosure()

  const onClickCard = () => {
    open()
  }
  const onCloseDialog = () => {
    close()
  }

  return (
    <Card
      p={0}
      sx={(theme) => ({
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "transparent",
        display: "flex",
        minHeight: 75,
        flexDirection: "column",
        alignItems: "stretch",
        borderRadius: theme.radius.md,
        transition: ".1s all ease-in-out",
        boxShadow: theme.shadows.xs,
        "&:hover": {
          borderColor: theme.fn.primaryColor(),
          boxShadow: theme.shadows.sm,
        },
      })}
    >
      <UnstyledButton
        onClick={onClickCard}
        sx={(theme) => ({
          padding: theme.spacing.xs,
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        })}
      >
        <TaskTags task={task} compact />
        <Text size="sm">{task.name}</Text>
      </UnstyledButton>
      {opened && (
        <TaskDialog task={task} onClose={onCloseDialog} opened={opened} />
      )}
    </Card>
  )
}
export default TaskCard
