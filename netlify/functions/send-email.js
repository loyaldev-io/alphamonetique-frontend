const nodemailer = require('nodemailer')

const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
}

// ── Emails des agences (production) ──
// const EMAILS = {
//   guyane:     'alphamonetique@gmail.com',
//   martinique: 'alphamonetique972@gmail.com',
// }

// ── Email de test ──
const TEST_EMAIL = 'support@chrixcode.com'

exports.handler = async (event) => {
  // Preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: HEADERS, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: HEADERS, body: JSON.stringify({ error: 'Méthode non autorisée.' }) }
  }

  try {
    const data = JSON.parse(event.body)
    const { type } = data // 'contact' | 'devis'

    // ── Validation basique ──
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: 'Champs obligatoires manquants.' }) }
    }

    // ── Transporteur Gmail ──
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // ── Destinataire(s) ── (TEST : tout redirigé vers support@chrixcode.com)
    const recipients = [TEST_EMAIL]

    // ── Sujet ──
    const subject = type === 'devis'
      ? `📋 Demande de devis — ${data.firstName} ${data.lastName} (${data.company ?? ''})`
      : `✉️ Nouveau contact — ${data.firstName} ${data.lastName}${data.agencyCity ? ` → Agence ${data.agencyCity}` : ''}`

    // ── Envoi ──
    await transporter.sendMail({
      from: `"Site Alpha Monétique" <${process.env.GMAIL_USER}>`,
      to: recipients.join(', '),
      replyTo: data.email,
      subject,
      html: buildHtml(type, data),
    })

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ success: true }),
    }

  } catch (err) {
    console.error('send-email error:', err)
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: "Erreur lors de l'envoi. Veuillez réessayer." }),
    }
  }
}

// ── Template HTML ──
function buildHtml(type, d) {
  const isDevis = type === 'devis'
  const accentColor = isDevis ? '#f97316' : '#2563eb'
  const title = isDevis ? 'Nouvelle demande de devis' : 'Nouveau message de contact'
  const icon = isDevis ? '📋' : '✉️'

  const agencyBadge = d.agencyCity
    ? `<tr><td colspan="2" style="padding:12px 0 4px"><div style="display:inline-block;padding:6px 14px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:100px;font-size:13px;color:#2563eb;font-weight:700">${d.agencyCity ? (d.agencyCity.includes('Martinique') ? '🇲🇶' : '🇬🇫') : ''} Agence ${d.agencyCity} — ${d.agencyEmail}</div></td></tr>`
    : ''

  const devisRows = isDevis ? `
    ${row('Entreprise',   d.company     ?? '—')}
    ${row('Secteur',      d.sector      ?? '—')}
    ${row('Modèle TPE',   d.model       ?? 'Non précisé')}
    ${row('Nb terminaux', d.nbTerminals ?? 'À définir')}
  ` : `
    ${row('Entreprise',  d.company ?? '—')}
    ${row('Secteur',     d.sector  ?? '—')}
  `

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.1)">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,${accentColor},${isDevis ? '#ec4899' : '#7c3aed'});padding:32px;text-align:center">
            <div style="font-size:40px;margin-bottom:12px">${icon}</div>
            <h1 style="color:#ffffff;font-size:22px;font-weight:800;margin:0;letter-spacing:-0.5px">${title}</h1>
            <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0">Reçu via alphamonetique.fr</p>
          </td>
        </tr>

        <!-- Corps -->
        <tr>
          <td style="padding:32px">

            <!-- Agence -->
            ${agencyBadge}

            <!-- Coordonnées -->
            <h2 style="font-size:14px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 12px;padding-top:16px">Coordonnées</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
              ${row('Prénom', d.firstName)}
              ${row('Nom',    d.lastName)}
              ${row('Email',  `<a href="mailto:${d.email}" style="color:${accentColor}">${d.email}</a>`)}
              ${row('Tél.',   `<a href="tel:${d.phone}" style="color:${accentColor}">${d.phone}</a>`)}
            </table>

            <!-- Projet -->
            <h2 style="font-size:14px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em;margin:24px 0 12px">Projet</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
              ${devisRows}
            </table>

            <!-- Message -->
            ${d.message ? `
            <h2 style="font-size:14px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em;margin:24px 0 12px">Message</h2>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px 20px;font-size:15px;color:#475569;line-height:1.7">${d.message.replace(/\n/g, '<br>')}</div>
            ` : ''}

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px;text-align:center">
            <p style="font-size:12px;color:#94a3b8;margin:0">
              Ce message a été envoyé depuis le formulaire du site <strong>alphamonetique.fr</strong>.<br>
              Répondez directement à cet email pour contacter <strong>${d.firstName} ${d.lastName}</strong>.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function row(label, value) {
  return `<tr style="border-bottom:1px solid #f1f5f9">
    <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#64748b;width:160px;background:#fafafa">${label}</td>
    <td style="padding:10px 16px;font-size:14px;color:#0f172a">${value || '—'}</td>
  </tr>`
}
