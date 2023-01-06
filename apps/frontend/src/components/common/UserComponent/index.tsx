import useGetMe from '@/hooks/api/useMe'
import { Avatar, ClickAwayListener } from '@mui/material'
import { MouseEvent, useState } from 'react'
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
        <Avatar
          sx={{
            height: 36,
            width: 36,
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          {me?.firstName[0]}
          {me?.lastName[0]}
        </Avatar>
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
