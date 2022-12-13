import ProjectHeader from '@/components/projects/overview/ProjectHeader'
import { ProjectProvider } from '@/contexts/ProjectContext'
import { Box } from '@mui/material'
import { Outlet, useParams } from 'react-router-dom'

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
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        backgroundColor: 'background.paper',
      }}
    >
      <ProjectHeader />
      <Outlet />
    </Box>
  )
}
export default ProjectHomepage
