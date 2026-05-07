import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticles,
  getArticle,
  getRelatedArticles,
  getSlugByLocale,
  type Article,
} from "../_lib/articles";
import { getDictionary, type Dictionary } from "@/lib/get-dictionary";
import {
  getLocalizedPath,
  type Locale,
  blogEnabledLocales,
} from "@/lib/i18n-config";
import { buildArticleAlternates } from "@/lib/seo-metadata";
import { Navbar } from "@/components/SiteNavbar";

const SITE_URL = "https://truecalling.ai";

export function generateStaticParams() {
  return blogEnabledLocales.flatMap((locale) =>
    getArticles(locale as Locale).map((a) => ({ locale, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const a = getArticle(params.slug, params.locale);
  if (!a) return {};

  const slugByLocale = getSlugByLocale(a.canonicalId);
  const alternates = buildArticleAlternates(slugByLocale, params.locale);
  const url = alternates.canonical as string;

  return {
    title: a.title,
    description: a.description,
    alternates,
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url,
      locale: params.locale,
      publishedTime: a.publishedAt,
      siteName: "TrueCalling",
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  if (!(blogEnabledLocales as readonly string[]).includes(params.locale)) {
    notFound();
  }
  const article = getArticle(params.slug, params.locale);
  if (!article) notFound();
  const related = getRelatedArticles(article.slug, params.locale, 3);
  const dict = await getDictionary(params.locale);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: "TrueCalling" },
    publisher: {
      "@type": "Organization",
      name: "TrueCalling",
      url: "https://truecalling.ai",
    },
    keywords: article.keyword,
    inLanguage: params.locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${getLocalizedPath("blog", params.locale)}/${article.slug}`,
    },
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <BackgroundDecor />
      <Navbar />

      <article className="relative px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href={getLocalizedPath("blog", params.locale)}
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted transition-colors hover:text-ink cursor-pointer"
          >
            <ArrowLeft /> {dict.blog_back_articles}
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-accent">
              {article.category}
            </span>
            <time className="text-[12px] text-ink-muted">
              {formatDate(article.publishedAt, params.locale)}
            </time>
            <span className="text-ink-muted/40">·</span>
            <span className="text-[12px] text-ink-muted">
              {dict.blog_min_read.replace(
                "{n}",
                String(article.readingMinutes),
              )}
            </span>
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

          <div className="mt-10 border-t border-ink/[0.06] pt-10">
            <ProseContent>{article.content}</ProseContent>
          </div>

          <ShareBar
            slug={article.slug}
            title={article.title}
            locale={params.locale}
            dict={dict}
          />
        </div>
      </article>

      <RelatedArticles
        articles={related}
        locale={params.locale}
        dict={dict}
      />
    </main>
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
    <div className="prose prose-invert prose-pink max-w-none prose-p:text-ink-muted prose-p:leading-relaxed prose-headings:text-ink prose-headings:tracking-tight prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-strong:text-ink prose-strong:font-semibold prose-li:text-ink-muted prose-li:my-1 prose-ul:my-5 prose-ol:my-5 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent prose-blockquote:text-ink/85 prose-blockquote:not-italic prose-blockquote:bg-surface/40 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-5 prose-table:text-sm prose-table:my-7 prose-th:bg-surface/60 prose-th:text-ink prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:border-ink/[0.08] prose-td:px-4 prose-td:py-3 prose-td:border-ink/[0.06] prose-td:text-ink-muted prose-tr:border-ink/[0.06]">
      {children}
    </div>
  );
}

function ShareBar({
  slug,
  title,
  locale,
  dict,
}: {
  slug: string;
  title: string;
  locale: Locale;
  dict: Dictionary;
}) {
  const url = `${SITE_URL}${getLocalizedPath("blog", locale)}/${slug}`;
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
    <div className="mt-12 flex items-center gap-3 border-t border-ink/[0.06] pt-6">
      <span className="text-[12px] uppercase tracking-[0.14em] text-ink-muted">
        {dict.blog_share}
      </span>
      {shareLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[12px] text-ink-muted transition-colors hover:border-accent/40 hover:text-accent cursor-pointer"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}

function RelatedArticles({
  articles,
  locale,
  dict,
}: {
  articles: Article[];
  locale: Locale;
  dict: Dictionary;
}) {
  if (!articles.length) return null;
  return (
    <section className="relative border-t border-ink/[0.06] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {dict.blog_related}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`${getLocalizedPath("blog", locale)}/${a.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-surface/30 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent/40 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                <span className="rounded-full bg-accent/10 px-2 py-0.5 font-semibold text-accent">
                  {a.category}
                </span>
                <span>·</span>
                <span>
                  {dict.blog_min_read_short.replace(
                    "{n}",
                    String(a.readingMinutes),
                  )}
                </span>
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

/* Footer is mounted globally in app/[locale]/layout.tsx */

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  const intlLocale = locale === "pt-BR" ? "pt-BR" : locale;
  return d.toLocaleDateString(intlLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
