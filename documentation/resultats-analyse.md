# Résultats finaux de l'enquête — 120 réponses brutes, 110 retenues

> Résultats alignés sur la version finale du site de restitution, consultée le 24 novembre 2026. Les réponses individuelles ne sont pas publiées dans ce dépôt ; seuls les résultats agrégés sont documentés ici.

## 1. Échantillon et traitement

- **120 réponses brutes** au total.
- **110 observations retenues** après nettoyage : **58 en version A** (offre sans cours) et **52 en version B** (offre avec cours).
- Profil des observations retenues : **79 personnes de 18 à 24 ans**, **73 étudiants** et **67 personnes non inscrites en salle de sport**. Ces catégories se recoupent.

Dix retraits sont documentés :
- un essai ;
- un double envoi ;
- cinq séries de seuils de prix Van Westendorp incohérentes ;
- trois séries d'intentions Gabor-Granger non monotones.

Le contrôle de perception (souvenir de la présence des cours) ne sert pas à exclure des répondants. Les effectifs présentés ci-dessous portent sur les 110 observations retenues.

## 2. Question de contrôle : les cours ont-ils été remarqués ?

La réponse attendue est « Non » pour A et « Oui » pour B.

| Version reçue | Oui | Non | Ne s'en souvient pas | Total |
|---|---:|---:|---:|---:|
| **B, avec cours** | 47 | 2 | 3 | 52 |
| **A, sans cours** | 1 | 57 | 0 | 58 |

En B, **47/52 (90,4 %) déclarent avoir vu les cours**. En A, **57/58 (98,3 %) identifient correctement leur absence** ; une personne répond « Oui ». Sur les trois modalités, χ²(2) = **98,32** et V de Cramer = **0,95**. Les petits effectifs de la modalité « ne se souvient pas » motivent un contrôle exact de Fisher sur « oui » contre les autres réponses (**p < 0,001**).

Ce contrôle vérifie le souvenir de la présence ou de l'absence des cours, pas nécessairement la compréhension de leur valeur, de leur inclusion sans supplément ou de leur utilité personnelle.

## 3. Van Westendorp : seuil moyen « trop cher »

La variable `vw4` correspond au prix auquel le répondant considère l'abonnement comme trop cher.

| Indicateur | A — sans cours (n = 58) | B — avec cours (n = 52) |
|---|---:|---:|
| Seuil moyen « trop cher » | **44,10 €** | **46,54 €** |

L'écart moyen B − A est de **+2,44 €**. Le test t de Welch donne **p = 0,193**. L'intervalle de confiance à 95 % de l'écart va de **−1,25 € à +6,12 €** : il englobe zéro. La différence observée n'est donc pas statistiquement significative.

À budget déclaré comparable, l'écart estimé est de **+0,95 €** (régression avec catégories de budget, erreurs types robustes HC3, IC à 95 % **[−1,48 € ; +3,38 €]**, p = **0,444**). Cette vérification exploratoire ne change pas la conclusion.

Le seuil moyen « trop cher » ne doit pas être confondu avec le prix psychologique optimal issu des intersections des courbes de Van Westendorp.

### Prix psychologique optimal et zone acceptable

- Zone de prix acceptable en A : **23,49 € à 31,56 €**.
- Zone de prix acceptable en B : **24,50 € à 33,29 €**.
- Croisement des courbes « trop bon marché » et « trop cher » : **26,52 € en A** et **28,25 € en B**.

Ces points décrivent la perception du panel et ne constituent pas une recommandation tarifaire à eux seuls.

## 4. Gabor-Granger : intention déclarée selon le prix

Nombre et part des répondants ayant répondu « Oui » à chaque prix mensuel :

| Prix mensuel | B — avec cours | A — sans cours |
|---:|---:|---:|
| 20 € | 50/52 = 96 % | 58/58 = 100 % |
| 25 € | 48/52 = 92 % | 54/58 = 93 % |
| 30 € | 40/52 = 77 % | 37/58 = 64 % |
| 35 € | 25/52 = 48 % | 12/58 = 21 % |
| 40 € | 6/52 = 12 % | 10/58 = 17 % |
| 45 € | 6/52 = 12 % | 10/58 = 17 % |

À **35 €**, 25 personnes sur 52 en B (48 %) envisagent de souscrire, contre 12 sur 58 en A (21 %). À **40 €**, le sens s'inverse : 6/52 (12 %) en B contre 10/58 (17 %) en A. À 40 €, le test exact de Fisher bilatéral donne **p = 0,431**.

L'écart favorable à B à 35 € est descriptif ; il ne doit pas être présenté comme une preuve statistique sans test adapté. Le profil des réponses n'est pas régulier aux prix supérieurs : l'intention déclarée est plus faible en B qu'en A à 40 € et 45 €. Les résultats sont des intentions déclarées sur six prix mensuels, pas des souscriptions réelles.

## 5. Perception de l'expérience

L'effet indirect estimé sur l'intention est de **+0,113 point** sur une échelle de 1 à 5, avec un intervalle bootstrap à 95 % de **[0,003 ; 0,215]** (5 000 tirages). La borne basse est proche de zéro. La cohérence de l'échelle de perception est faible : alpha = **0,545**, fiabilité composite = **0,557**, variance moyenne extraite = **0,306**. L'interprétation reste exploratoire.

## 6. Conclusion et limites

Les données font apparaître un écart descriptif de +2,44 € sur le seuil moyen « trop cher » et un résultat Gabor-Granger favorable à B à 35 €. Toutefois, la différence sur le seuil « trop cher » n'est pas statistiquement significative (p = 0,193 ; IC 95 % [−1,25 € ; +6,12 €]) et l'avantage de B à 35 € ne se retrouve pas à 40 € et 45 €.

**Conclusion prudente :** l'enquête ne permet pas d'affirmer que les cours collectifs coachés justifient à eux seuls le supplément tarifaire de l'offre Access+. Elle suggère des signaux de valorisation, mais leur ampleur et leur robustesse sont insuffisantes pour conclure à un supplément de prix acceptable.

Limites principales :
- l'échantillon est jeune et composé majoritairement d'étudiants ; il ne représente pas nécessairement la clientèle Fitness Park ;
- les budgets sportifs diffèrent entre les groupes (test de permutation conditionnel par Monte-Carlo, 99 999 simulations, p < 0,001) ; le code « 1 » est conservé comme catégorie distincte et sa signification reste à confirmer ;
- la régression exploratoire à budget comparable estime un écart de +0,95 €, non significatif (p = 0,444) ;
- les réponses mesurent des perceptions et intentions déclarées, pas des achats effectifs ;
- la question de contrôle vérifie le souvenir de la présence des cours, pas leur compréhension comme avantage inclus sans supplément.

## 7. Reproductibilité

Variables principales utilisées :
- `version` : version A ou B attribuée ;
- `vw1` à `vw4` : seuils Van Westendorp ;
- `vw_coherent` : cohérence de l'ordre strict attendu ;
- `gg20` à `gg45` : intentions déclarées aux six prix ;
- `controle` : souvenir de la présence des cours collectifs.

Les résultats ci-dessus remplacent les anciens résultats de travail sur 120 observations conservées. Le fichier final comporte 120 réponses brutes, mais l'analyse publiée porte sur 110 observations après les dix exclusions documentées. Les hypothèses de coûts et les scénarios financiers sont traités séparément dans le dossier de prix et ne doivent pas être confondus avec les résultats de l'enquête.