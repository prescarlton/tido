import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

import ProjectHeader from "@/components/projects/overview/ProjectHeader"

export enum ProjectTab {
  Overview = "overview",
  Boards = "boards",
  Resources = "resources",
  Announcements = "announcements",
  Settings = "settings",
}

const ProjectHomepage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        flexDirection: "column",
      }}
    >
      <ProjectHeader />
      <Outlet />
    </Box>
  )
}
export default ProjectHomepage
