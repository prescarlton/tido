import { RadioButtonUnchecked, TaskAlt } from "@mui/icons-material"
import { Box, Card, Checkbox, Typography } from "@mui/material"
import { SyntheticEvent } from "react"
import { Task } from "shared/types/tasks"

import useProjectContext from "@/contexts/ProjectContext"
import useCompleteTask from "@/hooks/api/tasks/useCompleteTask"

interface ITaskCard {
  task: Task
}

const TaskCard = ({ task }: ITaskCard) => {
  const { project } = useProjectContext()
  const completeMutation = useCompleteTask({
    projectId: project?.id as string,
    boardId: task.boardId,
    taskId: task.id,
  })

  const onCheck = async (e: SyntheticEvent, complete: boolean) => {
    await completeMutation.mutateAsync({
      complete,
    })
  }

  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
      }}
    >
      <Box>
        <Checkbox
          icon={<RadioButtonUnchecked />}
          checkedIcon={<TaskAlt />}
          checked={task.complete}
          onChange={onCheck}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {task.name}
        </Typography>
        <Typography variant="caption">Task Description</Typography>
      </Box>
    </Card>
  )
}

export default TaskCard
