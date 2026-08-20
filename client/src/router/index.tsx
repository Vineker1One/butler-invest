import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FloatingMenuButton } from '../FloatingMenuButton'

import { HomePage } from '../pages/HomePage'
import { MainLayout } from '../layouts/MainLayout'
import { ServicesPage } from '../pages/ServicesPage'
import { InvestmentPage } from '../pages/InvestmentPage'
import { ProblemsPage } from '../pages/ProblemsPage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { CalculatorPage } from '../pages/CalculatorPage'
import { ContactsPage } from '../pages/ContactsPage'

import { PrivacyPolicyPage } from '../pages/PrivacyPolicy/PrivacyPolicy'
import { PersonalDataPolicyPage } from '../pages/PersonalDataPolicy/PersonalDataPolicy'
import { CookiePolicyPage } from '../pages/CookiePolicy/CookiePolicy'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <FloatingMenuButton />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/plan" element={<InvestmentPage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/personal-data-processing" element={<PersonalDataPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}