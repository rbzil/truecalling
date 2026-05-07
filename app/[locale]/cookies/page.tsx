"use client";

import Link from "next/link";
import { useLocalizedHref } from "../../_i18n/locale-context";
import { Navbar } from "../../../components/SiteNavbar";

/* ============================================================
   Politique de cookies — TrueCalling
   Source : docs/rgpd/politique-cookies.md
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
            Politique de cookies
          </h1>

          <p className="mt-3 text-[13px] text-ink-muted">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          <Prose>
            <p>
              Cette politique décrit l&apos;utilisation de cookies et de
              technologies équivalentes (LocalStorage) sur le site{" "}
              <strong>truecalling.ai</strong>.
            </p>

            <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé par un site web sur
              votre navigateur. Il permet au site de mémoriser une information
              entre deux visites (par exemple votre préférence de langue) ou
              pendant la durée d&apos;une session.
            </p>
            <p>
              Le <strong>LocalStorage</strong> est une technologie similaire en
              termes d&apos;objectif (stocker une donnée côté navigateur) mais
              qui n&apos;est pas envoyée au serveur à chaque requête. Il est
              soumis aux mêmes règles que les cookies en matière de
              consentement (article 82 de la loi Informatique et Libertés).
            </p>

            <h2>2. Cookies et stockages utilisés sur ce Site</h2>
            <p>
              Le site <strong>TrueCalling</strong> utilise uniquement des
              éléments <strong>strictement nécessaires au fonctionnement du Site</strong>.
              À ce titre, et conformément à l&apos;exemption prévue à
              l&apos;article 82 de la loi Informatique et Libertés,{" "}
              <strong>aucun consentement préalable n&apos;est requis</strong>.
              Aucun bandeau de consentement n&apos;est donc affiché.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Type</th>
                  <th>Durée</th>
                  <th>Finalité</th>
                  <th>Tiers ?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>NEXT_LOCALE</code>
                  </td>
                  <td>Cookie</td>
                  <td>1 an</td>
                  <td>Mémoriser la langue choisie via le sélecteur de langue (FR, EN, HE, ES, DE, IT, NL, PT-BR)</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>
                    <code>tc_newsletter_popup_shown</code>
                  </td>
                  <td>LocalStorage</td>
                  <td>30 jours</td>
                  <td>Éviter de réafficher le popup d&apos;inscription à la newsletter à un visiteur qui l&apos;a déjà vu</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>
                    <code>theme</code>
                  </td>
                  <td>LocalStorage</td>
                  <td>Persistant</td>
                  <td>Mémoriser le thème clair / sombre choisi</td>
                  <td>Non</td>
                </tr>
              </tbody>
            </table>

            <h2>3. Ce que ce Site n&apos;utilise PAS</h2>
            <p>Pour clarifier ce qui n&apos;est pas présent :</p>
            <ul>
              <li>
                Pas de Google Analytics, Plausible, Matomo ni autre outil de
                mesure d&apos;audience
              </li>
              <li>
                Pas de Hotjar, Microsoft Clarity, FullStory ni outil de
                session replay / heatmap
              </li>
              <li>
                Pas de Pixel Meta, LinkedIn Insight Tag, TikTok Pixel ni
                traceur publicitaire
              </li>
              <li>Pas de Google Tag Manager</li>
              <li>Pas de chat tiers (Intercom, Crisp, Drift…)</li>
              <li>
                Pas de captcha tiers (reCAPTCHA, hCaptcha) — la protection
                anti-spam est assurée par un champ honeypot interne
              </li>
              <li>Pas de cookies tiers</li>
              <li>
                Pas de polices Google chargées via CDN — les polices Inter,
                Instrument Serif et Frank Ruhl Libre sont auto-hébergées via{" "}
                <code>next/font/google</code> (le compilateur Next.js
                télécharge les fichiers de police au build et les sert depuis
                notre propre domaine ; aucune adresse IP de visiteur
                n&apos;est transmise à Google)
              </li>
            </ul>
            <p>
              Si l&apos;un de ces outils était ajouté à l&apos;avenir, cette
              politique serait mise à jour et, le cas échéant, un bandeau de
              consentement serait mis en place.
            </p>

            <h2>4. Comment refuser ou supprimer ces stockages</h2>
            <p>
              Bien que les éléments listés soient strictement nécessaires,
              vous pouvez à tout moment :
            </p>
            <ul>
              <li>
                <strong>Refuser tous les cookies</strong> dans les paramètres
                de votre navigateur (Chrome, Firefox, Safari, Edge…). Cela
                peut empêcher la mémorisation de votre langue préférée et de
                votre thème.
              </li>
              <li>
                <strong>Supprimer le LocalStorage</strong> via les outils
                développeur de votre navigateur (onglet « Application » ou
                « Stockage »).
              </li>
            </ul>
            <p>Liens utiles vers les paramètres :</p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edge
                </a>
              </li>
            </ul>

            <h2>5. Documents associés</h2>
            <ul>
              <li>
                <Link href={href("privacy")}>Politique de confidentialité</Link>
              </li>
              <li>
                <Link href={href("legal-notice")}>Mentions légales</Link>
              </li>
              <li>
                <Link href={href("terms")}>
                  Conditions Générales d&apos;Utilisation
                </Link>
              </li>
            </ul>

            <h2>6. Modification de la politique</h2>
            <p>
              Cette politique sera mise à jour si de nouveaux cookies ou
              outils de suivi sont ajoutés au Site. La date en tête de
              document indique la dernière mise à jour.
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
