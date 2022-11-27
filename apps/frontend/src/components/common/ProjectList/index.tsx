import useCreateProject from '@/hooks/api/projects/useCreateProject'
import useListProjects from '@/hooks/api/projects/useListProjects'
import { avatarInitials } from '@/util/avatarInitials'
import { Apps } from '@mui/icons-material'
import { Box, Divider, Stack } from '@mui/material'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CreateProjectDialog from './CreateProjectDialog'
import ProjectListItemButton from './ProjectListItemButton'

const ProjectList = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const openCreateDialog = () => setShowCreateDialog(true)
  const closeCreateDialog = () => setShowCreateDialog(false)

  const navigate = useNavigate()
  const location = useLocation()
  const { data: projects } = useListProjects()

  const onCreateClick = () => openCreateDialog()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: 1,
        width: 64,
        py: 1,
        borderColor: 'divider',
      }}
    >
      <Stack spacing={2}>
        <Link to="/">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 3,
              height: 40,
              width: 40,
              backgroundColor: 'primary.main',
            }}
          >
            <Apps sx={{ color: 'primary.contrastText' }} />
          </Box>
        </Link>
        <Divider flexItem />
        {projects?.map((project) => (
          <ProjectListItemButton
            key={project.id}
            text={avatarInitials(project.name)}
            tooltip={project.name}
            onClick={() => navigate(`/project/${project.id}`)}
            active={location.pathname.includes(project.id)}
          />
        ))}
        <ProjectListItemButton
          text="+"
          tooltip="Create Project"
          onClick={onCreateClick}
        />
      </Stack>
      <CreateProjectDialog
        open={showCreateDialog}
        onClose={closeCreateDialog}
      />
    </Box>
  )
}
export default ProjectList
