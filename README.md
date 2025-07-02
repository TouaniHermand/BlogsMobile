# BlogsMobile
CRUD Blogs avec React Native

# Mon Projet React Native avec JSON Server

Ce projet est une application React Native utilisant un backend simulé avec JSON Server.  
Il permet de gérer des posts de blog (ajout, modification, suppression) avec des données persistées dans un fichier `db.json`.


## Prérequis

- Node.js installé sur ta machine  
- npm (ou yarn) installé  
- Expo CLI (si tu utilises Expo) ou React Native CLI configuré  
- JSON Server installé globalement ou localement


## Installation

1. Clone le dépôt Git :

git clone https://github.com/ton-utilisateur/ton-projet.git
cd ton-projet
Installe les dépendances du projet React Native :


npm install
# ou
yarn install
Installe JSON Server si ce n’est pas déjà fait (globalement) :


npm install -g json-server
Configuration de JSON Server
Dans le dossier du projet, un fichier db.json contient les données simulées pour le backend.

Exemple minimal db.json :

{
  "blogPosts": [
    {
      "id": 1,
      "title": "Titre de l'article",
      "content": "Contenu de l'article"
    }
  ]
}

## Démarrage de JSON Server
Pour lancer JSON Server et rendre les données accessibles via API REST :

npm run db
Cela démarre le serveur sur http://localhost:3000.


## Démarrage de l'application React Native
Avec Expo
Lancer Expo :

npm start
# ou
expo start
Scanner le QR code avec l’application Expo Go sur ton téléphone ou utiliser un émulateur.

## Notes importantes
Si tu utilises un émulateur Android, remplace dans la configuration axios l’URL localhost par 10.0.2.2 car l’émulateur ne voit pas localhost de ta machine.

Assure-toi que JSON Server est lancé avant d’ouvrir l’application React Native, sinon les appels API échoueront.

## Structure du projet
/api/jsonServer.js : configuration axios avec la baseURL du backend JSON Server

/context/BlogContext.js : gestion du state global avec React Context et useReducer

/db.json : fichier JSON simulant la base de données

## Commandes utiles
npm start : lance l’application React Native (Expo ou React Native CLI selon config)

npm run db : lance le serveur JSON Server pour simuler le backend

npm install : installe les dépendances du projet
