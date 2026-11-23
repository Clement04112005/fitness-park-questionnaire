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
- **Dictionnaire des variables :** [documentation/dictionnaire-variables.md](./documentation/dictionnaire-variables.md)
- **Protocole de l'enquête :** [documentation/protocole.md](./documentation/protocole.md)
- **Informations sur les données :** [data/README.md](./data/README.md)
- **Site de présentation et d'analyse stratégique :** https://flame-cycle-7f1f8.ship.place/#resultats
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

Le navigateur transmet un objet JSON comprenant les réponses et la version attribuée. Le script Apps Script reçoit ces données et les inscrit dans la feuille de calcul.

### À propos du script Apps Script

Le fichier serveur `Code.gs` n'est pas présent dans cette version publique du dépôt. L'URL de déploiement est configurée dans le questionnaire, mais cela ne permet pas de reconstituer le code source du serveur. Le script doit être ajouté séparément si sa publication et sa diffusion sont autorisées. Ne publiez jamais de mot de passe, jeton ou identifiant confidentiel.

## Structure du dépôt

```text
fitness-park-questionnaire/
├── README.md
├── index.html
├── documentation/
│   ├── protocole.md
│   └── dictionnaire-variables.md
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
