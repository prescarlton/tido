import { Outlet } from "react-router-dom"

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
