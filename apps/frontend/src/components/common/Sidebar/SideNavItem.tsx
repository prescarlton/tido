import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { MouseEvent, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideNavItem = ({
  open,
  icon,
  label,
  to,
}: {
  open: boolean
  icon: ReactNode
  label: string
  to: string
}) => {
  const location = useLocation()
  const active = location.pathname.endsWith(to)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!open) e.stopPropagation()
  }

  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={handleClick}
          sx={{
            minHeight: 48,
            minWidth: 48,
            justifyContent: open ? 'initial' : 'center',
            transition: '.3s ease-in-out all',
            borderRadius: 2,
            ...(!active && {
              '&:hover': {
                backgroundColor: 'primary.main',
                '*': {
                  color: 'primary.contrastText',
                },
              },
            }),
            ...(active && {
              '*': {
                color: 'primary.contrastText',
              },
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
              },
            }),
          }}
          disableRipple
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
export default SideNavItem
