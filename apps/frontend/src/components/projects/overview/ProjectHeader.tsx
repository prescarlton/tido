import useProjectContext from '@/contexts/ProjectContext'
import { Box, Collapse, Typography } from '@mui/material'
import ProjectQuickOptions from './ProjectQuickOptions'
import TabList from './ProjectTabs/TabList'

const ProjectHeader = () => {
  const { project, showProjectHeader, setShowProjectHeader } =
    useProjectContext()

  const handleCollapseToggle = () => {
    setShowProjectHeader((prev) => !prev)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          pr: 24,
        }}
      >
        <Typography variant="h2">{project?.name}</Typography>
        <ProjectQuickOptions />
      </Box>
      <TabList />
    </Box>
  )
}

export default ProjectHeader
