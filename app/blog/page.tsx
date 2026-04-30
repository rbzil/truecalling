import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./_lib/articles";

export const metadata: Metadata = {
  title: "Blog · TrueCalling",
  description:
    "Sourcing IA, recrutement WhatsApp, time-to-hire, copilote IA — guides et analyses pour les équipes Talent Acquisition modernes.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog · TrueCalling",
    description:
      "Sourcing IA, recrutement WhatsApp, time-to-hire — guides pour les recruteurs.",
    url: "https://truecalling.app/blog",
    locale: "fr_FR",
  },
};

const CATEGORIES = ["Tous", "Sourcing IA", "Outreach", "Comparatifs", "Méthodologie"] as const;

export default function Page() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <SiteNav />
      <Hero />
      <FeaturedArticle article={featured} />
      <ArticleGrid articles={rest} />
      <Footer />
    </main>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-20 top-[5%] size-[55vw] max-w-[700px] rounded-full bg-accent/30 blur-[60px] sm:blur-[120px] animate-blob-1" />
      <div className="absolute right-[-5%] top-[35%] size-[50vw] max-w-[640px] rounded-full bg-surface/80 blur-[60px] sm:blur-[130px] animate-blob-2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,#0A1628_85%)]" />
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
        <ArrowLeft /> Retour
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

function Hero() {
  return (
    <section className="relative px-5 pt-10 sm:px-8 sm:pt-16">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
          Blog TrueCalling
        </span>
        <h1
          className="mx-auto mt-5 max-w-3xl text-balance font-semibold leading-[1.05] tracking-tighter2"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
        >
          Le{" "}
          <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
            sourcing IA
          </span>
          , décrypté.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Guides, méthodes et analyses pour les équipes Talent Acquisition qui veulent recruter
          plus vite, sans perdre la main sur la qualité.
        </p>
      </div>
    </section>
  );
}

function FeaturedArticle({ article }: { article: typeof articles[number] }) {
  return (
    <section className="relative px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href={`/blog/${article.slug}`}
          className="group block overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md transition-all hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(233,30,140,0.35),0_30px_80px_-30px_rgba(233,30,140,0.4)] sm:p-10 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-accent">
              À la une
            </span>
            <span className="text-[11.5px] uppercase tracking-[0.16em] text-ink-muted">
              {article.category}
            </span>
            <span className="text-ink-muted/40">·</span>
            <time className="text-[11.5px] text-ink-muted">{formatDate(article.publishedAt)}</time>
            <span className="text-ink-muted/40">·</span>
            <span className="text-[11.5px] text-ink-muted">{article.readingMinutes} min</span>
          </div>
          <h2
            className="mt-5 max-w-3xl text-balance font-semibold leading-[1.1] tracking-tighter2 transition-colors group-hover:text-accent"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            {article.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {article.excerpt}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-accent">
            Lire l'article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}

function ArticleGrid({ articles }: { articles: typeof import("./_lib/articles").articles }) {
  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tous les articles</h2>
          <span className="text-[13px] text-ink-muted">{articles.length + 1} articles</span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: typeof articles[number] }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-surface/30 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(233,30,140,0.25),0_20px_50px_-20px_rgba(233,30,140,0.3)] cursor-pointer"
    >
      <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
        <span className="rounded-full bg-accent/10 px-2 py-0.5 font-semibold text-accent">
          {article.category}
        </span>
        <span>·</span>
        <time>{formatDate(article.publishedAt)}</time>
      </div>
      <h3 className="mt-4 text-[17px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
        {article.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-[13.5px] leading-relaxed text-ink-muted">
        {article.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 text-[12px] text-ink-muted">
        <span>{article.readingMinutes} min de lecture</span>
        <span className="inline-flex items-center gap-1 text-accent">
          Lire
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-ink-muted sm:flex-row sm:px-8">
        <span>© 2026 TrueCalling. Tous droits réservés.</span>
        <div className="flex items-center gap-5">
          <Link href="/" className="transition-colors hover:text-ink cursor-pointer">Accueil</Link>
          <Link href="/#pricing" className="transition-colors hover:text-ink cursor-pointer">Tarifs</Link>
          <Link href="/contact" className="transition-colors hover:text-ink cursor-pointer">Contact</Link>
          <Link href="/faq" className="transition-colors hover:text-ink cursor-pointer">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
}

void CATEGORIES;
