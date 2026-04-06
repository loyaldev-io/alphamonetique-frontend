import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { services } from '../data/services'
import { stats } from '../data/stats'
import homeImg from '../assets/images/home.jpg'

const advantages = [
  { icon: '⚡', title: 'Installation en 24h', desc: 'Nos techniciens interviennent sur site le lendemain de votre commande.', color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
  { icon: '🛡️', title: 'SLA garanti contractuellement', desc: '99.9% de disponibilité garanti, ou nous vous remboursons.', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  { icon: '📞', title: 'Support 7j/7', desc: 'Une équipe dédiée disponible tous les jours, même les jours fériés.', color: '#10b981', bg: '#f0fdf4', border: '#bbf7d0' },
  { icon: '🌴', title: 'Expertise locale', desc: '10 ans d\'expérience en Guyane et Martinique. Nous connaissons votre marché.', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  { icon: '🔄', title: 'Remplacement immédiat', desc: 'Panne ? Un terminal de remplacement vous est livré sous 24h.', color: '#ec4899', bg: '#fdf2f8', border: '#fbcfe8' },
  { icon: '📊', title: 'Tableau de bord temps réel', desc: 'Suivez vos ventes, transactions et performances depuis n\'importe où.', color: '#06b6d4', bg: '#ecfeff', border: '#a5f3fc' },
]

export default function HomePage() {
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
    <div ref={revealRef}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '120px 24px 80px',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(160deg, #f0f7ff 0%, #fdf4ff 40%, #fff7ed 70%, #ffffff 100%)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }} />
        <div style={{ position: 'absolute', top: '5%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '0%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '40%', left: '40%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="hero-grid">

          {/* ── Colonne texte ── */}
          <div>
            <div className="hero-animate hero-animate-1" style={{ marginBottom: '24px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '100px',
                background: '#eff6ff', border: '1px solid #bfdbfe',
                fontSize: '13px', fontWeight: 600, color: '#2563eb',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'pulseDot 2s ease-in-out infinite' }} />
                500+ professionnels nous font confiance aux Antilles-Guyane
              </span>
            </div>

            <h1 className="hero-animate hero-animate-2" style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px', color: '#0f172a',
            }}>
              La monétique{' '}
              <span className="gradient-text">professionnelle</span>
              {' '}pour votre commerce
            </h1>

            <p className="hero-animate hero-animate-3" style={{
              fontSize: '18px', color: '#475569',
              lineHeight: 1.7, marginBottom: '40px',
            }}>
              Terminaux de paiement, systèmes de caisse et support 7j/7. Déploiement en 24h par nos techniciens certifiés en Guyane et Martinique.
            </p>

            <div className="hero-animate hero-animate-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('/contact')} style={{ fontSize: '16px', padding: '16px 36px' }}>
                Demander un devis gratuit
              </button>
              <button className="btn-secondary" onClick={() => navigate('/solutions')} style={{ fontSize: '16px', padding: '16px 36px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Découvrir nos solutions →
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}>
              {[{ icon: '✓', text: 'Installation J+1' }, { icon: '✓', text: 'SLA 99.9%' }, { icon: '✓', text: 'Support 7j/7' }].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne image ── */}
          <div className="hero-animate hero-animate-3" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-24px',
              background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(6,182,212,0.08) 100%)',
              borderRadius: '40px', filter: 'blur(2px)', zIndex: 0,
            }} />
            <div style={{
              position: 'relative', zIndex: 1, borderRadius: '28px', overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(15,23,42,0.18), 0 0 0 1px rgba(37,99,235,0.08)',
              aspectRatio: '4/3',
            }}>
              <img src={homeImg} alt="Solution de paiement Alpha Monétique" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 100%)' }} />
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.25)', borderRadius: '14px', padding: '10px 16px',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', flexShrink: 0, boxShadow: '0 0 0 3px rgba(16,185,129,0.3)', animation: 'pulseDot 2s ease-in-out infinite' }} />
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', margin: 0 }}>Paiement accepté</p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', margin: 0 }}>Toutes cartes · Sans contact</p>
                </div>
              </div>
            </div>

            <div style={{
              position: 'absolute', top: '-20px', right: '-20px', zIndex: 2,
              background: '#ffffff', borderRadius: '16px', padding: '16px 20px',
              boxShadow: '0 8px 32px rgba(15,23,42,0.12), 0 0 0 1px #e2e8f0',
              display: 'flex', alignItems: 'center', gap: '12px', minWidth: '180px',
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>⚡</div>
              <div>
                <p style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>99.9%</p>
                <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Disponibilité SLA</p>
              </div>
            </div>

            <div style={{
              position: 'absolute', bottom: '-20px', right: '-16px', zIndex: 2,
              background: '#ffffff', borderRadius: '16px', padding: '14px 18px',
              boxShadow: '0 8px 32px rgba(15,23,42,0.12), 0 0 0 1px #e2e8f0',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{ display: 'flex' }}>
                {['MR', 'JM', 'SB'].map((initials, i) => (
                  <div key={initials} style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${['#2563eb','#7c3aed','#06b6d4'][i]}, ${['#06b6d4','#2563eb','#7c3aed'][i]})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', fontWeight: 800, color: '#fff',
                    marginLeft: i === 0 ? 0 : '-8px', border: '2px solid #fff',
                  }}>
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', margin: 0 }}>500+ clients</p>
                <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Antilles-Guyane</p>
              </div>
            </div>

            <div style={{
              position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%)',
              width: '80px', height: '80px', borderRadius: '50%',
              border: '2px dashed rgba(37,99,235,0.2)', zIndex: 0,
            }} />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ padding: '0 24px', position: 'relative', zIndex: 1, background: '#ffffff' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', background: '#ffffff',
          border: '1px solid #e2e8f0', borderRadius: '20px', padding: '8px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px',
          boxShadow: '0 4px 24px rgba(15,23,42,0.06)', transform: 'translateY(-32px)',
        }} className="stats-grid">
          {stats.map((stat, i) => {
            const colors = [
              { bg: '#eff6ff', border: '#bfdbfe', text: '#2563eb' },
              { bg: '#f5f3ff', border: '#ddd6fe', text: '#7c3aed' },
              { bg: '#fff7ed', border: '#fed7aa', text: '#f97316' },
              { bg: '#f0fdf4', border: '#bbf7d0', text: '#10b981' },
            ]
            const c = colors[i]
            return (
              <div key={stat.value} className={`reveal delay-${i + 1}`} style={{ textAlign: 'center', padding: '28px 16px', background: c.bg, borderRadius: '14px', border: `1px solid ${c.border}` }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>{stat.icon}</div>
                <div style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: c.text, margin: '5px 0 3px' }}>{stat.label}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>{stat.description}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '60px 24px 120px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#f5f3ff', borderColor: '#ddd6fe', color: '#7c3aed' }}>Nos solutions</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Tout ce dont votre commerce <span className="gradient-text-purple">a besoin</span></h2>
            <p className="section-subtitle">Des terminaux de paiement aux systèmes de caisse complets, nous couvrons tous vos besoins.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="services-grid">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`reveal delay-${i + 1}`}
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '36px', transition: '0.3s ease', boxShadow: '0 2px 8px rgba(15,23,42,0.04)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = `${service.color}60`
                  e.currentTarget.style.boxShadow = `0 8px 32px ${service.color}12`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.borderColor = '#e2e8f0'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)'
                }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${service.color}12`, border: `1px solid ${service.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((f) => (
                    <span key={f} style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '4px 10px', borderRadius: '6px' }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn-secondary" onClick={() => navigate('/solutions')} style={{ fontSize: '15px' }}>
              Voir toutes nos solutions →
            </button>
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#fff7ed', borderColor: '#fed7aa', color: '#f97316' }}>Pourquoi nous choisir</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Ce qui nous <span className="gradient-text-warm">différencie</span></h2>
            <p className="section-subtitle">10 ans d'expérience locale, des équipes certifiées et un engagement fort sur la qualité de service.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="advantages-grid">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`reveal delay-${(i % 3) + 1}`}
                style={{ padding: '28px', background: '#ffffff', border: `1px solid ${adv.border}`, borderRadius: '16px', transition: '0.3s ease', boxShadow: '0 2px 8px rgba(15,23,42,0.04)', borderTopWidth: '3px', borderTopColor: adv.color }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 28px ${adv.color}18` }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: adv.bg, border: `1px solid ${adv.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
                  {adv.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{adv.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '0 24px 120px', background: '#ffffff' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          background: 'linear-gradient(135deg, #f97316 0%, #ec4899 40%, #7c3aed 75%, #2563eb 100%)',
          borderRadius: '24px', padding: '80px 48px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', filter: 'blur(40px)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Prêt à moderniser votre encaissement ?
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>
              Demandez votre devis gratuit dès aujourd'hui. Nos experts vous rappellent sous 2h.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-white" onClick={() => navigate('/contact')} style={{ fontSize: '16px', padding: '16px 36px' }}>
                Demander un devis gratuit
              </button>
              <button className="btn-ghost" onClick={() => navigate('/nos-solutions-tpe')} style={{ fontSize: '16px', padding: '16px 36px' }}>
                Voir les tarifs
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .advantages-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
