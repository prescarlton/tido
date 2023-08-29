import {
  ActionIcon,
  Button,
  Checkbox,
  Popover,
  Stack,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core"
import {
  IconChevronDown,
  IconFilter,
  IconFilterFilled,
} from "@tabler/icons-react"
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
        <Tooltip label="Filters" withArrow>
          {/*
          <ActionIcon color={isFilterActive ? theme.primaryColor : "gray"}>
            {isFilterActive ? <IconFilterFilled /> : <IconFilter />}
          </ActionIcon>
          */}
          <Button
            variant="subtle"
            rightIcon={<IconChevronDown />}
            px="xs"
            color="gray"
          >
            Filters
          </Button>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown>
        <Text mb="sm">Tags</Text>
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
