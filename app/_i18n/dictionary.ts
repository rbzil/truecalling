export const LOCALES = ["fr", "en", "he", "pt-BR", "es", "de", "it", "nl"] as const;
export type Locale = (typeof LOCALES)[number];

export const RTL_LOCALES: Locale[] = ["he"];

export const LOCALE_META: Record<Locale, { label: string; flag: string; native: string }> = {
  fr: { label: "Français", flag: "🇫🇷", native: "Français" },
  en: { label: "English", flag: "🇬🇧", native: "English" },
  he: { label: "Hebrew", flag: "🇮🇱", native: "עברית" },
  "pt-BR": { label: "Portuguese (BR)", flag: "🇧🇷", native: "Português" },
  es: { label: "Spanish", flag: "🇪🇸", native: "Español" },
  de: { label: "German", flag: "🇩🇪", native: "Deutsch" },
  it: { label: "Italian", flag: "🇮🇹", native: "Italiano" },
  nl: { label: "Dutch", flag: "🇳🇱", native: "Nederlands" },
};

type Dict = {
  // Navbar
  nav_features: string;
  nav_how: string;
  nav_benefits: string;
  nav_demo: string;
  nav_pricing: string;
  nav_blog: string;
  nav_faq: string;
  nav_contact: string;
  nav_login: string;
  nav_book: string;

  // Hero
  hero_badge: string;
  hero_h1_a: string;
  hero_h1_b: string;
  hero_subtitle: string;
  hero_cta_demo: string;
  hero_cta_video: string;
  hero_social: string;

  // Generic CTAs
  cta_book_demo: string;
};

export const DICT: Record<Locale, Dict> = {
  fr: {
    nav_features: "Fonctionnalités",
    nav_how: "Comment ça marche",
    nav_benefits: "Bénéfices",
    nav_demo: "Démo",
    nav_pricing: "Tarifs",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_login: "Espace entreprise",
    nav_book: "Réserver une démo",
    hero_badge: "Sourcing IA pour équipes recrutement",
    hero_h1_a: "Le logiciel de sourcing IA",
    hero_h1_b: "qui recrute avec précision.",
    hero_subtitle:
      "TrueCalling transforme un brief en candidats qualifiés en quelques minutes. Copilote IA EMILY, matching TrueFit 360 et outreach multicanal — WhatsApp, email, téléphone.",
    hero_cta_demo: "Réserver une démo",
    hero_cta_video: "Voir la démo produit",
    hero_social: "Utilisé par des équipes recrutement de",
    cta_book_demo: "Réserver une démo",
  },
  en: {
    nav_features: "Features",
    nav_how: "How it works",
    nav_benefits: "Benefits",
    nav_demo: "Demo",
    nav_pricing: "Pricing",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_login: "Business login",
    nav_book: "Book a demo",
    hero_badge: "AI sourcing for recruiting teams",
    hero_h1_a: "The AI sourcing software",
    hero_h1_b: "that hires with precision.",
    hero_subtitle:
      "TrueCalling turns a brief into qualified candidates in minutes. AI copilot EMILY, TrueFit 360 matching and multichannel outreach — WhatsApp, email, phone.",
    hero_cta_demo: "Book a demo",
    hero_cta_video: "Watch the product demo",
    hero_social: "Trusted by recruiting teams at",
    cta_book_demo: "Book a demo",
  },
  he: {
    nav_features: "תכונות",
    nav_how: "איך זה עובד",
    nav_benefits: "יתרונות",
    nav_demo: "הדגמה",
    nav_pricing: "מחירים",
    nav_blog: "בלוג",
    nav_faq: "שאלות נפוצות",
    nav_contact: "צור קשר",
    nav_login: "כניסה לעסקים",
    nav_book: "הזמינו הדגמה",
    hero_badge: "סורסינג מבוסס AI לצוותי גיוס",
    hero_h1_a: "תוכנת הסורסינג מבוססת ה-AI",
    hero_h1_b: "שמגייסת בדיוק.",
    hero_subtitle:
      "TrueCalling הופכת בריף למועמדים מוסמכים בתוך דקות. קופיילוט AI בשם EMILY, התאמה TrueFit 360 וסורסינג רב-ערוצי — WhatsApp, מייל, טלפון.",
    hero_cta_demo: "הזמינו הדגמה",
    hero_cta_video: "צפו בהדגמה",
    hero_social: "בשימוש צוותי גיוס מובילים",
    cta_book_demo: "הזמינו הדגמה",
  },
  "pt-BR": {
    nav_features: "Recursos",
    nav_how: "Como funciona",
    nav_benefits: "Benefícios",
    nav_demo: "Demo",
    nav_pricing: "Preços",
    nav_blog: "Blog",
    nav_faq: "Perguntas frequentes",
    nav_contact: "Contato",
    nav_login: "Acesso empresa",
    nav_book: "Agendar uma demo",
    hero_badge: "Sourcing com IA para equipes de recrutamento",
    hero_h1_a: "O software de sourcing com IA",
    hero_h1_b: "que recruta com precisão.",
    hero_subtitle:
      "A TrueCalling transforma um briefing em candidatos qualificados em minutos. Copiloto de IA EMILY, matching TrueFit 360 e outreach multicanal — WhatsApp, e-mail e telefone.",
    hero_cta_demo: "Agendar uma demo",
    hero_cta_video: "Ver demo do produto",
    hero_social: "Usado por equipes de recrutamento de",
    cta_book_demo: "Agendar uma demo",
  },
  es: {
    nav_features: "Funciones",
    nav_how: "Cómo funciona",
    nav_benefits: "Beneficios",
    nav_demo: "Demo",
    nav_pricing: "Precios",
    nav_blog: "Blog",
    nav_faq: "Preguntas frecuentes",
    nav_contact: "Contacto",
    nav_login: "Acceso empresa",
    nav_book: "Reservar demo",
    hero_badge: "Sourcing con IA para equipos de selección",
    hero_h1_a: "El software de sourcing con IA",
    hero_h1_b: "que recluta con precisión.",
    hero_subtitle:
      "TrueCalling convierte un brief en candidatos cualificados en minutos. Copiloto de IA EMILY, matching TrueFit 360 y outreach multicanal — WhatsApp, email, teléfono.",
    hero_cta_demo: "Reservar demo",
    hero_cta_video: "Ver demo del producto",
    hero_social: "Utilizado por equipos de selección de",
    cta_book_demo: "Reservar demo",
  },
  de: {
    nav_features: "Funktionen",
    nav_how: "So funktioniert's",
    nav_benefits: "Vorteile",
    nav_demo: "Demo",
    nav_pricing: "Preise",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contact: "Kontakt",
    nav_login: "Unternehmenszugang",
    nav_book: "Demo buchen",
    hero_badge: "KI-Sourcing für Recruiting-Teams",
    hero_h1_a: "Die KI-Sourcing-Software",
    hero_h1_b: "die präzise rekrutiert.",
    hero_subtitle:
      "TrueCalling verwandelt ein Briefing in qualifizierte Kandidaten in wenigen Minuten. KI-Copilot EMILY, TrueFit 360 Matching und Multi-Channel-Outreach — WhatsApp, E-Mail, Telefon.",
    hero_cta_demo: "Demo buchen",
    hero_cta_video: "Produkt-Demo ansehen",
    hero_social: "Im Einsatz bei Recruiting-Teams von",
    cta_book_demo: "Demo buchen",
  },
  it: {
    nav_features: "Funzionalità",
    nav_how: "Come funziona",
    nav_benefits: "Vantaggi",
    nav_demo: "Demo",
    nav_pricing: "Prezzi",
    nav_blog: "Blog",
    nav_faq: "FAQ",
    nav_contact: "Contatti",
    nav_login: "Accesso aziendale",
    nav_book: "Prenota una demo",
    hero_badge: "Sourcing IA per team di recruiting",
    hero_h1_a: "Il software di sourcing IA",
    hero_h1_b: "che recluta con precisione.",
    hero_subtitle:
      "TrueCalling trasforma un brief in candidati qualificati in pochi minuti. Copilota IA EMILY, matching TrueFit 360 e outreach multicanale — WhatsApp, email, telefono.",
    hero_cta_demo: "Prenota una demo",
    hero_cta_video: "Guarda la demo",
    hero_social: "Usato dai team di recruiting di",
    cta_book_demo: "Prenota una demo",
  },
  nl: {
    nav_features: "Functies",
    nav_how: "Hoe het werkt",
    nav_benefits: "Voordelen",
    nav_demo: "Demo",
    nav_pricing: "Prijzen",
    nav_blog: "Blog",
    nav_faq: "Veelgestelde vragen",
    nav_contact: "Contact",
    nav_login: "Bedrijfsportaal",
    nav_book: "Demo boeken",
    hero_badge: "AI-sourcing voor recruitmentteams",
    hero_h1_a: "De AI-sourcing software",
    hero_h1_b: "die met precisie aanneemt.",
    hero_subtitle:
      "TrueCalling zet een briefing om in gekwalificeerde kandidaten in enkele minuten. AI-copiloot EMILY, TrueFit 360 matching en multichannel outreach — WhatsApp, e-mail, telefoon.",
    hero_cta_demo: "Demo boeken",
    hero_cta_video: "Bekijk de productdemo",
    hero_social: "In gebruik bij recruitmentteams van",
    cta_book_demo: "Demo boeken",
  },
};
