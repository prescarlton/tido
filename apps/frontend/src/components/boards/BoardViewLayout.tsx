import { Box, Group, Text, TextInput, Title } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { ReactNode } from "react"
import { Task } from "shared/types/tasks"

import useBoardContext from "@/contexts/BoardContext"

import BoardViewFilters from "./BoardViewFilters"
import BoardViewOnlyMe from "./BoardViewOnlyMe"
import BoardViewSort from "./BoardViewSort"
import BoardViewSwitcher from "./BoardViewSwitcher"
import CreateTaskButton from "./CreateTaskButton"

interface IBoardViewLayout {
  tasks: Task[]
  children: ReactNode
}

const BoardViewLayout = ({ children, tasks }: IBoardViewLayout) => {
  const { taskSearchValue, setTaskSearchValue, boardView, setBoardView } =
    useBoardContext()
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Group position="apart" align="center" p="sm">
          <Group spacing="xs">
            <BoardViewSwitcher tab={boardView} setTab={setBoardView} />
            <BoardViewFilters />
            <BoardViewSort />
          </Group>
          <Group spacing="xs">
            <BoardViewOnlyMe />
            <TextInput
              value={taskSearchValue}
              onChange={(e) => setTaskSearchValue(e.target.value)}
              placeholder="Search for tasks"
              icon={<IconSearch />}
            />
            <CreateTaskButton />
          </Group>
        </Group>
        {tasks.length === 0 ? (
          <Title sx={{ alignSelf: "center" }} size="h3" mt="sm" c="dimmed">
            No tasks found.
          </Title>
        ) : (
          <Box sx={{ overflow: "auto" }}>{children}</Box>
        )}
      </Box>
    </>
  )
}

export default BoardViewLayout
