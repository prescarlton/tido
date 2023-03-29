import { AccountCircle } from '@mui/icons-material'
import { ClickAwayListener, IconButton } from '@mui/material'
import { MouseEvent, useState } from 'react'

import useGetMe from '@/hooks/api/useMe'

import UserContextMenu from './UserContextMenu'

const UserComponent = () => {
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
      <>
        <IconButton color="primary" onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <UserContextMenu
          anchorEl={anchorEl}
          handleClose={handleClose}
          me={me}
        />
      </>
    </ClickAwayListener>
  )
}
export default UserComponent
