import { AppShell, Box, UnstyledButton } from "@mantine/core"
import {
  IconCheckbox,
  IconHome,
  IconSettings,
  IconStack,
} from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

import styles from "./sidebar.module.scss"

const MainLinks = () => {
  const links = [
    {
      label: "Home",
      icon: IconHome,
      path: "/dashboard",
    },
    {
      label: "Projects",
      icon: IconStack,
      path: "/p",
    },
    {
      label: "My tasks",
      icon: IconCheckbox,
      path: "/my-tasks",
    },
    {
      label: "Settings",
      icon: IconSettings,
      path: "/settings",
    },
  ]
  return (
    <AppShell.Section className={styles.section}>
      <Box className={styles.mainLinks}>
        {links.map((link) => (
          <UnstyledButton
            key={link.label}
            className={styles.mainLink}
            component={NavLink}
            to={link.path}
          >
            <div className={styles.mainLinkInner}>
              <link.icon
                size={20}
                className={styles.mainLinkIcon}
                strokeWidth={2.5}
              />
              <Box component="span">{link.label}</Box>
            </div>
          </UnstyledButton>
        ))}
      </Box>
    </AppShell.Section>
  )
}

export default MainLinks
