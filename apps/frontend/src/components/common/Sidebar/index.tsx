import useProjectContext from '@/contexts/ProjectContext'
import {
  ArrowDropDown,
  Article,
  CalendarMonth,
  Dashboard,
  Home,
  Settings,
} from '@mui/icons-material'
import { Box, Button, List, useTheme } from '@mui/material'
import { useState } from 'react'
import NavItem from './SideNavItem'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const handleOpenDrawer = () => setOpen(true)
  const handleCloseDrawer = () => setOpen(false)
  const theme = useTheme()

  const pages = [
    {
      title: 'Home',
      to: 'home',
      icon: <Home />,
    },
    {
      title: 'Boards',
      to: 'boards',
      icon: <Dashboard />,
    },
    {
      title: 'Resources',
      to: 'resources',
      icon: <Article />,
    },
    {
      title: 'Calendar',
      to: 'calendar',
      icon: <CalendarMonth />,
    },
    {
      title: 'Settings',
      to: 'settings',
      icon: <Settings />,
    },
  ]

  const { project } = useProjectContext()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: open ? 240 : `calc(${theme.spacing(8)} + 1px)`,
        transition: 'width 0.3s',
        borderRight: 1,
        borderColor: 'divider',
        overflowX: 'hidden',
        p: 1,
        gap: 2,
      }}
      onClick={handleOpenDrawer}
    >
      {open && (
        <Button
          variant="text"
          endIcon={<ArrowDropDown />}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {project?.name}
        </Button>
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
            to={page.to}
          />
        ))}
      </List>
    </Box>
  )
}

export default Sidebar
