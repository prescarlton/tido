import { AppShell, Box, Loader } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Outlet } from "react-router-dom"

import AppHeader from "@/components/common/AppHeader"
import Sidebar from "@/components/common/Sidebar"
import useGetMe from "@/hooks/api/auth/useGetMe"

const AppLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const { isLoading } = useGetMe()

  if (isLoading)
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
    <AppShell
      header={{ height: 48 }}
      navbar={{
        width: 300,
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
  )
}
export default AppLayout
