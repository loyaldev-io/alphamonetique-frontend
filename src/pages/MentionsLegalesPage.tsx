export default function MentionsLegalesPage() {
  return (
    <div style={{ background: '#ffffff', paddingTop: '100px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 100px' }}>

        {/* En-tête */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '100px', background: '#eff6ff', border: '1px solid #bfdbfe', fontSize: '12px', fontWeight: 600, color: '#2563eb', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Informations légales
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Mentions légales
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7 }}>
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance en l'Économie Numérique (LCEN), les informations suivantes sont portées à la connaissance des utilisateurs du site.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <Section title="1. Éditeur du site">
            <Row label="Raison sociale"       value="Alpha Monétique Interactif" />
            <Row label="Forme juridique"       value="Société par actions simplifiée (SAS)" />
            <Row label="Date de création"      value="21 octobre 2014" />
            <Row label="SIRET (siège social)"  value="804 941 748 00035" />
            <Row label="Directeur de publication" value="M. LECAPTAINE Alexandre" />
          </Section>

          <Section title="2. Siège social & agences">
            <p style={p}>
              <strong>Agence Guyane</strong><br />
              2 Rés des Cèdres, Derrière la station SOL<br />
              MONTJOLY 97354<br />
              Tél. : 0594 30 46 67<br />
              Email : alphamonetique@gmail.com
            </p>
            <p style={{ ...p, marginTop: '16px' }}>
              <strong>Agence Martinique</strong><br />
              Local n°24 - 1er étage, Immeuble Marsan - Kerlys<br />
              97200 Fort-de-France<br />
              Tél. : 05 96 67 81 57<br />
              Email : alphamonetique972@gmail.com
            </p>
          </Section>

          <Section title="3. Hébergement">
            <p style={p}>
              Le site est hébergé par un prestataire technique tiers. Les coordonnées de l'hébergeur sont disponibles sur simple demande auprès de l'éditeur.
            </p>
          </Section>

          <Section title="4. Propriété intellectuelle">
            <p style={p}>
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes) est la propriété exclusive d'Alpha Monétique Interactif ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p style={p}>
              Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'Alpha Monétique Interactif.
            </p>
          </Section>

          <Section title="5. Responsabilité">
            <p style={p}>
              Alpha Monétique Interactif s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, la société ne peut garantir l'exactitude, la complétude et l'actualité de ces informations et décline toute responsabilité pour d'éventuelles erreurs ou omissions.
            </p>
            <p style={p}>
              Alpha Monétique Interactif ne saurait être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.
            </p>
          </Section>

          <Section title="6. Liens hypertextes">
            <p style={p}>
              Le site peut contenir des liens vers des sites tiers. Alpha Monétique Interactif n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de confidentialité.
            </p>
          </Section>

          <Section title="7. Droit applicable">
            <p style={p}>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social d'Alpha Monétique Interactif.
            </p>
          </Section>

          <div style={{ marginTop: '8px', padding: '16px 20px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
              Dernière mise à jour : avril 2026
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

// ── Composants internes ──

const p: React.CSSProperties = { fontSize: '15px', color: '#475569', lineHeight: 1.75, margin: 0 }

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid #f8fafc' }}>
      <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748b', minWidth: '200px', flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: '14px', color: '#0f172a' }}>{value}</span>
    </div>
  )
}
