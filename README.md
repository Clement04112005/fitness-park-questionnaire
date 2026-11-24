# Étude marketing — Questionnaire Fitness Park

> Projet universitaire réalisé dans le cadre du cours **Prix et budgets marketing** (Master Marketing-Vente, IAE Clermont Auvergne).

## Présentation

Ce dépôt contient le questionnaire en ligne utilisé pour étudier la perception du prix d'un abonnement à une salle de sport et mesurer l'effet de l'ajout de cours collectifs encadrés par un coach.

L'étude compare deux versions :
- **Version A — offre de base :** accès aux espaces de musculation et de cardio-training, matériel et vestiaires.
- **Version B — offre enrichie :** mêmes prestations, avec accès aux cours collectifs avec coach.

L'objectif est d'étudier l'effet de la présence des cours collectifs sur la perception du prix et l'intention de souscription.

## Accès au projet

- **Questionnaire source :** [index.html](./index.html)
- **Script de collecte Apps Script :** [Code.gs](./Code.gs)
- **Dictionnaire des variables :** [documentation/dictionnaire-variables.md](./documentation/dictionnaire-variables.md)
- **Protocole de l'enquête :** [documentation/protocole.md](./documentation/protocole.md)
- **Vérifications techniques :** [documentation/verification-technique.md](./documentation/verification-technique.md)
- **Informations sur les données :** [data/README.md](./data/README.md)
- **Résultats recalculés sur 120 réponses :** [documentation/resultats-analyse.md](./documentation/resultats-analyse.md)
- **Site de présentation et d'analyse stratégique :** https://gamy-guppy-j1abu.ship.place/resultats.html
- **Consignes du cours :** https://prix.iae-mod.fr/index.html

## Méthodes mobilisées

### Répartition expérimentale A/B

Le navigateur attribue aléatoirement une version A ou B à chaque participant, avec une probabilité de 50 % pour chacune. Il s'agit d'un tirage aléatoire indépendant : les deux groupes ne sont pas nécessairement de taille identique. La variable `version` est enregistrée avec chaque réponse.

### Van Westendorp — prix psychologique

Quatre seuils sont demandés : `vw1` (prix tellement bas qu'il fait douter de la qualité), `vw2` (bonne affaire), `vw3` (cher mais envisageable) et `vw4` (trop cher).

La variable `vw_coherent` signale si les montants respectent l'ordre strict attendu : `vw1 < vw2 < vw3 < vw4`. Les réponses incohérentes ne sont pas supprimées automatiquement ; elles peuvent être examinées séparément.

### Gabor-Granger — intention d'achat selon le prix

Le répondant indique s'il envisagerait de souscrire aux prix mensuels de 20 €, 25 €, 30 €, 35 €, 40 € et 45 €. Les réponses sont enregistrées dans `gg20` à `gg45`.

### Questions complémentaires

Le questionnaire recueille des informations sur la pratique sportive, la compréhension de l'offre, la perception de celle-ci (échelle de Likert) et le profil général du répondant. Le détail figure dans le [dictionnaire des variables](./documentation/dictionnaire-variables.md).

## Architecture technique

- **Interface :** HTML, CSS et JavaScript dans `index.html`.
- **Hébergement :** GitHub Pages, si activé sur le dépôt.
- **Collecte :** requête HTTP vers une application Web Google Apps Script.
- **Stockage :** Google Sheets.

Le navigateur transmet un objet JSON comprenant les réponses et la version attribuée. Le script `Code.gs` valide les champs, vérifie les modalités et les valeurs numériques, puis ajoute la ligne à l'onglet `Réponses`. Un verrou de script limite les collisions lors de soumissions simultanées.

**Limite de confirmation :** le questionnaire utilise `fetch` en mode `no-cors`. Le navigateur ne peut donc pas lire la réponse JSON du serveur ni confirmer à lui seul que l'écriture dans Sheets a réussi. Le message de remerciement affiché côté questionnaire ne constitue pas une preuve de sauvegarde. Voir les [points de vigilance techniques](./documentation/verification-technique.md).

### Déploiement Apps Script

Le fichier [`Code.gs`](./Code.gs) contient le code serveur correspondant aux champs du questionnaire. Pour le déployer :
1. ouvrir le projet Apps Script lié au classeur Google Sheets ;
2. remplacer le contenu du fichier serveur par le contenu de `Code.gs` ;
3. enregistrer le projet ;
4. déployer ou mettre à jour le déploiement en tant qu'application Web ;
5. vérifier les paramètres d'accès attendus pour la collecte ;
6. effectuer une soumission de test et vérifier manuellement l'apparition d'une ligne dans l'onglet `Réponses`.

Ne modifiez pas l'URL de déploiement dans `index.html` si le déploiement existant est conservé. Si vous créez un nouveau déploiement, remplacez l'URL par celle fournie par Apps Script.

## Structure du dépôt

```text
fitness-park-questionnaire/
├── README.md
├── index.html
├── Code.gs
├── documentation/
│   ├── protocole.md
│   ├── dictionnaire-variables.md
│   └── verification-technique.md
└── data/
    └── README.md
```

## Reproductibilité et contrôle qualité

Avant toute nouvelle collecte, vérifier :
1. que les deux versions de l'offre s'affichent correctement ;
2. que la version attribuée est bien enregistrée dans `version` ;
3. que les réponses sont transmises à Google Sheets ;
4. que les noms et l'ordre des colonnes correspondent au dictionnaire ;
5. que les réponses de test sont identifiées et retirées du jeu d'analyse final ;
6. que le nombre de réponses retenues est cohérent entre l'export, les analyses et le site de restitution.

Le script serveur refuse les champs manquants, les modalités inconnues, les montants négatifs ou manifestement excessifs, les notes de Likert hors de 1 à 5 et les indicateurs de cohérence incorrects. Il vérifie également que les en-têtes de la feuille correspondent au format attendu avant d'ajouter une réponse. Il ne supprime ni ne déduplique automatiquement les réponses.

Le tirage A/B est probabiliste et ne garantit pas un partage exactement égal entre les deux groupes.

## Données personnelles et confidentialité

Le questionnaire est conçu pour ne pas demander de nom, prénom, adresse e-mail ou numéro de téléphone. Les réponses restent néanmoins des données d'enquête : leur export doit être contrôlé et anonymisé avant toute diffusion publique.

Aucun export individuel de réponses n'est publié dans ce dépôt à ce stade. Voir [data/README.md](./data/README.md).

## Limites méthodologiques

- Un échantillon de convenance ne permet pas, à lui seul, de généraliser les résultats à l'ensemble des clients Fitness Park.
- Les réponses déclarées mesurent des perceptions et intentions, pas des achats effectivement réalisés.
- Le tirage aléatoire donne une probabilité de 50 % à chaque version, sans garantir des effectifs égaux.
- Une différence observée entre A et B ne doit pas être qualifiée de significative sans test statistique adapté.
- La version B teste l'ajout des cours collectifs à l'offre décrite ; elle ne permet pas d'attribuer à ces seuls cours la valeur de tous les avantages d'une formule commerciale réelle.

## Licence et réutilisation

Ce dépôt est un support de travail universitaire. Aucune licence de réutilisation n'est déclarée pour le moment. Pour toute réutilisation du code ou des contenus, contacter les auteurs du projet.

## Dernier export analysé

L'export transmis le 24 novembre 2026 contient 120 réponses (64 en A et 56 en B). Les résultats agrégés et les limites d'interprétation sont documentés dans [documentation/resultats-analyse.md](./documentation/resultats-analyse.md). Les réponses individuelles ne sont pas publiées dans le dépôt.
