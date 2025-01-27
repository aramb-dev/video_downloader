Je veux que vous formater tout le text que vais vous donner en markdown: # YouTube Video Downloader

Ce projet est une application web développée avec **Next.js** qui permet de télécharger des vidéos YouTube en spécifiant l'URL de la vidéo et la qualité souhaitée. L'application utilise yt-dlp pour récupérer les liens de téléchargement et les sert au client pour un téléchargement automatique.

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

bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo
Installer les dépendances

Utilisez npm ou yarn pour installer les dépendances du projet.

bash
Copy
npm install

# ou

yarn install
Installer yt-dlp

Assurez-vous que yt-dlp est installé sur votre système. Vous pouvez l'installer via pip ou télécharger le binaire directement.

bash
Copy
pip install yt-dlp
Ou téléchargez-le depuis yt-dlp GitHub.

Configurer l'environnement

Créez un fichier .env à la racine du projet pour configurer les variables d'environnement si nécessaire.

bash
Copy
touch .env
Pour l'instant, aucune variable d'environnement n'est requise, mais vous pouvez en ajouter si vous en avez besoin plus tard.

Utilisation
Démarrer le serveur de développement

Pour lancer l'application en mode développement, exécutez la commande suivante :

bash
Copy
npm run dev

# ou

yarn dev
L'application sera accessible à l'adresse : http://localhost:3000.

Utiliser l'application

Entrez l'URL de la vidéo YouTube dans le champ prévu.

Sélectionnez la qualité souhaitée.

Cliquez sur Download pour lancer le téléchargement.

Le téléchargement commencera automatiquement après la soumission du formulaire.

Structure du projet
/pages : Contient les pages Next.js.

index.js : Page d'accueil avec le formulaire de téléchargement.

api : Dossier contenant l'API pour gérer les requêtes de téléchargement.

/public : Contient les fichiers statiques (images, styles, etc.).

/styles : Contient les fichiers CSS ou Tailwind (si utilisé).

package.json : Liste des dépendances et scripts du projet.

Dépendances
Next.js : Framework React pour le rendu côté serveur et la génération de sites statiques.

yt-dlp : Outil en ligne de commande pour télécharger des vidéos YouTube.

Tailwind CSS (optionnel) : Framework CSS pour styliser l'interface utilisateur.

Contribution
Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, suivez les étapes suivantes :

Forkez le projet.

Créez une branche pour votre fonctionnalité (git checkout -b feature/AmazingFeature).

Committez vos changements (git commit -m 'Add some AmazingFeature').

Pushez la branche (git push origin feature/AmazingFeature).

Ouvrez une Pull Request.

Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Auteur
Votre Nom - Votre GitHub

Remerciements
yt-dlp pour l'outil de téléchargement de vidéos.

Next.js pour le framework React.

Copy

---

### Comment utiliser ce fichier

1. Copiez tout le contenu ci-dessus.
2. Collez-le dans un fichier nommé `README.md` à la racine de votre projet.
3. Personnalisez les sections suivantes :

   - Remplacez `votre-utilisateur` et `votre-repo` par votre nom d'utilisateur GitHub et le nom de votre dépôt.
   - Modifiez la section **Auteur** avec vos informations.
   - Ajoutez ou supprimez des sections en fonction des besoins de votre projet.

4. Ajoutez ce fichier à votre dépôt Git et poussez-le sur GitHub.

---

### Exemple de personnalisation

Si votre projet s'appelle **YouTube Downloader** et que votre nom d'utilisateur GitHub est **john-doe**, vous pouvez personnaliser le fichier comme suit :
markdown

# YouTube Downloader

Ce projet est une application web développée avec **Next.js** qui permet de télécharger des vidéos YouTube en spécifiant l'URL de la vidéo et la qualité souhaitée. L'application utilise yt-dlp pour récupérer les liens de téléchargement et les sert au client pour un téléchargement automatique.

---

## Auteur

- **John Doe** - [GitHub](https://github.com/john-doe)
