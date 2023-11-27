import { Box, Loader } from "@mantine/core"
import { useHotkeys } from "@mantine/hooks"
import { useState } from "react"
import { Outlet } from "react-router-dom"

import AppHeader from "@/components/common/AppHeader"
import Page from "@/components/common/Page"
import Sidebar from "@/components/common/Sidebar"
import useGetMe from "@/hooks/api/auth/useGetMe"

const AppLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  const toggleSidebar = () => setShowSidebar((prev) => !prev)

  useHotkeys([["mod+m", toggleSidebar]])
  const { isLoading } = useGetMe()

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </Box>
    )
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <AppHeader />
      <Box sx={{ display: "flex", overflow: "hidden", flex: 1 }}>
        <Sidebar showSidebar={showSidebar} />
        <Page>
          <Outlet />
        </Page>
      </Box>
    </Box>
  )
}
export default AppLayout
