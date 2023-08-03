import { Stack, Text, Title } from "@mantine/core"

import ActivityItem from "@/components/boards/tasks/TaskDialog/TaskActivity/ActivityItem"
import useProjectContext from "@/contexts/ProjectContext"
import useGetTaskActivity from "@/hooks/api/tasks/useGetTaskActivity"

interface ITaskActivity {
  taskId: string
}

const TaskActivity = ({ taskId }: ITaskActivity) => {
  const { projectId, boardId } = useProjectContext()
  const { data: taskActivity } = useGetTaskActivity({
    taskId,
    projectId,
    boardId: boardId || "",
  })

  return (
    <Stack spacing="sm">
      <Title size="h6">Activity</Title>
      {taskActivity?.length === 0 ? (
        <Text color="dimmed" size="sm">
          Once things start happening with this task, update history will show
          up here.
        </Text>
      ) : (
        <Stack spacing="sm">
          {taskActivity?.map((act) => (
            <ActivityItem key={act.id} activity={act} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default TaskActivity