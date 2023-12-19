import "@mantine/core/styles.css"
import "./styles/globals.scss"

import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import React from "react"
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

dayjs.extend(relativeTime)

const App = () => {
  return (
    <React.StrictMode>
      <MantineProvider theme={{ ...theme }} defaultColorScheme="auto">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ProjectProvider>
                <AppRouter />
              </ProjectProvider>
            </AuthProvider>
            <Notifications zIndex={100000} />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </BrowserRouter>
      </MantineProvider>
    </React.StrictMode>
  )
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />)
