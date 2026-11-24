# Protocole de l'enquête

## Objectif

Comparer la perception du prix et l'intention de souscription pour deux descriptions d'abonnement à une salle de sport : une offre de base (A) et la même offre enrichie de cours collectifs avec coach (B).

## Plan expérimental

Chaque ouverture du questionnaire déclenche un tirage aléatoire indépendant dans le navigateur :

```js
const version = Math.random() < 0.5 ? "A" : "B";
```

La probabilité théorique d'affectation est de 50 % pour chaque version. Ce mécanisme ne garantit pas des effectifs identiques. La version affectée est conservée dans la variable `version`.

## Déroulement

1. Questions sur la pratique sportive et l'expérience en salle.
2. Présentation de l'offre A ou B.
3. Quatre questions de prix Van Westendorp.
4. Six questions d'intention d'achat Gabor-Granger (20 à 45 €).
5. Question de contrôle de compréhension de la présence de cours coachés.
6. Cinq affirmations évaluées sur une échelle de Likert de 1 à 5.
7. Questions de profil : situation et budget sportif mensuel.

Le temps annoncé aux répondants est de 4 à 5 minutes.

## Collecte et traitement

Le formulaire construit un objet contenant l'horodatage, la version attribuée et les réponses. Il l'envoie à l'application Web Google Apps Script configurée dans `index.html`. Le script côté serveur est responsable de l'écriture dans Google Sheets.

Le questionnaire calcule également `vw_coherent` : la réponse vaut « Oui » lorsque les quatre seuils respectent strictement `vw1 < vw2 < vw3 < vw4`, sinon « Non ».

### Nettoyage final

L'export comporte **120 réponses brutes**. Après application des règles de nettoyage, **110 observations sont retenues : 58 en version A et 52 en version B**.

Les dix retraits documentés sont :
- un essai ;
- un double envoi ;
- cinq séries de seuils Van Westendorp incohérentes ;
- trois séries d'intentions Gabor-Granger non monotones.

La question de contrôle de perception ne sert pas à exclure des répondants. Les résultats finaux sont présentés dans [le rapport d'analyse](./resultats-analyse.md).

## Précautions d'analyse

- Documenter le nombre de réponses reçues, les exclusions et les raisons d'exclusion.
- Distinguer l'échantillon brut de l'échantillon effectivement analysé.
- Présenter les effectifs A et B réellement observés ; ne pas supposer qu'ils sont égaux.
- Pour les comparaisons A/B, présenter les tailles d'échantillon, les statistiques descriptives et le test utilisé.
- Ne pas interpréter une valeur p supérieure au seuil retenu comme une preuve d'absence totale d'effet.
- Les intentions déclarées ne sont pas des achats observés.
- Un échantillon de convenance limite la généralisation à l'ensemble des clients Fitness Park.

## Limites du questionnaire

La version B ajoute les cours collectifs à la description de l'offre de base. Elle ne reproduit pas nécessairement l'intégralité des avantages, conditions contractuelles ou services d'une formule commerciale Fitness Park existante. Les conclusions doivent donc porter sur le stimulus effectivement présenté aux répondants.

## Traçabilité

Pour rendre une nouvelle collecte reproductible, conserver la date de diffusion, la version du questionnaire, la configuration Apps Script, le nombre de réponses brutes, les règles de nettoyage et une copie de l'export de travail dans un espace à accès restreint. Ne jamais publier d'identifiants ou de données permettant d'identifier les répondants.
