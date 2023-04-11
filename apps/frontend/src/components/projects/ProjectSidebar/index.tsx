import { Box } from "@mui/material"

import ProjectTabs from "@/components/projects/ProjectSidebar/ProjectTabs"
import SidebarHeader from "@/components/projects/ProjectSidebar/SidebarHeader"

const ProjectSidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        px: 2,
        py: 3,
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <SidebarHeader />
      <ProjectTabs />
    </Box>
  )
}

export default ProjectSidebar
