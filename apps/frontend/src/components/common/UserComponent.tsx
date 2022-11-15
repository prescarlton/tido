import { ArrowDropDown, Logout, Settings } from '@mui/icons-material'
import {
  Avatar,
  Box,
  ButtonBase,
  ClickAwayListener,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuList,
  Stack,
  Typography,
} from '@mui/material'
import { MouseEvent, useState } from 'react'

const UserComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            position: 'absolute',
            right: 0,
            top: 0,
            m: 2,
            cursor: 'pointer',
            borderRadius: 1,
          }}
          onClick={handleClick}
        >
          <Avatar
            sx={{
              height: 36,
              width: 36,
            }}
          >
            PC
          </Avatar>
          <Stack spacing={-0.25} sx={{ textAlign: 'left' }}>
            <Typography variant="body2">Preston Carlton</Typography>
            <Typography variant="caption" color="text.secondary">
              @preston
            </Typography>
          </Stack>
        </Box>
        <Menu
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorEl={anchorEl}
          PaperProps={{
            sx: {
              mt: 2,
              width: 200,
            },
          }}
        >
          <Stack spacing={1}>
            <Typography variant="body1" sx={{ p: 1 }}>
              Preston Carlton
            </Typography>
            <MenuList>
              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText>Log out</ListItemText>
              </ListItem>
            </MenuList>
          </Stack>
        </Menu>
      </>
    </ClickAwayListener>
  )
}
export default UserComponent
