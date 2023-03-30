import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import ProjectSidebar from '@/components/projects/ProjectSidebar'

export enum ProjectTab {
  Overview = 'overview',
  Boards = 'boards',
  Resources = 'resources',
  Announcements = 'announcements',
  Settings = 'settings',
}

const ProjectHomepage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        height: '100%',
        backgroundColor: 'background.paper',
      }}
    >
      <ProjectSidebar />
      <Outlet />
    </Box>
  )
}
export default ProjectHomepage
