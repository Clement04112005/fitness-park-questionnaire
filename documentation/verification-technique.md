# Vérifications techniques et points de vigilance

Ce document décrit les comportements observables dans le fichier `index.html` du dépôt. Il ne remplace pas un test réel du déploiement Apps Script et de la feuille Google Sheets.

## Fonctionnement actuel de l'envoi

Le formulaire :
1. vérifie les champs obligatoires avec la validation HTML ;
2. construit un objet JavaScript contenant les réponses ;
3. envoie cet objet sous forme JSON à l'URL de l'application Web Apps Script ;
4. utilise `fetch` avec `mode: "no-cors"` et le type de contenu `text/plain`.

### Limite importante de la confirmation

En mode `no-cors`, le navigateur ne donne pas accès au contenu de la réponse serveur. La résolution de la promesse `fetch` ne prouve donc pas que la ligne a effectivement été écrite dans Google Sheets. Le message « Vos réponses ont bien été enregistrées » est actuellement affiché après l'envoi de la requête, sans confirmation vérifiable de l'écriture côté serveur.

**Conséquence :** ne pas utiliser ce message comme preuve technique d'une sauvegarde réussie. Pour une prochaine version, prévoir un échange permettant de lire une réponse explicite du serveur, ou un mécanisme de vérification côté serveur, puis tester les cas de réussite et d'échec. Ne pas modifier l'endpoint de collecte en production sans effectuer des tests contrôlés.

## Tests à réaliser

- Tester une soumission complète sur un environnement de test.
- Vérifier manuellement qu'une nouvelle ligne apparaît dans la feuille.
- Vérifier les 26 champs attendus et l'ordre des colonnes.
- Vérifier que `version` vaut A ou B et que le contenu affiché correspond à cette version.
- Tester les champs obligatoires et les montants négatifs (qui doivent être refusés par `min="0"`).
- Contrôler le comportement en cas de perte de connexion.
- Distinguer les réponses de test des réponses de collecte réelle.

## Sécurité et confidentialité

L'URL d'une application Web Apps Script intégrée au code client est visible par les visiteurs du site. Elle ne doit pas être considérée comme un secret ou comme un mécanisme d'authentification. Le script serveur doit valider les données reçues et limiter les abus.

Ne pas publier de clé secrète, identifiant privé, mot de passe ou export contenant des informations personnelles.
