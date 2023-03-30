import { alpha, Tab, Tabs, useTheme } from '@mui/material'
import { Link, useParams } from 'react-router-dom'

import useRouteMatch from '@/hooks/useRouteMatch'

const ProjectTabs = () => {
  const { projectId } = useParams()

  const routeMatch = useRouteMatch([
    '/p/:projectId/',
    '/p/:projectId/b/*',
    '/p/:projectId/resources',
    '/p/:projectId/announcements',
    '/p/:projectId/settings',
  ])
  const theme = useTheme()
  const currentTab = routeMatch?.pattern?.path

  return (
    <Tabs
      orientation="vertical"
      value={currentTab}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      sx={{
        '& .MuiTab-root': {
          minHeight: 0,
          textTransform: 'none',
          transition: '.2s ease-in-out',
          borderRadius: 2,
          '&:hover': {
            backgroundColor: alpha('#fff', 0.3),
          },
        },
        '& .MuiTabs-indicator': {
          display: 'none',
        },
        '& .Mui-selected': {
          fontWeight: 'bold',
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
        },
      }}
    >
      <Tab
        label="Overview"
        value="/p/:projectId/"
        disableRipple
        component={Link}
        to={`/p/${projectId}`}
      />
      <Tab
        label="Boards"
        value="/p/:projectId/b/*"
        disableRipple
        component={Link}
        to="b"
      />
      <Tab
        label="Resources"
        value="/p/:projectId/resources"
        disableRipple
        component={Link}
        to="resources"
      />
      <Tab
        label="Announcements"
        value="/p/:projectId/announcements"
        disableRipple
        component={Link}
        to="announcements"
      />
      <Tab
        label="Settings"
        value="/p/:projectId/settings"
        disableRipple
        component={Link}
        to="settings"
      />
    </Tabs>
  )
}

export default ProjectTabs
