import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import theme from './theme'
import './styles/main.css'
import { CssBaseline } from '@mui/material'
import { ProjectProvider } from './contexts/ProjectContext'
import { AuthProvider } from './contexts/AuthContext'
import { SnackbarProvider } from './contexts/SnackbarContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
