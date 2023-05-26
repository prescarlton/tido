import { Card, CardActionArea, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { BoardList } from "shared/types/boards"

type IBoardCard = BoardList

const BoardCard = ({ name, id, tasks }: IBoardCard) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`${id}`)
  }
  return (
    <Card
      sx={{
        width: 200,
        height: 80,
        display: "flex",
      }}
    >
      <CardActionArea
        onClick={handleCardClick}
        sx={{
          height: "100%",
          width: "100%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h5">{name}</Typography>
        <Typography variant="caption">{tasks?.length} tasks</Typography>
      </CardActionArea>
    </Card>
  )
}

export default BoardCard
