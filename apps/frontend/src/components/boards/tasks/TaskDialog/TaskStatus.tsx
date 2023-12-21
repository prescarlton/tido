import { Group, SelectProps, Skeleton, Text } from "@mantine/core"
import { useFormContext } from "react-hook-form"

import ControlledSelect from "@/components/fields/ControlledSelect"
import useAppContext from "@/contexts/AppContext"
import useListTaskStatuses from "@/hooks/api/boards/useListTaskStatuses"

const TaskStatus = () => {
  const { projectId } = useAppContext()
  const { data: statuses } = useListTaskStatuses({
    projectId,
  })
  const { control } = useFormContext()

  return (
    <Group gap="xl">
      <Text c="dimmed" w={100}>
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
