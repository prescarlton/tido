import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home'
import NotFoundPage from '@/pages/404'
import AppLayout from './layouts/AppLayout'
import SettingsPage from './pages/Settings'
import BoardsPage from './pages/projects/Boards'
import ResourcesPage from './pages/projects/Resources'
import CalendarPage from './pages/projects/CalendarPage'
import ProjectLayout from './layouts/ProjectLayout'
import ProjectOverview from './pages/projects/Overview'
import LoginPage from './pages/Login'
import useAuthContext from './contexts/AuthContext'

const AppRouter = () => {
  const { auth } = useAuthContext()
  return (
    <Routes>
      {auth && (
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<ProjectOverview />} />
            <Route path="boards" element={<BoardsPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      )}
      {!auth && <Route index element={<LoginPage />} />}
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  )
}
export default AppRouter
