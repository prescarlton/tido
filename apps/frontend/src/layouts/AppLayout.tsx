import { Box } from "@mui/material"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { useKey } from "react-use"

import Page from "@/components/common/Page"
import Sidebar from "@/components/common/Sidebar"

const AppLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev)
  }

  useKey("m", toggleSidebar)

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
      }}
    >
      <Sidebar show={showSidebar} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden",
          position: "relative",
          backgroundColor: "background.paper",
          borderTopLeftRadius: showSidebar ? "1rem" : 0,
          borderBottomLeftRadius: showSidebar ? "1rem" : 0,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "divider",
        }}
      >
        <Page>
          <Outlet />
        </Page>
      </Box>
    </Box>
  )
}
export default AppLayout
