import { Box, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { useNavigate } from 'react-router-dom'

import ProjectListMenu from '@/components/common/Topbar/ProjectListMenu'

import UserComponent from '../UserComponent'

const Topbar = () => {
  const [projectListAnchorEl, setProjectListAnchorEl] =
    useState<null | HTMLElement>(null)

  const handleProjectsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setProjectListAnchorEl(e.currentTarget)
  }
  const handleCloseProjectListMenu = () => setProjectListAnchorEl(null)

  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <Box
      sx={{
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        backgroundColor: 'background.paper',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          variant="text"
          size="large"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '2rem',
          }}
          onClick={handleHomeClick}
        >
          tido
        </Button>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            '& .MuiButton-root': {
              textTransform: 'none',
            },
          }}
        >
          <Button endIcon={<ChevronDown />} onClick={handleProjectsClick}>
            Projects
          </Button>
          <Button endIcon={<ChevronDown />} disabled>
            Recent
          </Button>
          <Button endIcon={<ChevronDown />} disabled>
            Pinned
          </Button>
        </Stack>
      </Stack>
      <UserComponent />
      {/* menus */}

      <ProjectListMenu
        anchorEl={projectListAnchorEl}
        onClose={handleCloseProjectListMenu}
      />
    </Box>
  )
}
export default Topbar
