# YouTube Video Downloader

Ce projet est une application web développée avec **Next.js** qui permet de télécharger des vidéos YouTube en spécifiant l'URL de la vidéo et la qualité souhaitée. L'application utilise `yt-dlp` pour récupérer les liens de téléchargement et les sert au client pour un téléchargement automatique.

---

## Fonctionnalités

- Téléchargement de vidéos YouTube en différentes qualités (144p, 360p, 720p, 1080p).
- Interface utilisateur simple et intuitive.
- Téléchargement automatique après soumission du formulaire.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [Git](https://git-scm.com/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) (pour récupérer les liens de téléchargement)

---

## Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo

```

2. **Installer les dépendances**

   Utilisez `npm` ou `yarn` pour installer les dépendances du projet.

```bash
npm install

# ou

yarn install
```

3. **Installer yt-dlp**
   Assurez-vous que `yt-dlp` est installé sur votre système. Vous pouvez l'installer via pip ou télécharger le binaire directement.

```bash
pip install yt-dlp
```

Ou téléchargez-le depuis [yt-dlp GitHub](https://github.com/yt-dlp/yt-dlp).

4. **Configurer l'environnement**
   Créez un fichier `.env` à la racine du projet pour configurer les variables d'environnement si nécessaire.

```bash
touch .env
```

Pour l'instant, aucune variable d'environnement n'est requise, mais vous pouvez en ajouter si vous en avez besoin plus tard.

---

## Utilisation

1. **Démarrer le serveur de développement**
   Pour lancer l'application en mode développement, exécutez la commande suivante :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000).

2. **Utiliser l'application**

- Entrez l'URL de la vidéo YouTube dans le champ prévu.

- Sélectionnez la qualité souhaitée.

- Cliquez sur Download pour lancer le téléchargement.

Le téléchargement commencera automatiquement après la soumission du formulaire.

## Structure du projet

- `/pages` : Contient les pages Next.js.

  - `index.js` : Page d'accueil avec le formulaire de téléchargement.

  - `api` : Dossier contenant l'API pour gérer les requêtes de téléchargement.

- `/public` : Contient les fichiers statiques (images, styles, etc.).

- `/styles` : Contient les fichiers CSS ou Tailwind (si utilisé).

- `package.json` : Liste des dépendances et scripts du projet.

## Dépendances

`Next.js` : Framework React pour le rendu côté serveur et la génération de sites statiques.

`yt-dlp` : Outil en ligne de commande pour télécharger des vidéos YouTube.

`Tailwind CSS` (optionnel) : Framework CSS pour styliser l'interface utilisateur.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, suivez les étapes suivantes :

1. Forkez le projet.

2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).

3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`).

4. Pushez la branche (`git push origin feature/AmazingFeature`).

5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Auteur

- Sékou Dayifourou KEITA - [Dayifour](https://github.com/dayifour)
