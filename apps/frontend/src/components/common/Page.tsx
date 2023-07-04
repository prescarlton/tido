import { Box, Button, Title } from "@mantine/core"
import { Component, ReactNode } from "react"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  console.error(error)

  return (
    <Box
      role="alert"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Title variant="h6">Something went wrong</Title>
      <Button variant="filled" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Box>
  )
}

interface PageProps {
  children: ReactNode
}

export default class Page extends Component<PageProps> {
  render() {
    const { children } = this.props

    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    )
  }
}
