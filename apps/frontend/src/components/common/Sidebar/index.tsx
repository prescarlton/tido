import { AppShell } from "@mantine/core"

import MainLinks from "@/components/common/Sidebar/MainLinks"
import SidebarProjects from "@/components/common/Sidebar/SidebarProjects"

import WorkspaceSwitcher from "../AppHeader/WorkspaceSwitcher"
import styles from "./sidebar.module.scss"
import SidebarFavorites from "./SidebarFavorites"

const Sidebar = () => {
  return (
    <AppShell.Navbar className={styles.navbar}>
      <WorkspaceSwitcher />
      <MainLinks />
      <SidebarFavorites />
      <SidebarProjects />
    </AppShell.Navbar>
  )
}
export default Sidebar
