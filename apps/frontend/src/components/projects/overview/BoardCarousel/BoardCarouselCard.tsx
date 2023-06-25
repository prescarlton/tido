import {
  Box,
  ButtonBase,
  Fade,
  Grow,
  IconButton,
  Slide,
  Typography,
  useTheme,
} from "@mui/material"
import { SyntheticEvent, useRef, useState } from "react"
import { Star } from "react-feather"
import { useNavigate } from "react-router-dom"
import { BoardList } from "shared/types/boards"

interface IBoardCarouselCard {
  board: BoardList
}

const BoardCarouselCard = ({
  board: { name, tasks, id, color },
}: IBoardCarouselCard) => {
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLAnchorElement>()

  const navigate = useNavigate()
  const theme = useTheme()

  const onClickFavorite = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  }
  const onClick = () => navigate(`b/${id}`)
  const onMouseOver = () => setHovered(true)
  const onMouseOut = () => setHovered(false)

  const contrastText = theme.palette.getContrastText(color)

  return (
    <Box
      ref={containerRef}
      sx={{
        width: 200,
        height: 85,
        overflow: "hidden",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "divider",
        borderRadius: 1,
        position: "relative",
        transition: ".2s all ease-in-out",
        backgroundColor: color,
        color: contrastText,
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Fade in={hovered}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />
      </Fade>
      <ButtonBase
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          p: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.3) 0%,rgba(0,0,0,.1) 100%)",
        }}
        onClick={onClick}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ color: contrastText }}>
          {tasks?.length} tasks
        </Typography>
        <Slide in={hovered} container={containerRef?.current} direction="left">
          <IconButton
            sx={{ position: "absolute", bottom: 0, right: 0, zIndex: 2 }}
            size="small"
            onClick={onClickFavorite}
          >
            <Star size="1rem" />
          </IconButton>
        </Slide>
      </ButtonBase>
    </Box>
  )
}

export default BoardCarouselCard
