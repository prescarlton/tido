import { Outlet } from "react-router-dom"

import { ProjectProvider } from "@/contexts/ProjectContext"

const ProjectsLayout = () => {
  return (
    <ProjectProvider>
      <Outlet />
    </ProjectProvider>
  )
}

export default ProjectsLayout
