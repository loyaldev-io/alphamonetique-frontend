/* ═══════════════════════════════════════════════════════════
   ALPHA MONÉTIQUE — Données Services
   Fichier : src/data/services.ts
   ═══════════════════════════════════════════════════════════ */

export interface Service {
    icon: string;
    title: string;
    desc: string;
    features: string[];
    color: string;
}

export const services: Service[] = [
    {
        icon: "💳",
        title: "Terminaux de Paiement",
        desc: "TPE dernière génération avec connexion 4G, WiFi et Bluetooth. Acceptez tous les moyens de paiement sans interruption.",
        features: ["Sans contact NFC", "Multi-devises", "4G intégrée", "Batterie longue durée"],
        color: "#2563eb",
    },
    {
        icon: "🖥️",
        title: "Systèmes de Caisse",
        desc: "Solutions d'encaissement tout-en-un adaptées à votre activité. Interface intuitive, gestion des stocks intégrée.",
        features: ["Écran tactile HD", "Gestion des stocks", "Multi-utilisateurs", "Rapports en temps réel"],
        color: "#7c3aed",
    },
    {
        icon: "🔧",
        title: "Installation & Maintenance",
        desc: "Déploiement sur site par nos techniciens certifiés. Maintenance préventive et corrective incluse.",
        features: ["Installation J+1", "Maintenance 24/7", "Techniciens certifiés", "Pièces garanties"],
        color: "#f97316",
    },
    {
        icon: "🛡️",
        title: "Support Technique",
        desc: "Assistance dédiée accessible 7j/7. Résolution rapide de vos incidents pour zéro interruption de service.",
        features: ["Support 7j/7", "Télémaintenance", "SLA garanti", "Interlocuteur dédié"],
        color: "#10b981",
    },
];