import { Project } from '@/types/Project'
import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const ProjectListItem = ({ project }: { project: Project }) => {
  const location = useLocation()
  const active = location.pathname.includes(project.id)

  const nameInitials = project.name
    .split(' ')
    .map((word) => word[0])
    .join('')

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project/${project.id}`)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        height: 36,
        width: 36,
        backgroundColor: active ? 'primary.main' : 'transparent',
        border: active ? 0 : 2,
        borderColor: 'primary.main',
        cursor: 'pointer',
        transition: '.3s ease-in-out all',
        '&:hover': {
          backgroundColor: 'primary.main',
          '*': {
            color: 'primary.contrastText',
          },
        },
      }}
      onClick={handleClick}
    >
      <Typography
        variant="body1"
        sx={{
          color: active ? 'primary.contrastText' : 'primary.main',
        }}
      >
        {nameInitials}
      </Typography>
    </Box>
  )
}
export default ProjectListItem
