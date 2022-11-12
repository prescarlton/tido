import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home'
import NotFoundPage from '@/pages/404'
import AppLayout from './layouts/AppLayout'
import BoardsPage from './pages/Boards'
import DocumentsPage from './pages/Documents'
import CalendarPage from './pages/CalendarPage'
import SettingsPage from './pages/Settings'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/boards" element={<BoardsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
