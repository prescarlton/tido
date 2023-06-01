import { MoreHoriz, RadioButtonUnchecked, TaskAlt } from "@mui/icons-material"
import {
  Card,
  CardActionArea,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material"
import { SyntheticEvent, useState } from "react"
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
    <Card>
      <CardActionArea
        onClick={onClickCard}
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
          alignItems: "center",
          justifyContent: "space-between",
          transition: ".2s all ease-in-out",
          "&:hover": {
            cursor: "pointer",
            boxShadow: 3,
            color: "primary.main",
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox
            icon={<RadioButtonUnchecked />}
            checkedIcon={<TaskAlt />}
            checked={task.complete}
            onChange={onCheck}
            onClick={onCheckboxClick}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {task.name}
          </Typography>
        </Stack>
        <EditTaskButton icon={<MoreHoriz />} />
      </CardActionArea>
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
