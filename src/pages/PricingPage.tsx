import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { products, categories } from '../data/products'
import type { CategoryId } from '../data/products'

const formSectors = [
  'Restaurant / Bar', 'Commerce de détail', 'Hôtel / Hébergement',
  'Salon / Institut de beauté', 'Pharmacie / Santé', 'Artisan / BTP',
  'Franchise / Multi-sites', 'Autre',
]

export default function PricingPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<CategoryId>('tpe-autonome')
  const [selectedModel, setSelectedModel] = useState('')
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', sector: '', nbTerminals: '', model: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const revealRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )
    const els = revealRef.current?.querySelectorAll('.reveal') ?? []
    els.forEach((el) => { el.classList.remove('visible'); observer.observe(el) })
    return () => observer.disconnect()
  }, [activeCategory])

  const filtered = products.filter(p => p.category === activeCategory)
  const activeCat = categories.find(c => c.id === activeCategory)!

  const handleDevis = (modelName: string) => {
    setSelectedModel(modelName)
    setFormData(prev => ({ ...prev, model: modelName }))
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'devis',
          ...formData,
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
      <div style={{
        padding: '160px 24px 60px', textAlign: 'center',
        background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 100%)',
        borderBottom: '1px solid #e2e8f0',
      }}>
        <div className="container">
          <span className="section-label">Catalogue produits</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Nos solutions <span className="gradient-text">de paiement</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#475569', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            TPE, caisses enregistreuses, bornes de commande, monnayeurs et logiciels — découvrez notre gamme complète et demandez un devis gratuit.
          </p>
          {/* Compteurs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            {categories.map(cat => (
              <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: cat.bg, border: `1px solid ${cat.border}`, borderRadius: '100px', fontSize: '13px', fontWeight: 600, color: cat.color }}>
                <span>{cat.icon}</span>
                <span>{cat.count} {cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TABS CATÉGORIES — desktop : barre sticky / mobile : grille pills ── */}
      <div className="tabs-bar">
        {/* Desktop */}
        <div className="tabs-desktop">
          <div className="tabs-scroll-inner">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="tab-btn-desktop"
                  style={{
                    color: isActive ? cat.color : '#64748b',
                    fontWeight: isActive ? 700 : 500,
                    borderBottom: isActive ? `2px solid ${cat.color}` : '2px solid transparent',
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                  <span style={{
                    fontSize: '11px', fontWeight: 700,
                    padding: '2px 7px', borderRadius: '100px',
                    background: isActive ? `${cat.color}15` : '#f1f5f9',
                    color: isActive ? cat.color : '#94a3b8',
                  }}>
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="tabs-mobile">
          <div className="tabs-mobile-grid">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '8px', padding: '10px 12px', borderRadius: '12px',
                    border: `1.5px solid ${isActive ? cat.color : '#e2e8f0'}`,
                    background: isActive ? cat.bg : '#ffffff',
                    color: isActive ? cat.color : '#64748b',
                    fontSize: '13px', fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer', transition: '0.2s ease',
                    fontFamily: 'var(--font-body)', whiteSpace: 'nowrap',
                    boxShadow: isActive ? `0 2px 8px ${cat.color}20` : 'none',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{cat.icon}</span>
                  <span style={{ fontSize: '12px' }}>{cat.label}</span>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, padding: '1px 6px',
                    borderRadius: '100px',
                    background: isActive ? cat.color : '#f1f5f9',
                    color: isActive ? '#fff' : '#94a3b8',
                    flexShrink: 0,
                  }}>
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── GRILLE PRODUITS ── */}
      <section style={{ padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Titre catégorie */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: activeCat.bg, border: `1px solid ${activeCat.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
              {activeCat.icon}
            </div>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0 }}>{activeCat.label}</h2>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>{filtered.length} produit{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}</p>
            </div>
          </div>

          {/* Grille */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="products-grid">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className={`reveal delay-${(i % 4) + 1}`}
                style={{
                  background: '#ffffff', border: '1px solid #e2e8f0',
                  borderRadius: '16px', overflow: 'hidden',
                  transition: '0.3s ease', boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
                  display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 12px 32px rgba(15,23,42,0.1)`
                  e.currentTarget.style.borderColor = `${activeCat.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)'
                  e.currentTarget.style.borderColor = '#e2e8f0'
                }}
              >
                {/* Image */}
                <div style={{
                  background: '#f8fafc', padding: '24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  height: '200px', position: 'relative',
                }}>
                  {product.badge && (
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      background: activeCat.color, color: '#fff',
                      fontSize: '10px', fontWeight: 700,
                      padding: '3px 10px', borderRadius: '100px',
                      letterSpacing: '0.03em',
                    }}>
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Infos */}
                <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: activeCat.color, fontWeight: 600, marginBottom: '16px', flex: 1 }}>
                    {product.subtitle}
                  </p>
                  <button
                    onClick={() => handleDevis(product.name)}
                    style={{
                      width: '100%', padding: '10px',
                      borderRadius: '8px', border: `1px solid ${activeCat.border}`,
                      background: activeCat.bg, color: activeCat.color,
                      fontSize: '13px', fontWeight: 700,
                      cursor: 'pointer', transition: '0.2s ease',
                      fontFamily: 'var(--font-body)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = activeCat.color
                      e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = activeCat.bg
                      e.currentTarget.style.color = activeCat.color
                    }}
                  >
                    Demander un devis →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE DE DEVIS ── */}
      <section ref={formRef} style={{ padding: '80px 24px', background: '#f8fafc', scrollMarginTop: '120px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-header reveal">
            <span className="section-label" style={{ background: '#fff7ed', borderColor: '#fed7aa', color: '#f97316' }}>Demande de devis</span>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Décrivez <span className="gradient-text-warm">votre projet</span></h2>
            <p className="section-subtitle">
              Un expert Alpha Monétique vous contacte sous 2h pour vous proposer une solution sur mesure, sans engagement.
            </p>
          </div>

          <div className="reveal" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '48px', boxShadow: '0 4px 24px rgba(15,23,42,0.06)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>

                {/* Produit sélectionné */}
                {selectedModel && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '12px', background: '#eff6ff', border: '1px solid #bfdbfe', marginBottom: '28px' }}>
                    <span style={{ fontSize: '22px' }}>💳</span>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1d4ed8', marginBottom: '2px' }}>Modèle sélectionné : {selectedModel}</p>
                      <p style={{ fontSize: '12px', color: '#3b82f6' }}>Vous pouvez modifier ce choix dans le champ ci-dessous</p>
                    </div>
                    <button type="button" onClick={() => { setSelectedModel(''); setFormData(p => ({ ...p, model: '' })) }} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '18px' }}>×</button>
                  </div>
                )}

                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>Vos coordonnées</h4>
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

                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '28px 0 16px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>Votre projet</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nom de l'entreprise *</label>
                    <input type="text" name="company" required placeholder="Boulangerie Rosette" value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Secteur d'activité *</label>
                    <select name="sector" required value={formData.sector} onChange={handleChange}>
                      <option value="">Choisissez...</option>
                      {formSectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Modèle souhaité</label>
                    <input type="text" name="model" placeholder="Ex : PAX A80, MOVE 5000..." value={formData.model} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Nombre de terminaux estimé</label>
                    <select name="nbTerminals" value={formData.nbTerminals} onChange={handleChange}>
                      <option value="">À définir</option>
                      <option value="1">1 terminal</option>
                      <option value="2-3">2 à 3 terminaux</option>
                      <option value="4-10">4 à 10 terminaux</option>
                      <option value="10+">Plus de 10 terminaux</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Décrivez votre projet</label>
                  <textarea name="message" placeholder="Parlez-nous de votre activité, de vos besoins spécifiques..." value={formData.message} onChange={handleChange} style={{ minHeight: '140px' }} />
                </div>

                <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', fontSize: '16px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  {loading
                    ? <><span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> Envoi en cours...</>
                    : 'Envoyer ma demande de devis →'}
                </button>
                <p style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center', marginTop: '16px' }}>Un expert vous rappelle sous 2h en semaine. Aucun engagement.</p>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>Demande envoyée !</h3>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 32px' }}>
                  Merci <strong>{formData.firstName}</strong> ! Un expert Alpha Monétique vous contactera sous 2h à <strong style={{ color: '#2563eb' }}>{formData.email}</strong>.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn-secondary" onClick={() => { setSubmitted(false); setSelectedModel(''); setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', sector: '', nbTerminals: '', model: '', message: '' }) }} style={{ fontSize: '15px' }}>
                    Faire une nouvelle demande
                  </button>
                  <button className="btn-primary" onClick={() => navigate('/contact')} style={{ fontSize: '15px' }}>
                    Nous contacter →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Tabs bar ── */
        .tabs-bar {
          position: sticky; top: 72px; z-index: 100;
          background: rgba(255,255,255,0.97); backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
        }

        /* Desktop : barre avec scroll horizontal */
        .tabs-desktop { display: block; padding: 0 24px; }
        .tabs-scroll-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; gap: 4px;
          overflow-x: auto; padding-bottom: 1px;
          scrollbar-width: none; -ms-overflow-style: none;
        }
        .tabs-scroll-inner::-webkit-scrollbar { display: none; }
        .tab-btn-desktop {
          display: flex; align-items: center; gap: 8px;
          padding: 16px 20px; white-space: nowrap;
          background: none; border: none; border-top: 2px solid transparent;
          cursor: pointer; font-size: 14px;
          transition: 0.2s ease; font-family: var(--font-body);
          margin-bottom: -1px;
        }

        /* Mobile : grille de pills */
        .tabs-mobile { display: none; padding: 16px; }
        .tabs-mobile-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        @media (max-width: 640px) {
          .tabs-desktop { display: none; }
          .tabs-mobile  { display: block; }
          .tabs-bar     { position: static; } /* non-sticky sur mobile pour laisser de la place */
        }

        /* ── Grille produits ── */
        @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
