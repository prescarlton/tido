import { ActionIcon, Box, Group, Title } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"
import { Dispatch, FocusEvent, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import { BoardView } from "shared/types/boards"

import useBoardContext from "@/contexts/BoardContext"
import useProjectContext from "@/contexts/ProjectContext"
import useRenameBoard from "@/hooks/api/boards/useRenameBoard"

import BoardViewSwitcher from "./BoardViewSwitcher"
import EditBoardButton from "./EditBoardButton"

interface IBoardPageHeader {
  tab: BoardView
  setTab: Dispatch<SetStateAction<BoardView>>
}

const BoardPageHeader = ({ tab, setTab }: IBoardPageHeader) => {
  const { project } = useProjectContext()
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
    <Box
      style={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: ".25rem 1rem",
        height: 48,
      })}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Group gap="sm" style={{ alignItems: "center" }}>
          <Group gap="xxs">
            <ActionIcon onClick={onClickBack}>
              <IconChevronLeft />
            </ActionIcon>
            <Title
              size="h4"
              style={(theme) => ({
                fontWeight: "bold",
                borderRadius: theme.radius.sm,
              })}
              contentEditable
              suppressContentEditableWarning
              onBlur={submit}
              px="xs"
            >
              {board?.name}
            </Title>
          </Group>
          <Group gap="xxs">
            <BoardViewSwitcher tab={tab} setTab={setTab} />
          </Group>
        </Group>
        <Group gap="sm" style={{ alignItems: "center" }}>
          <EditBoardButton />
        </Group>
      </Box>
    </Box>
  )
}

export default BoardPageHeader
