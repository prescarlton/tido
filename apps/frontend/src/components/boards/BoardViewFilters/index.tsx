import {
  ActionIcon,
  Checkbox,
  Popover,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { IconFilter, IconFilterFilled } from "@tabler/icons-react"
import { flatMap } from "lodash"

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

  const onChangeTags = (tags: string[]) => {
    setTaskFilterValue((prev) => ({ ...prev, tags }))
  }
  const theme = useMantineTheme()
  const isFilterActive = flatMap(Object.values(taskFilterValue)).length > 0

  return (
    <Popover>
      <Popover.Target>
        <ActionIcon color={isFilterActive ? theme.primaryColor : "gray"}>
          {isFilterActive ? <IconFilterFilled /> : <IconFilter />}
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Text>Tags</Text>
        <Checkbox.Group
          value={taskFilterValue.tags || []}
          onChange={onChangeTags}
        >
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
