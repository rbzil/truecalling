import type { Locale, RouteKey } from "./i18n-config";

/**
 * Per-route, per-locale title + description for sub-routes that don't have
 * dedicated dictionary entries. Keeps SEO meta out of the locale JSON files
 * (which are user-facing copy) and out of each page component.
 *
 * Brand suffix " · TrueCalling" is added by the root layout title template,
 * so titles here should NOT include it.
 */

type Meta = { title: string; description: string };

type SubRoute = Exclude<RouteKey, "home" | "blog">;

export const seoMeta: Record<SubRoute, Record<Locale, Meta>> = {
  features: {
    en: {
      title: "Features",
      description:
        "TrueCalling features — EMILY AI sourcing copilot, TrueFit 360 candidate matching, multichannel outreach (WhatsApp, email, phone), and ATS sync.",
    },
    fr: {
      title: "Fonctionnalités",
      description:
        "Les fonctionnalités TrueCalling — copilote IA EMILY pour le sourcing, matching candidat TrueFit 360, outreach multicanal (WhatsApp, email, téléphone) et synchronisation ATS.",
    },
    de: {
      title: "Funktionen",
      description:
        "TrueCalling-Funktionen — EMILY-KI-Sourcing-Copilot, TrueFit-360-Kandidatenmatching, Multichannel-Outreach (WhatsApp, E-Mail, Telefon) und ATS-Sync.",
    },
    es: {
      title: "Características",
      description:
        "Características de TrueCalling — copiloto IA EMILY para sourcing, matching de candidatos TrueFit 360, outreach multicanal (WhatsApp, email, teléfono) y sincronización ATS.",
    },
    it: {
      title: "Funzionalità",
      description:
        "Le funzionalità di TrueCalling — copilot IA EMILY per il sourcing, matching candidati TrueFit 360, outreach multicanale (WhatsApp, email, telefono) e sync ATS.",
    },
    nl: {
      title: "Functies",
      description:
        "TrueCalling-functies — EMILY AI-sourcing-copilot, TrueFit 360 kandidaatmatching, multichannel-outreach (WhatsApp, e-mail, telefoon) en ATS-sync.",
    },
    "pt-BR": {
      title: "Funcionalidades",
      description:
        "Funcionalidades do TrueCalling — copiloto IA EMILY para sourcing, matching de candidatos TrueFit 360, outreach multicanal (WhatsApp, email, telefone) e sync ATS.",
    },
    he: {
      title: "Features",
      description:
        "TrueCalling features — EMILY AI sourcing copilot, TrueFit 360 candidate matching, multichannel outreach (WhatsApp, email, phone), and ATS sync.",
    },
  },
  pricing: {
    en: {
      title: "Pricing",
      description:
        "TrueCalling pricing plans — Starter at $595/user/mo, Core at $895, Enterprise on quote. Book a demo to try it free with 1 sample job and 20 candidate matches. No credit card required.",
    },
    fr: {
      title: "Tarifs",
      description:
        "Tarifs TrueCalling — Starter à 595 $/utilisateur/mois, Core à 895 $, Enterprise sur devis. Réservez une démo pour tester avec 1 poste d'exemple et 20 candidats matchés. Sans carte bancaire.",
    },
    de: {
      title: "Preise",
      description:
        "TrueCalling-Preise — Starter ab 595 $/Nutzer/Monat, Core 895 $, Enterprise auf Anfrage. Buchen Sie eine Demo und testen Sie mit 1 Beispiel-Stelle und 20 Top-Kandidaten. Keine Kreditkarte nötig.",
    },
    es: {
      title: "Precios",
      description:
        "Precios de TrueCalling — Starter 595 $/usuario/mes, Core 895 $, Enterprise a medida. Reserva una demo para probarlo con 1 puesto de ejemplo y 20 candidatos. Sin tarjeta de crédito.",
    },
    it: {
      title: "Prezzi",
      description:
        "Prezzi TrueCalling — Starter 595 $/utente/mese, Core 895 $, Enterprise su preventivo. Prenota una demo per provarlo con 1 posizione di esempio e 20 candidati. Nessuna carta richiesta.",
    },
    nl: {
      title: "Prijzen",
      description:
        "TrueCalling-prijzen — Starter $595/gebruiker/maand, Core $895, Enterprise op aanvraag. Boek een demo en test met 1 voorbeeldvacature en 20 kandidaten. Geen creditcard nodig.",
    },
    "pt-BR": {
      title: "Preços",
      description:
        "Preços TrueCalling — Starter $595/usuário/mês, Core $895, Enterprise sob orçamento. Agende uma demo e teste com 1 vaga de exemplo e 20 candidatos. Sem cartão de crédito.",
    },
    he: {
      title: "Pricing",
      description:
        "TrueCalling pricing — Starter $595/user/mo, Core $895, Enterprise on quote. Book a demo to try it with 1 sample job and 20 candidate matches. No credit card required.",
    },
  },
  "book-a-demo": {
    en: {
      title: "Book a demo",
      description:
        "See TrueCalling in action. Book a 20-minute guided demo and watch EMILY turn one of your open roles into a shortlist live.",
    },
    fr: {
      title: "Réserver une démo",
      description:
        "Voyez TrueCalling en action. Réservez une démo guidée de 20 minutes et regardez EMILY transformer un de vos postes ouverts en shortlist en direct.",
    },
    de: {
      title: "Demo buchen",
      description:
        "Erleben Sie TrueCalling in Aktion. Buchen Sie eine 20-minütige Live-Demo und sehen Sie, wie EMILY eine Ihrer offenen Stellen in Echtzeit besetzt.",
    },
    es: {
      title: "Reservar una demo",
      description:
        "Vea TrueCalling en acción. Reserve una demo guiada de 20 minutos y vea cómo EMILY convierte uno de sus puestos abiertos en una shortlist en directo.",
    },
    it: {
      title: "Prenota una demo",
      description:
        "Scopri TrueCalling in azione. Prenota una demo guidata di 20 minuti e guarda EMILY trasformare una posizione aperta in una shortlist in diretta.",
    },
    nl: {
      title: "Demo boeken",
      description:
        "Zie TrueCalling in actie. Boek een begeleide demo van 20 minuten en zie hoe EMILY een van je open vacatures live omzet in een shortlist.",
    },
    "pt-BR": {
      title: "Agendar uma demo",
      description:
        "Veja o TrueCalling em ação. Agende uma demo guiada de 20 minutos e assista EMILY transformar uma vaga em shortlist ao vivo.",
    },
    he: {
      title: "Book a demo",
      description:
        "See TrueCalling in action. Book a 20-minute guided demo and watch EMILY turn one of your open roles into a shortlist live.",
    },
  },
  contact: {
    en: {
      title: "Contact",
      description:
        "Talk to the TrueCalling team. Sales, support, partnerships, press — pick the right contact channel.",
    },
    fr: {
      title: "Contact",
      description:
        "Parlez à l'équipe TrueCalling. Ventes, support, partenariats, presse — choisissez le bon canal de contact.",
    },
    de: {
      title: "Kontakt",
      description:
        "Sprechen Sie mit dem TrueCalling-Team. Vertrieb, Support, Partnerschaften, Presse — wählen Sie den passenden Kanal.",
    },
    es: {
      title: "Contacto",
      description:
        "Hable con el equipo TrueCalling. Ventas, soporte, partnerships, prensa — elija el canal adecuado.",
    },
    it: {
      title: "Contatti",
      description:
        "Parla con il team TrueCalling. Vendite, supporto, partnership, stampa — scegli il canale giusto.",
    },
    nl: {
      title: "Contact",
      description:
        "Praat met het TrueCalling-team. Sales, support, partnerships, pers — kies het juiste kanaal.",
    },
    "pt-BR": {
      title: "Contato",
      description:
        "Fale com o time TrueCalling. Vendas, suporte, parcerias, imprensa — escolha o canal certo.",
    },
    he: {
      title: "Contact",
      description:
        "Talk to the TrueCalling team. Sales, support, partnerships, press — pick the right contact channel.",
    },
  },
  faq: {
    en: {
      title: "FAQ",
      description:
        "Common questions about TrueCalling — AI sourcing, EMILY copilot, WhatsApp outreach, ATS integrations, pricing.",
    },
    fr: {
      title: "FAQ",
      description:
        "Questions fréquentes sur TrueCalling — sourcing IA, copilote EMILY, outreach WhatsApp, intégrations ATS, tarifs.",
    },
    de: {
      title: "FAQ",
      description:
        "Häufige Fragen zu TrueCalling — KI-Sourcing, EMILY-Copilot, WhatsApp-Outreach, ATS-Integrationen, Preise.",
    },
    es: {
      title: "FAQ",
      description:
        "Preguntas frecuentes sobre TrueCalling — sourcing IA, copiloto EMILY, outreach por WhatsApp, integraciones ATS, precios.",
    },
    it: {
      title: "FAQ",
      description:
        "Domande frequenti su TrueCalling — sourcing IA, copilot EMILY, outreach WhatsApp, integrazioni ATS, prezzi.",
    },
    nl: {
      title: "FAQ",
      description:
        "Veelgestelde vragen over TrueCalling — AI-sourcing, EMILY-copilot, WhatsApp-outreach, ATS-integraties, prijzen.",
    },
    "pt-BR": {
      title: "FAQ",
      description:
        "Perguntas frequentes sobre TrueCalling — sourcing com IA, copiloto EMILY, outreach via WhatsApp, integrações ATS, preços.",
    },
    he: {
      title: "FAQ",
      description:
        "Common questions about TrueCalling — AI sourcing, EMILY copilot, WhatsApp outreach, ATS integrations, pricing.",
    },
  },
  terms: {
    en: {
      title: "Terms of Service",
      description: "TrueCalling Terms of Service. License, fees, IP, liability, GDPR.",
    },
    fr: {
      title: "Conditions Générales d'Utilisation",
      description:
        "CGU de la plateforme TrueCalling. Licence, redevances, propriété intellectuelle, responsabilité, RGPD.",
    },
    de: {
      title: "AGB",
      description:
        "Allgemeine Geschäftsbedingungen von TrueCalling. Lizenz, Gebühren, geistiges Eigentum, Haftung, DSGVO.",
    },
    es: {
      title: "Términos del servicio",
      description:
        "Términos del servicio de TrueCalling. Licencia, tarifas, propiedad intelectual, responsabilidad, RGPD.",
    },
    it: {
      title: "Termini del servizio",
      description:
        "Termini del servizio TrueCalling. Licenza, tariffe, proprietà intellettuale, responsabilità, GDPR.",
    },
    nl: {
      title: "Algemene voorwaarden",
      description:
        "Algemene voorwaarden van TrueCalling. Licentie, vergoedingen, intellectueel eigendom, aansprakelijkheid, AVG.",
    },
    "pt-BR": {
      title: "Termos de uso",
      description:
        "Termos de uso da TrueCalling. Licença, tarifas, propriedade intelectual, responsabilidade, LGPD/GDPR.",
    },
    he: {
      title: "Terms of Service",
      description: "TrueCalling Terms of Service. License, fees, IP, liability, GDPR.",
    },
  },
  "legal-notice": {
    en: {
      title: "Legal Notice",
      description:
        "Legal notice for TrueCalling — publisher, hosting, intellectual property, contact.",
    },
    fr: {
      title: "Mentions légales",
      description:
        "Mentions légales TrueCalling — éditeur, hébergeur, propriété intellectuelle, contact.",
    },
    de: {
      title: "Impressum",
      description:
        "Impressum TrueCalling — Anbieter, Hosting, geistiges Eigentum, Kontakt.",
    },
    es: {
      title: "Aviso legal",
      description:
        "Aviso legal TrueCalling — editor, alojamiento, propiedad intelectual, contacto.",
    },
    it: {
      title: "Note legali",
      description:
        "Note legali TrueCalling — editore, hosting, proprietà intellettuale, contatti.",
    },
    nl: {
      title: "Juridische mededeling",
      description:
        "Juridische mededeling TrueCalling — uitgever, hosting, intellectueel eigendom, contact.",
    },
    "pt-BR": {
      title: "Aviso legal",
      description:
        "Aviso legal TrueCalling — editor, hospedagem, propriedade intelectual, contato.",
    },
    he: {
      title: "Legal Notice",
      description:
        "Legal notice for TrueCalling — publisher, hosting, intellectual property, contact.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      description:
        "How TrueCalling collects, processes and protects personal data. GDPR/CCPA compliance, retention, your rights.",
    },
    fr: {
      title: "Politique de confidentialité",
      description:
        "Comment TrueCalling collecte, traite et protège les données personnelles. Conformité RGPD/CCPA, conservation, vos droits.",
    },
    de: {
      title: "Datenschutzerklärung",
      description:
        "Wie TrueCalling personenbezogene Daten erhebt, verarbeitet und schützt. DSGVO/CCPA-Konformität, Aufbewahrung, Ihre Rechte.",
    },
    es: {
      title: "Política de privacidad",
      description:
        "Cómo TrueCalling recoge, trata y protege los datos personales. Cumplimiento RGPD/CCPA, conservación, sus derechos.",
    },
    it: {
      title: "Informativa sulla privacy",
      description:
        "Come TrueCalling raccoglie, tratta e protegge i dati personali. Conformità GDPR/CCPA, conservazione, i tuoi diritti.",
    },
    nl: {
      title: "Privacybeleid",
      description:
        "Hoe TrueCalling persoonsgegevens verzamelt, verwerkt en beschermt. AVG/CCPA-conform, bewaartermijn, uw rechten.",
    },
    "pt-BR": {
      title: "Política de privacidade",
      description:
        "Como o TrueCalling coleta, processa e protege dados pessoais. Conformidade LGPD/GDPR/CCPA, retenção, seus direitos.",
    },
    he: {
      title: "Privacy Policy",
      description:
        "How TrueCalling collects, processes and protects personal data. GDPR/CCPA compliance, retention, your rights.",
    },
  },
  cookies: {
    en: {
      title: "Cookie Policy",
      description:
        "Which cookies TrueCalling uses, why, and how to control them.",
    },
    fr: {
      title: "Politique de cookies",
      description:
        "Quels cookies TrueCalling utilise, pourquoi, et comment les contrôler.",
    },
    de: {
      title: "Cookie-Richtlinie",
      description:
        "Welche Cookies TrueCalling verwendet, warum und wie Sie sie verwalten.",
    },
    es: {
      title: "Política de cookies",
      description:
        "Qué cookies utiliza TrueCalling, por qué, y cómo controlarlas.",
    },
    it: {
      title: "Cookie Policy",
      description:
        "Quali cookie utilizza TrueCalling, perché e come gestirli.",
    },
    nl: {
      title: "Cookiebeleid",
      description:
        "Welke cookies TrueCalling gebruikt, waarom, en hoe je ze beheert.",
    },
    "pt-BR": {
      title: "Política de cookies",
      description:
        "Quais cookies o TrueCalling usa, por quê e como controlá-los.",
    },
    he: {
      title: "Cookie Policy",
      description:
        "Which cookies TrueCalling uses, why, and how to control them.",
    },
  },
};

export function getSeoMeta(route: SubRoute, locale: Locale): Meta {
  return seoMeta[route][locale];
}
