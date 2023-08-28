import { ActionIcon, Checkbox, Popover, Stack, Text } from "@mantine/core"
import { IconFilter } from "@tabler/icons-react"

import useBoardContext from "@/contexts/BoardContext"
import useProjectContext from "@/contexts/ProjectContext"
import useListBoardTags from "@/hooks/api/boards/useListBoardTags"

import TaskTag from "../tasks/TaskDialog/TaskTag"

const BoardViewFilters = () => {
  const { boardId, projectId } = useProjectContext() as {
    boardId: string
    projectId: string
  }
  const { setTaskFilterValue, taskFilterValue } = useBoardContext()
  const { data: tags } = useListBoardTags({ id: boardId, projectId })

  const onChange = (tags: string[]) => {
    setTaskFilterValue((prev) => ({ ...prev, tags }))
  }

  return (
    <Popover>
      <Popover.Target>
        <ActionIcon>
          <IconFilter />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Text>Tags</Text>
        <Checkbox.Group value={taskFilterValue.tags || []} onChange={onChange}>
          <Stack spacing="xs">
            {tags?.map((tag) => (
              <Checkbox
                key={tag.id}
                size="xs"
                value={tag.id}
                label={<TaskTag tag={tag} grow />}
              />
            ))}
          </Stack>
        </Checkbox.Group>
      </Popover.Dropdown>
    </Popover>
  )
}
export default BoardViewFilters
