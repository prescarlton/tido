import { Stack } from '@mui/material'

import ProjectTabContent from '@/components/projects/overview/ProjectTabs/TabContent'
import GeneralProjectSettings from '@/components/projects/settings/GeneralSettings'

const ProjectSettingsPage = () => {
  return (
    <ProjectTabContent title="Project Settings">
      <Stack spacing={2} mt={2}>
        <GeneralProjectSettings />
      </Stack>
    </ProjectTabContent>
  )
}
export default ProjectSettingsPage
