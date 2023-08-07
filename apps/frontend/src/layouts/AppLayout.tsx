import { AppShell, Box } from "@mantine/core"
import { useHotkeys } from "@mantine/hooks"
import { useState } from "react"
import { Outlet } from "react-router-dom"

import AppHeader from "@/components/common/AppHeader"
import Page from "@/components/common/Page"
import Sidebar from "@/components/common/Sidebar"
import { HeaderProvider } from "@/contexts/HeaderContext"

const AppLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  const toggleSidebar = () => setShowSidebar((prev) => !prev)

  useHotkeys([["mod+m", toggleSidebar]])

  return (
    <HeaderProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <AppHeader />
        <Box sx={{ display: "flex", overflow: "hidden" }}>
          <Sidebar showSidebar={showSidebar} />
          <Page>
            <Outlet />
          </Page>
        </Box>
      </Box>
    </HeaderProvider>
  )
}
export default AppLayout
