export interface Stat {
    value: string;
    label: string;
    icon: string;
    description: string;
}

export const stats: Stat[] = [
    {
        value: "500+",
        label: "Clients actifs",
        icon: "🏪",
        description: "Professionnels en Guyane & Martinique",
    },
    {
        value: "99.9%",
        label: "Disponibilité",
        icon: "⚡",
        description: "SLA garanti contractuellement",
    },
    {
        value: "24h",
        label: "Délai d'intervention",
        icon: "🔧",
        description: "Installation et remplacement matériel",
    },
    {
        value: "10 ans",
        label: "D'expérience",
        icon: "🏆",
        description: "Pionnier de la monétique aux Antilles-Guyane",
    },
];
