# Configuration Email - Ted Designer

## 🚀 Fonctionnalités d'Email

Le système de réservation envoie automatiquement :

1. **Email à Ted** (`hi.tedesigner@gmail.com`) avec toutes les informations du client
2. **Email de confirmation au client** avec :
   - Détails du rendez-vous
   - Lien pour ajouter à Google Calendar
   - Information sur le rappel automatique
3. **Rappel automatique 30 minutes avant l'appel** avec :
   - Lien de connexion à l'appel vidéo
   - Conseils pour un appel réussi
   - Coordonnées de contact

## ⚙️ Configuration Requise

### 1. Créer un fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet avec :

```env
EMAIL_PASSWORD=votre_mot_de_passe_d_application_gmail
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Pour la production**, remplacez `NEXT_PUBLIC_BASE_URL` par votre URL de production.

### 2. Obtenir un mot de passe d'application Gmail

1. Allez sur [myaccount.google.com](https://myaccount.google.com)
2. Sécurité > Connexion à Google > Mots de passe d'application
3. Sélectionnez "Mail" comme application
4. Générez un nouveau mot de passe
5. Copiez ce mot de passe dans le fichier `.env.local`

### 3. Activer l'authentification à 2 facteurs

Le mot de passe d'application nécessite que l'authentification à 2 facteurs soit activée sur votre compte Google.

### 4. Configurer le lien de réunion

Dans le fichier `src/app/api/reminder/route.ts`, remplacez :
```javascript
const meetingLink = 'https://meet.google.com/xxx-yyyy-zzz';
```
par votre lien de réunion Google Meet, Zoom, ou autre plateforme.

## 📧 Emails Envoyés

### Email à Ted
- **Sujet** : 🎯 Nouvelle réservation d'appel découverte - [Nom du client]
- **Contenu** :
  - Informations du client
  - Détails du projet
  - Rendez-vous
  - Réseaux sociaux/site web
  - Documents joints
  - Bouton pour répondre directement

### Email au Client
- **Sujet** : ✅ Confirmation de votre appel découverte avec Ted Designer
- **Contenu** :
  - Détails du rendez-vous
  - Ce qui sera abordé
  - Lien pour ajouter à Google Calendar
  - Information sur le rappel automatique
  - Coordonnées de contact

### Rappel Automatique
- **Sujet** : ⏰ Rappel : Votre appel découverte dans 30 minutes
- **Contenu** :
  - Détails du rendez-vous
  - Lien de connexion à l'appel
  - Conseils pour un appel réussi
  - Coordonnées de contact en cas de problème

## 🔧 Déploiement

### Variables d'environnement pour la production :
```env
EMAIL_PASSWORD=votre_mot_de_passe_d_application_gmail
NEXT_PUBLIC_BASE_URL=https://votre-domaine.com
```

### Plateformes recommandées :
- **Vercel** : Configuration automatique des variables d'environnement
- **Netlify** : Configuration dans les paramètres du site
- **Railway** : Configuration dans les variables d'environnement

## 🛠️ Dépannage

### Si les emails ne s'envoient pas :
1. Vérifiez que le mot de passe d'application est correct
2. Assurez-vous que l'authentification à 2 facteurs est activée
3. Vérifiez les logs du serveur pour les erreurs
4. Testez avec un email de test d'abord

### Si les rappels automatiques ne fonctionnent pas :
1. Vérifiez que `NEXT_PUBLIC_BASE_URL` est correctement configuré
2. Assurez-vous que le serveur reste actif (les rappels utilisent `setTimeout`)
3. Pour une solution plus robuste, considérez un service comme :
   - **Vercel Cron Jobs** (si déployé sur Vercel)
   - **Upstash QStash**
   - **AWS EventBridge**

### Alternative pour les rappels (recommandé pour la production) :
Pour une solution plus fiable, vous pouvez utiliser un service de tâches planifiées comme Vercel Cron Jobs :

```javascript
// api/cron/check-appointments.js
export default async function handler(req, res) {
  // Vérifier les rendez-vous dans les 30 prochaines minutes
  // Envoyer les rappels automatiquement
}
```

## 📱 Test du Système

1. Remplissez le formulaire de réservation
2. Vérifiez que vous recevez l'email de confirmation
3. Vérifiez que Ted reçoit l'email avec les détails
4. Testez le rappel en programmant un rendez-vous dans 35 minutes 