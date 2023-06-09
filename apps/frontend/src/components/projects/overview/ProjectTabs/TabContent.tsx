import { Box, IconButton, Typography } from "@mui/material"
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
        px: 2,
        py: 1,
        overflow: "hidden",
      }}
    >
      {title && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            height: 40,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            {showBack && (
              <IconButton onClick={handleBackClick}>
                <ChevronLeft />
              </IconButton>
            )}
            <Typography variant="h3" sx={{ fontWeight: "normal" }}>
              {title}
            </Typography>
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
