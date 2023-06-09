import { Box, Button, Stack, useTheme } from "@mui/material"
import { random } from "lodash"
import { SyntheticEvent, useState } from "react"
import { ChevronDown } from "react-feather"

import ProjectQuickMenu from "@/components/projects/overview/ProjectHeader/ProjectQuickMenu"
import ProjectQuickOptions from "@/components/projects/overview/ProjectHeader/ProjectQuickOptions"
import useProjectContext from "@/contexts/ProjectContext"

import TabList from "../ProjectTabs/TabList"

const ProjectHeader = () => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>()
  const { project } = useProjectContext()

  const color = [random(0, 255), random(0, 255), random(0, 255)]
  const theme = useTheme()
  const openMenu = ({ currentTarget }: SyntheticEvent<HTMLButtonElement>) =>
    setMenuAnchor(currentTarget)
  const closeMenu = () => setMenuAnchor(undefined)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid",
        borderColor: "divider",
        transition: "all 0.3s ease",
        px: 5,
        pt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              height: 36,
              width: 36,
              borderRadius: 3,
              backgroundColor: `rgb(${color.join(",")})`,
            }}
          />
          <Button
            variant="text"
            endIcon={<ChevronDown />}
            sx={{
              fontSize: theme.typography.h2,
              color: theme.palette.text.primary,
            }}
            onClick={openMenu}
          >
            {project?.name}
          </Button>
          <ProjectQuickMenu anchorEl={menuAnchor} onClose={closeMenu} />
          <ProjectQuickOptions />
        </Stack>
      </Box>
      {/* <TabList /> */}
    </Box>
  )
}

export default ProjectHeader
