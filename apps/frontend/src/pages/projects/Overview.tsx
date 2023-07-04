import { Box, Group, Title } from "@mantine/core"
import { useNavigate } from "react-router-dom"

import BoardCarousel from "@/components/projects/overview/BoardCarousel"
import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import useProjectContext from "@/contexts/ProjectContext"

const OverviewPage = () => {
  const { projectId, project } = useProjectContext()

  const navigate = useNavigate()
  const handleClickResources = () => navigate("resources")
  const handleClickAnnouncements = () => navigate("announcements")
  const handleClickStandup = () => navigate("standup")

  return (
    <ProjectTabContent>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 3,
          paddingTop: theme.spacing.sm,
        })}
      >
        <Group spacing="sm">
          <Title size="h1">{project?.name}</Title>
          <Title size="h3" c="dimmed">
            {" "}
            Overview
          </Title>
        </Group>
        <BoardCarousel projectId={projectId} />
        {/* <Button onClick={handleClickResources} variant="contained">
          Resources
        </Button>
        <Button onClick={handleClickAnnouncements} variant="contained">
          Announcements
        </Button>
        <Button onClick={handleClickStandup} variant="contained">
          Standup
        </Button> */}
      </Box>
    </ProjectTabContent>
  )
}
export default OverviewPage
