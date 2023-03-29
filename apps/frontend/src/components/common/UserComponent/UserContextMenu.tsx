import { Logout } from '@mui/icons-material'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuList,
  Stack,
  Typography,
} from '@mui/material'
import { Settings } from 'react-feather'

import useAuthContext from '@/contexts/AuthContext'

const UserContextMenu = ({
  anchorEl,
  handleClose,
  me,
}: {
  anchorEl: HTMLElement | null
  handleClose: () => void
  me: any
}) => {
  const { logout } = useAuthContext()

  const handleLogoutClick = () => {
    logout()
  }

  return (
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
          {me?.firstName} {me?.lastName}
        </Typography>
        <MenuList>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
          <ListItem button onClick={handleLogoutClick}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </ListItem>
        </MenuList>
      </Stack>
    </Menu>
  )
}

export default UserContextMenu
