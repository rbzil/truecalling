/**
 * Editorial authors for the TrueCalling blog.
 *
 * Add named authors here once real bylines are confirmed. For now every article
 * defaults to the editorial team — that's enough to satisfy Google E-E-A-T
 * "named author" + Article schema requirements while content ownership is
 * being assigned internally.
 */

export type Author = {
  /** URL-safe identifier (used as @id for Person schema) */
  id: string;
  name: string;
  role: string;
  bio: string;
  url?: string;
  linkedin?: string;
  avatar?: string;
};

export const authors = {
  editorial: {
    id: "editorial",
    name: "TrueCalling Editorial",
    role: "Talent Intelligence Team",
    bio: "The TrueCalling editorial team — recruiters, ML engineers and product folks who build EMILY and TrueFit 360. We write about AI sourcing, multichannel outreach and the day-to-day reality of modern Talent Acquisition.",
    // url omitted on purpose: a Person.url is meant to be a personal bio
    // page, not the home page. Re-add once /en/team/[author] pages exist.
    linkedin: "https://www.linkedin.com/company/truecalling-app",
    avatar: "/brand/truecalling-vertical.png",
  },
} satisfies Record<string, Author>;

export type AuthorId = keyof typeof authors;

export function getAuthor(id: AuthorId | undefined): Author {
  return authors[id ?? "editorial"];
}
