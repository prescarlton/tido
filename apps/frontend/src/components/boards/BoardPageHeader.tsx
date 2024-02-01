import {
  ActionIcon,
  Box,
  Breadcrumbs,
  Button,
  Group,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"
import { Dispatch, FocusEvent, SetStateAction } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BoardView } from "shared/types/boards"

import useAppContext from "@/contexts/AppContext"
import useBoardContext from "@/contexts/BoardContext"
import useRenameBoard from "@/hooks/api/boards/useRenameBoard"

import BoardViewSwitcher from "./BoardViewSwitcher"
import EditBoardButton from "./EditBoardButton"

interface IBoardPageHeader {
  tab: BoardView
  setTab: Dispatch<SetStateAction<BoardView>>
}

const BoardPageHeader = ({ tab, setTab }: IBoardPageHeader) => {
  const { project } = useAppContext()
  const navigate = useNavigate()
  const { boardId, board, taskSearchValue, setTaskSearchValue } =
    useBoardContext()

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
  }

  return (
    <Stack
      gap={0}
      style={{
        padding: " 1rem",
      }}
    >
      <Breadcrumbs separator="/">
        <UnstyledButton c="dimmed">{project?.name}</UnstyledButton>
        <UnstyledButton c="dimmed">Boards</UnstyledButton>
      </Breadcrumbs>
      <Box
        style={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        })}
      >
        <Title
          size="h3"
          style={(theme) => ({
            fontWeight: "bold",
          })}
          contentEditable
          suppressContentEditableWarning
          onBlur={submit}
        >
          {board?.name}
        </Title>
        <Group gap="xs">
          <BoardViewSwitcher tab={tab} setTab={setTab} />
          <EditBoardButton />
        </Group>
      </Box>
    </Stack>
  )
}

export default BoardPageHeader
