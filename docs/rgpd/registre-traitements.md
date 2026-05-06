# Registre des activités de traitement (RPA)

**Article 30 du RGPD — Responsable du traitement**

*Dernière mise à jour : 6 mai 2026*

---

## Identification du responsable du traitement

| Champ | Valeur |
|---|---|
| Raison sociale | TRUECALLING AI |
| Forme juridique | Corporation (droit de l'État de Floride, États-Unis) |
| Adresse | 5504 North Park Rd, Fort Lauderdale, FL 33312, États-Unis |
| EIN (équivalent US) | 39-4384470 (émis 16/09/2025) |
| Représentant légal | [À CONFIRMER : nom du dirigeant] |
| Contact privacy | `alexandre@truecalling.ai` |
| DPO désigné ? | Non — non obligatoire compte tenu de la nature et du volume des traitements (Art. 37 RGPD) |
| Représentant dans l'UE (Art. 27) | ⚠️ À DÉSIGNER — TRUECALLING AI étant établie aux États-Unis et offrant ses services à des résidents de l'UE (8 locales européennes), la désignation d'un représentant dans l'UE est obligatoire au titre de l'article 27 RGPD. Voir AIPD-evaluation.md et README.md. |

---

## Liste des traitements

Cinq traitements distincts sont identifiés à la date de mise à jour de ce registre.

---

### Traitement n° 1 — Réservation de démo commerciale

| Champ obligatoire (Art. 30.1) | Valeur |
|---|---|
| **Nom du traitement** | Réservation de démo |
| **Finalité** | Recueillir les coordonnées et le contexte d'un prospect souhaitant assister à une démonstration commerciale du produit TrueCalling, organiser le rendez-vous, et envoyer une confirmation. |
| **Base légale** | Article 6.1.b RGPD — exécution de mesures précontractuelles prises à la demande de la personne concernée |
| **Catégories de personnes concernées** | Prospects B2B (recruteurs, dirigeants RH, équipes Talent Acquisition) |
| **Catégories de données** | Identité (prénom, nom), coordonnées professionnelles (email, téléphone, fonction, entreprise), informations de qualification (taille équipe, volume de recrutements, urgence), message libre, locale d'origine |
| **Données sensibles (Art. 9)** | Aucune |
| **Catégories de destinataires** | Équipe commerciale TrueCalling (interne) ; le prospect lui-même (email de confirmation) |
| **Sous-traitants (Art. 28)** | **Resend, Inc.** (États-Unis) — fournisseur d'email transactionnel. Contrat DPA en place [À VÉRIFIER]. Encadrement transfert : Data Privacy Framework UE — États-Unis. |
| **Transferts hors UE** | Oui — vers Resend (US). Encadrement : DPF (décision d'adéquation du 10 juillet 2023). |
| **Durée de conservation** | 3 ans à compter du dernier contact effectif avec le prospect (recommandation CNIL pour la prospection commerciale B2B). Au-delà, suppression ou archivage anonymisé. |
| **Mesures de sécurité techniques et organisationnelles** | HTTPS / TLS sur toutes les communications · validation côté serveur (Zod) des entrées · honeypot anti-spam · clés API stockées en variables d'environnement (jamais dans le code) · accès au compte Resend protégé par authentification forte [À VÉRIFIER] |

---

### Traitement n° 2 — Inscription à la newsletter

| Champ | Valeur |
|---|---|
| **Nom du traitement** | Newsletter TrueCalling |
| **Finalité** | Envoyer périodiquement (environ une fois par semaine) du contenu éditorial sur le sourcing IA, le recrutement et les méthodes des équipes Talent Acquisition aux personnes ayant exprimé leur intérêt. |
| **Base légale** | Article 6.1.a RGPD — consentement libre et explicite, recueilli via le pop-up de la page d'accueil et confirmé par double opt-in |
| **Catégories de personnes concernées** | Visiteurs du site ayant volontairement renseigné leur email |
| **Catégories de données** | Email uniquement. Métadonnées techniques d'attribution (UTM `popup_landing` / `website` / `newsletter_signup`) transmises à Beehiiv pour mesurer la performance. |
| **Données sensibles** | Aucune |
| **Destinataires** | Beehiiv (sous-traitant). Aucune diffusion ou revente à des tiers. |
| **Sous-traitants** | **Beehiiv, Inc.** (États-Unis) — plateforme de gestion d'emailing. Contrat DPA en place [À VÉRIFIER]. Encadrement transfert : DPF. |
| **Transferts hors UE** | Oui — vers Beehiiv (US). Encadrement : DPF. |
| **Durée de conservation** | Jusqu'à désinscription par la personne concernée (lien de désinscription présent dans chaque email + possibilité d'écrire à `alexandre@truecalling.ai`). |
| **Mesures de sécurité** | HTTPS · validation Zod de l'email · double opt-in · lien de désinscription en un clic · clé API Beehiiv stockée en variable d'environnement |

---

### Traitement n° 3 — Formulaire de contact

| Champ | Valeur |
|---|---|
| **Nom du traitement** | Demandes entrantes (formulaire de contact) |
| **Finalité** | Permettre aux visiteurs de poser une question, signaler un problème ou demander un contact commercial. |
| **Base légale** | Article 6.1.f RGPD — intérêt légitime (répondre aux sollicitations spontanées). En cas de demande à finalité commerciale, bascule sous Art. 6.1.b. |
| **Catégories de personnes concernées** | Visiteurs du site soumettant le formulaire de contact |
| **Catégories de données** | Nom, email, sujet (parmi une liste prédéfinie : produit / pricing / partenariat / presse / autre), message libre |
| **Données sensibles** | Aucune par construction. Le champ « message » étant libre, l'utilisateur pourrait y inscrire des données plus larges — un avertissement à éviter de partager des informations confidentielles est recommandé sur le formulaire. |
| **Destinataires** | Équipe TrueCalling |
| **Sous-traitants** | À ce jour, **aucun** — le formulaire n'est pas encore relié à un envoi serveur (mise en place en cours). Probable ajout futur de Resend (cf. traitement n° 1) ; ce registre sera mis à jour en conséquence. |
| **Transferts hors UE** | Aucun à ce jour |
| **Durée de conservation prévue (lorsque le routage sera activé)** | 3 ans à compter du dernier contact |
| **Mesures de sécurité** | Validation côté client + serveur · HTTPS · à compléter à l'activation du routage |

---

### Traitement n° 4 — Préférences techniques (cookie de langue + LocalStorage UX)

| Champ | Valeur |
|---|---|
| **Nom du traitement** | Mémorisation des préférences utilisateur |
| **Finalité** | Mémoriser entre deux visites : la langue choisie par l'utilisateur, le thème (clair / sombre), et l'affichage déjà effectué du popup newsletter (pour ne pas le réafficher). |
| **Base légale** | Article 6.1.f RGPD — intérêt légitime (cookie / stockage strictement nécessaire au fonctionnement et au confort de navigation, exempté de consentement par l'art. 82 LIL). |
| **Catégories de personnes concernées** | Tous les visiteurs |
| **Catégories de données** | Code de langue (ex. `fr`), valeur de thème (`dark` / `light`), timestamp d'affichage du popup. **Aucune donnée identifiante** (pas d'email, pas de nom, pas d'IP). |
| **Données sensibles** | Aucune |
| **Destinataires** | Stockage côté navigateur uniquement. Le cookie `NEXT_LOCALE` est lu côté serveur par le middleware Next.js pour servir la bonne langue ; il ne quitte pas notre domaine. |
| **Sous-traitants** | Aucun |
| **Transferts hors UE** | Aucun |
| **Durée de conservation** | `NEXT_LOCALE` : 1 an (renouvelé à chaque visite). `tc_newsletter_popup_shown` : 30 jours. `theme` : persistant (jusqu'à effacement par l'utilisateur). |
| **Mesures de sécurité** | Cookie `SameSite=Lax`, sans flag `Secure` en HTTP local mais transmis sur HTTPS en production. Aucune information sensible stockée. |

---

### Traitement n° 5 — Hébergement et logs serveur

| Champ | Valeur |
|---|---|
| **Nom du traitement** | Logs techniques d'accès au site |
| **Finalité** | Servir le Site (hébergement, CDN), assurer la sécurité, diagnostiquer les incidents techniques |
| **Base légale** | Article 6.1.f RGPD — intérêt légitime (fonctionnement du Site, sécurité informatique) |
| **Catégories de personnes concernées** | Tous les visiteurs |
| **Catégories de données** | Logs serveur standards : adresse IP, user-agent, URL demandée, code de réponse, horodatage, identifiant de requête. Logs applicatifs en cas d'erreur de soumission de formulaire (le contenu validé est journalisé en cas d'échec d'envoi pour ne pas perdre le lead). |
| **Données sensibles** | Aucune |
| **Destinataires** | [À CONFIRMER : Vercel Inc.] en tant qu'hébergeur ; équipe technique TrueCalling |
| **Sous-traitants** | [À CONFIRMER : Vercel, Inc.] (États-Unis) — hébergeur + CDN. Encadrement DPF. |
| **Transferts hors UE** | Oui — vers les régions de Vercel (probablement US). Encadrement : DPF. |
| **Durée de conservation** | Logs Vercel : 30 jours (paramètre par défaut, à confirmer selon le plan). Logs applicatifs : 30 jours maximum. |
| **Mesures de sécurité** | HTTPS · isolation des secrets en variables d'environnement chiffrées · accès au tableau de bord Vercel protégé par 2FA |

---

## Annexe — Sous-traitants (vue d'ensemble)

| Sous-traitant | Service | Pays | Encadrement transfert | DPA en place | URL DPA |
|---|---|---|---|---|---|
| Resend, Inc. | Email transactionnel | États-Unis | DPF | [À VÉRIFIER] | https://resend.com/legal/dpa |
| Beehiiv, Inc. | Newsletter / emailing marketing | États-Unis | DPF | [À VÉRIFIER] | https://www.beehiiv.com/dpa |
| [À CONFIRMER : Vercel, Inc.] | Hébergement + CDN | États-Unis | DPF | [À VÉRIFIER] | https://vercel.com/legal/dpa |

---

## Annexe — Décisions de mise à jour

À ajouter ici à chaque modification : date, nature de la modification, traitement concerné.

| Date | Modification | Traitement | Auteur |
|---|---|---|---|
| 2026-05-06 | Création initiale du registre suite à audit du code | Tous | Équipe TrueCalling |

---

> **Avertissement.** Le registre RPA est une obligation directe de l'article 30 du RGPD pour tout responsable de traitement (sauf exception très limitée pour les organismes de moins de 250 salariés sans traitement « régulier » ou « sensible » — exception qui ne s'applique pas ici car la prospection commerciale et l'envoi de newsletter sont des traitements réguliers). Ce document doit être tenu à jour, conservé sur demande de la CNIL, et n'est PAS publié. Il s'agit d'un document interne.
