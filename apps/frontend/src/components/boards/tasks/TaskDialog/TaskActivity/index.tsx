import { Stack, Text } from "@mantine/core"

import ActivityItem from "@/components/boards/tasks/TaskDialog/TaskActivity/ActivityItem"
import useAppContext from "@/contexts/AppContext"
import useGetTaskActivity from "@/hooks/api/tasks/useGetTaskActivity"

interface ITaskActivity {
  taskId?: string
}

const TaskActivity = ({ taskId }: ITaskActivity) => {
  const { projectId, boardId } = useAppContext()
  const { data: taskActivity } = useGetTaskActivity({
    taskId,
    projectId,
    boardId: boardId || "",
  })

  return (
    <Stack gap="sm">
      {/*
      <Title size="h6">Activity</Title>
      */}
      {taskActivity?.length === 0 ? (
        <Text color="dimmed" size="sm">
          Once things start happening with this task, update history will show
          up here.
        </Text>
      ) : (
        <Stack gap="sm">
          {taskActivity?.map((act) => (
            <ActivityItem key={act.id} activity={act} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default TaskActivity
