# TASKS.md - Liste des Tâches Autonomes

> Claude Code : Suis cette liste dans l'ordre. Coche chaque tâche terminée. Mets à jour PROJECT_CONTEXT.md en parallèle.

---

## 🚀 PHASE 0 : Setup Projet ✅ TERMINÉ

### Infrastructure
- [x] Initialiser projet Astro
- [x] Installer Tailwind CSS
- [x] Installer sitemap
- [x] Installer compression (astro-compress)
- [x] Configurer `astro.config.mjs` selon CLAUDE.md
- [x] Créer config Tailwind (via global.css - Tailwind v4)
- [x] Créer structure des dossiers

### Fichiers de base
- [x] Créer `public/robots.txt`
- [x] Créer `public/favicon.ico` (placeholder)
- [x] Créer `src/styles/global.css`

### Composants Core
- [x] Créer `src/components/SEO.astro`
- [x] Créer `src/components/Header.astro`
- [x] Créer `src/components/Footer.astro`
- [x] Créer `src/components/Breadcrumb.astro`
- [x] Créer `src/components/FAQ.astro`

### Layouts
- [x] Créer `src/layouts/BaseLayout.astro`
- [x] Créer `src/layouts/ArticleLayout.astro`
- [x] Créer `src/layouts/ListLayout.astro`

### Test
- [x] Build validé sans erreurs

---

## 📄 PHASE 1 : Pages de Lancement ✅ TERMINÉ (18 pages)

### Pages Créées

#### 1. Accueil ✅
- [x] `src/pages/index.astro`
- [x] Contenu accueil avec schema WebSite
- [x] Maillage interne vers pages piliers

#### 2. Que faire ✅
- [x] `src/pages/que-faire/index.astro` (pilier)
- [x] `src/pages/que-faire/ce-week-end.astro` (~2000 mots)
- [x] Schema Article + FAQ

#### 3. Quartiers ✅
- [x] `src/pages/quartiers/index.astro` (pilier)
- [x] `src/pages/quartiers/velpeau.astro` (~2500 mots)
- [x] `src/pages/quartiers/a-eviter.astro` (~1800 mots)
- [x] `src/pages/quartiers/prebendes.astro` (~2000 mots) - NOUVEAU
- [x] `src/pages/quartiers/tours-centre.astro` (~2500 mots) - NOUVEAU
- [x] Schema Place + FAQ

#### 4. Bien-être ✅
- [x] `src/pages/bien-etre/index.astro` (pilier)
- [x] `src/pages/bien-etre/hypnotherapeute-tours.astro` (~2000 mots) - Données réelles
- [x] `src/pages/bien-etre/pilates-tours.astro` (~1500 mots) - Données réelles
- [x] `src/pages/bien-etre/chiropracteur-tours.astro` (~2000 mots) - NOUVEAU
- [x] Schema ItemList + FAQ

#### 5. Manger ✅
- [x] `src/pages/manger/index.astro` (pilier)
- [x] `src/pages/manger/restaurant-vegetarien-tours.astro` (~2500 mots) - Données réelles
- [x] Schema ItemList + FAQ

#### 6. Hébergement ✅ NOUVEAU
- [x] `src/pages/hebergement/index.astro` (pilier)
- [x] `src/pages/hebergement/love-room-tours.astro` (~2000 mots)
- [x] Schema ItemList + FAQ

#### 7. Pages statiques ✅
- [x] `src/pages/a-propos.astro`
- [x] `src/pages/contact.astro`

### Assets ✅
- [x] Image OG par défaut (`public/images/og-default.svg`)

---

## 🔧 PHASE 2 : Optimisations ✅ TERMINÉ

### Déploiement ✅
- [x] Déployer sur Vercel
- [x] Push GitHub

### SEO Technique ✅
- [x] Corriger tous les accents français (19 fichiers)
- [x] Meta descriptions avec accents
- [x] Schema markup avec accents
- [x] noindex activé temporairement (jusqu'à mise en ligne domaine)
- [ ] Configurer domaine personnalisé sur Vercel (EN ATTENTE)
- [ ] Configurer Google Search Console (EN ATTENTE domaine)
- [ ] Configurer Google Analytics 4 (EN ATTENTE domaine)
- [ ] Soumettre sitemap.xml (EN ATTENTE domaine)
- [ ] Tester toutes les pages sur PageSpeed Insights
- [ ] Valider tous les schemas sur Rich Results Test

### Performance ✅
- [x] Compression HTML/CSS/JS active (astro-compress)
- [x] Lazy loading images
- [ ] Convertir OG image en PNG
- [ ] Tester Core Web Vitals
- [ ] Ajouter vraies photos locales

### Design ✅
- [x] Améliorer l'esthétique globale (global.css refait)
- [x] Revoir typographie et espacements
- [x] Header moderne avec glassmorphism + logo SVG
- [x] Footer élégant avec wave SVG + animations
- [x] Hero section redesignée (stats, badges, CTA)
- [x] Animations subtiles (fade-in, pulse, hover effects)
- [x] Corriger alignement hero (responsive)

---

## 📝 PHASE 3 : Expansion Contenu (Mois 1-2)

### Quartiers (3 pages restantes)
- [ ] `/quartiers/grammont/`
- [ ] `/quartiers/tours-nord/`
- [ ] `/quartiers/deux-lions/`

### Bien-être (4 pages)
- [ ] `/bien-etre/spa-tours/`
- [ ] `/bien-etre/reflexologie-tours/`
- [ ] `/bien-etre/massage-tours/`
- [ ] `/bien-etre/institut-beaute-tours/`

### Manger (4 pages)
- [ ] `/manger/brunch-tours/`
- [ ] `/manger/restaurant-romantique-tours/`
- [ ] `/manger/terrasse-tours/`
- [ ] `/manger/restaurant-pas-cher-tours/`

### Autres piliers
- [ ] `/services/index.astro`
- [ ] `/pratique/index.astro`

---

## ✅ TÂCHES TERMINÉES

| Tâche | Date | Notes |
|-------|------|-------|
| Créer CLAUDE.md | Jan 2025 | Instructions complètes |
| Créer PROJECT_CONTEXT.md | Jan 2025 | Mémoire du projet |
| Créer TASKS.md | Jan 2025 | Ce fichier |
| **PHASE 0 complète** | 27 Jan 2025 | Setup Astro, Tailwind, composants, layouts |
| **PHASE 1 complète** | 27 Jan 2025 | 13 pages initiales |
| **Pages bonus** | 27 Jan 2025 | +5 pages (chiropracteur, hebergement, prebendes, tours-centre) |
| **Données réelles** | 27 Jan 2025 | Hypnothérapeutes, pilates, restaurants, chiropracteurs, love rooms |
| **Déploiement Vercel** | 27 Jan 2025 | Site en ligne |
| **Image OG** | 27 Jan 2025 | SVG créé |
| **Design refait** | 27 Jan 2025 | Header, Footer, Hero, global.css modernisés |
| **Accents corrigés** | 27 Jan 2025 | 19 fichiers, audit SEO passé |
| **noindex activé** | 27 Jan 2025 | Temporaire jusqu'à lancement domaine |
| **PHASE 2 complète** | 27 Jan 2025 | Design + SEO optimisés |

---

## 🚫 BLOQUÉ / EN ATTENTE DOMAINE

| Tâche | Raison du blocage | Action requise |
|-------|-------------------|----------------|
| Domaine vivre-a-tours.fr | Pas encore acheté/configuré | Acheter domaine + configurer DNS Vercel |
| Google Analytics 4 | Domaine pas encore configuré | Après configuration domaine |
| Search Console | Domaine pas encore configuré | Après configuration domaine |
| Passer en index | noindex activé temporairement | Changer `noindex = false` dans SEO.astro |
| Soumettre sitemap | Domaine pas encore configuré | Après configuration domaine |

---

## 📋 NOTES DE SESSION

### Session du 27 Janvier 2025 (Fin de journée)

**Design refait :**
- `global.css` : Design system moderne (couleurs, ombres, transitions, animations)
- `Header.astro` : Glassmorphism, logo SVG, scroll effect, liens animés
- `Footer.astro` : Wave SVG, gradient, cœur animé
- `index.astro` : Hero pleine hauteur, stats, cartes catégories, CTA

**SEO corrigé :**
- Tous les accents français corrigés (19 fichiers)
- "Vivre a Tours" → "Vivre à Tours" partout
- "Bien-etre" → "Bien-être", "Hebergement" → "Hébergement"
- Meta descriptions et schemas avec accents
- noindex=true activé (temporaire)

**Hero corrigé :**
- Alignement fixé avec max-width
- Tailles responsives (2.5rem → 3rem → 4rem)

---

### Session du 27 Janvier 2025 (Matin)

**Tâches réalisées :**
- Pages bonus créées : prebendes, tours-centre, chiropracteur-tours, hebergement (pilier + love-room)
- Données réelles ajoutées pour tous les établissements :
  - 5 hypnothérapeutes avec adresses, téléphones, sites
  - 5 studios de pilates avec tarifs et horaires
  - 5 chiropracteurs avec spécialités
  - 8 restaurants végétariens avec détails complets
  - 6 love rooms avec prix et équipements
- Image OG par défaut créée
- Push GitHub et déploiement Vercel

**Total : 18 pages**

---

## 🔗 COMMANDES UTILES

```bash
# Développement
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

---

> **Rappel :**
> 1. Toujours lire CLAUDE.md avant de créer du contenu
> 2. Mettre à jour ce fichier après chaque tâche
> 3. En cas de blocage, noter dans "BLOQUÉ" et passer à la suite
