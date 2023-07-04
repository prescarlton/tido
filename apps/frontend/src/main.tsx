import "./styles/main.css"

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import { Notifications } from "@mantine/notifications"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import theme from "@/theme"

import { AuthProvider } from "./contexts/AuthContext"
import { ProjectProvider } from "./contexts/ProjectContext"
import AppRouter from "./router"

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
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))
  return (
    <React.StrictMode>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ ...theme, colorScheme }}
        >
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <ProjectProvider>
                  <AppRouter />
                </ProjectProvider>
              </AuthProvider>
              <Notifications />
            </QueryClientProvider>
          </BrowserRouter>
        </MantineProvider>
      </ColorSchemeProvider>
    </React.StrictMode>
  )
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />)
