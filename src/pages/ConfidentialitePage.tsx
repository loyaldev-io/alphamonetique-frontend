export default function ConfidentialitePage() {
  return (
    <div style={{ background: '#ffffff', paddingTop: '100px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 100px' }}>

        {/* En-tête */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '100px', background: '#f5f3ff', border: '1px solid #ddd6fe', fontSize: '12px', fontWeight: 600, color: '#7c3aed', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            RGPD & Vie privée
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7 }}>
            Alpha Monétique Interactif s'engage à protéger la vie privée des utilisateurs de son site. Cette politique décrit les données collectées, leur utilisation et vos droits conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <Section title="1. Responsable du traitement">
            <p style={p}>
              Le responsable du traitement des données à caractère personnel est :<br /><br />
              <strong>Alpha Monétique Interactif</strong><br />
              Représentée par M. LECAPTAINE Alexandre<br />
              SIRET : 804 941 748 00035<br />
              Email : alphamonetique@gmail.com / alphamonetique972@gmail.com
            </p>
          </Section>

          <Section title="2. Données collectées">
            <p style={p}>Dans le cadre de l'utilisation de notre site et de nos formulaires de contact, nous collectons les données suivantes :</p>
            <ul style={ul}>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l'entreprise et secteur d'activité</li>
              <li>Contenu du message ou de la demande de devis</li>
              <li>Données de navigation (cookies analytics, si acceptés)</li>
            </ul>
          </Section>

          <Section title="3. Finalités du traitement">
            <p style={p}>Les données collectées sont utilisées pour :</p>
            <ul style={ul}>
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Vous recontacter dans le cadre d'une relation commerciale</li>
              <li>Améliorer notre site et nos services (analytics anonymisés)</li>
              <li>Respecter nos obligations légales et contractuelles</li>
            </ul>
          </Section>

          <Section title="4. Base légale">
            <p style={p}>
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <ul style={ul}>
              <li><strong>Consentement</strong> — pour les cookies non essentiels et l'envoi de communications commerciales</li>
              <li><strong>Intérêt légitime</strong> — pour répondre à vos demandes de contact</li>
              <li><strong>Exécution d'un contrat</strong> — dans le cadre de la fourniture de nos services</li>
            </ul>
          </Section>

          <Section title="5. Durée de conservation">
            <p style={p}>
              Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, sauf obligation légale imposant une durée plus longue. Les données de prospects non convertis sont supprimées après 1 an d'inactivité.
            </p>
          </Section>

          <Section title="6. Destinataires des données">
            <p style={p}>
              Vos données sont strictement réservées à l'usage interne d'Alpha Monétique Interactif. Elles ne sont pas vendues, louées ou cédées à des tiers, sauf dans les cas suivants :
            </p>
            <ul style={ul}>
              <li>Prestataires techniques nécessaires au fonctionnement du site (hébergeur)</li>
              <li>Obligation légale ou réglementaire</li>
            </ul>
          </Section>

          <Section title="7. Vos droits">
            <p style={p}>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul style={ul}>
              <li><strong>Droit d'accès</strong> — obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
              <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
              <li><strong>Droit d'opposition</strong> — s'opposer à un traitement pour raison légitime</li>
              <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
              <li><strong>Droit à la limitation</strong> — restreindre temporairement un traitement</li>
            </ul>
            <p style={{ ...p, marginTop: '16px' }}>
              Pour exercer ces droits, contactez-nous à : <strong>alphamonetique@gmail.com</strong> ou <strong>alphamonetique972@gmail.com</strong>. Vous pouvez également adresser une réclamation à la <strong>CNIL</strong> (www.cnil.fr).
            </p>
          </Section>

          <Section title="8. Cookies">
            <p style={p}>
              Notre site utilise des cookies. Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les catégories de cookies suivantes :
            </p>
            <ul style={ul}>
              <li><strong>Cookies essentiels</strong> — nécessaires au fonctionnement du site, toujours actifs</li>
              <li><strong>Cookies analytiques</strong> — mesure d'audience anonymisée (soumis à consentement)</li>
              <li><strong>Cookies marketing</strong> — personnalisation publicitaire (soumis à consentement)</li>
            </ul>
            <p style={{ ...p, marginTop: '16px' }}>
              Vous pouvez modifier vos préférences à tout moment via le bandeau cookies accessible en bas de page.
            </p>
          </Section>

          <Section title="9. Sécurité">
            <p style={p}>
              Alpha Monétique Interactif met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation accidentelle.
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

const p: React.CSSProperties = { fontSize: '15px', color: '#475569', lineHeight: 1.75, margin: 0 }
const ul: React.CSSProperties = { fontSize: '15px', color: '#475569', lineHeight: 1.9, paddingLeft: '20px', margin: '8px 0 0' }

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
