import { Card, Text, Title, UnstyledButton } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { BoardList } from "shared/types/boards"

interface IBoardCarouselCard {
  board: BoardList
}

const BoardCarouselCard = ({
  board: { name, tasks, id, color },
}: IBoardCarouselCard) => {
  const navigate = useNavigate()

  const onClick = () => navigate(`b/${id}`)

  return (
    <Card
      sx={(theme) => ({
        width: 200,
        height: 85,
        overflow: "hidden",
        position: "relative",
        transition: ".2s all ease-in-out",
        backgroundColor: theme.colors[color][theme.fn.primaryShade()],
        padding: "0px !important",
        "&:hover": {
          boxShadow: theme.shadows.sm,
        },
      })}
      withBorder
    >
      <UnstyledButton
        sx={(theme) => ({
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: ".5rem",
          color: theme.white,
        })}
        onClick={onClick}
      >
        <Title size="h5" sx={{ fontWeight: "bold" }}>
          {name}
        </Title>
        <Text size="xs">{tasks?.length} tasks</Text>
      </UnstyledButton>
    </Card>
  )
}

export default BoardCarouselCard
