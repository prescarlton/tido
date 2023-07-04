import { Box, Button } from "@mantine/core"
import { Outlet } from "react-router-dom"

import ProjectHeader from "@/components/projects/overview/ProjectHeader"
import useHeaderContext from "@/contexts/HeaderContext"

export enum ProjectTab {
  Overview = "overview",
  Boards = "boards",
  Resources = "resources",
  Announcements = "announcements",
  Settings = "settings",
}

const ProjectHomepage = () => {
  return <Outlet />
}
export default ProjectHomepage
