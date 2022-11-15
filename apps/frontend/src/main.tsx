import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import theme from './theme'
import './styles/main.css'
import { CssBaseline } from '@mui/material'
import { ProjectProvider } from './contexts/ProjectContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <ProjectProvider>
          <AppRouter />
        </ProjectProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
