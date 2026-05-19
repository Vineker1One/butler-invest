import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { MainLayout } from '../layouts/MainLayout'
import { ServicesPage } from '../pages/ServicesPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}