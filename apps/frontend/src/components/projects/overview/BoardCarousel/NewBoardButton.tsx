import { Box, ButtonBase, Fade, Typography } from "@mui/material"
import { SyntheticEvent, useState } from "react"

import CreateBoardPopup from "@/components/boards/CreateBoardPopup"

const NewBoardButton = () => {
  const [hovered, setHovered] = useState(false)
  const [popupAnchor, setPopupAnchor] = useState<HTMLElement>()
  const onMouseOver = () => setHovered(true)
  const onMouseOut = () => setHovered(false)

  const onClick = (e: SyntheticEvent<HTMLButtonElement>) =>
    setPopupAnchor(e.currentTarget)
  const onClosePopup = () => setPopupAnchor(undefined)

  return (
    <Box
      sx={{
        width: 200,
        height: 85,
        overflow: "hidden",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "divider",
        borderRadius: 1,
        position: "relative",
        backgroundColor: "background.paper",
        transition: ".2s all ease-in-out",
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
      <ButtonBase sx={{ width: "100%", height: "100%" }} onClick={onClick}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Create new Board
        </Typography>
      </ButtonBase>
      <CreateBoardPopup anchorEl={popupAnchor} onClose={onClosePopup} />
    </Box>
  )
}

export default NewBoardButton
