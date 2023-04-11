import {
  ArrowDropDown,
  FolderOpen,
  GridView,
  PeopleAlt,
  Settings,
} from "@mui/icons-material"
import { Box, Button, List } from "@mui/material"
import { useState } from "react"

import useProjectContext from "@/contexts/ProjectContext"

import NavItem from "./SideNavItem"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const pages = [
    {
      title: "Dashboard",
      to: "dashboard",
      icon: <GridView />,
    },
    {
      title: "Projects",
      to: "p",
      icon: <FolderOpen />,
    },
    {
      title: "Team",
      to: "team",
      icon: <PeopleAlt />,
    },
    {
      title: "Settings",
      to: "settings",
      icon: <Settings />,
    },
  ]

  const { project } = useProjectContext()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 64,
        transition: "width 0.3s",
        borderRight: 1,
        borderColor: "divider",
        overflowX: "hidden",
        py: 1,
        gap: 2,
        // backgroundColor: 'background.paper',
      }}
    >
      {open && (
        <Button
          variant="text"
          endIcon={<ArrowDropDown />}
          sx={{
            justifyContent: "space-between",
          }}
        >
          {project?.name}
        </Button>
      )}
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {pages.map((page) => (
          <NavItem
            key={page.title}
            open={open}
            label={page.title}
            icon={page.icon}
            to={page.to}
          />
        ))}
      </List>
    </Box>
  )
}

export default Sidebar
