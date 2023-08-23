import { ActionIcon, Box, Group, Header, Title } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"
import {
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react"
import { useNavigate } from "react-router-dom"
import { BoardView } from "shared/types/boards"

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
  const navigate = useNavigate()
  const { boardId, board, taskSearchValue, setTaskSearchValue } =
    useBoardContext()

  const toggleTextField = () => {
    setShowTextField((prev) => !prev)
  }
  const renameMutation = useRenameBoard()

  const onClickBack = () => {
    navigate(-1)
  }

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
      height={64}
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
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Group spacing="sm" sx={{ alignItems: "center" }}>
          <Group spacing="xxs">
            <ActionIcon onClick={onClickBack}>
              <IconChevronLeft />
            </ActionIcon>
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
          </Group>
        </Group>
        <Group spacing="sm" sx={{ alignItems: "center" }}>
          {/*
          <TextInput
            value={taskSearchValue}
            onChange={(e) => setTaskSearchValue(e.target.value)}
            placeholder="Search for tasks"
            icon={<Search />}
          />
          */}
          <EditBoardButton />
        </Group>
      </Box>
    </Header>
  )
}

export default BoardPageHeader
