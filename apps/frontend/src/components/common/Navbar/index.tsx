import {
  Article,
  CalendarMonth,
  Dashboard,
  Home,
  Settings,
} from '@mui/icons-material'
import {
  Box,
  ClickAwayListener,
  List,
  NativeSelect,
  Select,
  TextField,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import NavItem from './NavItem'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleOpenDrawer = () => setOpen(true)
  const handleCloseDrawer = () => setOpen(false)
  const theme = useTheme()

  const pages = [
    {
      title: 'Home',
      href: '/',
      icon: <Home />,
    },
    {
      title: 'Boards',
      href: '/boards',
      icon: <Dashboard />,
    },
    {
      title: 'Documents',
      href: '/documents',
      icon: <Article />,
    },
    {
      title: 'Calendar',
      href: '/calendar',
      icon: <CalendarMonth />,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <Settings />,
    },
  ]

  return (
    <ClickAwayListener onClickAway={handleCloseDrawer}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: open ? 240 : `calc(${theme.spacing(8)} + 1px)`,
          transition: 'width 0.3s',
          gap: 3,
          borderRight: 1,
          borderColor: 'divider',
          overflowX: 'hidden',
          p: 1,
        }}
        onClick={handleOpenDrawer}
      >
        {open && (
          <Select variant="outlined">
            <option value="en">English</option>
            <option value="fr">French</option>
          </Select>
        )}
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
          }}
        >
          {pages.map((page) => (
            <NavItem
              key={page.title}
              open={open}
              label={page.title}
              icon={page.icon}
              to={page.href}
            />
          ))}
        </List>
      </Box>
    </ClickAwayListener>
  )
}

export default Navbar
