import { Box } from "@mantine/core"
import { ReactNode } from "react"

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={(theme) => ({
        display: "flex",
        flexDirection: "column",
        flex: 1,
        position: "relative",
        padding: theme.spacing.md,
      })}
    >
      {children}
    </Box>
  )
}
export default PageWrapper
