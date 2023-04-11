import { Card, CardActionArea, Grow, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Project } from "shared/types/projects"

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }
  return (
    <Grow in>
      <Card
        sx={{
          width: 350,
          height: 125,
          boxShadow: 1,
          display: "flex",
        }}
      >
        <CardActionArea
          onClick={handleClick}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 1,
            py: 1.25,
            px: 2,
          }}
        >
          <Typography variant="h3">{project.name}</Typography>
          <Typography variant="subtitle2">{project.description}</Typography>
        </CardActionArea>
      </Card>
    </Grow>
  )
}

export default ProjectCard
