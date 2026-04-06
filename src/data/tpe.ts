export interface TPE {
    id: string;
    icon: string;
    name: string;
    tagline: string;
    description: string;
    connectivity: string[];
    features: string[];
    idealFor: string[];
    color: string;
    badge?: string;
}

export const tpeList: TPE[] = [
    {
        id: "mobile-4g",
        icon: "📱",
        name: "TPE Mobile 4G",
        tagline: "Encaissez partout, sans contrainte",
        description:
            "Terminal portable sans fil de dernière génération. Idéal pour les commerçants en mobilité, les livraisons ou les tables en terrasse. Autonomie jusqu'à 10h, recharge rapide.",
        connectivity: ["4G LTE", "WiFi", "Bluetooth"],
        features: [
            "Sans contact NFC & Apple Pay",
            "Autonomie 10h",
            "Imprimante de tickets intégrée",
            "Écran couleur tactile 3.5\"",
            "Recharge USB-C",
            "IP42 — résistant aux éclaboussures",
        ],
        idealFor: ["Restaurants & bars", "Livraisons à domicile", "Marchés & événements", "Artisans itinérants"],
        color: "#2563eb",
        badge: "Le plus demandé",
    },
    {
        id: "comptoir",
        icon: "🖥️",
        name: "TPE Comptoir",
        tagline: "La référence pour les points de vente fixes",
        description:
            "Terminal filaire haute performance, conçu pour les environnements à fort volume de transactions. Connexion Ethernet garantissant une disponibilité maximale.",
        connectivity: ["Ethernet", "WiFi", "4G de secours"],
        features: [
            "Connexion filaire ultra-stable",
            "4G en cas de coupure réseau",
            "Transactions rapides (< 3 sec)",
            "Écran client déporté optionnel",
            "Compatible toutes banques",
            "Certifié PCI DSS",
        ],
        idealFor: ["Commerces de détail", "Pharmacies", "Supérettes", "Boulangeries & épiceries"],
        color: "#0891b2",
    },
    {
        id: "android-smart",
        icon: "🤖",
        name: "TPE Android Smart",
        tagline: "Terminal intelligent tout-en-un",
        description:
            "Terminal nouvelle génération sous Android. Téléchargez vos applications métier (caisse, fidélité, gestion des stocks) directement sur l'appareil. L'avenir du paiement.",
        connectivity: ["4G LTE", "WiFi", "Bluetooth", "NFC"],
        features: [
            "OS Android — apps métier disponibles",
            "Grand écran tactile 5.5\" HD",
            "Caméra intégrée (scan QR / codes-barres)",
            "Espace client & programme fidélité",
            "Mises à jour automatiques",
            "Batterie longue durée 5 000 mAh",
        ],
        idealFor: ["Restaurants modernes", "Boutiques tendance", "Coiffeurs & instituts", "Hôtels & hébergements"],
        color: "#7c3aed",
        badge: "Nouveauté",
    },
    {
        id: "integre",
        icon: "🔌",
        name: "TPE Intégré",
        tagline: "Connecté directement à votre caisse",
        description:
            "Conçu pour s'intégrer parfaitement avec votre logiciel de caisse. Le montant est automatiquement transmis au terminal, sans ressaisie. Zéro erreur, rapidité maximale.",
        connectivity: ["Ethernet", "USB", "IP/LAN"],
        features: [
            "Intégration caisse automatique",
            "Aucune ressaisie du montant",
            "Compatible logiciels du marché",
            "Transactions en 2 secondes",
            "Pinpad cliente séparé",
            "Journaux de caisse consolidés",
        ],
        idealFor: ["Grandes surfaces", "Pharmacies avec logiciel", "Restaurants avec POS", "Multi-caisses"],
        color: "#059669",
    },
    {
        id: "compact",
        icon: "💼",
        name: "TPE Compact",
        tagline: "Petit, discret et redoutablement efficace",
        description:
            "Format ultra-compact pour les petits espaces. Se glisse dans une poche, se pose sur n'importe quel comptoir. Parfait pour les micro-commerces et les professions libérales.",
        connectivity: ["Bluetooth", "WiFi"],
        features: [
            "Format carte de crédit",
            "Connexion smartphone via Bluetooth",
            "Application de gestion incluse",
            "Sans imprimante (tickets par SMS/email)",
            "Démarrage en 5 secondes",
            "Tarif d'entrée de gamme",
        ],
        idealFor: ["Auto-entrepreneurs", "Professions libérales", "Pop-up stores", "Marchés & foires"],
        color: "#f59e0b",
    },
    {
        id: "multi-site",
        icon: "🏢",
        name: "Solution Multi-sites",
        tagline: "Gérez tous vos points de vente depuis un seul tableau de bord",
        description:
            "Conçu pour les enseignes avec plusieurs points de vente. Supervision centralisée, rapports consolidés et gestion des équipes depuis une interface unique.",
        connectivity: ["4G", "WiFi", "Ethernet", "VPN"],
        features: [
            "Dashboard centralisé multi-sites",
            "Gestion des droits par point de vente",
            "Rapports consolidés en temps réel",
            "Terminaux illimités",
            "API pour intégrations ERP/CRM",
            "Account manager dédié",
        ],
        idealFor: ["Franchises & enseignes", "Hôtels multi-établissements", "Groupes de restauration", "Grandes surfaces"],
        color: "#dc2626",
        badge: "Enterprise",
    },
];
