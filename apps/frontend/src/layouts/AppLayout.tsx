import { AppShell, Box, Loader } from "@mantine/core"
import { useDisclosure, useHotkeys } from "@mantine/hooks"
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react"
import { Outlet } from "react-router-dom"

import AppHeader from "@/components/common/AppHeader"
import Sidebar from "@/components/common/Sidebar"
import { AppProvider } from "@/contexts/AppContext"
import useGetMe from "@/hooks/api/auth/useGetMe"

const AppLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const { isLoading: isMeLoading } = useGetMe()
  useHotkeys([
    ["mod+J", () => toggleDesktop()],
    ["ctrl+J", () => toggleDesktop()],
  ])

  const spotlightActions = [
    {
      id: "hide-sidebar",
      label: "Toggle Sidebar",
      onClick: toggleDesktop,
      leftSection: <IconLayoutSidebarLeftCollapse />,
    },
  ]

  if (isMeLoading)
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          height: "100%",
        }}
      >
        <Loader />
      </Box>
    )
  return (
    <AppProvider actions={spotlightActions}>
      <AppShell
        header={{ height: 48 }}
        navbar={{
          width: 240,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
      >
        <AppHeader />
        <Sidebar />
        <AppShell.Main style={{ display: "flex", flexDirection: "column" }}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </AppProvider>
  )
}
export default AppLayout
