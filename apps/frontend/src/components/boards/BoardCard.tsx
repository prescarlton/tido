import { Card, CardActionArea, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const BoardCard = ({ name, id }: { name: string; id: string }) => {
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
        <Typography variant="caption">64 tasks</Typography>
      </CardActionArea>
    </Card>
  )
}

export default BoardCard
