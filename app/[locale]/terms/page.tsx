import type { Metadata } from "next";
import Link from "next/link";
import { type Locale, locales } from "@/lib/i18n-config";
import { buildAlternates, OG_IMAGES } from "@/lib/seo-metadata";
import { getSeoMeta } from "@/lib/seo-translations";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) return {};

  const { title, description } = getSeoMeta("terms", locale);
  const alternates = buildAlternates("terms", locale);

  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "website",
      title,
      description,
      url: alternates.canonical as string,
      locale: locale.replace("-", "_"),
      siteName: "TrueCalling",
      images: [...OG_IMAGES],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGES[0].url] },
    robots: { index: true, follow: true },
  };
}

const SECTIONS: { id: string; n: string; title: string }[] = [
  { id: "positioning", n: "0", title: "Énoncé de positionnement" },
  { id: "objet", n: "1", title: "Objet" },
  { id: "definitions", n: "2", title: "Définitions" },
  { id: "licence", n: "3", title: "Licence & Accès" },
  { id: "services", n: "4", title: "Description des Services" },
  { id: "rgpd", n: "5", title: "Protection des Données (RGPD)" },
  { id: "ia-compliance", n: "6", title: "Conformité IA" },
  { id: "usage", n: "7", title: "Usage acceptable & Éthique" },
  { id: "securite", n: "8", title: "Sécurité" },
  { id: "ip", n: "9", title: "Propriété Intellectuelle" },
  { id: "tarifs", n: "10", title: "Tarifs & Paiement" },
  { id: "garanties", n: "11", title: "Exclusion de garanties" },
  { id: "responsabilite", n: "12", title: "Limitation de responsabilité" },
  { id: "indemnisation", n: "13", title: "Indemnisation" },
  { id: "sla", n: "14", title: "Disponibilité du Service (SLA)" },
  { id: "resiliation", n: "15", title: "Suspension & Résiliation" },
  { id: "cession", n: "16", title: "Cession" },
  { id: "force-majeure", n: "17", title: "Force majeure" },
  { id: "droit-applicable", n: "18", title: "Droit applicable" },
  { id: "modifications", n: "19", title: "Modifications des CGU" },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <SiteNav />

      <article className="relative px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-ink/[0.08] bg-surface/30 p-5 backdrop-blur-md">
                <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-accent">
                  Sommaire
                </div>
                <ol className="space-y-1.5 text-[12.5px]">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex gap-2 text-ink-muted transition-colors hover:text-ink cursor-pointer"
                      >
                        <span className="w-5 shrink-0 tabular-nums text-ink-muted/60">{s.n}</span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted transition-colors hover:text-ink cursor-pointer"
            >
              <ArrowLeft /> Accueil
            </Link>

            <header className="mt-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
                Mentions légales
              </span>
              <h1
                className="mt-5 text-balance font-semibold leading-[1.05] tracking-tighter2"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Conditions Générales d'Utilisation
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                Les présentes CGU régissent l'accès et l'utilisation de la plateforme
                TrueCalling.ai par tous ses Clients et Utilisateurs.
              </p>
              <p className="mt-2 text-[13px] text-ink-muted/70">
                Dernière mise à jour : 30 avril 2026
              </p>
            </header>

            <div className="mt-10 space-y-12">
              <Section id="positioning" n="0" title="Énoncé de positionnement">
                <p>
                  TrueCalling fournit des outils d'aide à la décision conçus pour révéler le
                  potentiel des talents, <strong>sans jamais remplacer le jugement humain</strong>.
                </p>
              </Section>

              <Section id="objet" n="1" title="Objet">
                <p>
                  Les présentes Conditions Générales d'Utilisation (« <strong>CGU</strong> »)
                  régissent l'accès et l'utilisation de la plateforme TrueCalling.ai (la
                  « Plateforme »), une solution SaaS de <em>talent intelligence</em> permettant
                  l'identification, l'évaluation et le matching de profils professionnels. En
                  accédant à la Plateforme ou en l'utilisant, le Client accepte d'être lié par
                  les présentes CGU.
                </p>
              </Section>

              <Section id="definitions" n="2" title="Définitions">
                <ul>
                  <li><strong>Client</strong> : entité souscrivant aux Services.</li>
                  <li><strong>Utilisateur</strong> : personne autorisée accédant à la Plateforme.</li>
                  <li><strong>Candidat</strong> : personne évaluée ou analysée.</li>
                  <li>
                    <strong>Données personnelles</strong> : toute information relative à une
                    personne identifiable.
                  </li>
                  <li>
                    <strong>Traitement</strong> : toute opération effectuée sur les Données
                    personnelles.
                  </li>
                </ul>
              </Section>

              <Section id="licence" n="3" title="Licence & Accès">
                <p>
                  TrueCalling concède une licence <strong>limitée, non exclusive, non
                  transférable et révocable</strong>, pour un usage interne professionnel
                  uniquement.
                </p>
                <p className="mt-3 font-medium text-ink">Usages interdits — Le Client ne peut pas :</p>
                <ul>
                  <li>Revendre, sous-licencier ou distribuer la Plateforme.</li>
                  <li>
                    Procéder à de l'ingénierie inverse, décompiler ou tenter d'extraire le code
                    source.
                  </li>
                  <li>Effectuer du scraping automatisé ou de l'extraction massive de données.</li>
                  <li>Utiliser la Plateforme pour construire ou entraîner des systèmes concurrents.</li>
                  <li>Détourner des sources de données tierces.</li>
                </ul>
              </Section>

              <Section id="services" n="4" title="Description des Services">
                <p>La Plateforme fournit :</p>
                <ul>
                  <li>L'identification et l'enrichissement de talents.</li>
                  <li>
                    Le scoring de candidats (compétences, motivation, résilience, alignement
                    culturel).
                  </li>
                  <li>Le matching avec des postes.</li>
                  <li>Des recommandations propulsées par IA.</li>
                </ul>
                <Callout title="Clause de non-automatisation des décisions">
                  La Plateforme fournit uniquement des outputs d'aide à la décision. TrueCalling
                  ne prend aucune décision d'embauche, ne garantit aucun résultat et ne remplace
                  pas l'évaluation humaine.
                </Callout>
              </Section>

              <Section id="rgpd" n="5" title="Protection des Données (conforme RGPD)">
                <h3>5.1 Rôles</h3>
                <p>
                  <strong>Client</strong> = Responsable de traitement | <strong>TrueCalling</strong>{" "}
                  = Sous-traitant.
                </p>
                <h3>5.2 Engagements de TrueCalling</h3>
                <ul>
                  <li>Traiter les données uniquement sur instructions documentées.</li>
                  <li>
                    Mettre en œuvre des mesures techniques et organisationnelles appropriées.
                  </li>
                  <li>Garantir la confidentialité et l'intégrité.</li>
                  <li>Notifier les violations de données sans délai indu.</li>
                </ul>
                <h3>5.3 Responsabilités du Client</h3>
                <ul>
                  <li>Garantir une base légale pour le traitement.</li>
                  <li>Informer les Candidats.</li>
                  <li>Se conformer aux lois applicables en matière de protection des données.</li>
                </ul>
                <h3>5.4 Droits des personnes concernées</h3>
                <p>
                  Les Candidats peuvent exercer leurs droits d'accès, de rectification,
                  d'effacement, d'opposition et de portabilité.{" "}
                  <a
                    href="mailto:privacy@truecalling.ai"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    privacy@truecalling.ai
                  </a>
                  .
                </p>
                <h3>5.5 Conservation des données</h3>
                <p>
                  Les données sont conservées uniquement le temps nécessaire ou requis par la loi.
                </p>
              </Section>

              <Section id="ia-compliance" n="6" title="Conformité IA (gouvernance IA)">
                <p>TrueCalling met en œuvre les principes d'IA responsable :</p>
                <ul>
                  <li>Transparence de la finalité du système.</li>
                  <li>Documentation des modèles.</li>
                  <li>Efforts de mitigation des biais.</li>
                  <li>Supervision humaine.</li>
                  <li>Traçabilité des outputs.</li>
                </ul>
                <p className="mt-3 font-medium text-ink">Limites :</p>
                <ul>
                  <li>Pas de prise de décision entièrement automatisée.</li>
                  <li>Pas de design discriminatoire intentionnel.</li>
                </ul>
              </Section>

              <Section id="usage" n="7" title="Usage acceptable & Éthique">
                <p>Le Client s'engage à ne pas :</p>
                <ul>
                  <li>Utiliser la Plateforme à des fins illégales ou discriminatoires.</li>
                  <li>Violer les lois applicables en matière de droit du travail.</li>
                  <li>Détourner les données candidats.</li>
                </ul>
              </Section>

              <Section id="securite" n="8" title="Sécurité">
                <p>TrueCalling maintient :</p>
                <ul>
                  <li>Chiffrement en transit et au repos.</li>
                  <li>Mécanismes de contrôle d'accès.</li>
                  <li>Journalisation et monitoring.</li>
                  <li>Audits de sécurité périodiques.</li>
                </ul>
              </Section>

              <Section id="ip" n="9" title="Propriété Intellectuelle">
                <p>
                  Tous les droits, titres et intérêts relatifs à la Plateforme demeurent la
                  propriété exclusive de TrueCalling. Aucun droit de propriété n'est transféré au
                  Client.
                </p>
              </Section>

              <Section id="tarifs" n="10" title="Tarifs & Paiement">
                <p>
                  Les Services sont facturés via des abonnements et une tarification basée sur
                  l'usage.
                </p>
                <p className="mt-3 font-medium text-ink">Conditions de paiement :</p>
                <ul>
                  <li>Factures payables selon les délais convenus.</li>
                  <li>Les retards de paiement peuvent entraîner une suspension.</li>
                  <li>Les frais ne sont pas remboursables sauf disposition contraire.</li>
                </ul>
              </Section>

              <Section id="garanties" n="11" title="Exclusion de garanties">
                <p className="uppercase">
                  La Plateforme est fournie « en l'état » et « selon disponibilité ». TrueCalling
                  exclut toute garantie, y compris de qualité marchande, d'adéquation à un usage
                  particulier et de non-contrefaçon.
                </p>
              </Section>

              <Section id="responsabilite" n="12" title="Limitation de responsabilité">
                <p>Dans la mesure maximale permise par la loi :</p>
                <ul>
                  <li>
                    TrueCalling ne saurait être tenue responsable des dommages indirects,
                    accessoires ou consécutifs.
                  </li>
                  <li>
                    La responsabilité totale ne pourra excéder les frais payés au cours des
                    12 mois précédents.
                  </li>
                </ul>
              </Section>

              <Section id="indemnisation" n="13" title="Indemnisation">
                <p>
                  Le Client accepte d'indemniser et de tenir TrueCalling à l'abri de toute
                  réclamation découlant d'un usage abusif de la Plateforme, d'un traitement
                  illégal de données ou d'une violation des lois applicables.
                </p>
              </Section>

              <Section id="sla" n="14" title="Disponibilité du Service (SLA)">
                <ul>
                  <li>Cible de disponibilité : <strong>99,9 %</strong>.</li>
                  <li>Des fenêtres de maintenance peuvent intervenir.</li>
                  <li>Aucune garantie de service ininterrompu.</li>
                </ul>
              </Section>

              <Section id="resiliation" n="15" title="Suspension & Résiliation">
                <p>
                  TrueCalling peut suspendre ou résilier l'accès en cas de violation des CGU, de
                  non-paiement ou de risque pour la sécurité ou la légalité.
                </p>
              </Section>

              <Section id="cession" n="16" title="Cession">
                <p>
                  Le Client ne peut pas céder les présentes CGU sans consentement écrit
                  préalable. TrueCalling peut céder librement en cas de fusion, acquisition ou
                  restructuration.
                </p>
              </Section>

              <Section id="force-majeure" n="17" title="Force majeure">
                <p>
                  Aucune partie ne saurait être tenue responsable d'un manquement causé par des
                  événements échappant à son contrôle raisonnable.
                </p>
              </Section>

              <Section id="droit-applicable" n="18" title="Droit applicable">
                <p>Les présentes CGU sont régies par les lois des États-Unis.</p>
              </Section>

              <Section id="modifications" n="19" title="Modifications des CGU">
                <p>
                  TrueCalling peut mettre à jour les présentes CGU à tout moment. La poursuite
                  de l'utilisation vaut acceptation.
                </p>
                <p className="mt-3 italic text-ink-muted">
                  TrueCalling fournit uniquement des outils d'aide à la décision. Toutes les
                  décisions d'embauche relèvent de la seule responsabilité du Client.
                </p>
              </Section>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/[0.06] bg-ink/[0.02] p-6 backdrop-blur-md">
              <div className="flex-1">
                <div className="text-[14px] font-semibold text-ink">Une question juridique ?</div>
                <p className="mt-1 text-[13px] text-ink-muted">
                  Pour toute demande relative aux CGU, à la confidentialité ou à la conformité,
                  écrivez à{" "}
                  <a
                    href="mailto:legal@truecalling.ai"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    legal@truecalling.ai
                  </a>
                  .
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/15 bg-ink/[0.04] px-4 text-[13px] font-medium text-ink transition-colors hover:bg-ink/[0.08] cursor-pointer"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-baseline gap-3">
        <span className="text-[12px] font-bold tabular-nums text-accent">{n}</span>
        <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h2>
      </div>
      <div className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-ink-muted [&_h3]:mt-5 [&_h3]:text-[14px] [&_h3]:font-semibold [&_h3]:text-ink [&_strong]:text-ink [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-accent/30 bg-accent/[0.06] p-4">
      <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
        {title}
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink/90">{children}</p>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-20 top-[5%] size-[55vw] max-w-[700px] rounded-full bg-accent/30 blur-[60px] sm:blur-[120px] animate-blob-1" />
      <div className="absolute right-[-5%] top-[35%] size-[50vw] max-w-[640px] rounded-full bg-surface/80 blur-[60px] sm:blur-[130px] animate-blob-2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgb(var(--bg))_85%)]" />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="relative z-10 flex h-16 items-center justify-between px-5 sm:px-8">
      <Link href="/" aria-label="Retour à l'accueil" className="cursor-pointer">
        <Logo />
      </Link>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink cursor-pointer"
      >
        <ArrowLeft /> Accueil
      </Link>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#E91E8C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 22 C 3.5 11, 8 4, 16 4 C 24 4, 28.5 11, 28.5 22" />
        <path d="M6.5 24 C 6.5 13, 10 7, 16 7 C 22 7, 25.5 13, 25.5 24" />
        <path d="M9.5 26 C 9.5 15, 12 10, 16 10 C 20 10, 22.5 15, 22.5 26" />
        <path d="M12.5 27 C 12.5 17, 14 13, 16 13 C 18 13, 19.5 17, 19.5 27" />
        <path d="M16.5 27 L 16.5 19 C 16.5 17, 14.8 16, 13.7 17 C 12.6 18, 13 20, 14.5 20 L 16 20" />
      </svg>
      <span className="text-[16px] font-bold uppercase tracking-[0.04em] text-ink">
        TrueCalling
      </span>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/* Footer is mounted globally in app/[locale]/layout.tsx */
