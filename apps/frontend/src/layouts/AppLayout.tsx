import { Box } from "@mantine/core"
import { useHotkeys } from "@mantine/hooks"
import { useState } from "react"
import { Outlet } from "react-router-dom"

import AppHeader from "@/components/common/AppHeader"
import Page from "@/components/common/Page"
import Sidebar from "@/components/common/Sidebar"
import { HeaderProvider } from "@/contexts/HeaderContext"

const AppLayout = () => {
  const [hideShell, setHideShell] = useState(false)

  const toggleShell = () => setHideShell((prev) => !prev)

  useHotkeys([["mod+M", toggleShell]])

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
          <Sidebar />
          <Page>
            <Outlet />
          </Page>
        </Box>
      </Box>
      {/* <AppShell navbar={<Sidebar />} header={<AppHeader />}>
        <Page>
          <Outlet />
        </Page>
      </AppShell> */}
    </HeaderProvider>
  )
}
export default AppLayout
