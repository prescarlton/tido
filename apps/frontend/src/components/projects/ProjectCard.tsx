import { ProjectListResponse } from "@/api/ProjectService/requests/listProjects"
import { Article, Dashboard, Message } from "@mui/icons-material"
import {
  Box,
  Card,
  CardActionArea,
  Divider,
  Stack,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import ProjectMembers from "./ProjectMembers"

const ProjectCard = ({ project }: { project: ProjectListResponse }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }

  return (
    <Card
      sx={{
        width: 240,
        height: 180,
        display: "flex",
        borderRadius: 2,
        position: "relative",
        overflow: "visible",
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          p: 2,
        }}
      >
        <Box>
          <Typography variant="h3">{project.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            Last updated 2 days ago
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Dashboard sx={{ color: "text.secondary" }} />
            <Article sx={{ color: "text.secondary" }} />
            <Message sx={{ color: "text.secondary" }} />
          </Stack>
          <ProjectMembers />
        </Box>
      </CardActionArea>
    </Card>
  )
}
export default ProjectCard
