// import { alpha, Box, ButtonBase, useTheme } from "@mui/material"
import { Box, rem, UnstyledButton, useMantineTheme } from "@mantine/core"
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

  // const hoverColor = alpha(theme.palette.background.paper, 0.7)
  // const selectedColor = alpha(theme.palette.background.paper, 0.8)

  return (
    <UnstyledButton
      onClick={handleClick}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "start",
        gap: 6,
        padding: `${rem(8)} ${theme.spacing.xs}`,
        borderRadius: theme.radius.sm,
        fontSize: theme.fontSizes.sm,
        "&:hover": {
          backgroundColor: active
            ? ""
            : theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        },

        backgroundColor: active
          ? theme.fn.variant({
              variant: "light",
              color: theme.primaryColor,
            }).background
          : "transparent",
        color: active
          ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
              .color
          : "",
      })}
    >
      {project.name}
    </UnstyledButton>
  )
}

export default SidebarProjectItem
