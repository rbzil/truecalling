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
import type { DemoRequestData } from "@/lib/validation/demo-request";

type Copy = {
  preview: string;
  greeting: (firstName: string) => string;
  body1: string;
  body2: string;
  next: string;
  ctaSite: string;
  ctaBlog: string;
  contactPrefix: string;
  signOff: string;
  signature: string;
  footer: string;
};

const FALLBACK: Copy = {
  preview: "Your TrueCalling demo request is confirmed.",
  greeting: (n) => `Hi ${n},`,
  body1:
    "Thanks for booking a demo with TrueCalling. We received your request and will get back to you within 24 business hours to schedule the call.",
  body2:
    "In the meantime, feel free to explore the product and the latest articles on AI sourcing.",
  next: "What happens next",
  ctaSite: "Visit truecalling.app",
  ctaBlog: "Read the blog",
  contactPrefix: "Need to reach us sooner? Reply to this email or write to",
  signOff: "Talk soon,",
  signature: "The TrueCalling team",
  footer: "TrueCalling — AI sourcing software for recruiting teams.",
};

const COPIES: Record<string, Copy> = {
  fr: {
    preview: "Votre demande de démo TrueCalling est bien reçue.",
    greeting: (n) => `Bonjour ${n},`,
    body1:
      "Merci d'avoir réservé une démo avec TrueCalling. Nous avons bien reçu votre demande et l'équipe vous recontacte sous 24 heures ouvrées pour caler le créneau.",
    body2:
      "En attendant, vous pouvez explorer le produit et nos derniers articles sur le sourcing IA.",
    next: "Les prochaines étapes",
    ctaSite: "Découvrir truecalling.app",
    ctaBlog: "Lire le blog",
    contactPrefix:
      "Besoin de nous joindre plus vite ? Répondez à cet email ou écrivez à",
    signOff: "À très bientôt,",
    signature: "L'équipe TrueCalling",
    footer:
      "TrueCalling — le logiciel de sourcing IA pour équipes recrutement.",
  },
  en: FALLBACK,
  he: {
    preview: "בקשת הדמו של TrueCalling שלך התקבלה.",
    greeting: (n) => `שלום ${n},`,
    body1:
      "תודה שביקשת דמו עם TrueCalling. קיבלנו את הבקשה וניצור איתך קשר תוך 24 שעות עבודה כדי לתאם את הפגישה.",
    body2: "בינתיים, אפשר לעיין במוצר ובמאמרים האחרונים שלנו על Sourcing מבוסס AI.",
    next: "מה עכשיו",
    ctaSite: "לאתר truecalling.app",
    ctaBlog: "לבלוג",
    contactPrefix: "צריך/ה אותנו מהר יותר? השב/י למייל זה או כתוב/בי אל",
    signOff: "להתראות,",
    signature: "צוות TrueCalling",
    footer: "TrueCalling — תוכנת ה-Sourcing מבוססת AI לצוותי גיוס.",
  },
  "pt-BR": {
    preview: "Sua solicitação de demo TrueCalling foi recebida.",
    greeting: (n) => `Olá, ${n},`,
    body1:
      "Obrigado por solicitar uma demo da TrueCalling. Recebemos seu pedido e nossa equipe entrará em contato em até 24 horas úteis para agendar a conversa.",
    body2:
      "Enquanto isso, sinta-se à vontade para explorar o produto e nossos artigos mais recentes sobre sourcing por IA.",
    next: "Próximos passos",
    ctaSite: "Visitar truecalling.app",
    ctaBlog: "Ler o blog",
    contactPrefix: "Precisa nos falar antes? Responda este email ou escreva para",
    signOff: "Até breve,",
    signature: "Equipe TrueCalling",
    footer:
      "TrueCalling — o software de sourcing por IA para times de recrutamento.",
  },
  es: {
    preview: "Tu solicitud de demo TrueCalling está confirmada.",
    greeting: (n) => `Hola ${n},`,
    body1:
      "Gracias por reservar una demo con TrueCalling. Hemos recibido tu solicitud y nuestro equipo te contactará en menos de 24 horas laborables para agendar la llamada.",
    body2:
      "Mientras tanto, puedes explorar el producto y nuestros últimos artículos sobre sourcing con IA.",
    next: "Próximos pasos",
    ctaSite: "Visitar truecalling.app",
    ctaBlog: "Leer el blog",
    contactPrefix:
      "¿Necesitas contactarnos antes? Responde a este email o escribe a",
    signOff: "Hasta pronto,",
    signature: "El equipo TrueCalling",
    footer:
      "TrueCalling — el software de sourcing con IA para equipos de reclutamiento.",
  },
  de: {
    preview: "Ihre TrueCalling Demo-Anfrage ist bestätigt.",
    greeting: (n) => `Hallo ${n},`,
    body1:
      "Danke für Ihre Demo-Anfrage bei TrueCalling. Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Werkstunden, um den Termin abzustimmen.",
    body2:
      "In der Zwischenzeit können Sie das Produkt und unsere neuesten Beiträge zum KI-Sourcing entdecken.",
    next: "Die nächsten Schritte",
    ctaSite: "truecalling.app besuchen",
    ctaBlog: "Zum Blog",
    contactPrefix:
      "Möchten Sie uns früher erreichen? Antworten Sie auf diese E-Mail oder schreiben Sie an",
    signOff: "Bis bald,",
    signature: "Das TrueCalling-Team",
    footer:
      "TrueCalling — die KI-Sourcing-Software für Recruiting-Teams.",
  },
  it: {
    preview: "La tua richiesta di demo TrueCalling è confermata.",
    greeting: (n) => `Ciao ${n},`,
    body1:
      "Grazie per aver richiesto una demo di TrueCalling. Abbiamo ricevuto la tua richiesta e il team ti ricontatterà entro 24 ore lavorative per fissare l'appuntamento.",
    body2:
      "Nel frattempo, puoi esplorare il prodotto e i nostri ultimi articoli sul sourcing con IA.",
    next: "I prossimi passi",
    ctaSite: "Visita truecalling.app",
    ctaBlog: "Leggi il blog",
    contactPrefix: "Hai bisogno di contattarci prima? Rispondi a questa email o scrivi a",
    signOff: "A presto,",
    signature: "Il team TrueCalling",
    footer:
      "TrueCalling — il software di sourcing con IA per team di recruiting.",
  },
  nl: {
    preview: "Je TrueCalling demo-aanvraag is bevestigd.",
    greeting: (n) => `Hoi ${n},`,
    body1:
      "Bedankt voor je demo-aanvraag bij TrueCalling. We hebben je aanvraag ontvangen en nemen binnen 24 werkuren contact op om de afspraak in te plannen.",
    body2:
      "In de tussentijd kun je het product en onze laatste artikelen over AI-sourcing alvast bekijken.",
    next: "Wat er nu gebeurt",
    ctaSite: "Bezoek truecalling.app",
    ctaBlog: "Lees de blog",
    contactPrefix:
      "Wil je ons sneller bereiken? Reageer op deze e-mail of schrijf naar",
    signOff: "Tot snel,",
    signature: "Het TrueCalling-team",
    footer:
      "TrueCalling — de AI-sourcing software voor recruitmentteams.",
  },
};

const SITE_URL = "https://truecalling.app";
const RTL_LOCALES = new Set(["he"]);

export function ConfirmationEmail({ data }: { data: DemoRequestData }) {
  const copy = COPIES[data.locale] ?? FALLBACK;
  const isRtl = RTL_LOCALES.has(data.locale);
  const dir = isRtl ? "rtl" : "ltr";
  const blogPath = data.locale === "fr" ? "/fr/blog" : "/en/blog";
  const homePath = `/${data.locale}`;
  const supportEmail = "alexandre@truecalling.ai";

  return (
    <Html lang={data.locale} dir={dir}>
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
                {copy.greeting(data.firstName)}
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
                  href={`${SITE_URL}${homePath}`}
                  className="rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white no-underline"
                >
                  {copy.ctaSite}
                </Button>
                <Text className="m-0 mt-3 text-sm">
                  <Link
                    href={`${SITE_URL}${blogPath}`}
                    className="text-pink-600 underline"
                  >
                    {copy.ctaBlog}
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

export default ConfirmationEmail;
