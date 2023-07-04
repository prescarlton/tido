import {
  Box,
  Card,
  Text,
  Title,
  Transition,
  UnstyledButton,
} from "@mantine/core"
import { SyntheticEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BoardList } from "shared/types/boards"

interface IBoardCarouselCard {
  board: BoardList
}

const BoardCarouselCard = ({
  board: { name, tasks, id, color },
}: IBoardCarouselCard) => {
  const [hovered, setHovered] = useState(false)

  const navigate = useNavigate()
  // const theme = useTheme()

  const onClickFavorite = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  }
  const onClick = () => navigate(`b/${id}`)
  const onMouseOver = () => setHovered(true)
  const onMouseOut = () => setHovered(false)

  return (
    <Card
      sx={(theme) => ({
        width: 200,
        height: 85,
        overflow: "hidden",
        position: "relative",
        transition: ".2s all ease-in-out",
        backgroundColor: color,
        padding: "0px !important",
        "&:hover": {
          boxShadow: theme.shadows.sm,
        },
      })}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      withBorder
    >
      <UnstyledButton
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: ".5rem",
          // background:
          //   "linear-gradient(to bottom, rgba(0,0,0,.3) 0%,rgba(0,0,0,.1) 100%)",
        }}
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
