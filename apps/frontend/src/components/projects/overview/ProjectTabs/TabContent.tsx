import { ActionIcon, Box, Title } from "@mantine/core"
import { ReactNode } from "react"
import { ChevronLeft } from "react-feather"
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
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: ".5rem 1rem",
        overflow: "hidden",
      }}
    >
      {title && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            height: 40,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            {showBack && (
              <ActionIcon onClick={handleBackClick}>
                <ChevronLeft />
              </ActionIcon>
            )}
            <Title size="h3" sx={{ fontWeight: "normal" }}>
              {title}
            </Title>
          </Box>
          {primaryAction}
        </Box>
      )}
      <Box
        sx={{
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
