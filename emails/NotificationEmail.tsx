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
import type { DemoRequestData } from "@/lib/validation/demo-request";

const TIMING_LABEL: Record<DemoRequestData["timing"], string> = {
  "this-week": "Cette semaine 🔥",
  "next-week": "La semaine prochaine",
  later: "Plus tard",
};

export function NotificationEmail({ data }: { data: DemoRequestData }) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const previewText = `${fullName} (${data.company}) — ${TIMING_LABEL[data.timing]}`;

  return (
    <Html lang="fr">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto max-w-2xl bg-white p-8">
            <Heading className="m-0 text-2xl font-bold text-gray-900">
              🚀 Nouvelle demande de démo
            </Heading>
            <Text className="m-0 mt-1 text-sm text-gray-500">
              Reçue le{" "}
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
                <strong>Nom :</strong> {fullName}
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
              {data.phone && (
                <Text className="m-0 mt-1 text-sm text-gray-700">
                  <strong>Téléphone :</strong>{" "}
                  <Link
                    href={`tel:${data.phone}`}
                    className="text-pink-600 underline"
                  >
                    {data.phone}
                  </Link>
                </Text>
              )}
              {data.jobTitle && (
                <Text className="m-0 mt-1 text-sm text-gray-700">
                  <strong>Poste :</strong> {data.jobTitle}
                </Text>
              )}
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Heading
                as="h2"
                className="mb-3 mt-0 text-lg font-semibold text-gray-900"
              >
                Entreprise
              </Heading>
              <Text className="m-0 text-sm text-gray-700">
                <strong>Nom :</strong> {data.company}
              </Text>
              <Text className="m-0 mt-1 text-sm text-gray-700">
                <strong>Taille équipe recrutement :</strong> {data.teamSize}
              </Text>
              <Text className="m-0 mt-1 text-sm text-gray-700">
                <strong>Recrutements / an :</strong> {data.recruitmentsPerYear}
              </Text>
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Heading
                as="h2"
                className="mb-3 mt-0 text-lg font-semibold text-gray-900"
              >
                Urgence
              </Heading>
              <Text className="m-0 text-xl font-semibold text-pink-600">
                {TIMING_LABEL[data.timing]}
              </Text>
            </Section>

            {data.message && (
              <>
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
              </>
            )}

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Text className="m-0 text-xs text-gray-400">
                Locale : {data.locale}
              </Text>
              <Text className="m-0 mt-1 text-xs text-gray-400">
                Reply-To pointe vers {data.email} — répondre à cet email
                écrit directement au prospect.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NotificationEmail;
