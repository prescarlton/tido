import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

type ProjectListItemButtonProps = {
  text?: string
  icon?: ReactNode
  tooltip: string
  onClick: () => void
  active?: boolean
}

const ProjectListItemButton = ({
  text,
  tooltip,
  icon,
  onClick,
  active,
}: ProjectListItemButtonProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        height: 40,
        width: 40,
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
      onClick={onClick}
    >
      {text && (
        <Typography
          variant="body1"
          sx={{ color: active ? 'primary.contrastText' : 'primary.main' }}
        >
          {text}
        </Typography>
      )}
      {icon && icon}
    </Box>
  )
}
export default ProjectListItemButton
