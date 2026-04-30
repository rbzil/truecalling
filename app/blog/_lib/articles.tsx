import type { ReactNode } from "react";
import Link from "next/link";

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  keyword: string;
  category: string;
  publishedAt: string;
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
      bascule de canal selon les réponses. Sur WhatsApp, le taux d&apos;ouverture moyen est de 98 %
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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
      contacter des candidats passifs. Avec un taux d&apos;ouverture moyen de 98 % contre 20 % sur
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
        <strong>98 % de taux d&apos;ouverture</strong> sur un message WhatsApp dans les 4 heures.
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
      des opt-out, vous capturez les 98 % d&apos;ouverture sans risquer un contrôle.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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
      explicable (TrueFit 360) et un outreach multicanal natif intégrant WhatsApp avec 98 % de taux
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
          <td>98 % vs 20 % email — natif dans l&apos;outil</td>
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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
          <td>WhatsApp 98 % + email + téléphone</td>
          <td>InMail uniquement (limites mensuelles)</td>
        </tr>
        <tr>
          <td>Taux d&apos;ouverture moyen</td>
          <td>98 % WhatsApp / 20 % email</td>
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
      d&apos;ouverture moyen passe de 20 % à 98 % sur le premier message.
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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
      Si vous n&apos;envoyez que des InMails, vous attendez. WhatsApp ouvre à 98 %, contre 20 %
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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
        <strong>Migration des candidats vers WhatsApp.</strong> 98 % de taux d&apos;ouverture sur
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
      Le canal qui surperforme massivement en 2026. 98 % de taux d&apos;ouverture, ~45 % de taux
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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

    <div className="not-prose mt-12 rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md">
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

export const articles: Article[] = [
  {
    slug: "sourcing-ia-guide-2026",
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
    title: "Recrutement WhatsApp : comment l'utiliser sans risque RGPD (guide 2026)",
    description:
      "Recrutement WhatsApp et RGPD : règles, outillage et exemples concrets pour exploiter 98 % de taux d'ouverture sans risquer un contrôle CNIL en 2026.",
    excerpt:
      "98 % d'ouverture sur WhatsApp vs 20 % email : les règles RGPD et l'outillage pour en profiter sans risque en 2026.",
    keyword: "recrutement WhatsApp",
    category: "Outreach",
    publishedAt: "2026-03-18",
    readingMinutes: 8,
    homepageAnchor: "Tester l'outreach WhatsApp dans TrueCalling",
    content: Article2Content,
  },
  {
    slug: "copilote-ia-recruteurs-au-quotidien",
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
    title: "Sourcing multicanal : pourquoi LinkedIn seul ne suffit plus (et par quoi le compléter)",
    description:
      "Sourcing multicanal : pourquoi LinkedIn seul ne suffit plus en 2026, les 5 canaux à activer et la séquence type qui convertit à 57 %.",
    excerpt:
      "Saturation des InMails, 98 % d'ouverture sur WhatsApp : la méthode pour orchestrer un sourcing multicanal qui convertit en 2026.",
    keyword: "sourcing multicanal",
    category: "Outreach",
    publishedAt: "2025-10-30",
    readingMinutes: 7,
    homepageAnchor: "Activer l'outreach multicanal sur TrueCalling",
    content: Article8Content,
  },
  {
    slug: "agent-ia-sourcing-nouveau-standard",
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
