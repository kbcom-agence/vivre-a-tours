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

## 📄 PHASE 1 : Pages de Lancement ✅ TERMINÉ (13 pages)

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
- [x] Schema Place + FAQ

#### 4. Bien-être ✅
- [x] `src/pages/bien-etre/index.astro` (pilier)
- [x] `src/pages/bien-etre/hypnotherapeute-tours.astro` (~2000 mots)
- [x] `src/pages/bien-etre/pilates-tours.astro` (~1500 mots)
- [x] Schema ItemList + FAQ

#### 5. Manger ✅
- [x] `src/pages/manger/index.astro` (pilier)
- [x] `src/pages/manger/restaurant-vegetarien-tours.astro` (~1800 mots)
- [x] Schema ItemList + FAQ

#### 6. Pages statiques ✅
- [x] `src/pages/a-propos.astro`
- [x] `src/pages/contact.astro`

### Pages Bonus Phase 1 (à faire plus tard)
- [ ] `/quartiers/prebendes/`
- [ ] `/quartiers/tours-centre/`
- [ ] `/bien-etre/chiropracteur-tours/`
- [ ] `/hebergement/love-room-tours/`

---

## 🔧 PHASE 2 : Optimisations (Après lancement)

### SEO Technique
- [ ] Générer et soumettre sitemap.xml
- [ ] Configurer Google Search Console
- [ ] Configurer Google Analytics 4
- [ ] Tester toutes les pages sur PageSpeed Insights
- [ ] Valider tous les schemas sur Rich Results Test
- [ ] Vérifier toutes les meta descriptions (150-160 car)
- [ ] Vérifier tous les titles (50-60 car)

### Performance
- [ ] Optimiser toutes les images (WebP, compression)
- [ ] Vérifier lazy loading
- [ ] Minifier CSS/JS
- [ ] Tester Core Web Vitals

### Contenu
- [ ] Relire tous les contenus pour authenticité
- [ ] Ajouter photos locales réelles
- [ ] Vérifier tous les liens internes
- [ ] Ajouter liens externes pertinents

---

## 📝 PHASE 3 : Expansion Contenu (Mois 1-2)

### Quartiers (5 pages)
- [ ] `/quartiers/grammont/`
- [ ] `/quartiers/tours-nord/`
- [ ] `/quartiers/deux-lions/`
- [ ] `/quartiers/sanitas/`
- [ ] `/quartiers/cathedrale/`

### Bien-être (5 pages)
- [ ] `/bien-etre/spa-tours/`
- [ ] `/bien-etre/reflexologie-tours/`
- [ ] `/bien-etre/chiropracteur-tours/`
- [ ] `/bien-etre/massage-tours/`
- [ ] `/bien-etre/institut-beaute-tours/`

### Manger (4 pages)
- [ ] `/manger/brunch-tours/`
- [ ] `/manger/restaurant-romantique-tours/`
- [ ] `/manger/terrasse-tours/`
- [ ] `/manger/restaurant-pas-cher-tours/`

### Autres
- [ ] `/services/index.astro` (pilier)
- [ ] `/hebergement/index.astro` (pilier)
- [ ] `/pratique/index.astro` (pilier)

---

## ✅ TÂCHES TERMINÉES

| Tâche | Date | Notes |
|-------|------|-------|
| Créer CLAUDE.md | Jan 2025 | Instructions complètes |
| Créer PROJECT_CONTEXT.md | Jan 2025 | Mémoire du projet |
| Créer TASKS.md | Jan 2025 | Ce fichier |
| **PHASE 0 complète** | 27 Jan 2025 | Setup Astro, Tailwind, composants, layouts |
| **PHASE 1 complète** | 27 Jan 2025 | 13 pages créées et buildées |

---

## 🚫 BLOQUÉ / EN ATTENTE

| Tâche | Raison du blocage | Action requise |
|-------|-------------------|----------------|
| Configurer domaine | Domaine pas encore acheté | Acheter vivre-a-tours.fr |
| Analytics | Pas de compte Google configuré | Créer compte GA4 |
| Recherche praticiens | Besoin données réelles | Rechercher hypnothérapeutes, studios pilates, restaurants |

---

## 📋 NOTES DE SESSION

### Session du 27 Janvier 2025

**Tâches réalisées :**
- PHASE 0 complète : Setup Astro + Tailwind v4 + sitemap + astro-compress
- PHASE 1 complète : 13 pages créées
  - Accueil avec hero, catégories, intro
  - Que faire : pilier + ce-week-end (~2000 mots)
  - Quartiers : pilier + Velpeau (~2500 mots) + À éviter (~1800 mots)
  - Bien-être : pilier + hypnothérapeute + pilates
  - Manger : pilier + restaurants végétariens
  - À propos et Contact
- Tous les schemas SEO implémentés (WebSite, FAQ, Place, ItemList, Article)
- Build validé : 13 pages, compression active

**Problèmes rencontrés :**
- Tailwind v4 configuration différente (résolu)
- Astro sous-dossier initial (résolu)

**À faire :**
- Ajouter vraies données (adresses, téléphones) pour les établissements
- Créer images OG par défaut
- Tester sur mobile
- Déployer sur Vercel (après achat domaine)

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
