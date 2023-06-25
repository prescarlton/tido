import { Box } from "@mui/material"
import { ReactNode } from "react"

import UserMenu from "@/components/common/UserComponent"

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
      <UserMenu />
      {children}
    </Box>
  )
}
export default PageWrapper
