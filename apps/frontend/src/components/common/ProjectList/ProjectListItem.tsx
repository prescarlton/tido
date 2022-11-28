import { Project } from '@/types/Project'
import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const ProjectListItem = ({ project }: { project: Project }) => {
  const location = useLocation()
  const active = location.pathname.includes(project.id)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`${project.id}`)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '.3s ease-in-out all',
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
        py: 1,
        px: 2,
        borderRadius: 2,
      }}
      onClick={handleClick}
    >
      <Typography
        variant="body1"
        sx={{
          color: active ? 'text.primary' : 'text.secondary',
        }}
      >
        {project.name}
      </Typography>
    </Box>
  )
}
export default ProjectListItem
