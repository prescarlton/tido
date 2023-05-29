import { Divider, Stack } from "@mui/material"

import SidebarHeader from "@/components/common/Sidebar/SidebarHeader"

import SidebarFavorites from "./SidebarFavorites"
import SidebarLinks from "./SidebarLinks"
import SidebarProjects from "./SidebarProjects"

interface ISidebar {
  show: boolean
}

const Sidebar = ({ show }: ISidebar) => {
  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: "background.default",
        width: show ? 240 : 0,
        transition: "width .2s",
        py: 2.25,
      }}
    >
      <SidebarHeader />
      <SidebarLinks />
      <Divider />
      <SidebarFavorites />
      <Divider />
      <SidebarProjects />
    </Stack>
  )
}

export default Sidebar
