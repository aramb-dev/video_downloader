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

   Utilisez npm ou yarn pour installer les dépendances du projet.

```bash
npm install
```

# ou

```bash
yarn install
```

3. **Installer yt-dlp**
   Assurez-vous que yt-dlp est installé sur votre système. Vous pouvez l'installer via pip ou télécharger le binaire directement.

```bash
pip install yt-dlp
```
Ou téléchargez-le depuis yt-dlp GitHub.

4. **Configurer l'environnement**
   Créez un fichier .env à la racine du projet pour configurer les variables d'environnement si nécessaire.
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
Pour l'instant, aucune variable d'environnement n'est requise, mais vous pouvez en ajouter si vous en avez besoin plus tard.

