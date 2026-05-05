# Sources des statistiques utilisées dans la communication TrueCalling

Ce document liste les sources des chiffres affichés publiquement sur le site
(landing page, pop-ups, emails). Toute modification d'un chiffre dans une
copie doit s'accompagner d'une mise à jour ici, et inversement.

Les chiffres ci-dessous sont à jour pour la période **2025-2026**.

---

## Pop-up newsletter (`components/NewsletterPopup.tsx`)

Clés de traduction concernées :
- `newsletter_popup_hook` — "Un CDI sur trois ne survit pas à la première année."
- `newsletter_popup_hook_context` — "Et chaque erreur de recrutement coûte entre 30 000 € et 150 000 € à votre entreprise."

### "1 CDI sur 3 ne survit pas à la première année"

- **Étude originelle** : Collock × Manpower × HR Voice
- **Source secondaire** : TalentProgram (2025)
- **Chiffre exact** : 36 % des CDI ne survivent pas à la première année
- **Formulation choisie** : "un sur trois" (≈ 33 %) — formulation prudente,
  inférieure au chiffre réel, conforme au droit de la consommation FR

### "Coût d'un mauvais recrutement : 30 000 € — 150 000 €"

Fourchette composite, reflétant la dispersion réelle des estimations
publiées entre 2024 et 2025 :

| Source | Fourchette | Notes |
|---|---|---|
| TalentProgram (Nov 2025) | 30 000 — 150 000 € | Synthèse multi-études |
| ACAVI (2025) | 20 000 — 50 000 € (Mercato de l'Emploi) | Bas de fourchette |
| ACAVI (2025) | jusqu'à 150 000 € (Factorial) | Haut de fourchette |
| Welcome to the Jungle | 55 675 € | Exemple chiffré, poste à 42 k€ brut |
| Factorial | ~45 000 € | Moyenne tous postes |
| Berthois Conseils | 30 000 — 60 000 € (intermédiaire) | Postes opérationnels |
| Berthois Conseils | jusqu'à 200 000 € (stratégique) | Direction / leadership |

**Bornes retenues sur le pop-up** : 30 000 € (plancher prudent, multiple
sources convergent ici) — 150 000 € (plafond couramment cité, exclut les
postes stratégiques pour rester crédible).

### Adaptations par locale

- **EN** : 30 000 € → $30,000 / 150 000 € → $150,000 (conversion approximative
  pour lisibilité, taux 2025 ≈ 1.07 $/€)
- **PT-BR** : conversion en BRL au taux 2025 (~5 BRL/€) → R$ 150 000 — R$ 750 000
- Toutes les autres locales euros (es, de, it, nl) : chiffres identiques au FR
- HE : chiffres en €, public B2B europe

---

## Process de mise à jour

1. Si une nouvelle étude sort avec des chiffres plus récents, vérifier
   qu'elle est **indépendante** et **publique**.
2. Mettre à jour cette doc d'abord (avec date, source, chiffre exact).
3. Puis mettre à jour les 8 fichiers `locales/*.json` pour les clés
   concernées.
4. Puis mettre à jour le commentaire JSDoc dans le composant
   (`components/NewsletterPopup.tsx`) si la mention des études devient
   obsolète.

## Conformité légale

Article L.121-2 du Code de la consommation FR (pratiques commerciales
trompeuses) : tout chiffre affiché publiquement doit être **vérifiable**.
Conserver dans ce fichier les sources accessibles permet de répondre à
toute demande.
