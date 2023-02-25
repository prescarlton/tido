import { Box, Typography } from '@mui/material'

import useProjectContext from '@/contexts/ProjectContext'

import TabList from './ProjectTabs/TabList'

const ProjectHeader = () => {
  const { project } = useProjectContext()

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
        }}
      >
        <Typography variant="h2">{project?.name}</Typography>
        {/* <ProjectQuickOptions /> */}
      </Box>
      <TabList />
    </Box>
  )
}

export default ProjectHeader
