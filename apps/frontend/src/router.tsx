import { Navigate, Route, Routes } from "react-router-dom"

import AppLayout from "@/layouts/AppLayout"
import ProjectsLayout from "@/layouts/ProjectLayout"
import NotFoundPage from "@/pages/404"
import BoardPage from "@/pages/boards/BoardPage"
import HomePage from "@/pages/Home"
import LoginPage from "@/pages/Login"
import MyTasksPage from "@/pages/MyTasks"
import ProjectListPage from "@/pages/ProjectList"
import AnnouncementsPage from "@/pages/projects/Announcements"
import OverviewPage from "@/pages/projects/Overview"
import ResourcesPage from "@/pages/projects/Resources"
import ProjectSettingsPage from "@/pages/projects/Settings"
import SettingsPage from "@/pages/Settings"
import SignupPage from "@/pages/Signup"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<HomePage />} />
        <Route path="p" element={<ProjectsLayout />}>
          <Route index element={<ProjectListPage />} />
          <Route path=":projectId">
            <Route index element={<OverviewPage />} />
            <Route path="announcements" element={<AnnouncementsPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="settings" element={<ProjectSettingsPage />} />
            <Route path="b">
              <Route path=":boardId" element={<BoardPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="my-tasks" element={<MyTasksPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default AppRouter
