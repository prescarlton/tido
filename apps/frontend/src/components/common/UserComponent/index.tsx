import { Box, ButtonBase, ClickAwayListener } from "@mui/material"
import { MouseEvent, useState } from "react"

import useGetMe from "@/hooks/api/useMe"

import UserContextMenu from "./UserContextMenu"

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const { data: me } = useGetMe()

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box
        sx={{
          display: "flex",
          zIndex: 100,
          position: "absolute",
          top: 0,
          right: 0,
          mt: 2,
          mx: 2.5,
        }}
      >
        <ButtonBase
          sx={{
            borderRadius: 100,
            width: 36,
            height: 36,
            backgroundColor: "primary.main",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
        <UserContextMenu
          anchorEl={anchorEl}
          handleClose={handleClose}
          me={me}
        />
      </Box>
    </ClickAwayListener>
  )
}
export default UserMenu
