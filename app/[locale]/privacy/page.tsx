"use client";

import Link from "next/link";
import { useLocalizedHref } from "../../_i18n/locale-context";
import { Navbar } from "../../../components/SiteNavbar";

/* ============================================================
   Politique de confidentialité — TrueCalling
   Source : docs/rgpd/politique-confidentialite.md
   Tenue à jour : toute modification doit être répercutée dans
   le fichier source markdown ET dans cette page.
   ============================================================ */

const LAST_UPDATED = "6 mai 2026";

export default function Page() {
  const href = useLocalizedHref();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <Navbar />

      <article
        lang="fr"
        className="relative px-5 pb-20 pt-28 sm:px-8 sm:pt-32"
      >
        <div className="mx-auto max-w-3xl">
          <Link
            href={href("home")}
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted transition-colors hover:text-ink cursor-pointer"
          >
            ← Retour à l&apos;accueil
          </Link>

          <h1
            className="mt-7 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Politique de confidentialité
          </h1>

          <p className="mt-3 text-[13px] text-ink-muted">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          <Prose>
            <p>
              La présente politique décrit comment <strong>TrueCalling</strong>{" "}
              (« nous », « nos », « notre ») collecte, utilise et protège les
              données personnelles des visiteurs et prospects sur le site{" "}
              <strong>truecalling.app</strong> (le « Site »). Elle est rédigée
              conformément au Règlement (UE) 2016/679 (« RGPD ») et à la loi
              française n° 78-17 du 6 janvier 1978 modifiée (« Loi Informatique
              et Libertés »).
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement au sens de l&apos;article 4.7 RGPD
              est :
            </p>
            <p>
              <strong>TRUECALLING AI</strong>
              <br />
              Corporation (Florida, États-Unis)
              <br />
              5504 North Park Rd, Fort Lauderdale, FL 33312, États-Unis
              <br />
              EIN (Employer Identification Number) : 39-4384470 — émis le 16
              septembre 2025 par l&apos;IRS
              <br />
              Contact :{" "}
              <a href="mailto:alexandre@truecalling.ai">
                alexandre@truecalling.ai
              </a>
            </p>
            <p>
              <strong>Délégué à la protection des données (DPO)</strong> : non
              désigné. La désignation d&apos;un DPO n&apos;est pas obligatoire
              pour le traitement actuel (pas de traitement à grande échelle,
              pas de données sensibles au sens de l&apos;article 9 RGPD, pas
              de surveillance systématique). Pour toute question relative à
              vos données, écrivez-nous à{" "}
              <a href="mailto:alexandre@truecalling.ai">
                alexandre@truecalling.ai
              </a>
              .
            </p>
            <p>
              <strong>Représentant dans l&apos;Union européenne (Art. 27 RGPD)</strong>{" "}
              : TRUECALLING AI étant établie aux États-Unis et offrant ses
              services à des résidents de l&apos;Union européenne via ce Site
              (proposé en 8 langues européennes), l&apos;article 27 RGPD impose
              la désignation d&apos;un représentant dans l&apos;Union. Cette
              désignation est en cours. En attendant cette désignation
              formelle, vous pouvez exercer tous vos droits RGPD directement
              auprès de TRUECALLING AI à{" "}
              <a href="mailto:alexandre@truecalling.ai">
                alexandre@truecalling.ai
              </a>
              .
            </p>

            <h2>2. Vue d&apos;ensemble des traitements</h2>
            <table>
              <thead>
                <tr>
                  <th>Traitement</th>
                  <th>Finalité</th>
                  <th>Base légale</th>
                  <th>Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Réservation de démo</td>
                  <td>Organiser un échange commercial</td>
                  <td>Mesures précontractuelles (Art. 6.1.b)</td>
                  <td>3 ans</td>
                </tr>
                <tr>
                  <td>Newsletter</td>
                  <td>Envoyer du contenu sur le sourcing IA</td>
                  <td>Consentement (Art. 6.1.a)</td>
                  <td>Jusqu&apos;à désinscription</td>
                </tr>
                <tr>
                  <td>Formulaire de contact</td>
                  <td>Répondre aux demandes entrantes</td>
                  <td>Intérêt légitime (Art. 6.1.f)</td>
                  <td>3 ans</td>
                </tr>
                <tr>
                  <td>Préférences techniques</td>
                  <td>Mémoriser langue / thème / popup</td>
                  <td>Intérêt légitime (cookie technique)</td>
                  <td>Voir politique cookies</td>
                </tr>
              </tbody>
            </table>

            <h2>3. Détail des traitements</h2>

            <h3>3.1 Réservation de démo</h3>
            <p>
              <strong>Page concernée</strong> : <code>/reserver-une-demo</code>{" "}
              et ses équivalents localisés.
            </p>
            <p>
              <strong>Données collectées</strong> : prénom et nom
              (obligatoires), email professionnel (obligatoire), téléphone
              (facultatif), fonction / poste (facultatif), nom de
              l&apos;entreprise (obligatoire), taille de l&apos;équipe
              recrutement (obligatoire), nombre de recrutements par an
              (obligatoire), calendrier souhaité (obligatoire), message libre
              (facultatif, 2000 caractères maximum), locale d&apos;origine
              (technique).
            </p>
            <p>
              <strong>Finalité</strong> : organiser une démonstration commerciale
              du produit à votre demande, vous recontacter, et vous envoyer
              une confirmation.
            </p>
            <p>
              <strong>Base légale</strong> : exécution de mesures
              précontractuelles prises à votre demande (article 6.1.b RGPD).
            </p>
            <p>
              <strong>Sous-traitant</strong> : Resend, Inc. (États-Unis) —
              fournisseur d&apos;email transactionnel. Transfert encadré par
              le Data Privacy Framework UE — États-Unis (DPF).
            </p>
            <p>
              <strong>Durée de conservation</strong> : 3 ans à compter de
              notre dernier contact, conformément à la durée de prospection
              commerciale recommandée par la CNIL.
            </p>

            <h3>3.2 Inscription à la newsletter</h3>
            <p>
              <strong>Données collectées</strong> : adresse email uniquement.
            </p>
            <p>
              <strong>Finalité</strong> : vous envoyer périodiquement (environ
              une fois par semaine) du contenu éditorial sur le sourcing IA.
            </p>
            <p>
              <strong>Base légale</strong> : votre consentement libre et
              explicite (article 6.1.a RGPD), confirmé par double opt-in.
            </p>
            <p>
              <strong>Sous-traitant</strong> : Beehiiv, Inc. (États-Unis).
              Transfert encadré par le DPF.
            </p>
            <p>
              <strong>Durée de conservation</strong> : jusqu&apos;à votre
              désinscription. Lien de désinscription dans chaque email.
            </p>

            <h3>3.3 Formulaire de contact</h3>
            <p>
              <strong>Données collectées</strong> : nom, email, sujet, message
              libre.
            </p>
            <p>
              <strong>Base légale</strong> : intérêt légitime (article 6.1.f
              RGPD).
            </p>
            <p>
              <strong>Note</strong> : à la date de la présente politique, le
              formulaire de contact n&apos;est pas encore relié à un envoi
              réel d&apos;email côté serveur (mise en place en cours). Cette
              politique sera mise à jour dès que le routage sera activé.
            </p>

            <h3>3.4 Cookies et stockage local</h3>
            <p>
              Voir la{" "}
              <Link href={href("cookies")} className="underline">
                politique de cookies dédiée
              </Link>
              . En résumé, le site n&apos;utilise aucun traceur publicitaire
              ni outil de mesure d&apos;audience tiers.
            </p>

            <h2 id="rgpd">4. Vos droits RGPD</h2>
            <p>
              Conformément aux articles 15 à 22 du RGPD, vous disposez à tout
              moment des droits suivants :
            </p>
            <ul>
              <li>
                <strong>Droit d&apos;accès</strong> (Art. 15) : obtenir une
                copie des données vous concernant.
              </li>
              <li>
                <strong>Droit de rectification</strong> (Art. 16) : corriger
                une donnée inexacte ou incomplète.
              </li>
              <li>
                <strong>Droit à l&apos;effacement</strong> (Art. 17) : demander
                la suppression de vos données.
              </li>
              <li>
                <strong>Droit à la limitation du traitement</strong> (Art. 18).
              </li>
              <li>
                <strong>Droit à la portabilité</strong> (Art. 20) : recevoir
                vos données dans un format structuré et lisible par machine.
              </li>
              <li>
                <strong>Droit d&apos;opposition</strong> (Art. 21) à un
                traitement fondé sur l&apos;intérêt légitime.
              </li>
              <li>
                <strong>Droit de retirer votre consentement</strong> à tout
                moment.
              </li>
            </ul>
            <p>
              <strong>Comment exercer ces droits ?</strong> Écrivez-nous à{" "}
              <a href="mailto:alexandre@truecalling.ai">
                alexandre@truecalling.ai
              </a>{" "}
              en précisant le droit que vous souhaitez exercer. Nous répondrons
              dans un délai d&apos;un mois (article 12.3 RGPD), prolongeable
              de deux mois pour les demandes complexes.
            </p>
            <p>
              <strong>Réclamation auprès de la CNIL</strong> : si vous estimez
              que vos droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission Nationale de l&apos;Informatique et des Libertés
                (CNIL)
              </a>{" "}
              — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
            </p>

            <h2>5. Sécurité</h2>
            <ul>
              <li>Chiffrement HTTPS / TLS sur l&apos;ensemble du Site</li>
              <li>Chiffrement au repos chez nos sous-traitants</li>
              <li>Contrôle d&apos;accès strict aux comptes administrateurs</li>
              <li>Champs anti-spam (honeypot) sur les formulaires</li>
              <li>Validation côté serveur de toutes les entrées (Zod)</li>
              <li>
                Stockage des secrets (clés d&apos;API) en variables
                d&apos;environnement chiffrées
              </li>
            </ul>

            <h2>6. Transferts hors Union européenne</h2>
            <p>
              Certains de nos sous-traitants sont établis aux États-Unis :
            </p>
            <ul>
              <li>
                <strong>Resend, Inc.</strong> — Data Privacy Framework UE —
                États-Unis (DPF)
              </li>
              <li>
                <strong>Beehiiv, Inc.</strong> — DPF
              </li>
              <li>
                <strong>Vercel, Inc.</strong> (hébergement) — DPF
              </li>
            </ul>
            <p>
              Ces transferts sont autorisés par la décision d&apos;adéquation
              de la Commission européenne du 10 juillet 2023 relative au DPF.
              Vérification possible sur{" "}
              <a
                href="https://www.dataprivacyframework.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                dataprivacyframework.gov
              </a>
              .
            </p>

            <h2>7. Modification de la politique</h2>
            <p>
              Nous pouvons être amenés à modifier cette politique pour
              refléter une évolution du Site. La date en tête de document
              indique la dernière mise à jour. Pour toute modification
              substantielle, nous prendrons des mesures raisonnables pour vous
              en informer.
            </p>
          </Prose>
        </div>
      </article>
    </main>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-20 top-[5%] size-[55vw] max-w-[700px] rounded-full bg-accent/20 blur-[60px] sm:blur-[120px]" />
      <div className="absolute right-[-5%] top-[35%] size-[50vw] max-w-[640px] rounded-full bg-surface/60 blur-[60px] sm:blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgb(var(--bg))_85%)]" />
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-invert prose-pink mt-10 max-w-none prose-p:text-ink-muted prose-p:leading-relaxed prose-headings:text-ink prose-headings:tracking-tight prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-strong:text-ink prose-li:text-ink-muted prose-li:my-1 prose-ul:my-5 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:bg-surface/60 prose-th:text-ink prose-th:font-semibold prose-th:px-3 prose-th:py-2 prose-th:text-left prose-td:px-3 prose-td:py-2 prose-td:text-ink-muted prose-td:border-ink/[0.06] prose-tr:border-ink/[0.06] prose-code:text-accent prose-code:bg-ink/[0.04] prose-code:px-1 prose-code:rounded">
      {children}
    </div>
  );
}
