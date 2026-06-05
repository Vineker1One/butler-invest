import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { MainLayout } from '../layouts/MainLayout'
import { ServicesPage } from '../pages/ServicesPage'
import { InvestmentPage } from '../pages/InvestmentPage'
import { ProblemsPage } from '../pages/ProblemsPage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { CalculatorPage } from '../pages/CalculatorPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/plan" element={<InvestmentPage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}