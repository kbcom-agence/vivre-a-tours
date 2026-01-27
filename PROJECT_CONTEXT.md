# PROJECT_CONTEXT.md - Mémoire du Projet vivre-a-tours.fr

> Ce fichier est la mémoire vivante du projet. Claude Code doit le lire au début de chaque session et le mettre à jour après chaque tâche importante.

---

## 🎯 Informations Projet

| Élément | Valeur |
|---------|--------|
| **Nom du projet** | vivre-a-tours.fr |
| **Type** | Guide lifestyle local |
| **Cible** | Habitants et futurs habitants de Tours |
| **Objectif business** | Vente de visibilité aux commerçants |
| **Date de création** | Janvier 2025 |
| **Statut** | PHASE 0 + PHASE 1 terminées ✅ |

---

## 🛠️ Stack Technique

| Élément | Choix | Statut |
|---------|-------|--------|
| **Framework** | Astro 5.x | ✅ Installé |
| **CSS** | Tailwind CSS 4.x | ✅ Installé |
| **Sitemap** | @astrojs/sitemap | ✅ Configuré |
| **Compression** | astro-compress | ✅ Configuré |
| **Hébergement** | Vercel | ⏳ À configurer |
| **Domaine** | vivre-a-tours.fr | ❌ À acheter |
| **Analytics** | Google Analytics 4 | ⏳ À configurer |

---

## 📄 Pages Créées (13 pages)

### Pages Piliers
| Page | URL | Statut | Notes |
|------|-----|--------|-------|
| Accueil | `/` | ✅ | Hero + catégories + intro |
| Que faire | `/que-faire/` | ✅ | Page pilier |
| Quartiers | `/quartiers/` | ✅ | Page pilier + comparatif |
| Bien-être | `/bien-etre/` | ✅ | Page pilier |
| Manger | `/manger/` | ✅ | Page pilier |

### Pages de Contenu
| Page | URL | Mots | Statut |
|------|-----|------|--------|
| Ce week-end | `/que-faire/ce-week-end/` | ~2000 | ✅ |
| Quartier Velpeau | `/quartiers/velpeau/` | ~2500 | ✅ |
| Quartiers à éviter | `/quartiers/a-eviter/` | ~1800 | ✅ |
| Hypnothérapeute | `/bien-etre/hypnotherapeute-tours/` | ~2000 | ✅ |
| Pilates | `/bien-etre/pilates-tours/` | ~1500 | ✅ |
| Restaurant végétarien | `/manger/restaurant-vegetarien-tours/` | ~1800 | ✅ |

### Pages Statiques
| Page | URL | Statut |
|------|-----|--------|
| À propos | `/a-propos/` | ✅ |
| Contact | `/contact/` | ✅ |

---

## 🧩 Composants Créés

| Composant | Fichier | Statut | Notes |
|-----------|---------|--------|-------|
| SEO | `src/components/SEO.astro` | ✅ | Meta + OG + Twitter + Schema |
| Header | `src/components/Header.astro` | ✅ | Nav responsive + menu mobile |
| Footer | `src/components/Footer.astro` | ✅ | Liens + copyright |
| Breadcrumb | `src/components/Breadcrumb.astro` | ✅ | Fil d'Ariane + schema |
| FAQ | `src/components/FAQ.astro` | ✅ | Accordéon + schema FAQPage |

---

## 📐 Layouts Créés

| Layout | Fichier | Usage |
|--------|---------|-------|
| BaseLayout | `src/layouts/BaseLayout.astro` | Toutes les pages |
| ArticleLayout | `src/layouts/ArticleLayout.astro` | Articles, pages quartiers |
| ListLayout | `src/layouts/ListLayout.astro` | Pages de listes (services) |

---

## 📊 SEO - Schemas Implémentés

| Type | Pages | Notes |
|------|-------|-------|
| WebSite | Accueil, toutes | Schema de base site |
| Article | Ce week-end, quartiers | Avec dates publication |
| FAQPage | Toutes pages contenu | FAQ interactives |
| Place | Velpeau | Schema quartier |
| ItemList | Hypno, Pilates, Restos | Listes d'établissements |
| BreadcrumbList | Toutes | Via composant Breadcrumb |

---

## 📝 Décisions Prises

| Date | Décision | Raison |
|------|----------|--------|
| Jan 2025 | Framework Astro | Performance, SEO natif |
| Jan 2025 | Tailwind CSS v4 | Moderne, config simplifiée |
| Jan 2025 | Contenu placeholder | Vraies données à ajouter |
| 27 Jan 2025 | Structure [Adresse à compléter] | Permet de lancer sans données réelles |

---

## 🐛 Problèmes Rencontrés et Solutions

| Problème | Solution | Date |
|----------|----------|------|
| Tailwind v4 config différente | Utiliser @theme dans global.css | 27 Jan |
| Astro init dans sous-dossier | Déplacer fichiers vers racine | 27 Jan |

---

## 📋 À Faire (Prochaines étapes)

### Priorité Haute
- [ ] Acheter domaine vivre-a-tours.fr
- [ ] Déployer sur Vercel
- [ ] Rechercher vraies données établissements
- [ ] Créer image OG par défaut (1200x630)

### Priorité Moyenne
- [ ] Créer pages piliers manquantes (services, hébergement, pratique)
- [ ] Ajouter photos locales
- [ ] Configurer Google Search Console
- [ ] Configurer GA4

### Priorité Basse
- [ ] Pages bonus Phase 1
- [ ] Blog et articles
- [ ] Formulaire contact fonctionnel

---

## 📅 Historique des Sessions

| Date | Travail effectué | Pages créées |
|------|------------------|--------------|
| 27 Jan 2025 | PHASE 0 + PHASE 1 | 13 pages |

---

## ⚠️ Points d'Attention

1. **Données placeholder** : Les adresses, téléphones et noms d'établissements sont à remplacer par de vraies données
2. **Images manquantes** : Créer une image OG par défaut et des images pour chaque page
3. **Formulaire contact** : Non fonctionnel (alert JS placeholder)
4. **Favicon** : Placeholder texte, à remplacer par vrai favicon

---

## 🔗 Commandes Utiles

```bash
# Développement local
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview
```

---

> **Dernière mise à jour :** 27 Janvier 2025
>
> **Prochaine tâche :** Déploiement Vercel + données réelles
