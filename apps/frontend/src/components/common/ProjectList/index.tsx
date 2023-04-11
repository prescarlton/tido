import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowForwardIos,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material"
import { Box, Button, Collapse, IconButton, Stack } from "@mui/material"
import { useState } from "react"

import useProjectContext from "@/contexts/ProjectContext"
import useListProjects from "@/hooks/api/projects/useListProjects"

import CreateProjectButton from "./CreateProjectButton"
import ProjectListItem from "./ProjectListItem"

const ProjectList = () => {
  const [showFavorites, setShowFavorites] = useState(true)
  const [showProjects, setShowProjects] = useState(true)
  const toggleFavorites = () => setShowFavorites((prev) => !prev)
  const toggleProjects = () => setShowProjects((prev) => !prev)
  const { data: projects } = useListProjects()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: 1,
        width: 240,
        p: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box>
          <Button
            onClick={toggleFavorites}
            startIcon={showFavorites ? <ExpandLess /> : <ExpandMore />}
            size="small"
            sx={{
              justifyContent: "flex-start",
              width: "100%",
              color: "text.secondary",
            }}
          >
            Favorites
          </Button>
          <Collapse in={showFavorites}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No Favorites
            </Box>
          </Collapse>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button
            onClick={toggleProjects}
            startIcon={showProjects ? <ExpandLess /> : <ExpandMore />}
            size="small"
            sx={{
              justifyContent: "flex-start",
              width: "100%",
              color: "text.secondary",
            }}
          >
            All Projects
          </Button>

          <Collapse in={showProjects}>
            <Stack spacing={1} sx={{ px: 1 }}>
              {projects?.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </Stack>
          </Collapse>
        </Box>
      </Box>
      <CreateProjectButton />
    </Box>
  )
}
export default ProjectList
