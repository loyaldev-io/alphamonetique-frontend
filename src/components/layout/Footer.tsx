import { useNavigate } from 'react-router-dom'
import { getPath } from '../../data/navigation'
import type { PageId } from '../../data/navigation'
import logoImg from '../../assets/images/logo.png'

export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  const handleNav = (id: PageId) => navigate(getPath(id))

  return (
    <footer style={{
      background: '#0f172a',
      borderTop: '1px solid #1e293b',
      padding: '64px 24px 32px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '48px', marginBottom: '48px' }} className="footer-grid">

          {/* Brand */}
          <div>
            <button onClick={() => handleNav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src={logoImg} alt="Alpha Monétique Interactif" style={{ height: '36px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em', lineHeight: 1.2, textAlign: 'left' }}>
                Alpha Monétique<br />
                <span style={{ fontSize: '11px', fontWeight: 500, color: '#64748b', letterSpacing: '0.02em' }}>Interactif</span>
              </span>
            </button>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, maxWidth: '280px', marginBottom: '20px' }}>
              Solutions de paiement électronique pour les professionnels des Antilles-Guyane.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(['home', 'solutions', 'pricing', 'about', 'contact'] as PageId[]).map((id) => {
                const labels: Record<PageId, string> = { home: 'Accueil', solutions: 'Solutions', pricing: 'Nos solutions TPE', about: 'À propos', contact: 'Contact' }
                return (
                  <li key={id}>
                    <button onClick={() => handleNav(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#64748b', padding: 0, transition: '0.3s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#94a3b8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                    >
                      {labels[id]}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Terminaux TPE', 'Systèmes de caisse', 'Installation', 'Maintenance', 'Support 7j/7'].map((item) => (
                <li key={item}><span style={{ fontSize: '14px', color: '#64748b' }}>{item}</span></li>
              ))}
            </ul>
          </div>

          {/* Agences */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Nos agences</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { city: 'Montjoly — Guyane', address: '2 Rés des Cèdres, MONTJOLY 97354', phone: '0594 30 46 67', email: 'alphamonetique@gmail.com' },
                { city: 'Fort-de-France — Martinique', address: 'Local n°24, Immeuble Marsan - Kerlys', phone: '05 96 67 81 57', email: 'alphamonetique972@gmail.com' },
              ].map((a) => (
                <div key={a.city}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '6px' }}>{a.city}</p>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{a.address}<br />{a.phone}<br />{a.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '28px' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            © {year} Alpha Monétique Interactif. Tous droits réservés. Développé par{' '}
            <a href="https://github.com/loyaldev-io" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid #475569', paddingBottom: '1px', transition: '0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.borderBottomColor = '#f1f5f9' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderBottomColor = '#475569' }}
            >
              loyaldev.io
            </a>
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'Mentions légales', path: '/mentions-legales' },
              { label: 'Confidentialité',  path: '/confidentialite' },
              { label: 'CGV',              path: '/cgv' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#64748b', padding: 0, transition: '0.2s ease', fontFamily: 'var(--font-body)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#94a3b8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
