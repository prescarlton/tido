import { ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { MouseEvent, ReactNode } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

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
  const active = location.pathname.includes(to)
  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!open) e.stopPropagation()
    navigate(to)
  }

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        onClick={handleClick}
        sx={{
          height: 30,
          justifyContent: open ? "initial" : "center",
          boxSizing: "content-box",
          "*": {
            transition: ".3s ease-in-out all",
            color: active ? "primary.main" : "text.secondary",
          },
          "&:hover": {
            backgroundColor: "transparent",
            "*": {
              color: "primary.main",
            },
            "&:before": {
              backgroundColor: "primary.main",
            },
          },
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: 4,
            height: "100%",
            backgroundColor: active ? "primary.main" : "transparent",
            transition: ".3s ease-in-out all",
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          },
        }}
        disableRipple
      >
        <ListItemIcon
          sx={{
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  )
}
export default SideNavItem
