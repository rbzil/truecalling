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

  // Features section (6 cards)
  features_eyebrow: string;
  features_h2_a: string;
  features_subtitle: string;
  f1_title: string; f1_desc: string;
  f2_title: string; f2_desc: string;
  f3_title: string; f3_desc: string;
  f4_title: string; f4_desc: string;
  f5_title: string; f5_desc: string;
  f6_title: string; f6_desc: string;

  // Meet EMILY block
  emily_eyebrow: string;
  emily_h3_lead: string;
  emily_subtitle: string;
  emily_c1_title: string; emily_c1_desc: string;
  emily_c2_title: string; emily_c2_desc: string;
  emily_c3_title: string; emily_c3_desc: string;

  // How it works (5 steps)
  how_eyebrow: string;
  how_h2_a: string;
  how_subtitle: string;
  s1_title: string; s1_desc: string;
  s2_title: string; s2_desc: string;
  s3_title: string; s3_desc: string;
  s4_title: string; s4_desc: string;
  s5_title: string; s5_desc: string;

  // Benefits — stats grid
  benefits_eyebrow: string;
  benefits_h2_a: string;
  benefits_subtitle: string;
  st1_title: string; st1_desc: string;
  st2_title: string; st2_desc: string;
  st3_title: string; st3_desc: string;
  st4_title: string; st4_desc: string;
  st5_title: string; st5_desc: string;
  st6_title: string; st6_desc: string;

  // Benefits — ATS block
  ats_h3_a: string;
  ats_h3_b: string;
  ats_subtitle: string;
  ats1_title: string; ats1_desc: string;
  ats2_title: string; ats2_desc: string;
  ats3_title: string; ats3_desc: string;
  ats4_title: string; ats4_desc: string;
  ats_compatible: string;
  ats_node_tc_label: string;
  ats_node_ats_label: string;
  ats_kpi1_label: string; ats_kpi1_value: string;
  ats_kpi2_label: string; ats_kpi2_value: string;
  ats_kpi3_label: string; ats_kpi3_value: string;

  // Benefits — case study
  case_h3_a: string;
  case_h3_b: string;
  case_subtitle: string;
  case_eyebrow: string;
  case_h4: string;
  case_stage1_label: string; case_stage1_value: string;
  case_stage2_label: string; case_stage2_value: string;
  case_stage3_label: string; case_stage3_value: string;
  case_stage4_label: string; case_stage4_value: string;
  case_stage5_label: string; case_stage5_value: string;
  case_result: string;
  case_result_caption: string;
  case_quote: string;
  case_quote_author: string;

  // Product demo
  demo_eyebrow: string;
  demo_h2: string;
  demo_subtitle: string;
  demo_replay: string;
  demo_replay_aria: string;

  // Pricing
  pricing_eyebrow: string;
  pricing_h2: string;
  pricing_subtitle: string;
  pricing_billing_aria: string;
  pricing_monthly: string;
  pricing_annual: string;
  pricing_per_user: string;
  pricing_quote: string;
  pricing_most_popular: string;
  starter_tagline: string;
  core_tagline: string;
  enterprise_tagline: string;
  starter_f1: string; starter_f2: string; starter_f3: string; starter_f4: string; starter_f5: string; starter_f6: string; starter_f7: string;
  core_f1: string; core_f2: string; core_f3: string; core_f4: string;
  ent_f1: string; ent_f2: string; ent_f3: string; ent_f4: string;
  cta_start: string;
  cta_contact: string;

  // Final CTA
  final_h2: string;
  final_subtitle: string;

  // Footer
  footer_about: string;
  footer_col_product: string;
  footer_col_company: string;
  footer_col_legal: string;
  footer_about_link: string;
  footer_legal_mentions: string;
  footer_gdpr: string;
  footer_privacy: string;
  footer_copyright: string;
  footer_made: string;
};

export const DICT: Record<Locale, Dict> = {
  fr: {
    nav_features: "Fonctionnalités", nav_how: "Comment ça marche", nav_benefits: "Bénéfices",
    nav_demo: "Démo", nav_pricing: "Tarifs", nav_blog: "Blog", nav_faq: "FAQ",
    nav_contact: "Contact", nav_login: "Espace entreprise", nav_book: "Réserver une démo",
    hero_badge: "Sourcing IA pour équipes recrutement",
    hero_h1_a: "Le logiciel de sourcing IA",
    hero_h1_b: "qui recrute avec précision.",
    hero_subtitle: "TrueCalling transforme un brief en candidats qualifiés en quelques minutes. Copilote IA EMILY, matching TrueFit 360 et outreach multicanal — WhatsApp, email, téléphone.",
    hero_cta_demo: "Réserver une démo", hero_cta_video: "Voir la démo produit",
    hero_social: "Utilisé par des équipes recrutement de", cta_book_demo: "Réserver une démo",

    features_eyebrow: "Fonctionnalités", features_h2_a: "Capacités cœur de",
    features_subtitle: "Sourcing IA, matching et engagement candidat — sur une seule plateforme.",
    f1_title: "Intelligence des talents explicable",
    f1_desc: "Nos modèles IA analysent l'expérience, les compétences et les signaux contextuels des candidats pour identifier la meilleure adéquation — et expliquent pourquoi.",
    f2_title: "EMILY™ — copilote IA de sourcing",
    f2_desc: "EMILY engage et qualifie les candidats sur WhatsApp avant même que les recruteurs n'entrent dans la conversation.",
    f3_title: "Matching candidat multi-couches",
    f3_desc: "Les candidats sont classés par analyse sémantique et signaux contextuels — pas seulement par mots-clés.",
    f4_title: "1,2 Md+ profils candidats",
    f4_desc: "Accédez à plus de 1,2 milliard de profils sourcés à l'échelle mondiale, mis à jour en continu.",
    f5_title: "Engagez les candidats sur WhatsApp",
    f5_desc: "Touchez les candidats où ils sont vraiment actifs, avec des relances et des suivis automatisés.",
    f6_title: "Découverte sémantique de talents",
    f6_desc: "Trouvez les candidats pertinents en quelques minutes grâce à la recherche domain-aware et l'intelligence sémantique.",

    emily_eyebrow: "IA conversationnelle pour WhatsApp", emily_h3_lead: "Découvrez",
    emily_subtitle: "Le premier copilote IA qui engage les candidats directement sur WhatsApp, avec plus de 90 % de taux d'ouverture.",
    emily_c1_title: "90 %+ de taux d'ouverture",
    emily_c1_desc: "Quand LinkedIn InMail plafonne à 18-25 %, EMILY atteint les candidats là où ils répondent vraiment.",
    emily_c2_title: "Qualification automatisée",
    emily_c2_desc: "EMILY pose les bonnes questions, filtre les profils et ne transmet que les candidats qualifiés.",
    emily_c3_title: "Planification intégrée",
    emily_c3_desc: "Relances intelligentes et planification automatique sans intervention humaine.",

    how_eyebrow: "Comment ça marche", how_h2_a: "Comment fonctionne",
    how_subtitle: "Du brief au candidat qualifié, en cinq étapes — sans changer d'outil.",
    s1_title: "Définissez vos critères",
    s1_desc: "Décrivez votre candidat idéal en langage naturel. Notre IA comprend vos exigences instantanément.",
    s2_title: "Lancez la recherche",
    s2_desc: "Notre IA scanne 1,2 Md+ profils et identifie les meilleurs candidats en quelques minutes.",
    s3_title: "Construisez votre présélection",
    s3_desc: "Évaluez les candidats avec le score IA (matching, résilience et réputation digitale) et bâtissez votre présélection.",
    s4_title: "EMILY™ engage les candidats sur WhatsApp",
    s4_desc: "En un clic, EMILY contacte les candidats sélectionnés sur WhatsApp avec des messages personnalisés.",
    s5_title: "Transfert vers votre ATS",
    s5_desc: "Les candidats qualifiés sont transférés automatiquement vers votre ATS (Workday, Greenhouse, SAP SuccessFactors, etc.).",

    benefits_eyebrow: "Bénéfices", benefits_h2_a: "L'impact de",
    benefits_subtitle: "Des résultats mesurables sur l'ensemble de votre workflow de sourcing et de recrutement.",
    st1_title: "Sourcing plus rapide", st1_desc: "Trouvez des candidats qualifiés en minutes plutôt qu'en jours.",
    st2_title: "Taux d'ouverture WhatsApp", st2_desc: "Engagez les candidats là où ils lisent vraiment leurs messages.",
    st3_title: "Précision de matching", st3_desc: "Le score IA identifie le meilleur candidat.",
    st4_title: "Coûts de recrutement réduits", st4_desc: "Réduisez le sourcing manuel, l'outreach et le screening.",
    st5_title: "Rétention plus élevée", st5_desc: "Recrutez des candidats alignés avec le poste et la culture.",
    st6_title: "Scalabilité illimitée", st6_desc: "Scalez votre recrutement sans agrandir l'équipe.",

    ats_h3_a: "Intégrations ATS", ats_h3_b: "sans friction",
    ats_subtitle: "Connectez TrueCalling à votre ATS et conservez votre workflow de recrutement intact.",
    ats1_title: "Synchronisation bidirectionnelle", ats1_desc: "Candidats et offres se synchronisent automatiquement entre TrueCalling et votre ATS.",
    ats2_title: "Mises à jour en temps réel", ats2_desc: "Recevez des updates instantanées dès qu'un statut candidat change.",
    ats3_title: "Statuts mis à jour automatiquement", ats3_desc: "Les statuts candidats et offres restent synchronisés sans travail manuel.",
    ats4_title: "Paramètres flexibles", ats4_desc: "Personnalisez le mapping et les règles de sync pour matcher votre process.",
    ats_compatible: "Compatible avec votre stack actuel",
    ats_node_tc_label: "Sourcing IA", ats_node_ats_label: "Gestion candidats",
    ats_kpi1_label: "Candidats", ats_kpi1_value: "Auto sync",
    ats_kpi2_label: "Offres", ats_kpi2_value: "Import / Export",
    ats_kpi3_label: "Statuts", ats_kpi3_value: "Temps réel",

    case_h3_a: "Du sourcing aux candidats qualifiés", case_h3_b: "en quelques heures",
    case_subtitle: "Voilà à quoi ressemble un vrai workflow de sourcing avec TrueCalling.",
    case_eyebrow: "Exemple", case_h4: "Du sourcing à la conversation en moins de 24 h",
    case_stage1_label: "Rôle", case_stage1_value: "Senior Data Engineer — Paris",
    case_stage2_label: "Candidats identifiés", case_stage2_value: "26",
    case_stage3_label: "Candidats présélectionnés", case_stage3_value: "11",
    case_stage4_label: "Candidats contactés via WhatsApp", case_stage4_value: "7",
    case_stage5_label: "Réponses sous 24 heures", case_stage5_value: "7",
    case_result: "Résultat", case_result_caption: "candidats joints en moins de 24 heures",
    case_quote: "LinkedIn est une base de données ; TrueCalling lance la conversation. Trouver les bonnes personnes est facile, les faire répondre est le vrai défi. En moins de 24 heures, nous avions 7 candidats top dans notre boîte de réception, prêts à parler. C'est un niveau d'engagement que je n'avais jamais vu ailleurs.",
    case_quote_author: "— Talent Management Director, Leading IT Services Group, Espagne",

    demo_eyebrow: "Démo produit",
    demo_h2: "Du brief au candidat qualifié en quelques minutes.",
    demo_subtitle: "Du brief au candidat qui répond, en moins d'une minute.",
    demo_replay: "Rejouer", demo_replay_aria: "Rejouer la démo",

    pricing_eyebrow: "Tarifs", pricing_h2: "Une offre par étape de croissance.",
    pricing_subtitle: "Sans engagement, sans frais cachés. Annulez à tout moment.",
    pricing_billing_aria: "Période de facturation",
    pricing_monthly: "Mensuel", pricing_annual: "Annuel",
    pricing_per_user: "/utilisateur/mois", pricing_quote: "Sur devis", pricing_most_popular: "Plus populaire",
    starter_tagline: "Pour les équipes qui structurent leur sourcing.",
    core_tagline: "Pour les équipes qui scalent leurs recrutements.",
    enterprise_tagline: "Pour les grandes organisations.",
    starter_f1: "Jusqu'à 10 fiches de poste",
    starter_f2: "Outreach multi-canal (WhatsApp, email, téléphone)",
    starter_f3: "Collaboration d'équipe",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/test)",
    core_f1: "Fiches de poste illimitées",
    core_f2: "Tout ce qui est dans Starter",
    core_f3: "1 intégration ATS",
    core_f4: "Workflows IA personnalisés",
    ent_f1: "Tout ce qui est dans Core",
    ent_f2: "Intégrations ATS illimitées",
    ent_f3: "Recherche avancée",
    ent_f4: "Accompagnement dédié",
    cta_start: "Commencer", cta_contact: "Nous contacter",

    final_h2: "Prêt à recruter autrement ?",
    final_subtitle: "Voyez en 20 minutes ce que TrueCalling peut faire pour vos prochains recrutements.",

    footer_about: "Sourcing IA, matching et outreach multi-canal pour les équipes recrutement modernes.",
    footer_col_product: "Produit", footer_col_company: "Entreprise", footer_col_legal: "Légal",
    footer_about_link: "À propos", footer_legal_mentions: "Mentions légales",
    footer_gdpr: "RGPD", footer_privacy: "Politique de confidentialité",
    footer_copyright: "© 2026 TrueCalling. Tous droits réservés.",
    footer_made: "Fait avec attention pour les recruteurs.",
  },

  en: {
    nav_features: "Features", nav_how: "How it works", nav_benefits: "Benefits",
    nav_demo: "Demo", nav_pricing: "Pricing", nav_blog: "Blog", nav_faq: "FAQ",
    nav_contact: "Contact", nav_login: "Business login", nav_book: "Book a demo",
    hero_badge: "AI sourcing for recruiting teams",
    hero_h1_a: "The AI sourcing software", hero_h1_b: "that hires with precision.",
    hero_subtitle: "TrueCalling turns a brief into qualified candidates in minutes. AI copilot EMILY, TrueFit 360 matching and multichannel outreach — WhatsApp, email, phone.",
    hero_cta_demo: "Book a demo", hero_cta_video: "Watch the product demo",
    hero_social: "Trusted by recruiting teams at", cta_book_demo: "Book a demo",

    features_eyebrow: "Features", features_h2_a: "Core capabilities of",
    features_subtitle: "AI sourcing, matching and candidate engagement — on a single platform.",
    f1_title: "Explainable talent intelligence",
    f1_desc: "Our AI models analyze candidate experience, skills and contextual signals to identify the best fit — and explain why.",
    f2_title: "EMILY™ — AI sourcing copilot",
    f2_desc: "EMILY engages and qualifies candidates on WhatsApp before recruiters even enter the conversation.",
    f3_title: "Multi-layered candidate matching",
    f3_desc: "Candidates are ranked through semantic analysis and contextual signals — not just keywords.",
    f4_title: "1.2B+ candidate profiles",
    f4_desc: "Access over 1.2 billion globally sourced profiles, continuously updated.",
    f5_title: "Engage candidates on WhatsApp",
    f5_desc: "Reach candidates where they are truly active, with automated follow-ups and reminders.",
    f6_title: "Semantic talent discovery",
    f6_desc: "Find relevant candidates in minutes through domain-aware search and semantic intelligence.",

    emily_eyebrow: "Conversational AI for WhatsApp", emily_h3_lead: "Meet",
    emily_subtitle: "The first AI copilot that engages candidates directly on WhatsApp, with over 90% open rates.",
    emily_c1_title: "90%+ open rate", emily_c1_desc: "While LinkedIn InMail caps at 18–25%, EMILY reaches candidates where they actually reply.",
    emily_c2_title: "Automated qualification", emily_c2_desc: "EMILY asks the right questions, filters profiles and only forwards qualified candidates.",
    emily_c3_title: "Built-in scheduling", emily_c3_desc: "Smart follow-ups and automatic scheduling without human intervention.",

    how_eyebrow: "How it works", how_h2_a: "How",
    how_subtitle: "From brief to qualified candidate in five steps — without switching tools.",
    s1_title: "Define your criteria", s1_desc: "Describe your ideal candidate in natural language. Our AI understands your requirements instantly.",
    s2_title: "Launch the search", s2_desc: "Our AI scans 1.2B+ profiles and identifies the best candidates in minutes.",
    s3_title: "Build your shortlist", s3_desc: "Evaluate candidates with the AI score (match, resilience and digital reputation) and build your shortlist.",
    s4_title: "EMILY™ engages candidates on WhatsApp", s4_desc: "In one click, EMILY contacts selected candidates on WhatsApp with personalized messages.",
    s5_title: "Hand-off to your ATS", s5_desc: "Qualified candidates are automatically transferred to your ATS (Workday, Greenhouse, SAP SuccessFactors, etc.).",

    benefits_eyebrow: "Benefits", benefits_h2_a: "The impact of",
    benefits_subtitle: "Measurable results across your entire sourcing and recruiting workflow.",
    st1_title: "Faster sourcing", st1_desc: "Find qualified candidates in minutes instead of days.",
    st2_title: "WhatsApp open rate", st2_desc: "Engage candidates where they actually read their messages.",
    st3_title: "Match precision", st3_desc: "The AI score identifies the best candidate.",
    st4_title: "Lower hiring costs", st4_desc: "Cut manual sourcing, outreach and screening.",
    st5_title: "Higher retention", st5_desc: "Hire candidates aligned with the role and culture.",
    st6_title: "Unlimited scale", st6_desc: "Scale your hiring without growing the team.",

    ats_h3_a: "ATS integrations", ats_h3_b: "without friction",
    ats_subtitle: "Connect TrueCalling to your ATS and keep your hiring workflow intact.",
    ats1_title: "Two-way sync", ats1_desc: "Candidates and openings sync automatically between TrueCalling and your ATS.",
    ats2_title: "Real-time updates", ats2_desc: "Get instant updates the moment a candidate status changes.",
    ats3_title: "Auto-updated statuses", ats3_desc: "Candidate and job statuses stay in sync with no manual work.",
    ats4_title: "Flexible settings", ats4_desc: "Customize mapping and sync rules to match your process.",
    ats_compatible: "Compatible with your current stack",
    ats_node_tc_label: "AI sourcing", ats_node_ats_label: "Candidate management",
    ats_kpi1_label: "Candidates", ats_kpi1_value: "Auto sync",
    ats_kpi2_label: "Openings", ats_kpi2_value: "Import / Export",
    ats_kpi3_label: "Statuses", ats_kpi3_value: "Real time",

    case_h3_a: "From sourcing to qualified candidates", case_h3_b: "in hours",
    case_subtitle: "This is what a real sourcing workflow looks like with TrueCalling.",
    case_eyebrow: "Example", case_h4: "From sourcing to conversation in under 24h",
    case_stage1_label: "Role", case_stage1_value: "Senior Data Engineer — Paris",
    case_stage2_label: "Candidates identified", case_stage2_value: "26",
    case_stage3_label: "Candidates shortlisted", case_stage3_value: "11",
    case_stage4_label: "Contacted via WhatsApp", case_stage4_value: "7",
    case_stage5_label: "Replies within 24 hours", case_stage5_value: "7",
    case_result: "Result", case_result_caption: "candidates reached in under 24 hours",
    case_quote: "LinkedIn is a database; TrueCalling starts the conversation. Finding the right people is easy, getting them to reply is the real challenge. In less than 24 hours, we had 7 top candidates in our inbox, ready to talk. It's a level of engagement I'd never seen anywhere else.",
    case_quote_author: "— Talent Management Director, Leading IT Services Group, Spain",

    demo_eyebrow: "Product demo", demo_h2: "From brief to qualified candidate in minutes.",
    demo_subtitle: "From brief to candidate who replies, in under a minute.",
    demo_replay: "Replay", demo_replay_aria: "Replay the demo",

    pricing_eyebrow: "Pricing", pricing_h2: "One plan per growth stage.",
    pricing_subtitle: "No commitment, no hidden fees. Cancel anytime.",
    pricing_billing_aria: "Billing period",
    pricing_monthly: "Monthly", pricing_annual: "Annual",
    pricing_per_user: "/user/month", pricing_quote: "Custom", pricing_most_popular: "Most popular",
    starter_tagline: "For teams structuring their sourcing.",
    core_tagline: "For teams scaling their hiring.",
    enterprise_tagline: "For large organizations.",
    starter_f1: "Up to 10 job listings",
    starter_f2: "Multi-channel outreach (WhatsApp, email, phone)",
    starter_f3: "Team collaboration",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/test)",
    core_f1: "Unlimited job listings", core_f2: "Everything in Starter",
    core_f3: "1 ATS integration", core_f4: "Custom AI workflows",
    ent_f1: "Everything in Core", ent_f2: "Unlimited ATS integrations",
    ent_f3: "Advanced search", ent_f4: "Dedicated success manager",
    cta_start: "Get started", cta_contact: "Contact us",

    final_h2: "Ready to hire differently?",
    final_subtitle: "See in 20 minutes what TrueCalling can do for your next hires.",

    footer_about: "AI sourcing, matching and multi-channel outreach for modern recruiting teams.",
    footer_col_product: "Product", footer_col_company: "Company", footer_col_legal: "Legal",
    footer_about_link: "About", footer_legal_mentions: "Legal notices",
    footer_gdpr: "GDPR", footer_privacy: "Privacy policy",
    footer_copyright: "© 2026 TrueCalling. All rights reserved.",
    footer_made: "Made with care for recruiters.",
  },

  he: {
    nav_features: "תכונות", nav_how: "איך זה עובד", nav_benefits: "יתרונות",
    nav_demo: "הדגמה", nav_pricing: "מחירים", nav_blog: "בלוג", nav_faq: "שאלות נפוצות",
    nav_contact: "צור קשר", nav_login: "כניסה לעסקים", nav_book: "הזמינו הדגמה",
    hero_badge: "סורסינג מבוסס AI לצוותי גיוס",
    hero_h1_a: "תוכנת הסורסינג מבוססת ה-AI", hero_h1_b: "שמגייסת בדיוק.",
    hero_subtitle: "TrueCalling הופכת בריף למועמדים מוסמכים בתוך דקות. קופיילוט AI בשם EMILY, התאמה TrueFit 360 וסורסינג רב-ערוצי — WhatsApp, מייל, טלפון.",
    hero_cta_demo: "הזמינו הדגמה", hero_cta_video: "צפו בהדגמה",
    hero_social: "בשימוש צוותי גיוס מובילים", cta_book_demo: "הזמינו הדגמה",

    features_eyebrow: "תכונות", features_h2_a: "יכולות הליבה של",
    features_subtitle: "סורסינג AI, התאמה ומעורבות מועמדים — בפלטפורמה אחת.",
    f1_title: "מודיעין כישרונות שניתן להסביר",
    f1_desc: "מודלי ה-AI שלנו מנתחים ניסיון, כישורים וסיגנלים הקשריים של מועמדים כדי לזהות את ההתאמה הטובה ביותר — ומסבירים למה.",
    f2_title: "EMILY™ — קופיילוט AI לסורסינג",
    f2_desc: "EMILY מתחילה שיחה ומסמיכה מועמדים ב-WhatsApp עוד לפני שמגייסים נכנסים לתמונה.",
    f3_title: "התאמת מועמדים רב-שכבתית",
    f3_desc: "מועמדים מדורגים לפי ניתוח סמנטי וסיגנלים הקשריים — לא רק לפי מילות מפתח.",
    f4_title: "מעל 1.2 מיליארד פרופילים",
    f4_desc: "גישה למעל 1.2 מיליארד פרופילים מכל העולם, שמתעדכנים באופן רציף.",
    f5_title: "מעורבות מועמדים ב-WhatsApp",
    f5_desc: "השיגו את המועמדים היכן שהם באמת פעילים, עם מעקבים ותזכורות אוטומטיים.",
    f6_title: "גילוי כישרונות סמנטי",
    f6_desc: "מצאו מועמדים רלוונטיים בדקות, באמצעות חיפוש מבוסס תחום ובינה סמנטית.",

    emily_eyebrow: "AI שיחתי ל-WhatsApp", emily_h3_lead: "הכירו את",
    emily_subtitle: "קופיילוט ה-AI הראשון שמתחיל שיחה עם מועמדים ישירות ב-WhatsApp, עם שיעור פתיחה של מעל 90%.",
    emily_c1_title: "מעל 90% שיעור פתיחה",
    emily_c1_desc: "כש-LinkedIn InMail מגיע ל-18–25% בלבד, EMILY משיגה את המועמדים היכן שהם באמת מגיבים.",
    emily_c2_title: "סינון אוטומטי",
    emily_c2_desc: "EMILY שואלת את השאלות הנכונות, מסננת פרופילים ומעבירה רק מועמדים מוסמכים.",
    emily_c3_title: "תזמון מובנה",
    emily_c3_desc: "מעקבים חכמים ותזמון אוטומטי ללא מעורבות אדם.",

    how_eyebrow: "איך זה עובד", how_h2_a: "איך עובדת",
    how_subtitle: "מבריף למועמד מוסמך בחמישה שלבים — בלי להחליף כלי.",
    s1_title: "הגדירו את הקריטריונים", s1_desc: "תארו את המועמד האידיאלי שלכם בשפה טבעית. ה-AI שלנו מבין את הדרישות מיד.",
    s2_title: "הפעילו את החיפוש", s2_desc: "ה-AI סורק 1.2 מיליארד פרופילים ומזהה את המועמדים הטובים ביותר בדקות.",
    s3_title: "בנו את הרשימה הקצרה", s3_desc: "הערכו מועמדים עם ציון ה-AI (התאמה, חוסן ומוניטין דיגיטלי) ובנו את הרשימה הקצרה שלכם.",
    s4_title: "EMILY™ פונה למועמדים ב-WhatsApp", s4_desc: "בלחיצה אחת, EMILY פונה למועמדים שנבחרו ב-WhatsApp עם הודעות מותאמות אישית.",
    s5_title: "העברה ל-ATS שלכם", s5_desc: "מועמדים מוסמכים מועברים אוטומטית ל-ATS (Workday, Greenhouse, SAP SuccessFactors וכו').",

    benefits_eyebrow: "יתרונות", benefits_h2_a: "ההשפעה של",
    benefits_subtitle: "תוצאות מדידות לאורך כל תהליך הסורסינג והגיוס.",
    st1_title: "סורסינג מהיר יותר", st1_desc: "מצאו מועמדים מוסמכים בדקות במקום בימים.",
    st2_title: "שיעור פתיחה ב-WhatsApp", st2_desc: "צרו מעורבות עם מועמדים היכן שהם באמת קוראים הודעות.",
    st3_title: "דיוק התאמה", st3_desc: "ציון ה-AI מזהה את המועמד הטוב ביותר.",
    st4_title: "עלויות גיוס נמוכות יותר", st4_desc: "הפחיתו סורסינג, פנייה ומיון ידניים.",
    st5_title: "שימור גבוה יותר", st5_desc: "גייסו מועמדים שמתאימים לתפקיד ולתרבות הארגונית.",
    st6_title: "סקלביליות בלתי מוגבלת", st6_desc: "הרחיבו את הגיוס בלי להגדיל את הצוות.",

    ats_h3_a: "אינטגרציות ATS", ats_h3_b: "ללא חיכוך",
    ats_subtitle: "חברו את TrueCalling ל-ATS שלכם ושמרו על תהליך הגיוס שלכם ללא שינוי.",
    ats1_title: "סנכרון דו-כיווני", ats1_desc: "מועמדים ומשרות מסונכרנים אוטומטית בין TrueCalling ל-ATS.",
    ats2_title: "עדכונים בזמן אמת", ats2_desc: "קבלו עדכון מיידי בכל שינוי סטטוס של מועמד.",
    ats3_title: "סטטוסים מתעדכנים אוטומטית", ats3_desc: "סטטוסי מועמדים ומשרות נשארים מסונכרנים ללא עבודה ידנית.",
    ats4_title: "הגדרות גמישות", ats4_desc: "התאימו מיפוי וכללי סנכרון לתהליך שלכם.",
    ats_compatible: "תואם לסטאק הקיים שלכם",
    ats_node_tc_label: "סורסינג AI", ats_node_ats_label: "ניהול מועמדים",
    ats_kpi1_label: "מועמדים", ats_kpi1_value: "סנכרון אוטומטי",
    ats_kpi2_label: "משרות", ats_kpi2_value: "ייבוא / ייצוא",
    ats_kpi3_label: "סטטוסים", ats_kpi3_value: "זמן אמת",

    case_h3_a: "מסורסינג למועמדים מוסמכים", case_h3_b: "בתוך שעות",
    case_subtitle: "כך נראה תהליך סורסינג אמיתי עם TrueCalling.",
    case_eyebrow: "דוגמה", case_h4: "מסורסינג לשיחה בפחות מ-24 שעות",
    case_stage1_label: "תפקיד", case_stage1_value: "Senior Data Engineer — פריז",
    case_stage2_label: "מועמדים שזוהו", case_stage2_value: "26",
    case_stage3_label: "מועמדים ברשימה הקצרה", case_stage3_value: "11",
    case_stage4_label: "פניות ב-WhatsApp", case_stage4_value: "7",
    case_stage5_label: "תגובות תוך 24 שעות", case_stage5_value: "7",
    case_result: "תוצאה", case_result_caption: "מועמדים שהושגו בפחות מ-24 שעות",
    case_quote: "LinkedIn זה מאגר נתונים; TrueCalling מתחילה את השיחה. למצוא את האנשים הנכונים זה קל, לגרום להם להגיב — זה האתגר האמיתי. בפחות מ-24 שעות היו לנו 7 מועמדים מובילים בתיבה, מוכנים לדבר. זו רמת מעורבות שלא ראיתי בשום מקום אחר.",
    case_quote_author: "— מנהלת ניהול כישרונות, קבוצת שירותי IT מובילה, ספרד",

    demo_eyebrow: "הדגמת מוצר", demo_h2: "מבריף למועמד מוסמך בדקות.",
    demo_subtitle: "מבריף למועמד שמגיב, בפחות מדקה.",
    demo_replay: "הפעל שוב", demo_replay_aria: "הפעל שוב את ההדגמה",

    pricing_eyebrow: "מחירים", pricing_h2: "תוכנית אחת לכל שלב צמיחה.",
    pricing_subtitle: "ללא התחייבות, ללא עלויות נסתרות. ביטול בכל עת.",
    pricing_billing_aria: "תקופת חיוב",
    pricing_monthly: "חודשי", pricing_annual: "שנתי",
    pricing_per_user: "/משתמש/חודש", pricing_quote: "לפי הצעה", pricing_most_popular: "הכי פופולרי",
    starter_tagline: "לצוותים שמסדירים את הסורסינג שלהם.",
    core_tagline: "לצוותים שמרחיבים את הגיוס שלהם.",
    enterprise_tagline: "לארגונים גדולים.",
    starter_f1: "עד 10 משרות",
    starter_f2: "פנייה רב-ערוצית (WhatsApp, מייל, טלפון)",
    starter_f3: "שיתוף פעולה צוותי",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/בדיקה)",
    core_f1: "משרות ללא הגבלה", core_f2: "כל מה שב-Starter",
    core_f3: "אינטגרציית ATS אחת", core_f4: "תהליכי AI מותאמים אישית",
    ent_f1: "כל מה שב-Core", ent_f2: "אינטגרציות ATS ללא הגבלה",
    ent_f3: "חיפוש מתקדם", ent_f4: "ליווי ייעודי",
    cta_start: "התחילו", cta_contact: "צרו קשר",

    final_h2: "מוכנים לגייס אחרת?",
    final_subtitle: "ראו ב-20 דקות מה TrueCalling יכולה לעשות עבור הגיוסים הבאים שלכם.",

    footer_about: "סורסינג AI, התאמה ופנייה רב-ערוצית לצוותי גיוס מודרניים.",
    footer_col_product: "מוצר", footer_col_company: "חברה", footer_col_legal: "משפטי",
    footer_about_link: "אודות", footer_legal_mentions: "הערות משפטיות",
    footer_gdpr: "GDPR", footer_privacy: "מדיניות פרטיות",
    footer_copyright: "© 2026 TrueCalling. כל הזכויות שמורות.",
    footer_made: "נעשה במחשבה למגייסים.",
  },

  "pt-BR": {
    nav_features: "Recursos", nav_how: "Como funciona", nav_benefits: "Benefícios",
    nav_demo: "Demo", nav_pricing: "Preços", nav_blog: "Blog", nav_faq: "Perguntas frequentes",
    nav_contact: "Contato", nav_login: "Acesso empresa", nav_book: "Agendar uma demo",
    hero_badge: "Sourcing com IA para equipes de recrutamento",
    hero_h1_a: "O software de sourcing com IA", hero_h1_b: "que recruta com precisão.",
    hero_subtitle: "A TrueCalling transforma um briefing em candidatos qualificados em minutos. Copiloto de IA EMILY, matching TrueFit 360 e outreach multicanal — WhatsApp, e-mail e telefone.",
    hero_cta_demo: "Agendar uma demo", hero_cta_video: "Ver demo do produto",
    hero_social: "Usado por equipes de recrutamento de", cta_book_demo: "Agendar uma demo",

    features_eyebrow: "Recursos", features_h2_a: "Capacidades centrais da",
    features_subtitle: "Sourcing com IA, matching e engajamento de candidatos — em uma única plataforma.",
    f1_title: "Inteligência de talentos explicável",
    f1_desc: "Nossos modelos de IA analisam experiência, habilidades e sinais contextuais dos candidatos para identificar o melhor encaixe — e explicam por quê.",
    f2_title: "EMILY™ — copiloto de IA para sourcing",
    f2_desc: "EMILY engaja e qualifica candidatos no WhatsApp antes mesmo de os recrutadores entrarem na conversa.",
    f3_title: "Matching de candidatos em múltiplas camadas",
    f3_desc: "Candidatos são classificados por análise semântica e sinais contextuais — não apenas por palavras-chave.",
    f4_title: "1,2 bi+ perfis de candidatos",
    f4_desc: "Acesse mais de 1,2 bilhão de perfis sourceados globalmente, atualizados continuamente.",
    f5_title: "Engaje candidatos no WhatsApp",
    f5_desc: "Alcance os candidatos onde eles realmente estão ativos, com follow-ups e lembretes automatizados.",
    f6_title: "Descoberta semântica de talentos",
    f6_desc: "Encontre candidatos relevantes em minutos com busca por domínio e inteligência semântica.",

    emily_eyebrow: "IA conversacional para WhatsApp", emily_h3_lead: "Conheça",
    emily_subtitle: "O primeiro copiloto de IA que engaja candidatos diretamente no WhatsApp, com mais de 90% de taxa de abertura.",
    emily_c1_title: "90%+ de taxa de abertura",
    emily_c1_desc: "Enquanto o LinkedIn InMail fica em 18–25%, a EMILY alcança candidatos onde eles realmente respondem.",
    emily_c2_title: "Qualificação automatizada",
    emily_c2_desc: "EMILY faz as perguntas certas, filtra perfis e só encaminha candidatos qualificados.",
    emily_c3_title: "Agendamento integrado",
    emily_c3_desc: "Follow-ups inteligentes e agendamento automático sem intervenção humana.",

    how_eyebrow: "Como funciona", how_h2_a: "Como funciona a",
    how_subtitle: "Do briefing ao candidato qualificado em cinco passos — sem trocar de ferramenta.",
    s1_title: "Defina seus critérios", s1_desc: "Descreva seu candidato ideal em linguagem natural. Nossa IA entende seus requisitos imediatamente.",
    s2_title: "Inicie a busca", s2_desc: "Nossa IA varre 1,2 bi+ perfis e identifica os melhores candidatos em minutos.",
    s3_title: "Monte sua shortlist", s3_desc: "Avalie candidatos com o score de IA (match, resiliência e reputação digital) e construa sua shortlist.",
    s4_title: "EMILY™ engaja candidatos no WhatsApp", s4_desc: "Em um clique, EMILY contata candidatos selecionados no WhatsApp com mensagens personalizadas.",
    s5_title: "Transferência para seu ATS", s5_desc: "Candidatos qualificados são transferidos automaticamente para seu ATS (Workday, Greenhouse, SAP SuccessFactors etc.).",

    benefits_eyebrow: "Benefícios", benefits_h2_a: "O impacto da",
    benefits_subtitle: "Resultados mensuráveis em todo o seu fluxo de sourcing e recrutamento.",
    st1_title: "Sourcing mais rápido", st1_desc: "Encontre candidatos qualificados em minutos em vez de dias.",
    st2_title: "Taxa de abertura WhatsApp", st2_desc: "Engaje candidatos onde eles realmente leem suas mensagens.",
    st3_title: "Precisão de matching", st3_desc: "O score de IA identifica o melhor candidato.",
    st4_title: "Custos de contratação reduzidos", st4_desc: "Reduza sourcing, outreach e screening manuais.",
    st5_title: "Maior retenção", st5_desc: "Contrate candidatos alinhados com a função e a cultura.",
    st6_title: "Escala ilimitada", st6_desc: "Escale o recrutamento sem aumentar a equipe.",

    ats_h3_a: "Integrações ATS", ats_h3_b: "sem fricção",
    ats_subtitle: "Conecte a TrueCalling ao seu ATS e mantenha seu fluxo de recrutamento intacto.",
    ats1_title: "Sincronização bidirecional", ats1_desc: "Candidatos e vagas se sincronizam automaticamente entre TrueCalling e seu ATS.",
    ats2_title: "Atualizações em tempo real", ats2_desc: "Receba updates instantâneos quando o status de um candidato muda.",
    ats3_title: "Status atualizados automaticamente", ats3_desc: "Status de candidatos e vagas permanecem sincronizados sem trabalho manual.",
    ats4_title: "Configurações flexíveis", ats4_desc: "Personalize o mapeamento e as regras de sync para seu processo.",
    ats_compatible: "Compatível com sua stack atual",
    ats_node_tc_label: "Sourcing IA", ats_node_ats_label: "Gestão de candidatos",
    ats_kpi1_label: "Candidatos", ats_kpi1_value: "Auto sync",
    ats_kpi2_label: "Vagas", ats_kpi2_value: "Importar / Exportar",
    ats_kpi3_label: "Status", ats_kpi3_value: "Tempo real",

    case_h3_a: "Do sourcing aos candidatos qualificados", case_h3_b: "em poucas horas",
    case_subtitle: "É assim que se parece um fluxo real de sourcing com TrueCalling.",
    case_eyebrow: "Exemplo", case_h4: "Do sourcing à conversa em menos de 24h",
    case_stage1_label: "Função", case_stage1_value: "Senior Data Engineer — Paris",
    case_stage2_label: "Candidatos identificados", case_stage2_value: "26",
    case_stage3_label: "Candidatos na shortlist", case_stage3_value: "11",
    case_stage4_label: "Contatados via WhatsApp", case_stage4_value: "7",
    case_stage5_label: "Respostas em 24 horas", case_stage5_value: "7",
    case_result: "Resultado", case_result_caption: "candidatos contatados em menos de 24 horas",
    case_quote: "LinkedIn é um banco de dados; TrueCalling inicia a conversa. Encontrar as pessoas certas é fácil, fazer com que respondam é o real desafio. Em menos de 24 horas, tínhamos 7 candidatos top na caixa de entrada, prontos para conversar. É um nível de engajamento que eu nunca tinha visto.",
    case_quote_author: "— Talent Management Director, Leading IT Services Group, Espanha",

    demo_eyebrow: "Demo do produto", demo_h2: "Do briefing ao candidato qualificado em minutos.",
    demo_subtitle: "Do briefing ao candidato que responde, em menos de um minuto.",
    demo_replay: "Reproduzir", demo_replay_aria: "Reproduzir a demo",

    pricing_eyebrow: "Preços", pricing_h2: "Um plano por estágio de crescimento.",
    pricing_subtitle: "Sem compromisso, sem taxas escondidas. Cancele quando quiser.",
    pricing_billing_aria: "Período de cobrança",
    pricing_monthly: "Mensal", pricing_annual: "Anual",
    pricing_per_user: "/usuário/mês", pricing_quote: "Sob consulta", pricing_most_popular: "Mais popular",
    starter_tagline: "Para times que estruturam seu sourcing.",
    core_tagline: "Para times que escalam suas contratações.",
    enterprise_tagline: "Para grandes organizações.",
    starter_f1: "Até 10 vagas",
    starter_f2: "Outreach multicanal (WhatsApp, e-mail, telefone)",
    starter_f3: "Colaboração em equipe",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/teste)",
    core_f1: "Vagas ilimitadas", core_f2: "Tudo do Starter",
    core_f3: "1 integração ATS", core_f4: "Workflows de IA personalizados",
    ent_f1: "Tudo do Core", ent_f2: "Integrações ATS ilimitadas",
    ent_f3: "Busca avançada", ent_f4: "Acompanhamento dedicado",
    cta_start: "Começar", cta_contact: "Fale conosco",

    final_h2: "Pronto para recrutar de outra forma?",
    final_subtitle: "Veja em 20 minutos o que a TrueCalling pode fazer pelas suas próximas contratações.",

    footer_about: "Sourcing com IA, matching e outreach multicanal para equipes de recrutamento modernas.",
    footer_col_product: "Produto", footer_col_company: "Empresa", footer_col_legal: "Jurídico",
    footer_about_link: "Sobre", footer_legal_mentions: "Avisos legais",
    footer_gdpr: "LGPD", footer_privacy: "Política de privacidade",
    footer_copyright: "© 2026 TrueCalling. Todos os direitos reservados.",
    footer_made: "Feito com cuidado para recrutadores.",
  },

  es: {
    nav_features: "Funciones", nav_how: "Cómo funciona", nav_benefits: "Beneficios",
    nav_demo: "Demo", nav_pricing: "Precios", nav_blog: "Blog", nav_faq: "Preguntas frecuentes",
    nav_contact: "Contacto", nav_login: "Acceso empresa", nav_book: "Reservar demo",
    hero_badge: "Sourcing con IA para equipos de selección",
    hero_h1_a: "El software de sourcing con IA", hero_h1_b: "que recluta con precisión.",
    hero_subtitle: "TrueCalling convierte un brief en candidatos cualificados en minutos. Copiloto de IA EMILY, matching TrueFit 360 y outreach multicanal — WhatsApp, email, teléfono.",
    hero_cta_demo: "Reservar demo", hero_cta_video: "Ver demo del producto",
    hero_social: "Utilizado por equipos de selección de", cta_book_demo: "Reservar demo",

    features_eyebrow: "Funciones", features_h2_a: "Capacidades clave de",
    features_subtitle: "Sourcing con IA, matching e interacción con candidatos — en una sola plataforma.",
    f1_title: "Inteligencia de talento explicable",
    f1_desc: "Nuestros modelos de IA analizan experiencia, habilidades y señales contextuales para identificar la mejor coincidencia — y explican por qué.",
    f2_title: "EMILY™ — copiloto de IA para sourcing",
    f2_desc: "EMILY interactúa y cualifica candidatos en WhatsApp antes de que los reclutadores entren en la conversación.",
    f3_title: "Matching de candidatos multicapa",
    f3_desc: "Los candidatos se clasifican por análisis semántico y señales contextuales — no solo palabras clave.",
    f4_title: "1,2 mil millones+ de perfiles",
    f4_desc: "Accede a más de 1,2 mil millones de perfiles globales, actualizados continuamente.",
    f5_title: "Interactúa por WhatsApp",
    f5_desc: "Llega a los candidatos donde realmente están activos, con seguimientos y recordatorios automáticos.",
    f6_title: "Descubrimiento semántico de talento",
    f6_desc: "Encuentra candidatos relevantes en minutos con búsqueda por dominio e inteligencia semántica.",

    emily_eyebrow: "IA conversacional para WhatsApp", emily_h3_lead: "Descubre",
    emily_subtitle: "El primer copiloto de IA que interactúa con candidatos directamente en WhatsApp, con más del 90% de tasa de apertura.",
    emily_c1_title: "90%+ de tasa de apertura",
    emily_c1_desc: "Cuando LinkedIn InMail llega al 18–25%, EMILY alcanza candidatos donde realmente responden.",
    emily_c2_title: "Cualificación automatizada",
    emily_c2_desc: "EMILY hace las preguntas correctas, filtra perfiles y solo transfiere candidatos cualificados.",
    emily_c3_title: "Agendamiento integrado",
    emily_c3_desc: "Seguimientos inteligentes y agendamiento automático sin intervención humana.",

    how_eyebrow: "Cómo funciona", how_h2_a: "Cómo funciona",
    how_subtitle: "Del brief al candidato cualificado en cinco pasos — sin cambiar de herramienta.",
    s1_title: "Define tus criterios", s1_desc: "Describe tu candidato ideal en lenguaje natural. Nuestra IA entiende tus requisitos al instante.",
    s2_title: "Lanza la búsqueda", s2_desc: "Nuestra IA escanea 1,2 mil millones+ de perfiles e identifica los mejores candidatos en minutos.",
    s3_title: "Construye tu shortlist", s3_desc: "Evalúa candidatos con el score de IA (match, resiliencia y reputación digital) y arma tu shortlist.",
    s4_title: "EMILY™ contacta candidatos por WhatsApp", s4_desc: "En un clic, EMILY contacta a los candidatos seleccionados por WhatsApp con mensajes personalizados.",
    s5_title: "Transferencia a tu ATS", s5_desc: "Los candidatos cualificados se transfieren automáticamente a tu ATS (Workday, Greenhouse, SAP SuccessFactors, etc.).",

    benefits_eyebrow: "Beneficios", benefits_h2_a: "El impacto de",
    benefits_subtitle: "Resultados medibles en todo tu flujo de sourcing y reclutamiento.",
    st1_title: "Sourcing más rápido", st1_desc: "Encuentra candidatos cualificados en minutos en lugar de días.",
    st2_title: "Tasa de apertura WhatsApp", st2_desc: "Interactúa con candidatos donde realmente leen sus mensajes.",
    st3_title: "Precisión de matching", st3_desc: "El score de IA identifica al mejor candidato.",
    st4_title: "Costes de contratación reducidos", st4_desc: "Reduce sourcing, outreach y screening manuales.",
    st5_title: "Mayor retención", st5_desc: "Contrata candidatos alineados con el puesto y la cultura.",
    st6_title: "Escala ilimitada", st6_desc: "Escala tu reclutamiento sin agrandar el equipo.",

    ats_h3_a: "Integraciones ATS", ats_h3_b: "sin fricción",
    ats_subtitle: "Conecta TrueCalling a tu ATS y mantén tu flujo de reclutamiento intacto.",
    ats1_title: "Sincronización bidireccional", ats1_desc: "Candidatos y vacantes se sincronizan automáticamente entre TrueCalling y tu ATS.",
    ats2_title: "Actualizaciones en tiempo real", ats2_desc: "Recibe updates instantáneos en cuanto cambia el estado de un candidato.",
    ats3_title: "Estados actualizados automáticamente", ats3_desc: "Los estados de candidatos y vacantes se mantienen sincronizados sin trabajo manual.",
    ats4_title: "Configuraciones flexibles", ats4_desc: "Personaliza el mapeo y las reglas de sync para tu proceso.",
    ats_compatible: "Compatible con tu stack actual",
    ats_node_tc_label: "Sourcing IA", ats_node_ats_label: "Gestión de candidatos",
    ats_kpi1_label: "Candidatos", ats_kpi1_value: "Auto sync",
    ats_kpi2_label: "Vacantes", ats_kpi2_value: "Importar / Exportar",
    ats_kpi3_label: "Estados", ats_kpi3_value: "Tiempo real",

    case_h3_a: "Del sourcing a candidatos cualificados", case_h3_b: "en pocas horas",
    case_subtitle: "Así se ve un flujo real de sourcing con TrueCalling.",
    case_eyebrow: "Ejemplo", case_h4: "Del sourcing a la conversación en menos de 24 h",
    case_stage1_label: "Puesto", case_stage1_value: "Senior Data Engineer — París",
    case_stage2_label: "Candidatos identificados", case_stage2_value: "26",
    case_stage3_label: "Candidatos en shortlist", case_stage3_value: "11",
    case_stage4_label: "Contactados por WhatsApp", case_stage4_value: "7",
    case_stage5_label: "Respuestas en 24 horas", case_stage5_value: "7",
    case_result: "Resultado", case_result_caption: "candidatos contactados en menos de 24 horas",
    case_quote: "LinkedIn es una base de datos; TrueCalling inicia la conversación. Encontrar a las personas adecuadas es fácil, hacer que respondan es el verdadero reto. En menos de 24 horas, teníamos 7 candidatos top en nuestra bandeja, listos para hablar. Es un nivel de engagement que no había visto en ningún otro lugar.",
    case_quote_author: "— Talent Management Director, Leading IT Services Group, España",

    demo_eyebrow: "Demo del producto", demo_h2: "Del brief al candidato cualificado en minutos.",
    demo_subtitle: "Del brief al candidato que responde, en menos de un minuto.",
    demo_replay: "Reproducir", demo_replay_aria: "Reproducir la demo",

    pricing_eyebrow: "Precios", pricing_h2: "Un plan por etapa de crecimiento.",
    pricing_subtitle: "Sin compromiso, sin costes ocultos. Cancela cuando quieras.",
    pricing_billing_aria: "Periodo de facturación",
    pricing_monthly: "Mensual", pricing_annual: "Anual",
    pricing_per_user: "/usuario/mes", pricing_quote: "A consultar", pricing_most_popular: "Más popular",
    starter_tagline: "Para equipos que estructuran su sourcing.",
    core_tagline: "Para equipos que escalan sus contrataciones.",
    enterprise_tagline: "Para grandes organizaciones.",
    starter_f1: "Hasta 10 vacantes",
    starter_f2: "Outreach multicanal (WhatsApp, email, teléfono)",
    starter_f3: "Colaboración en equipo",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/test)",
    core_f1: "Vacantes ilimitadas", core_f2: "Todo lo de Starter",
    core_f3: "1 integración ATS", core_f4: "Workflows de IA personalizados",
    ent_f1: "Todo lo de Core", ent_f2: "Integraciones ATS ilimitadas",
    ent_f3: "Búsqueda avanzada", ent_f4: "Acompañamiento dedicado",
    cta_start: "Empezar", cta_contact: "Contáctanos",

    final_h2: "¿Listo para reclutar de otra forma?",
    final_subtitle: "Descubre en 20 minutos lo que TrueCalling puede hacer por tus próximas contrataciones.",

    footer_about: "Sourcing con IA, matching y outreach multicanal para equipos de selección modernos.",
    footer_col_product: "Producto", footer_col_company: "Empresa", footer_col_legal: "Legal",
    footer_about_link: "Acerca de", footer_legal_mentions: "Avisos legales",
    footer_gdpr: "RGPD", footer_privacy: "Política de privacidad",
    footer_copyright: "© 2026 TrueCalling. Todos los derechos reservados.",
    footer_made: "Hecho con cuidado para reclutadores.",
  },

  de: {
    nav_features: "Funktionen", nav_how: "So funktioniert's", nav_benefits: "Vorteile",
    nav_demo: "Demo", nav_pricing: "Preise", nav_blog: "Blog", nav_faq: "FAQ",
    nav_contact: "Kontakt", nav_login: "Unternehmenszugang", nav_book: "Demo buchen",
    hero_badge: "KI-Sourcing für Recruiting-Teams",
    hero_h1_a: "Die KI-Sourcing-Software", hero_h1_b: "die präzise rekrutiert.",
    hero_subtitle: "TrueCalling verwandelt ein Briefing in qualifizierte Kandidaten in wenigen Minuten. KI-Copilot EMILY, TrueFit 360 Matching und Multi-Channel-Outreach — WhatsApp, E-Mail, Telefon.",
    hero_cta_demo: "Demo buchen", hero_cta_video: "Produkt-Demo ansehen",
    hero_social: "Im Einsatz bei Recruiting-Teams von", cta_book_demo: "Demo buchen",

    features_eyebrow: "Funktionen", features_h2_a: "Kernfähigkeiten von",
    features_subtitle: "KI-Sourcing, Matching und Kandidaten-Engagement — auf einer einzigen Plattform.",
    f1_title: "Erklärbare Talent-Intelligenz",
    f1_desc: "Unsere KI-Modelle analysieren Erfahrung, Fähigkeiten und kontextuelle Signale, um die beste Übereinstimmung zu finden — und erklären, warum.",
    f2_title: "EMILY™ — KI-Copilot für Sourcing",
    f2_desc: "EMILY spricht Kandidaten über WhatsApp an und qualifiziert sie, bevor Recruiter überhaupt ins Gespräch einsteigen.",
    f3_title: "Mehrschichtiges Kandidaten-Matching",
    f3_desc: "Kandidaten werden nach semantischer Analyse und kontextuellen Signalen sortiert — nicht nur nach Keywords.",
    f4_title: "Über 1,2 Mrd. Kandidatenprofile",
    f4_desc: "Greifen Sie auf mehr als 1,2 Milliarden global gesourcte, kontinuierlich aktualisierte Profile zu.",
    f5_title: "Kandidaten via WhatsApp ansprechen",
    f5_desc: "Erreichen Sie Kandidaten dort, wo sie wirklich aktiv sind — mit automatisierten Follow-ups und Erinnerungen.",
    f6_title: "Semantische Talentsuche",
    f6_desc: "Finden Sie passende Kandidaten in Minuten dank domänenbewusster Suche und semantischer Intelligenz.",

    emily_eyebrow: "Konversations-KI für WhatsApp", emily_h3_lead: "Lernen Sie",
    emily_subtitle: "Der erste KI-Copilot, der Kandidaten direkt auf WhatsApp anspricht — mit über 90 % Öffnungsrate.",
    emily_c1_title: "Über 90 % Öffnungsrate",
    emily_c1_desc: "Während LinkedIn InMail bei 18–25 % stagniert, erreicht EMILY Kandidaten dort, wo sie tatsächlich antworten.",
    emily_c2_title: "Automatisierte Qualifizierung",
    emily_c2_desc: "EMILY stellt die richtigen Fragen, filtert Profile und übergibt nur qualifizierte Kandidaten.",
    emily_c3_title: "Integrierte Terminplanung",
    emily_c3_desc: "Intelligente Follow-ups und automatische Terminplanung ohne menschliches Eingreifen.",

    how_eyebrow: "So funktioniert's", how_h2_a: "So funktioniert",
    how_subtitle: "Vom Briefing zum qualifizierten Kandidaten in fünf Schritten — ohne Tool-Wechsel.",
    s1_title: "Kriterien festlegen", s1_desc: "Beschreiben Sie Ihren idealen Kandidaten in natürlicher Sprache. Unsere KI versteht Ihre Anforderungen sofort.",
    s2_title: "Suche starten", s2_desc: "Unsere KI scannt über 1,2 Mrd. Profile und identifiziert die besten Kandidaten in wenigen Minuten.",
    s3_title: "Shortlist erstellen", s3_desc: "Bewerten Sie Kandidaten mit dem KI-Score (Match, Resilienz und digitale Reputation) und bauen Sie Ihre Shortlist.",
    s4_title: "EMILY™ kontaktiert Kandidaten via WhatsApp", s4_desc: "Mit einem Klick spricht EMILY ausgewählte Kandidaten per WhatsApp mit personalisierten Nachrichten an.",
    s5_title: "Übergabe an Ihr ATS", s5_desc: "Qualifizierte Kandidaten werden automatisch an Ihr ATS übermittelt (Workday, Greenhouse, SAP SuccessFactors usw.).",

    benefits_eyebrow: "Vorteile", benefits_h2_a: "Die Wirkung von",
    benefits_subtitle: "Messbare Ergebnisse über Ihren gesamten Sourcing- und Recruiting-Prozess.",
    st1_title: "Schnelleres Sourcing", st1_desc: "Finden Sie qualifizierte Kandidaten in Minuten statt in Tagen.",
    st2_title: "WhatsApp-Öffnungsrate", st2_desc: "Erreichen Sie Kandidaten dort, wo sie ihre Nachrichten tatsächlich lesen.",
    st3_title: "Match-Genauigkeit", st3_desc: "Der KI-Score identifiziert den besten Kandidaten.",
    st4_title: "Geringere Recruiting-Kosten", st4_desc: "Reduzieren Sie manuelles Sourcing, Outreach und Screening.",
    st5_title: "Höhere Mitarbeiterbindung", st5_desc: "Stellen Sie Kandidaten ein, die zur Rolle und Kultur passen.",
    st6_title: "Unbegrenzte Skalierbarkeit", st6_desc: "Skalieren Sie Ihr Recruiting, ohne das Team zu vergrößern.",

    ats_h3_a: "ATS-Integrationen", ats_h3_b: "ohne Reibung",
    ats_subtitle: "Verbinden Sie TrueCalling mit Ihrem ATS und behalten Sie Ihren Recruiting-Workflow bei.",
    ats1_title: "Bidirektionale Synchronisation", ats1_desc: "Kandidaten und Stellen synchronisieren sich automatisch zwischen TrueCalling und Ihrem ATS.",
    ats2_title: "Echtzeit-Updates", ats2_desc: "Erhalten Sie sofortige Updates, sobald sich ein Kandidatenstatus ändert.",
    ats3_title: "Status automatisch aktualisiert", ats3_desc: "Kandidaten- und Stellenstatus bleiben ohne manuellen Aufwand synchron.",
    ats4_title: "Flexible Einstellungen", ats4_desc: "Passen Sie Mapping und Sync-Regeln an Ihren Prozess an.",
    ats_compatible: "Kompatibel mit Ihrem aktuellen Stack",
    ats_node_tc_label: "KI-Sourcing", ats_node_ats_label: "Kandidaten-Management",
    ats_kpi1_label: "Kandidaten", ats_kpi1_value: "Auto-Sync",
    ats_kpi2_label: "Stellen", ats_kpi2_value: "Import / Export",
    ats_kpi3_label: "Status", ats_kpi3_value: "Echtzeit",

    case_h3_a: "Vom Sourcing zu qualifizierten Kandidaten", case_h3_b: "in Stunden",
    case_subtitle: "So sieht ein echter Sourcing-Workflow mit TrueCalling aus.",
    case_eyebrow: "Beispiel", case_h4: "Vom Sourcing zum Gespräch in unter 24 h",
    case_stage1_label: "Rolle", case_stage1_value: "Senior Data Engineer — Paris",
    case_stage2_label: "Identifizierte Kandidaten", case_stage2_value: "26",
    case_stage3_label: "Kandidaten in der Shortlist", case_stage3_value: "11",
    case_stage4_label: "Über WhatsApp kontaktiert", case_stage4_value: "7",
    case_stage5_label: "Antworten innerhalb von 24 Std.", case_stage5_value: "7",
    case_result: "Ergebnis", case_result_caption: "Kandidaten in unter 24 Stunden erreicht",
    case_quote: "LinkedIn ist eine Datenbank; TrueCalling startet das Gespräch. Die richtigen Leute zu finden ist einfach — sie zum Antworten zu bewegen, ist die eigentliche Herausforderung. In weniger als 24 Stunden hatten wir 7 Top-Kandidaten in unserem Postfach, bereit zum Gespräch. Ein Engagement-Niveau, das ich nirgendwo sonst gesehen habe.",
    case_quote_author: "— Talent Management Director, Leading IT Services Group, Spanien",

    demo_eyebrow: "Produkt-Demo", demo_h2: "Vom Briefing zum qualifizierten Kandidaten in wenigen Minuten.",
    demo_subtitle: "Vom Briefing zum antwortenden Kandidaten in unter einer Minute.",
    demo_replay: "Erneut abspielen", demo_replay_aria: "Demo erneut abspielen",

    pricing_eyebrow: "Preise", pricing_h2: "Ein Plan für jede Wachstumsphase.",
    pricing_subtitle: "Keine Bindung, keine versteckten Gebühren. Jederzeit kündbar.",
    pricing_billing_aria: "Abrechnungszeitraum",
    pricing_monthly: "Monatlich", pricing_annual: "Jährlich",
    pricing_per_user: "/Nutzer/Monat", pricing_quote: "Auf Anfrage", pricing_most_popular: "Am beliebtesten",
    starter_tagline: "Für Teams, die ihr Sourcing strukturieren.",
    core_tagline: "Für Teams, die ihre Einstellungen skalieren.",
    enterprise_tagline: "Für große Organisationen.",
    starter_f1: "Bis zu 10 Stellenausschreibungen",
    starter_f2: "Multi-Channel-Outreach (WhatsApp, E-Mail, Telefon)",
    starter_f3: "Team-Zusammenarbeit",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/Test)",
    core_f1: "Unbegrenzte Stellenausschreibungen", core_f2: "Alles aus Starter",
    core_f3: "1 ATS-Integration", core_f4: "Individuelle KI-Workflows",
    ent_f1: "Alles aus Core", ent_f2: "Unbegrenzte ATS-Integrationen",
    ent_f3: "Erweiterte Suche", ent_f4: "Dedizierte Betreuung",
    cta_start: "Loslegen", cta_contact: "Kontakt aufnehmen",

    final_h2: "Bereit, anders zu rekrutieren?",
    final_subtitle: "Sehen Sie in 20 Minuten, was TrueCalling für Ihre nächsten Einstellungen leisten kann.",

    footer_about: "KI-Sourcing, Matching und Multi-Channel-Outreach für moderne Recruiting-Teams.",
    footer_col_product: "Produkt", footer_col_company: "Unternehmen", footer_col_legal: "Rechtliches",
    footer_about_link: "Über uns", footer_legal_mentions: "Impressum",
    footer_gdpr: "DSGVO", footer_privacy: "Datenschutz",
    footer_copyright: "© 2026 TrueCalling. Alle Rechte vorbehalten.",
    footer_made: "Mit Sorgfalt für Recruiter gemacht.",
  },

  it: {
    nav_features: "Funzionalità", nav_how: "Come funziona", nav_benefits: "Vantaggi",
    nav_demo: "Demo", nav_pricing: "Prezzi", nav_blog: "Blog", nav_faq: "FAQ",
    nav_contact: "Contatti", nav_login: "Accesso aziendale", nav_book: "Prenota una demo",
    hero_badge: "Sourcing IA per team di recruiting",
    hero_h1_a: "Il software di sourcing IA", hero_h1_b: "che recluta con precisione.",
    hero_subtitle: "TrueCalling trasforma un brief in candidati qualificati in pochi minuti. Copilota IA EMILY, matching TrueFit 360 e outreach multicanale — WhatsApp, email, telefono.",
    hero_cta_demo: "Prenota una demo", hero_cta_video: "Guarda la demo",
    hero_social: "Usato dai team di recruiting di", cta_book_demo: "Prenota una demo",

    features_eyebrow: "Funzionalità", features_h2_a: "Capacità chiave di",
    features_subtitle: "Sourcing IA, matching e ingaggio candidati — su un'unica piattaforma.",
    f1_title: "Talent intelligence spiegabile",
    f1_desc: "I nostri modelli di IA analizzano esperienza, competenze e segnali contestuali dei candidati per identificare la migliore corrispondenza — e ne spiegano il motivo.",
    f2_title: "EMILY™ — copilota IA per il sourcing",
    f2_desc: "EMILY ingaggia e qualifica i candidati su WhatsApp prima ancora che i recruiter entrino nella conversazione.",
    f3_title: "Matching candidati multilivello",
    f3_desc: "I candidati vengono classificati tramite analisi semantica e segnali contestuali — non solo parole chiave.",
    f4_title: "1,2 mld+ profili candidati",
    f4_desc: "Accedi a oltre 1,2 miliardi di profili sourceati globalmente, aggiornati in continuazione.",
    f5_title: "Ingaggia i candidati su WhatsApp",
    f5_desc: "Raggiungi i candidati dove sono davvero attivi, con follow-up e promemoria automatici.",
    f6_title: "Scoperta semantica dei talenti",
    f6_desc: "Trova candidati pertinenti in pochi minuti grazie alla ricerca per dominio e all'intelligenza semantica.",

    emily_eyebrow: "IA conversazionale per WhatsApp", emily_h3_lead: "Scopri",
    emily_subtitle: "Il primo copilota IA che ingaggia i candidati direttamente su WhatsApp, con oltre il 90% di tasso di apertura.",
    emily_c1_title: "Tasso di apertura oltre il 90%",
    emily_c1_desc: "Mentre LinkedIn InMail si ferma al 18–25%, EMILY raggiunge i candidati dove rispondono davvero.",
    emily_c2_title: "Qualificazione automatizzata",
    emily_c2_desc: "EMILY pone le domande giuste, filtra i profili e trasferisce solo i candidati qualificati.",
    emily_c3_title: "Pianificazione integrata",
    emily_c3_desc: "Follow-up intelligenti e pianificazione automatica senza intervento umano.",

    how_eyebrow: "Come funziona", how_h2_a: "Come funziona",
    how_subtitle: "Dal brief al candidato qualificato in cinque passi — senza cambiare strumento.",
    s1_title: "Definisci i criteri", s1_desc: "Descrivi il tuo candidato ideale in linguaggio naturale. La nostra IA capisce subito i requisiti.",
    s2_title: "Avvia la ricerca", s2_desc: "La nostra IA esamina oltre 1,2 mld di profili e identifica i migliori candidati in pochi minuti.",
    s3_title: "Costruisci la shortlist", s3_desc: "Valuta i candidati con il punteggio IA (match, resilienza e reputazione digitale) e crea la tua shortlist.",
    s4_title: "EMILY™ contatta i candidati su WhatsApp", s4_desc: "In un click, EMILY contatta i candidati selezionati su WhatsApp con messaggi personalizzati.",
    s5_title: "Trasferimento al tuo ATS", s5_desc: "I candidati qualificati sono trasferiti automaticamente al tuo ATS (Workday, Greenhouse, SAP SuccessFactors, ecc.).",

    benefits_eyebrow: "Vantaggi", benefits_h2_a: "L'impatto di",
    benefits_subtitle: "Risultati misurabili lungo tutto il flusso di sourcing e recruiting.",
    st1_title: "Sourcing più veloce", st1_desc: "Trova candidati qualificati in minuti anziché giorni.",
    st2_title: "Tasso di apertura WhatsApp", st2_desc: "Ingaggia i candidati dove leggono davvero i loro messaggi.",
    st3_title: "Precisione di matching", st3_desc: "Il punteggio IA identifica il miglior candidato.",
    st4_title: "Costi di assunzione ridotti", st4_desc: "Riduci sourcing, outreach e screening manuali.",
    st5_title: "Maggiore retention", st5_desc: "Assumi candidati allineati al ruolo e alla cultura.",
    st6_title: "Scalabilità illimitata", st6_desc: "Scala il recruiting senza ingrandire il team.",

    ats_h3_a: "Integrazioni ATS", ats_h3_b: "senza attriti",
    ats_subtitle: "Collega TrueCalling al tuo ATS e mantieni inalterato il tuo flusso di recruiting.",
    ats1_title: "Sincronizzazione bidirezionale", ats1_desc: "Candidati e posizioni si sincronizzano automaticamente tra TrueCalling e il tuo ATS.",
    ats2_title: "Aggiornamenti in tempo reale", ats2_desc: "Ricevi update istantanei al cambio di stato di un candidato.",
    ats3_title: "Stati aggiornati automaticamente", ats3_desc: "Gli stati di candidati e posizioni restano sincronizzati senza lavoro manuale.",
    ats4_title: "Impostazioni flessibili", ats4_desc: "Personalizza mappatura e regole di sync in base al tuo processo.",
    ats_compatible: "Compatibile con il tuo stack attuale",
    ats_node_tc_label: "Sourcing IA", ats_node_ats_label: "Gestione candidati",
    ats_kpi1_label: "Candidati", ats_kpi1_value: "Auto sync",
    ats_kpi2_label: "Posizioni", ats_kpi2_value: "Import / Export",
    ats_kpi3_label: "Stati", ats_kpi3_value: "Tempo reale",

    case_h3_a: "Dal sourcing ai candidati qualificati", case_h3_b: "in poche ore",
    case_subtitle: "Ecco come si presenta un vero flusso di sourcing con TrueCalling.",
    case_eyebrow: "Esempio", case_h4: "Dal sourcing alla conversazione in meno di 24 h",
    case_stage1_label: "Ruolo", case_stage1_value: "Senior Data Engineer — Parigi",
    case_stage2_label: "Candidati identificati", case_stage2_value: "26",
    case_stage3_label: "Candidati in shortlist", case_stage3_value: "11",
    case_stage4_label: "Contattati via WhatsApp", case_stage4_value: "7",
    case_stage5_label: "Risposte entro 24 ore", case_stage5_value: "7",
    case_result: "Risultato", case_result_caption: "candidati raggiunti in meno di 24 ore",
    case_quote: "LinkedIn è un database; TrueCalling avvia la conversazione. Trovare le persone giuste è facile, farle rispondere è la vera sfida. In meno di 24 ore avevamo 7 top candidati in inbox, pronti a parlare. Un livello di engagement che non avevo visto altrove.",
    case_quote_author: "— Talent Management Director, Leading IT Services Group, Spagna",

    demo_eyebrow: "Demo del prodotto", demo_h2: "Dal brief al candidato qualificato in pochi minuti.",
    demo_subtitle: "Dal brief al candidato che risponde, in meno di un minuto.",
    demo_replay: "Riproduci", demo_replay_aria: "Riproduci la demo",

    pricing_eyebrow: "Prezzi", pricing_h2: "Un piano per ogni fase di crescita.",
    pricing_subtitle: "Senza vincoli, senza costi nascosti. Cancella in qualsiasi momento.",
    pricing_billing_aria: "Periodo di fatturazione",
    pricing_monthly: "Mensile", pricing_annual: "Annuale",
    pricing_per_user: "/utente/mese", pricing_quote: "Su preventivo", pricing_most_popular: "Più popolare",
    starter_tagline: "Per i team che strutturano il loro sourcing.",
    core_tagline: "Per i team che scalano le assunzioni.",
    enterprise_tagline: "Per le grandi organizzazioni.",
    starter_f1: "Fino a 10 posizioni",
    starter_f2: "Outreach multicanale (WhatsApp, email, telefono)",
    starter_f3: "Collaborazione di team",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/test)",
    core_f1: "Posizioni illimitate", core_f2: "Tutto ciò che è in Starter",
    core_f3: "1 integrazione ATS", core_f4: "Workflow IA personalizzati",
    ent_f1: "Tutto ciò che è in Core", ent_f2: "Integrazioni ATS illimitate",
    ent_f3: "Ricerca avanzata", ent_f4: "Affiancamento dedicato",
    cta_start: "Inizia", cta_contact: "Contattaci",

    final_h2: "Pronto a reclutare in modo diverso?",
    final_subtitle: "Scopri in 20 minuti cosa può fare TrueCalling per le tue prossime assunzioni.",

    footer_about: "Sourcing IA, matching e outreach multicanale per i team di recruiting moderni.",
    footer_col_product: "Prodotto", footer_col_company: "Azienda", footer_col_legal: "Legale",
    footer_about_link: "Chi siamo", footer_legal_mentions: "Note legali",
    footer_gdpr: "GDPR", footer_privacy: "Informativa privacy",
    footer_copyright: "© 2026 TrueCalling. Tutti i diritti riservati.",
    footer_made: "Fatto con cura per i recruiter.",
  },

  nl: {
    nav_features: "Functies", nav_how: "Hoe het werkt", nav_benefits: "Voordelen",
    nav_demo: "Demo", nav_pricing: "Prijzen", nav_blog: "Blog", nav_faq: "Veelgestelde vragen",
    nav_contact: "Contact", nav_login: "Bedrijfsportaal", nav_book: "Demo boeken",
    hero_badge: "AI-sourcing voor recruitmentteams",
    hero_h1_a: "De AI-sourcing software", hero_h1_b: "die met precisie aanneemt.",
    hero_subtitle: "TrueCalling zet een briefing om in gekwalificeerde kandidaten in enkele minuten. AI-copiloot EMILY, TrueFit 360 matching en multichannel outreach — WhatsApp, e-mail, telefoon.",
    hero_cta_demo: "Demo boeken", hero_cta_video: "Bekijk de productdemo",
    hero_social: "In gebruik bij recruitmentteams van", cta_book_demo: "Demo boeken",

    features_eyebrow: "Functies", features_h2_a: "Kernmogelijkheden van",
    features_subtitle: "AI-sourcing, matching en kandidaatbinding — op één platform.",
    f1_title: "Verklaarbare talent-intelligentie",
    f1_desc: "Onze AI-modellen analyseren ervaring, vaardigheden en contextuele signalen om de beste match te vinden — en leggen uit waarom.",
    f2_title: "EMILY™ — AI-copiloot voor sourcing",
    f2_desc: "EMILY benadert en kwalificeert kandidaten via WhatsApp nog vóór recruiters in het gesprek stappen.",
    f3_title: "Multilaagse kandidaatmatching",
    f3_desc: "Kandidaten worden gerangschikt via semantische analyse en contextuele signalen — niet alleen op trefwoorden.",
    f4_title: "1,2 mld+ kandidaatprofielen",
    f4_desc: "Toegang tot meer dan 1,2 miljard wereldwijd gesourcete profielen, continu bijgewerkt.",
    f5_title: "Bind kandidaten via WhatsApp",
    f5_desc: "Bereik kandidaten waar ze écht actief zijn, met automatische follow-ups en herinneringen.",
    f6_title: "Semantische talentontdekking",
    f6_desc: "Vind relevante kandidaten in minuten via domeinbewust zoeken en semantische intelligentie.",

    emily_eyebrow: "Conversational AI voor WhatsApp", emily_h3_lead: "Maak kennis met",
    emily_subtitle: "De eerste AI-copiloot die kandidaten direct via WhatsApp benadert, met meer dan 90% openingsrate.",
    emily_c1_title: "90%+ openingsrate",
    emily_c1_desc: "Waar LinkedIn InMail blijft hangen op 18–25%, bereikt EMILY kandidaten daar waar ze daadwerkelijk reageren.",
    emily_c2_title: "Geautomatiseerde kwalificatie",
    emily_c2_desc: "EMILY stelt de juiste vragen, filtert profielen en levert alleen gekwalificeerde kandidaten aan.",
    emily_c3_title: "Ingebouwde planning",
    emily_c3_desc: "Slimme follow-ups en automatische planning zonder menselijke tussenkomst.",

    how_eyebrow: "Hoe het werkt", how_h2_a: "Hoe",
    how_subtitle: "Van briefing tot gekwalificeerde kandidaat in vijf stappen — zonder van tool te wisselen.",
    s1_title: "Stel je criteria op", s1_desc: "Beschrijf je ideale kandidaat in natuurlijke taal. Onze AI begrijpt je eisen direct.",
    s2_title: "Start de zoektocht", s2_desc: "Onze AI scant 1,2 mld+ profielen en identificeert de beste kandidaten binnen enkele minuten.",
    s3_title: "Bouw je shortlist", s3_desc: "Beoordeel kandidaten met de AI-score (match, veerkracht en digitale reputatie) en bouw je shortlist.",
    s4_title: "EMILY™ benadert kandidaten via WhatsApp", s4_desc: "Met één klik benadert EMILY de geselecteerde kandidaten op WhatsApp met persoonlijke berichten.",
    s5_title: "Overdracht naar je ATS", s5_desc: "Gekwalificeerde kandidaten worden automatisch overgedragen naar je ATS (Workday, Greenhouse, SAP SuccessFactors enz.).",

    benefits_eyebrow: "Voordelen", benefits_h2_a: "De impact van",
    benefits_subtitle: "Meetbare resultaten over je hele sourcing- en recruitmentproces.",
    st1_title: "Sneller sourcen", st1_desc: "Vind gekwalificeerde kandidaten in minuten in plaats van dagen.",
    st2_title: "WhatsApp-openingsrate", st2_desc: "Bind kandidaten daar waar ze hun berichten echt lezen.",
    st3_title: "Match-precisie", st3_desc: "De AI-score identificeert de beste kandidaat.",
    st4_title: "Lagere wervingskosten", st4_desc: "Verminder handmatig sourcen, outreach en screening.",
    st5_title: "Hogere retentie", st5_desc: "Werf kandidaten die passen bij rol en cultuur.",
    st6_title: "Onbeperkte schaalbaarheid", st6_desc: "Schaal je recruitment zonder het team te vergroten.",

    ats_h3_a: "ATS-integraties", ats_h3_b: "zonder frictie",
    ats_subtitle: "Verbind TrueCalling met je ATS en houd je recruitmentworkflow intact.",
    ats1_title: "Tweerichtingssynchronisatie", ats1_desc: "Kandidaten en vacatures synchroniseren automatisch tussen TrueCalling en je ATS.",
    ats2_title: "Realtime updates", ats2_desc: "Krijg directe updates zodra een kandidaatstatus verandert.",
    ats3_title: "Statussen automatisch bijgewerkt", ats3_desc: "Kandidaat- en vacaturestatussen blijven gesynchroniseerd zonder handwerk.",
    ats4_title: "Flexibele instellingen", ats4_desc: "Pas mapping en sync-regels aan op jouw proces.",
    ats_compatible: "Compatibel met je huidige stack",
    ats_node_tc_label: "AI-sourcing", ats_node_ats_label: "Kandidaatbeheer",
    ats_kpi1_label: "Kandidaten", ats_kpi1_value: "Auto-sync",
    ats_kpi2_label: "Vacatures", ats_kpi2_value: "Import / Export",
    ats_kpi3_label: "Statussen", ats_kpi3_value: "Realtime",

    case_h3_a: "Van sourcing naar gekwalificeerde kandidaten", case_h3_b: "in een paar uur",
    case_subtitle: "Zo ziet een echte sourcingworkflow eruit met TrueCalling.",
    case_eyebrow: "Voorbeeld", case_h4: "Van sourcing naar gesprek in minder dan 24 u",
    case_stage1_label: "Rol", case_stage1_value: "Senior Data Engineer — Parijs",
    case_stage2_label: "Geïdentificeerde kandidaten", case_stage2_value: "26",
    case_stage3_label: "Kandidaten op shortlist", case_stage3_value: "11",
    case_stage4_label: "Benaderd via WhatsApp", case_stage4_value: "7",
    case_stage5_label: "Reacties binnen 24 uur", case_stage5_value: "7",
    case_result: "Resultaat", case_result_caption: "kandidaten bereikt binnen 24 uur",
    case_quote: "LinkedIn is een database; TrueCalling start het gesprek. De juiste mensen vinden is makkelijk, ze laten reageren is de echte uitdaging. In minder dan 24 uur hadden we 7 topkandidaten in onze inbox, klaar om te praten. Een engagementniveau dat ik nergens anders heb gezien.",
    case_quote_author: "— Talent Management Director, Leading IT Services Group, Spanje",

    demo_eyebrow: "Productdemo", demo_h2: "Van briefing tot gekwalificeerde kandidaat in minuten.",
    demo_subtitle: "Van briefing tot kandidaat die reageert, in minder dan een minuut.",
    demo_replay: "Opnieuw afspelen", demo_replay_aria: "Demo opnieuw afspelen",

    pricing_eyebrow: "Prijzen", pricing_h2: "Eén plan per groeifase.",
    pricing_subtitle: "Zonder verplichting, zonder verborgen kosten. Op elk moment opzegbaar.",
    pricing_billing_aria: "Factureringsperiode",
    pricing_monthly: "Maandelijks", pricing_annual: "Jaarlijks",
    pricing_per_user: "/gebruiker/maand", pricing_quote: "Op aanvraag", pricing_most_popular: "Meest gekozen",
    starter_tagline: "Voor teams die hun sourcing structureren.",
    core_tagline: "Voor teams die hun werving opschalen.",
    enterprise_tagline: "Voor grote organisaties.",
    starter_f1: "Tot 10 vacatures",
    starter_f2: "Multichannel outreach (WhatsApp, e-mail, telefoon)",
    starter_f3: "Teamsamenwerking",
    starter_f4: "Top Ranking",
    starter_f5: "EMILY™ AI Copilot",
    starter_f6: "Employer Branding",
    starter_f7: "TrueFit 360 Assessment ($5/test)",
    core_f1: "Onbeperkte vacatures", core_f2: "Alles uit Starter",
    core_f3: "1 ATS-integratie", core_f4: "Aangepaste AI-workflows",
    ent_f1: "Alles uit Core", ent_f2: "Onbeperkte ATS-integraties",
    ent_f3: "Geavanceerd zoeken", ent_f4: "Toegewijde begeleiding",
    cta_start: "Aan de slag", cta_contact: "Neem contact op",

    final_h2: "Klaar om anders te werven?",
    final_subtitle: "Zie in 20 minuten wat TrueCalling kan betekenen voor je volgende aanwervingen.",

    footer_about: "AI-sourcing, matching en multichannel outreach voor moderne recruitmentteams.",
    footer_col_product: "Product", footer_col_company: "Bedrijf", footer_col_legal: "Juridisch",
    footer_about_link: "Over ons", footer_legal_mentions: "Juridische vermeldingen",
    footer_gdpr: "AVG", footer_privacy: "Privacybeleid",
    footer_copyright: "© 2026 TrueCalling. Alle rechten voorbehouden.",
    footer_made: "Met zorg gemaakt voor recruiters.",
  },
};
