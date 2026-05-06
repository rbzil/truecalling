"use client";

import Link from "next/link";
import { useLocalizedHref } from "../../_i18n/locale-context";
import { Navbar } from "../../../components/SiteNavbar";

/* ============================================================
   Mentions légales — TrueCalling
   Source : docs/rgpd/mentions-legales.md
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
            Mentions légales
          </h1>

          <p className="mt-3 text-[13px] text-ink-muted">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          <Prose>
            <p>
              Conformément aux dispositions des articles 6-III et 19 de la
              loi n° 2004-575 du 21 juin 2004 pour la confiance dans
              l&apos;économie numérique (« LCEN »), il est précisé aux
              utilisateurs du site <strong>truecalling.app</strong> l&apos;identité
              des différents intervenants dans le cadre de sa réalisation et
              de son suivi.
            </p>

            <h2>1. Éditeur du site</h2>
            <p>
              <strong>TRUECALLING AI</strong>
              <br />
              Corporation de droit américain enregistrée dans l&apos;État de
              Floride (États-Unis)
              <br />
              5504 North Park Rd, Fort Lauderdale, FL 33312
              <br />
              Floride, États-Unis
            </p>
            <ul>
              <li>
                <strong>EIN (Employer Identification Number)</strong> :
                39-4384470 (émis par l&apos;IRS le 16 septembre 2025)
              </li>
              <li>
                <strong>État d&apos;enregistrement</strong> : Floride
                (États-Unis)
              </li>
              <li>
                <strong>Forme</strong> : Corporation (équivalent société par
                actions, droit américain)
              </li>
              <li>
                <strong>TVA intracommunautaire</strong> : non applicable
                (entité non-européenne ; non assujettie à la TVA UE en
                l&apos;absence d&apos;établissement stable en UE)
              </li>
              <li>
                <strong>Email</strong> :{" "}
                <a href="mailto:alexandre@truecalling.ai">
                  alexandre@truecalling.ai
                </a>
              </li>
            </ul>
            <p>
              <strong>Directeur de la publication</strong> : [À confirmer —
              dirigeant légal de TRUECALLING AI]
            </p>
            <p>
              <strong>Représentant dans l&apos;Union européenne (Art. 27 RGPD)</strong>{" "}
              : TRUECALLING AI étant une entité établie hors de l&apos;Union
              européenne et offrant ses services à des résidents de l&apos;UE
              (Site disponible en 8 langues européennes), la désignation
              d&apos;un représentant dans l&apos;Union au titre de
              l&apos;article 27 RGPD est obligatoire. Cette désignation est en
              cours.
            </p>

            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <p>
              <strong>Vercel, Inc.</strong>
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789
              <br />
              United States
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu présent sur le site{" "}
              <strong>truecalling.app</strong> (textes, illustrations, logos,
              icônes, mises en page, animations, code source, marques) est la
              propriété exclusive de <strong>TRUECALLING AI</strong> ou de ses
              partenaires, et est protégé par le droit français et
              international de la propriété intellectuelle (Code de la
              propriété intellectuelle).
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation totale ou partielle des éléments du site, quel que
              soit le moyen ou le procédé utilisé, est interdite sans
              autorisation écrite préalable, sauf exception prévue par la loi
              (notamment pour la copie privée à usage strictement personnel).
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l&apos;un de ses
              éléments sera considérée comme constitutive d&apos;une
              contrefaçon et sanctionnée au titre des articles L.335-2 et
              suivants du Code de la propriété intellectuelle.
            </p>
            <p>
              <strong>Marques citées</strong> : « TrueCalling », « EMILY » et
              « TrueFit 360 » sont des marques de TRUECALLING AI. Les autres
              marques citées sur le site (LinkedIn, GitHub, WhatsApp, Workday,
              Greenhouse, SAP SuccessFactors, etc.) appartiennent à leurs
              propriétaires respectifs et sont citées à titre informatif
              uniquement.
            </p>

            <h2>4. Limitation de responsabilité</h2>
            <p>
              L&apos;éditeur s&apos;efforce d&apos;assurer au mieux de ses
              possibilités l&apos;exactitude et la mise à jour des
              informations diffusées sur le site. Cependant, l&apos;éditeur ne
              peut garantir l&apos;exactitude, la précision ou
              l&apos;exhaustivité de l&apos;information mise à disposition sur
              le site.
            </p>
            <p>
              Les statistiques et chiffres cités sur le site (notamment dans
              le pop-up newsletter et les articles de blog) sont issus de
              sources publiques (études Collock × Manpower × HR Voice,
              TalentProgram, ACAVI, Welcome to the Jungle, Factorial, Berthois
              Conseils). Ces chiffres reflètent l&apos;état des connaissances
              à la date de publication et peuvent évoluer.
            </p>
            <p>
              L&apos;éditeur décline toute responsabilité :
            </p>
            <ul>
              <li>
                pour toute imprécision, inexactitude ou omission portant sur
                des informations disponibles sur le site
              </li>
              <li>
                pour tous dommages résultant d&apos;une intrusion frauduleuse
                d&apos;un tiers ayant entraîné une modification des
                informations
              </li>
              <li>
                et plus généralement, pour tout dommage, direct ou indirect,
                quelles qu&apos;en soient les causes, origines, natures ou
                conséquences
              </li>
            </ul>
            <p>
              Les liens hypertextes mis en place dans le cadre du site en
              direction d&apos;autres ressources présentes sur le réseau
              Internet ne sauraient engager la responsabilité de
              l&apos;éditeur.
            </p>

            <h2>5. Documents associés</h2>
            <ul>
              <li>
                <Link href={href("terms")}>
                  Conditions Générales d&apos;Utilisation (CGU)
                </Link>
              </li>
              <li>
                <Link href={href("privacy")}>
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href={href("cookies")}>Politique de cookies</Link>
              </li>
            </ul>

            <h2>6. Droit applicable et juridiction</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, et après tentative de résolution amiable, les
              tribunaux français seront seuls compétents.
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
    <div className="prose prose-invert prose-pink mt-10 max-w-none prose-p:text-ink-muted prose-p:leading-relaxed prose-headings:text-ink prose-headings:tracking-tight prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-strong:text-ink prose-li:text-ink-muted prose-li:my-1 prose-ul:my-5 prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
      {children}
    </div>
  );
}
