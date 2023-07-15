import { Box, Button, Checkbox, Group, Stack } from "@mantine/core"
import { useParams } from "react-router-dom"

import TaskTag from "@/components/boards/tasks/TaskDialog/TaskTag"
import useListBoardTags from "@/hooks/api/boards/useListBoardTags"

interface IListTags {
  switchStep: () => void
}

const ListTags = ({ switchStep }: IListTags) => {
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }

  const { data: tags } = useListBoardTags({
    id: boardId,
    projectId,
  })

  return (
    <Box>
      <Stack spacing="xs">
        <Stack spacing="xxs">
          {tags?.map((tag) => (
            <Group spacing="xs" key={tag.id}>
              <Checkbox size="xs" />
              <TaskTag tag={tag} />
            </Group>
          ))}
        </Stack>
        <Button variant="outline" onClick={switchStep} size="xs">
          Create Tag
        </Button>
      </Stack>
    </Box>
  )
}
export default ListTags
