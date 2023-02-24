import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/Home'

import useAuthContext from './contexts/AuthContext'
import AppLayout from './layouts/AppLayout'
import ProjectsLayout from './layouts/ProjectLayout'
import NotFoundPage from './pages/404'
import BoardPage from './pages/boards/BoardPage'
import LoginPage from './pages/Login'
import ProjectListPage from './pages/ProjectList'
import ProjectHomepage from './pages/projects'
import AnnouncementsPage from './pages/projects/Announcements'
import BoardsPage from './pages/projects/Boards'
import OverviewPage from './pages/projects/Overview'
import ResourcesPage from './pages/projects/Resources'
import ProjectSettingsPage from './pages/projects/Settings'
import SettingsPage from './pages/Settings'

const AppRouter = () => {
  const { auth } = useAuthContext()
  return (
    <Routes>
      {auth && (
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<HomePage />} />
          <Route path="p" element={<ProjectsLayout />}>
            <Route index element={<ProjectListPage />} />
            <Route path=":projectId" element={<ProjectHomepage />}>
              <Route index element={<OverviewPage />} />
              <Route path="announcements" element={<AnnouncementsPage />} />
              <Route path="resources" element={<ResourcesPage />} />
              <Route path="settings" element={<ProjectSettingsPage />} />
              <Route path="b">
                <Route index element={<BoardsPage />} />
                <Route path=":boardId" element={<BoardPage />} />
              </Route>
            </Route>
          </Route>

          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      )}
      {!auth && <Route index element={<LoginPage />} />}
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default AppRouter
