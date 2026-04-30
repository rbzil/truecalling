import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, getRelatedArticles } from "../_lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: `${a.title} · TrueCalling`,
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url: `https://truecalling.app/blog/${a.slug}`,
      locale: "fr_FR",
      publishedTime: a.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.description,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const related = getRelatedArticles(article.slug, 3);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: "TrueCalling" },
    publisher: { "@type": "Organization", name: "TrueCalling", url: "https://truecalling.app" },
    keywords: article.keyword,
    inLanguage: "fr-FR",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://truecalling.app/blog/${article.slug}` },
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <BackgroundDecor />
      <SiteNav />

      <article className="relative px-5 pt-10 pb-20 sm:px-8 sm:pt-14">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted transition-colors hover:text-ink cursor-pointer"
          >
            <ArrowLeft /> Tous les articles
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-accent">
              {article.category}
            </span>
            <time className="text-[12px] text-ink-muted">{formatDate(article.publishedAt)}</time>
            <span className="text-ink-muted/40">·</span>
            <span className="text-[12px] text-ink-muted">{article.readingMinutes} min de lecture</span>
          </div>

          <h1
            className="mt-5 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            {article.title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {article.description}
          </p>

          <div className="mt-10 border-t border-white/[0.06] pt-10">
            <ProseContent>{article.content}</ProseContent>
          </div>

          <ShareBar slug={article.slug} title={article.title} />
        </div>
      </article>

      <RelatedArticles articles={related} />
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

function ProseContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-invert prose-pink max-w-none prose-p:text-ink-muted prose-p:leading-relaxed prose-headings:text-ink prose-headings:tracking-tight prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-strong:text-ink prose-strong:font-semibold prose-li:text-ink-muted prose-li:my-1 prose-ul:my-5 prose-ol:my-5 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent prose-blockquote:text-ink/85 prose-blockquote:not-italic prose-blockquote:bg-surface/40 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-5 prose-table:text-sm prose-table:my-7 prose-th:bg-surface/60 prose-th:text-ink prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:border-white/[0.08] prose-td:px-4 prose-td:py-3 prose-td:border-white/[0.06] prose-td:text-ink-muted prose-tr:border-white/[0.06]">
      {children}
    </div>
  );
}

function ShareBar({ slug, title }: { slug: string; title: string }) {
  const url = `https://truecalling.app/blog/${slug}`;
  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "X",
      href: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ];
  return (
    <div className="mt-12 flex items-center gap-3 border-t border-white/[0.06] pt-6">
      <span className="text-[12px] uppercase tracking-[0.14em] text-ink-muted">Partager</span>
      {shareLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-ink-muted transition-colors hover:border-accent/40 hover:text-accent cursor-pointer"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}

function RelatedArticles({ articles }: { articles: typeof import("../_lib/articles").articles }) {
  if (!articles.length) return null;
  return (
    <section className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">À lire aussi</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-surface/30 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent/40 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                <span className="rounded-full bg-accent/10 px-2 py-0.5 font-semibold text-accent">
                  {a.category}
                </span>
                <span>·</span>
                <span>{a.readingMinutes} min</span>
              </div>
              <h3 className="mt-4 text-[16px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
                {a.title}
              </h3>
              <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-ink-muted">
                {a.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-ink-muted sm:flex-row sm:px-8">
        <span>© 2026 TrueCalling. Tous droits réservés.</span>
        <div className="flex items-center gap-5">
          <Link href="/" className="transition-colors hover:text-ink cursor-pointer">Accueil</Link>
          <Link href="/blog" className="transition-colors hover:text-ink cursor-pointer">Blog</Link>
          <Link href="/contact" className="transition-colors hover:text-ink cursor-pointer">Contact</Link>
          <Link href="/reserver-une-demo" className="transition-colors hover:text-ink cursor-pointer">Réserver une démo</Link>
        </div>
      </div>
    </footer>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
}
