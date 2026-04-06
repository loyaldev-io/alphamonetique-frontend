/* ═══════════════════════════════════════════════════════════
   ALPHA MONÉTIQUE — Données Plans Tarifaires
   Fichier : src/data/plans.ts
   ═══════════════════════════════════════════════════════════ */

export interface Plan {
    name: string;
    price: number;
    period: string;
    desc: string;
    features: string[];
    cta: string;
    popular: boolean;
}

export const plans: Plan[] = [
    {
        name: "Starter",
        price: 49,
        period: "/mois",
        desc: "Idéal pour les auto-entrepreneurs et petits commerces",
        features: [
            "1 Terminal de paiement",
            "Support par email",
            "Tableau de bord basique",
            "Rapports mensuels",
            "Installation standard",
        ],
        cta: "Démarrer",
        popular: false,
    },
    {
        name: "Business",
        price: 99,
        period: "/mois",
        desc: "Pour les commerces en croissance et restaurants",
        features: [
            "Jusqu'à 3 Terminaux",
            "Système de caisse inclus",
            "Support prioritaire 7j/7",
            "Analytics avancés",
            "Maintenance préventive",
            "Formation équipe",
        ],
        cta: "Choisir Business",
        popular: true,
    },
    {
        name: "Enterprise",
        price: 199,
        period: "/mois",
        desc: "Solution complète pour les grandes enseignes",
        features: [
            "Terminaux illimités",
            "Multi-sites",
            "Account manager dédié",
            "API & intégrations",
            "SLA 99.9%",
            "Audit sécurité trimestriel",
            "Formation continue",
        ],
        cta: "Contacter les ventes",
        popular: false,
    },
];