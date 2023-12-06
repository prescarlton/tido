import { Group, SelectProps, Skeleton, Text } from "@mantine/core"
import { useFormContext } from "react-hook-form"

import ControlledSelect from "@/components/fields/ControlledSelect"
import useProjectContext from "@/contexts/ProjectContext"
import useListTaskStatuses from "@/hooks/api/boards/useListTaskStatuses"

const TaskStatus = () => {
  const { boardId, projectId } = useProjectContext()
  const { data: statuses } = useListTaskStatuses({
    id: boardId as string,
    projectId,
  })
  const { control } = useFormContext()

  return (
    <Group spacing="xl">
      <Text color="dimmed" w={100}>
        Status
      </Text>
      {statuses ? (
        <ControlledSelect
          control={control}
          name="status"
          options={statuses}
          SelectProps={{ sx: { width: 200 } } as SelectProps}
        />
      ) : (
        <Skeleton width={200} />
      )}
    </Group>
  )
}

export default TaskStatus
