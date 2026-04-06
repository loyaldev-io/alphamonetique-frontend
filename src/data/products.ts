// ── TPE Autonome (INGENICO) ──
import imgMove5000       from '../assets/images/T.P.E Autonome (INGENICO)/MOVE 5000.jpg'
import imgDesk5000       from '../assets/images/T.P.E Autonome (INGENICO)/desk5000.jpg'
import imgPinpadDesk1500 from '../assets/images/T.P.E Autonome (INGENICO)/Pinpad desk 1500.jpg'
import imgICT220         from '../assets/images/T.P.E Autonome (INGENICO)/iCT220.jpg'
import imgICT220G        from '../assets/images/T.P.E Autonome (INGENICO)/iCT220 G 3G.jpg'
import imgICT250         from '../assets/images/T.P.E Autonome (INGENICO)/iCT250.jpg'
import imgICT250G        from '../assets/images/T.P.E Autonome (INGENICO)/iCT250 G 3G.jpg'
import imgIPP315         from '../assets/images/T.P.E Autonome (INGENICO)/iPP315.jpg'
import imgIWL220         from '../assets/images/T.P.E Autonome (INGENICO)/iWL220.jpg'
import imgIWL250G        from '../assets/images/T.P.E Autonome (INGENICO)/iWL250 G 3G.jpg'
import imgIWL250W        from '../assets/images/T.P.E Autonome (INGENICO)/iWL250 W.jpg'
import imgLecteurVitale  from '../assets/images/T.P.E Autonome (INGENICO)/lecteurdecartevitalolaqin.jpg'

// ── TPE Centralisé (PAX) ──
import imgPaxA60  from '../assets/images/T.P.E Centralisé (PAX)/PAX A60 (LECTEUR HYBRIDE (CARTE ET PISTE)).jpg'
import imgPaxA77  from '../assets/images/T.P.E Centralisé (PAX)/PAX A77 (MINI POS ANDROID).jpg'
import imgPaxA80  from '../assets/images/T.P.E Centralisé (PAX)/PAX A80 (TERMINAL FIXE ANDROID).jpg'
import imgPaxQ25  from '../assets/images/T.P.E Centralisé (PAX)/PAX Q25 PINPAD.jpg'
import imgPaxS920 from '../assets/images/T.P.E Centralisé (PAX)/PAX S920 (MOBILE).jpg'

// ── Caisse Enregistreuse ──
import imgBiborne  from '../assets/images/Caisse Enregistreuse/La borne de commande (BIBORNE).jpg'
import imgPaxE500  from '../assets/images/Caisse Enregistreuse/PAX E500 (CAISSE ANDROID).jpg'
import imgPaxE600  from '../assets/images/Caisse Enregistreuse/PAX E600 (CAISSE ANDROID).jpg'
import imgPaxE700  from '../assets/images/Caisse Enregistreuse/PAX E700 (CAISSE ANDROID).jpg'
import imgPaxE800  from '../assets/images/Caisse Enregistreuse/PAX E800 (CAISSE ANDROID).jpg'
import imgSpinChef from '../assets/images/Caisse Enregistreuse/SPIN CHEF - Caisse Pi (PI ELECTRONIQUE).jpg'
import imgSpin8    from '../assets/images/Caisse Enregistreuse/SPIN8 - Caisse Pi (PI ELECTRONIQUE).jpg'
import imgSpin12   from '../assets/images/Caisse Enregistreuse/SPIN12 - Caisse Pi (PI ELECTRONIQUE).jpg'
import imgSpin15   from '../assets/images/Caisse Enregistreuse/SPIN15 - Caisse Pi (PI ELECTRONIQUE).jpg'
import imgSpinpad  from '../assets/images/Caisse Enregistreuse/SPINPAD - Mini (PI ELECTRONIQUE).jpg'

// ── Monnayeurs & Bornes ──
import imgCashdro3 from '../assets/images/Monnayeur/cashdro3.jpg'
import imgCashdro5 from '../assets/images/Monnayeur/cashdro5.jpg'
import imgCashdro6 from '../assets/images/Monnayeur/cashdro6.jpg'
import imgCashdro7 from '../assets/images/Monnayeur/cashdro7.jpg'
import imgTquiosk  from '../assets/images/Monnayeur/Borne de commande T-QUIOSK 1.jpg'
import imgPiKiosk  from '../assets/images/Monnayeur/PI Kiosk Mono, duo, ou mini.jpg'
import imgTq200    from '../assets/images/Monnayeur/TQ200 – Borne de commande.jpg'
import imgTq202    from '../assets/images/Monnayeur/TQ202 – Borne de commande.jpg'
import imgTq232    from '../assets/images/Monnayeur/TQ232 – Borne de commande.jpg'

// ── Logiciels de Caisse ──
import imgAirKitchen  from '../assets/images/Système Encaissement/AirKitchen (LOGICIEL DE CAISSE).jpg'
import imgClyoSystems from '../assets/images/Système Encaissement/Clyo Systems (LOGICIEL DE CAISSE).jpg'
import imgDigifood    from '../assets/images/Système Encaissement/Digifood (LOGICIEL DE CAISSE).jpg'
import imgRoverCash   from '../assets/images/Système Encaissement/RoverCash (LOGICIEL DE CAISSE).jpg'

export type CategoryId = 'tpe-autonome' | 'tpe-centralise' | 'caisse' | 'monnayeur' | 'logiciel'

export interface Category {
  id: CategoryId
  label: string
  icon: string
  color: string
  bg: string
  border: string
  count: number
}

export interface Product {
  id: string
  name: string
  subtitle: string
  category: CategoryId
  image: string
  badge?: string
}

export const categories: Category[] = [
  { id: 'tpe-autonome',   label: 'TPE Autonomes',          icon: '💳', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', count: 12 },
  { id: 'tpe-centralise', label: 'TPE Centralisés',         icon: '🖥️', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', count: 5  },
  { id: 'caisse',         label: 'Caisses Enregistreuses',  icon: '🧾', color: '#f97316', bg: '#fff7ed', border: '#fed7aa', count: 10 },
  { id: 'monnayeur',      label: 'Bornes & Monnayeurs',     icon: '🏧', color: '#10b981', bg: '#f0fdf4', border: '#bbf7d0', count: 9  },
  { id: 'logiciel',       label: 'Logiciels de Caisse',     icon: '💻', color: '#ec4899', bg: '#fdf2f8', border: '#fbcfe8', count: 4  },
]

export const products: Product[] = [
  // ── TPE Autonomes (INGENICO) ──
  { id: 'move5000',       name: 'MOVE 5000',         subtitle: 'TPE Mobile 4G · INGENICO',          category: 'tpe-autonome',   image: imgMove5000,       badge: 'Populaire' },
  { id: 'desk5000',       name: 'Desk 5000',          subtitle: 'TPE Comptoir · INGENICO',           category: 'tpe-autonome',   image: imgDesk5000 },
  { id: 'pinpad1500',     name: 'Pinpad Desk 1500',   subtitle: 'Pinpad Filaire · INGENICO',         category: 'tpe-autonome',   image: imgPinpadDesk1500 },
  { id: 'ict220',         name: 'iCT220',             subtitle: 'TPE Compact · INGENICO',            category: 'tpe-autonome',   image: imgICT220 },
  { id: 'ict220g',        name: 'iCT220 G 3G',        subtitle: 'TPE Compact 3G · INGENICO',         category: 'tpe-autonome',   image: imgICT220G },
  { id: 'ict250',         name: 'iCT250',             subtitle: 'TPE Écran couleur · INGENICO',      category: 'tpe-autonome',   image: imgICT250 },
  { id: 'ict250g',        name: 'iCT250 G 3G',        subtitle: 'TPE Écran couleur 3G · INGENICO',   category: 'tpe-autonome',   image: imgICT250G },
  { id: 'ipp315',         name: 'iPP315',             subtitle: 'Pinpad Sans Contact · INGENICO',    category: 'tpe-autonome',   image: imgIPP315 },
  { id: 'iwl220',         name: 'iWL220',             subtitle: 'TPE Sans Fil · INGENICO',           category: 'tpe-autonome',   image: imgIWL220 },
  { id: 'iwl250g',        name: 'iWL250 G 3G',        subtitle: 'TPE Mobile 3G · INGENICO',          category: 'tpe-autonome',   image: imgIWL250G },
  { id: 'iwl250w',        name: 'iWL250 W',           subtitle: 'TPE Wi-Fi · INGENICO',              category: 'tpe-autonome',   image: imgIWL250W },
  { id: 'lecteurvitale',  name: 'Lecteur Carte Vitale', subtitle: 'Tiers-Payant · LAQIN',            category: 'tpe-autonome',   image: imgLecteurVitale },

  // ── TPE Centralisés (PAX) ──
  { id: 'paxa60',  name: 'PAX A60',      subtitle: 'Lecteur Hybride · PAX',      category: 'tpe-centralise', image: imgPaxA60 },
  { id: 'paxa77',  name: 'PAX A77',      subtitle: 'Mini POS Android · PAX',     category: 'tpe-centralise', image: imgPaxA77,  badge: 'Android' },
  { id: 'paxa80',  name: 'PAX A80',      subtitle: 'Terminal Fixe Android · PAX', category: 'tpe-centralise', image: imgPaxA80 },
  { id: 'paxq25',  name: 'PAX Q25',      subtitle: 'Pinpad · PAX',               category: 'tpe-centralise', image: imgPaxQ25 },
  { id: 'paxs920', name: 'PAX S920',     subtitle: 'Mobile Android · PAX',       category: 'tpe-centralise', image: imgPaxS920, badge: 'Mobile' },

  // ── Caisses Enregistreuses ──
  { id: 'biborne',   name: 'BIBORNE',       subtitle: 'Borne de Commande',              category: 'caisse', image: imgBiborne },
  { id: 'paxe500',   name: 'PAX E500',      subtitle: 'Caisse Android · PAX',           category: 'caisse', image: imgPaxE500 },
  { id: 'paxe600',   name: 'PAX E600',      subtitle: 'Caisse Android · PAX',           category: 'caisse', image: imgPaxE600 },
  { id: 'paxe700',   name: 'PAX E700',      subtitle: 'Caisse Android · PAX',           category: 'caisse', image: imgPaxE700, badge: 'Populaire' },
  { id: 'paxe800',   name: 'PAX E800',      subtitle: 'Caisse Android · PAX',           category: 'caisse', image: imgPaxE800 },
  { id: 'spinchef',  name: 'SPIN CHEF',     subtitle: 'Caisse Pi · PI ELECTRONIQUE',    category: 'caisse', image: imgSpinChef },
  { id: 'spin8',     name: 'SPIN 8',        subtitle: 'Caisse Pi · PI ELECTRONIQUE',    category: 'caisse', image: imgSpin8 },
  { id: 'spin12',    name: 'SPIN 12',       subtitle: 'Caisse Pi · PI ELECTRONIQUE',    category: 'caisse', image: imgSpin12 },
  { id: 'spin15',    name: 'SPIN 15',       subtitle: 'Caisse Pi · PI ELECTRONIQUE',    category: 'caisse', image: imgSpin15, badge: 'Pro' },
  { id: 'spinpad',   name: 'SPINPAD Mini',  subtitle: 'Mini Caisse · PI ELECTRONIQUE',  category: 'caisse', image: imgSpinpad },

  // ── Bornes & Monnayeurs ──
  { id: 'cashdro3', name: 'CashDro 3',      subtitle: 'Monnayeur Automatique',           category: 'monnayeur', image: imgCashdro3 },
  { id: 'cashdro5', name: 'CashDro 5',      subtitle: 'Monnayeur Automatique',           category: 'monnayeur', image: imgCashdro5 },
  { id: 'cashdro6', name: 'CashDro 6',      subtitle: 'Monnayeur Automatique',           category: 'monnayeur', image: imgCashdro6, badge: 'Nouveau' },
  { id: 'cashdro7', name: 'CashDro 7',      subtitle: 'Monnayeur Automatique',           category: 'monnayeur', image: imgCashdro7 },
  { id: 'tquiosk',  name: 'T-QUIOSK 1',     subtitle: 'Borne de Commande',               category: 'monnayeur', image: imgTquiosk },
  { id: 'pikiosk',  name: 'PI Kiosk',        subtitle: 'Borne Mono / Duo / Mini',         category: 'monnayeur', image: imgPiKiosk, badge: 'Modulable' },
  { id: 'tq200',    name: 'TQ200',           subtitle: 'Borne de Commande',               category: 'monnayeur', image: imgTq200 },
  { id: 'tq202',    name: 'TQ202',           subtitle: 'Borne de Commande',               category: 'monnayeur', image: imgTq202 },
  { id: 'tq232',    name: 'TQ232',           subtitle: 'Borne de Commande Tactile',       category: 'monnayeur', image: imgTq232 },

  // ── Logiciels de Caisse ──
  { id: 'airkitchen',  name: 'AirKitchen',    subtitle: 'Logiciel de Caisse Restaurant',  category: 'logiciel', image: imgAirKitchen,  badge: 'Restaurant' },
  { id: 'clyo',        name: 'Clyo Systems',  subtitle: 'Logiciel de Caisse Multi-secteur', category: 'logiciel', image: imgClyoSystems },
  { id: 'digifood',    name: 'Digifood',      subtitle: 'Logiciel de Caisse Food',         category: 'logiciel', image: imgDigifood },
  { id: 'rovercash',   name: 'RoverCash',     subtitle: 'Logiciel de Caisse Commerce',     category: 'logiciel', image: imgRoverCash },
]
