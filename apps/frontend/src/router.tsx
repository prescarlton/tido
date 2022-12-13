import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home'
import AppLayout from './layouts/AppLayout'
import SettingsPage from './pages/Settings'
import ProjectsLayout from './layouts/ProjectLayout'
import LoginPage from './pages/Login'
import useAuthContext from './contexts/AuthContext'
import TeamOverviewPage from './pages/TeamOverview'
import ProjectListPage from './pages/ProjectList'
import ProjectHomepage from './pages/projects'
import BoardPage from './pages/boards/BoardPage'
import BoardsPage from './pages/projects/Boards'
import NotFoundPage from './pages/404'
import OverviewPage from './pages/projects/Overview'
import AnnouncementsPage from './pages/projects/Announcements'
import ResourcesPage from './pages/projects/Resources'
import ProjectSettingsPage from './pages/projects/Settings'

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
          <Route path="team" element={<TeamOverviewPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      )}
      {!auth && <Route index element={<LoginPage />} />}
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
export default AppRouter
