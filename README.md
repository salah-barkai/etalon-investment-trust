# Étalon Investment Trust

Site vitrine (React + Vite) pour Etalon Investment Trust SARL, avec un formulaire de contact
sauvegardé dans MongoDB via une fonction serverless Vercel (`/api/contact`).

## Structure

```
api/contact.js       Fonction serverless Vercel (POST) — insère le message en base
lib/mongodb.js        Connexion MongoDB mise en cache entre invocations serverless
src/                   Application React (Vite)
  components/          Nav, Hero, Intro, Domains, Location, ContactForm, Footer
  data/domains.js       Les 26 domaines d'activité (Article 3 des statuts)
  styles/global.css     Feuille de style unique (thème clair/sombre)
public/favicon.svg
```

C'est la convention "zero-config" de Vercel : le build Vite (`vite build`) produit `dist/`,
et tout fichier sous `api/` devient automatiquement une fonction serverless Node.js.

## Développement local

1. Installer les dépendances :
   ```
   npm install
   ```
2. Copier `.env.example` en `.env` et renseigner votre URI MongoDB (Atlas ou local) :
   ```
   cp .env.example .env
   ```
3. Lancer le front + les fonctions API ensemble avec la CLI Vercel :
   ```
   npx vercel dev
   ```
   (`npm run dev` démarre uniquement Vite ; sans `vercel dev`, les appels à `/api/contact`
   n'auront pas de backend à contacter en local.)

## Déploiement sur Vercel

1. Pousser ce dépôt sur GitHub/GitLab et l'importer dans Vercel (aucune configuration de build
   à changer, Vercel détecte Vite automatiquement).
2. Dans les paramètres du projet Vercel → Environment Variables, ajouter :
   - `MONGODB_URI` — chaîne de connexion de votre cluster MongoDB (ex. MongoDB Atlas)
   - `MONGODB_DB` — nom de la base (`etalon_investment` par défaut)
3. Déployer. Les messages du formulaire de contact sont stockés dans la collection `contacts`.
