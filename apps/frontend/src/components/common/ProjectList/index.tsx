import { avatarInitials } from '@/util/avatarInitials'
import { Apps } from '@mui/icons-material'
import { Box, Divider, Stack } from '@mui/material'
import { useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import ProjectListItemButton from './ProjectListItemButton'

const ProjectList = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const projects = useMemo(() => {
    return [
      {
        id: uuid(),
        name: 'Project 1',
      },
      {
        id: uuid(),
        name: 'Project 2',
      },
      {
        id: uuid(),
        name: 'Project 3',
      },
      {
        id: uuid(),
        name: 'Project 4',
      },
      {
        id: uuid(),
        name: 'Project 5',
      },
    ]
  }, [])
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
        {projects.map((project) => (
          <ProjectListItemButton
            key={project.id}
            text={avatarInitials(project.name)}
            tooltip={project.name}
            onClick={() => navigate(`/project/${project.id}`)}
            active={location.pathname.includes(project.id)}
          />
        ))}
      </Stack>
    </Box>
  )
}
export default ProjectList
