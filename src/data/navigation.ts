export type PageId = "home" | "solutions" | "pricing" | "about" | "contact";

export interface NavLink {
    id: PageId;
    label: string;
    path: string;
}

export const navLinks: NavLink[] = [
    { id: "home",      label: "Accueil",          path: "/" },
    { id: "solutions", label: "Solutions",         path: "/solutions" },
    { id: "pricing",   label: "Nos solutions TPE", path: "/nos-solutions-tpe" },
    { id: "about",     label: "À propos",          path: "/a-propos" },
    { id: "contact",   label: "Contact",           path: "/contact" },
];

export function getPath(id: PageId): string {
    return navLinks.find(l => l.id === id)?.path ?? "/"
}
