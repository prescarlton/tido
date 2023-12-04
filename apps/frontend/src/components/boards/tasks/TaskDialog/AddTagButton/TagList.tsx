import {
  ActionIcon,
  Button,
  Checkbox,
  Flex,
  Stack,
  Tooltip,
} from "@mantine/core"
import { useDebouncedState, useDidUpdate } from "@mantine/hooks"
import { IconEdit } from "@tabler/icons-react"
import { useParams } from "react-router-dom"
import { TaskTag as TaskTagType } from "shared/types/tasks"

import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"
import useListBoardTags from "@/hooks/api/boards/useListBoardTags"
import useUpdateTaskTags from "@/hooks/api/tasks/useUpdateTaskTags"

interface IListTags {
  switchStep: (selectedTag?: TaskTagType) => void
  taskId: string
  startingTags: TaskTagType[]
}

const TagList = ({ switchStep, taskId, startingTags }: IListTags) => {
  const [taskTags, setTaskTags] = useDebouncedState<string[]>(
    startingTags.map((tag) => tag.id.toString()),
    750
  )
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }

  const { data: tags } = useListBoardTags({
    id: boardId,
    projectId,
  })

  const updateMutation = useUpdateTaskTags({ boardId, projectId, taskId })

  const onClickCreate = () => {
    switchStep()
  }

  useDidUpdate(() => {
    updateMutation.mutate({ tags: taskTags.map((tag) => Number(tag)) })
  }, [taskTags])

  return (
    <Stack spacing="xs">
      <Checkbox.Group defaultValue={taskTags} onChange={setTaskTags}>
        <Stack spacing="xxs">
          {tags?.map((tag) => (
            <Checkbox
              key={tag.id}
              value={tag.id.toString()}
              label={
                <Tooltip label={tag.name}>
                  <Flex align="center" gap="xxs">
                    <TaskTag tag={tag} />
                    <ActionIcon size="sm" onClick={() => switchStep(tag)}>
                      <IconEdit />
                    </ActionIcon>
                  </Flex>
                </Tooltip>
              }
              styles={(theme) => ({
                body: { alignItems: "center" },
                labelWrapper: {
                  flex: 1,
                  "& .taskTag": { flex: 1, width: 100 },
                },
                label: {
                  paddingLeft: theme.spacing.xxs,
                },
                input: {
                  cursor: "pointer",
                },
              })}
            />
          ))}
        </Stack>
      </Checkbox.Group>
      <Button variant="outline" onClick={onClickCreate} size="xs">
        Create Tag
      </Button>
    </Stack>
  )
}
export default TagList
