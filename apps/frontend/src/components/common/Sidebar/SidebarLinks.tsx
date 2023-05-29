import { Box, ButtonBase, Typography } from "@mui/material"
import { CheckSquare, Home, Layers, Sliders } from "react-feather"
import { useLocation, useNavigate } from "react-router-dom"

const SidebarLinks = () => {
  const links = [
    {
      label: "Home",
      icon: <Home size={16} />,
      path: "/dashboard",
    },
    {
      label: "Projects",
      icon: <Layers size={16} />,
      path: "/p",
    },
    {
      label: "My tasks",
      icon: <CheckSquare size={16} />,
      path: "/my-tasks",
    },
    {
      label: "Settings",
      icon: <Sliders size={16} />,
      path: "/settings",
    },
  ]
  const location = useLocation()
  const navigate = useNavigate()

  const onClickItem = (path: string) => {
    navigate(path)
  }

  const isActive = (path: string) =>
    path === "/" ? location.pathname === path : location.pathname.includes(path)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        px: 2,
      }}
    >
      {links.map((link) => (
        <ButtonBase
          key={link.label}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
            overflow: "visible",
            "& svg": {
              fontSize: "1rem",
              opacity: 0.5,
            },
            fontWeight: isActive(link.path) ? "bold" : "normal",
            color: isActive(link.path) ? "primary.main" : "text.primary",
          }}
          onClick={() => onClickItem(link.path)}
        >
          {link.icon}
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {link.label}
          </Typography>
        </ButtonBase>
      ))}
    </Box>
  )
}

export default SidebarLinks
