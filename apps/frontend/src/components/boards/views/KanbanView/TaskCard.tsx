import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, Text, UnstyledButton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Task } from "shared/types/tasks"

import TaskDialog from "../../tasks/TaskDialog"
import TaskTags from "../ListView/TaskCard/TaskTags"

interface ITaskCard {
  task: Task
  isDragOverlay?: boolean
}
import styles from "./styles.module.scss"

const TaskCard = ({ task, isDragOverlay = false }: ITaskCard) => {
  const [opened, { close, open }] = useDisclosure()
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id })
  const onClickCard = () => {
    open()
  }
  const onCloseDialog = () => {
    close()
  }
  return (
    <>
      <UnstyledButton
        onClick={onClickCard}
        p={0}
        className={styles.taskCard}
        style={{
          opacity: isDragging ? 0.3 : 1,
          transform: CSS.Transform.toString(transform),
          rotate: isDragOverlay ? "-4deg" : "0",
          transition,
          width: 250,
        }}
        {...attributes}
        {...listeners}
        ref={setNodeRef}
      >
        <Card withBorder className={styles.taskCardInner}>
          <TaskTags task={task} compact />
          <Text size="sm">{task.name}</Text>
        </Card>
      </UnstyledButton>
      {opened && (
        <TaskDialog task={task} onClose={onCloseDialog} opened={opened} />
      )}
    </>
  )
}
export default TaskCard
