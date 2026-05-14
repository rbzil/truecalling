import type { ReactNode } from "react";
import Link from "next/link";
import type { AuthorId } from "./authors";

export type Article = {
  slug: string;
  /**
   * Stable cross-locale identifier. Same value in fr.tsx + en.tsx for the
   * same article so the blog/[slug] page can build hreflang alternates
   * pointing at the equivalent translated slug.
   */
  canonicalId: string;
  /** Author key from authors.ts. Falls back to "editorial" when undefined. */
  author?: AuthorId;
  title: string;
  description: string;
  excerpt: string;
  keyword: string;
  category: string;
  publishedAt: string;
  /** ISO date of last meaningful content update. Defaults to publishedAt. */
  updatedAt?: string;
  readingMinutes: number;
  homepageAnchor: string;
  content: ReactNode;
};

const Article1Content: ReactNode = (
  <>
    <p>
      Le <strong>sourcing IA</strong> n&apos;est plus un sujet de veille en 2026 : c&apos;est devenu la
      norme pour les équipes Talent qui veulent recruter vite et bien. Si vous gérez encore vos
      campagnes de sourcing à la main sur LinkedIn, vous travaillez probablement deux à trois fois plus
      que vos concurrents pour des résultats équivalents. Ce guide explique comment fonctionne le
      sourcing IA aujourd&apos;hui, ce que vous pouvez automatiser sans perdre en qualité, et les
      outils qui font réellement la différence.
    </p>

    <h2>Sourcing IA : définition courte et utile</h2>
    <p>
      Le <strong>sourcing IA</strong> regroupe l&apos;ensemble des techniques qui utilisent
      l&apos;intelligence artificielle pour identifier, qualifier et engager des candidats potentiels.
      Concrètement, l&apos;IA fait trois choses qu&apos;un recruteur humain ferait — mais à grande
      échelle :
    </p>
    <ul>
      <li>Lire un brief de poste et le traduire en requête de recherche complète.</li>
      <li>Scorer chaque candidat trouvé selon sa correspondance réelle avec le poste.</li>
      <li>Rédiger et envoyer une approche personnalisée sur le bon canal.</li>
    </ul>
    <p>
      Le résultat n&apos;est pas un &quot;tri automatique de CV&quot; comme on en voyait en 2018.
      C&apos;est une couche d&apos;orchestration qui prend en charge 70 à 80 % du travail répétitif
      et laisse au recruteur les décisions à valeur ajoutée.
    </p>

    <h2>Pourquoi le sourcing IA change la donne en 2026</h2>
    <p>
      Trois forces convergentes expliquent l&apos;adoption massive du <strong>sourcing IA</strong>
      cette année :
    </p>
    <ol>
      <li>
        <strong>L&apos;explosion des canaux.</strong> LinkedIn ne suffit plus. Vos candidats
        cibles sont aussi sur GitHub, Stack Overflow, Behance, et de plus en plus joignables sur
        WhatsApp.
      </li>
      <li>
        <strong>La pression sur le time-to-hire.</strong> Les benchmarks 2026 placent la médiane
        autour de 35 jours pour un poste tech. En dessous de 25 jours, vous gagnez les candidats les
        plus convoités.
      </li>
      <li>
        <strong>La maturité des modèles de langage.</strong> Un copilote IA sait aujourd&apos;hui
        rédiger un message d&apos;approche personnalisé en lisant un profil GitHub et un commit récent
        — chose impossible il y a deux ans.
      </li>
    </ol>

    <h2>Les méthodes de sourcing IA qui fonctionnent vraiment</h2>

    <h3>1. Recherche sémantique multi-sources</h3>
    <p>
      Au lieu de booléens manuels (&quot;data engineer&quot; AND &quot;Python&quot; AND
      &quot;Spark&quot;), vous décrivez le poste en langage naturel. L&apos;outil interroge LinkedIn,
      GitHub, ses propres bases enrichies et remonte un classement sémantique. Pour un Senior Data
      Engineer à Paris avec une stack Spark + dbt, vous obtenez 200 à 400 profils pertinents en moins
      de cinq minutes.
    </p>

    <h3>2. Score de matching contextuel</h3>
    <p>
      Le bon outil de <strong>sourcing IA</strong> ne se contente pas d&apos;un score de mots-clés.
      Il évalue la trajectoire (a-t-il déjà travaillé en startup ?), la stack réelle (commits récents
      en TypeScript ?), la disponibilité (changement de poste il y a 11 mois ?). Le score TrueFit 360
      de TrueCalling combine ces dimensions en une note unique sur 100, expliquée ligne par ligne.
    </p>

    <h3>3. Outreach automatisé multicanal</h3>
    <p>
      L&apos;IA ne se limite pas à trouver. Elle écrit le premier message, planifie les relances et
      bascule de canal selon les réponses. Sur WhatsApp, le taux d&apos;ouverture moyen est de 90 %
      contre 20 % sur l&apos;email — un écart suffisant pour réécrire complètement votre stratégie de
      contact.
    </p>

    <h2>Les 4 outils de sourcing IA à connaître</h2>
    <ul>
      <li>
        <strong>TrueCalling</strong> : copilote EMILY, score TrueFit 360, outreach WhatsApp + email
        + téléphone, intégrations ATS. Cible cabinets et équipes Talent en France.
      </li>
      <li>
        <strong>HireSweet</strong> : sourcing tech historique sur LinkedIn et GitHub, plus orienté
        scale-ups françaises.
      </li>
      <li>
        <strong>LinkedIn Recruiter</strong> : la base, mais sans IA réelle de matching ni outreach
        multicanal natif.
      </li>
      <li>
        <strong>SeekOut / hireEZ</strong> : robustes côté US, encore peu adaptés au marché
        européen RGPD.
      </li>
    </ul>
    <p>
      Pour une analyse détaillée du choix entre TrueCalling et un acteur historique, consultez notre
      comparatif{" "}
      <Link href="/blog/truecalling-vs-hiresweet" className="text-accent underline-offset-4 hover:underline">
        TrueCalling vs HireSweet
      </Link>
      .
    </p>

    <h2>Exemple concret : sourcer un Senior Data Engineer à Paris</h2>
    <p>
      Vous tapez le brief : &quot;Senior Data Engineer, 6 ans d&apos;expérience minimum, Spark + dbt,
      Paris ou full-remote France, expérience scale-up SaaS, ouverture aux opportunités&quot;. En
      moins de cinq minutes, le moteur de <strong>sourcing IA</strong> remonte 217 profils, dont 38
      au-dessus de 85/100 sur le score de matching. EMILY rédige une première séquence personnalisée
      par profil, mentionnant un projet open-source visible sur GitHub. Vous validez, l&apos;outreach
      part sur WhatsApp en priorité, email en repli. Trois jours plus tard, vous avez 11 réponses
      qualifiées.
    </p>

    <h2>Limites et pièges du sourcing IA</h2>
    <p>
      Le <strong>sourcing IA</strong> n&apos;est pas magique. Trois écueils reviennent souvent :
    </p>
    <ul>
      <li>
        <strong>L&apos;effet boîte noire.</strong> Si le score n&apos;est pas explicable, votre
        équipe ne lui fait pas confiance. Exigez un score décomposé.
      </li>
      <li>
        <strong>L&apos;hyper-personnalisation factice.</strong> Mieux vaut un message court et
        honnête qu&apos;un paragraphe LinkedIn-bot qui sent le ChatGPT.
      </li>
      <li>
        <strong>La conformité RGPD.</strong> Toute donnée publique n&apos;est pas exploitable.
        Vérifiez la base légale, surtout pour le scraping et l&apos;outreach WhatsApp.
      </li>
    </ul>

    <h2>Comment choisir votre outil de sourcing IA</h2>
    <p>
      Posez quatre questions simples à chaque éditeur :
    </p>
    <ol>
      <li>Le score de matching est-il explicable et auditable ?</li>
      <li>Quels canaux d&apos;outreach sont natifs ? WhatsApp est-il vraiment intégré ?</li>
      <li>L&apos;intégration ATS (Greenhouse, Lever, Teamtailor, Recruitee) est-elle native ?</li>
      <li>Les données sont-elles hébergées en Europe et conformes RGPD ?</li>
    </ol>
    <p>
      Si vous voulez voir comment ces critères se traduisent dans une plateforme, consultez le{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Voir le logiciel de sourcing IA TrueCalling
      </Link>{" "}
      ou explorez les leviers concrets pour{" "}
      <Link href="/blog/time-to-hire-7-leviers-2026" className="text-accent underline-offset-4 hover:underline">
        diviser votre time-to-hire par deux
      </Link>
      .
    </p>

    <h2>Conclusion : le sourcing IA est devenu un standard</h2>
    <p>
      En 2026, ne pas utiliser le <strong>sourcing IA</strong> revient à recruter avec une longueur
      de retard. La technologie est mûre, les benchmarks parlent, et les équipes qui combinent
      copilote, score contextuel et outreach multicanal recrutent deux fois plus vite que la médiane.
      L&apos;enjeu n&apos;est plus &quot;est-ce que ça marche ?&quot; mais &quot;quel outil choisir
      et comment le déployer en moins de 30 jours ?&quot;
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Voyez le sourcing IA en action
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        En 30 minutes, on vous montre comment sourcer 200 candidats qualifiés sur un poste tech
        difficile, avec score TrueFit 360 et outreach WhatsApp.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article2Content: ReactNode = (
  <>
    <p>
      Le <strong>recrutement WhatsApp</strong> est devenu en 2026 le canal le plus efficace pour
      contacter des candidats passifs. Avec un taux d&apos;ouverture moyen de 90 % contre 20 % sur
      l&apos;email, l&apos;écart de performance est tel qu&apos;aucune équipe Talent sérieuse ne peut
      l&apos;ignorer. Reste une question critique : comment l&apos;utiliser sans s&apos;exposer à un
      contrôle CNIL ? Ce guide pose les règles claires.
    </p>

    <h2>Pourquoi le recrutement WhatsApp explose</h2>
    <p>
      WhatsApp est utilisé par plus de 40 millions de Français adultes au quotidien. Pour beaucoup
      de candidats — notamment tech, sales et profils internationaux — c&apos;est devenu le canal
      personnel par défaut. Trois données clés expliquent l&apos;adoption massive du{" "}
      <strong>recrutement WhatsApp</strong> :
    </p>
    <ul>
      <li>
        <strong>90 % de taux d&apos;ouverture</strong> sur un message WhatsApp dans les 4 heures.
      </li>
      <li>
        <strong>~45 % de taux de réponse</strong> sur un premier contact bien rédigé, contre 8 à
        12 % sur un InMail LinkedIn.
      </li>
      <li>
        <strong>Time-to-first-response divisé par 5</strong> en moyenne par rapport à l&apos;email.
      </li>
    </ul>

    <h2>Le RGPD ne l&apos;interdit pas — il l&apos;encadre</h2>
    <p>
      Première chose à savoir : il n&apos;existe aucun texte qui interdit le{" "}
      <strong>recrutement WhatsApp</strong> en France. Le RGPD encadre l&apos;usage de données
      personnelles, dont le numéro de téléphone fait partie. Vous devez donc respecter quatre piliers :
    </p>
    <ol>
      <li>
        <strong>Base légale claire.</strong> L&apos;intérêt légitime du recruteur est admis pour
        une approche professionnelle non intrusive.
      </li>
      <li>
        <strong>Information du candidat.</strong> Indiquez qui vous êtes, le poste concerné, et le
        droit d&apos;opposition dès le premier message.
      </li>
      <li>
        <strong>Minimisation des données.</strong> Ne stockez que ce qui est utile, pas plus.
      </li>
      <li>
        <strong>Droit à l&apos;oubli.</strong> Toute demande de suppression doit être traitée sous
        30 jours.
      </li>
    </ol>

    <h2>Les 5 règles d&apos;un message WhatsApp conforme</h2>
    <ul>
      <li>
        <strong>Identifiez-vous immédiatement</strong> : prénom, nom, entreprise.
      </li>
      <li>
        <strong>Précisez le contexte</strong> : &quot;Je vous contacte au sujet d&apos;un poste de
        Senior Data Engineer chez X&quot;.
      </li>
      <li>
        <strong>Mentionnez le droit d&apos;opposition</strong> : &quot;Dites-moi si vous préférez ne
        plus être contacté&quot;.
      </li>
      <li>
        <strong>Restez court</strong> : moins de 400 caractères, une seule question claire.
      </li>
      <li>
        <strong>N&apos;envoyez jamais en horaire intrusif</strong> : 9h–19h en semaine, c&apos;est
        la règle implicite.
      </li>
    </ul>

    <h2>WhatsApp Business API : la seule voie professionnelle</h2>
    <p>
      Utiliser WhatsApp Web depuis un téléphone perso pour faire du{" "}
      <strong>recrutement WhatsApp</strong> à grande échelle est une mauvaise idée : risque de
      bannissement, aucun audit possible, conformité RGPD impossible à prouver. La voie
      professionnelle, c&apos;est l&apos;API officielle WhatsApp Business, accessible via des
      partenaires Meta (BSP). Une plateforme comme TrueCalling intègre cette API nativement, ce qui
      vous donne :
    </p>
    <ul>
      <li>Un numéro dédié, certifié, qui ne risque pas le bannissement.</li>
      <li>L&apos;archivage horodaté de chaque échange.</li>
      <li>La gestion centralisée des opt-out.</li>
      <li>Des templates validés par Meta pour le premier contact.</li>
    </ul>

    <h2>Exemple concret : campagne sur 80 candidats</h2>
    <p>
      Vous lancez une campagne de <strong>recrutement WhatsApp</strong> sur 80 développeurs Go
      identifiés à Paris. Vous séquencez : J0 message d&apos;intro, J3 relance courte, J7 dernier
      message. Les chiffres typiques observés en 2026 :
    </p>
    <ul>
      <li>78 messages délivrés (deux numéros invalides).</li>
      <li>76 lus dans les 4 heures (97 %).</li>
      <li>34 réponses (44 %).</li>
      <li>19 entretiens téléphoniques planifiés.</li>
      <li>4 candidats en process avancé sous 3 semaines.</li>
    </ul>
    <p>
      Le même brief envoyé en email froid aurait probablement généré 5 à 8 réponses sur les 80.
      L&apos;écart est massif, mais il n&apos;est tenable que si la conformité tient.
    </p>

    <h2>Les 3 erreurs à ne plus commettre</h2>
    <ol>
      <li>
        <strong>Envoyer depuis un compte perso.</strong> Aucune trace, aucun consentement
        traçable, risque CNIL en cas de plainte.
      </li>
      <li>
        <strong>Récupérer des numéros par scraping non maîtrisé.</strong> Si la source ne respecte
        pas le RGPD, votre campagne ne le respecte pas non plus.
      </li>
      <li>
        <strong>Ignorer les opt-out.</strong> Une seule plainte CNIL bien documentée et vous payez
        cher la négligence.
      </li>
    </ol>

    <h2>Comment combiner WhatsApp avec les autres canaux</h2>
    <p>
      Le <strong>recrutement WhatsApp</strong> ne remplace pas tout. Il s&apos;intègre dans un
      sourcing multicanal où LinkedIn sert à identifier, l&apos;email à formaliser et le téléphone à
      conclure. Pour aller plus loin sur cette logique, lisez notre article sur le{" "}
      <Link
        href="/blog/sourcing-multicanal-linkedin-ne-suffit-plus"
        className="text-accent underline-offset-4 hover:underline"
      >
        sourcing multicanal
      </Link>
      .
    </p>

    <h2>Outils et stack recommandée pour 2026</h2>
    <p>
      Pour un déploiement propre du <strong>recrutement WhatsApp</strong> dans une équipe Talent, il
      vous faut trois briques :
    </p>
    <ul>
      <li>
        <strong>Une plateforme de sourcing</strong> avec WhatsApp Business API native.
      </li>
      <li>
        <strong>Un ATS</strong> pour stocker les données candidat de manière conforme.
      </li>
      <li>
        <strong>Une politique RGPD écrite</strong> et un DPO informé.
      </li>
    </ul>
    <p>
      TrueCalling couvre les deux premières briques avec WhatsApp natif et intégrations ATS
      Greenhouse, Lever, Teamtailor et Recruitee.{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Tester l&apos;outreach WhatsApp dans TrueCalling
      </Link>{" "}
      pour voir le flux end-to-end.
    </p>

    <h2>Conclusion : maîtrisé, le recrutement WhatsApp est imbattable</h2>
    <p>
      Le <strong>recrutement WhatsApp</strong> n&apos;est pas un hack — c&apos;est désormais le
      canal qui surperforme structurellement l&apos;email et l&apos;InMail. La conformité RGPD est
      une question d&apos;outillage et de discipline, pas d&apos;impossibilité juridique. Avec une
      plateforme qui intègre l&apos;API officielle, des templates validés et une gestion centralisée
      des opt-out, vous capturez les 90 % d&apos;ouverture sans risquer un contrôle.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Lancez votre première campagne WhatsApp conforme
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Démo de 30 minutes : vous repartez avec un workflow WhatsApp + email + téléphone prêt à
        déclencher sur votre prochain poste tendu.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article3Content: ReactNode = (
  <>
    <p>
      Le <strong>copilote IA recrutement</strong> est devenu un acronyme à la mode, mais peu de
      recruteurs savent ce qui change concrètement dans leur journée. Combien de temps gagné ? Sur
      quelles tâches ? Qu&apos;est-ce qui reste — heureusement — entre vos mains ? Cet article ouvre
      la boîte noire et regarde ce qu&apos;un copilote IA fait vraiment, à partir d&apos;une journée
      type chez une équipe Talent française.
    </p>

    <h2>Qu&apos;est-ce qu&apos;un copilote IA pour recruteur ?</h2>
    <p>
      Un <strong>copilote IA recrutement</strong> n&apos;est pas un agent autonome qui recrute à
      votre place. C&apos;est un assistant qui s&apos;assoit virtuellement à côté de vous et prend en
      charge les tâches répétitives à faible valeur : rédaction de messages, qualification de CV,
      planification d&apos;entretiens, suivi des séquences. Vous gardez la décision et le contact
      humain ; il fait disparaître le travail mécanique.
    </p>
    <p>
      EMILY, le copilote de TrueCalling, en est un exemple. Elle lit votre brief, propose une longue
      liste de candidats scorés, rédige les messages d&apos;outreach personnalisés et alerte
      seulement quand votre arbitrage est nécessaire.
    </p>

    <h2>Une journée avec et sans copilote IA</h2>

    <h3>Sans copilote IA : 8h30 à 19h</h3>
    <ul>
      <li>2h de sourcing manuel sur LinkedIn Recruiter.</li>
      <li>1h30 de rédaction d&apos;InMails personnalisés (ou pas).</li>
      <li>1h de relances oubliées la veille.</li>
      <li>2h d&apos;entretiens.</li>
      <li>1h de reporting et mise à jour ATS.</li>
      <li>Le reste : interruptions, briefs hiring managers, calage d&apos;agendas.</li>
    </ul>

    <h3>Avec copilote IA : 9h à 18h</h3>
    <ul>
      <li>20 min pour valider la longue liste générée par l&apos;IA.</li>
      <li>15 min pour relire et personnaliser les messages proposés.</li>
      <li>3h d&apos;entretiens, sans calage manuel d&apos;agenda.</li>
      <li>1h30 sur les sujets stratégiques : briefs, qualifications, négociations.</li>
      <li>Reporting auto-généré.</li>
    </ul>
    <p>
      Le gain typique observé sur une équipe qui adopte un <strong>copilote IA recrutement</strong>{" "}
      sérieusement : 8 à 12 heures par recruteur par semaine. Soit l&apos;équivalent d&apos;un
      jour-homme et demi récupéré.
    </p>

    <h2>Les 5 tâches que le copilote IA fait mieux que vous</h2>
    <ol>
      <li>
        <strong>Traduire un brief flou en requête sourcing.</strong> Vous écrivez &quot;on cherche
        un product designer un peu senior, ouvert au remote&quot;. Le copilote propose la requête
        complète avec localisations, niveaux d&apos;expérience, stack et entreprises cibles.
      </li>
      <li>
        <strong>Personnaliser 50 messages en 5 minutes.</strong> Un humain en mettrait 90 minutes
        pour un résultat moins fin.
      </li>
      <li>
        <strong>Suivre les relances.</strong> Aucune relance oubliée, ce qui change radicalement
        les taux de conversion.
      </li>
      <li>
        <strong>Détecter les signaux faibles.</strong> Un commit récent, un changement de poste, un
        conférencier — autant de hooks qu&apos;un humain ne voit pas en scrollant.
      </li>
      <li>
        <strong>Mettre à jour l&apos;ATS.</strong> Synchronisation native, plus de copier-coller.
      </li>
    </ol>

    <h2>Les 3 tâches qui doivent rester humaines</h2>
    <p>
      Un bon <strong>copilote IA recrutement</strong> sait s&apos;arrêter là où le jugement humain
      est nécessaire :
    </p>
    <ul>
      <li>
        <strong>L&apos;entretien.</strong> Évaluer un candidat sur ses motivations, sa cohérence
        narrative, son fit culturel — c&apos;est votre métier.
      </li>
      <li>
        <strong>La négociation.</strong> Comprendre ce qui compte vraiment pour un candidat (
        bonus, équité, télétravail, mission) et bâtir une offre — c&apos;est humain.
      </li>
      <li>
        <strong>Le brief avec le hiring manager.</strong> Challenger un manager sur la stack
        attendue ou la fourchette salariale, ça ne s&apos;automatise pas.
      </li>
    </ul>

    <h2>Comment EMILY change le quotidien chez TrueCalling</h2>
    <p>
      EMILY est conçue comme un copilote, pas comme un agent autonome. Elle propose, vous validez.
      Concrètement, sur un poste de Lead Backend Go à Lyon :
    </p>
    <ul>
      <li>EMILY génère 180 candidats scorés en moins de 4 minutes.</li>
      <li>Elle rédige 180 séquences personnalisées (WhatsApp / email selon canal préféré).</li>
      <li>Elle planifie les relances et adapte le ton selon les réponses entrantes.</li>
      <li>Elle remonte les 12 candidats à plus de 90/100 sur le score TrueFit 360.</li>
      <li>Vous arbitrez en 30 minutes ce qui aurait pris 6 heures.</li>
    </ul>
    <p>
      Pour comprendre comment fonctionne le score qui sous-tend ces décisions, lisez notre article
      sur le{" "}
      <Link
        href="/blog/score-matching-candidat-poste-ia"
        className="text-accent underline-offset-4 hover:underline"
      >
        score de matching candidat-poste
      </Link>
      .
    </p>

    <h2>Faut-il craindre que l&apos;IA remplace le recruteur ?</h2>
    <p>
      Question légitime, réponse honnête : non, mais elle redéfinit le métier. Le recruteur de 2026
      ne passe plus 70 % de son temps à scroller LinkedIn. Il passe 70 % de son temps à parler aux
      candidats, comprendre les briefs et négocier les offres. Le <strong>copilote IA recrutement</strong>{" "}
      ne supprime pas le métier — il le ramène à ce qu&apos;il aurait toujours dû être.
    </p>

    <h2>Comment déployer un copilote IA en 30 jours</h2>
    <ol>
      <li>
        <strong>Semaine 1</strong> : audit de vos process actuels et identification des 3 tâches
        les plus chronophages.
      </li>
      <li>
        <strong>Semaine 2</strong> : intégration ATS et import des briefs en cours.
      </li>
      <li>
        <strong>Semaine 3</strong> : pilote sur un poste tendu, mesure du time-to-first-response.
      </li>
      <li>
        <strong>Semaine 4</strong> : généralisation à toute l&apos;équipe et formation des
        recruteurs au pairing avec EMILY.
      </li>
    </ol>
    <p>
      Pour aller plus loin sur la généralisation,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Découvrir EMILY, le copilote IA TrueCalling
      </Link>
      .
    </p>

    <h2>Conclusion : le copilote IA est devenu une infrastructure, pas un gadget</h2>
    <p>
      En 2026, un <strong>copilote IA recrutement</strong> n&apos;est plus un nice-to-have. C&apos;est
      la couche d&apos;orchestration qui sépare les équipes Talent qui recrutent vite de celles qui
      subissent leurs pipelines. Le bon réflexe n&apos;est pas &quot;est-ce que ça marche ?&quot;
      mais &quot;quel copilote choisir et comment le déployer en moins de 30 jours ?&quot;
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Voyez EMILY au travail sur un de vos postes
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On prend un de vos briefs en cours et on vous montre, en direct, comment EMILY génère 150
        candidats scorés et 150 messages personnalisés en moins de 10 minutes.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article4Content: ReactNode = (
  <>
    <p>
      Si vous évaluez TrueCalling, vous comparez probablement avec HireSweet — l&apos;acteur
      historique du sourcing tech français. Cet article est un comparatif factuel, sans tour de
      passe-passe : si HireSweet est mieux pour votre cas, on le dit. L&apos;objectif est de vous
      aider à choisir une <strong>alternative à HireSweet</strong> uniquement si elle vous fait
      gagner du temps et des recrutements.
    </p>

    <h2>TrueCalling et HireSweet : positionnements différents</h2>
    <p>
      HireSweet est arrivé sur le marché en 2016 avec une promesse claire : sourcer des profils tech
      français en agrégeant LinkedIn, GitHub et leurs propres bases. C&apos;est un produit solide,
      utilisé par de nombreuses scale-ups françaises.
    </p>
    <p>
      TrueCalling, plus récent, repart d&apos;une page blanche avec trois priorités absentes des
      outils historiques : un copilote IA conversationnel (EMILY), un score de matching contextuel
      explicable (TrueFit 360) et un outreach multicanal natif intégrant WhatsApp avec 90 % de taux
      d&apos;ouverture. Si vous cherchez une <strong>alternative à HireSweet</strong> qui pousse plus
      loin la couche IA, c&apos;est exactement le terrain de jeu.
    </p>

    <h2>Tableau comparatif : TrueCalling vs HireSweet</h2>
    <table>
      <thead>
        <tr>
          <th>Dimension</th>
          <th>TrueCalling</th>
          <th>HireSweet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Méthode de sourcing</td>
          <td>Recherche sémantique multi-sources + copilote EMILY</td>
          <td>Recherche par filtres + suggestions ML</td>
        </tr>
        <tr>
          <td>Score de matching</td>
          <td>TrueFit 360, score sur 100 expliqué ligne par ligne</td>
          <td>Score interne, peu détaillé côté utilisateur</td>
        </tr>
        <tr>
          <td>Copilote IA</td>
          <td>EMILY : génère brief, requête, messages, relances</td>
          <td>Pas de copilote conversationnel natif</td>
        </tr>
        <tr>
          <td>Canaux d&apos;outreach</td>
          <td>WhatsApp + email + téléphone (multicanal natif)</td>
          <td>Email principalement, LinkedIn via extension</td>
        </tr>
        <tr>
          <td>Taux d&apos;ouverture WhatsApp</td>
          <td>90 % vs 20 % email — natif dans l&apos;outil</td>
          <td>Pas de WhatsApp natif</td>
        </tr>
        <tr>
          <td>Intégrations ATS</td>
          <td>Greenhouse, Lever, Teamtailor, Recruitee, Workday</td>
          <td>Greenhouse, Lever, Welcome Kit, autres</td>
        </tr>
        <tr>
          <td>Tarif (point d&apos;entrée)</td>
          <td>Starter 595 $/user/mois, Core 895 $</td>
          <td>Sur devis, généralement à partir de ~600 €/mois</td>
        </tr>
        <tr>
          <td>Cible</td>
          <td>Cabinets et équipes Talent FR + Europe, tous secteurs</td>
          <td>Scale-ups tech françaises principalement</td>
        </tr>
      </tbody>
    </table>

    <h2>Quand HireSweet reste un bon choix</h2>
    <p>
      Soyons honnêtes : si vous recrutez exclusivement des profils tech à Paris, que vous êtes une
      scale-up de moins de 50 personnes, et que vous travaillez déjà avec leur écosystème, HireSweet
      reste pertinent. Il fait bien ce qu&apos;il sait faire depuis 2016.
    </p>

    <h2>Quand TrueCalling devient l&apos;alternative à HireSweet à choisir</h2>
    <p>
      Quatre scénarios où une <strong>alternative à HireSweet</strong> comme TrueCalling vous fera
      gagner significativement plus :
    </p>
    <ol>
      <li>
        <strong>Vous recrutez au-delà de la tech.</strong> Sales, marketing, ops, finance — la
        couverture de TrueCalling est plus large.
      </li>
      <li>
        <strong>Vous voulez du WhatsApp natif.</strong> Si vos candidats répondent mieux sur
        WhatsApp que sur l&apos;email, l&apos;écart de performance est massif.
      </li>
      <li>
        <strong>Vous êtes un cabinet de recrutement.</strong> EMILY accélère le travail des
        chargés de recherche sur des volumes élevés.
      </li>
      <li>
        <strong>Vous voulez un copilote IA explicable.</strong> Le score TrueFit 360 décompose
        chaque dimension, vos hiring managers comprennent les recommandations.
      </li>
    </ol>

    <h2>Cas concret : Senior Backend Go à Lyon</h2>
    <p>
      Sur un même brief — Senior Backend Go, 5+ ans d&apos;expérience, Lyon ou full-remote France —
      voici les chiffres typiques observés en 2026 :
    </p>
    <ul>
      <li>
        <strong>HireSweet</strong> : 130 profils suggérés, taux de réponse moyen ~12 % (email).
      </li>
      <li>
        <strong>TrueCalling</strong> : 180 profils scorés, dont 28 au-dessus de 85/100. Outreach
        WhatsApp + email, taux de réponse moyen ~38 %.
      </li>
    </ul>
    <p>
      L&apos;écart vient principalement du canal WhatsApp et de la qualité du score, qui filtre le
      bruit en amont.
    </p>

    <h2>Pricing : la lecture honnête</h2>
    <p>
      TrueCalling est transparent : Starter 595 $/user/mois, Core 895 $/user/mois, Enterprise sur
      devis. HireSweet pratique le devis systématique, ce qui rend la comparaison difficile, mais le
      ticket d&apos;entrée se situe dans une fourchette comparable. À ROI équivalent, TrueCalling se
      différencie par les fonctionnalités incluses (WhatsApp, EMILY, TrueFit 360) plutôt que par le
      prix brut.
    </p>

    <h2>Questions fréquentes</h2>
    <ul>
      <li>
        <strong>Peut-on importer ses talent pools depuis HireSweet ?</strong> Oui, via export CSV
        et import dans TrueCalling, avec déduplication automatique.
      </li>
      <li>
        <strong>L&apos;intégration ATS est-elle couverte ?</strong> Greenhouse, Lever, Teamtailor,
        Recruitee — natives.
      </li>
      <li>
        <strong>Combien de temps pour migrer ?</strong> 7 à 14 jours en moyenne pour une équipe de
        5 à 10 recruteurs.
      </li>
    </ul>

    <h2>Et si vous comparez aussi avec LinkedIn Recruiter ?</h2>
    <p>
      Si LinkedIn Recruiter fait aussi partie de votre shortlist, lisez notre comparatif{" "}
      <Link
        href="/blog/truecalling-vs-linkedin-recruiter"
        className="text-accent underline-offset-4 hover:underline"
      >
        TrueCalling vs LinkedIn Recruiter
      </Link>
      , complémentaire de celui-ci.
    </p>
    <p>
      Pour explorer les fonctionnalités complètes,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Réserver une démo TrueCalling
      </Link>{" "}
      ou consultez notre{" "}
      <Link href="/blog/sourcing-ia-guide-2026" className="text-accent underline-offset-4 hover:underline">
        guide complet du sourcing IA en 2026
      </Link>
      .
    </p>

    <h2>Conclusion : choisir l&apos;alternative à HireSweet adaptée à votre stack</h2>
    <p>
      Choisir une <strong>alternative à HireSweet</strong> n&apos;a de sens que si elle vous fait
      gagner sur trois axes : qualité du matching, performance de l&apos;outreach et productivité du
      recruteur. TrueCalling coche les trois grâce à EMILY, TrueFit 360 et son outreach multicanal
      natif. Si vous restez dans un usage pur sourcing tech sur Paris avec process déjà huilé,
      HireSweet reste valable. Au-delà, le calcul penche en faveur de TrueCalling.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Comparez sur un de vos postes en cours
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Donnez-nous un brief que vous travaillez déjà ailleurs. On vous montre, en 30 minutes, le
        delta concret en nombre de profils scorés et taux de réponse.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article5Content: ReactNode = (
  <>
    <p>
      LinkedIn Recruiter reste le standard de fait pour beaucoup d&apos;équipes Talent, mais ses
      limites sont devenues criantes en 2026. Si vous cherchez une{" "}
      <strong>alternative à LinkedIn Recruiter</strong>, c&apos;est probablement parce que le ratio
      coût / résultat n&apos;est plus tenable. Cet article compare TrueCalling à LinkedIn Recruiter
      sur les dimensions qui comptent vraiment pour un recruteur.
    </p>

    <h2>Pourquoi chercher une alternative à LinkedIn Recruiter en 2026</h2>
    <p>
      Trois signaux poussent les équipes Talent à explorer une{" "}
      <strong>alternative à LinkedIn Recruiter</strong> :
    </p>
    <ul>
      <li>
        <strong>Taux d&apos;ouverture des InMails en chute libre</strong> : 18 à 22 % en moyenne,
        contre 35 % il y a cinq ans.
      </li>
      <li>
        <strong>Tarif élevé sans IA réelle</strong> : 10 000 à 15 000 € par an et par licence
        Recruiter Lite/Pro, sans copilote IA digne de ce nom.
      </li>
      <li>
        <strong>Pas de WhatsApp natif</strong> : alors que c&apos;est devenu le canal le plus
        performant.
      </li>
    </ul>

    <h2>Tableau comparatif : TrueCalling vs LinkedIn Recruiter</h2>
    <table>
      <thead>
        <tr>
          <th>Dimension</th>
          <th>TrueCalling</th>
          <th>LinkedIn Recruiter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Méthode de sourcing</td>
          <td>Recherche sémantique multi-sources + EMILY</td>
          <td>Filtres LinkedIn natifs + Recommended Matches</td>
        </tr>
        <tr>
          <td>Sources couvertes</td>
          <td>LinkedIn, GitHub, bases enrichies, ATS interne</td>
          <td>LinkedIn uniquement</td>
        </tr>
        <tr>
          <td>Score de matching</td>
          <td>TrueFit 360, explicable ligne par ligne</td>
          <td>Pas de score IA explicable</td>
        </tr>
        <tr>
          <td>Canaux d&apos;outreach</td>
          <td>WhatsApp 90 % + email + téléphone</td>
          <td>InMail uniquement (limites mensuelles)</td>
        </tr>
        <tr>
          <td>Taux d&apos;ouverture moyen</td>
          <td>90 % WhatsApp / 20 % email</td>
          <td>~20 % InMail (en baisse)</td>
        </tr>
        <tr>
          <td>Intégrations ATS</td>
          <td>Greenhouse, Lever, Teamtailor, Recruitee, Workday</td>
          <td>Limité, souvent via Recruiter System Connect</td>
        </tr>
        <tr>
          <td>Tarif (point d&apos;entrée)</td>
          <td>Starter 595 $/user/mois</td>
          <td>~10 000–15 000 €/an/user</td>
        </tr>
        <tr>
          <td>Conformité RGPD UE</td>
          <td>Hébergement et conformité européens</td>
          <td>Hébergement US, conformité variable</td>
        </tr>
      </tbody>
    </table>

    <h2>Les 4 limites majeures de LinkedIn Recruiter</h2>

    <h3>1. Une seule source = un angle mort</h3>
    <p>
      LinkedIn Recruiter ne voit que LinkedIn. Pour un Senior Data Engineer à Paris, vous passez à
      côté des profils GitHub très actifs qui n&apos;actualisent pas leur LinkedIn. Une{" "}
      <strong>alternative à LinkedIn Recruiter</strong> sérieuse couvre LinkedIn, GitHub, Stack
      Overflow et bases enrichies en parallèle.
    </p>

    <h3>2. Pas de copilote IA conversationnel</h3>
    <p>
      Recruiter propose des suggestions, mais pas de copilote qui rédige les messages, planifie les
      relances et bascule de canal automatiquement. EMILY chez TrueCalling fait exactement cela.
    </p>

    <h3>3. Outreach mono-canal</h3>
    <p>
      L&apos;InMail ne suffit plus. Les meilleurs candidats reçoivent 8 à 15 InMails par mois et
      ouvrent à peine la moitié. Avec un outreach multicanal incluant WhatsApp, le taux
      d&apos;ouverture moyen passe de 20 % à 90 % sur le premier message.
    </p>

    <h3>4. Tarif déconnecté de la valeur livrée</h3>
    <p>
      Une licence Recruiter coûte typiquement 10 à 15 k€/an. TrueCalling Starter à 595 $/user/mois,
      soit ~7 000 $/an, embarque un copilote IA, le multicanal et le score TrueFit 360. À budget
      égal, vous obtenez beaucoup plus.
    </p>

    <h2>Cas concret : Senior Product Manager à Paris</h2>
    <p>
      Brief identique : Senior PM SaaS B2B, 6+ ans, Paris, ouvert au remote partiel.
    </p>
    <ul>
      <li>
        <strong>LinkedIn Recruiter</strong> : 95 InMails envoyés, 19 % d&apos;ouverture, 11
        réponses qualifiées en 3 semaines.
      </li>
      <li>
        <strong>TrueCalling</strong> : 95 candidats contactés en multicanal, 76 % de réponses sur
        WhatsApp, 39 réponses qualifiées en 10 jours.
      </li>
    </ul>

    <h2>Quand LinkedIn Recruiter reste utile</h2>
    <p>
      LinkedIn Recruiter garde son utilité sur deux usages : la consultation rapide de profils en
      ouverture de poste, et la gestion de votre projet RH visible (employer branding via
      LinkedIn). Mais comme moteur de sourcing principal, il est dépassé en 2026 — d&apos;où la
      multiplication des solutions construites comme <strong>alternative à LinkedIn Recruiter</strong>.
    </p>

    <h2>Migrer de LinkedIn Recruiter vers TrueCalling</h2>
    <ol>
      <li>
        <strong>Semaine 1</strong> : audit des projets RH actifs et import dans TrueCalling.
      </li>
      <li>
        <strong>Semaine 2</strong> : intégration ATS et synchronisation des candidats existants.
      </li>
      <li>
        <strong>Semaine 3</strong> : pilote sur un poste tendu, mesure du delta time-to-response.
      </li>
      <li>
        <strong>Semaine 4</strong> : décision de réduire ou ne pas renouveler les licences
        Recruiter.
      </li>
    </ol>
    <p>
      Beaucoup d&apos;équipes gardent une licence Recruiter résiduelle pour les usages annexes,
      tout en basculant le sourcing actif sur TrueCalling. Le ROI est généralement positif dès la
      semaine 4.
    </p>

    <h2>Ressources complémentaires</h2>
    <p>
      Si vous comparez aussi avec un acteur du sourcing tech français, lisez notre comparatif{" "}
      <Link href="/blog/truecalling-vs-hiresweet" className="text-accent underline-offset-4 hover:underline">
        TrueCalling vs HireSweet
      </Link>
      . Pour comprendre pourquoi le mono-canal est dépassé, voyez notre article sur le{" "}
      <Link
        href="/blog/sourcing-multicanal-linkedin-ne-suffit-plus"
        className="text-accent underline-offset-4 hover:underline"
      >
        sourcing multicanal
      </Link>
      .
    </p>
    <p>
      Pour découvrir l&apos;outil en pratique :{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Réserver une démo TrueCalling
      </Link>
      .
    </p>

    <h2>Conclusion : LinkedIn Recruiter ne suffit plus comme moteur principal</h2>
    <p>
      LinkedIn Recruiter reste un bon répertoire de profils, mais ce n&apos;est plus un moteur de
      sourcing performant en 2026. Une <strong>alternative à LinkedIn Recruiter</strong> comme
      TrueCalling vous donne plus de sources, un copilote IA, du multicanal et un score explicable —
      le tout pour un prix souvent inférieur à une licence Recruiter Pro. Le calcul est simple : à
      ROI mesurable, vous recrutez plus vite et avec moins de friction.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Mesurez le delta sur votre prochain poste tendu
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On compare en direct un projet Recruiter actif et le même brief lancé dans TrueCalling.
        Vous voyez la différence sur la qualité des profils et le taux de réponse en 30 minutes.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article6Content: ReactNode = (
  <>
    <p>
      Le <strong>score de matching candidat</strong> est la fonctionnalité la plus utilisée et la
      plus mal comprise des plateformes de sourcing IA. Comment l&apos;IA évalue-t-elle la
      correspondance entre un profil et un poste ? Sur quoi se base-t-elle ? Où se trompe-t-elle —
      systématiquement ? Cet article ouvre le capot et explique ce que mesure réellement un score de
      matching, à l&apos;image du score TrueFit 360 de TrueCalling.
    </p>

    <h2>Qu&apos;est-ce qu&apos;un score de matching candidat ?</h2>
    <p>
      Un <strong>score de matching candidat</strong> est une note (souvent sur 100) qui exprime la
      probabilité qu&apos;un candidat corresponde à un poste donné. Cette note synthétise plusieurs
      dimensions : compétences, expérience, contexte d&apos;entreprise, géographie, disponibilité.
      Le score n&apos;est pas une vérité absolue — c&apos;est un classement utile pour prioriser
      l&apos;outreach.
    </p>

    <h2>Les 5 dimensions qu&apos;une bonne IA évalue</h2>
    <ol>
      <li>
        <strong>Compétences techniques.</strong> Stack, langages, frameworks. Les meilleures IA ne
        se contentent pas du CV : elles regardent les commits GitHub récents.
      </li>
      <li>
        <strong>Trajectoire d&apos;expérience.</strong> Niveau, progression, taille
        d&apos;entreprises. Un candidat qui a fait 3 startups en série est différent de celui qui
        sort de 8 ans en grand groupe.
      </li>
      <li>
        <strong>Contexte d&apos;entreprise.</strong> Secteur, modèle, stade (early, scale-up,
        public). Important pour la pertinence culturelle.
      </li>
      <li>
        <strong>Disponibilité estimée.</strong> Ancienneté dans le poste actuel, signaux faibles
        (changement LinkedIn, conférences, side-projects).
      </li>
      <li>
        <strong>Géographie et mobilité.</strong> Localisation actuelle, ouverture au remote,
        compatibilité fuseau horaire.
      </li>
    </ol>

    <h2>Comment fonctionne TrueFit 360</h2>
    <p>
      Le score TrueFit 360 de TrueCalling produit une note sur 100 décomposée par dimension, pour
      qu&apos;un recruteur ou un hiring manager puisse comprendre d&apos;où vient la
      recommandation. Sur un Senior Data Engineer à Paris, vous obtenez par exemple :
    </p>
    <ul>
      <li>Compétences techniques : 92/100 (Spark, dbt, Airflow détectés sur GitHub).</li>
      <li>Trajectoire : 88/100 (6 ans, scale-up SaaS).</li>
      <li>Contexte : 75/100 (vient d&apos;un grand groupe, transition possible).</li>
      <li>Disponibilité : 80/100 (3 ans dans son poste, signaux d&apos;ouverture).</li>
      <li>Géographie : 100/100 (Paris, OK remote).</li>
      <li>
        <strong>Total TrueFit 360 : 89/100.</strong>
      </li>
    </ul>
    <p>
      Cette explicabilité change tout. Vos hiring managers font confiance à un score qu&apos;ils
      peuvent lire ; un score boîte noire est ignoré.
    </p>

    <h2>Là où le score de matching se trompe — toujours</h2>

    <h3>1. Le fit culturel</h3>
    <p>
      Aucune IA ne lit la culture d&apos;entreprise correctement. Un excellent profil technique
      peut être un cauchemar relationnel. Le <strong>score de matching candidat</strong> est un
      indicateur de pertinence, pas de fit culturel.
    </p>

    <h3>2. Les motivations réelles</h3>
    <p>
      Pourquoi le candidat changerait-il de job ? L&apos;IA peut détecter des signaux, jamais lire
      dans sa tête. C&apos;est l&apos;entretien qui révèle ça.
    </p>

    <h3>3. Les profils atypiques</h3>
    <p>
      Quelqu&apos;un qui a fait théâtre puis backend chez Google sortira en bas du score. Or
      c&apos;est peut-être votre meilleur recrutement. Toujours regarder les outliers manuellement.
    </p>

    <h3>4. La fraîcheur des données</h3>
    <p>
      Un score basé sur un LinkedIn jamais mis à jour depuis 2 ans est faux. Les bonnes plateformes
      enrichissent leurs données en continu et indiquent la fraîcheur.
    </p>

    <h2>Score de matching et biais : une vigilance permanente</h2>
    <p>
      Tout <strong>score de matching candidat</strong> peut reproduire des biais présents dans les
      données d&apos;entraînement. Genre, âge, école, prénom — autant de variables qui peuvent
      pondérer indûment le score si l&apos;IA n&apos;est pas auditée. Demandez à votre éditeur :
    </p>
    <ul>
      <li>Le score est-il auditable variable par variable ?</li>
      <li>Les variables protégées sont-elles exclues ou contrôlées ?</li>
      <li>Y a-t-il un mode &quot;CV anonymisé&quot; pour la phase de scoring ?</li>
    </ul>

    <h2>Comment utiliser un score de matching intelligemment</h2>
    <ol>
      <li>
        <strong>Trier mais ne pas exclure.</strong> Travaillez d&apos;abord les 50 meilleurs
        scores, gardez l&apos;œil sur les 50 suivants.
      </li>
      <li>
        <strong>Croiser score et signaux humains.</strong> Une lettre de motivation, un side-
        project, un parcours raconté en entretien valent plus qu&apos;un score brut.
      </li>
      <li>
        <strong>Réviser le brief si trop peu de candidats au-dessus de 80.</strong> Souvent, le
        problème vient du brief, pas du marché.
      </li>
      <li>
        <strong>Donner le score au hiring manager.</strong> Décomposé, il sert de support de
        discussion.
      </li>
    </ol>

    <h2>Score de matching et productivité du recruteur</h2>
    <p>
      Le bon usage du <strong>score de matching candidat</strong> change la productivité d&apos;un
      recruteur. Au lieu de scroller 200 profils en lecture diagonale, il en travaille 30 en
      profondeur. Pour aller plus loin sur la productivité côté recruteur, lisez notre article sur
      le{" "}
      <Link
        href="/blog/copilote-ia-recruteurs-au-quotidien"
        className="text-accent underline-offset-4 hover:underline"
      >
        copilote IA pour recruteurs au quotidien
      </Link>
      .
    </p>

    <h2>Comment évaluer un score de matching avant achat</h2>
    <p>
      Avant de signer avec un éditeur, faites le test suivant : prenez 20 candidats que vous avez
      embauchés récemment. Faites-les scorer par le moteur. Si la majorité sort au-dessus de 80, le
      score apprend bien. Faites le test inverse avec 20 candidats refusés : ils doivent
      majoritairement sortir en dessous de 60. Sans ce double-test, vous achetez un score à
      l&apos;aveugle.
    </p>

    <h2>Conclusion : un score de matching est un outil, pas un oracle</h2>
    <p>
      Un <strong>score de matching candidat</strong> bien conçu — comme TrueFit 360 — accélère le
      tri et améliore la qualité des shortlists. Mais aucun score ne remplace votre jugement de
      recruteur. La règle d&apos;or : exigez l&apos;explicabilité, croisez avec les signaux humains,
      auditez les biais, et gardez toujours un œil sur les outliers.
    </p>
    <p>
      Pour voir TrueFit 360 en action sur un de vos briefs,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Voir le score TrueFit 360 en action
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Testez TrueFit 360 sur vos derniers recrutements
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On vous montre comment TrueFit 360 aurait scoré vos 20 derniers candidats embauchés. Le
        meilleur test pour évaluer un score de matching avant d&apos;acheter.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article7Content: ReactNode = (
  <>
    <p>
      Vouloir <strong>réduire le time-to-hire</strong> est une obsession légitime en 2026 : sur les
      profils tendus, chaque jour de retard coûte un candidat. La médiane française pour un poste
      tech est de 35 jours ; les meilleures équipes Talent recrutent en 18 à 22 jours. Cet article
      détaille 7 leviers concrets, chiffrés, applicables sans transformation totale du process.
    </p>

    <h2>Pourquoi le time-to-hire est devenu critique</h2>
    <p>
      Trois raisons rendent l&apos;enjeu &quot;<strong>réduire le time-to-hire</strong>&quot;
      stratégique :
    </p>
    <ul>
      <li>
        <strong>Compétition serrée sur les profils rares.</strong> Un Senior Data Engineer à Paris
        reçoit 3 à 5 offres concurrentes en 10 jours.
      </li>
      <li>
        <strong>Coût d&apos;opportunité du poste vacant.</strong> Estimé à 1 % du chiffre
        d&apos;affaires généré par le poste, par jour de vacance.
      </li>
      <li>
        <strong>Marque employeur.</strong> Un process de 60+ jours détériore votre Glassdoor, donc
        vos pipelines futurs.
      </li>
    </ul>

    <h2>Levier 1 — Sourcer en multicanal dès J1</h2>
    <p>
      Si vous n&apos;envoyez que des InMails, vous attendez. WhatsApp ouvre à 90 %, contre 20 %
      pour l&apos;email. Le simple ajout du WhatsApp dans la séquence d&apos;outreach{" "}
      <strong>réduit le time-to-hire</strong> de 4 à 7 jours en moyenne sur les premières réponses.
    </p>

    <h2>Levier 2 — Utiliser un copilote IA pour rédiger les messages</h2>
    <p>
      La rédaction de 50 messages personnalisés prend 90 minutes à un humain, 5 minutes à EMILY.
      Multipliez par 3 postes ouverts en parallèle, vous récupérez une demi-journée par semaine —
      réinjectée dans des entretiens, donc dans la conversion. Pour creuser ce point, voyez notre
      article sur le{" "}
      <Link
        href="/blog/copilote-ia-recruteurs-au-quotidien"
        className="text-accent underline-offset-4 hover:underline"
      >
        copilote IA pour recruteurs
      </Link>
      .
    </p>

    <h2>Levier 3 — Brief hiring manager en moins de 30 minutes</h2>
    <p>
      Un brief mal cadré coûte 7 à 10 jours sur le time-to-hire — détectés trop tard dans la phase
      shortlist. Imposez un format de brief structuré : compétences must-have, nice-to-have,
      fourchette salariale validée, top 5 entreprises cibles, 3 entreprises à éviter. Avec EMILY, le
      brief est même remonté automatiquement sous forme de requête sourcing.
    </p>

    <h2>Levier 4 — Réduire le nombre d&apos;étapes d&apos;entretien</h2>
    <p>
      4 étapes en 2026, c&apos;est le maximum tenable pour un poste non-C-level. Au-delà, vous
      perdez les meilleurs candidats au profit de concurrents plus rapides. Audit type :
    </p>
    <ol>
      <li>Entretien recruteur (30 min).</li>
      <li>Entretien hiring manager (45 min).</li>
      <li>Test technique ou business case (60–90 min).</li>
      <li>Entretien équipe et closing (60 min).</li>
    </ol>
    <p>
      Toute étape ajoutée doit prouver son utilité. La règle : si vous ne pouvez pas dire ce que
      cette étape évalue spécifiquement, supprimez-la.
    </p>

    <h2>Levier 5 — Planifier les entretiens en self-service</h2>
    <p>
      Le calage d&apos;agenda manuel coûte typiquement 2 à 3 jours par étape. Avec un outil de
      planification self-service connecté aux agendas hiring managers, vous tombez à 24 heures. Sur
      un process à 4 étapes, c&apos;est jusqu&apos;à 8 jours récupérés.
    </p>

    <h2>Levier 6 — Décider en moins de 48 heures après entretien</h2>
    <p>
      &quot;On revient vers vous la semaine prochaine&quot; tue plus de recrutements que n&apos;importe
      quel autre facteur. Pour <strong>réduire le time-to-hire</strong>, imposez un debrief
      synchrone dans les 48 heures, avec décision binaire : on continue ou on arrête. Pas de
      &quot;on en reparle&quot;.
    </p>

    <h2>Levier 7 — Préparer l&apos;offre en amont</h2>
    <p>
      Trop d&apos;équipes commencent à construire l&apos;offre après le dernier entretien. Or
      construire une offre sérieuse (équité, bonus, signing, package complet) prend 3 à 5 jours.
      Préparez-la à l&apos;étape 2, pas à l&apos;étape 4. Vous gagnez 4 à 6 jours sur le closing.
    </p>

    <h2>Récap des gains potentiels</h2>
    <table>
      <thead>
        <tr>
          <th>Levier</th>
          <th>Gain typique (jours)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sourcing multicanal WhatsApp</td>
          <td>4 à 7 jours</td>
        </tr>
        <tr>
          <td>Copilote IA pour outreach</td>
          <td>2 à 4 jours</td>
        </tr>
        <tr>
          <td>Brief hiring manager structuré</td>
          <td>3 à 5 jours</td>
        </tr>
        <tr>
          <td>Réduction des étapes d&apos;entretien</td>
          <td>3 à 6 jours</td>
        </tr>
        <tr>
          <td>Planification self-service</td>
          <td>5 à 8 jours</td>
        </tr>
        <tr>
          <td>Debrief en 48h</td>
          <td>2 à 4 jours</td>
        </tr>
        <tr>
          <td>Offre préparée en amont</td>
          <td>4 à 6 jours</td>
        </tr>
        <tr>
          <td>
            <strong>Total cumulable</strong>
          </td>
          <td>
            <strong>17 à 35 jours</strong>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Tous les leviers ne se cumulent pas linéairement, mais sur un process à 35 jours, viser 18 à
      22 jours est parfaitement réaliste avec ces 7 leviers.
    </p>

    <h2>Cas concret : passer de 42 à 19 jours sur Senior PM</h2>
    <p>
      Une scale-up SaaS B2B française a appliqué les 7 leviers sur un poste de Senior PM. Time-to-
      hire avant : 42 jours. Après :
    </p>
    <ul>
      <li>J1 : brief structuré et requête EMILY lancée.</li>
      <li>J2 : 180 candidats scorés, 38 contactés en multicanal.</li>
      <li>J5 : 14 réponses qualifiées.</li>
      <li>J9 : 6 entretiens hiring manager.</li>
      <li>J14 : 3 finalistes en business case.</li>
      <li>J17 : décision finale.</li>
      <li>J19 : offre signée.</li>
    </ul>

    <h2>Outils qui font gagner du temps réellement</h2>
    <p>
      Pour <strong>réduire le time-to-hire</strong>, équipez-vous des bons outils :
    </p>
    <ul>
      <li>Plateforme de sourcing IA avec multicanal (TrueCalling).</li>
      <li>ATS bien intégré (Greenhouse, Lever, Teamtailor).</li>
      <li>Outil de planification (Calendly, GoodTime).</li>
      <li>Process documenté et partagé avec les hiring managers.</li>
    </ul>
    <p>
      Pour évaluer le gain de temps potentiel sur votre stack actuelle,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Calculer mon gain de temps avec TrueCalling
      </Link>
      .
    </p>

    <h2>Conclusion : viser 20 jours est réaliste en 2026</h2>
    <p>
      <strong>Réduire le time-to-hire</strong> de 35 à 20 jours est à la portée de toute équipe
      Talent qui applique les 7 leviers ci-dessus avec discipline. Le frein principal n&apos;est pas
      technologique — c&apos;est l&apos;inertie des process internes. Les outils sont prêts, les
      benchmarks parlent, c&apos;est à vous de raccourcir la boucle.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Réduisez votre time-to-hire de moitié en 90 jours
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On audite votre process actuel et on identifie les 3 leviers qui vous feront gagner le plus
        de jours, dès la prochaine ouverture de poste.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article8Content: ReactNode = (
  <>
    <p>
      Le <strong>sourcing multicanal</strong> n&apos;est plus une option en 2026 : c&apos;est la
      condition pour atteindre des candidats sur-sollicités sur LinkedIn. Si vous comptez encore sur
      l&apos;InMail comme canal principal, vos taux de réponse s&apos;effondrent silencieusement
      depuis trois ans. Cet article explique pourquoi LinkedIn seul ne suffit plus et par quoi le
      compléter concrètement.
    </p>

    <h2>Pourquoi LinkedIn seul ne suffit plus</h2>
    <p>
      Trois raisons structurelles font du <strong>sourcing multicanal</strong> un standard
      obligatoire en 2026 :
    </p>
    <ul>
      <li>
        <strong>Saturation des InMails.</strong> Un Senior Engineer reçoit 8 à 15 InMails par
        mois. Le taux d&apos;ouverture moyen est tombé à 18-22 %.
      </li>
      <li>
        <strong>Profils LinkedIn non actualisés.</strong> 30 à 40 % des profils tech ne sont pas à
        jour ; vous ratez des stacks et des disponibilités.
      </li>
      <li>
        <strong>Migration des candidats vers WhatsApp.</strong> 90 % de taux d&apos;ouverture sur
        WhatsApp, vs 20 % email — l&apos;écart est trop massif pour l&apos;ignorer.
      </li>
    </ul>

    <h2>Les 5 canaux qui composent un sourcing multicanal en 2026</h2>

    <h3>1. LinkedIn</h3>
    <p>
      Toujours utile pour identifier les profils et lire leur trajectoire. Reste un excellent
      annuaire, mais à dégrader comme canal d&apos;outreach principal.
    </p>

    <h3>2. WhatsApp</h3>
    <p>
      Le canal qui surperforme massivement en 2026. 90 % de taux d&apos;ouverture, ~45 % de taux
      de réponse, time-to-first-response divisé par 5. Il doit devenir votre canal numéro 1 sur les
      profils où vous avez un numéro vérifié.
    </p>

    <h3>3. Email professionnel</h3>
    <p>
      Toujours utile pour la formalisation et l&apos;envoi de documents (offres, contrats). Comme
      canal de premier contact, son ROI baisse, mais il reste indispensable en relais.
    </p>

    <h3>4. Téléphone</h3>
    <p>
      Sous-utilisé, et pourtant décisif sur les profils seniors. Un appel direct bien préparé
      convertit 3 à 5 fois plus qu&apos;un message froid. À utiliser sur la shortlist finale.
    </p>

    <h3>5. GitHub / Stack Overflow / Discord pro</h3>
    <p>
      Sur les profils tech, les communautés professionnelles permettent un premier contact en
      contexte (commit récent, réponse Stack Overflow, contribution open-source). Le taux de
      réponse y est très élevé parce que le contact est qualitatif.
    </p>

    <h2>Comment orchestrer le sourcing multicanal sans s&apos;y perdre</h2>
    <p>
      Le piège du <strong>sourcing multicanal</strong> est la fragmentation : 5 onglets, 3 outils,
      des relances oubliées. La solution est une plateforme unique qui orchestre les canaux et
      gère les bascules automatiquement. Une séquence type :
    </p>
    <ol>
      <li>J0 — Message WhatsApp court et personnalisé.</li>
      <li>J3 — Si pas de réponse, email avec contenu enrichi (description du poste).</li>
      <li>J7 — Relance WhatsApp avec un angle différent.</li>
      <li>J10 — Si pas de réponse, appel téléphonique.</li>
      <li>J14 — Sortie du pipeline, archivage avec note.</li>
    </ol>

    <h2>Cas concret : sourcing d&apos;un Lead Frontend Vue.js</h2>
    <p>
      80 candidats identifiés, séquence multicanal sur 14 jours :
    </p>
    <ul>
      <li>76 messages WhatsApp délivrés.</li>
      <li>74 lus dans les 4 heures (97 %).</li>
      <li>33 réponses sur WhatsApp (43 %).</li>
      <li>9 réponses supplémentaires via email de relance.</li>
      <li>4 réponses via appel téléphonique sur les profils chauds.</li>
      <li>
        <strong>Total : 46 réponses qualifiées sur 80 (57 %)</strong>.
      </li>
    </ul>
    <p>
      Le même brief en mono-canal LinkedIn aurait converti à 12-15 % au mieux.
    </p>

    <h2>Les erreurs classiques en sourcing multicanal</h2>
    <ol>
      <li>
        <strong>Envoyer le même message sur tous les canaux.</strong> Chaque canal a son code.
        WhatsApp = court et direct. Email = un peu plus long et formel. Téléphone = préparé en
        amont.
      </li>
      <li>
        <strong>Oublier la conformité RGPD.</strong> WhatsApp impose une vigilance particulière.
        Lisez notre guide{" "}
        <Link
          href="/blog/recrutement-whatsapp-rgpd-2026"
          className="text-accent underline-offset-4 hover:underline"
        >
          recrutement WhatsApp et RGPD
        </Link>
        .
      </li>
      <li>
        <strong>Ne pas mesurer canal par canal.</strong> Sans dashboard par canal, vous pilotez à
        l&apos;aveugle.
      </li>
    </ol>

    <h2>L&apos;outillage pour un sourcing multicanal sérieux</h2>
    <p>
      Un <strong>sourcing multicanal</strong> performant repose sur trois briques :
    </p>
    <ul>
      <li>
        <strong>Plateforme unique d&apos;orchestration</strong> qui gère WhatsApp + email +
        téléphone nativement (TrueCalling).
      </li>
      <li>
        <strong>Numéros et identités vérifiés</strong> via WhatsApp Business API.
      </li>
      <li>
        <strong>Reporting par canal</strong> pour ajuster la séquence en continu.
      </li>
    </ul>
    <p>
      Pour comprendre comment l&apos;IA orchestre tout cela, voyez notre article sur le{" "}
      <Link
        href="/blog/agent-ia-sourcing-nouveau-standard"
        className="text-accent underline-offset-4 hover:underline"
      >
        agent IA de sourcing
      </Link>
      .
    </p>

    <h2>Combien de canaux activer simultanément ?</h2>
    <p>
      La règle pratique : 2 à 3 canaux par profil dans une séquence. Au-delà, vous passez pour
      insistant et vous brûlez le candidat. Le bon mix par défaut : WhatsApp + email + téléphone
      sur les profils chauds, WhatsApp + email sur le reste.
    </p>

    <h2>Quand basculer d&apos;un canal à l&apos;autre</h2>
    <p>
      Trois signaux justifient un changement de canal :
    </p>
    <ul>
      <li>
        <strong>Aucune ouverture</strong> sur le canal choisi après 72 heures.
      </li>
      <li>
        <strong>Réponse positive partielle</strong> qui mérite un échange plus formel (passage de
        WhatsApp à email).
      </li>
      <li>
        <strong>Sujet sensible</strong> (négociation, package) qui appelle un appel téléphonique.
      </li>
    </ul>

    <h2>Conclusion : LinkedIn devient une source, pas un canal</h2>
    <p>
      En 2026, LinkedIn doit redevenir ce qu&apos;il est vraiment : un annuaire professionnel
      utile pour identifier des profils. Comme canal d&apos;outreach principal, il est saturé. Le{" "}
      <strong>sourcing multicanal</strong> bien orchestré — WhatsApp, email, téléphone, plus
      LinkedIn en complément — est la seule manière de tenir des taux de réponse au-dessus de 30 %
      sur les profils tendus.
    </p>
    <p>
      Pour activer un sourcing multicanal sans empiler les outils,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Activer l&apos;outreach multicanal sur TrueCalling
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Lancez votre première séquence multicanal
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On vous accompagne sur la mise en place d&apos;une séquence WhatsApp + email + téléphone
        sur un de vos postes ouverts. Résultats mesurables sous 10 jours.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article9Content: ReactNode = (
  <>
    <p>
      L&apos;<strong>agent IA sourcing</strong> est devenu en 2026 le sujet le plus discuté en
      conférences RH. Promesse : un agent autonome qui sourcerait vos candidats à votre place,
      24/7, sans intervention. Réalité : on n&apos;y est pas tout à fait, mais on s&apos;en
      rapproche vite. Cet article fait le point honnête sur ce que les agents IA savent faire, ce
      qu&apos;ils ne savent pas faire, et pourquoi le futur appartient aux copilotes plutôt
      qu&apos;aux agents purs.
    </p>

    <h2>Agent IA sourcing : de quoi parle-t-on exactement ?</h2>
    <p>
      Un <strong>agent IA sourcing</strong> est un système autonome capable d&apos;exécuter une
      chaîne de tâches sans supervision continue : comprendre un brief, générer une requête,
      sourcer, qualifier, contacter, suivre. Le différentiateur par rapport à un copilote, c&apos;est
      l&apos;autonomie : un copilote propose, un agent décide et exécute.
    </p>

    <h2>Ce qu&apos;un agent IA sourcing sait faire en 2026</h2>
    <ul>
      <li>
        <strong>Lire un brief</strong> écrit en langage naturel et en extraire compétences,
        seniority, contexte.
      </li>
      <li>
        <strong>Générer une requête sourcing multi-sources</strong> couvrant LinkedIn, GitHub,
        Stack Overflow, bases enrichies.
      </li>
      <li>
        <strong>Scorer les candidats</strong> avec un modèle contextuel comme TrueFit 360.
      </li>
      <li>
        <strong>Rédiger des messages personnalisés</strong> en s&apos;appuyant sur des signaux
        publics (commits, conférences, articles).
      </li>
      <li>
        <strong>Orchestrer un outreach multicanal</strong> (WhatsApp, email, téléphone) avec
        relances et bascules.
      </li>
      <li>
        <strong>Mettre à jour l&apos;ATS</strong> en synchronisation native.
      </li>
    </ul>

    <h2>Ce qu&apos;un agent IA sourcing ne sait pas (encore) faire</h2>
    <ul>
      <li>
        <strong>Évaluer un fit culturel.</strong> L&apos;IA peut détecter des signaux mais pas
        comprendre la culture interne d&apos;une équipe.
      </li>
      <li>
        <strong>Négocier un package complexe.</strong> L&apos;équité, le bonus, les contraintes
        familiales — ça demande un humain.
      </li>
      <li>
        <strong>Décoder le non-dit en entretien.</strong> Un candidat qui hésite, un drapeau rouge
        sur un projet — c&apos;est l&apos;intuition humaine qui détecte.
      </li>
      <li>
        <strong>Faire confiance à une seule source.</strong> Un bon recruteur croise plusieurs
        signaux, un agent IA tend à se reposer trop sur les données disponibles.
      </li>
    </ul>

    <h2>Agent IA versus copilote IA : la nuance qui compte</h2>
    <p>
      La grande confusion en 2026 est entre &quot;agent&quot; et &quot;copilote&quot;. Un{" "}
      <strong>agent IA sourcing</strong> autonome existe sur le papier ; en pratique, les
      meilleures plateformes — TrueCalling avec EMILY en tête — adoptent un modèle hybride : agent
      sur les tâches répétitives, copilote sur les décisions. C&apos;est le bon équilibre entre
      productivité et contrôle.
    </p>
    <p>
      Pour creuser le rôle du copilote au quotidien, voyez notre article sur le{" "}
      <Link
        href="/blog/copilote-ia-recruteurs-au-quotidien"
        className="text-accent underline-offset-4 hover:underline"
      >
        copilote IA pour recruteurs
      </Link>
      .
    </p>

    <h2>Un workflow type avec un agent IA sourcing</h2>
    <ol>
      <li>
        <strong>Brief</strong> : vous écrivez 2 paragraphes sur le poste.
      </li>
      <li>
        <strong>Génération de requête</strong> : l&apos;agent extrait compétences, seniority,
        contexte, géographie.
      </li>
      <li>
        <strong>Sourcing</strong> : 200 à 400 candidats remontés, scorés.
      </li>
      <li>
        <strong>Validation humaine</strong> : vous gardez ou retirez les profils douteux.
      </li>
      <li>
        <strong>Outreach</strong> : l&apos;agent rédige, envoie, relance, bascule de canal.
      </li>
      <li>
        <strong>Reporting</strong> : tableau de bord automatique, alertes sur les profils chauds.
      </li>
    </ol>
    <p>
      Sur ce workflow, le recruteur consacre 2-3 heures par poste là où il en passait 15.
    </p>

    <h2>Cas concret : agent IA sur 5 postes en parallèle</h2>
    <p>
      Une équipe Talent de 3 recruteurs gère 5 postes ouverts simultanément. Sans agent IA, chaque
      recruteur tient 1,5 à 2 postes en parallèle correctement. Avec un <strong>agent IA sourcing</strong>{" "}
      qui gère le sourcing et l&apos;outreach :
    </p>
    <ul>
      <li>3 recruteurs gèrent 8 à 10 postes en parallèle.</li>
      <li>Time-to-first-response moyen : 36 heures vs 6 jours sans agent.</li>
      <li>Time-to-hire moyen : 22 jours vs 35 jours sans agent.</li>
      <li>Volume de candidats qualifiés présentés aux hiring managers : x3.</li>
    </ul>

    <h2>Limites et garde-fous</h2>
    <p>
      Quatre garde-fous indispensables quand vous déployez un <strong>agent IA sourcing</strong> :
    </p>
    <ol>
      <li>
        <strong>Validation humaine sur l&apos;outreach.</strong> L&apos;agent rédige, le recruteur
        relit avant envoi sur les premières semaines.
      </li>
      <li>
        <strong>Audit des biais.</strong> Variables protégées exclues du score, contrôle régulier
        de la diversité dans les shortlists.
      </li>
      <li>
        <strong>Conformité RGPD.</strong> Données hébergées en Europe, base légale documentée,
        opt-out géré centralement.
      </li>
      <li>
        <strong>Mesure continue.</strong> Taux de réponse, qualité de la shortlist, satisfaction
        des hiring managers.
      </li>
    </ol>

    <h2>Choisir un agent IA sourcing : les 5 questions à poser</h2>
    <ul>
      <li>L&apos;agent peut-il orchestrer plusieurs canaux nativement (WhatsApp, email, tél) ?</li>
      <li>Le score de matching est-il explicable ?</li>
      <li>L&apos;intégration ATS est-elle native ?</li>
      <li>Les données sont-elles hébergées en Europe ?</li>
      <li>Y a-t-il un mode &quot;copilote&quot; pour garder un humain dans la boucle ?</li>
    </ul>
    <p>
      Pour explorer un agent IA opérationnel,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Tester l&apos;agent IA TrueCalling
      </Link>
      .
    </p>

    <h2>Le futur : agents collaboratifs, pas autonomes</h2>
    <p>
      La direction prise par les meilleurs éditeurs en 2026 n&apos;est pas l&apos;agent
      complètement autonome — c&apos;est l&apos;agent collaboratif. EMILY chez TrueCalling est dans
      cette logique : elle prend en charge ce qui peut l&apos;être, demande validation sur ce qui
      compte, apprend des arbitrages du recruteur. C&apos;est plus utile, plus sûr, et plus
      conforme à la régulation à venir (AI Act).
    </p>

    <h2>Conclusion : un nouveau standard, pas une révolution</h2>
    <p>
      L&apos;<strong>agent IA sourcing</strong> n&apos;est pas une rupture brutale qui supprime le
      recruteur. C&apos;est un nouveau standard de productivité : 3x plus de postes gérables en
      parallèle, time-to-hire divisé par deux, qualité des shortlists supérieure. Le métier de
      recruteur ne disparaît pas — il se concentre sur les tâches à plus forte valeur ajoutée.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Voyez l&apos;agent IA TrueCalling sur un poste réel
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        En 30 minutes, on lance EMILY sur un de vos briefs et vous mesurez le temps gagné dès la
        première séquence d&apos;outreach.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article10Content: ReactNode = (
  <>
    <p>
      <strong>Automatiser le sourcing</strong> de candidats fait peur à beaucoup d&apos;équipes
      Talent — et c&apos;est compréhensible. Personne n&apos;a envie d&apos;envoyer des messages
      bot-like ni d&apos;être traité par les candidats comme un spammeur. Pourtant, automatiser
      sans déshumaniser est non seulement possible : c&apos;est exactement ce que font les équipes
      qui recrutent le plus vite en 2026. Voici comment.
    </p>

    <h2>Pourquoi automatiser le sourcing en 2026</h2>
    <p>
      Trois raisons rendent l&apos;automatisation incontournable :
    </p>
    <ul>
      <li>
        <strong>Volume de tâches répétitives</strong> : un recruteur passe 60 % de son temps sur
        des tâches qui n&apos;exigent pas son jugement.
      </li>
      <li>
        <strong>Pression sur le time-to-hire</strong> : la médiane française est à 35 jours, les
        meilleures équipes recrutent en 18-22 jours grâce à l&apos;automatisation.
      </li>
      <li>
        <strong>Concurrence sur les profils tendus</strong> : sans automatisation, vous arrivez
        après les autres.
      </li>
    </ul>

    <h2>Ce qu&apos;il faut automatiser</h2>
    <ol>
      <li>
        <strong>La traduction du brief en requête sourcing.</strong> Pas de jugement à faire, l&apos;IA
        s&apos;en charge mieux et plus vite.
      </li>
      <li>
        <strong>L&apos;identification multi-sources.</strong> LinkedIn, GitHub, Stack Overflow,
        bases enrichies — automatisable à 100 %.
      </li>
      <li>
        <strong>Le scoring initial des profils.</strong> Le score TrueFit 360 décompose pour vous
        ce que vous feriez en 30 minutes par profil.
      </li>
      <li>
        <strong>L&apos;envoi de la séquence d&apos;outreach.</strong> Une fois la première
        validation humaine faite, le moteur exécute, relance et bascule de canal.
      </li>
      <li>
        <strong>La planification d&apos;agendas.</strong> Calendly-like connecté aux hiring
        managers.
      </li>
      <li>
        <strong>La synchronisation ATS.</strong> Greenhouse, Lever, Teamtailor — automatique.
      </li>
    </ol>

    <h2>Ce qu&apos;il ne faut PAS automatiser</h2>
    <p>
      Quand vous voulez <strong>automatiser le sourcing</strong>, tracez une ligne claire sur ce
      qui reste humain :
    </p>
    <ul>
      <li>
        <strong>L&apos;arbitrage final</strong> sur la shortlist envoyée au hiring manager.
      </li>
      <li>
        <strong>L&apos;entretien</strong> et l&apos;évaluation des soft skills.
      </li>
      <li>
        <strong>La négociation</strong> de l&apos;offre.
      </li>
      <li>
        <strong>Le brief hiring manager</strong> et le feedback équipe.
      </li>
    </ul>

    <h2>Les 5 règles pour automatiser sans déshumaniser</h2>

    <h3>1. Personnaliser au-delà du prénom</h3>
    <p>
      Un message qui dit &quot;Bonjour Pierre, j&apos;ai vu votre profil&quot; sonne bot. Un
      message qui dit &quot;Bonjour Pierre, j&apos;ai lu votre intervention sur la conférence dbt
      Coalition&quot; sonne humain. La personnalisation profonde est automatisable — EMILY le fait
      en lisant les signaux publics de chaque candidat.
    </p>

    <h3>2. Garder un opt-out clair et visible</h3>
    <p>
      Un message d&apos;automatisation honnête mentionne le droit d&apos;opposition dès le premier
      contact. Cela protège votre marque et votre conformité RGPD. C&apos;est la base pour{" "}
      <strong>automatiser le sourcing</strong> sans casser la relation candidat.
    </p>

    <h3>3. Stopper l&apos;automatisation au premier &quot;oui&quot;</h3>
    <p>
      Dès qu&apos;un candidat répond positivement, l&apos;automatisation s&apos;arrête. Le humain
      prend le relais. Pas d&apos;email automatique de relance après une réponse intéressée — ça
      tue la relation.
    </p>

    <h3>4. Utiliser le bon canal selon le candidat</h3>
    <p>
      Tout le monde n&apos;aime pas WhatsApp. Tout le monde n&apos;ouvre pas ses emails. Une
      automatisation intelligente teste les canaux et privilégie celui où le candidat répond. Pour
      creuser ce point, voyez notre article sur le{" "}
      <Link
        href="/blog/sourcing-multicanal-linkedin-ne-suffit-plus"
        className="text-accent underline-offset-4 hover:underline"
      >
        sourcing multicanal
      </Link>
      .
    </p>

    <h3>5. Laisser le ton humain à votre équipe</h3>
    <p>
      Les meilleurs templates sont écrits par vos recruteurs et nourris par l&apos;IA — pas
      l&apos;inverse. L&apos;IA personnalise et adapte ; le ton de marque vient de votre équipe.
    </p>

    <h2>Cas concret : 200 candidats contactés en 48 heures</h2>
    <p>
      Une équipe Talent française lance une campagne sur 200 développeurs Go pour 4 postes ouverts
      simultanément :
    </p>
    <ul>
      <li>EMILY génère 200 messages personnalisés en 8 minutes.</li>
      <li>Le recruteur relit et valide 200 messages en 35 minutes.</li>
      <li>L&apos;envoi part en multicanal sur 48 heures.</li>
      <li>76 % de taux d&apos;ouverture WhatsApp.</li>
      <li>91 réponses qualifiées en 5 jours.</li>
      <li>0 plainte, 0 commentaire négatif sur LinkedIn.</li>
    </ul>
    <p>
      L&apos;automatisation est invisible côté candidat parce que la personnalisation est réelle,
      pas factice.
    </p>

    <h2>Les signaux qui montrent que vous êtes allé trop loin</h2>
    <ul>
      <li>Taux de désabonnement &gt; 5 %.</li>
      <li>Messages copiés-collés repérés sur Twitter ou LinkedIn.</li>
      <li>Hiring managers qui se plaignent du ton des messages.</li>
      <li>Taux de réponse en chute libre semaine après semaine.</li>
    </ul>
    <p>
      Si l&apos;un de ces signaux apparaît, levez le pied sur l&apos;automatisation et remettez du
      humain dans la boucle.
    </p>

    <h2>Outils pour automatiser sans déshumaniser</h2>
    <p>
      Pour <strong>automatiser le sourcing</strong> intelligemment, vous avez besoin de :
    </p>
    <ul>
      <li>
        <strong>Une plateforme avec copilote IA</strong> qui personnalise vraiment (EMILY).
      </li>
      <li>
        <strong>Un score de matching explicable</strong> pour ne pas se reposer sur une boîte
        noire.
      </li>
      <li>
        <strong>Un outreach multicanal natif</strong> (WhatsApp, email, téléphone).
      </li>
      <li>
        <strong>Une intégration ATS</strong> pour ne jamais perdre l&apos;historique de la
        relation.
      </li>
    </ul>
    <p>
      TrueCalling coche ces quatre cases. Pour creuser le sujet du score, voyez notre article sur
      le{" "}
      <Link
        href="/blog/score-matching-candidat-poste-ia"
        className="text-accent underline-offset-4 hover:underline"
      >
        score de matching candidat-poste
      </Link>
      .
    </p>

    <h2>Mesurer la qualité humaine de votre automatisation</h2>
    <ol>
      <li>
        <strong>Taux de réponse positif</strong> : doit rester &gt; 30 % sur les profils ciblés.
      </li>
      <li>
        <strong>Net Promoter Score candidat</strong> : interrogez-les après le process.
      </li>
      <li>
        <strong>Taux de désabonnement</strong> : doit rester &lt; 2 %.
      </li>
      <li>
        <strong>Volume de plaintes / signalements</strong> : doit rester à zéro.
      </li>
    </ol>

    <h2>Conclusion : l&apos;automatisation bien faite est invisible</h2>
    <p>
      <strong>Automatiser le sourcing</strong> ne signifie pas robotiser la relation. Quand
      c&apos;est bien fait, le candidat ne devine pas qu&apos;il a été contacté via une plateforme
      d&apos;automatisation : il reçoit un message pertinent, personnalisé, sur le bon canal, au
      bon moment. C&apos;est exactement ce que rend possible un copilote IA bien conçu — et c&apos;est
      pour ça que les équipes Talent qui automatisent intelligemment recrutent deux fois plus vite
      que la médiane.
    </p>
    <p>
      Pour mettre en place une automatisation qui respecte vos candidats,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Réserver une démo TrueCalling
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Automatisez sans perdre le ton humain
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On vous montre comment EMILY personnalise réellement chaque message, sur la base des
        signaux publics du candidat. Démo en 30 minutes sur un de vos briefs.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article11Content: ReactNode = (
  <>
    <p>
      <strong>Générer une shortlist de candidats</strong> qualifiés en moins de 10 minutes, à partir
      d&apos;un simple brief, n&apos;a plus rien de futuriste en 2026 — c&apos;est même devenu un
      standard pour les équipes Talent qui veulent passer un cap. Un bon copilote IA lit votre fiche
      de poste, interroge les bons viviers, score chaque profil sur des critères explicables et vous
      remet une liste de 10 à 20 candidats prête à contacter. Voici, étape par étape, comment
      générer une shortlist candidats IA qui tient ses promesses — et ce qui distingue une vraie
      shortlist d&apos;un simple tas de profils mal triés.
    </p>

    <h2>Shortlist candidats IA : la définition qui compte</h2>
    <p>
      Une <strong>shortlist candidats IA</strong>, ce n&apos;est pas un export brut de LinkedIn ni un
      classement par mots-clés. C&apos;est une liste de 10 à 20 profils maximum, sélectionnés par un
      modèle qui a lu le poste, comparé chaque candidat sur plusieurs dimensions et justifié son
      classement. Vous devez pouvoir cliquer sur n&apos;importe quel profil et comprendre, en deux
      lignes, pourquoi il est là.
    </p>
    <p>
      La différence avec une &quot;recherche IA&quot; sans scoring explicable, c&apos;est que la
      shortlist est <em>actionnable</em> : vous savez qui contacter en premier, dans quel ordre, et
      avec quel angle.
    </p>

    <h2>Les 4 étapes pour générer une shortlist en moins de 10 minutes</h2>

    <h3>Étape 1 — Décrire le poste en langage naturel (2 minutes)</h3>
    <p>
      Oubliez les booléens. Vous écrivez 3 à 6 phrases qui décrivent le poste comme à un collègue :
      séniorité, stack, secteur, contraintes (localisation, temps plein/partiel, langues). Plus le
      brief est précis, plus la shortlist sera dense. Exemple :
    </p>
    <ul>
      <li>
        &quot;Senior Backend Engineer Go, 6 ans d&apos;expérience minimum, idéalement dans une
        scale-up B2B SaaS européenne, basé à Paris ou full-remote France, à l&apos;aise avec
        Kubernetes et la production critique.&quot;
      </li>
    </ul>
    <p>
      EMILY traduit ce brief en une requête sémantique multi-sources et lance l&apos;exploration sur
      LinkedIn, GitHub et nos bases enrichies.
    </p>

    <h3>Étape 2 — Laisser l&apos;IA explorer et scorer (4 à 6 minutes)</h3>
    <p>
      Le moteur ramène 200 à 400 profils pertinents, puis applique le score TrueFit 360 à chacun. Le
      score décompose la pertinence sur quatre axes : compétences techniques, contexte
      d&apos;expérience, soft signals, et disponibilité estimée. Chaque score est explicable —
      cliquez sur un candidat et vous voyez pourquoi il est à 87/100 ou à 64/100.
    </p>
    <p>
      Cette phase tourne pendant que vous prenez un café. Aucune intervention humaine n&apos;est
      requise.
    </p>

    <h3>Étape 3 — Filtrer la shortlist finale (1 à 2 minutes)</h3>
    <p>
      L&apos;IA propose 30 à 40 candidats au-dessus du seuil de pertinence. Vous gardez les 10 à 20
      meilleurs en quelques clics, en éliminant les profils trop séniors, mal localisés ou
      visiblement déjà bien lotis dans leur poste actuel. Le copilote vous guide sur les 5 à 10
      candidats à prioriser en premier.
    </p>

    <h3>Étape 4 — Lancer l&apos;outreach (1 minute)</h3>
    <p>
      EMILY rédige un premier message personnalisé pour chaque candidat de la shortlist — sur le
      canal préféré (WhatsApp, email, téléphone). Vous relisez, vous validez, vous envoyez. C&apos;est
      à ce moment que la shortlist devient un pipeline réel.
    </p>

    <h2>Ce qui distingue une vraie shortlist d&apos;une fausse</h2>
    <ul>
      <li>
        <strong>Une vraie shortlist est explicable.</strong> Chaque ligne s&apos;ouvre sur une
        justification de score.
      </li>
      <li>
        <strong>Une vraie shortlist est courte.</strong> 10 à 20 profils, pas 200. Sinon ce
        n&apos;est plus une shortlist, c&apos;est une recherche.
      </li>
      <li>
        <strong>Une vraie shortlist est priorisée.</strong> Le top 5 est identifié, pas noyé dans la
        masse.
      </li>
      <li>
        <strong>Une vraie shortlist est actionnable.</strong> Vous savez qui contacter, sur quel
        canal et avec quel angle.
      </li>
      <li>
        <strong>Une vraie shortlist est régénérable.</strong> Vous pouvez itérer si la qualité ne
        suit pas, sans repartir de zéro.
      </li>
    </ul>

    <h2>Cas concret : Senior Product Manager B2B SaaS, shortlist en 8 minutes</h2>
    <p>
      Une équipe Talent française cherche un Senior Product Manager B2B SaaS pour un poste à Paris,
      bilingue FR/EN, idéalement avec une expérience growth :
    </p>
    <ul>
      <li>Brief tapé en 90 secondes.</li>
      <li>EMILY ramène 312 profils pertinents en 4 minutes.</li>
      <li>TrueFit 360 score les 312 profils en moins de 2 minutes.</li>
      <li>Le recruteur garde 14 profils au-dessus de 78/100.</li>
      <li>EMILY génère 14 messages WhatsApp personnalisés en 45 secondes.</li>
      <li>Total : 8 minutes du brief au pipeline.</li>
    </ul>
    <p>
      Sur ces 14 candidats, 9 répondent en moins de 48 heures. Cinq entretiens lancés en première
      semaine. Le poste est pourvu en 19 jours, contre une médiane interne de 41 jours pour les
      postes équivalents l&apos;année précédente.
    </p>

    <h2>Les 3 erreurs qui ruinent une shortlist IA</h2>
    <ol>
      <li>
        <strong>Brief trop vague.</strong> &quot;Un bon développeur full-stack&quot; ne donnera
        jamais une shortlist exploitable. Donnez du contexte (stack, séniorité, secteur).
      </li>
      <li>
        <strong>Vouloir une shortlist trop large.</strong> Si vous gardez 50 profils, vous
        n&apos;avez plus de shortlist : vous avez une longue file d&apos;attente. Le ROI est dans la
        sélection serrée.
      </li>
      <li>
        <strong>Ne pas itérer sur les profils refusés.</strong> Si vous écartez 5 profils du top 10,
        dites pourquoi à l&apos;IA. La shortlist suivante sera meilleure.
      </li>
    </ol>

    <h2>Les outils pour générer une shortlist IA en 2026</h2>
    <ul>
      <li>
        <strong>TrueCalling</strong> : copilote EMILY, score TrueFit 360 explicable, shortlist en 5
        à 10 minutes, outreach intégré multicanal.
      </li>
      <li>
        <strong>HireSweet</strong> : génération de shortlist tech orientée scale-ups françaises,
        moins d&apos;explicabilité sur le score.
      </li>
      <li>
        <strong>LinkedIn Recruiter</strong> : retourne des résultats mais sans réelle priorisation
        IA — vous devez encore trier vous-même.
      </li>
      <li>
        <strong>SeekOut / hireEZ</strong> : forte profondeur de base, mais plutôt orientés
        entreprises US.
      </li>
    </ul>
    <p>
      Pour creuser le fonctionnement du score derrière la shortlist, voyez notre article sur le{" "}
      <Link
        href="/blog/score-matching-candidat-poste-ia"
        className="text-accent underline-offset-4 hover:underline"
      >
        score de matching candidat-poste
      </Link>
      .
    </p>

    <h2>Combien de temps gagner concrètement</h2>
    <p>
      Sur 100 postes ouverts par an, le passage d&apos;une shortlist manuelle (45 à 90 min par
      poste, soit 75 à 150 heures par an) à une shortlist IA (8 à 12 min par poste, soit 13 à 20
      heures par an) représente entre 60 et 130 heures de travail pur de sourcing rendues. À 60 €
      coût-recruteur par heure, c&apos;est entre 3 600 € et 7 800 € d&apos;économie annuelle par
      recruteur — avant même de compter le gain en time-to-hire. Pour mesurer ce gain end-to-end,
      voyez notre guide{" "}
      <Link
        href="/blog/time-to-hire-7-leviers-2026"
        className="text-accent underline-offset-4 hover:underline"
      >
        time-to-hire : 7 leviers concrets en 2026
      </Link>
      .
    </p>

    <h2>Conclusion : la shortlist est le nouveau brief</h2>
    <p>
      <strong>Générer une shortlist candidats IA</strong> en 10 minutes change la posture du
      recruteur : on ne &quot;cherche&quot; plus, on &quot;décide&quot;. Le sourcing devient un acte
      court et répétable, et la valeur ajoutée du recruteur se déplace vers la qualité du brief,
      l&apos;arbitrage et la relation candidat. C&apos;est exactement le scénario que rendent
      possible les copilotes IA bien conçus comme EMILY.
    </p>
    <p>
      Pour voir une shortlist générée en direct sur un de vos postes ouverts,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        réservez une démo TrueCalling
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Une shortlist générée en direct, sur l&apos;un de vos vrais postes
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On vous montre, brief en main, comment EMILY remonte 10 à 20 candidats scorés en moins de 10
        minutes. Démo guidée de 20 à 30 minutes.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article12Content: ReactNode = (
  <>
    <p>
      L&apos;<strong>intégration ATS sourcing</strong> est devenue le sujet n°1 des équipes Talent
      qui adoptent un outil de sourcing IA en 2026. Pour une raison simple : un copilote IA qui ne
      parle pas à votre ATS crée plus de problèmes qu&apos;il n&apos;en résout. Doubles saisies,
      pipeline cassé, historique candidat perdu, conformité RGPD bancale. À l&apos;inverse, une
      intégration ATS bien faite transforme le sourcing IA en couche d&apos;orchestration qui
      enrichit votre stack existante au lieu de la remplacer. Voici comment réussir l&apos;intégration
      avec Greenhouse, Lever, Recruitee, Teamtailor ou Workable sans casser votre process.
    </p>

    <h2>Pourquoi l&apos;intégration ATS est non négociable en sourcing IA</h2>
    <p>
      Un outil de sourcing IA qui vit en silo, c&apos;est trois problèmes garantis :
    </p>
    <ul>
      <li>
        <strong>Doublons candidats.</strong> Vous re-contactez un profil que votre collègue avait
        déjà sourcé il y a 3 mois — voire un candidat qui était déjà en finale chez vous.
      </li>
      <li>
        <strong>Historique perdu.</strong> L&apos;échange WhatsApp ou email que vous lancez n&apos;est
        visible nulle part dans l&apos;ATS. Si un autre recruteur reprend le poste, il repart de
        zéro.
      </li>
      <li>
        <strong>Conformité RGPD floue.</strong> Sans synchronisation, vous gérez deux registres de
        traitement, deux opt-outs, deux droits d&apos;accès. Le risque CNIL monte vite.
      </li>
    </ul>
    <p>
      Une <strong>intégration ATS sourcing</strong> bien conçue règle les trois en transformant
      l&apos;outil de sourcing en moteur amont qui pousse dans votre pipeline existant — sans
      jamais le remplacer.
    </p>

    <h2>Ce qu&apos;une bonne intégration ATS doit faire</h2>
    <ol>
      <li>
        <strong>Pousser automatiquement chaque candidat sourcé</strong> dans le bon poste de
        l&apos;ATS, à la bonne étape du pipeline (typiquement &quot;sourced&quot; ou &quot;new
        lead&quot;).
      </li>
      <li>
        <strong>Synchroniser les interactions</strong> WhatsApp, email, téléphone vers la fiche
        candidat de l&apos;ATS — un message envoyé via EMILY apparaît dans Greenhouse comme une
        activité tracée.
      </li>
      <li>
        <strong>Détecter les doublons</strong> à l&apos;import : si un candidat existe déjà dans
        votre ATS, l&apos;outil de sourcing le signale et propose de continuer ou de stopper.
      </li>
      <li>
        <strong>Respecter le statut candidat</strong> : un profil &quot;ne pas recontacter&quot; ou
        &quot;refus définitif&quot; dans l&apos;ATS ne ressort jamais dans la shortlist IA.
      </li>
      <li>
        <strong>Synchroniser les opt-outs RGPD</strong> dans les deux sens. Si un candidat se
        désinscrit via une séquence outreach, son statut bascule dans l&apos;ATS.
      </li>
    </ol>

    <h2>Greenhouse, Lever, Recruitee, Teamtailor, Workable : ce qui change</h2>

    <h3>Greenhouse</h3>
    <p>
      L&apos;API Greenhouse Harvest est complète et stable. Une bonne <strong>intégration ATS
      sourcing</strong> permet de pousser le candidat dans la bonne &quot;job application&quot;,
      d&apos;ajouter les sources personnalisées (&quot;EMILY / WhatsApp&quot;) et de tracer chaque
      interaction. Attention aux permissions : le compte de service utilisé doit avoir accès aux
      jobs sourcing-eligible.
    </p>

    <h3>Lever</h3>
    <p>
      L&apos;API Lever est très fluide pour le push de candidats avec tags et sources. Le mapping
      &quot;sourcing stage&quot; → étape Lever fonctionne bien. Limitation à connaître : Lever
      gère le consentement candidat différemment selon les régions, à câbler proprement dès le
      premier import.
    </p>

    <h3>Recruitee</h3>
    <p>
      Recruitee accepte sans difficulté les imports de candidats avec champs custom et tagging.
      Idéal pour les équipes qui veulent matérialiser une &quot;couche sourcing&quot; sans
      perturber leur pipeline Recruitee. Attention aux quotas API en plan Smart vs Lead.
    </p>

    <h3>Teamtailor</h3>
    <p>
      Teamtailor expose une API moderne et bien documentée. Le scénario classique : EMILY pousse
      les candidats sourcés en stage &quot;Inbox&quot; ou stage custom dédiée au sourcing IA. Le
      candidat suit ensuite le workflow Teamtailor habituel.
    </p>

    <h3>Workable</h3>
    <p>
      Workable supporte un import enrichi via API. À surveiller : le mapping des
      &quot;disqualification reasons&quot; côté Workable doit être propre, sinon vous perdez en
      qualité de feedback côté outil de sourcing.
    </p>

    <h2>Cas concret : intégration Greenhouse + TrueCalling sur 80 postes ouverts</h2>
    <p>
      Une scale-up B2B SaaS française de 300 personnes utilise Greenhouse comme source unique de
      vérité. Avant intégration TrueCalling : 35 % de candidats sourcés en double avec
      l&apos;équipe interne, perte d&apos;environ 4 heures par recruteur et par semaine en
      réconciliation manuelle. Après intégration TrueCalling Harvest API :
    </p>
    <ul>
      <li>0 doublon non détecté en 6 semaines.</li>
      <li>100 % des messages WhatsApp et email tracés dans Greenhouse.</li>
      <li>4 heures hebdo récupérées par recruteur (5 recruteurs = 20 h / semaine).</li>
      <li>Time-to-hire moyen passé de 38 à 24 jours sur les postes pilotes.</li>
    </ul>

    <h2>Les 5 questions à poser à un éditeur avant d&apos;acheter</h2>
    <ol>
      <li>
        <strong>L&apos;intégration ATS est-elle native ou via Zapier ?</strong> Zapier suffit pour
        un POC, pas pour un déploiement.
      </li>
      <li>
        <strong>La détection de doublons est-elle automatique ?</strong> Sur quels critères (email,
        LinkedIn ID, fuzzy matching) ?
      </li>
      <li>
        <strong>Le sens de synchro est-il bidirectionnel ?</strong> Si un candidat change de stage
        dans l&apos;ATS, l&apos;outil de sourcing le sait-il ?
      </li>
      <li>
        <strong>Les opt-outs RGPD remontent-ils ?</strong> Test à faire en démo.
      </li>
      <li>
        <strong>Combien d&apos;intégrations ATS sont incluses dans le plan ?</strong> Une seule ?
        Illimitées ?
      </li>
    </ol>

    <h2>Coût caché d&apos;une intégration mal pensée</h2>
    <p>
      Une mauvaise intégration coûte cher : entre 4 et 8 heures hebdo de réconciliation par
      recruteur, 12 à 20 % de candidats traités en double, et un risque RGPD non négligeable.
      Multiplié par 5 recruteurs sur 12 mois, vous parlez de plus de 1 000 heures perdues — soit
      l&apos;équivalent du salaire chargé d&apos;un demi-recruteur. La &quot;gratuité&quot; d&apos;un
      outil sans intégration ATS native n&apos;est jamais vraiment gratuite. Pour creuser
      l&apos;impact business, voyez notre article{" "}
      <Link
        href="/blog/automatiser-sourcing-sans-deshumaniser"
        className="text-accent underline-offset-4 hover:underline"
      >
        automatiser le sourcing sans déshumaniser
      </Link>
      .
    </p>

    <h2>Plan d&apos;intégration en 4 étapes</h2>
    <ol>
      <li>
        <strong>Semaine 1 — Audit du pipeline ATS actuel.</strong> Étapes, statuts, champs custom,
        sources, règles GDPR.
      </li>
      <li>
        <strong>Semaine 2 — Mapping et compte de service.</strong> Création du compte API
        Greenhouse/Lever/Recruitee, mapping des étapes, choix des sources.
      </li>
      <li>
        <strong>Semaine 3 — Tests sur 1 à 2 postes pilotes.</strong> Vérification doublons, opt-outs,
        statut, sync interactions.
      </li>
      <li>
        <strong>Semaine 4 — Rollout sur tous les postes ouverts.</strong> Formation recruteurs, plan
        de monitoring hebdo.
      </li>
    </ol>

    <h2>Conclusion : l&apos;intégration ATS, c&apos;est le multiplicateur</h2>
    <p>
      L&apos;<strong>intégration ATS sourcing</strong> n&apos;est pas un détail technique :
      c&apos;est le facteur multiplicateur de votre stack. Un excellent outil de sourcing IA sans
      intégration ATS produit du bruit. Avec intégration ATS native, il devient le moteur amont qui
      rend votre pipeline existant 2 à 3 fois plus efficace. C&apos;est exactement ce que TrueCalling
      a conçu avec ses intégrations natives Greenhouse, Lever, Recruitee, Teamtailor et Workable.
    </p>
    <p>
      Pour voir l&apos;intégration en action avec votre ATS,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        réservez une démo TrueCalling
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Intégrez TrueCalling à votre ATS sans casser votre pipeline
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On vous montre l&apos;intégration native Greenhouse, Lever, Recruitee ou Teamtailor — push,
        sync, dédupe, opt-outs. Démo guidée de 20 à 30 minutes, sur votre vrai pipeline.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article13Content: ReactNode = (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "@id":
            "https://truecalling.ai/fr/blog/meilleurs-logiciels-sourcing-ia-2026#itemlist",
          name: "Meilleurs logiciels de sourcing IA en 2026",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: 8,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "SoftwareApplication",
                name: "TrueCalling",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://truecalling.ai",
                description:
                  "Plateforme d'intelligence talent IA : sourcing, matching, scoring et engagement WhatsApp des candidats.",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "SoftwareApplication",
                name: "Gem",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://www.gem.com",
                description:
                  "Plateforme de recrutement AI-first combinant ATS, CRM, sourcing, scheduling et analytics.",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  bestRating: "5",
                  ratingCount: "279",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "SoftwareApplication",
                name: "Fetcher",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://fetcher.ai",
                description:
                  "Logiciel de sourcing IA avec support de sourcing managé.",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "SoftwareApplication",
                name: "hireEZ",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://hireez.com",
                description:
                  "Plateforme de recrutement IA agentique pour sourcing, CRM, screening, analytics et mobilité interne.",
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "SoftwareApplication",
                name: "HireSweet",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://www.hiresweet.com",
                description:
                  "CRM de talent acquisition et workflow de sourcing pour imports, outreach et pipeline.",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  bestRating: "5",
                  ratingCount: "23",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 6,
              item: {
                "@type": "SoftwareApplication",
                name: "Juicebox PeopleGPT",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://juicebox.ai",
                description:
                  "Moteur de recherche IA de recrutement avec recherche en langage naturel et workflows outbound.",
              },
            },
            {
              "@type": "ListItem",
              position: 7,
              item: {
                "@type": "SoftwareApplication",
                name: "MindHunt AI",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://mindhuntai.com",
                description:
                  "Plateforme de sourcing IA pour candidats passifs, recherche de contacts et outreach personnalisé.",
              },
            },
            {
              "@type": "ListItem",
              position: 8,
              item: {
                "@type": "SoftwareApplication",
                name: "Pin",
                applicationCategory: "Recruiting Software",
                operatingSystem: "Web",
                url: "https://www.pin.com",
                description:
                  "Assistant IA de recrutement pour sourcing, automatisation de workflow et outreach.",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  bestRating: "5",
                  ratingCount: "27",
                },
              },
            },
          ],
        }),
      }}
    />

    <p>
      Le meilleur <strong>logiciel de sourcing IA</strong> en 2026 dépend de ce dont votre équipe a
      le plus besoin — découverte de candidats, enrichissement, outreach, engagement WhatsApp, CRM,
      réactivation de viviers ATS, ou automatisation complète du workflow. Le marché a mûri vite :
      les outils qui se contentaient de &quot;chercher plus vite&quot; en 2024 se battent
      aujourd&apos;hui sur l&apos;explicabilité, l&apos;engagement multicanal et leur compatibilité
      avec un workflow européen RGPD.
    </p>
    <p>
      Ce guide compare huit plateformes de sourcing IA que les recruteurs évaluent réellement
      aujourd&apos;hui, avec un verdict pour chacune selon l&apos;usage. Nous avons placé
      TrueCalling en premier parce qu&apos;elle se trouve à l&apos;intersection des trois
      capacités les plus demandées aujourd&apos;hui : sourcing IA, matching explicable et
      engagement candidat WhatsApp — dans un seul workflow.
    </p>

    <h2 id="reponse-rapide">Réponse rapide : le meilleur logiciel de sourcing IA en 2026</h2>
    <p>
      Pour les équipes qui veulent sourcing IA, scoring candidat, matching explicable et
      engagement WhatsApp dans un seul workflow, <strong>TrueCalling</strong> est le meilleur choix.
      TrueCalling combine la recherche sémantique de talents, plus de 1,2 milliard de profils
      candidats, un matching explicable et EMILY™ — un copilote IA de sourcing qui engage et
      qualifie les candidats sur WhatsApp avant que les recruteurs ne prennent le relais.
    </p>

    <h2 id="tableau-comparatif">Comparatif rapide par cas d&apos;usage</h2>
    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-surface/30">
      <table className="w-full min-w-[640px] text-left text-[13.5px]">
        <thead className="border-b border-ink/[0.08] text-[11px] uppercase tracking-[0.14em] text-ink-muted">
          <tr>
            <th className="px-4 py-3 font-semibold">Outil</th>
            <th className="px-4 py-3 font-semibold">Idéal pour</th>
            <th className="px-4 py-3 font-semibold">Atout distinctif</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/[0.06]">
          <tr>
            <td className="px-4 py-3 font-semibold text-accent">TrueCalling</td>
            <td className="px-4 py-3 text-ink">Meilleure plateforme de sourcing IA</td>
            <td className="px-4 py-3 text-ink-muted">
              Outreach WhatsApp, matching IA explicable, 1,2 Md+ profils
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Gem</td>
            <td className="px-4 py-3 text-ink">Opérations recrutement entreprise</td>
            <td className="px-4 py-3 text-ink-muted">
              ATS, CRM, sourcing, scheduling, analytics en un seul outil
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Fetcher</td>
            <td className="px-4 py-3 text-ink">Sourcing managé assisté</td>
            <td className="px-4 py-3 text-ink-muted">
              IA + équipe humaine de sourcing
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">hireEZ</td>
            <td className="px-4 py-3 text-ink">Outbound entreprise + réactivation</td>
            <td className="px-4 py-3 text-ink-muted">
              Sourcing open web, CRM, analytics, mobilité interne
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">HireSweet</td>
            <td className="px-4 py-3 text-ink">Équipes recrutement européennes</td>
            <td className="px-4 py-3 text-ink-muted">
              CRM, imports LinkedIn/ATS, séquences multicanales
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Juicebox / PeopleGPT</td>
            <td className="px-4 py-3 text-ink">Sourcing en langage naturel</td>
            <td className="px-4 py-3 text-ink-muted">
              800 M+ profils, recherche IA conversationnelle
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">MindHunt AI</td>
            <td className="px-4 py-3 text-ink">Automatisation sourcing économique</td>
            <td className="px-4 py-3 text-ink-muted">
              297 M+ profils, contact finder, outreach
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Pin</td>
            <td className="px-4 py-3 text-ink">Workflows sourcing startups</td>
            <td className="px-4 py-3 text-ink-muted">
              Assistant IA de recrutement avec excellents reviews
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="methodologie">Notre méthode d&apos;évaluation</h2>
    <p>
      Six critères ont guidé le scoring : profondeur du sourcing IA (recherche sémantique vs
      mots-clés), explicabilité du matching, engagement multicanal natif (et notamment WhatsApp),
      conformité RGPD et compatibilité européenne, intégration aux ATS courants, et qualité du
      signal sur les plateformes de reviews publiques. Nous n&apos;avons pas testé les prix pour le
      classement — ils varient trop selon la taille d&apos;équipe et la structure du contrat — mais
      nous les indiquons lorsqu&apos;ils sont vérifiables. Lorsqu&apos;un outil dispose de peu de
      données de review publiques, nous le précisons explicitement plutôt que d&apos;estimer un
      score.
    </p>

    <h2 id="truecalling">1. TrueCalling — La meilleure plateforme de sourcing IA</h2>
    <p>
      <strong>Idéal pour :</strong> les équipes qui veulent sourcing IA, matching, scoring,
      outreach WhatsApp et qualification candidat dans un seul workflow.
    </p>
    <p>
      TrueCalling est une plateforme d&apos;intelligence talent construite pour le sourcing, le
      scoring, le ranking et l&apos;engagement candidat. Son différenciateur principal est de ne
      pas s&apos;arrêter à la découverte de candidats — elle aide les recruteurs à comprendre
      pourquoi un candidat correspond, à construire des shortlists, et à engager les talents sur
      WhatsApp via EMILY™, son copilote IA de sourcing.
    </p>
    <p>
      Le positionnement produit de TrueCalling met l&apos;accent sur quatre capacités qui comptent
      pour les équipes de sourcing modernes : recherche sémantique de talents, matching
      multi-couches, intelligence talent explicable et engagement candidat WhatsApp. La plateforme
      donne accès à plus de 1,2 milliard de profils sourcés globalement et exploite des signaux
      contextuels plutôt qu&apos;un matching par mots-clés.
    </p>

    <h3>Pourquoi TrueCalling se démarque</h3>
    <p>
      La plupart des outils de sourcing IA aident les recruteurs à chercher plus vite. TrueCalling
      va plus loin en les aidant à engager les candidats là où les taux de réponse sont les plus
      élevés : WhatsApp. EMILY™ contacte les candidats sélectionnés, pose des questions de
      qualification, relance et transmet les profils qualifiés au recruteur ou à l&apos;ATS.
      TrueCalling annonce un taux d&apos;ouverture de 90 % sur WhatsApp contre 18-25 % pour
      LinkedIn InMail.
    </p>
    <p>
      TrueCalling est donc particulièrement fort pour les équipes qui veulent réduire à la fois
      le sourcing manuel et la relance manuelle. Un recruteur décrit le candidat idéal en langage
      naturel, lance une recherche, examine les profils classés par IA, puis active
      l&apos;engagement WhatsApp sans changer d&apos;outil. Pour la logique du score, voir notre
      article sur le{" "}
      <Link
        href="/blog/score-matching-candidat-poste-ia"
        className="text-accent underline-offset-4 hover:underline"
      >
        score de matching candidat-poste
      </Link>
      .
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>Sourcing IA et engagement candidat dans un seul workflow.</li>
      <li>Matching explicable — chaque score est justifié, pas une boîte noire.</li>
      <li>WhatsApp est un vrai différenciateur là où les InMails sont saturés.</li>
      <li>
        1,2 Md+ profils et un moteur d&apos;outreach multicanal (WhatsApp, email, téléphone).
      </li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>
        Acteur plus récent dans l&apos;écosystème des reviews tiers — empreinte G2 / Capterra plus
        modeste que les incumbents comme Gem.
      </li>
      <li>
        Adapté aux équipes à l&apos;aise avec WhatsApp comme canal candidat ; moins pertinent si
        votre marché repose exclusivement sur l&apos;email.
      </li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur logiciel de sourcing IA pour les équipes qui veulent
      sourcing, matching explicable et qualification WhatsApp dans un seul workflow.
    </p>

    <h2 id="gem">2. Gem — Pour les opérations de recrutement entreprise</h2>
    <p>
      <strong>Idéal pour :</strong> les équipes entreprise et scale-up qui veulent sourcing, CRM,
      ATS, scheduling et analytics dans une seule plateforme de recrutement.
    </p>
    <p>
      Gem se positionne comme une plateforme de recrutement AI-first tout-en-un qui combine ATS,
      CRM, sourcing, scheduling, analytics et accès à plus de 800 millions de profils. Son AI
      Sourcing Agent travaille en continu, identifie les meilleurs candidats, signale les
      interactions passées et personnalise l&apos;outreach.
    </p>
    <p>
      Gem est particulièrement pertinent pour les grandes équipes qui veulent un sourcing IA relié
      aux opérations de recrutement plus larges. Sa force n&apos;est pas seulement la découverte
      de candidats — c&apos;est la centralisation du contexte candidat, de l&apos;historique
      d&apos;outreach, du relationnel, des analytics et des workflows de hiring.
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>Plateforme tout-en-un solide : sourcing, CRM, ATS, scheduling, analytics.</li>
      <li>Couche opérationnelle mature pour les équipes axées reporting et visibilité process.</li>
      <li>Note 4,8/5 sur G2 sur plus de 279 avis.</li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>
        Peut être plus lourd que nécessaire pour une petite équipe. Les équipes purement sourcing
        trouveront les outils dédiés plus légers à opérer.
      </li>
      <li>Tarification entreprise — pas optimisée pour les budgets PME.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur choix pour les équipes recrutement entreprise qui veulent
      un sourcing IA connecté à CRM, ATS, analytics et opérations.
    </p>

    <h2 id="fetcher">3. Fetcher — Pour le sourcing managé assisté</h2>
    <p>
      <strong>Idéal pour :</strong> les équipes qui veulent un sourcing IA avec support humain
      additionnel plutôt qu&apos;un workflow 100 % self-service.
    </p>
    <p>
      Fetcher se présente comme un AI recruiter qui automatise le sourcing passif et actif, en
      aidant les équipes à réduire le time-to-hire grâce à l&apos;IA et au sourcing. La plateforme
      mêle technologie IA et équipe de sourceurs humains pour livrer des profils candidats
      correspondant aux critères.
    </p>
    <p>
      Le modèle hybride logiciel + service est la différence clé. Fetcher est utile quand une
      équipe veut de l&apos;aide au sourcing sans passer des heures à construire des recherches,
      examiner des bases et gérer manuellement le haut de funnel.
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>Sourcing IA combiné à une livraison de candidats managée.</li>
      <li>
        Bon ajustement pour les équipes lean ou les sociétés en forte croissance recrutant sur des
        postes répétitifs.
      </li>
      <li>Flux candidats régulier avec une capacité interne de sourcing limitée.</li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>
        Moins idéal pour les équipes qui veulent un contrôle total des paramètres de recherche ou
        un workflow IA très personnalisable.
      </li>
      <li>Bien clarifier en amont ce qui est logiciel vs service.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur choix pour les équipes qui veulent un sourcing assisté
      par IA avec livraison managée.
    </p>

    <h2 id="hireez">4. hireEZ — Pour l&apos;outbound entreprise et la réactivation de viviers</h2>
    <p>
      <strong>Idéal pour :</strong> les équipes entreprise qui ont besoin de sourcing open web,
      CRM, automatisation d&apos;outreach, analytics, réactivation et mobilité interne.
    </p>
    <p>
      hireEZ se présente comme une plateforme de recrutement IA agentique avec sourcing candidat,
      screening de CV, analytics, intelligence talent et plus. Sa plateforme combine sourcing IA,
      CRM, analytics de recrutement, screening, automatisation d&apos;outreach, mobilité interne,
      viviers et sourcing hub.
    </p>
    <p>
      hireEZ est l&apos;un des meilleurs choix pour les équipes entreprise aux workflows
      complexes. Elle supporte le sourcing outbound mais aussi la réactivation des talents
      existants — important pour les sociétés avec de larges bases ATS.
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>Périmètre fonctionnel large : sourcing, CRM, analytics, screening.</li>
      <li>Insights marché talent, reporting performance et workflows de campagne structurés.</li>
      <li>
        Les reviews G2 saluent la facilité d&apos;usage, la qualité des données contact et
        l&apos;automatisation outreach.
      </li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>L&apos;ampleur peut être inutile pour les petites équipes.</li>
      <li>L&apos;implémentation, les workflows data et l&apos;intégration ATS demandent un scoping rigoureux.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur choix pour le recrutement outbound entreprise, la
      réactivation de talents et le sourcing data-driven.
    </p>

    <h2 id="hiresweet">5. HireSweet — Pour les équipes recrutement européennes</h2>
    <p>
      <strong>Idéal pour :</strong> les équipes qui veulent un CRM de sourcing, des imports
      LinkedIn, une sync ATS et des séquences multicanales automatisées.
    </p>
    <p>
      HireSweet se positionne comme un logiciel de talent acquisition qui aide les équipes à
      organiser leur haut de funnel et à synchroniser les données entre LinkedIn, fichiers CSV,
      réseaux sociaux, ATS et CV. Le logiciel met l&apos;accent sur les imports LinkedIn / ATS /
      CSV, les séquences multicanales automatisées et la conversion plus rapide des prospects en
      embauches ou placements.
    </p>
    <p>
      HireSweet est particulièrement pertinent pour les équipes qui se soucient de la qualité du
      workflow recruteur. Son message met l&apos;accent sur le confort du recruteur plutôt que sur
      les bases massives ou les agents IA autonomes. Pour le comparatif détaillé tête-à-tête, voir
      notre{" "}
      <Link
        href="/blog/truecalling-vs-hiresweet"
        className="text-accent underline-offset-4 hover:underline"
      >
        comparaison TrueCalling vs HireSweet
      </Link>
      .
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>CRM de recrutement et système d&apos;outreach solide autour du workflow existant.</li>
      <li>Note 4,8/5 sur G2 sur 23 avis vérifiés.</li>
      <li>Bon ajustement pour les équipes recrutement européennes et les cabinets.</li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>
        Moins différencié pour les équipes qui cherchent spécifiquement un sourcing IA autonome,
        des bases open web massives ou de la qualification WhatsApp.
      </li>
      <li>À considérer plutôt comme un CRM de sourcing que comme une plateforme IA end-to-end.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur choix pour les équipes européennes et cabinets de
      recrutement qui veulent CRM, imports et workflows outreach multicanaux.
    </p>

    <h2 id="juicebox-peoplegpt">6. Juicebox / PeopleGPT — Pour le sourcing en langage naturel</h2>
    <p>
      <strong>Idéal pour :</strong> les recruteurs qui veulent décrire les candidats en langage
      naturel et chercher dans une grande base de profils.
    </p>
    <p>
      PeopleGPT, le produit phare de Juicebox, est un moteur de recherche IA de recrutement avec
      plus de 800 millions de profils candidats issus de 30+ sources de données. La plateforme
      alimente le sourcing outbound avec des séquences multi-étapes dynamiques et annonce jusqu&apos;à
      3× plus de réponses.
    </p>
    <p>
      Juicebox est au plus fort quand le recruteur veut sortir de la recherche booléenne lourde.
      Au lieu d&apos;empiler manuellement mots-clés, filtres et opérateurs, on décrit le profil
      cible en langage naturel et la plateforme remonte les matches probables.
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>Recherche conversationnelle — pas de syntaxe booléenne.</li>
      <li>Base de profils large : 800 M+.</li>
      <li>Bon ajustement pour les équipes recrutement tech et startup.</li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>Données de review tiers plus difficiles à vérifier que Gem ou hireEZ.</li>
      <li>Valider couverture et précision contact sur vos propres cas d&apos;usage avant de signer.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur choix pour les recruteurs qui veulent un sourcing IA en
      langage naturel sur une large base mondiale.
    </p>

    <h2 id="mindhunt-ai">7. MindHunt AI — Pour l&apos;automatisation sourcing économique</h2>
    <p>
      <strong>Idéal pour :</strong> les recruteurs, cabinets et petites équipes qui veulent
      sourcing IA, contact finder et outreach sans complexité entreprise.
    </p>
    <p>
      MindHunt AI aide les recruteurs à sourcer des candidats passifs sur LinkedIn et GitHub, à
      trouver emails et téléphones vérifiés, et à créer des messages d&apos;outreach personnalisés
      par IA. La plateforme scan plus de 297 millions de profils et supporte l&apos;outreach email
      et Telegram automatisé, la gestion visuelle du pipeline et la recherche de contacts.
    </p>
    <p>
      MindHunt AI est un choix pragmatique pour les équipes qui veulent de l&apos;automatisation
      de sourcing sans avoir besoin d&apos;ATS, CRM entreprise ou plateforme d&apos;opérations
      complexe.
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>Proposition de valeur claire : sourcer, trouver les contacts, envoyer en personnalisé.</li>
      <li>Particulièrement pertinent pour cabinets, recruteurs freelance et équipes lean.</li>
      <li>Entrée tarifaire abordable.</li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>Plateforme plus petite que les alternatives entreprise ; moins de reviews tiers publics.</li>
      <li>
        Valider couverture data, précision contact, conformité et intégrations avant de signer.
      </li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur choix pour les petites équipes recrutement et cabinets
      qui veulent un sourcing IA abordable + contact finder.
    </p>

    <h2 id="pin">8. Pin — Pour les workflows sourcing startup</h2>
    <p>
      <strong>Idéal pour :</strong> les startups et équipes lean qui veulent un assistant IA de
      recrutement rapide à prendre en main.
    </p>
    <p>
      Pin se positionne comme une plateforme de recrutement IA. Sa homepage annonce une note
      moyenne de 4,8/5 sur 27 avis G2 vérifiés. Les extraits de reviews publics mettent en avant
      la facilité de setup, la vitesse du workflow, le sourcing candidat, la segmentation, le
      reporting et le support.
    </p>
    <p>
      Pin est aussi notable côté SEO car la marque investit dans le contenu listicle autour de
      l&apos;IA de recrutement et du sourcing. C&apos;est pertinent car la SERP pour &quot;logiciel
      de sourcing IA&quot; est dominée par des listicles et les pages feature pures matchent moins
      l&apos;intent.
    </p>

    <h3>Points forts</h3>
    <ul>
      <li>Setup facile, time-to-value rapide.</li>
      <li>Bons reviews G2 sur la vitesse de workflow et l&apos;usabilité.</li>
      <li>Calibré pour startups et équipes lean.</li>
    </ul>

    <h3>Points faibles</h3>
    <ul>
      <li>
        Moins adapté aux entreprises qui ont besoin de gouvernance ATS profonde et de workflows de
        conformité.
      </li>
      <li>À comparer à Gem et hireEZ si vous voulez une couche opérations plus large.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Meilleur choix pour les startups et équipes lean qui veulent un
      assistant IA facile à prendre en main.
    </p>

    <h2 id="comment-choisir">Comment choisir son logiciel de sourcing IA</h2>
    <p>La bonne plateforme dépend de votre dynamique de recrutement.</p>
    <ul>
      <li>
        Choisissez <strong>TrueCalling</strong> si vous voulez sourcing IA, matching explicable,
        scoring et qualification WhatsApp dans un seul workflow.
      </li>
      <li>
        Choisissez <strong>Gem</strong> si vous avez besoin d&apos;une plateforme de recrutement
        large avec ATS, CRM, sourcing, scheduling et analytics.
      </li>
      <li>
        Choisissez <strong>Fetcher</strong> si vous voulez un sourcing IA avec service managé.
      </li>
      <li>
        Choisissez <strong>hireEZ</strong> si vous avez besoin de sourcing open web entreprise,
        CRM, réactivation, analytics et mobilité interne.
      </li>
      <li>
        Choisissez <strong>HireSweet</strong> si votre équipe veut un CRM de sourcing avec
        imports, automatisation et séquences multicanales.
      </li>
      <li>
        Choisissez <strong>Juicebox / PeopleGPT</strong> si vos recruteurs veulent de la
        recherche en langage naturel sur une grande base mondiale.
      </li>
      <li>
        Choisissez <strong>MindHunt AI</strong> si vous voulez un outil léger pour sourcing,
        contact finder et outreach.
      </li>
      <li>
        Choisissez <strong>Pin</strong> si vous êtes une startup ou équipe lean cherchant un
        assistant IA simple et rapide.
      </li>
    </ul>

    <h2 id="faq">Questions fréquentes</h2>

    <h3>Qu&apos;est-ce qu&apos;un logiciel de sourcing IA ?</h3>
    <p>
      Un logiciel de sourcing IA aide les recruteurs à identifier, scorer et engager des candidats
      grâce au machine learning plutôt qu&apos;à des recherches booléennes manuelles. Les
      plateformes modernes combinent recherche sémantique sur les bases publiques, matching
      contextuel avec un brief, et outreach multicanal (email, WhatsApp, téléphone).
    </p>

    <h3>Le sourcing IA est-il conforme au RGPD ?</h3>
    <p>
      Cela dépend de l&apos;éditeur et de la façon dont la plateforme stocke et traite les données
      candidat. La plupart des plateformes sérieuses ciblant l&apos;Europe — dont TrueCalling —
      opèrent sous RGPD avec une base légale claire, un DPA (Data Processing Agreement) et le
      respect des opt-outs candidats. Demandez toujours le DPA et la politique de rétention avant
      de signer.
    </p>

    <h3>Les outils de sourcing IA peuvent-ils remplacer les recruteurs ?</h3>
    <p>
      Non. Les outils de sourcing IA automatisent les parties répétitives du funnel — recherche
      initiale, scoring, premier contact, relances — mais le recruteur garde le brief,
      l&apos;arbitrage, la relation candidat et l&apos;offre. Les meilleures équipes traitent
      l&apos;IA comme un copilote qui libère les recruteurs pour les décisions à haute valeur
      ajoutée.
    </p>

    <h3>Quel est le meilleur outil de sourcing IA pour les recruteurs européens ?</h3>
    <p>
      Pour les équipes européennes, TrueCalling et HireSweet sont les deux plus alignés avec la
      réalité locale : support multilingue natif, gestion data RGPD-first et intégrations aux ATS
      utilisés en Europe (Lever, Greenhouse, Recruitee, Teamtailor, Workable). TrueCalling ajoute
      l&apos;engagement candidat WhatsApp, un vrai différenciateur en France, Espagne, Italie et
      sur certains marchés EMEA.
    </p>

    <h3>Comment le sourcing IA fonctionne-t-il avec LinkedIn ?</h3>
    <p>
      La plupart des plateformes enrichissent la donnée LinkedIn avec des signaux additionnels
      (GitHub, Stack Overflow, conférences, historique ATS, web public) pour produire une image
      plus complète que LinkedIn seul. Pour les équipes qui envisagent de quitter LinkedIn
      Recruiter, voir notre comparaison détaillée{" "}
      <Link
        href="/blog/truecalling-vs-linkedin-recruiter"
        className="text-accent underline-offset-4 hover:underline"
      >
        TrueCalling vs LinkedIn Recruiter
      </Link>
      .
    </p>

    <h2 id="recommandation-finale">Recommandation finale</h2>
    <p>
      Pour 2026, le meilleur logiciel de sourcing IA doit faire plus que retourner une liste de
      profils. Les meilleurs outils aident les recruteurs à comprendre le fit candidat, à
      prioriser l&apos;outreach, à personnaliser l&apos;engagement et à faire avancer les
      candidats qualifiés dans le process plus vite.
    </p>
    <p>
      <strong>TrueCalling est le meilleur choix global</strong> parce qu&apos;il combine sourcing
      IA, matching sémantique, scoring candidat explicable et qualification WhatsApp via EMILY™.
      Cette combinaison est particulièrement convaincante pour les équipes qui veulent réduire le
      sourcing manuel et améliorer l&apos;engagement candidat en même temps.
    </p>
    <p>
      Pour voir TrueCalling sur l&apos;un de vos postes ouverts,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        réservez une démo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Voir le logiciel de sourcing IA n°1 en direct sur l&apos;un de vos postes
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Brief en main. On vous montre comment EMILY remonte 10 à 20 candidats scorés et les engage
        sur WhatsApp en moins de 10 minutes. Démo guidée de 20 à 30 minutes.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article14Content: ReactNode = (
  <>
    <p>
      Le <strong>sourcing passif</strong> est devenu le levier numéro un des équipes Talent en 2026.
      Quand on sait que 73 % des professionnels actifs ne candidatent jamais spontanément aux offres
      affichées, continuer à compter sur les candidats qui postulent revient à se priver des trois
      quarts du marché. Ce guide explique ce qu&apos;est vraiment le sourcing passif aujourd&apos;hui,
      pourquoi l&apos;IA change radicalement la donne, et la méthode pour engager efficacement des
      candidats qui ne cherchent pas.
    </p>

    <h2>Sourcing passif : définition utile</h2>
    <p>
      Le <strong>sourcing passif</strong> consiste à identifier et engager des candidats qui ne sont
      pas en recherche active de poste. Contrairement au sourcing actif (qui s&apos;adresse à des
      candidats déjà sur le marché — réponse à une offre, mise à jour LinkedIn explicite,
      candidature spontanée), le sourcing passif cible les profils satisfaits dans leur poste actuel
      mais potentiellement ouverts à une bonne opportunité.
    </p>
    <p>
      C&apos;est le pool le plus large et le plus stratégique du marché : moins concurrentiel, plus
      qualitatif, mais aussi plus exigeant en méthode. Approcher un développeur senior heureux dans
      sa scale-up n&apos;a rien à voir avec recontacter un candidat qui a postulé hier.
    </p>

    <h2>Les 4 niveaux d&apos;intention candidat</h2>
    <p>
      Avant de parler méthode, il faut distinguer 4 segments dans le pool passif :
    </p>
    <ol>
      <li>
        <strong>Heureux ferme.</strong> Aucune intention de bouger, signaux négatifs (promu
        récemment, change de scope, lance un side project lié à son job). À éviter dans les
        campagnes d&apos;outreach courtes.
      </li>
      <li>
        <strong>Satisfait curieux.</strong> Pas en recherche, mais ouvert à une opportunité
        spectaculaire. Représente ~40 % du pool passif. Cible principale du sourcing IA en 2026.
      </li>
      <li>
        <strong>Latent.</strong> Frustration croissante sans recherche active. Signaux faibles :
        commits open-source soudain plus nombreux, conférences extérieures, profil LinkedIn mis à
        jour discrètement. Cible chaude.
      </li>
      <li>
        <strong>Actif déguisé.</strong> Cherche mais ne le montre pas (peur d&apos;être repéré par
        l&apos;employeur). 18 % du pool. Réagit très vite à un message bien tourné.
      </li>
    </ol>
    <p>
      Une plateforme de sourcing IA moderne distingue ces 4 niveaux en croisant signaux publics
      (LinkedIn, GitHub, conférences, mises à jour de profil) et inférences ML. C&apos;est ce que
      fait le score TrueFit 360 : pour chaque candidat, il estime non seulement la pertinence avec
      le poste mais aussi le niveau d&apos;intention. Pour creuser, voyez notre article sur le{" "}
      <Link
        href="/blog/score-matching-candidat-poste-ia"
        className="text-accent underline-offset-4 hover:underline"
      >
        score de matching candidat-poste
      </Link>
      .
    </p>

    <h2>Pourquoi l&apos;IA change tout en 2026</h2>
    <p>
      Le sourcing passif version 2018 — un recruteur, Boolean search LinkedIn, copier-coller du
      même InMail à 100 profils — ne fonctionne plus. Trois raisons :
    </p>
    <ol>
      <li>
        <strong>Saturation de l&apos;InMail.</strong> Le taux de réponse moyen est passé de 22 % en
        2018 à 8 % en 2026. Les profils tech reçoivent 12 à 18 InMails par semaine.
      </li>
      <li>
        <strong>Augmentation des canaux.</strong> WhatsApp, email pro, GitHub, conférences,
        podcasts : un candidat passif a 4 à 6 canaux actifs en moyenne, mais répond surtout sur
        celui qu&apos;il préfère personnellement.
      </li>
      <li>
        <strong>Exigence de personnalisation.</strong> Un message qui dit &quot;Bonjour Pierre,
        j&apos;ai vu votre profil&quot; signale immédiatement le bot. Les meilleurs taux de réponse
        sont désormais sur les messages qui référencent un signal récent et précis (commit, talk,
        publication).
      </li>
    </ol>
    <p>
      L&apos;IA résout ces trois problèmes simultanément : elle trouve le bon canal candidat par
      candidat, elle lit les signaux publics pour personnaliser à grande échelle, et elle évite
      les canaux saturés. Sur WhatsApp, le taux d&apos;ouverture moyen reste à 90 % contre 20 %
      pour l&apos;email — un écart qui change tout en sourcing passif.
    </p>

    <h2>La méthode TrueCalling en 5 étapes</h2>

    <h3>Étape 1 — Définir le profil idéal en langage naturel (3 min)</h3>
    <p>
      Plus de booléen. Vous décrivez le poste comme à un collègue : séniorité, stack, secteur,
      &quot;type de personne&quot; (startup vs scale-up, manager vs IC, etc.). EMILY traduit en
      requête sémantique multi-sources.
    </p>

    <h3>Étape 2 — Laisser l&apos;IA explorer 1,2 milliard de profils (5 min)</h3>
    <p>
      Le moteur ne se limite pas à LinkedIn. Il croise GitHub, Stack Overflow, talks de
      conférences, mentions presse et bases enrichies. C&apos;est crucial pour le sourcing passif :
      les meilleurs profils sont rarement très actifs sur LinkedIn.
    </p>

    <h3>Étape 3 — Filtrer sur l&apos;intention, pas juste la pertinence</h3>
    <p>
      C&apos;est l&apos;étape qui distingue le sourcing passif amateur du professionnel. Vous
      gardez les profils <strong>pertinents</strong> ET <strong>scorés comme satisfaits-curieux
      ou latents</strong>. Les &quot;heureux fermes&quot; restent dans le vivier mais ne reçoivent
      rien tout de suite.
    </p>

    <h3>Étape 4 — Personnaliser sur signal récent, pas sur titre de poste</h3>
    <p>
      Pour chaque candidat de votre shortlist, EMILY identifie un <strong>signal récent et
      spécifique</strong> : commit sur tel repo open-source la semaine dernière, talk à telle
      conférence, article publié, mise à jour de profil discrète. Le premier message référence ce
      signal — c&apos;est ce qui transforme un message bot-like en conversation humaine.
    </p>

    <h3>Étape 5 — Multicanal et patient</h3>
    <p>
      Un candidat passif ne répond pas dans les 24 h. La séquence type qui convertit en 2026 :
      WhatsApp (J0) → silence → email (J5) → silence → relance courte WhatsApp (J12). Stop dès la
      première réponse positive. Pour creuser, voyez notre article{" "}
      <Link
        href="/blog/sourcing-multicanal-linkedin-ne-suffit-plus"
        className="text-accent underline-offset-4 hover:underline"
      >
        sourcing multicanal au-delà de LinkedIn
      </Link>
      .
    </p>

    <h2>Cas concret : Senior Platform Engineer sourcé en 6 jours</h2>
    <p>
      Une scale-up B2B SaaS française cherche un Senior Platform Engineer Kubernetes, profil 7+ ans
      d&apos;expérience, satisfait dans une scale-up parisienne. Sourcing 100 % passif :
    </p>
    <ul>
      <li>Brief tapé en 3 minutes.</li>
      <li>EMILY ramène 287 profils pertinents, 41 scorés satisfaits-curieux/latents.</li>
      <li>Le recruteur garde 15 profils prioritaires.</li>
      <li>EMILY rédige 15 messages WhatsApp référençant un signal récent.</li>
      <li>9 réponses positives en 72 heures.</li>
      <li>5 entretiens lancés.</li>
      <li>Offre acceptée en 6 jours après le premier message.</li>
    </ul>
    <p>
      Aucun de ces 15 candidats n&apos;avait postulé chez le client. Aucun n&apos;était en recherche
      active. Le poste s&apos;est pourvu sans publier une seule offre publique.
    </p>

    <h2>Les 4 erreurs qui tuent le sourcing passif</h2>
    <ol>
      <li>
        <strong>Templates identiques à toute la shortlist.</strong> Le candidat passif détecte
        instantanément. Taux de réponse divisé par 4.
      </li>
      <li>
        <strong>Ouverture trop directe.</strong> &quot;On recrute un Senior Engineer chez X, ça te
        dit ?&quot; — le candidat passif n&apos;est pas en mode candidature, il ferme. Mieux :
        contexte, signal, question ouverte.
      </li>
      <li>
        <strong>Pression et relances agressives.</strong> Un candidat satisfait-curieux a besoin
        de temps. Plus de 3 messages sans réponse = arrêt.
      </li>
      <li>
        <strong>Ignorer le canal préféré.</strong> Continuer à InMailer un développeur qui
        n&apos;ouvre plus LinkedIn, c&apos;est du temps perdu. Tester WhatsApp et email pro change
        tout.
      </li>
    </ol>

    <h2>Mesurer la performance d&apos;une campagne de sourcing passif</h2>
    <p>
      Les KPIs ne sont pas les mêmes qu&apos;en sourcing actif. Ce qu&apos;il faut suivre :
    </p>
    <ul>
      <li>
        <strong>Taux de réponse positif</strong> : objectif {">"} 35 % en sourcing passif IA bien
        fait, vs 12 % en sourcing passif manuel.
      </li>
      <li>
        <strong>Taux d&apos;ouverture par canal</strong> : WhatsApp {">"} 85 %, email pro {">"} 35
        %, LinkedIn InMail {">"} 15 %.
      </li>
      <li>
        <strong>Temps moyen au premier entretien</strong> : objectif {"<"} 8 jours.
      </li>
      <li>
        <strong>Taux de désabonnement / plaintes</strong> : doit rester {"<"} 1 %.
      </li>
      <li>
        <strong>Net Promoter Score candidat</strong> : interrogez-les après le process.
      </li>
    </ul>

    <h2>Sourcing passif et RGPD : ce qu&apos;il faut respecter</h2>
    <p>
      Approcher un candidat passif via ses coordonnées professionnelles est légitime sous le RGPD
      (intérêt légitime + finalité de recrutement), à condition de :
    </p>
    <ol>
      <li>
        Mentionner clairement la source dès le premier contact (&quot;j&apos;ai vu votre profil sur
        LinkedIn / GitHub / etc.&quot;).
      </li>
      <li>Offrir un opt-out immédiat et visible.</li>
      <li>
        Ne pas stocker les données au-delà du nécessaire (typiquement 12 mois après la dernière
        interaction).
      </li>
      <li>Pouvoir répondre à une demande d&apos;accès / suppression sous 30 jours.</li>
    </ol>
    <p>
      Pour creuser l&apos;angle conformité, voyez notre article sur le{" "}
      <Link
        href="/blog/recrutement-whatsapp-rgpd-2026"
        className="text-accent underline-offset-4 hover:underline"
      >
        recrutement WhatsApp et le RGPD
      </Link>
      .
    </p>

    <h2>Conclusion : le sourcing passif est devenu le sourcing tout court</h2>
    <p>
      En 2026, distinguer sourcing passif et actif a de moins en moins de sens. Les meilleures
      équipes Talent traitent <strong>tous</strong> les candidats comme passifs par défaut :
      personnalisation forte, multicanal, patience, respect du signal d&apos;intention. C&apos;est
      ce qui fait passer les taux de réponse de 8 % à 35 %+ et le time-to-hire de 35 jours à 18
      jours.
    </p>
    <p>
      Pour voir TrueCalling sourcer des candidats passifs sur l&apos;un de vos vrais postes,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        réservez une démo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Toucher des candidats qui ne cherchent pas, sur un de vos vrais postes
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        On vous montre comment EMILY identifie les candidats passifs satisfaits-curieux, personnalise
        le premier message sur un signal récent et déclenche la conversation sur WhatsApp. Démo
        guidée 20 à 30 min.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

const Article15Content: ReactNode = (
  <>
    <p>
      Le recrutement IA a quitté la phase &quot;hype et expérimentation&quot; en 2024 pour entrer
      en production massive en 2026. Les équipes Talent qui restent sur les méthodes 2022 paient
      désormais un coût visible : time-to-hire deux fois plus long, taux de réponse divisé par
      trois, profils ratés au profit de concurrents équipés. Voici les 7 mouvements à connaître
      pour ne pas se faire distancer cette année.
    </p>

    <h2>1. La fin de l&apos;InMail comme canal dominant</h2>
    <p>
      Les chiffres 2026 sont sans appel : le taux de réponse moyen aux InMails LinkedIn est tombé à
      8 %, contre 22 % en 2018. Les profils tech reçoivent 12 à 18 InMails par semaine — plus
      personne ne les ouvre vraiment. À l&apos;inverse, WhatsApp affiche 90 % d&apos;ouverture sur
      les messages de recrutement bien faits.
    </p>
    <p>
      Le shift n&apos;est pas en cours : il est consommé. Les équipes qui restent 100 % LinkedIn en
      2026 capturent les candidats déjà saturés par tout le monde. Pour creuser, voyez notre
      article{" "}
      <Link
        href="/blog/sourcing-multicanal-linkedin-ne-suffit-plus"
        className="text-accent underline-offset-4 hover:underline"
      >
        pourquoi LinkedIn seul ne suffit plus
      </Link>
      .
    </p>

    <h2>2. Le copilote IA remplace l&apos;agent IA autonome</h2>
    <p>
      2024 a vu fleurir les promesses d&apos;<strong>agents IA</strong> autonomes qui sourcent,
      qualifient et embauchent à votre place. En 2026, le pendule est revenu : les meilleures
      équipes Talent ont compris que l&apos;autonomie totale produit des erreurs coûteuses
      (candidats mal qualifiés, messages bot-like, biais non détectés) et préfèrent le modèle{" "}
      <strong>copilote</strong> : l&apos;IA fait 80 % du travail répétitif, le recruteur garde
      l&apos;arbitrage final.
    </p>
    <p>
      C&apos;est exactement le positionnement d&apos;EMILY chez TrueCalling. Pour la nuance entre
      les deux modèles, voyez notre article sur l&apos;{" "}
      <Link
        href="/blog/agent-ia-sourcing-nouveau-standard"
        className="text-accent underline-offset-4 hover:underline"
      >
        agent IA sourcing
      </Link>
      .
    </p>

    <h2>3. Le matching explicable devient la norme</h2>
    <p>
      Les outils de sourcing IA qui scoraient les candidats sans expliquer comment se font éjecter
      en 2026. Trois forces convergent :
    </p>
    <ul>
      <li>
        <strong>Pression réglementaire EU AI Act</strong> : les systèmes de scoring candidat sont
        classés &quot;high risk&quot; et doivent être auditables.
      </li>
      <li>
        <strong>Demande recruteur</strong> : impossible de défendre une shortlist auprès du hiring
        manager si on ne peut pas expliquer pourquoi un candidat est à 87/100.
      </li>
      <li>
        <strong>Risque juridique</strong> : un biais non détectable dans un système opaque expose
        à un risque discrimination significatif.
      </li>
    </ul>
    <p>
      Le score TrueFit 360 répond à cette exigence : chaque ligne du score se déplie. Voyez notre
      article{" "}
      <Link
        href="/blog/score-matching-candidat-poste-ia"
        className="text-accent underline-offset-4 hover:underline"
      >
        score de matching candidat-poste
      </Link>
      .
    </p>

    <h2>4. Le sourcing passif devient le sourcing par défaut</h2>
    <p>
      73 % des professionnels actifs ne candidatent jamais aux offres affichées. Continuer à miser
      sur les candidatures spontanées en 2026, c&apos;est se priver des trois quarts du marché.
      Toutes les équipes Talent performantes traitent désormais <strong>chaque candidat comme
      passif par défaut</strong> : personnalisation forte, multicanal, patience, respect du signal
      d&apos;intention. Pour creuser, voyez notre guide{" "}
      <Link
        href="/blog/sourcing-passif-candidats-non-actifs"
        className="text-accent underline-offset-4 hover:underline"
      >
        sourcing passif
      </Link>
      .
    </p>

    <h2>5. WhatsApp prend la place d&apos;email pour l&apos;outreach candidat</h2>
    <p>
      En 2026, WhatsApp n&apos;est plus un canal &quot;émergent&quot; : c&apos;est <strong>le
      canal principal</strong> pour le premier contact candidat sur le marché européen. Les
      chiffres consolidés :
    </p>
    <ul>
      <li>90 % de taux d&apos;ouverture (vs 20 % email, 8 % InMail).</li>
      <li>Réponse médiane sous 4 heures (vs 32 heures email, 5 jours InMail).</li>
      <li>Taux de réponse positif x 3 sur WhatsApp vs email pro pour le même candidat.</li>
    </ul>
    <p>
      Le RGPD ne bloque pas WhatsApp en recrutement, il l&apos;encadre. Pour la liste des règles à
      respecter, voyez notre article{" "}
      <Link
        href="/blog/recrutement-whatsapp-rgpd-2026"
        className="text-accent underline-offset-4 hover:underline"
      >
        recrutement WhatsApp et RGPD
      </Link>
      .
    </p>

    <h2>6. La consolidation ATS + sourcing IA s&apos;accélère</h2>
    <p>
      Les équipes Talent qui faisaient cohabiter un ATS (Greenhouse, Lever, Recruitee) et un outil
      de sourcing en silo ont compris en 2026 que le coût caché de la non-intégration est énorme :
      35 % de candidats sourcés en double, 4 à 8 heures hebdo de réconciliation manuelle, risque
      RGPD non négligeable.
    </p>
    <p>
      Le standard 2026 : sourcing IA <strong>nativement intégré à l&apos;ATS</strong> via API
      (Harvest pour Greenhouse, API REST pour Lever, etc.), sync bidirectionnelle, déduplication
      automatique, opt-outs RGPD synchronisés. Pour creuser la mise en place,{" "}
      <Link
        href="/blog/integration-ats-sourcing-ia-greenhouse-lever"
        className="text-accent underline-offset-4 hover:underline"
      >
        notre guide d&apos;intégration ATS
      </Link>{" "}
      détaille les 4 semaines de rollout.
    </p>

    <h2>7. La tarification régionale et la transparence prix montent en pression</h2>
    <p>
      Sur 2024-2025, les éditeurs SaaS recrutement appliquaient une grille unique mondiale (souvent
      basée sur les prix US). En 2026, la pression buyers européens, APAC et Africa a forcé
      l&apos;adoption d&apos;une <strong>tarification régionale</strong> : Europe à parité USD/EUR,
      APAC en gamme intermédiaire, Afrique nettement en-dessous. La transparence prix progresse
      aussi : les pages tarifs publiques avec montants chiffrés (pas seulement &quot;sur
      devis&quot;) sont passées de 30 % à 65 % des outils du secteur en 18 mois.
    </p>

    <h2>Bonus : 3 mouvements à surveiller pour 2027</h2>
    <ul>
      <li>
        <strong>Le scoring d&apos;intention candidat en temps réel</strong> : prédire la
        probabilité qu&apos;un candidat satisfait-curieux devienne actif sous 90 jours, à partir
        de signaux publics.
      </li>
      <li>
        <strong>L&apos;outreach vocal automatisé</strong> : les premiers tests d&apos;agents
        vocaux IA pour le premier contact candidat montrent des résultats prometteurs sur certains
        secteurs (terrain, retail).
      </li>
      <li>
        <strong>La régulation EU AI Act pleinement appliquée</strong> : à partir d&apos;août 2027,
        les obligations transparence et audit deviennent contrôlables. Les outils non conformes
        seront bannis du marché européen.
      </li>
    </ul>

    <h2>Conclusion : 2026 est l&apos;année de la production</h2>
    <p>
      Si 2024 était l&apos;année de l&apos;expérimentation et 2025 celle des early adopters, 2026
      est l&apos;année où le recrutement IA devient le standard B2B SaaS. Rester sur des méthodes
      antérieures coûte désormais visible : candidats ratés, équipes Talent débordées, time-to-hire
      qui dérive. Les 7 mouvements ci-dessus ne sont pas optionnels, ce sont des prérequis pour
      rester compétitif.
    </p>
    <p>
      Pour voir comment TrueCalling intègre ces 7 mouvements dans un workflow unique,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        réservez une démo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Passez à l&apos;action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Mettre votre stack au niveau 2026 sur un de vos vrais postes
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Brief en main, on vous montre les 7 mouvements en action : copilote IA, matching
        explicable, sourcing passif, WhatsApp, intégration ATS. Démo guidée 20 à 30 min.
      </p>
      <div className="mt-5">
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo
        </Link>
      </div>
    </div>
  </>
);

export const articles: Article[] = [
  {
    slug: "sourcing-passif-candidats-non-actifs",
    canonicalId: "passive-candidate-sourcing-2026",
    title: "Sourcing passif en 2026 : comment toucher les candidats qui ne cherchent pas",
    description:
      "Sourcing passif IA : méthode TrueCalling en 5 étapes pour identifier et engager les candidats satisfaits mais ouverts, avec cas concret Senior Platform Engineer sourcé en 6 jours.",
    excerpt:
      "73 % des actifs ne candidatent jamais. La méthode complète pour les atteindre quand même : 4 niveaux d'intention, signal récent, WhatsApp, et 35 %+ de taux de réponse.",
    keyword: "sourcing passif",
    category: "Sourcing IA",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    homepageAnchor: "Sourcer des candidats passifs avec TrueCalling",
    content: Article14Content,
  },
  {
    slug: "tendances-recrutement-ia-2026",
    canonicalId: "ai-recruiting-trends-2026",
    title: "Tendances recrutement IA 2026 : 7 mouvements à connaître pour ne pas se faire distancer",
    description:
      "7 tendances recrutement IA 2026 : fin de l'InMail, copilote vs agent IA, matching explicable, sourcing passif par défaut, WhatsApp, intégration ATS native, tarification régionale.",
    excerpt:
      "2026 est l'année de la production massive du recrutement IA. Les 7 mouvements à connaître pour rester compétitif et les 3 à surveiller pour 2027.",
    keyword: "tendances recrutement IA 2026",
    category: "Sourcing IA",
    publishedAt: "2026-05-12",
    readingMinutes: 8,
    homepageAnchor: "Voir les 7 mouvements 2026 en action avec TrueCalling",
    content: Article15Content,
  },
  {
    slug: "meilleurs-logiciels-sourcing-ia-2026",
    canonicalId: "best-ai-sourcing-software-2026",
    title: "Meilleurs logiciels de sourcing IA en 2026 : 8 outils comparés",
    description:
      "Comparatif des meilleurs logiciels de sourcing IA en 2026 — TrueCalling, Gem, Fetcher, hireEZ, HireSweet, Juicebox PeopleGPT, MindHunt AI et Pin. Verdict, points forts, points faibles et lequel choisir.",
    excerpt:
      "8 outils de sourcing IA comparés sur features, conformité RGPD, engagement multicanal et tarifs. TrueCalling est le meilleur choix global — voici pourquoi, et quand les autres gagnent.",
    keyword: "meilleur logiciel sourcing IA",
    category: "Comparatifs",
    publishedAt: "2026-05-12",
    readingMinutes: 12,
    homepageAnchor: "Voir le logiciel de sourcing IA n°1 en action",
    content: Article13Content,
  },
  {
    slug: "generer-shortlist-candidats-ia-10-minutes",
    canonicalId: "generate-candidate-shortlist-ai",
    title: "Générer une shortlist de candidats avec l'IA en moins de 10 minutes : la méthode complète",
    description:
      "Générer une shortlist candidats IA en 10 minutes : méthode en 4 étapes, cas concret Senior PM en 8 minutes, et les 3 erreurs qui ruinent une shortlist.",
    excerpt:
      "Du brief à 14 candidats scorés en 8 minutes : la méthode complète pour générer une shortlist candidats IA actionnable, sans tomber dans le bruit.",
    keyword: "générer shortlist candidats IA",
    category: "Sourcing IA",
    publishedAt: "2026-05-11",
    readingMinutes: 7,
    homepageAnchor: "Générer ma première shortlist avec TrueCalling",
    content: Article11Content,
  },
  {
    slug: "integration-ats-sourcing-ia-greenhouse-lever",
    canonicalId: "ats-integration-ai-sourcing",
    title: "Intégration ATS et sourcing IA : comment connecter Greenhouse, Lever ou Recruitee sans casser votre process",
    description:
      "Intégration ATS sourcing IA : ce qu'une bonne intégration doit faire, ce qui change avec Greenhouse, Lever, Recruitee, Teamtailor et Workable, et un plan d'intégration en 4 semaines.",
    excerpt:
      "Une intégration ATS sourcing bien faite récupère 4 heures hebdo par recruteur et passe le time-to-hire de 38 à 24 jours. Le guide complet pour 2026.",
    keyword: "intégration ATS sourcing",
    category: "Tooling",
    publishedAt: "2026-05-05",
    readingMinutes: 7,
    homepageAnchor: "Voir l'intégration ATS TrueCalling",
    content: Article12Content,
  },
  {
    slug: "sourcing-ia-guide-2026",
    canonicalId: "ai-sourcing-guide-2026",
    title: "Sourcing IA en 2026 : guide complet pour recruteurs (méthodes, outils, exemples)",
    description:
      "Le sourcing IA en 2026 : méthodes, outils, exemples concrets, scores de matching et stack recommandée pour recruter deux fois plus vite sans sacrifier la qualité.",
    excerpt:
      "Guide complet du sourcing IA en 2026 : méthodes éprouvées, outils à connaître et exemple détaillé sur un poste tech tendu.",
    keyword: "sourcing IA",
    category: "Sourcing IA",
    publishedAt: "2026-04-22",
    readingMinutes: 8,
    homepageAnchor: "Voir le logiciel de sourcing IA TrueCalling",
    content: Article1Content,
  },
  {
    slug: "recrutement-whatsapp-rgpd-2026",
    canonicalId: "whatsapp-recruiting-gdpr-2026",
    title: "Recrutement WhatsApp : comment l'utiliser sans risque RGPD (guide 2026)",
    description:
      "Recrutement WhatsApp et RGPD : règles, outillage et exemples concrets pour exploiter 90 % de taux d'ouverture sans risquer un contrôle CNIL en 2026.",
    excerpt:
      "90 % d'ouverture sur WhatsApp vs 20 % email : les règles RGPD et l'outillage pour en profiter sans risque en 2026.",
    keyword: "recrutement WhatsApp",
    category: "Outreach",
    publishedAt: "2026-03-18",
    readingMinutes: 8,
    homepageAnchor: "Tester l'outreach WhatsApp dans TrueCalling",
    content: Article2Content,
  },
  {
    slug: "copilote-ia-recruteurs-au-quotidien",
    canonicalId: "ai-copilot-for-recruiters-daily",
    title: "Copilote IA pour recruteurs : ce que ça change (vraiment) au quotidien",
    description:
      "Copilote IA recrutement : ce qui change réellement dans la journée d'un recruteur, les tâches à automatiser, celles à garder humaines, et le gain de temps mesuré.",
    excerpt:
      "Une journée avec et sans copilote IA recrutement : 8 à 12 heures gagnées par semaine et un métier recentré sur les vraies décisions.",
    keyword: "copilote IA recrutement",
    category: "Sourcing IA",
    publishedAt: "2026-02-25",
    readingMinutes: 7,
    homepageAnchor: "Découvrir EMILY, le copilote IA TrueCalling",
    content: Article3Content,
  },
  {
    slug: "truecalling-vs-hiresweet",
    canonicalId: "truecalling-vs-hiresweet",
    title: "TrueCalling vs HireSweet : quel logiciel de sourcing pour mon équipe Talent ?",
    description:
      "Alternative à HireSweet : comparatif factuel TrueCalling vs HireSweet sur sourcing, matching, canaux, ATS, tarifs et cas d'usage en 2026.",
    excerpt:
      "TrueCalling vs HireSweet : tableau comparatif, cas concret sur un Senior Backend Go et critères pour choisir une alternative à HireSweet.",
    keyword: "alternative à HireSweet",
    category: "Comparatifs",
    publishedAt: "2026-01-28",
    readingMinutes: 7,
    homepageAnchor: "Réserver une démo TrueCalling",
    content: Article4Content,
  },
  {
    slug: "truecalling-vs-linkedin-recruiter",
    canonicalId: "truecalling-vs-linkedin-recruiter",
    title: "TrueCalling vs LinkedIn Recruiter : limites, alternatives et cas d'usage",
    description:
      "Alternative à LinkedIn Recruiter : limites de Recruiter en 2026, comparatif TrueCalling vs LinkedIn Recruiter et plan de migration en 4 semaines.",
    excerpt:
      "Pourquoi LinkedIn Recruiter ne suffit plus en 2026, comparatif détaillé TrueCalling et plan de migration concret en 4 semaines.",
    keyword: "alternative à LinkedIn Recruiter",
    category: "Comparatifs",
    publishedAt: "2026-01-08",
    readingMinutes: 7,
    homepageAnchor: "Réserver une démo TrueCalling",
    content: Article5Content,
  },
  {
    slug: "score-matching-candidat-poste-ia",
    canonicalId: "candidate-job-matching-score-ai",
    title: "Score de matching candidat-poste : comment l'IA évalue (et où elle se trompe)",
    description:
      "Score de matching candidat : comment l'IA calcule la pertinence, ce que mesure TrueFit 360, les biais à surveiller et comment évaluer un score avant achat.",
    excerpt:
      "Comment fonctionne un score de matching candidat, ce qu'évalue TrueFit 360 et les pièges à éviter avant d'acheter un outil.",
    keyword: "score de matching candidat",
    category: "Méthodologie",
    publishedAt: "2025-12-12",
    readingMinutes: 7,
    homepageAnchor: "Voir le score TrueFit 360 en action",
    content: Article6Content,
  },
  {
    slug: "time-to-hire-7-leviers-2026",
    canonicalId: "time-to-hire-7-levers-2026",
    title: "Time-to-hire : 7 leviers concrets pour le diviser par deux en 2026",
    description:
      "Réduire le time-to-hire : 7 leviers concrets et chiffrés pour passer de 35 jours à moins de 22, sans transformer tout le process de recrutement.",
    excerpt:
      "7 leviers chiffrés pour réduire le time-to-hire de 35 à 20 jours en 2026, avec cas concret sur un poste de Senior Product Manager.",
    keyword: "réduire le time-to-hire",
    category: "Méthodologie",
    publishedAt: "2025-11-20",
    readingMinutes: 8,
    homepageAnchor: "Calculer mon gain de temps avec TrueCalling",
    content: Article7Content,
  },
  {
    slug: "sourcing-multicanal-linkedin-ne-suffit-plus",
    canonicalId: "multichannel-sourcing-beyond-linkedin",
    title: "Sourcing multicanal : pourquoi LinkedIn seul ne suffit plus (et par quoi le compléter)",
    description:
      "Sourcing multicanal : pourquoi LinkedIn seul ne suffit plus en 2026, les 5 canaux à activer et la séquence type qui convertit à 57 %.",
    excerpt:
      "Saturation des InMails, 90 % d'ouverture sur WhatsApp : la méthode pour orchestrer un sourcing multicanal qui convertit en 2026.",
    keyword: "sourcing multicanal",
    category: "Outreach",
    publishedAt: "2025-10-30",
    readingMinutes: 7,
    homepageAnchor: "Activer l'outreach multicanal sur TrueCalling",
    content: Article8Content,
  },
  {
    slug: "agent-ia-sourcing-nouveau-standard",
    canonicalId: "ai-sourcing-agent-new-standard",
    title: "Agent IA de sourcing : le nouveau standard du recrutement ?",
    description:
      "Agent IA sourcing : ce que ces agents savent faire en 2026, leurs limites, la nuance avec un copilote IA et les 5 questions à poser avant de choisir.",
    excerpt:
      "Agent IA sourcing : ce que les agents savent faire (et ne savent pas), pourquoi le futur appartient aux copilotes hybrides comme EMILY.",
    keyword: "agent IA sourcing",
    category: "Sourcing IA",
    publishedAt: "2025-10-08",
    readingMinutes: 7,
    homepageAnchor: "Tester l'agent IA TrueCalling",
    content: Article9Content,
  },
  {
    slug: "automatiser-sourcing-sans-deshumaniser",
    canonicalId: "automate-sourcing-without-dehumanizing",
    title: "Comment automatiser le sourcing de candidats sans déshumaniser le process",
    description:
      "Automatiser le sourcing sans déshumaniser : 5 règles pour personnaliser à grande échelle, conformité RGPD et signaux qui montrent que vous êtes allé trop loin.",
    excerpt:
      "Automatiser le sourcing sans tomber dans le bot-like : 5 règles concrètes et cas réel sur 200 candidats contactés en 48 heures.",
    keyword: "automatiser le sourcing",
    category: "Méthodologie",
    publishedAt: "2025-09-15",
    readingMinutes: 7,
    homepageAnchor: "Réserver une démo TrueCalling",
    content: Article10Content,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .concat(articles.filter((a) => a.slug !== slug && a.category !== current.category))
    .slice(0, limit);
}
