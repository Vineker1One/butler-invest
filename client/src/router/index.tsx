import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { MainLayout } from '../layouts/MainLayout'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}