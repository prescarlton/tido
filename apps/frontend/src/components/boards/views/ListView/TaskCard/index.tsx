import { Card, Checkbox, Group, Text, UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ChangeEvent, SyntheticEvent } from "react"
import { Task } from "shared/types/tasks"

import TaskDialog from "@/components/boards/tasks/TaskDialog"
import EditTaskButton from "@/components/boards/views/ListView/EditTaskButton"
import TaskStatus from "@/components/boards/views/ListView/TaskCard/TaskStatus"
import TaskTags from "@/components/boards/views/ListView/TaskCard/TaskTags"
import useAppContext from "@/contexts/AppContext"
import useCompleteTask from "@/hooks/api/tasks/useCompleteTask"

import styles from "./styles.module.scss"

interface ITaskCard {
  task: Task
}

const TaskCard = ({ task }: ITaskCard) => {
  const [opened, { close, open }] = useDisclosure()
  const { project } = useAppContext()
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
    <Card withBorder className={styles.taskCard} p={0}>
      <UnstyledButton onClick={onClickCard} className={styles.taskCardButton}>
        <Group gap="xs" style={{ flex: 1, flexWrap: "nowrap" }}>
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
            style={{
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
        <Group gap="sm" align="center" wrap="nowrap">
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
