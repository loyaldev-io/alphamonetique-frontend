/** Calcule le prix annuel mensuel avec 20% de remise */
export function getYearlyPrice(monthlyPrice: number): number {
    return Math.round(monthlyPrice * 0.8);
}

/** Formate un prix en string (sans devise) */
export function formatPrice(price: number): string {
    return price.toString();
}

/** Génère les initiales d'un nom complet (max 2 caractères) */
export function getInitials(fullName: string): string {
    return fullName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

/** Fait défiler la page vers le haut en douceur */
export function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Tronque un texte à une longueur maximale */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + "…";
}
