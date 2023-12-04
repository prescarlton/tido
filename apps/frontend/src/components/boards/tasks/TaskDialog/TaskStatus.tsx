import { Group, Text } from "@mantine/core"
import { useFormContext } from "react-hook-form"
import { TaskStatus as TaskStatusType } from "shared/types/tasks"

import ControlledSelect from "@/components/fields/ControlledSelect"
import useProjectContext from "@/contexts/ProjectContext"
import useListTaskStatuses from "@/hooks/api/boards/useListTaskStatuses"

interface ITaskStatus {
  status: TaskStatusType
}

const TaskStatus = ({ status }: ITaskStatus) => {
  const { boardId, projectId } = useProjectContext()
  const { data: statuses } = useListTaskStatuses({
    id: boardId as string,
    projectId,
  })
  const { control } = useFormContext()

  return (
    statuses && (
      <Group spacing="xl">
        <Text color="dimmed" w={100}>
          Status
        </Text>
        <ControlledSelect control={control} name="status" options={statuses} />
      </Group>
    )
  )
}

export default TaskStatus
