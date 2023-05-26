import { MoreHoriz } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { MouseEvent, useState } from "react"

import EditBoardMenu from "./EditBoardMenu"

const EditBoardButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHoriz />
      </IconButton>
      <EditBoardMenu anchorEl={anchorEl} onClose={handleClose} />
    </>
  )
}

export default EditBoardButton
