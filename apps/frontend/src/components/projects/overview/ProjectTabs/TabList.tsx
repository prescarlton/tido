import { Tab, Tabs } from "@mui/material"
import { Link, useParams } from "react-router-dom"

import useRouteMatch from "@/hooks/useRouteMatch"

const TabList = () => {
  const { projectId } = useParams()

  const routeMatch = useRouteMatch([
    "/p/:projectId/",
    "/p/:projectId/b/*",
    "/p/:projectId/resources",
    "/p/:projectId/announcements",
    "/p/:projectId/settings",
  ])
  const currentTab = routeMatch?.pattern?.path

  return (
    <Tabs
      value={currentTab}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      sx={{
        minHeight: 0,
        height: 40,
        "& .MuiTab-root": {
          minHeight: 0,
          textTransform: "none",
        },
        "& .MuiTabs-flexContainer": {
          gap: 5,
        },
        "& .MuiTabs-indicator": {
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          height: 2,
        },
        "& .MuiTabs-indicatorSpan": {
          // maxWidth: 50,
          // width: "90%",
          width: "100%",
          backgroundColor: "primary.main",
          // borderTopLeftRadius: 4,
          // borderTopRightRadius: 4,
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

export default TabList
