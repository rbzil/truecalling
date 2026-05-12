import {
  Body,
  Container,
  Heading,
  Html,
  Section,
  Text,
  Hr,
  Tailwind,
  Link,
  Button,
  Head,
  Preview,
} from "@react-email/components";

/* ============================================================
   Welcome email sent to newsletter subscribers right after they
   sign up. Replaces the Beehiiv "welcome" auto-email.
   ============================================================ */

type Copy = {
  preview: string;
  greeting: string;
  body1: string;
  body2: string;
  next: string;
  ctaBlog: string;
  ctaSite: string;
  contactPrefix: string;
  signOff: string;
  signature: string;
  footer: string;
};

const FALLBACK: Copy = {
  preview: "Welcome to the TrueCalling newsletter.",
  greeting: "Welcome on board.",
  body1:
    "Thanks for subscribing to the TrueCalling newsletter. You'll get our deep-dives on AI sourcing, WhatsApp recruiting and the day-to-day reality of modern Talent Acquisition — once or twice a month, no fluff.",
  body2:
    "While you wait for the next issue, our most-read articles are a good place to start.",
  next: "Start here",
  ctaBlog: "Read the blog",
  ctaSite: "Visit truecalling.ai",
  contactPrefix: "Anything you'd like us to cover? Reply to this email or write to",
  signOff: "Talk soon,",
  signature: "The TrueCalling team",
  footer: "TrueCalling — AI sourcing software for recruiting teams.",
};

const COPIES: Record<string, Copy> = {
  fr: {
    preview: "Bienvenue dans la newsletter TrueCalling.",
    greeting: "Bienvenue à bord.",
    body1:
      "Merci de votre inscription à la newsletter TrueCalling. Vous recevrez nos analyses sur le sourcing IA, le recrutement WhatsApp et la réalité quotidienne du Talent Acquisition moderne — une à deux fois par mois, sans bullshit.",
    body2:
      "En attendant la prochaine édition, nos articles les plus lus sont un bon point de départ.",
    next: "Pour commencer",
    ctaBlog: "Lire le blog",
    ctaSite: "Découvrir truecalling.ai",
    contactPrefix:
      "Un sujet à creuser ? Répondez à cet email ou écrivez à",
    signOff: "À très bientôt,",
    signature: "L'équipe TrueCalling",
    footer:
      "TrueCalling — le logiciel de sourcing IA pour équipes recrutement.",
  },
  en: FALLBACK,
  he: {
    preview: "ברוכים הבאים לניוזלטר TrueCalling.",
    greeting: "ברוכים הבאים.",
    body1:
      "תודה על ההרשמה לניוזלטר של TrueCalling. תקבלו ניתוחים מעמיקים על Sourcing מבוסס AI, גיוס בוואטסאפ והמציאות היומיומית של גיוס מודרני — פעם או פעמיים בחודש, בלי מילוי.",
    body2:
      "עד הגיליון הבא, המאמרים הנקראים ביותר שלנו מקום מצוין להתחיל בו.",
    next: "להתחיל מכאן",
    ctaBlog: "לבלוג",
    ctaSite: "לאתר truecalling.ai",
    contactPrefix: "יש נושא שתרצו שנכסה? השב/י למייל זה או כתוב/בי אל",
    signOff: "להתראות בקרוב,",
    signature: "צוות TrueCalling",
    footer: "TrueCalling — תוכנת ה-Sourcing מבוססת AI לצוותי גיוס.",
  },
  "pt-BR": {
    preview: "Boas-vindas à newsletter TrueCalling.",
    greeting: "Bem-vindo a bordo.",
    body1:
      "Obrigado por se inscrever na newsletter da TrueCalling. Você receberá nossas análises sobre sourcing com IA, recrutamento por WhatsApp e a realidade do dia a dia do Talent Acquisition moderno — uma a duas vezes por mês, sem encheção.",
    body2:
      "Enquanto espera a próxima edição, nossos artigos mais lidos são um bom ponto de partida.",
    next: "Por onde começar",
    ctaBlog: "Ler o blog",
    ctaSite: "Visitar truecalling.ai",
    contactPrefix: "Algum tema para a gente cobrir? Responda este email ou escreva para",
    signOff: "Até breve,",
    signature: "Equipe TrueCalling",
    footer:
      "TrueCalling — o software de sourcing por IA para times de recrutamento.",
  },
  es: {
    preview: "Bienvenido a la newsletter de TrueCalling.",
    greeting: "Bienvenido a bordo.",
    body1:
      "Gracias por suscribirte a la newsletter de TrueCalling. Recibirás nuestros análisis sobre sourcing con IA, reclutamiento por WhatsApp y la realidad diaria del Talent Acquisition moderno — una o dos veces al mes, sin paja.",
    body2:
      "Mientras esperas la próxima edición, nuestros artículos más leídos son un buen punto de partida.",
    next: "Por dónde empezar",
    ctaBlog: "Leer el blog",
    ctaSite: "Visitar truecalling.ai",
    contactPrefix: "¿Algún tema que quieras que cubramos? Responde a este email o escribe a",
    signOff: "Hasta pronto,",
    signature: "El equipo TrueCalling",
    footer:
      "TrueCalling — el software de sourcing con IA para equipos de reclutamiento.",
  },
  de: {
    preview: "Willkommen beim TrueCalling-Newsletter.",
    greeting: "Willkommen an Bord.",
    body1:
      "Danke für Ihre Anmeldung zum TrueCalling-Newsletter. Sie erhalten unsere Analysen zu KI-Sourcing, WhatsApp-Recruiting und der täglichen Realität moderner Talent Acquisition — ein- bis zweimal pro Monat, ohne Füllstoff.",
    body2:
      "Bis zur nächsten Ausgabe sind unsere meistgelesenen Artikel ein guter Startpunkt.",
    next: "Zum Einstieg",
    ctaBlog: "Zum Blog",
    ctaSite: "truecalling.ai besuchen",
    contactPrefix: "Ein Thema, das wir behandeln sollten? Antworten Sie auf diese E-Mail oder schreiben Sie an",
    signOff: "Bis bald,",
    signature: "Das TrueCalling-Team",
    footer:
      "TrueCalling — die KI-Sourcing-Software für Recruiting-Teams.",
  },
  it: {
    preview: "Benvenuto nella newsletter di TrueCalling.",
    greeting: "Benvenuto a bordo.",
    body1:
      "Grazie per esserti iscritto alla newsletter di TrueCalling. Riceverai le nostre analisi su sourcing con IA, recruiting via WhatsApp e la realtà quotidiana del Talent Acquisition moderno — una o due volte al mese, senza riempitivi.",
    body2:
      "Nell'attesa della prossima edizione, i nostri articoli più letti sono un buon punto di partenza.",
    next: "Da dove cominciare",
    ctaBlog: "Leggi il blog",
    ctaSite: "Visita truecalling.ai",
    contactPrefix: "Un tema da approfondire? Rispondi a questa email o scrivi a",
    signOff: "A presto,",
    signature: "Il team TrueCalling",
    footer:
      "TrueCalling — il software di sourcing con IA per team di recruiting.",
  },
  nl: {
    preview: "Welkom bij de TrueCalling-nieuwsbrief.",
    greeting: "Welkom aan boord.",
    body1:
      "Bedankt voor je inschrijving op de TrueCalling-nieuwsbrief. Je ontvangt onze diepgaande analyses over AI-sourcing, WhatsApp-recruitment en de dagelijkse realiteit van moderne talent acquisition — een tot twee keer per maand, zonder opvulling.",
    body2:
      "In afwachting van de volgende editie zijn onze meest gelezen artikelen een goed startpunt.",
    next: "Waar te beginnen",
    ctaBlog: "Lees de blog",
    ctaSite: "Bezoek truecalling.ai",
    contactPrefix: "Een onderwerp dat we moeten behandelen? Reageer op deze e-mail of schrijf naar",
    signOff: "Tot snel,",
    signature: "Het TrueCalling-team",
    footer:
      "TrueCalling — de AI-sourcing software voor recruitmentteams.",
  },
};

const SITE_URL = "https://truecalling.ai";
const RTL_LOCALES = new Set(["he"]);

export function NewsletterWelcomeEmail({
  locale,
}: {
  locale: string;
}) {
  const copy = COPIES[locale] ?? FALLBACK;
  const isRtl = RTL_LOCALES.has(locale);
  const dir = isRtl ? "rtl" : "ltr";
  const blogPath = locale === "fr" ? "/fr/blog" : "/en/blog";
  const homePath = `/${locale}`;
  const supportEmail = "contact@truecalling.ai";

  return (
    <Html lang={locale} dir={dir}>
      <Head />
      <Preview>{copy.preview}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans" dir={dir}>
          <Container className="mx-auto max-w-2xl bg-white p-8">
            <Section>
              <Text className="m-0 text-xs uppercase tracking-[0.2em] text-pink-600">
                TrueCalling
              </Text>
              <Heading className="mb-0 mt-3 text-2xl font-bold text-gray-900">
                {copy.greeting}
              </Heading>
            </Section>

            <Hr className="my-5 border-gray-200" />

            <Section>
              <Text className="m-0 text-[15px] leading-relaxed text-gray-700">
                {copy.body1}
              </Text>
              <Text className="m-0 mt-4 text-[15px] leading-relaxed text-gray-700">
                {copy.body2}
              </Text>
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Heading
                as="h2"
                className="mb-3 mt-0 text-base font-semibold text-gray-900"
              >
                {copy.next}
              </Heading>
              <Section className="text-center">
                <Button
                  href={`${SITE_URL}${blogPath}`}
                  className="rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white no-underline"
                >
                  {copy.ctaBlog}
                </Button>
                <Text className="m-0 mt-3 text-sm">
                  <Link
                    href={`${SITE_URL}${homePath}`}
                    className="text-pink-600 underline"
                  >
                    {copy.ctaSite}
                  </Link>
                </Text>
              </Section>
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Text className="m-0 text-[13px] leading-relaxed text-gray-600">
                {copy.contactPrefix}{" "}
                <Link
                  href={`mailto:${supportEmail}`}
                  className="text-pink-600 underline"
                >
                  {supportEmail}
                </Link>
                .
              </Text>
            </Section>

            <Section className="mt-6">
              <Text className="m-0 text-[14px] text-gray-700">
                {copy.signOff}
              </Text>
              <Text className="m-0 mt-1 text-[14px] font-semibold text-gray-900">
                {copy.signature}
              </Text>
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Text className="m-0 text-[11px] text-gray-400">
                {copy.footer}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NewsletterWelcomeEmail;
