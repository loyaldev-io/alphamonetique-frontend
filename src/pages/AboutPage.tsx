import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { stats } from '../data/stats'
import { team } from '../data/team'

const values = [
  { icon: '🤝', title: 'Proximité', desc: 'Ancrés localement depuis 10 ans, nous connaissons les défis spécifiques des commerçants des Antilles-Guyane.' },
  { icon: '🏆', title: 'Excellence', desc: 'Techniciens certifiés par les plus grands fabricants. Chaque installation est soignée, chaque panne traitée en priorité.' },
  { icon: '💡', title: 'Innovation', desc: 'Nous apportons les dernières technologies de paiement (NFC, 4G, cloud) dans des territoires qui en ont besoin.' },
]

export default function AboutPage() {
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
      <div style={{ padding: '160px 24px 80px', textAlign: 'center', background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 100%)', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-label">À propos</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Notre <span className="gradient-text">histoire</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#475569', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Fondée en 2014 à Cayenne, Alpha Monétique est devenue la référence des solutions de paiement pour les professionnels des Antilles-Guyane.
          </p>
        </div>
      </div>

      {/* ── HISTOIRE ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="about-grid">
          <div className="reveal">
            <span className="section-label">Notre mission</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '16px 0', lineHeight: 1.25 }}>
              Démocratiser le paiement électronique aux Antilles-Guyane
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'En 2014, notre fondateur Alexis Montfort a constaté que de nombreux commerces de Guyane et Martinique peinaient à accéder à des solutions de paiement modernes, fiables et bien supportées localement.',
                'Avec l\'aide d\'une équipe de techniciens passionnés, il a fondé Alpha Monétique pour combler ce manque : des terminaux de qualité, une installation professionnelle, et un support de proximité 7j/7.',
                'Aujourd\'hui, plus de 500 professionnels — restaurateurs, commerçants, hôteliers, artisans — nous font confiance pour gérer leurs encaissements au quotidien.',
              ].map((text, i) => (
                <p key={i} style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75 }}>{text}</p>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {values.map((val, i) => (
              <div
                key={val.title}
                className={`reveal delay-${i + 1}`}
                style={{ display: 'flex', gap: '20px', padding: '24px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', transition: '0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#bfdbfe'; e.currentTarget.style.background = '#eff6ff' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc' }}
              >
                <div style={{ fontSize: '28px', flexShrink: 0 }}>{val.icon}</div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{val.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#ecfeff', borderColor: '#a5f3fc', color: '#06b6d4' }}>En chiffres</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Alpha Monétique <span className="gradient-text">en chiffres</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="stats-grid">
            {stats.map((stat, i) => {
              const colors = [
                { bg: '#eff6ff', border: '#bfdbfe', text: '#2563eb' },
                { bg: '#f5f3ff', border: '#ddd6fe', text: '#7c3aed' },
                { bg: '#fff7ed', border: '#fed7aa', text: '#f97316' },
                { bg: '#f0fdf4', border: '#bbf7d0', text: '#10b981' },
              ]
              const c = colors[i]
              return (
                <div key={stat.value} className={`reveal delay-${i + 1}`} style={{ textAlign: 'center', padding: '36px 24px', background: c.bg, border: `1px solid ${c.border}`, borderRadius: '20px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '42px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: c.text, margin: '6px 0 4px' }}>{stat.label}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#fdf2f8', borderColor: '#fbcfe8', color: '#ec4899' }}>Notre équipe</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Des experts <span className="gradient-text-purple">à votre service</span></h2>
            <p className="section-subtitle">Une équipe locale, passionnée et certifiée, disponible pour vous accompagner à chaque étape.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="team-grid">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`reveal delay-${(i % 4) + 1}`}
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', transition: '0.3s ease', boxShadow: '0 2px 8px rgba(15,23,42,0.04)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#bfdbfe'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)' }}
              >
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 800, color: '#fff', margin: '0 auto 16px', boxShadow: '0 4px 16px rgba(37,99,235,0.2)' }}>
                  {member.avatar}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '13px', color: '#2563eb', fontWeight: 600, marginBottom: '12px' }}>{member.role}</p>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7, marginBottom: '14px' }}>{member.bio}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8' }}>
                  <span>📍</span> {member.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '0 24px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Rejoignez nos 500+ clients
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', marginBottom: '32px', lineHeight: 1.7 }}>
            Faites confiance à l'équipe locale qui connaît le mieux votre marché. Demandez un devis gratuit dès aujourd'hui.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')} style={{ fontSize: '15px' }}>Demander un devis</button>
            <button className="btn-secondary" onClick={() => navigate('/nos-solutions-tpe')} style={{ fontSize: '15px' }}>Voir les tarifs</button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
