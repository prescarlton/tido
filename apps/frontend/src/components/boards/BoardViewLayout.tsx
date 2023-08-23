import { Box, Group, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { ReactNode } from "react"

import useBoardContext from "@/contexts/BoardContext"

import BoardViewSwitcher from "./BoardViewSwitcher"
import CreateTaskButton from "./CreateTaskButton"

interface IBoardViewLayout {
  children: ReactNode
}

const BoardViewLayout = ({ children }: IBoardViewLayout) => {
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
          <Group spacing="sm">
            <BoardViewSwitcher tab={boardView} setTab={setBoardView} />
            <TextInput
              value={taskSearchValue}
              onChange={(e) => setTaskSearchValue(e.target.value)}
              placeholder="Search for tasks"
              icon={<IconSearch />}
            />
          </Group>
          <CreateTaskButton />
        </Group>
        <Box sx={{ overflow: "auto" }}>{children}</Box>
      </Box>
    </>
  )
}

export default BoardViewLayout
