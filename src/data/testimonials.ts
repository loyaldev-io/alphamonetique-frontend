export interface Testimonial {
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    text: string;
    location: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Marie-Claire Rosette",
        role: "Gérante",
        company: "Boulangerie Rosette",
        avatar: "MR",
        rating: 5,
        text: "Depuis que nous avons installé les terminaux Alpha Monétique, nos encaissements ont augmenté de 30%. Les clients paient plus facilement et le support est toujours disponible quand on en a besoin.",
        location: "Cayenne, Guyane",
    },
    {
        name: "Jean-Philippe Mathurin",
        role: "Directeur",
        company: "Hôtel Les Palmiers",
        avatar: "JM",
        rating: 5,
        text: "Nous avons équipé nos 4 points de vente avec la solution Business. L'intégration a été rapide et le tableau de bord nous donne une visibilité en temps réel. Un investissement rentabilisé en 3 mois.",
        location: "Fort-de-France, Martinique",
    },
    {
        name: "Sandra Beaumont",
        role: "Propriétaire",
        company: "Institut Beauté Caraïbe",
        avatar: "SB",
        rating: 5,
        text: "Avant Alpha Monétique, on perdait des clients car on n'acceptait que le cash. Maintenant c'est simple, moderne, et le système gère aussi nos stocks. L'équipe a été formidable lors de l'installation.",
        location: "Kourou, Guyane",
    },
];
