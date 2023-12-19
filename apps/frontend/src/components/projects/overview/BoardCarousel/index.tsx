import { Box, Button, Group, Title } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

import BoardCarouselCard from "@/components/projects/overview/BoardCarousel/BoardCarouselCard"
import NewBoardButton from "@/components/projects/overview/BoardCarousel/NewBoardButton"
import useListBoards from "@/hooks/api/boards/useListBoards"

import styles from "./styles.module.scss"
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
    <Box className={styles.container}>
      <Box className={styles.titleContainer}>
        <Title size="h4">Boards</Title>
        <Button
          variant="subtle"
          rightSection={<IconChevronRight />}
          onClick={onClickAllBoards}
        >
          All Boards
        </Button>
      </Box>
      <Group align="center" gap={"md"}>
        {boards?.map((board) => (
          <BoardCarouselCard key={board.id} board={board} />
        ))}
        <NewBoardButton />
      </Group>
    </Box>
  )
}

export default BoardCarousel
