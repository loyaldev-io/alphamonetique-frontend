import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { services } from '../data/services'

const sectors = [
  { icon: '🍽️', title: 'Restaurants & bars', desc: 'Encaissement rapide en salle et au comptoir, gestion des pourboires, tickets numériques.' },
  { icon: '🛍️', title: 'Commerces de détail', desc: 'Caisse tactile, gestion des stocks en temps réel et rapports de vente détaillés.' },
  { icon: '🏨', title: 'Hôtels & hébergements', desc: 'Paiement à l\'accueil et en chambre, facturation et gestion multi-postes.' },
  { icon: '💆', title: 'Salons & instituts', desc: 'Prise de rendez-vous intégrée, paiement rapide et fidélisation client.' },
  { icon: '💊', title: 'Pharmacies & santé', desc: 'TPE conformes aux normes médicales, gestion des remboursements et tiers-payant.' },
  { icon: '🔨', title: 'Artisans & BTP', desc: 'Terminaux mobiles 4G pour encaisser directement sur chantier, sans connexion fixe.' },
]

export default function SolutionsPage() {
  const navigate = useNavigate()
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const els = revealRef.current?.querySelectorAll('.reveal') ?? []
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={revealRef} style={{ background: '#ffffff' }}>

      {/* ── PAGE HEADER ── */}
      <div style={{
        padding: '160px 24px 80px', textAlign: 'center',
        background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 100%)',
        borderBottom: '1px solid #e2e8f0',
      }}>
        <div className="container">
          <span className="section-label">Nos solutions</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Solutions de paiement <span className="gradient-text">complètes</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#475569', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            De la location de terminal au système de caisse tout-en-un, chaque solution est conçue pour les professionnels des Antilles-Guyane.
          </p>
        </div>
      </div>

      {/* ── SERVICES DÉTAILLÉS ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal service-row"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}
            >
              <div style={{
                background: '#f8fafc', border: `1px solid ${service.color}20`,
                borderRadius: '24px', padding: '48px',
                display: 'flex', flexDirection: 'column', gap: '16px',
                order: i % 2 !== 0 ? 2 : 0,
              }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: `${service.color}12`, border: `1px solid ${service.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>
                  {service.icon}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {service.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '14px', color: '#475569', boxShadow: '0 1px 4px rgba(15,23,42,0.04)' }}>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ order: i % 2 !== 0 ? 1 : 0 }}>
                <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '100px', background: `${service.color}10`, border: `1px solid ${service.color}25`, fontSize: '12px', fontWeight: 600, color: service.color, marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Solution 0{i + 1}
                </span>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.2 }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '28px' }}>{service.desc}</p>
                <button className="btn-primary" onClick={() => navigate('/contact')} style={{ fontSize: '15px' }}>
                  Demander un devis →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTEURS ── */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#fff7ed', borderColor: '#fed7aa', color: '#f97316' }}>Secteurs d'activité</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Nous équipons <span className="gradient-text-warm">tous les secteurs</span></h2>
            <p className="section-subtitle">Quelle que soit votre activité, nous avons une solution adaptée à vos besoins.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="sectors-grid">
            {sectors.map((sector, i) => (
              <div
                key={sector.title}
                className={`reveal delay-${(i % 3) + 1}`}
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', transition: '0.3s ease', boxShadow: '0 2px 8px rgba(15,23,42,0.04)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#bfdbfe'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)' }}
              >
                <div style={{ fontSize: '36px', marginBottom: '14px' }}>{sector.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{sector.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Une question sur nos solutions ?
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', marginBottom: '32px', lineHeight: 1.7 }}>
            Nos experts sont disponibles pour vous conseiller et vous proposer la solution la mieux adaptée.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')} style={{ fontSize: '15px' }}>Contacter un expert</button>
            <button className="btn-secondary" onClick={() => navigate('/nos-solutions-tpe')} style={{ fontSize: '15px' }}>Voir les tarifs</button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; }
          .sectors-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .sectors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
