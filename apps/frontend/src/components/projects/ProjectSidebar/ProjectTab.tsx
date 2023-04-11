import { alpha, ButtonBase, useTheme } from "@mui/material"
import { Link, matchPath, useLocation } from "react-router-dom"

interface IProjectTab {
  to: string
  indent?: boolean
  label: string
  value: string
}

const ProjectTab = ({ to, label, indent = false, value }: IProjectTab) => {
  const { pathname } = useLocation()
  const theme = useTheme()

  const isSelected = Boolean(matchPath(value, pathname))

  const hoverColor = alpha(theme.palette.background.paper, 0.7)
  const selectedColor = alpha(theme.palette.primary.main, 0.3)

  return (
    <ButtonBase
      to={to}
      component={Link}
      disableRipple
      sx={{
        fontSize: ".875rem",
        minHeight: 0,
        textTransform: "none",
        transition: ".2s ease-in-out",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: isSelected ? "" : hoverColor,
        },
        justifyContent: "left",
        px: 2,
        height: 36,
        fontWeight: isSelected ? 700 : "normal",
        backgroundColor: isSelected ? selectedColor : "none",
        ml: indent ? 2 : 0,
      }}
    >
      {label}
    </ButtonBase>
  )
}

export default ProjectTab
