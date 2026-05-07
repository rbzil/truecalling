# Pack RGPD — TrueCalling

*Audit + documents de conformité — 6 mai 2026*

Ce dossier contient le pack RGPD complet généré après audit du code du site `truecalling.ai`.

## Identité du responsable de traitement (confirmée)

| Champ | Valeur |
|---|---|
| Raison sociale | **TRUECALLING AI** |
| Forme juridique | Corporation (droit de l'État de Floride, États-Unis) |
| Adresse | 5504 North Park Rd, Fort Lauderdale, FL 33312, États-Unis |
| EIN (équivalent US du SIRET) | 39-4384470 (émis le 16 septembre 2025 par l'IRS) |
| Type d'imposition | C Corporation (déclaration IRS Form 1120) |
| Contact privacy | `alexandre@truecalling.ai` |

[À CONFIRMER : nom du dirigeant légal pour le « directeur de la publication ».]

---

## ⚠️ Action critique requise — Article 27 RGPD

TRUECALLING AI est établie aux États-Unis. Le site est disponible en 8 langues européennes (FR, EN, HE, ES, DE, IT, NL, PT-BR) et cible explicitement des résidents de l'UE pour ses services (formulaires de réservation de démo, newsletter). À ce titre, **le RGPD s'applique extraterritorialement** (article 3.2.a) et **un représentant dans l'Union européenne doit être désigné** (article 27 RGPD).

### Que faire ?

1. **Désigner un représentant dans l'Union** — soit via un service spécialisé (ex. Prighter, EDPO, Mandat-DPO, IT Governance Europe — coût indicatif 200-500 €/an), soit via un partenaire/avocat établi dans un État membre où se trouvent des personnes concernées (typiquement France ou Allemagne pour TrueCalling).
2. **Documenter la désignation** par contrat écrit (le représentant doit pouvoir être saisi à la place du responsable pour toute question des autorités ou personnes concernées).
3. **Publier les coordonnées du représentant** dans la politique de confidentialité ET dans les mentions légales — actuellement marquées `[À CONFIRMER]` aux endroits prévus.
4. **Mettre à jour le registre RPA** dans la même foulée.

Sans cette désignation, l'exposition au risque de sanction CNIL est réelle (jusqu'à 10 millions d'euros ou 2 % du CA mondial annuel selon l'article 83.4 RGPD).

---

## Contenu du pack

| Fichier | Statut | Audience |
|---|---|---|
| [`politique-confidentialite.md`](./politique-confidentialite.md) | À publier sur le site (route `/politique-de-confidentialite` en FR, `/privacy` en EN, etc.) | Public |
| [`politique-cookies.md`](./politique-cookies.md) | À publier sur le site (route `/politique-de-cookies` en FR — à créer) | Public |
| [`mentions-legales.md`](./mentions-legales.md) | À publier sur le site (route `/mentions-legales` en FR, `/legal-notice` en EN) | Public |
| [`registre-traitements.md`](./registre-traitements.md) | **Document interne** — à conserver, pas à publier. Tenu sur demande de la CNIL. | Interne |
| [`AIPD-evaluation.md`](./AIPD-evaluation.md) | **Document interne** — évaluation argumentée de la non-nécessité d'AIPD pour le site vitrine | Interne |

---

## Inventaire des traitements détectés

5 traitements identifiés à l'audit du code :

1. **Réservation de démo** (`/[locale]/book-a-demo`) — fournit prénom/nom/email/téléphone/fonction/entreprise/taille/timing/message à Resend (US, DPF) → équipe + email de confirmation au prospect. Base légale : Art. 6.1.b (mesures précontractuelles).
2. **Newsletter** (popup home, trigger 20s/50% scroll, throttle 30j) — email seul → Beehiiv (US, DPF). Base légale : Art. 6.1.a (consentement).
3. **Contact** (`/contact`) — nom/email/sujet/message — ⚠️ **non branché à un backend à ce jour** (simulation `setTimeout(700)`). Politique mise à jour à activer dès que le routage email sera en place. Base légale : Art. 6.1.f (intérêt légitime).
4. **Préférences techniques** — cookie `NEXT_LOCALE` (1 an), LocalStorage `tc_newsletter_popup_shown` (30 jours), LocalStorage `theme`. Strictement nécessaires, exemptés de consentement.
5. **Hébergement et logs** — Vercel [À CONFIRMER] (US, DPF). Logs serveur 30 jours.

## Sous-traitants identifiés

- **Resend** (US) — email transactionnel
- **Beehiiv** (US) — newsletter
- **Vercel** (US, à confirmer) — hosting + CDN
- Tous trois sous **Data Privacy Framework UE — États-Unis** (juillet 2023)

## Outils techniques détectés mais sans impact RGPD

- `next/font/google` (Inter, Instrument Serif, Frank Ruhl Libre) — **auto-hébergées au build**, aucun transfert IP visiteur vers Google ✅
- `framer-motion`, `next-themes`, `lucide-react`, `zod`, `@react-email/components` — bibliothèques côté client/serveur sans collecte de données

## Outils ABSENTS (bonne nouvelle)

- ❌ Pas de Google Analytics, Plausible, Matomo
- ❌ Pas de Hotjar, Microsoft Clarity, FullStory
- ❌ Pas de Pixel Meta, LinkedIn Insight, TikTok Pixel
- ❌ Pas de Google Tag Manager
- ❌ Pas de chat tiers (Intercom, Crisp, Drift)
- ❌ Pas de captcha tiers (reCAPTCHA, hCaptcha) — le site utilise un honeypot interne
- ❌ Pas de cookies tiers

→ **Aucun bandeau de consentement n'est requis** à la date de cet audit.

---

## Reste à compléter avant publication

| Élément | Où | Statut |
|---|---|---|
| Identité TRUECALLING AI (raison sociale, EIN, adresse) | Tous les docs | ✅ Complété |
| **Représentant UE (Art. 27)** | Politique de confidentialité §1, Mentions légales §1, Registre RPA | ⚠️ **À DÉSIGNER** — voir ci-dessus |
| Nom du directeur de la publication | Mentions légales §1 | ⏳ À confirmer |
| Confirmation de l'hébergeur Vercel | Mentions légales §2, Politique §6 | ⏳ À confirmer |
| Numéro de téléphone (optionnel) | Mentions légales §1 | ⏳ Au choix |

---

## AIPD / DPIA

**Non requise pour le site vitrine.** Voir [`AIPD-evaluation.md`](./AIPD-evaluation.md) pour le détail du test des 9 critères CEPD.

⚠️ La **plateforme produit** TrueCalling (sourcing IA, scoring de candidats via TrueFit 360, matching automatique) doit faire l'objet d'une AIPD séparée — hors périmètre de ce pack.

---

## Recommandations de mise en ligne

### 1. Pages site
- [`app/[locale]/legal-notice/page.tsx`](../../app/[locale]/legal-notice/page.tsx) → contenu de `mentions-legales.md` (URL FR : `/mentions-legales`)
- [`app/[locale]/privacy/page.tsx`](../../app/[locale]/privacy/page.tsx) → contenu de `politique-confidentialite.md` (URL FR : `/politique-de-confidentialite`)
- **Nouvelle page `/cookies`** à créer avec le contenu de `politique-cookies.md` (URL FR : `/politique-de-cookies`)

### 2. Footer
Le `components/SiteFooter.tsx` contient déjà les liens « Mentions légales » et « Politique de confidentialité ». Ajouter un lien vers la nouvelle page « Politique de cookies ».

### 3. Formulaires
- **Book-a-demo** : ajouter sous le bouton de soumission une mention courte type : *« En soumettant ce formulaire, vous acceptez que vos coordonnées soient utilisées pour vous recontacter. [Politique de confidentialité](#privacy-policy). »*
- **Contact** : même mention dès que le routage sera activé.
- **Newsletter popup** : la mention RGPD est déjà présente (clé `newsletter_popup_privacy_note` + lien vers la politique). ✅

### 4. Documentation interne
- Conserver le **registre RPA** (`registre-traitements.md`) en interne, idéalement versionné et accessible aux personnes concernées de l'équipe.
- Mettre à jour le registre **à chaque ajout/changement** d'outil ou de traitement.

### 5. Contrats DPA avec les sous-traitants
À vérifier (et signer si pas encore fait) :
- DPA Resend : https://resend.com/legal/dpa
- DPA Beehiiv : https://www.beehiiv.com/dpa
- DPA Vercel : https://vercel.com/legal/dpa

### 6. Si vous ajoutez un outil de mesure d'audience plus tard
Si vous installez Google Analytics, Plausible, Hotjar, etc. :
- Ajouter un bandeau de consentement RGPD-conforme (Tarteaucitron, Axeptio, Cookiebot, Didomi)
- Mettre à jour `politique-cookies.md` pour décrire les cookies tiers
- Mettre à jour le registre RPA

---

> **Avertissement général.** Ce pack est un modèle généré automatiquement à partir d'un audit du code du site. Il constitue une base de travail solide mais ne remplace pas une revue par un avocat ou un DPO avant publication. Le point critique en suspens est la désignation d'un représentant dans l'UE (Art. 27 RGPD), obligation directe pour TRUECALLING AI étant donné son statut d'entité non-européenne ciblant des résidents de l'UE. La plateforme produit (sourcing IA) nécessite un travail RGPD séparé qui dépasse le périmètre de ce pack.
