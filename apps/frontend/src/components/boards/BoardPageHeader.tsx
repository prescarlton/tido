import { Box, Group, Header, TextInput, Title } from "@mantine/core"
import {
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react"
import { BoardView } from "shared/types/boards"
import { Search } from "tabler-icons-react"

import BoardViewSwitcher from "@/components/boards/BoardViewSwitcher"
import CreateTaskButton from "@/components/boards/CreateTaskButton"
import useBoardContext from "@/contexts/BoardContext"
import useProjectContext from "@/contexts/ProjectContext"
import useRenameBoard from "@/hooks/api/boards/useRenameBoard"

import EditBoardButton from "./EditBoardButton"

interface IBoardPageHeader {
  tab: BoardView
  setTab: Dispatch<SetStateAction<BoardView>>
}

const BoardPageHeader = ({ tab, setTab }: IBoardPageHeader) => {
  const [showTextField, setShowTextField] = useState(false)
  const textFieldRef = useRef<HTMLInputElement>(null)
  const { project } = useProjectContext()
  const { boardId, board, taskSearchValue, setTaskSearchValue } =
    useBoardContext()

  const toggleTextField = () => {
    setShowTextField((prev) => !prev)
  }
  const renameMutation = useRenameBoard()

  const submit = async (e: FocusEvent<HTMLHeadingElement>) => {
    if (e.target.innerHTML)
      await renameMutation.mutateAsync({
        name: e.target.innerHTML,
        boardId,
        projectId: project?.id as string,
      })
    setShowTextField(false)
  }

  useEffect(() => {
    if (showTextField) textFieldRef.current?.focus()
  }, [showTextField])

  return (
    <Header
      height={48}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: ".25rem 1rem",
        zIndex: 100,
      })}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flex: 1,
        }}
      >
        <Group spacing={16} sx={{ alignItems: "center" }}>
          <Title
            size="h4"
            sx={(theme) => ({
              fontWeight: "bold",
              borderRadius: theme.radius.sm,
            })}
            onClick={toggleTextField}
            contentEditable
            onBlur={submit}
            px="xs"
          >
            {board?.name}
          </Title>
          <TextInput
            value={taskSearchValue}
            onChange={(e) => setTaskSearchValue(e.target.value)}
            placeholder="Search for tasks"
            icon={<Search />}
          />

          <CreateTaskButton />
          <BoardViewSwitcher tab={tab} setTab={setTab} />
        </Group>
      </Box>
      <EditBoardButton />
    </Header>
  )
}

export default BoardPageHeader
