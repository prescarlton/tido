import { Box, Typography } from "@mui/material"
import { ReactNode } from "react"

interface IProjectTabContent {
  children: ReactNode
  title?: string
  primaryAction?: ReactNode
}

const ProjectTabContent = ({
  children,
  title,
  primaryAction,
}: IProjectTabContent) => {
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
          <Typography variant="h3" sx={{ fontWeight: "normal" }}>
            {title}
          </Typography>
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
