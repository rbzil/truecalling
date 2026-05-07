import type { Metadata } from "next";
import Link from "next/link";
import { getArticles, type Article } from "./_lib/articles";
import { getDictionary, type Dictionary } from "@/lib/get-dictionary";
import {
  getLocalizedPath,
  type Locale,
  locales,
  blogEnabledLocales,
} from "@/lib/i18n-config";
import { buildAlternates } from "@/lib/seo-metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/SiteNavbar";

const SITE_URL = "https://truecalling.ai";

export function generateStaticParams() {
  return blogEnabledLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const alternates = buildAlternates("blog", params.locale, {
    localeSubset: blogEnabledLocales,
  });
  return {
    title: dict.blog_meta_title,
    description: dict.blog_meta_desc,
    alternates,
    openGraph: {
      type: "website",
      title: dict.blog_meta_title,
      description: dict.blog_meta_desc,
      url: alternates.canonical as string,
      locale: params.locale,
    },
  };
}

export default async function Page({
  params,
}: {
  params: { locale: Locale };
}) {
  if (!(blogEnabledLocales as readonly string[]).includes(params.locale)) {
    notFound();
  }
  const dict = await getDictionary(params.locale);
  const all = getArticles(params.locale);
  const sorted = [...all].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  const breadcrumb = breadcrumbSchema([
    {
      name: "TrueCalling",
      url: `${SITE_URL}${getLocalizedPath("home", params.locale)}`,
    },
    {
      name: dict.blog_meta_title ?? "Blog",
      url: `${SITE_URL}${getLocalizedPath("blog", params.locale)}`,
    },
  ]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }}
      />
      <BackgroundDecor />
      <Navbar />
      <Hero dict={dict} />
      <FeaturedArticle article={featured} locale={params.locale} dict={dict} />
      <ArticleGrid
        articles={rest}
        totalCount={all.length}
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

function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative px-5 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
          {dict.blog_hero_eyebrow}
        </span>
        <h1
          className="mx-auto mt-5 max-w-3xl text-balance font-semibold leading-[1.05] tracking-tighter2"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
        >
          {dict.blog_hero_h1_a}{" "}
          <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
            {dict.blog_hero_h1_highlight}
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {dict.blog_hero_subtitle}
        </p>
      </div>
    </section>
  );
}

function FeaturedArticle({
  article,
  locale,
  dict,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href={`${getLocalizedPath("blog", locale)}/${article.slug}`}
          className="group block overflow-hidden rounded-3xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md transition-all hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(233,30,140,0.35),0_30px_80px_-30px_rgba(233,30,140,0.4)] sm:p-10 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-accent">
              {dict.blog_featured_label}
            </span>
            <span className="text-[11.5px] uppercase tracking-[0.16em] text-ink-muted">
              {article.category}
            </span>
            <span className="text-ink-muted/40">·</span>
            <time className="text-[11.5px] text-ink-muted">
              {formatDate(article.publishedAt, locale)}
            </time>
            <span className="text-ink-muted/40">·</span>
            <span className="text-[11.5px] text-ink-muted">
              {dict.blog_min_read_short.replace(
                "{n}",
                String(article.readingMinutes),
              )}
            </span>
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
            {dict.blog_read_article}
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

function ArticleGrid({
  articles,
  totalCount,
  locale,
  dict,
}: {
  articles: Article[];
  totalCount: number;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {dict.blog_all_articles}
          </h2>
          <span className="text-[13px] text-ink-muted">
            {dict.blog_articles_count.replace("{n}", String(totalCount))}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} locale={locale} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  locale,
  dict,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Link
      href={`${getLocalizedPath("blog", locale)}/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-surface/30 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(233,30,140,0.25),0_20px_50px_-20px_rgba(233,30,140,0.3)] cursor-pointer"
    >
      <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
        <span className="rounded-full bg-accent/10 px-2 py-0.5 font-semibold text-accent">
          {article.category}
        </span>
        <span>·</span>
        <time>{formatDate(article.publishedAt, locale)}</time>
      </div>
      <h3 className="mt-4 text-[17px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
        {article.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-[13.5px] leading-relaxed text-ink-muted">
        {article.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-ink/[0.06] pt-4 text-[12px] text-ink-muted">
        <span>
          {dict.blog_min_read.replace("{n}", String(article.readingMinutes))}
        </span>
        <span className="inline-flex items-center gap-1 text-accent">
          {dict.blog_read}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
    </Link>
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

void locales;
