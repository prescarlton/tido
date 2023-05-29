import { Box, Collapse, IconButton, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { ChevronDown, ChevronUp, Plus } from "react-feather"

import useListProjects from "@/hooks/api/projects/useListProjects"

import SidebarProjectItem from "./SidebarProjectItem"

const SidebarProjects = () => {
  const [open, setOpen] = useState(true)

  const onClickCreateProject = () => {}
  const onClickToggleCollapse = () => setOpen((prev) => !prev)

  const { data: projects } = useListProjects()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Typography variant="body2" sx={{}}>
          Projects
        </Typography>
        <Stack spacing={1} sx={{ alignItems: "center" }} direction="row">
          <IconButton onClick={onClickCreateProject}>
            <Plus size={16} />
          </IconButton>
          <IconButton onClick={onClickToggleCollapse}>
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </IconButton>
        </Stack>
      </Box>
      <Collapse
        in={open}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {projects?.map((project) => (
          <SidebarProjectItem key={project.id} project={project} />
        ))}
      </Collapse>
    </Box>
  )
}

export default SidebarProjects
