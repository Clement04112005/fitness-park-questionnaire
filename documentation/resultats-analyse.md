# Résultats de l'enquête — export de 120 réponses

> Analyse recalculée à partir de l'export transmis le 24 novembre 2026. Les réponses individuelles ne sont pas publiées dans ce dépôt ; seuls les résultats agrégés sont documentés ici.

## 1. Échantillon et traitement

- **120 réponses** au total, recueillies du 12 au 21 octobre 2026.
- **Version A : 64 réponses** ; **version B : 56 réponses**.
- 89 répondants ont entre 18 et 24 ans (**74,2 %**).
- 83 répondants sont étudiants (**69,2 %**).
- 70 répondants déclarent ne pas être inscrits dans une salle (**58,3 %**).

Le fichier comporte 5 réponses signalées comme incohérentes pour l'ordre Van Westendorp (vw_coherent = Non) : 3 en A et 2 en B. L'analyse principale conserve les 120 réponses pour ne pas sélectionner les répondants après leur affectation aléatoire. Une analyse de sensibilité est également présentée sur les 115 réponses cohérentes.

Aucun indicateur explicite de réponse-test n'est présent dans les colonnes de cet export ; aucune exclusion de ce type n'a donc été inventée.

## 2. Van Westendorp : seuil « trop cher »

La variable vw4 correspond au prix auquel le répondant considère l'abonnement comme trop cher.

| Échantillon | A | B | Écart B − A |
|---|---:|---:|---:|
| Toutes les réponses (n = 120) | 43,73 € (n = 64) | 46,13 € (n = 56) | **+2,40 €** |
| Réponses cohérentes (n = 115) | 44,05 € (n = 61) | 46,69 € (n = 54) | **+2,65 €** |

Sur l'échantillon complet, le test t de Welch donne **p = 0,178** et un intervalle de confiance à 95 % de **[−1,11 € ; +5,91 €]** pour l'écart B − A. Sur les seules réponses cohérentes, **p = 0,142** et l'intervalle est **[−0,90 € ; +6,19 €]**.

Ces résultats ne permettent pas de conclure à une différence statistiquement significative du seuil « trop cher ». L'écart observé est descriptif ; il ne constitue pas une preuve que les cours collectifs justifient un supplément de prix.

**Précision de méthode :** la moyenne de vw4 est un seuil déclaré « trop cher ». Elle ne doit pas être présentée comme le prix psychologique optimal issu des intersections des courbes Van Westendorp.

## 3. Gabor-Granger : intention déclarée selon le prix

Part des répondants ayant répondu « Oui » à chaque prix :

| Prix mensuel | A (n = 64) | B (n = 56) | Écart B − A |
|---:|---:|---:|---:|
| 20 € | 100,0 % | 96,4 % | −3,6 pts |
| 25 € | 93,8 % | 91,1 % | −2,7 pts |
| 30 € | 65,6 % | 76,8 % | +11,2 pts |
| 35 € | 20,3 % | 48,2 % | **+27,9 pts** |
| 40 € | 17,2 % | 10,7 % | −6,5 pts |
| 45 € | 17,2 % | 10,7 % | −6,5 pts |

À **35 €**, l'écart est de +27,9 points en faveur de B (27/56 contre 13/64). Le test exact de Fisher bilatéral donne **p = 0,0018** ; même avec une correction de Bonferroni pour les six comparaisons de prix, la valeur ajustée est d'environ **0,0106**.

Ce résultat ponctuel doit toutefois être interprété avec prudence : l'avantage de B n'apparaît pas à 40 € ni à 45 €, où les réponses « Oui » sont au contraire moins fréquentes qu'en A. Le profil des réponses n'est donc pas une hausse régulière de l'intention d'achat avec l'offre enrichie. Il s'agit d'un signal exploratoire à 35 €, pas d'une démonstration générale d'un supplément de prix acceptable.

Trois réponses sur 120 présentent une séquence Gabor-Granger non monotone (réponse « Non » à un prix puis « Oui » à un prix supérieur).

## 4. Question de contrôle

La question demande si l'offre présentée incluait l'accès aux cours collectifs avec coach. La réponse attendue est « Non » pour A et « Oui » pour B.

- En A, **61/64 (95,3 %) répondent Non**, 1/64 (1,6 %) répond Oui et 2/64 (3,1 %) ne s'en souviennent pas.
- En B, **51/56 (91,1 %) répondent Oui**, 2/56 (3,6 %) répondent Non et 3/56 (5,4 %) ne s'en souviennent pas.

La question semble donc bien distinguer la présence ou l'absence des cours dans les deux versions. Elle vérifie toutefois le souvenir de leur présence, pas nécessairement la compréhension de leur valeur, de leur inclusion sans supplément de prix ou de leur utilité personnelle.

## 5. Conclusion et limites

Les données suggèrent un écart descriptif positif pour le seuil « trop cher » et un résultat Gabor-Granger favorable à B à 35 €. En revanche, le seuil « trop cher » ne diffère pas significativement entre les groupes, et l'effet Gabor-Granger n'est pas régulier aux différents prix.

L'échantillon est jeune et composé majoritairement d'étudiants ; il ne représente pas nécessairement la clientèle de Fitness Park. Les réponses mesurent des perceptions et des intentions déclarées, pas des souscriptions réelles. Enfin, la question de contrôle ne vérifie pas explicitement que les répondants ont compris que les cours étaient inclus sans frais supplémentaires.

**Conclusion prudente :** cette enquête ne permet pas d'affirmer que les cours collectifs encadrés par un coach justifient à eux seuls une hausse tarifaire. Elle met en évidence quelques différences entre les deux descriptions, qui mériteraient d'être testées sur un échantillon plus représentatif, avec un prétest du questionnaire et une question de compréhension plus précise.

## 6. Reproductibilité

Variables utilisées :
- version : version A ou B attribuée ;
- vw4 : seuil « trop cher » ;
- vw_coherent : ordre strict attendu vw1 < vw2 < vw3 < vw4 ;
- gg20 à gg45 : intention déclarée aux six prix ;
- controle : souvenir de la présence des cours collectifs.

Les résultats ci-dessus sont recalculés sur l'export transmis. Ils remplacent les anciens chiffres de travail lorsqu'ils diffèrent. Les hypothèses de coûts et les scénarios financiers ne sont pas intégrés ici : ils doivent rester séparés des résultats de l'enquête et être explicitement présentés comme des hypothèses.
