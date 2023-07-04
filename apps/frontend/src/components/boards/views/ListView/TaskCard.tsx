import {
  Card,
  Checkbox,
  Group,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core"
import { SyntheticEvent, useState } from "react"
import { MoreHorizontal } from "react-feather"
import { Task } from "shared/types/tasks"

import TaskDialog from "@/components/boards/tasks/TaskDialog"
import EditTaskButton from "@/components/boards/views/ListView/EditTaskButton"
import useProjectContext from "@/contexts/ProjectContext"
import useCompleteTask from "@/hooks/api/tasks/useCompleteTask"

interface ITaskCard {
  task: Task
}

const TaskCard = ({ task }: ITaskCard) => {
  const [showDialog, setShowDialog] = useState(false)
  const { project } = useProjectContext()
  const completeMutation = useCompleteTask({
    projectId: project?.id as string,
    boardId: task.boardId,
    taskId: task.id,
  })

  const onCheck = async (e: SyntheticEvent, complete: boolean) => {
    e.stopPropagation()
    await completeMutation.mutateAsync({
      complete,
    })
  }
  const onCheckboxClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const onClickCard = () => setShowDialog(true)
  const onCloseDialog = () => setShowDialog(false)

  return (
    <Card p="sm" withBorder sx={{ display: "flex", alignItems: "center" }}>
      <UnstyledButton onClick={onClickCard}>
        <Group spacing="xs">
          <Checkbox
            // icon={<RadioButtonUnchecked />}
            // checkedIcon={<TaskAlt />}
            checked={task.complete}
            // onChange={onCheck}
            onClick={onCheckboxClick}
          />
          <Text variant="h5" sx={{ fontWeight: "bold" }}>
            {task.name}
          </Text>
        </Group>
        {/* <EditTaskButton icon={<MoreHorizontal />} task={task} /> */}
      </UnstyledButton>

      {showDialog && (
        <TaskDialog
          taskId={task.id}
          onClose={onCloseDialog}
          open={showDialog}
        />
      )}
    </Card>
  )
}

export default TaskCard
