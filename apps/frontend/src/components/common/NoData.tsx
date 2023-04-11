import { Box, Typography } from "@mui/material"
import { ReactNode } from "react"

const NoData = ({
  dataType,
  children,
}: {
  dataType: string
  children?: ReactNode
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        mt: 4,
      }}
    >
      <Typography variant="h2" sx={{ opacity: 0.5 }}>
        No {dataType} found
      </Typography>
      {children}
    </Box>
  )
}

export default NoData
