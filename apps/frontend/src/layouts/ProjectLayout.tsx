import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

import UserMenu from "@/components/common/UserComponent"
import { ProjectProvider } from "@/contexts/ProjectContext"

const ProjectsLayout = () => {
  return (
    <ProjectProvider>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          flex: 1,
          height: "100%",
        }}
      >
        <UserMenu />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ProjectProvider>
  )
}

export default ProjectsLayout
