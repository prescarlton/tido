import { Box, Button, Group, Title } from "@mantine/core"
import { ChevronRight } from "react-feather"
import { useNavigate } from "react-router-dom"

import BoardCarouselCard from "@/components/projects/overview/BoardCarousel/BoardCarouselCard"
import NewBoardButton from "@/components/projects/overview/BoardCarousel/NewBoardButton"
import useListBoards from "@/hooks/api/boards/useListBoards"

interface IBoardCarousel {
  projectId: string
}

const BoardCarousel = ({ projectId }: IBoardCarousel) => {
  const { data: boards } = useListBoards({ projectId })

  const navigate = useNavigate()

  const onClickAllBoards = () => {
    navigate("b")
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Title size="h4">Boards</Title>
        <Button
          variant="subtle"
          rightIcon={<ChevronRight />}
          onClick={onClickAllBoards}
        >
          All Boards
        </Button>
      </Box>
      <Group sx={{ alignItems: "center" }} spacing={16}>
        {boards?.map((board) => (
          <BoardCarouselCard key={board.id} board={board} />
        ))}
        <NewBoardButton />
      </Group>
    </Box>
  )
}

export default BoardCarousel
