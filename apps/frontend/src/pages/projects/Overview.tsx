import { Box, Button, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"

import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"

const OverviewPage = () => {
  const navigate = useNavigate()

  const handleClickBoards = () => {
    navigate("b")
  }
  const handleClickResources = () => navigate("resources")
  const handleClickAnnouncements = () => navigate("announcements")
  const handleClickStandup = () => navigate("standup")

  return (
    <ProjectTabContent title="Overview">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Button onClick={handleClickBoards} variant="contained">
            Boards
          </Button>
          <Button onClick={handleClickResources} variant="contained">
            Resources
          </Button>
          <Button onClick={handleClickAnnouncements} variant="contained">
            Announcements
          </Button>
          <Button onClick={handleClickStandup} variant="contained">
            Standup
          </Button>
        </Stack>
      </Box>
    </ProjectTabContent>
  )
}
export default OverviewPage
