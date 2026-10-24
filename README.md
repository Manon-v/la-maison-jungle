# Kasa — Application de location immobilière

Projet réalisé dans le cadre de la formation Testeur logiciel d’OpenClassrooms.

Application développée avec React, Vite et React Router : liste des logements, fiches détaillées, galerie photo, menus déroulants et page 404.

## Prérequis

- Node.js et npm installés.
- Le backend fourni par OpenClassrooms, à télécharger séparément :
  https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_appli_location_immobiliere_React

## Lancer le backend

Dans un terminal ouvert dans le dossier `backend` du projet fourni :

```bash
npm install
npm start
```

Le backend est accessible sur http://localhost:8080.
Garder ce terminal ouvert pendant l’utilisation du site.

## Lancer le frontend

Dans un autre terminal, à la racine de ce dépôt :

```bash
npm install
npm run dev
```

Ouvrir l’adresse indiquée par Vite dans le terminal.

## Récupération des données

Les pages d’accueil et de détail récupèrent les données du backend avec `fetch`.

- Liste des logements : `GET /api/properties`
- Détail d’un logement : `GET /api/properties/:id`

Un identifiant de logement inexistant redirige vers la page 404.
Un message s’affiche pendant le chargement ou en cas d’erreur de récupération.

## Tests unitaires

Les tests se trouvent dans `Tests/index.test.jsx`.
Ils vérifient les composants Card, Banner, Collapse et Slideshow.

Lancer les tests :

```bash
npm run test
```

Afficher la couverture :

```bash
npm run test:coverage
```

Résultat : 11 tests réussis et 100 % de couverture sur ces quatre composants.
Ce pourcentage ne couvre pas les pages ni leurs appels API.

## Compilation

```bash
npm run build
```

Les fichiers de production sont générés dans le dossier `dist`.
