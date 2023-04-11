import { alpha, Box, Tab, Tabs, useTheme } from "@mui/material"
import { Link, useParams } from "react-router-dom"

import CreateBoardButton from "@/components/boards/CreateBoardButton"
import ProjectTab from "@/components/projects/ProjectSidebar/ProjectTab"
import useListBoards from "@/hooks/api/boards/useListBoards"
import useRouteMatch from "@/hooks/useRouteMatch"

const ProjectTabs = () => {
  const { projectId } = useParams()

  const routeMatch = useRouteMatch([
    "/p/:projectId/",
    "/p/:projectId/b/*",
    "/p/:projectId/resources",
    "/p/:projectId/announcements",
    "/p/:projectId/settings",
  ])

  const theme = useTheme()
  const currentTab = routeMatch?.pattern?.path

  // get a list of boards
  const { data: boards } = useListBoards({ projectId: projectId as string })

  return (
    <Tabs
      orientation="vertical"
      value={currentTab}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      sx={{
        "& .MuiTab-root": {
          minHeight: 0,
          textTransform: "none",
          transition: ".2s ease-in-out",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: alpha(theme.palette.background.paper, 0.7),
          },
        },
        "& .MuiTabs-indicator": {
          display: "none",
        },
        "& .Mui-selected": {
          fontWeight: "bold",
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
        },
      }}
    >
      <ProjectTab
        label="Overview"
        value="/p/:projectId/"
        to={`/p/${projectId}`}
      />
      <ProjectTab label="Boards" value="/p/:projectId/b/*" to="b" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: -0.5,
          gap: 0.5,
          "& .MuiTab-root": {
            ml: 4,
            flex: 1,
            fontSize: ".75rem",
          },
        }}
      >
        {boards?.map((board) => (
          <ProjectTab
            key={board.id}
            label={board.name}
            value={`/p/:projectId/b/${board.id}`}
            to={`b/${board.id}`}
            indent
          />
        ))}
        <CreateBoardButton />
      </Box>
      <ProjectTab
        label="Resources"
        value="/p/:projectId/resources"
        to="resources"
      />

      <ProjectTab
        label="Announcements"
        value="/p/:projectId/announcements"
        to="announcements"
      />
      <ProjectTab
        label="Settings"
        value="/p/:projectId/settings"
        to="settings"
      />
    </Tabs>
  )
}

export default ProjectTabs
