import { useState, useEffect, useRef } from 'react'
import guyanImg from '../assets/images/Agences/guyane.jpg'
import martiniqueImg from '../assets/images/Agences/martinique.jpg'

const agencies = [
  {
    city: 'Montjoly — Guyane',
    flag: '🇬🇫',
    image: guyanImg,
    address: 'Derrière la station SOL\n2 Rés des Cèdres, MONTJOLY 97354',
    phone: '0594 30 46 67',
    email: 'alphamonetique@gmail.com',
    hours: 'Lun–Ven : 8h–17h · Sam : 9h–13h',
    color: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    city: 'Fort-de-France — Martinique',
    flag: '🇲🇶',
    image: martiniqueImg,
    address: 'Local n°24 - 1er étage\nImmeuble Marsan - Kerlys, 97200 Fort-de-France',
    phone: '05 96 67 81 57',
    email: 'alphamonetique972@gmail.com',
    hours: 'Lun–Ven : 8h–17h · Sam : 9h–13h',
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
]

const sectors = ['Restaurant / Bar', 'Commerce de détail', 'Hôtel / Hébergement', 'Salon / Institut de beauté', 'Pharmacie / Santé', 'Artisan / BTP', 'Autre']

type Agency = typeof agencies[number]

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', sector: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null)
  const revealRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const els = revealRef.current?.querySelectorAll('.reveal') ?? []
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleContactAgency = (agency: Agency) => {
    setSelectedAgency(agency)
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          ...formData,
          agencyEmail: selectedAgency?.email ?? null,
          agencyCity:  selectedAgency?.city  ?? null,
        }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={revealRef} style={{ background: '#ffffff' }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ padding: '160px 24px 80px', textAlign: 'center', background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 100%)', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-label">Contact</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Parlons de votre <span className="gradient-text">projet</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#475569', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Demande de devis, question technique ou simple renseignement — notre équipe vous répond sous 2h.
          </p>
          {/* Badges rapides */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
            {[
              { icon: '⚡', text: 'Réponse sous 2h' },
              { icon: '🔧', text: 'Technicien sous 24h' },
              { icon: '📞', text: 'Support 7j/7' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '100px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>
                <span>{item.icon}</span> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NOS AGENCES ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#f5f3ff', borderColor: '#ddd6fe', color: '#7c3aed' }}>Nos agences</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Deux agences <span className="gradient-text-purple">à votre service</span></h2>
            <p className="section-subtitle">Des équipes locales sur le terrain, disponibles pour vous accompagner et intervenir rapidement.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="agencies-grid">
            {agencies.map((agency, i) => {
              const isSelected = selectedAgency?.city === agency.city
              return (
              <div
                key={agency.city}
                className={`reveal delay-${i + 1}`}
                style={{
                  background: '#ffffff',
                  border: isSelected ? `2px solid ${agency.color}` : `1px solid ${agency.border}`,
                  borderRadius: '20px', overflow: 'hidden',
                  boxShadow: isSelected ? `0 8px 40px ${agency.color}25` : '0 4px 24px rgba(15,23,42,0.06)',
                  transition: '0.3s ease',
                }}
                onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${agency.color}15` } }}
                onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)' } }}
              >
                {/* Photo agence */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={agency.image}
                    alt={`Agence ${agency.city}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Overlay dégradé */}
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${agency.color}CC 0%, transparent 50%)` }} />
                  {/* Label ville */}
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '28px' }}>{agency.flag}</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>{agency.city}</h3>
                  </div>
                </div>

                {/* Infos */}
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                      { icon: '📍', label: 'Adresse',  value: agency.address },
                      { icon: '📞', label: 'Téléphone', value: agency.phone },
                      { icon: '✉️', label: 'Email',    value: agency.email },
                      { icon: '🕐', label: 'Horaires', value: agency.hours },
                    ].map(info => (
                      <div key={info.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
                          background: agency.bg, border: `1px solid ${agency.border}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '16px',
                        }}>
                          {info.icon}
                        </div>
                        <div>
                          <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 2px' }}>{info.label}</p>
                          <p style={{ fontSize: '14px', color: '#0f172a', margin: 0, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleContactAgency(agency)}
                    style={{
                      marginTop: '24px', width: '100%', padding: '12px',
                      borderRadius: '10px', border: `1.5px solid ${agency.color}`,
                      background: isSelected ? agency.color : agency.bg,
                      color: isSelected ? '#ffffff' : agency.color,
                      fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                      transition: '0.2s ease', fontFamily: 'var(--font-body)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    }}
                    onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.background = agency.color; e.currentTarget.style.color = '#fff' } }}
                    onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.background = agency.bg; e.currentTarget.style.color = agency.color } }}
                  >
                    {isSelected ? (
                      <><span>✓</span> Agence sélectionnée — voir le formulaire ↓</>
                    ) : (
                      <>Contacter cette agence →</>
                    )}
                  </button>
                </div>
              </div>
            )})}

          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section ref={formRef} id="contact-form" style={{ padding: '80px 24px', background: '#f8fafc', scrollMarginTop: '90px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#fff7ed', borderColor: '#fed7aa', color: '#f97316' }}>Formulaire de contact</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Envoyez-nous <span className="gradient-text-warm">un message</span></h2>
            <p className="section-subtitle">
              {selectedAgency
                ? `Votre message sera transmis à l'agence de ${selectedAgency.city}.`
                : 'Remplissez ce formulaire et un expert vous contactera rapidement.'}
            </p>
          </div>

          <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '48px', boxShadow: '0 4px 24px rgba(15,23,42,0.06)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>

                {/* Bandeau agence sélectionnée */}
                {selectedAgency ? (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 18px', borderRadius: '12px', marginBottom: '28px',
                    background: selectedAgency.bg,
                    border: `1px solid ${selectedAgency.border}`,
                  }}>
                    <span style={{ fontSize: '26px' }}>{selectedAgency.flag}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: selectedAgency.color, margin: '0 0 2px' }}>
                        Agence sélectionnée — {selectedAgency.city}
                      </p>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                        Ce message sera envoyé à <strong>{selectedAgency.email}</strong>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedAgency(null)}
                      style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '20px', lineHeight: 1, padding: '4px' }}
                      title="Désélectionner l'agence"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 16px', borderRadius: '12px', marginBottom: '28px',
                    background: '#f8fafc', border: '1px dashed #cbd5e1',
                  }}>
                    <span style={{ fontSize: '18px' }}>📍</span>
                    <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
                      Aucune agence sélectionnée — votre message sera transmis à l'équipe générale. <br />
                      <span style={{ color: '#64748b' }}>Vous pouvez sélectionner une agence ci-dessus pour une prise en charge locale.</span>
                    </p>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label>Prénom *</label>
                    <input type="text" name="firstName" required placeholder="Marie" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Nom *</label>
                    <input type="text" name="lastName" required placeholder="Dupont" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required placeholder="vous@entreprise.com" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Téléphone *</label>
                    <input type="tel" name="phone" required placeholder="+594 ou +596..." value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Entreprise *</label>
                    <input type="text" name="company" required placeholder="Boulangerie Rosette" value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Secteur *</label>
                    <select name="sector" required value={formData.sector} onChange={handleChange}>
                      <option value="">Choisissez...</option>
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Décrivez votre besoin..." value={formData.message} onChange={handleChange} style={{ minHeight: '120px' }} />
                </div>
                <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', fontSize: '16px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  {loading
                    ? <><span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> Envoi en cours...</>
                    : 'Envoyer ma demande →'}
                </button>
                <p style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                </p>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>Message envoyé !</h3>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.75, maxWidth: '400px', margin: '0 auto 20px' }}>
                  Merci <strong>{formData.firstName}</strong> ! Un expert vous contactera sous 2h à <strong style={{ color: '#2563eb' }}>{formData.email}</strong>.
                </p>
                {selectedAgency && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    padding: '12px 20px', borderRadius: '12px', marginBottom: '28px',
                    background: selectedAgency.bg, border: `1px solid ${selectedAgency.border}`,
                  }}>
                    <span style={{ fontSize: '22px' }}>{selectedAgency.flag}</span>
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: selectedAgency.color, margin: '0 0 2px' }}>
                        Transmis à l'agence de {selectedAgency.city}
                      </p>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>{selectedAgency.email}</p>
                    </div>
                  </div>
                )}
                <br />
                <button className="btn-secondary" onClick={() => { setSubmitted(false); setSelectedAgency(null); setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', sector: '', message: '' }) }} style={{ fontSize: '15px' }}>
                  Envoyer un autre message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .agencies-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
