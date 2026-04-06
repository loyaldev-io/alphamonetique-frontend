import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import type { PageId } from '../../data/navigation'
import logoImg from '../../assets/images/logo.png'

const pageIcons: Record<PageId, string> = {
  home:      '🏠',
  solutions: '💳',
  pricing:   '🖥️',
  about:     '🏢',
  contact:   '✉️',
}

const pageDescriptions: Record<PageId, string> = {
  home:      'Retour à la page principale',
  solutions: 'TPE, caisses, installation',
  pricing:   'Nos terminaux de paiement',
  about:     'Notre histoire et notre équipe',
  contact:   'Demande de devis & coordonnées',
}

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const currentLink = navLinks.find(l => l.path === location.pathname) ?? navLinks[0]
  const currentPage = currentLink.id

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Fermer le menu au changement de route
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleNav = (path: string) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000, padding: '0 24px',
        transition: '0.3s cubic-bezier(0.4,0,0.2,1)',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(15,23,42,0.07)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', height: '72px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* ── Logo ── */}
          <button
            onClick={() => handleNav('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <img src={logoImg} alt="Alpha Monétique Interactif" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Alpha Monétique<br />
              <span style={{ fontSize: '11px', fontWeight: 500, color: '#94a3b8', letterSpacing: '0.02em' }}>Interactif</span>
            </span>
          </button>

          {/* ── Nav desktop ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.path)}
                style={{
                  background: currentPage === link.id ? '#eff6ff' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  padding: '8px 14px', borderRadius: '8px',
                  fontSize: '14px', fontWeight: currentPage === link.id ? 600 : 500,
                  color: currentPage === link.id ? '#2563eb' : '#475569',
                  transition: '0.25s ease', fontFamily: 'var(--font-body)',
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (currentPage !== link.id) {
                    e.currentTarget.style.color = '#0f172a'
                    e.currentTarget.style.background = '#f8fafc'
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== link.id) {
                    e.currentTarget.style.color = '#475569'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── CTA desktop ── */}
          <div className="nav-desktop">
            <button onClick={() => handleNav('/contact')} className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
              Demander un devis
            </button>
          </div>

          {/* ── Burger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile-burger"
            aria-label="Menu"
            style={{
              background: menuOpen ? '#f1f5f9' : 'transparent',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              width: '42px', height: '42px',
              cursor: 'pointer', display: 'none',
              flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '5px',
              transition: '0.25s ease',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                width: '18px', height: '2px', borderRadius: '2px',
                background: '#0f172a', display: 'block',
                transition: '0.3s cubic-bezier(0.4,0,0.2,1)',
                transform:
                  menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                  menuOpen && i === 1 ? 'scaleX(0) translateX(-4px)' :
                  menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' :
                  'none',
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* ── Overlay sombre ── */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(15,23,42,0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 1001,
            animation: 'fadeIn 0.25s ease',
          }}
        />
      )}

      {/* ── Drawer mobile ── */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(360px, 100vw)',
        background: '#ffffff',
        zIndex: 1002,
        display: 'flex', flexDirection: 'column',
        boxShadow: '-8px 0 40px rgba(15,23,42,0.15)',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: '0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        overflowY: 'auto',
      }}>

        {/* Header du drawer */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #f1f5f9',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, background: '#ffffff', zIndex: 1,
        }}>
          <button onClick={() => handleNav('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logoImg} alt="Logo" style={{ height: '32px', objectFit: 'contain' }} />
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              Alpha Monétique<br />
              <span style={{ fontSize: '10px', fontWeight: 500, color: '#94a3b8' }}>Interactif</span>
            </span>
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#f8fafc', border: '1px solid #e2e8f0',
              borderRadius: '10px', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '20px', color: '#64748b',
              transition: '0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f1f5f9' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc' }}
          >
            ×
          </button>
        </div>

        {/* Liens de navigation */}
        <nav style={{ padding: '16px 16px 0', flex: 1 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 8px', marginBottom: '8px' }}>
            Navigation
          </p>
          {navLinks.map((link) => {
            const isActive = currentPage === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.path)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '12px 16px', borderRadius: '12px', marginBottom: '4px',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  background: isActive ? '#eff6ff' : 'transparent',
                  transition: '0.2s ease', fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = '#f8fafc' }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                  background: isActive ? '#dbeafe' : '#f1f5f9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', transition: '0.2s ease',
                }}>
                  {pageIcons[link.id]}
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: isActive ? 700 : 600, color: isActive ? '#2563eb' : '#0f172a', margin: 0, lineHeight: 1.3 }}>
                    {link.label}
                  </p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, marginTop: '2px' }}>
                    {pageDescriptions[link.id]}
                  </p>
                </div>
                {isActive && (
                  <span style={{ marginLeft: 'auto', color: '#2563eb', fontSize: '16px' }}>→</span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Bas du drawer — CTA + infos */}
        <div style={{ padding: '20px 24px 32px', borderTop: '1px solid #f1f5f9' }}>
          <button
            onClick={() => handleNav('/contact')}
            className="btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '15px', marginBottom: '16px' }}
          >
            Demander un devis gratuit →
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { icon: '📞', text: 'Support 7j/7' },
              { icon: '⚡', text: 'Réponse sous 2h' },
              { icon: '📍', text: 'Guyane & Martinique' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#64748b' }}>
                <span style={{ fontSize: '15px' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
