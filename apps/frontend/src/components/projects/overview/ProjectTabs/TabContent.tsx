import { ActionIcon, Box, Title } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"
import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface IProjectTabContent {
  children: ReactNode
  title?: string
  showBack?: boolean
  primaryAction?: ReactNode
}

const ProjectTabContent = ({
  children,
  title,
  showBack = false,
  primaryAction,
}: IProjectTabContent) => {
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: ".5rem 1rem",
        overflow: "hidden",
      }}
    >
      {title && (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            height: 40,
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            {showBack && (
              <ActionIcon onClick={handleBackClick}>
                <IconChevronLeft />
              </ActionIcon>
            )}
            <Title size="h3" style={{ fontWeight: "normal" }}>
              {title}
            </Title>
          </Box>
          {primaryAction}
        </Box>
      )}
      <Box
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default ProjectTabContent
