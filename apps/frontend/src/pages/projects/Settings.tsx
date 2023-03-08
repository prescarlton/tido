import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'

import ProjectTabContent from '@/components/projects/overview/ProjectTabs/TabContent'
import DangerZone from '@/components/projects/settings/DangerZone'
import FeatureToggles from '@/components/projects/settings/FeatureToggles'
import GeneralProjectSettings from '@/components/projects/settings/GeneralSettings'
import TeamSettings from '@/components/projects/settings/TeamSettings'

const ProjectSettingsPage = () => {
  const [tab, setTab] = useState(0)
  return (
    <ProjectTabContent title="Settings">
      <Box
        sx={{
          display: 'flex',
          mt: 4,
          gap: 2,
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        <Tabs
          orientation="vertical"
          value={tab}
          onChange={(e, val) => setTab(val)}
        >
          <Tab value={0} label="General" />
          <Tab value={1} label="Features" />
          <Tab value={2} label="Team" />
          <Tab value={3} label="Danger Zone" />
        </Tabs>
        {tab === 0 && <GeneralProjectSettings />}
        {tab === 1 && <FeatureToggles />}
        {tab === 2 && <TeamSettings />}
        {tab === 3 && <DangerZone />}
      </Box>
    </ProjectTabContent>
  )
}
export default ProjectSettingsPage
