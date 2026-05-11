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
  Head,
  Preview,
} from "@react-email/components";
import type { ContactRequestData } from "@/lib/validation/contact-request";

/* ============================================================
   Internal notification — sent to the TrueCalling team when a
   visitor uses the /contact form. Reply-To is set to the
   visitor's email so hitting Reply writes back directly.
   ============================================================ */

export function ContactNotificationEmail({
  data,
}: {
  data: ContactRequestData;
}) {
  const previewText = `${data.name} — ${data.subject}`;

  return (
    <Html lang="fr">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto max-w-2xl bg-white p-8">
            <Heading className="m-0 text-2xl font-bold text-gray-900">
              ✉️ Nouveau message — /contact
            </Heading>
            <Text className="m-0 mt-1 text-sm text-gray-500">
              Reçu le{" "}
              {new Date().toLocaleString("fr-FR", {
                dateStyle: "full",
                timeStyle: "short",
              })}
            </Text>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Heading
                as="h2"
                className="mb-3 mt-0 text-lg font-semibold text-gray-900"
              >
                Contact
              </Heading>
              <Text className="m-0 text-sm text-gray-700">
                <strong>Nom :</strong> {data.name}
              </Text>
              <Text className="m-0 mt-1 text-sm text-gray-700">
                <strong>Email :</strong>{" "}
                <Link
                  href={`mailto:${data.email}`}
                  className="text-pink-600 underline"
                >
                  {data.email}
                </Link>
              </Text>
              <Text className="m-0 mt-1 text-sm text-gray-700">
                <strong>Sujet :</strong> {data.subject}
              </Text>
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Heading
                as="h2"
                className="mb-3 mt-0 text-lg font-semibold text-gray-900"
              >
                Message
              </Heading>
              <Text className="m-0 whitespace-pre-line rounded-lg bg-gray-100 p-4 text-sm text-gray-800">
                {data.message}
              </Text>
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Text className="m-0 text-xs text-gray-400">
                Locale : {data.locale}
              </Text>
              <Text className="m-0 mt-1 text-xs text-gray-400">
                Reply-To pointe vers {data.email} — répondre à cet email
                écrit directement au visiteur.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactNotificationEmail;
