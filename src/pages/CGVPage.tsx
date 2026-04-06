export default function CGVPage() {
  return (
    <div style={{ background: '#ffffff', paddingTop: '100px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 100px' }}>

        {/* En-tête */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '100px', background: '#fff7ed', border: '1px solid #fed7aa', fontSize: '12px', fontWeight: 600, color: '#f97316', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Conditions commerciales
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Conditions Générales de Vente
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7 }}>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Alpha Monétique Interactif et ses clients professionnels, dans le cadre de la fourniture de terminaux de paiement, systèmes de caisse et services associés.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <Section title="1. Objet et champ d'application">
            <p style={p}>
              Les présentes CGV s'appliquent à toute commande passée auprès d'Alpha Monétique Interactif (ci-après « le Prestataire »), société par actions simplifiée au capital social enregistré, immatriculée sous le numéro SIRET 804 941 748 00035, représentée par M. LECAPTAINE Alexandre.
            </p>
            <p style={p}>
              Toute commande implique l'acceptation sans réserve des présentes CGV. Ces conditions prévalent sur tout autre document du client, notamment ses conditions générales d'achat.
            </p>
          </Section>

          <Section title="2. Produits et services">
            <p style={p}>Les offres du Prestataire comprennent notamment :</p>
            <ul style={ul}>
              <li>La vente et la location de terminaux de paiement électronique (TPE)</li>
              <li>La vente de caisses enregistreuses, bornes de commande et monnayeurs</li>
              <li>L'installation, la mise en service et la formation à l'utilisation</li>
              <li>La maintenance préventive et corrective du matériel</li>
              <li>Le support technique et l'assistance 7j/7</li>
              <li>La fourniture et le paramétrage de logiciels de caisse</li>
            </ul>
            <p style={p}>
              Les caractéristiques essentielles des produits sont présentées sur le site et dans les devis fournis. Le Prestataire se réserve le droit de modifier ses offres à tout moment, sans que cela affecte les commandes déjà acceptées.
            </p>
          </Section>

          <Section title="3. Devis et formation du contrat">
            <p style={p}>
              Toute commande est précédée d'un devis gratuit, établi sur la base des informations transmises par le client. Le devis est valable <strong>30 jours</strong> à compter de sa date d'émission.
            </p>
            <p style={p}>
              Le contrat est formé dès la signature du devis par le client et sa réception par le Prestataire, accompagnée du règlement de l'acompte prévu.
            </p>
          </Section>

          <Section title="4. Prix et conditions de paiement">
            <p style={p}>
              Les prix sont indiqués en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation.
            </p>
            <p style={p}>Les conditions de paiement standards sont :</p>
            <ul style={ul}>
              <li><strong>Acompte de 30 %</strong> à la signature du devis</li>
              <li><strong>Solde de 70 %</strong> à la livraison ou mise en service</li>
              <li>Paiement par virement bancaire, chèque ou espèces</li>
            </ul>
            <p style={p}>
              Tout retard de paiement entraîne l'application de pénalités de retard au taux légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de 40 €, conformément à l'article L.441-10 du Code de commerce.
            </p>
          </Section>

          <Section title="5. Livraison et installation">
            <p style={p}>
              Le Prestataire s'engage à intervenir sur site dans un délai de <strong>24 à 48 heures ouvrées</strong> suivant la validation de la commande, sous réserve de disponibilité du matériel.
            </p>
            <p style={p}>
              L'installation inclut la mise en service du matériel, le paramétrage adapté à l'activité du client et une formation à l'utilisation. Le client s'engage à mettre à disposition un accès au local, une alimentation électrique et, le cas échéant, une connexion réseau.
            </p>
            <p style={p}>
              Les risques de perte ou de détérioration du matériel sont transférés au client à compter de la livraison. Les délais annoncés sont indicatifs et le Prestataire ne peut être tenu responsable de retards liés à des événements indépendants de sa volonté (force majeure, rupture de stock fournisseur, etc.).
            </p>
          </Section>

          <Section title="6. Garantie et SAV">
            <p style={p}>
              Le matériel fourni bénéficie de la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation) ainsi que de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).
            </p>
            <p style={p}>
              En complément, le Prestataire propose une garantie contractuelle dont les conditions sont précisées dans le devis. En cas de panne, le Prestataire s'engage à intervenir dans les <strong>24 heures ouvrées</strong> et à fournir un terminal de remplacement si nécessaire.
            </p>
            <p style={p}>
              La garantie ne couvre pas les dommages résultant d'une utilisation non conforme, d'une négligence, d'une modification non autorisée ou d'un cas de force majeure.
            </p>
          </Section>

          <Section title="7. Obligations du client">
            <p style={p}>Le client s'engage à :</p>
            <ul style={ul}>
              <li>Utiliser le matériel conformément à sa destination et aux recommandations du Prestataire</li>
              <li>Ne pas procéder à des modifications techniques sans accord préalable du Prestataire</li>
              <li>Signaler tout dysfonctionnement dans les meilleurs délais</li>
              <li>Régler les sommes dues aux échéances convenues</li>
              <li>Permettre l'accès aux techniciens du Prestataire lors des interventions de maintenance</li>
            </ul>
          </Section>

          <Section title="8. Responsabilité">
            <p style={p}>
              La responsabilité du Prestataire ne peut être engagée en cas de dommages indirects (perte de chiffre d'affaires, perte de clientèle, etc.) résultant d'une défaillance du matériel ou du service.
            </p>
            <p style={p}>
              En tout état de cause, la responsabilité du Prestataire est limitée au montant HT de la commande concernée.
            </p>
          </Section>

          <Section title="9. Résiliation">
            <p style={p}>
              En cas de manquement grave de l'une ou l'autre des parties à ses obligations, le contrat pourra être résilié de plein droit après mise en demeure restée sans effet pendant <strong>15 jours</strong>. La résiliation à l'initiative du client n'ouvre droit à aucun remboursement de l'acompte versé.
            </p>
          </Section>

          <Section title="10. Confidentialité">
            <p style={p}>
              Les deux parties s'engagent à garder confidentielles les informations échangées dans le cadre de leur relation commerciale, pendant toute la durée du contrat et pour une période de <strong>2 ans</strong> après sa fin.
            </p>
          </Section>

          <Section title="11. Droit applicable et litiges">
            <p style={p}>
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord, les tribunaux du ressort du siège social du Prestataire seront seuls compétents.
            </p>
          </Section>

          <Section title="12. Contact">
            <p style={p}>
              Pour toute question relative aux présentes CGV :<br /><br />
              <strong>Alpha Monétique Interactif</strong><br />
              Tél. Guyane : 0594 30 46 67 — alphamonetique@gmail.com<br />
              Tél. Martinique : 05 96 67 81 57 — alphamonetique972@gmail.com
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
