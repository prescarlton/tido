import "./styles/main.css"

import { CssBaseline, useMediaQuery } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"
import { ProjectProvider } from "./contexts/ProjectContext"
import { SnackbarProvider } from "./contexts/SnackbarContext"
import AppRouter from "./router"
import theme, { darkModeBackground, lightModeBackground } from "./theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  // const combinedTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       ...theme,
  //       palette: {
  //         background: lightModeBackground,
  //         primary: {
  //           main: "#4685FF",
  //         },
  //       },
  //     }),
  //   [prefersDarkMode]
  // )
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider>
              <AuthProvider>
                <ProjectProvider>
                  <AppRouter />
                </ProjectProvider>
              </AuthProvider>
            </SnackbarProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />)
