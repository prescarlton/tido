import { Box, Tabs } from "@mantine/core"

import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import DangerZone from "@/components/projects/settings/DangerZone"
import FeatureToggles from "@/components/projects/settings/FeatureToggles"
import GeneralProjectSettings from "@/components/projects/settings/GeneralSettings"
import TeamSettings from "@/components/projects/settings/TeamSettings"

const ProjectSettingsPage = () => {
  return (
    <ProjectTabContent title="Settings">
      <Box
        sx={{
          display: "flex",
          mt: 4,
          gap: 2,
          flex: 1,
          alignItems: "stretch",
        }}
      >
        <Tabs orientation="vertical" defaultValue={"general"}>
          <Tabs.List>
            <Tabs.Tab value="general">General</Tabs.Tab>
            <Tabs.Tab value="features">Features</Tabs.Tab>
            <Tabs.Tab value="team">Team</Tabs.Tab>
            <Tabs.Tab value="danger zone">Danger Zone</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Tabs.Panel value="general">
          <GeneralProjectSettings />
        </Tabs.Panel>
        <Tabs.Panel value="features">
          <FeatureToggles />
        </Tabs.Panel>
        <Tabs.Panel value="team">
          <TeamSettings />
        </Tabs.Panel>
        <Tabs.Panel value="danger zone">
          <DangerZone />
        </Tabs.Panel>
      </Box>
    </ProjectTabContent>
  )
}
export default ProjectSettingsPage
