# Dictionnaire des variables

Les noms ci-dessous correspondent aux champs transmis par le questionnaire HTML. Les modalités sont celles codées dans le formulaire.

| Variable | Signification | Format / modalités |
|---|---|---|
| `timestamp` | Date et heure d'envoi | Date ISO générée dans le navigateur |
| `version` | Version d'offre présentée | A ou B |
| `age` | Tranche d'âge | <18, 18-24, 25-34, 35-44, 45-54, 55+ |
| `sport` | Pratique sportive actuelle | plusieurs, hebdo, occasionnel, non |
| `inscrit` | Inscription actuelle en salle | oui / non |
| `freq12m` | Fréquentation d'une salle au cours des 12 derniers mois | oui / non |
| `frequence` | Fréquence de fréquentation envisagée | <1, 1, 2-3, 4-5, 5+ |
| `vw1` | Seuil « tellement bon marché que la qualité est mise en doute » | Montant numérique en euros |
| `vw2` | Seuil « bonne affaire » | Montant numérique en euros |
| `vw3` | Seuil « cher mais encore envisageable » | Montant numérique en euros |
| `vw4` | Seuil « trop cher » | Montant numérique en euros |
| `vw_coherent` | Respect de l'ordre strict des quatre seuils | Oui si vw1 < vw2 < vw3 < vw4, sinon Non |
| `gg20` | Intention de souscription à 20 €/mois | Oui / Non |
| `gg25` | Intention de souscription à 25 €/mois | Oui / Non |
| `gg30` | Intention de souscription à 30 €/mois | Oui / Non |
| `gg35` | Intention de souscription à 35 €/mois | Oui / Non |
| `gg40` | Intention de souscription à 40 €/mois | Oui / Non |
| `gg45` | Intention de souscription à 45 €/mois | Oui / Non |
| `controle` | Souvenir de la présence de cours collectifs coachés dans l'offre | Oui / Non / Je ne m'en souviens pas |
| `L1` | Le prix paraît justifié par la qualité proposée | Échelle de 1 à 5 |
| `L2` | L'offre paraît adaptée aux besoins | Échelle de 1 à 5 |
| `L3` | L'offre paraît qualitative | Échelle de 1 à 5 |
| `L4` | L'offre correspond aux attentes envers un abonnement de salle | Échelle de 1 à 5 |
| `L5` | Intention générale de souscription | Échelle de 1 à 5 |
| `statut` | Situation actuelle | Etudiant, Salarie, Independant, Sans activité, Retraite, Autre |
| `budget` | Budget sportif mensuel déclaré | 0, <20, 20-30, 31-40, 41-50, 50+ |

## Lecture de l'échelle de Likert

- 1 : Pas du tout d'accord
- 2 : Plutôt pas d'accord
- 3 : Ni d'accord ni pas d'accord
- 4 : Plutôt d'accord
- 5 : Tout à fait d'accord

## Points d'attention

- Les variables `vw1` à `vw4` sont des montants saisis par les répondants ; vérifier les valeurs aberrantes et les incohérences avant les analyses.
- `vw_coherent` est un indicateur de contrôle calculé côté navigateur. Il ne constitue pas à lui seul une décision d'exclusion.
- Les variables Gabor-Granger sont des réponses déclarées à chaque prix. Vérifier la cohérence des séquences avant de calculer une courbe de demande.
- Les libellés de modalités sont sensibles à la casse et aux accents ; harmoniser les valeurs lors de l'import si nécessaire.
- `timestamp` est généré côté navigateur et n'est pas une preuve indépendante de l'heure serveur.
