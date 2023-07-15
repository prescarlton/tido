import {
  Box,
  Button,
  Group,
  Header,
  Paper,
  TextInput,
  Title,
} from "@mantine/core"
import {
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react"
import { Board, BoardView } from "shared/types/boards"

import BoardViewSwitcher from "@/components/boards/BoardViewSwitcher"
import useProjectContext from "@/contexts/ProjectContext"
import useRenameBoard from "@/hooks/api/boards/useRenameBoard"

import EditBoardButton from "./EditBoardButton"

interface IBoardPageHeader {
  board: Board
  tab: BoardView
  setTab: Dispatch<SetStateAction<BoardView>>
}

const BoardPageHeader = ({ board, tab, setTab }: IBoardPageHeader) => {
  const [showTextField, setShowTextField] = useState(false)
  const textFieldRef = useRef<HTMLDivElement>(null)
  const { project } = useProjectContext()

  const toggleTextField = () => {
    setShowTextField((prev) => !prev)
  }
  const renameMutation = useRenameBoard()

  const handleBlurTextField = async ({
    target,
  }: FocusEvent<HTMLInputElement>) => {
    if (target.value) {
      await renameMutation.mutateAsync({
        name: target.value,
        boardId: board.id,
        projectId: project?.id as string,
      })
      setShowTextField(false)
    }
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
          {showTextField ? (
            <TextInput
              defaultValue={board.name}
              onBlur={handleBlurTextField}
              // InputProps={{
              //   sx: {
              //     fontWeight: "bold",
              //     fontSize: theme.typography.h3.fontSize,
              //     minWidth: 0,
              //   },
              // }}
              // inputRef={textFieldRef}
              variant="standard"
            />
          ) : (
            <Title
              size="h4"
              sx={{ fontWeight: "bold" }}
              onClick={toggleTextField}
            >
              {board.name}
            </Title>
          )}
          <BoardViewSwitcher tab={tab} setTab={setTab} />
        </Group>
      </Box>
      <EditBoardButton />
    </Header>
  )
}

export default BoardPageHeader
