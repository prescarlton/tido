import { alpha, Box, ButtonBase, useTheme } from "@mui/material"
import { random } from "lodash"
import { useLocation, useNavigate } from "react-router-dom"
import { Project } from "shared/types/projects"

interface ISidebarProjectItem {
  project: Project
}

const SidebarProjectItem = ({ project }: ISidebarProjectItem) => {
  const color = [random(0, 255), random(0, 255), random(0, 255)]

  const location = useLocation()
  const active = location.pathname.includes(project.id)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }

  const theme = useTheme()

  const hoverColor = alpha(theme.palette.background.paper, 0.7)
  const selectedColor = alpha(theme.palette.background.paper, 0.8)

  return (
    <ButtonBase
      onClick={handleClick}
      sx={{
        display: "flex",
        justifyContent: "start",
        gap: 0.75,
        py: 1,
        px: 2,
        width: "100%",
        "&:hover": {
          backgroundColor: active ? "" : hoverColor,
        },
        backgroundColor: active ? selectedColor : "none",
      }}
    >
      <Box
        sx={{
          height: 16,
          width: 16,
          borderRadius: 1,
          backgroundColor: `rgb(${color.join(",")})`,
        }}
      />
      {project.name}
    </ButtonBase>
  )
}

export default SidebarProjectItem
