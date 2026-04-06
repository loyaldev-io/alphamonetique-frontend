import { useState, useEffect } from 'react'

type CookieChoice = 'all' | 'essential' | null

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false })

  useEffect(() => {
    const saved = localStorage.getItem('am_cookie_consent')
    if (!saved) {
      // Petit délai pour laisser le site se charger
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = (choice: CookieChoice) => {
    localStorage.setItem('am_cookie_consent', choice === 'all' ? 'all' : choice === 'essential' ? 'essential' : 'custom')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Overlay flou très léger */}
      <div style={{
        position: 'fixed', inset: 0,
        background: 'rgba(15, 23, 42, 0.25)',
        backdropFilter: 'blur(2px)',
        zIndex: 3000,
        animation: 'fadeIn 0.3s ease',
      }} />

      {/* Banner */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3001,
        width: 'calc(100% - 48px)',
        maxWidth: '780px',
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 24px 64px rgba(15,23,42,0.18), 0 0 0 1px rgba(15,23,42,0.06)',
        overflow: 'hidden',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>

        {/* Barre colorée en haut */}
        <div style={{
          height: '4px',
          background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 40%, #ec4899 70%, #f97316 100%)',
        }} />

        <div style={{ padding: '28px 32px' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
              background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
              border: '1px solid #e2e8f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px',
            }}>
              🍪
            </div>
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                Nous respectons votre vie privée
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et vous proposer du contenu pertinent.
                Vous pouvez accepter tous les cookies ou personnaliser vos préférences.{' '}
                <span style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 500, textDecoration: 'underline' }}
                  onClick={() => setShowDetails(!showDetails)}>
                  {showDetails ? 'Masquer les détails' : 'En savoir plus'}
                </span>
              </p>
            </div>
          </div>

          {/* Détails personnalisables */}
          {showDetails && (
            <div style={{
              background: '#f8fafc', border: '1px solid #e2e8f0',
              borderRadius: '12px', padding: '16px 20px',
              marginBottom: '20px',
              animation: 'fadeInUp 0.3s ease',
            }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                Gérer mes préférences
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                {/* Cookie essentiel — toujours actif */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: '0 0 2px' }}>Cookies essentiels</p>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Nécessaires au fonctionnement du site. Toujours actifs.</p>
                  </div>
                  <div style={{
                    width: '42px', height: '24px', borderRadius: '100px',
                    background: '#10b981', position: 'relative', flexShrink: 0,
                    opacity: 0.6, cursor: 'not-allowed',
                  }}>
                    <span style={{ position: 'absolute', top: '2px', right: '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                  </div>
                </div>

                {/* Analytiques */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: '0 0 2px' }}>Cookies analytiques</p>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Nous aident à comprendre comment vous utilisez le site (pages visitées, durée, etc.).</p>
                  </div>
                  <button
                    onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                    style={{
                      width: '42px', height: '24px', borderRadius: '100px',
                      background: prefs.analytics ? '#2563eb' : '#cbd5e1',
                      border: 'none', cursor: 'pointer', position: 'relative',
                      transition: '0.25s ease', flexShrink: 0,
                    }}
                  >
                    <span style={{
                      position: 'absolute', top: '2px',
                      left: prefs.analytics ? '20px' : '2px',
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: '#fff', transition: '0.25s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }} />
                  </button>
                </div>

                {/* Marketing */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: '0 0 2px' }}>Cookies marketing</p>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Utilisés pour vous proposer des publicités et contenus personnalisés.</p>
                  </div>
                  <button
                    onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                    style={{
                      width: '42px', height: '24px', borderRadius: '100px',
                      background: prefs.marketing ? '#2563eb' : '#cbd5e1',
                      border: 'none', cursor: 'pointer', position: 'relative',
                      transition: '0.25s ease', flexShrink: 0,
                    }}
                  >
                    <span style={{
                      position: 'absolute', top: '2px',
                      left: prefs.marketing ? '20px' : '2px',
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: '#fff', transition: '0.25s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }} />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* Boutons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button
              onClick={() => accept('essential')}
              style={{
                padding: '10px 20px', borderRadius: '10px',
                border: '1px solid #e2e8f0', background: '#ffffff',
                fontSize: '14px', fontWeight: 600, color: '#475569',
                cursor: 'pointer', transition: '0.2s ease',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#cbd5e1' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e2e8f0' }}
            >
              Refuser
            </button>

            {showDetails && (
              <button
                onClick={() => accept('essential')}
                style={{
                  padding: '10px 20px', borderRadius: '10px',
                  border: '1px solid #bfdbfe', background: '#eff6ff',
                  fontSize: '14px', fontWeight: 600, color: '#2563eb',
                  cursor: 'pointer', transition: '0.2s ease',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#dbeafe' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#eff6ff' }}
              >
                Enregistrer mes choix
              </button>
            )}

            <button
              onClick={() => accept('all')}
              style={{
                padding: '10px 24px', borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                fontSize: '14px', fontWeight: 700, color: '#ffffff',
                cursor: 'pointer', transition: '0.2s ease',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.3)' }}
            >
              Tout accepter
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(32px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 600px) {
          .cookie-btns { flex-direction: column !important; }
        }
      `}</style>
    </>
  )
}
