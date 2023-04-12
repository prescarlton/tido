import { Box, Fade, IconButton, useTheme } from "@mui/material"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

import ProjectTabs from "@/components/projects/ProjectSidebar/ProjectTabs"
import SidebarHeader from "@/components/projects/ProjectSidebar/SidebarHeader"

const ProjectSidebar = () => {
  const [open, setOpen] = useState(true)
  const theme = useTheme()

  const toggleOpen = () => setOpen((prev) => !prev)

  return (
    <Box
      sx={{
        width: open ? 250 : 0,
        px: 2,
        py: 3,
        backgroundColor: "background.paper",
        position: "relative",
        transition: ".2s all ease-in-out",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          right: -12,
          p: 0,
          borderRadius: 100,
          border: 2,
          backgroundColor: "#fff",
        }}
        color="primary"
        onClick={toggleOpen}
      >
        {open ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      <Fade
        in={open}
        timeout={{
          enter: 400,
          exit: theme.transitions.duration.leavingScreen,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <SidebarHeader />
          <ProjectTabs />
        </Box>
      </Fade>
    </Box>
  )
}

export default ProjectSidebar
