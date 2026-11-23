# Vérifications techniques et points de vigilance

Ce document décrit le fonctionnement du questionnaire `index.html` et du script serveur `Code.gs`. Il ne remplace pas un test réel du déploiement Apps Script et de la feuille Google Sheets.

## Fonctionnement de l'envoi

Le formulaire :
1. vérifie les champs obligatoires avec la validation HTML ;
2. construit un objet JavaScript contenant les réponses ;
3. envoie cet objet sous forme JSON à l'URL de l'application Web Apps Script ;
4. utilise `fetch` avec `mode: "no-cors"` et le type de contenu `text/plain`.

Le script serveur :
1. vérifie la présence du corps de requête et limite sa taille ;
2. analyse le JSON et vérifie qu'il s'agit d'un objet ;
3. refuse les champs manquants et les modalités non prévues ;
4. contrôle l'horodatage, les montants, les notes de Likert et la cohérence de `vw_coherent` ;
5. vérifie les en-têtes de l'onglet `Réponses` ;
6. utilise `LockService` pour réduire le risque de collisions lors de soumissions simultanées ;
7. ajoute la réponse et force l'application des modifications avec `SpreadsheetApp.flush()`.

Le script ne déduplique pas les soumissions : le questionnaire ne transmet pas d'identifiant unique permettant de distinguer de façon fiable un nouvel envoi d'une répétition.

## Limite importante de la confirmation

En mode `no-cors`, le navigateur ne donne pas accès au contenu de la réponse serveur. La résolution de la promesse `fetch` ne prouve donc pas que la ligne a effectivement été écrite dans Google Sheets. Le message « Vos réponses ont bien été enregistrées » est actuellement affiché après l'envoi de la requête, sans confirmation vérifiable de l'écriture côté serveur.

**Conséquence :** ne pas utiliser ce message comme preuve technique d'une sauvegarde réussie. Après un test ou une collecte, vérifier directement dans Google Sheets que les nouvelles lignes sont présentes.

## Tests à réaliser après déploiement

- Effectuer une soumission de test complète pour chaque version A et B.
- Vérifier manuellement qu'une nouvelle ligne apparaît dans la feuille.
- Vérifier les 26 champs attendus et l'ordre des colonnes.
- Vérifier que `version` vaut A ou B et que le contenu affiché correspond à cette version.
- Vérifier que les montants sont enregistrés comme valeurs numériques.
- Tester une requête incomplète ou une modalité invalide dans un environnement de test : le serveur doit la refuser.
- Vérifier que les en-têtes existants n'ont pas été modifiés.
- Distinguer les réponses de test des réponses de collecte réelle.

## Limites et précautions

- Le script suppose qu'il est lié au classeur Google Sheets attendu, car il utilise `SpreadsheetApp.getActiveSpreadsheet()`.
- Si la feuille `Réponses` contient déjà des données, ses 26 premiers en-têtes doivent correspondre exactement à la liste attendue ; sinon, le script refuse d'ajouter la ligne pour éviter un décalage des colonnes.
- Le contrôle serveur valide le format et les modalités, mais ne peut pas déterminer si une réponse est sincère ou si plusieurs personnes utilisent le même appareil.
- Le verrouillage protège l'écriture simultanée dans ce script, mais ne constitue pas une protection contre les envois malveillants.
- L'URL de l'application Web Apps Script intégrée au code client est visible par les visiteurs. Elle ne doit pas être considérée comme un secret ou comme un mécanisme d'authentification.
- Les réponses de test doivent être identifiées et exclues de l'analyse finale selon une règle documentée.

Ne pas publier de clé secrète, identifiant privé, mot de passe ou export contenant des informations personnelles.
