import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home'
import AppLayout from './layouts/AppLayout'
import SettingsPage from './pages/Settings'
import ProjectLayout from './layouts/ProjectLayout'
import ProjectOverview from './pages/projects/Overview'
import LoginPage from './pages/Login'
import useAuthContext from './contexts/AuthContext'
import TeamOverviewPage from './pages/TeamOverview'
import ProjectListPage from './pages/ProjectList'

const AppRouter = () => {
  const { auth } = useAuthContext()
  return (
    <Routes>
      {auth && (
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<HomePage />} />
          <Route path="projects" element={<ProjectLayout />}>
            <Route index element={<ProjectListPage />} />
            <Route path=":projectId" element={<ProjectOverview />} />
          </Route>
          <Route path="team" element={<TeamOverviewPage />} />
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
