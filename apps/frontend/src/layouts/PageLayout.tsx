import { Box } from "@mui/material"
import { ReactNode } from "react"

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
        position: "relative",
        p: 2,
      }}
    >
      {children}
    </Box>
  )
}
export default PageWrapper
