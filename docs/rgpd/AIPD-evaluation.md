# Évaluation de la nécessité d'une AIPD (analyse d'impact)

*Évaluation effectuée le 6 mai 2026*

L'**Analyse d'Impact relative à la Protection des Données** (AIPD, ou DPIA en anglais — *Data Protection Impact Assessment*) est obligatoire dans certains cas définis à l'article 35 RGPD et précisés par les lignes directrices du Comité européen de la protection des données (CEPD WP248rev01) ainsi que par la liste de la CNIL.

## Conclusion : **AIPD non obligatoire**

Au vu de l'audit réalisé sur le code du site truecalling.app, **aucune AIPD n'est requise** pour les traitements actuels. Justification ci-dessous.

---

## Test de l'article 35.3 RGPD (cas d'AIPD obligatoire)

| Cas légal | Application au site |
|---|---|
| **a)** Évaluation systématique et approfondie d'aspects personnels fondée sur un traitement automatisé (profilage) produisant des effets juridiques ou affectant significativement la personne | ❌ Non applicable. Aucun profilage, aucune décision automatisée. Le site est un site vitrine de présentation produit. |
| **b)** Traitement à grande échelle de données sensibles (Art. 9) ou de données pénales (Art. 10) | ❌ Non applicable. Aucune donnée sensible collectée. |
| **c)** Surveillance systématique à grande échelle d'une zone accessible au public | ❌ Non applicable. Pas de vidéosurveillance, pas de tracking de comportement. |

---

## Test des 9 critères du CEPD (WP248rev01)

Une AIPD devient également recommandée si le traitement remplit **au moins deux** des neuf critères suivants. Chaque critère est évalué pour TrueCalling.

| # | Critère CEPD | Site truecalling.app |
|---|---|---|
| 1 | Évaluation ou notation (scoring, profilage) | ❌ Non |
| 2 | Décision automatisée avec effet juridique ou similaire | ❌ Non |
| 3 | Surveillance systématique | ❌ Non |
| 4 | Données sensibles ou hautement personnelles | ❌ Non |
| 5 | Données traitées à grande échelle | ❌ Non — volumétrie modeste (visiteurs d'un site B2B vitrine) |
| 6 | Croisement / combinaison de jeux de données | ❌ Non |
| 7 | Données concernant des personnes vulnérables | ❌ Non — public B2B (recruteurs, dirigeants RH) |
| 8 | Usage innovant / application de nouvelles solutions technologiques | ⚠️ Partiel — le site fait la promotion d'un produit utilisant l'IA, mais le **site lui-même** ne traite pas de données via IA. Le produit TrueCalling, lui, devra faire l'objet d'une AIPD séparée (voir ci-dessous). |
| 9 | Empêche les personnes d'exercer un droit / de bénéficier d'un service / d'un contrat | ❌ Non |

**Résultat : 0 critère pleinement rempli pour le site lui-même.** Le critère 8 ne s'applique qu'au produit, pas au site vitrine.

---

## Test de la liste CNIL (Liste des traitements pour lesquels une AIPD est requise — Délibération n° 2018-327 du 11 octobre 2018)

Aucun des traitements identifiés sur le site ne figure dans la liste CNIL des traitements à risque élevé qui imposent automatiquement une AIPD.

---

## Recommandation

**Pour le site truecalling.app uniquement** : aucune AIPD n'est nécessaire. Tenir le registre RPA à jour suffit.

**Pour la plateforme produit TrueCalling** (l'application accessible à `app.truecalling.app` ou équivalent, qui fait du sourcing IA, du scoring de candidats, et du matching automatique) : une AIPD est très probablement **obligatoire**, car elle remplit au moins deux des critères CEPD :

- **Critère 1** (scoring) : le score TrueFit 360 évalue les candidats sur 100 points
- **Critère 8** (technologie innovante) : matching IA, recherche sémantique
- **Critère 4 partiellement** : profil professionnel détaillé (CV, historique, signaux contextuels)

Cette AIPD relative à la plateforme dépasse le périmètre de cette skill et nécessite un travail dédié, idéalement avec un DPO ou un avocat spécialisé. La présente évaluation ne couvre **que le site vitrine**.

---

## Quand réévaluer ?

Réévaluer la nécessité d'une AIPD si l'un de ces événements survient :

- Ajout d'un outil de mesure d'audience avec tracking comportemental étendu
- Ajout d'un système de profilage des visiteurs (scoring marketing, personalisation poussée)
- Collecte de données sensibles (santé, opinions politiques, etc.)
- Traitement à grande échelle (>1 million de profils traités annuellement)
- Surveillance systématique
- Changement majeur dans l'architecture technique du site

---

> **Avertissement.** Cette évaluation porte exclusivement sur le **site vitrine truecalling.app**. Elle ne traite pas de la plateforme produit TrueCalling (sourcing IA, matching, EMILY) qui doit faire l'objet d'une AIPD dédiée — ce travail dépasse le périmètre de la présente skill et requiert l'intervention d'un DPO ou d'un avocat spécialisé en protection des données. Si un doute subsiste, ne pas hésiter à consulter directement la CNIL via leur formulaire en ligne.
