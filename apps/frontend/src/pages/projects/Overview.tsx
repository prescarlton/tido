import { Box, Button, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"

import BoardCarousel from "@/components/projects/overview/BoardCarousel"
import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import useProjectContext from "@/contexts/ProjectContext"

const OverviewPage = () => {
  const { projectId } = useProjectContext()

  const navigate = useNavigate()
  const handleClickResources = () => navigate("resources")
  const handleClickAnnouncements = () => navigate("announcements")
  const handleClickStandup = () => navigate("standup")

  return (
    <ProjectTabContent title="Overview">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 3,
          pt: 3,
        }}
      >
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
