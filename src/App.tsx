import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CookieBanner from './components/ui/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MentionsLegalesPage from './pages/MentionsLegalesPage'
import ConfidentialitePage from './pages/ConfidentialitePage'
import CGVPage from './pages/CGVPage'
import './styles/global.css'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="noise-overlay" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"                  element={<HomePage />} />
          <Route path="/solutions"         element={<SolutionsPage />} />
          <Route path="/nos-solutions-tpe" element={<PricingPage />} />
          <Route path="/a-propos"          element={<AboutPage />} />
          <Route path="/contact"           element={<ContactPage />} />
          <Route path="/mentions-legales"  element={<MentionsLegalesPage />} />
          <Route path="/confidentialite"   element={<ConfidentialitePage />} />
          <Route path="/cgv"               element={<CGVPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
