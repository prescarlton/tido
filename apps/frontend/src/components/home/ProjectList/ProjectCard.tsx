import { Card, Text, Transition, UnstyledButton } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { Project } from "shared/types/projects"

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }

  return (
    <Transition mounted transition="skew-down">
      {(styles) => (
        <Card
          sx={(theme) => ({
            height: 75,
            display: "flex",
            backgroundColor: theme.fn.variant({
              variant: "light",
              color: theme.primaryColor,
            }).background,

            borderRadius: 8,
          })}
        >
          <UnstyledButton
            sx={(theme) => ({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
              }).color,
            })}
            onClick={handleClick}
          >
            <Text>{project.name}</Text>
            <Text>{project.description}</Text>
          </UnstyledButton>
        </Card>
      )}
    </Transition>
  )
}

export default ProjectCard
