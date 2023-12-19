import { AppShell, Box } from "@mantine/core"

import MainLinks from "@/components/common/Sidebar/MainLinks"
import SidebarProjects from "@/components/common/Sidebar/SidebarProjects"

import styles from "./sidebar.module.scss"
import SidebarFavorites from "./SidebarFavorites"

// export const useStyles = createStyles((theme) => ({
//   navbar: {
//     paddingTop: 0,
//     overflow: "hidden",
//     transition: "all 200ms ease, min-width 200ms ease",
//   },

//   section: {
//     marginLeft: `calc(${theme.spacing.md} * -1)`,
//     marginRight: `calc(${theme.spacing.md} * -1)`,
//     marginBottom: theme.spacing.md,
//   },

//   searchCode: {
//     fontWeight: 700,
//     fontSize: rem(10),
//     backgroundColor:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[7]
//         : theme.colors.gray[0],
//     border: `${rem(1)} solid ${
//       theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
//     }`,
//   },
// }))

const Sidebar = () => {
  return (
    <AppShell.Navbar className={styles.navbar}>
      {/* 
        TODO: add workspace switcher here.
              should be a dropdown where you can select / create a new workspace
      */}
      <MainLinks />
      <SidebarFavorites />
      <SidebarProjects />
    </AppShell.Navbar>
  )
}
export default Sidebar
