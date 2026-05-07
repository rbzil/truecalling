/**
 * Locale-aware demo data for the home-page DemoAndCaseStudy section.
 *
 * Each locale gets a culturally credible cohort:
 * - 4 candidates with real-sounding names + cities + companies the local
 *   recruiter audience recognises
 * - A brief title in the relevant language convention
 * - A WhatsApp opening message that reads like a native recruiter wrote it
 *
 * Companies are chosen for SaaS / tech relevance in each market so the
 * demo still pitches a "design / product" hire across cultures.
 */

import type { Locale } from "./i18n-config";

export type DemoCandidate = {
  rank: number;
  initials: string;
  name: string;
  role: string;
  company: string;
  city: string;
  years: number;
  score: number;
  locScore: number;
  matched: string[];
  missing: string[];
  avatar: string;
};

/** UI labels for the demo's mock app shell (modal, results view, WhatsApp). */
export type DemoUi = {
  newPosition: string;
  tabs: [string, string, string, string];
  jobTitle: string;
  location: string;
  /** Tag appended after the city in the Location field (e.g. "Remote FR"). */
  locationTag: string;
  recruiter: string;
  contactEmail: string;
  contactEmailPlaceholder: string;
  minScore: string;
  activePosition: string;
  remote: string;
  cancel: string;
  next: string;
  createPosition: string;
  brief: string;
  search: string;
  refineSearch: string;
  aiAnalysis: string;
  viaWhatsapp: string;
  now: string;
};

export type DemoSet = {
  briefTitle: string;
  /** Full brief search query the typewriter renders (e.g. "Senior Product Designer, Paris, 5+ years, SaaS B2B") */
  briefSearch: string;
  whatsappMsg: string;
  /** Candidate's WhatsApp reply once outreach is sent. */
  whatsappReply: string;
  /** Online status string under the WhatsApp header (e.g. "WhatsApp · online"). */
  whatsappStatus: string;
  /** Composer empty-state placeholder. */
  composerPlaceholder: string;
  /** Time-ago label on the reply toast (e.g. "2 min ago"). */
  repliedTimeAgo: string;
  /** Mobile push-notification body when the candidate replies. */
  mobileNotifMsg: string;
  /** Analytics row above the cards: "{n} candidates analyzed · top {top} shown". */
  analyzedLabel: string;
  topShownLabel: string;
  /** Inline EMILY analysis pill on mobile demo. */
  emilyAnalysed: string;
  /** "{name} replied" toast title (use {name} placeholder). */
  repliedTitle: string;
  /** Mock app shell labels (modal, results, WhatsApp). */
  ui: DemoUi;
  candidates: DemoCandidate[];
};

const AVATAR_GRADIENTS = [
  "from-pink-500 to-fuchsia-600",
  "from-violet-500 to-indigo-600",
  "from-cyan-500 to-blue-600",
  "from-amber-500 to-orange-600",
] as const;

export const demoData: Record<Locale, DemoSet> = {
  fr: {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, Paris, 5+ ans, SaaS B2B",
    whatsappMsg:
      "Bonjour M., je vous contacte au sujet d'un poste de Senior Product Designer chez [Client]. Votre profil correspond très précisément à ce qu'ils cherchent — auriez-vous 15 min cette semaine pour en discuter ?",
    whatsappReply: "Bonjour, oui avec plaisir. Jeudi 14h ça vous convient ?",
    whatsappStatus: "WhatsApp · en ligne",
    composerPlaceholder: "Tapez un message…",
    repliedTimeAgo: "il y a 2 minutes",
    mobileNotifMsg: "Avec plaisir — on en parle quand ?",
    analyzedLabel: "50 candidats analysés",
    topShownLabel: "top 4 affichés",
    emilyAnalysed: "EMILY a analysé 1,2 Md profils",
    repliedTitle: "{name} a répondu",
    ui: {
      newPosition: "Nouveau poste",
      tabs: ["Informations", "Description", "Onboarding", "Avancé"],
      jobTitle: "Intitulé du poste",
      location: "Localisation",
      locationTag: "Remote FR",
      recruiter: "Recruteur",
      contactEmail: "Email de contact",
      contactEmailPlaceholder: "recruteur@entreprise.com",
      minScore: "Score min.",
      activePosition: "Poste actif",
      remote: "Télétravail",
      cancel: "Annuler",
      next: "Suivant",
      createPosition: "Créer le poste",
      brief: "Brief",
      search: "Rechercher",
      refineSearch: "Affiner les critères",
      aiAnalysis: "Analyse IA en cours…",
      viaWhatsapp: "via WhatsApp",
      now: "à l'instant",
    },
    candidates: [
      { rank: 1, initials: "MD", name: "M. Dubois", role: "Senior Product Designer", company: "Doctolib", city: "Paris", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SK", name: "S. Klein", role: "Lead Product Designer", company: "Alan", city: "Remote FR", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LP", name: "L. Petit", role: "Senior UX Designer", company: "Qonto", city: "Lyon", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AB", name: "A. Bernard", role: "Product Designer", company: "Spendesk", city: "Bordeaux", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },

  en: {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, San Francisco, 5+ years, SaaS B2B",
    whatsappMsg:
      "Hi M., reaching out about a Senior Product Designer role at [Client]. Your profile is a very close match for what they're looking for — could we grab 15 min this week to discuss?",
    whatsappReply: "Hi, sure happy to chat. Does Thursday 2pm work for you?",
    whatsappStatus: "WhatsApp · online",
    composerPlaceholder: "Type a message…",
    repliedTimeAgo: "2 minutes ago",
    mobileNotifMsg: "Sounds great — when do we chat?",
    analyzedLabel: "50 candidates analyzed",
    topShownLabel: "top 4 shown",
    emilyAnalysed: "EMILY analysed 1.2B profiles",
    repliedTitle: "{name} replied",
    ui: {
      newPosition: "New position",
      tabs: ["Information", "Description", "Onboarding", "Advanced"],
      jobTitle: "Job title",
      location: "Location",
      locationTag: "Remote US",
      recruiter: "Recruiter",
      contactEmail: "Contact email",
      contactEmailPlaceholder: "recruiter@company.com",
      minScore: "Min score",
      activePosition: "Active position",
      remote: "Remote",
      cancel: "Cancel",
      next: "Next",
      createPosition: "Create position",
      brief: "Brief",
      search: "Search",
      refineSearch: "Refine search criteria",
      aiAnalysis: "AI analysis in progress…",
      viaWhatsapp: "via WhatsApp",
      now: "now",
    },
    candidates: [
      { rank: 1, initials: "MC", name: "M. Carter", role: "Senior Product Designer", company: "Stripe", city: "San Francisco", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SP", name: "S. Patel", role: "Lead Product Designer", company: "Notion", city: "Remote US", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LK", name: "L. Kim", role: "Senior UX Designer", company: "Linear", city: "New York", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AW", name: "A. Wright", role: "Product Designer", company: "Figma", city: "London", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },

  de: {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, München, 5+ Jahre, SaaS B2B",
    whatsappMsg:
      "Hallo M., ich melde mich wegen einer Stelle als Senior Product Designer bei [Kunde]. Ihr Profil passt sehr genau zu dem, was gesucht wird — hätten Sie diese Woche 15 Minuten für ein kurzes Gespräch?",
    whatsappReply: "Hallo, gerne. Donnerstag 14 Uhr passt das?",
    whatsappStatus: "WhatsApp · online",
    composerPlaceholder: "Nachricht schreiben…",
    repliedTimeAgo: "vor 2 Minuten",
    mobileNotifMsg: "Klingt gut — wann reden wir?",
    analyzedLabel: "50 Kandidaten analysiert",
    topShownLabel: "Top 4 angezeigt",
    emilyAnalysed: "EMILY hat 1,2 Mrd. Profile analysiert",
    repliedTitle: "{name} hat geantwortet",
    ui: {
      newPosition: "Neue Stelle",
      tabs: ["Informationen", "Beschreibung", "Onboarding", "Erweitert"],
      jobTitle: "Stellenbezeichnung",
      location: "Standort",
      locationTag: "Remote DE",
      recruiter: "Recruiter",
      contactEmail: "Kontakt-E-Mail",
      contactEmailPlaceholder: "recruiter@unternehmen.de",
      minScore: "Min. Score",
      activePosition: "Aktive Stelle",
      remote: "Remote",
      cancel: "Abbrechen",
      next: "Weiter",
      createPosition: "Stelle anlegen",
      brief: "Brief",
      search: "Suchen",
      refineSearch: "Suchkriterien verfeinern",
      aiAnalysis: "KI-Analyse läuft…",
      viaWhatsapp: "via WhatsApp",
      now: "jetzt",
    },
    candidates: [
      { rank: 1, initials: "MS", name: "M. Schmidt", role: "Senior Product Designer", company: "Personio", city: "München", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SM", name: "S. Müller", role: "Lead Product Designer", company: "N26", city: "Berlin", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LW", name: "L. Wagner", role: "Senior UX Designer", company: "Celonis", city: "Hamburg", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AB", name: "A. Becker", role: "Product Designer", company: "GetYourGuide", city: "Köln", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },

  es: {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, Barcelona, 5+ años, SaaS B2B",
    whatsappMsg:
      "Hola M., te contacto por un puesto de Senior Product Designer en [Cliente]. Tu perfil encaja muy bien con lo que buscan — ¿tendrías 15 minutos esta semana para hablarlo?",
    whatsappReply: "Hola, claro encantado. ¿El jueves a las 14h te va bien?",
    whatsappStatus: "WhatsApp · en línea",
    composerPlaceholder: "Escribe un mensaje…",
    repliedTimeAgo: "hace 2 minutos",
    mobileNotifMsg: "Me encantaría — ¿cuándo hablamos?",
    analyzedLabel: "50 candidatos analizados",
    topShownLabel: "top 4 mostrados",
    emilyAnalysed: "EMILY ha analizado 1.200 M de perfiles",
    repliedTitle: "{name} ha respondido",
    ui: {
      newPosition: "Nueva vacante",
      tabs: ["Información", "Descripción", "Onboarding", "Avanzado"],
      jobTitle: "Título del puesto",
      location: "Ubicación",
      locationTag: "Remote ES",
      recruiter: "Recruiter",
      contactEmail: "Email de contacto",
      contactEmailPlaceholder: "recruiter@empresa.com",
      minScore: "Score mín.",
      activePosition: "Vacante activa",
      remote: "Remoto",
      cancel: "Cancelar",
      next: "Siguiente",
      createPosition: "Crear vacante",
      brief: "Brief",
      search: "Buscar",
      refineSearch: "Refinar criterios",
      aiAnalysis: "Análisis IA en curso…",
      viaWhatsapp: "vía WhatsApp",
      now: "ahora",
    },
    candidates: [
      { rank: 1, initials: "MG", name: "M. García", role: "Senior Product Designer", company: "Glovo", city: "Barcelona", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SM", name: "S. Martínez", role: "Lead Product Designer", company: "Cabify", city: "Madrid", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LL", name: "L. López", role: "Senior UX Designer", company: "TravelPerk", city: "Valencia", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AS", name: "A. Sánchez", role: "Product Designer", company: "Factorial", city: "Sevilla", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },

  it: {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, Milano, 5+ anni, SaaS B2B",
    whatsappMsg:
      "Ciao M., ti contatto per una posizione di Senior Product Designer in [Cliente]. Il tuo profilo è molto in linea con quello che cercano — avresti 15 minuti questa settimana per parlarne?",
    whatsappReply: "Ciao, certo volentieri. Giovedì alle 14 ti va bene?",
    whatsappStatus: "WhatsApp · online",
    composerPlaceholder: "Scrivi un messaggio…",
    repliedTimeAgo: "2 minuti fa",
    mobileNotifMsg: "Volentieri — quando ci sentiamo?",
    analyzedLabel: "50 candidati analizzati",
    topShownLabel: "top 4 mostrati",
    emilyAnalysed: "EMILY ha analizzato 1,2 Mld profili",
    repliedTitle: "{name} ha risposto",
    ui: {
      newPosition: "Nuova posizione",
      tabs: ["Informazioni", "Descrizione", "Onboarding", "Avanzato"],
      jobTitle: "Titolo della posizione",
      location: "Sede",
      locationTag: "Remote IT",
      recruiter: "Recruiter",
      contactEmail: "Email di contatto",
      contactEmailPlaceholder: "recruiter@azienda.it",
      minScore: "Score min.",
      activePosition: "Posizione attiva",
      remote: "Remoto",
      cancel: "Annulla",
      next: "Avanti",
      createPosition: "Crea posizione",
      brief: "Brief",
      search: "Cerca",
      refineSearch: "Affina i criteri",
      aiAnalysis: "Analisi IA in corso…",
      viaWhatsapp: "via WhatsApp",
      now: "ora",
    },
    candidates: [
      { rank: 1, initials: "MR", name: "M. Rossi", role: "Senior Product Designer", company: "Satispay", city: "Milano", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SB", name: "S. Bianchi", role: "Lead Product Designer", company: "Bending Spoons", city: "Roma", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LR", name: "L. Romano", role: "Senior UX Designer", company: "Scalapay", city: "Torino", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AC", name: "A. Conti", role: "Product Designer", company: "Casavo", city: "Bologna", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },

  nl: {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, Amsterdam, 5+ jaar, SaaS B2B",
    whatsappMsg:
      "Hi M., ik neem contact op over een Senior Product Designer-rol bij [Klant]. Je profiel sluit erg goed aan bij wat ze zoeken — zou je deze week 15 min hebben om dit te bespreken?",
    whatsappReply: "Hi, ja zeker. Donderdag 14u, schikt dat?",
    whatsappStatus: "WhatsApp · online",
    composerPlaceholder: "Typ een bericht…",
    repliedTimeAgo: "2 minuten geleden",
    mobileNotifMsg: "Klinkt goed — wanneer praten we?",
    analyzedLabel: "50 kandidaten geanalyseerd",
    topShownLabel: "top 4 getoond",
    emilyAnalysed: "EMILY analyseerde 1,2 mld profielen",
    repliedTitle: "{name} heeft gereageerd",
    ui: {
      newPosition: "Nieuwe vacature",
      tabs: ["Informatie", "Beschrijving", "Onboarding", "Geavanceerd"],
      jobTitle: "Functietitel",
      location: "Locatie",
      locationTag: "Remote NL",
      recruiter: "Recruiter",
      contactEmail: "Contact-e-mail",
      contactEmailPlaceholder: "recruiter@bedrijf.nl",
      minScore: "Min. score",
      activePosition: "Actieve vacature",
      remote: "Remote",
      cancel: "Annuleren",
      next: "Volgende",
      createPosition: "Vacature aanmaken",
      brief: "Brief",
      search: "Zoeken",
      refineSearch: "Criteria verfijnen",
      aiAnalysis: "AI-analyse loopt…",
      viaWhatsapp: "via WhatsApp",
      now: "nu",
    },
    candidates: [
      { rank: 1, initials: "MV", name: "M. de Vries", role: "Senior Product Designer", company: "Adyen", city: "Amsterdam", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SJ", name: "S. Jansen", role: "Lead Product Designer", company: "Bunq", city: "Rotterdam", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LB", name: "L. Bakker", role: "Senior UX Designer", company: "Mollie", city: "Utrecht", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AV", name: "A. Visser", role: "Product Designer", company: "Mews", city: "Den Haag", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },

  "pt-BR": {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, São Paulo, 5+ anos, SaaS B2B",
    whatsappMsg:
      "Olá M., estou entrando em contato sobre uma vaga de Senior Product Designer na [Cliente]. Seu perfil encaixa muito bem com o que estão buscando — você teria 15 min esta semana para conversar?",
    whatsappReply: "Oi, claro com prazer. Quinta-feira 14h funciona?",
    whatsappStatus: "WhatsApp · online",
    composerPlaceholder: "Digite uma mensagem…",
    repliedTimeAgo: "há 2 minutos",
    mobileNotifMsg: "Adoraria — quando a gente conversa?",
    analyzedLabel: "50 candidatos analisados",
    topShownLabel: "top 4 exibidos",
    emilyAnalysed: "EMILY analisou 1,2 bi de perfis",
    repliedTitle: "{name} respondeu",
    ui: {
      newPosition: "Nova vaga",
      tabs: ["Informações", "Descrição", "Onboarding", "Avançado"],
      jobTitle: "Cargo",
      location: "Localização",
      locationTag: "Remote BR",
      recruiter: "Recrutador",
      contactEmail: "E-mail de contato",
      contactEmailPlaceholder: "recrutador@empresa.com.br",
      minScore: "Score mín.",
      activePosition: "Vaga ativa",
      remote: "Remoto",
      cancel: "Cancelar",
      next: "Próximo",
      createPosition: "Criar vaga",
      brief: "Brief",
      search: "Buscar",
      refineSearch: "Refinar critérios",
      aiAnalysis: "Análise por IA em andamento…",
      viaWhatsapp: "via WhatsApp",
      now: "agora",
    },
    candidates: [
      { rank: 1, initials: "MS", name: "M. Silva", role: "Senior Product Designer", company: "Nubank", city: "São Paulo", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SS", name: "S. Souza", role: "Lead Product Designer", company: "iFood", city: "Rio de Janeiro", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LP", name: "L. Pereira", role: "Senior UX Designer", company: "QuintoAndar", city: "Belo Horizonte", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AS", name: "A. Santos", role: "Product Designer", company: "Loft", city: "Curitiba", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },

  he: {
    briefTitle: "Senior Product Designer",
    briefSearch: "Senior Product Designer, Tel Aviv, 5+ שנים, SaaS B2B",
    // RTL Hebrew copy. Latin product/company names + technical skills are
    // intentionally kept in English — that's how Israeli tech recruiters
    // actually write outreach.
    whatsappMsg:
      "היי, אני פונה אלייך לגבי תפקיד Senior Product Designer ב-[לקוח]. הפרופיל שלך מאוד מתאים למה שהם מחפשים — האם יהיו לך 15 דקות השבוע לדבר?",
    whatsappReply: "היי, בטח בשמחה. יום חמישי בשעה 14:00 נוח לך?",
    whatsappStatus: "WhatsApp · מחובר",
    composerPlaceholder: "כתבו הודעה…",
    repliedTimeAgo: "לפני 2 דקות",
    mobileNotifMsg: "בשמחה — מתי מדברים?",
    analyzedLabel: "50 מועמדים נותחו",
    topShownLabel: "4 העליונים מוצגים",
    emilyAnalysed: "EMILY ניתחה 1.2 מיליארד פרופילים",
    repliedTitle: "{name} השיבו",
    ui: {
      newPosition: "משרה חדשה",
      tabs: ["פרטים", "תיאור", "Onboarding", "מתקדם"],
      jobTitle: "שם המשרה",
      location: "מיקום",
      locationTag: "Remote IL",
      recruiter: "מגייס/ת",
      contactEmail: "אימייל ליצירת קשר",
      contactEmailPlaceholder: "recruiter@company.co.il",
      minScore: "ציון מינימלי",
      activePosition: "משרה פעילה",
      remote: "עבודה מרחוק",
      cancel: "ביטול",
      next: "הבא",
      createPosition: "יצירת משרה",
      brief: "תקציר",
      search: "חיפוש",
      refineSearch: "חידוד קריטריונים",
      aiAnalysis: "ניתוח AI בתהליך…",
      viaWhatsapp: "דרך WhatsApp",
      now: "עכשיו",
    },
    candidates: [
      { rank: 1, initials: "MC", name: "M. Cohen", role: "Senior Product Designer", company: "Wix", city: "Tel Aviv", years: 7.2, score: 96, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: [], avatar: AVATAR_GRADIENTS[0] },
      { rank: 2, initials: "SL", name: "S. Levi", role: "Lead Product Designer", company: "Monday", city: "Herzliya", years: 5.8, score: 92, locScore: 40, matched: ["Figma", "Design Systems", "User Research", "Prototyping"], missing: ["Motion"], avatar: AVATAR_GRADIENTS[1] },
      { rank: 3, initials: "LM", name: "L. Mizrahi", role: "Senior UX Designer", company: "Lemonade", city: "Haifa", years: 6.4, score: 88, locScore: 40, matched: ["Figma", "User Research", "Prototyping"], missing: ["Design Systems"], avatar: AVATAR_GRADIENTS[2] },
      { rank: 4, initials: "AP", name: "A. Peretz", role: "Product Designer", company: "Riskified", city: "Jerusalem", years: 4.1, score: 85, locScore: 40, matched: ["Figma", "Design Systems", "Prototyping"], missing: ["Accessibility"], avatar: AVATAR_GRADIENTS[3] },
    ],
  },
};

export function getDemoData(locale: Locale): DemoSet {
  return demoData[locale] ?? demoData.en;
}
