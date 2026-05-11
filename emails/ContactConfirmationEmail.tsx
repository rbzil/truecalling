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
import type { ContactRequestData } from "@/lib/validation/contact-request";

/* ============================================================
   Acknowledgement email — sent to the visitor after they submit
   /contact. Confirms reception, sets the 24-business-hour SLA,
   and points to the homepage + blog. Localized in 8 languages.
   ============================================================ */

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
  yourMessage: string;
};

const FALLBACK: Copy = {
  preview: "We received your message — TrueCalling.",
  greeting: (n) => `Hi ${n},`,
  body1:
    "Thanks for getting in touch with TrueCalling. We received your message and the right person on our team will reply within 24 business hours.",
  body2:
    "In the meantime, feel free to explore the product and the latest articles on AI sourcing.",
  next: "While you wait",
  ctaSite: "Visit truecalling.ai",
  ctaBlog: "Read the blog",
  contactPrefix: "Need an answer faster? Reply to this email or write to",
  signOff: "Talk soon,",
  signature: "The TrueCalling team",
  footer: "TrueCalling — AI sourcing software for recruiting teams.",
  yourMessage: "Your message",
};

const COPIES: Record<string, Copy> = {
  fr: {
    preview: "Votre message TrueCalling est bien reçu.",
    greeting: (n) => `Bonjour ${n},`,
    body1:
      "Merci d'avoir pris contact avec TrueCalling. Nous avons bien reçu votre message et la bonne personne de l'équipe vous répond sous 24 heures ouvrées.",
    body2:
      "En attendant, vous pouvez explorer le produit et nos derniers articles sur le sourcing IA.",
    next: "En attendant",
    ctaSite: "Découvrir truecalling.ai",
    ctaBlog: "Lire le blog",
    contactPrefix:
      "Besoin d'une réponse plus rapide ? Répondez à cet email ou écrivez à",
    signOff: "À très bientôt,",
    signature: "L'équipe TrueCalling",
    footer:
      "TrueCalling — le logiciel de sourcing IA pour équipes recrutement.",
    yourMessage: "Votre message",
  },
  en: FALLBACK,
  he: {
    preview: "ההודעה שלך ב-TrueCalling התקבלה.",
    greeting: (n) => `שלום ${n},`,
    body1:
      "תודה שיצרת קשר עם TrueCalling. קיבלנו את ההודעה והאדם המתאים מהצוות יחזור אליך תוך 24 שעות עבודה.",
    body2:
      "בינתיים, אפשר לעיין במוצר ובמאמרים האחרונים שלנו על Sourcing מבוסס AI.",
    next: "בינתיים",
    ctaSite: "לאתר truecalling.ai",
    ctaBlog: "לבלוג",
    contactPrefix: "צריך/ה תשובה מהר יותר? השב/י למייל זה או כתוב/בי אל",
    signOff: "להתראות,",
    signature: "צוות TrueCalling",
    footer: "TrueCalling — תוכנת ה-Sourcing מבוססת AI לצוותי גיוס.",
    yourMessage: "ההודעה שלך",
  },
  "pt-BR": {
    preview: "Sua mensagem para a TrueCalling foi recebida.",
    greeting: (n) => `Olá, ${n},`,
    body1:
      "Obrigado por entrar em contato com a TrueCalling. Recebemos sua mensagem e a pessoa certa do nosso time responderá em até 24 horas úteis.",
    body2:
      "Enquanto isso, sinta-se à vontade para explorar o produto e nossos artigos mais recentes sobre sourcing por IA.",
    next: "Enquanto isso",
    ctaSite: "Visitar truecalling.ai",
    ctaBlog: "Ler o blog",
    contactPrefix:
      "Precisa de uma resposta mais rápida? Responda este email ou escreva para",
    signOff: "Até breve,",
    signature: "Equipe TrueCalling",
    footer:
      "TrueCalling — o software de sourcing por IA para times de recrutamento.",
    yourMessage: "Sua mensagem",
  },
  es: {
    preview: "Hemos recibido tu mensaje — TrueCalling.",
    greeting: (n) => `Hola ${n},`,
    body1:
      "Gracias por escribirnos a TrueCalling. Hemos recibido tu mensaje y la persona adecuada de nuestro equipo te responderá en menos de 24 horas laborables.",
    body2:
      "Mientras tanto, puedes explorar el producto y nuestros últimos artículos sobre sourcing con IA.",
    next: "Mientras tanto",
    ctaSite: "Visitar truecalling.ai",
    ctaBlog: "Leer el blog",
    contactPrefix:
      "¿Necesitas una respuesta antes? Responde a este email o escribe a",
    signOff: "Hasta pronto,",
    signature: "El equipo TrueCalling",
    footer:
      "TrueCalling — el software de sourcing con IA para equipos de reclutamiento.",
    yourMessage: "Tu mensaje",
  },
  de: {
    preview: "Ihre Nachricht ist bei TrueCalling angekommen.",
    greeting: (n) => `Hallo ${n},`,
    body1:
      "Danke, dass Sie TrueCalling kontaktiert haben. Wir haben Ihre Nachricht erhalten und die richtige Person aus unserem Team meldet sich innerhalb von 24 Werkstunden zurück.",
    body2:
      "In der Zwischenzeit können Sie das Produkt und unsere neuesten Beiträge zum KI-Sourcing entdecken.",
    next: "In der Zwischenzeit",
    ctaSite: "truecalling.ai besuchen",
    ctaBlog: "Zum Blog",
    contactPrefix:
      "Brauchen Sie eine schnellere Antwort? Antworten Sie auf diese E-Mail oder schreiben Sie an",
    signOff: "Bis bald,",
    signature: "Das TrueCalling-Team",
    footer:
      "TrueCalling — die KI-Sourcing-Software für Recruiting-Teams.",
    yourMessage: "Ihre Nachricht",
  },
  it: {
    preview: "Il tuo messaggio per TrueCalling è stato ricevuto.",
    greeting: (n) => `Ciao ${n},`,
    body1:
      "Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e la persona giusta del nostro team ti risponderà entro 24 ore lavorative.",
    body2:
      "Nel frattempo, puoi esplorare il prodotto e i nostri ultimi articoli sul sourcing con IA.",
    next: "Nel frattempo",
    ctaSite: "Visita truecalling.ai",
    ctaBlog: "Leggi il blog",
    contactPrefix:
      "Hai bisogno di una risposta più rapida? Rispondi a questa email o scrivi a",
    signOff: "A presto,",
    signature: "Il team TrueCalling",
    footer:
      "TrueCalling — il software di sourcing con IA per team di recruiting.",
    yourMessage: "Il tuo messaggio",
  },
  nl: {
    preview: "Je bericht aan TrueCalling is ontvangen.",
    greeting: (n) => `Hoi ${n},`,
    body1:
      "Bedankt voor je bericht aan TrueCalling. We hebben je bericht ontvangen en de juiste persoon uit ons team reageert binnen 24 werkuren.",
    body2:
      "In de tussentijd kun je het product en onze laatste artikelen over AI-sourcing alvast bekijken.",
    next: "In de tussentijd",
    ctaSite: "Bezoek truecalling.ai",
    ctaBlog: "Lees de blog",
    contactPrefix:
      "Heb je sneller een antwoord nodig? Reageer op deze e-mail of schrijf naar",
    signOff: "Tot snel,",
    signature: "Het TrueCalling-team",
    footer:
      "TrueCalling — de AI-sourcing software voor recruitmentteams.",
    yourMessage: "Je bericht",
  },
};

const SITE_URL = "https://truecalling.ai";
const RTL_LOCALES = new Set(["he"]);

function firstNameFrom(fullName: string): string {
  const trimmed = fullName.trim();
  if (!trimmed) return "";
  const first = trimmed.split(/\s+/)[0];
  return first.length > 30 ? first.slice(0, 30) : first;
}

export function ContactConfirmationEmail({
  data,
}: {
  data: ContactRequestData;
}) {
  const copy = COPIES[data.locale] ?? FALLBACK;
  const isRtl = RTL_LOCALES.has(data.locale);
  const dir = isRtl ? "rtl" : "ltr";
  const blogPath = data.locale === "fr" ? "/fr/blog" : "/en/blog";
  const homePath = `/${data.locale}`;
  const supportEmail = "patrick@truecalling.ai";
  const firstName = firstNameFrom(data.name);

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
                {copy.greeting(firstName)}
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
                {copy.yourMessage}
              </Heading>
              <Text className="m-0 whitespace-pre-line rounded-lg bg-gray-100 p-4 text-sm text-gray-800">
                {data.message}
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

export default ContactConfirmationEmail;
