# Alpha Monétique Interactif — Frontend

> Site web SaaS moderne pour une entreprise de solutions de paiement et monétique basée en **Guyane Française** et en **Martinique**.

---

## Présentation du projet

### L'entreprise

**Alpha Monétique Interactif** est une société spécialisée dans les solutions de paiement électronique pour les professionnels des Antilles-Guyane. Elle propose :

- **Terminaux de paiement (TPE)** — Vente et location de machines pour encaisser par carte bancaire (sans contact NFC, 4G, WiFi, Bluetooth)
- **Systèmes de caisse** — Caisses enregistreuses avec écran tactile, gestion des stocks et rapports de vente
- **Installation** — Déploiement du matériel sur site par des techniciens certifiés sous 24h
- **Maintenance** — Entretien préventif et correctif, remplacement de matériel en cas de panne
- **Support technique** — Assistance 7j/7, télémaintenance, SLA garanti

### Les clients cibles

- Restaurants et bars
- Commerces de détail et boutiques
- Hôtels et hébergements
- Salons de coiffure et instituts de beauté
- Pharmacies et cabinets médicaux
- Artisans et entreprises du BTP

### L'objectif du site

Ce n'est **pas un simple site vitrine**. L'objectif est de positionner Alpha Monétique comme une **plateforme SaaS tech premium** avec :

- Une logique d'abonnement mensuel (Starter / Business / Enterprise)
- Un espace client avec tableau de bord (placeholder UI)
- Un parcours de souscription en ligne
- Une capture de leads optimisée (formulaires, CTAs)

---

## Stack technique

| Technologie | Rôle |
|---|---|
| **React 18** | Bibliothèque UI |
| **TypeScript** | Typage statique |
| **Vite** | Bundler et serveur de développement |
| **CSS pur** | Styles avec variables CSS (pas de framework CSS) |
| **Google Fonts** | Plus Jakarta Sans + JetBrains Mono |

### Pourquoi ces choix ?

- **Vite** plutôt que CRA : démarrage instantané, builds rapides, configuration minimale
- **TypeScript** : fiabilité du code, autocomplétion, maintenance facilitée
- **CSS pur avec variables** : contrôle total du design system, pas de dépendance à Tailwind ou autre framework, performance optimale
- **Plus Jakarta Sans** : typographie moderne et premium, parfaite pour un positionnement SaaS

---

## Architecture du projet

```
alphamonetique-frontend/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/          # Images du site (logos, photos, illustrations)
│   │   └── icons/           # Icônes SVG personnalisées
│   │
│   ├── components/
│   │   ├── ui/              # Composants réutilisables (boutons, badges, modales)
│   │   │   └── Reveal.tsx   # Wrapper d'animation au scroll
│   │   │
│   │   ├── layout/          # Structure de page (navbar, footer)
│   │   │   ├── Navbar.tsx   # Barre de navigation responsive
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.tsx   # Pied de page avec colonnes de liens
│   │   │   └── Footer.css
│   │   │
│   │   └── sections/        # Blocs de contenu réutilisables
│   │       ├── Hero.tsx              # Section d'accroche principale
│   │       ├── StatsBar.tsx          # Barre de statistiques clés
│   │       ├── ServicesGrid.tsx      # Grille des 4 services
│   │       ├── Advantages.tsx        # 6 avantages en grille
│   │       ├── Testimonials.tsx      # Témoignages clients
│   │       ├── CtaBanner.tsx         # Bannière d'appel à l'action
│   │       ├── PricingGrid.tsx       # Grille des 3 plans tarifaires
│   │       ├── DashboardPreview.tsx  # Aperçu du tableau de bord client
│   │       ├── ContactForm.tsx       # Formulaire de contact / devis
│   │       ├── TeamGrid.tsx          # Grille de l'équipe
│   │       ├── AboutContent.tsx      # Contenu de la page À propos
│   │       ├── SectorsGrid.tsx       # Secteurs d'activité ciblés
│   │       └── SubscriptionModal.tsx # Modale de souscription à un plan
│   │
│   ├── pages/               # Pages complètes du site
│   │   ├── HomePage.tsx     # Accueil (hero + services + avantages + témoignages + CTA)
│   │   ├── SolutionsPage.tsx # Détail des solutions + secteurs d'activité
│   │   ├── PricingPage.tsx  # Tarifs + toggle mensuel/annuel + dashboard preview
│   │   ├── AboutPage.tsx    # Présentation entreprise + équipe
│   │   └── ContactPage.tsx  # Formulaire de contact + coordonnées
│   │
│   ├── styles/              # Feuilles de style globales
│   │   ├── variables.css    # Design system (couleurs, typos, espacements)
│   │   ├── global.css       # Reset, base, boutons, formulaires, utilitaires
│   │   ├── animations.css   # Keyframes et classes d'animation
│   │   └── responsive.css   # Media queries mobile-first
│   │
│   ├── hooks/               # Hooks React personnalisés
│   │   ├── useScrollReveal.ts   # IntersectionObserver pour animations au scroll
│   │   └── useScrollPosition.ts # Détection du scroll (navbar)
│   │
│   ├── utils/               # Fonctions utilitaires
│   │   └── helpers.ts       # Calculs de prix, initiales, scroll
│   │
│   ├── data/                # Données statiques typées
│   │   ├── services.ts      # Liste des 4 services
│   │   ├── plans.ts         # 3 plans tarifaires (Starter, Business, Enterprise)
│   │   ├── testimonials.ts  # Témoignages clients
│   │   ├── navigation.ts    # Liens de navigation
│   │   ├── stats.ts         # Chiffres clés (500+ clients, 99.9% uptime, etc.)
│   │   └── team.ts          # Membres de l'équipe
│   │
│   ├── App.tsx              # Composant racine (routeur de pages + layout)
│   └── main.tsx             # Point d'entrée React
│
├── index.html               # Template HTML
├── vite.config.ts           # Configuration Vite
├── tsconfig.json            # Configuration TypeScript
├── package.json             # Dépendances et scripts
└── README.md                # Ce fichier
```

### Philosophie de l'architecture

- **Séparation des responsabilités** : les données sont dans `data/`, la logique dans `hooks/` et `utils/`, le visuel dans `components/` et `styles/`
- **Composants modulaires** : chaque section est un composant autonome réutilisable
- **Scalabilité** : ajouter une page ou une section = créer un fichier, l'importer, c'est tout
- **Pas de sur-ingénierie** : pas de state manager global (pas besoin ici), pas de routing library (navigation par état simple), pas de framework CSS lourd

---

## Direction artistique

### Concept visuel

Le site adopte une esthétique **SaaS dark premium** inspirée des startups tech modernes (Stripe, Linear, Vercel) tout en restant accessible pour une clientèle locale de commerçants.

### Palette de couleurs

| Couleur | Code | Usage |
|---|---|---|
| Noir profond | `#07090f` | Fond principal |
| Noir secondaire | `#0c1018` | Sections alternées |
| Bleu électrique | `#2563eb` | Couleur d'action principale |
| Bleu clair | `#3b82f6` | Liens actifs, accents |
| Cyan | `#06b6d4` | Accent secondaire dans les gradients |
| Blanc cassé | `#f1f5f9` | Texte principal |
| Gris moyen | `#94a3b8` | Texte secondaire |
| Gris sombre | `#64748b` | Texte discret |
| Vert | `#10b981` | Succès, indicateurs positifs |
| Ambre | `#f59e0b` | Étoiles, avertissements |

### Typographies

- **Plus Jakarta Sans** — Police principale : moderne, géométrique, lisible. Poids utilisés : 300 à 800
- **JetBrains Mono** — Police secondaire : pour les éléments techniques (code, métriques)

### Effets visuels

- **Texture de bruit** (noise overlay) en fond pour ajouter de la profondeur
- **Orbes lumineux** (glow orbs) positionnés en arrière-plan avec blur
- **Grille perspective** dans le hero pour un effet tech
- **Scroll reveal** : les éléments apparaissent progressivement au scroll
- **Hover effects** : élévation et lueur bleue sur les cartes
- **Gradient animé** sur les titres principaux

---

## Pages du site

### 1. Accueil (`HomePage.tsx`)

La page la plus importante, pensée pour la conversion B2B :

- **Hero** — Message d'accroche fort avec 2 CTAs (Devis + Découvrir)
- **Barre de stats** — 4 chiffres clés pour la crédibilité (500+ clients, 99.9% uptime, etc.)
- **Grille de services** — Les 4 offres principales en cartes interactives
- **Avantages** — 6 points différenciants en grille
- **Témoignages** — 3 avis clients avec étoiles
- **Bannière CTA** — Appel à l'action final avec gradient bleu

### 2. Solutions (`SolutionsPage.tsx`)

- Header de page avec description
- Grille détaillée des 4 services
- Grille des 6 secteurs d'activité ciblés (restaurants, commerces, hôtels, etc.)

### 3. Tarifs (`PricingPage.tsx`)

- Toggle mensuel / annuel (-20% sur l'annuel)
- 3 cartes de plans avec badge "Populaire" sur Business
- Bouton de souscription qui ouvre une modale
- Aperçu du tableau de bord client (dashboard placeholder)

### 4. À propos (`AboutPage.tsx`)

- Texte de présentation de l'entreprise et de sa mission
- Bloc de statistiques visuelles
- Grille de l'équipe avec photos placeholder

### 5. Contact (`ContactPage.tsx`)

- Coordonnées des 2 agences (Guyane + Martinique)
- Téléphone, email, horaires
- Formulaire de demande de devis complet (prénom, nom, email, téléphone, entreprise, secteur, message)
- Confirmation d'envoi avec animation de succès

---

## Fonctionnalités SaaS

### Souscription en ligne (UI)

Chaque plan tarifaire possède un bouton qui ouvre une **modale de souscription** avec :
1. Récapitulatif du plan choisi (nom + prix)
2. Formulaire : nom d'entreprise, email, téléphone
3. Écran de confirmation avec message de succès

> Note : c'est uniquement l'interface. Le traitement backend (paiement, base de données) n'est pas inclus et devra être connecté ultérieurement.

### Dashboard client (placeholder)

Un aperçu visuel du tableau de bord que les clients auraient après souscription :
- 4 métriques : CA du mois, transactions, panier moyen, uptime
- Graphique en barres du chiffre d'affaires sur 12 mois
- Badge "Live" pour l'effet temps réel

### Capture de leads

- Formulaire de contact complet avec sélection du secteur d'activité
- CTAs présents à plusieurs endroits stratégiques
- Modale de souscription sur la page tarifs

---

## Installation et lancement

### Prérequis

- **Node.js** version 18 ou supérieure
- **npm** ou **yarn**
- **Git Bash** (Windows) ou un terminal Unix

### Étape 1 — Créer la structure du projet

```bash
bash setup-alphamonetique.sh
```

Ce script crée le projet Vite, l'arborescence complète et tous les fichiers.

### Étape 2 — Injecter le code

Copier le contenu de chaque fichier fourni dans le fichier correspondant du projet.

### Étape 3 — Lancer le serveur de développement

```bash
cd alphamonetique-frontend
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Étape 4 — Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

---

## Scripts disponibles

| Commande | Action |
|---|---|
| `npm run dev` | Lance le serveur de développement (port 5173) |
| `npm run build` | Génère le build de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production localement |

---

## Évolutions possibles

Ce projet pose les bases. Voici les prochaines étapes envisageables :

### Court terme
- Ajouter **React Router** pour une navigation par URL (`/solutions`, `/tarifs`, etc.)
- Connecter le formulaire de contact à un **backend** (API, Netlify Forms, EmailJS)
- Ajouter des **images réelles** (photos de TPE, de l'équipe, des locaux)
- Intégrer **Google Maps** sur la page contact

### Moyen terme
- Connecter la souscription à **Stripe** pour le paiement en ligne
- Créer un vrai **espace client** avec authentification
- Ajouter un **blog** pour le SEO
- Mettre en place **Google Analytics** et le suivi des conversions

### Long terme
- Dashboard client fonctionnel avec données en temps réel
- Application mobile compagnon
- Système de ticketing pour le support
- API publique pour les intégrations partenaires

---

## Structure des fichiers créés (récapitulatif)

```
Total : 42 fichiers

Styles :          4 fichiers  (variables, global, animations, responsive)
Données :         6 fichiers  (services, plans, testimonials, navigation, stats, team)
Hooks :           2 fichiers  (useScrollReveal, useScrollPosition)
Utilitaires :     1 fichier   (helpers)
Composants UI :   1 fichier   (Reveal)
Layout :          4 fichiers  (Navbar + CSS, Footer + CSS)
Sections :       13 fichiers  (Hero, StatsBar, ServicesGrid, etc.)
Pages :           5 fichiers  (Home, Solutions, Pricing, About, Contact)
Racine :          4 fichiers  (App.tsx, main.tsx, index.html, vite.config.ts)
Config :          2 fichiers  (tsconfig.json, package.json)
```

---

## Auteur

Projet développé pour **Alpha Monétique Interactif** — solutions de paiement et monétique en Guyane Française et Martinique.

---

## Licence

Projet propriétaire — Tous droits réservés © 2026 Loyaldev.