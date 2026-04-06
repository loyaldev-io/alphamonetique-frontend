export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    location: string;
}

export const team: TeamMember[] = [
    {
        name: "Alexis Montfort",
        role: "Fondateur & Directeur Général",
        bio: "Pionnier de la monétique en Guyane depuis 2014. Alexis a fondé Alpha Monétique avec la vision d'apporter des solutions de paiement professionnelles aux commerçants des Antilles-Guyane.",
        avatar: "AM",
        location: "Cayenne, Guyane",
    },
    {
        name: "Lucie Désir",
        role: "Directrice Commerciale",
        bio: "Experte en solutions B2B avec 8 ans d'expérience dans le secteur financier. Lucie accompagne les commerçants dans le choix de leur solution et suit leur satisfaction au quotidien.",
        avatar: "LD",
        location: "Fort-de-France, Martinique",
    },
    {
        name: "Kévin Sainte-Rose",
        role: "Responsable Technique",
        bio: "Technicien certifié par les principaux fabricants de TPE. Kévin supervise toutes les installations et garantit la qualité du service de maintenance sur l'ensemble du territoire.",
        avatar: "KS",
        location: "Cayenne, Guyane",
    },
    {
        name: "Priya Naidoo",
        role: "Chargée de Support Client",
        bio: "Première interlocutrice de nos clients, Priya assure le support technique 7j/7 avec une réactivité et une bienveillance qui font la réputation d'Alpha Monétique.",
        avatar: "PN",
        location: "Fort-de-France, Martinique",
    },
];
