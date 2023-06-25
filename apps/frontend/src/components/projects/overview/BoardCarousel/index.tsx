import { Box, Button, Stack, Typography } from "@mui/material"
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
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        <Typography variant="h4">Boards</Typography>
        <Button
          variant="text"
          endIcon={<ChevronRight />}
          onClick={onClickAllBoards}
        >
          All Boards
        </Button>
      </Box>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        {boards?.map((board) => (
          <BoardCarouselCard key={board.id} board={board} />
        ))}
        <NewBoardButton />
      </Stack>
    </Box>
  )
}

export default BoardCarousel
