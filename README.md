# Questionnaire Fitness Park — GitHub Pages + Google Sheets

## Ce que fait le projet

- Tirage A/B automatique 50/50 dans le navigateur.
- Version A : offre de base.
- Version B : offre de base + cours collectifs avec coach.
- Enregistrement de la variable `version` avec chaque réponse.
- Van Westendorp, Gabor-Granger, contrôle, Likert et profil.
- Enregistrement automatique dans Google Sheets.
- Calcul d'un indicateur `vw_coherent` sans supprimer les réponses incohérentes.

## Étape 1 — Google Sheets

1. Crée un Google Sheet vide.
2. Ouvre **Extensions → Apps Script**.
3. Supprime le code existant.
4. Copie-colle le contenu de `Code.gs`.
5. Enregistre.
6. Clique sur **Déployer → Nouveau déploiement**.
7. Type : **Application Web**.
8. Exécuter en tant que : **Moi**.
9. Qui a accès : **Toute personne**.
10. Déploie et autorise les accès demandés.
11. Copie l'URL qui finit par `/exec`.

## Étape 2 — connecter le questionnaire

Dans `index.html`, remplace :

`COLLE_ICI_L_URL_EXEC`

par l'URL `/exec` de ton Apps Script.

Exemple de forme attendue :
`https://script.google.com/macros/s/XXXX/exec`

## Étape 3 — GitHub Pages

1. Crée un dépôt GitHub.
2. Ajoute `index.html` à la racine.
3. Commit/push.
4. Va dans **Settings → Pages**.
5. Choisis **Deploy from a branch**.
6. Sélectionne `main` et `/ (root)`.
7. Enregistre.
8. Utilise l'URL GitHub Pages fournie.

## Étape 4 — tests

Avant de diffuser :
- ouvre le lien plusieurs fois et vérifie que A et B apparaissent ;
- vérifie que B contient les cours collectifs ;
- complète au moins 5 tests ;
- vérifie que chaque ligne apparaît dans Google Sheets ;
- vérifie que `version` est bien A ou B ;
- vérifie que les colonnes correspondent.

Supprime les réponses de test avant la collecte réelle.

## Colonnes enregistrées

timestamp, version, age, sport, inscrit, freq12m, frequence,
vw1, vw2, vw3, vw4, vw_coherent,
gg20, gg25, gg30, gg35, gg40, gg45,
controle, L1, L2, L3, L4, L5, statut, budget

## Important

Le questionnaire ne collecte volontairement ni nom, ni prénom, ni e-mail, ni téléphone.

Les réponses Van Westendorp incohérentes sont conservées mais marquées `vw_coherent = Non`, afin de pouvoir les traiter séparément pendant l'analyse.
