import { Card, Checkbox, Group, Text, UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ChangeEvent, SyntheticEvent } from "react"
import { Task } from "shared/types/tasks"

import TaskDialog from "@/components/boards/tasks/TaskDialog"
import EditTaskButton from "@/components/boards/views/ListView/EditTaskButton"
import TaskStatus from "@/components/boards/views/ListView/TaskCard/TaskStatus"
import TaskTags from "@/components/boards/views/ListView/TaskCard/TaskTags"
import useProjectContext from "@/contexts/ProjectContext"
import useCompleteTask from "@/hooks/api/tasks/useCompleteTask"

interface ITaskCard {
  task: Task
}

const TaskCard = ({ task }: ITaskCard) => {
  const [opened, { close, open }] = useDisclosure()
  const { project } = useProjectContext()
  const completeMutation = useCompleteTask({
    projectId: project?.id as string,
    boardId: task.boardId as string,
    taskId: task.id,
  })

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    await completeMutation.mutateAsync({
      complete: e.currentTarget.checked,
    })
  }
  const onCheckboxClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const onClickCard = () => {
    open()
  }
  const onCloseDialog = () => {
    close()
  }

  return (
    <Card
      withBorder
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        opacity: task.complete ? 0.6 : 1,
        transition: ".2s all ease-in-out",
        "&:hover": {
          boxShadow: theme.shadows.sm,
        },
        height: "3.25rem",
        overflow: "visible",
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      })}
      className={task.complete ? "task--completed" : ""}
      p={0}
    >
      <UnstyledButton
        onClick={onClickCard}
        sx={(theme) => ({
          flex: 1,
          padding: theme.spacing.sm,
          display: "flex",
          alignItems: "center",
          gap: theme.spacing.sm,
          height: "100%",
        })}
      >
        <Group spacing="xs" sx={{ flex: 1, flexWrap: "nowrap" }}>
          <Checkbox
            checked={task.complete}
            onChange={onChange}
            onClick={onCheckboxClick}
            styles={{
              input: {
                cursor: "pointer",
              },
            }}
          />
          <Text
            variant="h5"
            sx={{
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-all",
            }}
            lineClamp={1}
          >
            {task.name}
          </Text>
        </Group>
        <Group spacing="sm" align="center" noWrap>
          <TaskTags task={task} />
          <TaskStatus task={task} />
        </Group>
      </UnstyledButton>
      <EditTaskButton task={task} />

      {opened && (
        <TaskDialog task={task} onClose={onCloseDialog} opened={opened} />
      )}
    </Card>
  )
}

export default TaskCard
