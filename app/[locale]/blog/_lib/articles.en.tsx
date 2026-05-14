import type { ReactNode } from "react";
import Link from "next/link";
import type { Article } from "./articles.fr";

/* ============================================================
   English blog articles — translated from articles.fr.tsx.
   Cross-references use English slugs.
   ============================================================ */

const Article1Content: ReactNode = (
  <>
    <p>
      <strong>AI sourcing</strong> is no longer a watch-list topic in 2026 — it&apos;s the new
      baseline for Talent teams that want to hire fast without cutting corners. If you&apos;re still
      running your sourcing campaigns by hand on LinkedIn, you&apos;re probably putting in two to
      three times the effort of your competitors for the same results. This guide breaks down how AI
      sourcing actually works today, what you can safely automate without losing quality, and which
      tools make a real difference.
    </p>

    <h2>AI sourcing: a short, useful definition</h2>
    <p>
      <strong>AI sourcing</strong> covers the full set of techniques that use artificial
      intelligence to identify, qualify, and engage potential candidates. In practice, AI does three
      things a human recruiter would do — but at scale:
    </p>
    <ul>
      <li>Read a job brief and translate it into a complete search query.</li>
      <li>Score every candidate it surfaces based on real fit with the role.</li>
      <li>Draft and send a personalized outreach on the right channel.</li>
    </ul>
    <p>
      The output is not the &quot;automated CV screening&quot; we used to see in 2018. It&apos;s an
      orchestration layer that absorbs 70 to 80% of the repetitive work and leaves the
      high-judgment decisions to the recruiter.
    </p>

    <h2>Why AI sourcing is a game-changer in 2026</h2>
    <p>
      Three converging forces explain why <strong>AI sourcing</strong> has gone mainstream this
      year:
    </p>
    <ol>
      <li>
        <strong>The explosion of channels.</strong> LinkedIn alone is no longer enough. Your target
        candidates are also on GitHub, Stack Overflow, Behance, and increasingly reachable on
        WhatsApp.
      </li>
      <li>
        <strong>Pressure on time-to-hire.</strong> 2026 benchmarks put the median around 35 days
        for a tech role. Below 25 days, you start winning the most in-demand candidates.
      </li>
      <li>
        <strong>The maturity of language models.</strong> An AI copilot can now write a
        personalized outreach message after reading a GitHub profile and a recent commit —
        something that was simply out of reach two years ago.
      </li>
    </ol>

    <h2>The AI sourcing methods that actually work</h2>

    <h3>1. Multi-source semantic search</h3>
    <p>
      Instead of hand-crafted booleans (&quot;data engineer&quot; AND &quot;Python&quot; AND
      &quot;Spark&quot;), you describe the role in plain language. The tool queries LinkedIn,
      GitHub, its own enriched databases, and returns a semantic ranking. For a Senior Data
      Engineer in Paris with a Spark + dbt stack, you get 200 to 400 relevant profiles in under five
      minutes.
    </p>

    <h3>2. Contextual matching score</h3>
    <p>
      A serious <strong>AI sourcing</strong> tool doesn&apos;t stop at keyword matching. It
      evaluates trajectory (have they worked at a startup before?), real stack (recent commits in
      TypeScript?), availability (last role change 11 months ago?). TrueCalling&apos;s TrueFit 360
      score combines these dimensions into a single 100-point rating, explained line by line.
    </p>

    <h3>3. Multichannel automated outreach</h3>
    <p>
      AI doesn&apos;t stop at finding people. It writes the first message, schedules follow-ups,
      and switches channels based on responses. On WhatsApp, the average open rate is 90 % versus
      20% on email — a gap wide enough to completely rewrite your contact strategy.
    </p>

    <h2>The 4 AI sourcing tools to know</h2>
    <ul>
      <li>
        <strong>TrueCalling</strong>: EMILY copilot, TrueFit 360 score, WhatsApp + email + phone
        outreach, ATS integrations. Built for search firms and Talent teams in France.
      </li>
      <li>
        <strong>HireSweet</strong>: long-standing tech sourcing on LinkedIn and GitHub, mostly
        focused on French scale-ups.
      </li>
      <li>
        <strong>LinkedIn Recruiter</strong>: the baseline, but with no real matching AI and no
        native multichannel outreach.
      </li>
      <li>
        <strong>SeekOut / hireEZ</strong>: strong in the US, still poorly adapted to the European
        GDPR landscape.
      </li>
    </ul>
    <p>
      For a detailed breakdown of choosing between TrueCalling and an established player, see our{" "}
      <Link href="/blog/truecalling-vs-hiresweet" className="text-accent underline-offset-4 hover:underline">
        TrueCalling vs HireSweet
      </Link>{" "}
      comparison.
    </p>

    <h2>A concrete example: sourcing a Senior Data Engineer in Paris</h2>
    <p>
      You type the brief: &quot;Senior Data Engineer, 6+ years of experience, Spark + dbt, Paris or
      full-remote France, scale-up SaaS background, open to opportunities.&quot; In under five
      minutes, the <strong>AI sourcing</strong> engine surfaces 217 profiles, including 38 above
      85/100 on the matching score. EMILY drafts a personalized first sequence per profile,
      referencing an open-source project visible on GitHub. You approve it; outreach goes out on
      WhatsApp first, with email as fallback. Three days later, you have 11 qualified replies.
    </p>

    <h2>The limits and pitfalls of AI sourcing</h2>
    <p>
      <strong>AI sourcing</strong> is not magic. Three traps come up again and again:
    </p>
    <ul>
      <li>
        <strong>The black-box effect.</strong> If the score isn&apos;t explainable, your team
        won&apos;t trust it. Insist on a decomposed score.
      </li>
      <li>
        <strong>Fake hyper-personalization.</strong> A short, honest message beats a LinkedIn-bot
        paragraph that smells of ChatGPT.
      </li>
      <li>
        <strong>GDPR compliance.</strong> Public data is not automatically usable. Check your legal
        basis, especially for scraping and WhatsApp outreach.
      </li>
    </ul>

    <h2>How to choose your AI sourcing tool</h2>
    <p>
      Ask every vendor four simple questions:
    </p>
    <ol>
      <li>Is the matching score explainable and auditable?</li>
      <li>Which outreach channels are native? Is WhatsApp truly built in?</li>
      <li>Are ATS integrations (Greenhouse, Lever, Teamtailor, Recruitee) native?</li>
      <li>Is data hosted in Europe and GDPR-compliant?</li>
    </ol>
    <p>
      To see how these criteria translate into a real platform, check out the{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        AI sourcing software TrueCalling
      </Link>{" "}
      or explore the concrete levers to{" "}
      <Link href="/blog/time-to-hire-7-levers-2026" className="text-accent underline-offset-4 hover:underline">
        cut your time-to-hire in half
      </Link>
      .
    </p>

    <h2>Conclusion: AI sourcing is now the standard</h2>
    <p>
      In 2026, skipping <strong>AI sourcing</strong> means recruiting one step behind. The tech is
      mature, the benchmarks speak for themselves, and teams that combine a copilot, contextual
      scoring, and multichannel outreach are hiring twice as fast as the median. The question is no
      longer &quot;does it work?&quot; but &quot;which tool do I pick, and how do I deploy it in
      under 30 days?&quot;
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        See AI sourcing in action
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        In 30 minutes, we&apos;ll show you how to source 200 qualified candidates on a tough tech
        role, complete with TrueFit 360 scoring and WhatsApp outreach.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article2Content: ReactNode = (
  <>
    <p>
      <strong>WhatsApp recruiting</strong> has become, in 2026, the most effective channel for
      reaching passive candidates. With an average open rate of 90 % versus 20% on email, the
      performance gap is so wide that no serious Talent team can afford to ignore it. One critical
      question remains: how do you use it without exposing yourself to a CNIL audit? This guide
      lays out the rules clearly.
    </p>

    <h2>Why WhatsApp recruiting is taking off</h2>
    <p>
      WhatsApp is used daily by more than 40 million French adults. For many candidates — tech,
      sales, and international profiles in particular — it has become the default personal channel.
      Three key data points explain the massive adoption of <strong>WhatsApp recruiting</strong>:
    </p>
    <ul>
      <li>
        <strong>90 % open rate</strong> on a WhatsApp message within 4 hours.
      </li>
      <li>
        <strong>~45% reply rate</strong> on a well-crafted first message, versus 8 to 12% on a
        LinkedIn InMail.
      </li>
      <li>
        <strong>Time-to-first-response divided by 5</strong> on average compared to email.
      </li>
    </ul>

    <h2>GDPR doesn&apos;t ban it — it regulates it</h2>
    <p>
      First thing to know: there is no law that bans <strong>WhatsApp recruiting</strong> in
      France. GDPR regulates the use of personal data, and a phone number qualifies. So you have
      four pillars to respect:
    </p>
    <ol>
      <li>
        <strong>Clear legal basis.</strong> The recruiter&apos;s legitimate interest is accepted
        for a non-intrusive professional outreach.
      </li>
      <li>
        <strong>Candidate notification.</strong> State who you are, the role concerned, and the
        right to object from the very first message.
      </li>
      <li>
        <strong>Data minimization.</strong> Store only what&apos;s useful, nothing more.
      </li>
      <li>
        <strong>Right to be forgotten.</strong> Any deletion request must be processed within 30
        days.
      </li>
    </ol>

    <h2>The 5 rules of a compliant WhatsApp message</h2>
    <ul>
      <li>
        <strong>Identify yourself immediately</strong>: first name, last name, company.
      </li>
      <li>
        <strong>State the context</strong>: &quot;I&apos;m reaching out about a Senior Data
        Engineer role at X.&quot;
      </li>
      <li>
        <strong>Mention the right to object</strong>: &quot;Let me know if you&apos;d rather not be
        contacted again.&quot;
      </li>
      <li>
        <strong>Keep it short</strong>: under 400 characters, one clear question.
      </li>
      <li>
        <strong>Never send during intrusive hours</strong>: 9am–7pm on weekdays is the implicit
        rule.
      </li>
    </ul>

    <h2>WhatsApp Business API: the only professional path</h2>
    <p>
      Using WhatsApp Web from a personal phone to run <strong>WhatsApp recruiting</strong> at scale
      is a bad idea: ban risk, no audit trail, GDPR compliance impossible to prove. The
      professional path is the official WhatsApp Business API, accessible via Meta partners (BSPs).
      A platform like TrueCalling integrates this API natively, which gives you:
    </p>
    <ul>
      <li>A dedicated, certified number that won&apos;t get banned.</li>
      <li>Time-stamped archiving of every exchange.</li>
      <li>Centralized opt-out management.</li>
      <li>Meta-approved templates for the first contact.</li>
    </ul>

    <h2>A concrete example: a campaign across 80 candidates</h2>
    <p>
      You launch a <strong>WhatsApp recruiting</strong> campaign targeting 80 Go developers
      identified in Paris. You sequence: D0 intro message, D3 short follow-up, D7 final message.
      Typical numbers observed in 2026:
    </p>
    <ul>
      <li>78 messages delivered (two invalid numbers).</li>
      <li>76 read within 4 hours (97%).</li>
      <li>34 replies (44%).</li>
      <li>19 phone interviews scheduled.</li>
      <li>4 candidates in advanced process within 3 weeks.</li>
    </ul>
    <p>
      The same brief sent as a cold email would likely have generated 5 to 8 replies out of the 80.
      The gap is massive — but only sustainable if compliance holds up.
    </p>

    <h2>The 3 mistakes you can&apos;t afford to make</h2>
    <ol>
      <li>
        <strong>Sending from a personal account.</strong> No audit trail, no traceable consent,
        CNIL exposure if a complaint is filed.
      </li>
      <li>
        <strong>Pulling numbers from uncontrolled scraping.</strong> If the source isn&apos;t
        GDPR-compliant, neither is your campaign.
      </li>
      <li>
        <strong>Ignoring opt-outs.</strong> One well-documented CNIL complaint and the cost of
        negligence is steep.
      </li>
    </ol>

    <h2>How to combine WhatsApp with other channels</h2>
    <p>
      <strong>WhatsApp recruiting</strong> doesn&apos;t replace everything. It fits inside a
      multichannel sourcing approach where LinkedIn handles identification, email formalizes, and
      the phone closes. To go deeper on this logic, read our article on{" "}
      <Link
        href="/blog/multichannel-sourcing-beyond-linkedin"
        className="text-accent underline-offset-4 hover:underline"
      >
        multichannel sourcing
      </Link>
      .
    </p>

    <h2>Recommended tools and stack for 2026</h2>
    <p>
      For a clean rollout of <strong>WhatsApp recruiting</strong> inside a Talent team, you need
      three building blocks:
    </p>
    <ul>
      <li>
        <strong>A sourcing platform</strong> with native WhatsApp Business API.
      </li>
      <li>
        <strong>An ATS</strong> to store candidate data in a compliant way.
      </li>
      <li>
        <strong>A written GDPR policy</strong> and a DPO in the loop.
      </li>
    </ul>
    <p>
      TrueCalling covers the first two blocks with native WhatsApp and ATS integrations for
      Greenhouse, Lever, Teamtailor, and Recruitee.{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Try WhatsApp outreach inside TrueCalling
      </Link>{" "}
      to see the end-to-end flow.
    </p>

    <h2>Conclusion: done right, WhatsApp recruiting is unbeatable</h2>
    <p>
      <strong>WhatsApp recruiting</strong> is not a hack — it&apos;s now the channel that
      structurally outperforms email and InMail. GDPR compliance is a question of tooling and
      discipline, not a legal impossibility. With a platform that integrates the official API,
      validated templates, and centralized opt-out management, you capture the 90 % open rate
      without risking an audit.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Launch your first compliant WhatsApp campaign
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        30-minute demo: walk away with a WhatsApp + email + phone workflow ready to fire on your
        next hard-to-fill role.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article3Content: ReactNode = (
  <>
    <p>
      The <strong>AI recruiting copilot</strong> has become a buzzword, but few recruiters
      actually know what changes concretely in their day. How much time saved? On which tasks?
      What stays — thankfully — in your hands? This article opens the black box and looks at
      what an AI copilot really does, based on a typical day inside a French Talent team.
    </p>

    <h2>What is an AI copilot for recruiters?</h2>
    <p>
      An <strong>AI recruiting copilot</strong> is not an autonomous agent that recruits in
      your place. It&apos;s an assistant that virtually sits next to you and takes over the
      repetitive low-value tasks: writing messages, qualifying resumes, scheduling interviews,
      following up on sequences. You keep the decisions and the human contact; it makes the
      mechanical work disappear.
    </p>
    <p>
      EMILY, TrueCalling&apos;s copilot, is one example. She reads your brief, proposes a
      scored long list of candidates, drafts personalized outreach messages, and only pings
      you when your judgment is required.
    </p>

    <h2>A day with and without an AI copilot</h2>

    <h3>Without an AI copilot: 8:30 AM to 7 PM</h3>
    <ul>
      <li>2 hours of manual sourcing on LinkedIn Recruiter.</li>
      <li>1.5 hours writing personalized InMails (or not).</li>
      <li>1 hour catching up on follow-ups forgotten the day before.</li>
      <li>2 hours of interviews.</li>
      <li>1 hour of reporting and ATS updates.</li>
      <li>The rest: interruptions, hiring manager briefs, calendar wrangling.</li>
    </ul>

    <h3>With an AI copilot: 9 AM to 6 PM</h3>
    <ul>
      <li>20 minutes to validate the long list generated by the AI.</li>
      <li>15 minutes to review and personalize the suggested messages.</li>
      <li>3 hours of interviews, with no manual scheduling.</li>
      <li>1.5 hours on strategic work: briefs, qualifications, negotiations.</li>
      <li>Auto-generated reporting.</li>
    </ul>
    <p>
      The typical gain observed when a team adopts an <strong>AI recruiting copilot</strong>{" "}
      seriously: 8 to 12 hours per recruiter per week. That&apos;s the equivalent of a day
      and a half recovered.
    </p>

    <h2>The 5 tasks the AI copilot does better than you</h2>
    <ol>
      <li>
        <strong>Translating a fuzzy brief into a sourcing query.</strong> You write &quot;we&apos;re
        looking for a product designer, somewhat senior, open to remote.&quot; The copilot
        produces the full query with locations, seniority, stack, and target companies.
      </li>
      <li>
        <strong>Personalizing 50 messages in 5 minutes.</strong> A human would need 90 minutes
        for a less polished result.
      </li>
      <li>
        <strong>Tracking follow-ups.</strong> No follow-up forgotten — which radically changes
        conversion rates.
      </li>
      <li>
        <strong>Detecting weak signals.</strong> A recent commit, a job change, a conference
        appearance — hooks a human never spots while scrolling.
      </li>
      <li>
        <strong>Updating the ATS.</strong> Native sync, no more copy-paste.
      </li>
    </ol>

    <h2>The 3 tasks that must stay human</h2>
    <p>
      A good <strong>AI recruiting copilot</strong> knows where to stop — where human judgment
      is required:
    </p>
    <ul>
      <li>
        <strong>The interview.</strong> Assessing a candidate&apos;s motivations, narrative
        coherence, and cultural fit — that&apos;s your job.
      </li>
      <li>
        <strong>Negotiation.</strong> Understanding what truly matters to a candidate (bonus,
        equity, remote work, mission) and shaping an offer — that&apos;s human.
      </li>
      <li>
        <strong>The hiring manager brief.</strong> Pushing back on a manager about the
        expected stack or the salary band doesn&apos;t automate.
      </li>
    </ul>

    <h2>How EMILY changes the day-to-day at TrueCalling</h2>
    <p>
      EMILY is designed as a copilot, not as an autonomous agent. She proposes, you decide.
      Concretely, on a Lead Backend Go role in Lyon:
    </p>
    <ul>
      <li>EMILY generates 180 scored candidates in under 4 minutes.</li>
      <li>She drafts 180 personalized sequences (WhatsApp / email depending on preferred channel).</li>
      <li>She schedules follow-ups and adapts tone based on incoming replies.</li>
      <li>She surfaces the 12 candidates above 90/100 on the TrueFit 360 score.</li>
      <li>You make the call in 30 minutes on what would have taken 6 hours.</li>
    </ul>
    <p>
      To understand how the score that drives these decisions works, read our article on the{" "}
      <Link
        href="/blog/candidate-job-matching-score-ai"
        className="text-accent underline-offset-4 hover:underline"
      >
        candidate-job matching score
      </Link>
      .
    </p>

    <h2>Should we worry that AI will replace recruiters?</h2>
    <p>
      Fair question, honest answer: no, but it redefines the role. The 2026 recruiter no
      longer spends 70% of their time scrolling LinkedIn. They spend 70% of their time talking
      to candidates, understanding briefs, and negotiating offers. The{" "}
      <strong>AI recruiting copilot</strong> doesn&apos;t kill the role — it brings it back to
      what it should always have been.
    </p>

    <h2>How to deploy an AI copilot in 30 days</h2>
    <ol>
      <li>
        <strong>Week 1</strong>: audit your current processes and identify the 3 most
        time-consuming tasks.
      </li>
      <li>
        <strong>Week 2</strong>: ATS integration and import of open briefs.
      </li>
      <li>
        <strong>Week 3</strong>: pilot on a hard-to-fill role, measure time-to-first-response.
      </li>
      <li>
        <strong>Week 4</strong>: roll out across the team and train recruiters on pairing
        with EMILY.
      </li>
    </ol>
    <p>
      To go further on the rollout,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Discover EMILY, the TrueCalling AI copilot
      </Link>
      .
    </p>

    <h2>Conclusion: the AI copilot is now infrastructure, not a gadget</h2>
    <p>
      In 2026, an <strong>AI recruiting copilot</strong> is no longer a nice-to-have.
      It&apos;s the orchestration layer that separates Talent teams who hire fast from those
      who get crushed by their pipelines. The right reflex isn&apos;t &quot;does this
      work?&quot; — it&apos;s &quot;which copilot do we pick, and how do we deploy it in
      under 30 days?&quot;
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        See EMILY at work on one of your roles
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We take one of your live briefs and show you, in real time, how EMILY generates 150
        scored candidates and 150 personalized messages in under 10 minutes.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article4Content: ReactNode = (
  <>
    <p>
      If you&apos;re evaluating TrueCalling, you&apos;re probably comparing with HireSweet —
      the historical player in French tech sourcing. This article is a factual comparison,
      no sleight of hand: if HireSweet is the better fit for your case, we&apos;ll say so.
      The goal is to help you pick a <strong>HireSweet alternative</strong> only if it
      actually saves you time and hires.
    </p>

    <h2>TrueCalling and HireSweet: different positioning</h2>
    <p>
      HireSweet entered the market in 2016 with a clear promise: source French tech profiles
      by aggregating LinkedIn, GitHub, and their own databases. It&apos;s a solid product,
      used by many French scale-ups.
    </p>
    <p>
      TrueCalling, more recent, starts from a blank page with three priorities missing from
      legacy tools: a conversational AI copilot (EMILY), an explainable contextual matching
      score (TrueFit 360), and native multichannel outreach including WhatsApp with a 90 %
      open rate. If you&apos;re looking for a <strong>HireSweet alternative</strong> that
      pushes the AI layer further, this is exactly the playing field.
    </p>

    <h2>Comparison table: TrueCalling vs HireSweet</h2>
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
          <td>Sourcing method</td>
          <td>Multi-source semantic search + EMILY copilot</td>
          <td>Filter-based search + ML suggestions</td>
        </tr>
        <tr>
          <td>Matching score</td>
          <td>TrueFit 360, score out of 100 explained line by line</td>
          <td>Internal score, limited detail for the user</td>
        </tr>
        <tr>
          <td>AI copilot</td>
          <td>EMILY: generates briefs, queries, messages, follow-ups</td>
          <td>No native conversational copilot</td>
        </tr>
        <tr>
          <td>Outreach channels</td>
          <td>WhatsApp + email + phone (native multichannel)</td>
          <td>Email primarily, LinkedIn via extension</td>
        </tr>
        <tr>
          <td>WhatsApp open rate</td>
          <td>90 % vs 20% email — native in the tool</td>
          <td>No native WhatsApp</td>
        </tr>
        <tr>
          <td>ATS integrations</td>
          <td>Greenhouse, Lever, Teamtailor, Recruitee, Workday</td>
          <td>Greenhouse, Lever, Welcome Kit, others</td>
        </tr>
        <tr>
          <td>Pricing (entry point)</td>
          <td>Starter $595/user/month, Core $895</td>
          <td>Quote-based, typically starting around €600/month</td>
        </tr>
        <tr>
          <td>Target</td>
          <td>Agencies and Talent teams across FR + Europe, all sectors</td>
          <td>French tech scale-ups primarily</td>
        </tr>
      </tbody>
    </table>

    <h2>When HireSweet is still a good choice</h2>
    <p>
      Let&apos;s be honest: if you recruit exclusively for tech roles in Paris, you&apos;re a
      scale-up under 50 people, and you already work with their ecosystem, HireSweet remains
      relevant. It does well what it&apos;s been doing since 2016.
    </p>

    <h2>When TrueCalling becomes the HireSweet alternative to pick</h2>
    <p>
      Four scenarios where a <strong>HireSweet alternative</strong> like TrueCalling will buy
      you significantly more:
    </p>
    <ol>
      <li>
        <strong>You hire beyond tech.</strong> Sales, marketing, ops, finance — TrueCalling&apos;s
        coverage is broader.
      </li>
      <li>
        <strong>You want native WhatsApp.</strong> If your candidates respond better on
        WhatsApp than email, the performance gap is massive.
      </li>
      <li>
        <strong>You&apos;re a recruiting agency.</strong> EMILY accelerates research
        associates&apos; work on high volumes.
      </li>
      <li>
        <strong>You want an explainable AI copilot.</strong> The TrueFit 360 score breaks
        down every dimension so your hiring managers actually understand the recommendations.
      </li>
    </ol>

    <h2>Concrete case: Senior Backend Go in Lyon</h2>
    <p>
      On the same brief — Senior Backend Go, 5+ years of experience, Lyon or full-remote
      France — here are the typical 2026 numbers:
    </p>
    <ul>
      <li>
        <strong>HireSweet</strong>: 130 suggested profiles, average response rate ~12% (email).
      </li>
      <li>
        <strong>TrueCalling</strong>: 180 scored profiles, with 28 above 85/100. WhatsApp +
        email outreach, average response rate ~38%.
      </li>
    </ul>
    <p>
      The gap comes mainly from the WhatsApp channel and the score quality, which filters
      noise upstream.
    </p>

    <h2>Pricing: the honest read</h2>
    <p>
      TrueCalling is transparent: Starter $595/user/month, Core $895/user/month, Enterprise
      on quote. HireSweet runs systematic quotes, which makes comparison harder, but the
      entry ticket sits in a comparable range. At equivalent ROI, TrueCalling differentiates
      on the features included (WhatsApp, EMILY, TrueFit 360) rather than on raw price.
    </p>

    <h2>FAQ</h2>
    <ul>
      <li>
        <strong>Can we import our talent pools from HireSweet?</strong> Yes, via CSV export
        and import into TrueCalling, with automatic deduplication.
      </li>
      <li>
        <strong>Is ATS integration covered?</strong> Greenhouse, Lever, Teamtailor,
        Recruitee — all native.
      </li>
      <li>
        <strong>How long does migration take?</strong> 7 to 14 days on average for a team of
        5 to 10 recruiters.
      </li>
    </ul>

    <h2>What if you&apos;re also comparing with LinkedIn Recruiter?</h2>
    <p>
      If LinkedIn Recruiter is also on your shortlist, read our companion comparison{" "}
      <Link
        href="/blog/truecalling-vs-linkedin-recruiter"
        className="text-accent underline-offset-4 hover:underline"
      >
        TrueCalling vs LinkedIn Recruiter
      </Link>
      .
    </p>
    <p>
      To explore the full feature set,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        book a TrueCalling demo
      </Link>{" "}
      or read our{" "}
      <Link href="/blog/ai-sourcing-guide-2026" className="text-accent underline-offset-4 hover:underline">
        complete guide to AI sourcing in 2026
      </Link>
      .
    </p>

    <h2>Conclusion: pick the HireSweet alternative that fits your stack</h2>
    <p>
      Choosing a <strong>HireSweet alternative</strong> only makes sense if it wins you
      ground on three axes: matching quality, outreach performance, and recruiter
      productivity. TrueCalling checks all three thanks to EMILY, TrueFit 360, and its
      native multichannel outreach. If you stay in pure tech sourcing in Paris with a
      well-oiled process, HireSweet remains valid. Beyond that, the math leans toward
      TrueCalling.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Compare on one of your live roles
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Give us a brief you&apos;re already running elsewhere. In 30 minutes, we&apos;ll show
        you the concrete delta in scored profiles and response rate.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article5Content: ReactNode = (
  <>
    <p>
      LinkedIn Recruiter is still the de facto standard for many Talent teams, but its limits have
      become impossible to ignore in 2026. If you&apos;re looking for a{" "}
      <strong>LinkedIn Recruiter alternative</strong>, it&apos;s probably because the cost-to-result
      ratio no longer holds up. This article compares TrueCalling to LinkedIn Recruiter on the
      dimensions that actually matter to a recruiter.
    </p>

    <h2>Why look for a LinkedIn Recruiter alternative in 2026</h2>
    <p>
      Three signals are pushing Talent teams to explore a{" "}
      <strong>LinkedIn Recruiter alternative</strong>:
    </p>
    <ul>
      <li>
        <strong>InMail open rates in free fall</strong>: 18 to 22% on average, down from 35% five
        years ago.
      </li>
      <li>
        <strong>Premium price tag without real AI</strong>: $10,000 to $15,000 per year per
        Recruiter Lite/Pro license, with no genuine AI copilot to speak of.
      </li>
      <li>
        <strong>No native WhatsApp</strong>: even though it&apos;s become the highest-performing
        channel.
      </li>
    </ul>

    <h2>Comparison table: TrueCalling vs LinkedIn Recruiter</h2>
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
          <td>Sourcing method</td>
          <td>Multi-source semantic search + EMILY</td>
          <td>Native LinkedIn filters + Recommended Matches</td>
        </tr>
        <tr>
          <td>Sources covered</td>
          <td>LinkedIn, GitHub, enriched databases, internal ATS</td>
          <td>LinkedIn only</td>
        </tr>
        <tr>
          <td>Matching score</td>
          <td>TrueFit 360, explainable line by line</td>
          <td>No explainable AI score</td>
        </tr>
        <tr>
          <td>Outreach channels</td>
          <td>WhatsApp 90 % + email + phone</td>
          <td>InMail only (monthly limits)</td>
        </tr>
        <tr>
          <td>Average open rate</td>
          <td>90 % WhatsApp / 20% email</td>
          <td>~20% InMail (declining)</td>
        </tr>
        <tr>
          <td>ATS integrations</td>
          <td>Greenhouse, Lever, Teamtailor, Recruitee, Workday</td>
          <td>Limited, often via Recruiter System Connect</td>
        </tr>
        <tr>
          <td>Pricing (entry point)</td>
          <td>Starter $595/user/month</td>
          <td>~$10,000–15,000/year/user</td>
        </tr>
        <tr>
          <td>EU GDPR compliance</td>
          <td>European hosting and compliance</td>
          <td>US hosting, variable compliance</td>
        </tr>
      </tbody>
    </table>

    <h2>The 4 major limits of LinkedIn Recruiter</h2>

    <h3>1. A single source = a blind spot</h3>
    <p>
      LinkedIn Recruiter only sees LinkedIn. For a Senior Data Engineer in Paris, you miss the
      highly active GitHub profiles who don&apos;t keep their LinkedIn current. A serious{" "}
      <strong>LinkedIn Recruiter alternative</strong> covers LinkedIn, GitHub, Stack Overflow and
      enriched databases in parallel.
    </p>

    <h3>2. No conversational AI copilot</h3>
    <p>
      Recruiter offers suggestions, but no copilot that drafts messages, schedules follow-ups and
      switches channels automatically. EMILY at TrueCalling does exactly that.
    </p>

    <h3>3. Single-channel outreach</h3>
    <p>
      InMail isn&apos;t enough anymore. The best candidates receive 8 to 15 InMails per month and
      barely open half of them. With multichannel outreach including WhatsApp, the average open
      rate jumps from 20% to 90 % on the first message.
    </p>

    <h3>4. Pricing disconnected from value delivered</h3>
    <p>
      A Recruiter license typically runs $10–15K/year. TrueCalling Starter at $595/user/month, or
      ~$7,000/year, comes with an AI copilot, multichannel outreach and the TrueFit 360 score. At
      equal budget, you get far more.
    </p>

    <h2>Real-world case: Senior Product Manager in Paris</h2>
    <p>
      Identical brief: Senior PM B2B SaaS, 6+ years, Paris, open to partial remote.
    </p>
    <ul>
      <li>
        <strong>LinkedIn Recruiter</strong>: 95 InMails sent, 19% open rate, 11 qualified replies
        in 3 weeks.
      </li>
      <li>
        <strong>TrueCalling</strong>: 95 candidates contacted on multichannel, 76% reply rate on
        WhatsApp, 39 qualified replies in 10 days.
      </li>
    </ul>

    <h2>When LinkedIn Recruiter still earns its keep</h2>
    <p>
      LinkedIn Recruiter retains value for two use cases: quick profile lookups when opening a
      role, and managing your visible employer brand on LinkedIn. But as a primary sourcing
      engine, it&apos;s outdated in 2026 — which is why a wave of solutions are now built as a{" "}
      <strong>LinkedIn Recruiter alternative</strong>.
    </p>

    <h2>Migrating from LinkedIn Recruiter to TrueCalling</h2>
    <ol>
      <li>
        <strong>Week 1</strong>: audit of active requisitions and import into TrueCalling.
      </li>
      <li>
        <strong>Week 2</strong>: ATS integration and sync of existing candidates.
      </li>
      <li>
        <strong>Week 3</strong>: pilot on a hard-to-fill role, measure the time-to-response delta.
      </li>
      <li>
        <strong>Week 4</strong>: decision to reduce or not renew Recruiter licenses.
      </li>
    </ol>
    <p>
      Many teams keep a residual Recruiter license for ancillary uses while shifting active
      sourcing to TrueCalling. ROI is typically positive by week 4.
    </p>

    <h2>Further reading</h2>
    <p>
      If you&apos;re also comparing with a French tech sourcing player, read our{" "}
      <Link href="/blog/truecalling-vs-hiresweet" className="text-accent underline-offset-4 hover:underline">
        TrueCalling vs HireSweet
      </Link>
      {" "}comparison. To understand why single-channel is dead, see our article on{" "}
      <Link
        href="/blog/multichannel-sourcing-beyond-linkedin"
        className="text-accent underline-offset-4 hover:underline"
      >
        multichannel sourcing
      </Link>
      .
    </p>
    <p>
      To see the tool in practice:{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Book a TrueCalling demo
      </Link>
      .
    </p>

    <h2>Conclusion: LinkedIn Recruiter is no longer enough as your primary engine</h2>
    <p>
      LinkedIn Recruiter remains a solid profile directory, but it&apos;s no longer a
      high-performance sourcing engine in 2026. A <strong>LinkedIn Recruiter alternative</strong>{" "}
      like TrueCalling gives you more sources, an AI copilot, multichannel outreach and an
      explainable score — typically for less than the cost of a Recruiter Pro license. The math
      is simple: with measurable ROI, you hire faster and with less friction.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Measure the delta on your next hard-to-fill role
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We&apos;ll compare an active Recruiter project against the same brief launched in
        TrueCalling, side by side. You see the difference in profile quality and reply rate in 30
        minutes.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article6Content: ReactNode = (
  <>
    <p>
      The <strong>candidate matching score</strong> is the most-used and most-misunderstood
      feature on AI sourcing platforms. How does the AI assess the fit between a profile and a
      role? What does it base its judgment on? Where does it consistently get it wrong? This
      article opens the hood and explains what a matching score actually measures, using
      TrueCalling&apos;s TrueFit 360 score as a reference.
    </p>

    <h2>What is a candidate matching score?</h2>
    <p>
      A <strong>candidate matching score</strong> is a rating (often out of 100) that expresses
      the likelihood that a candidate fits a given role. The score combines several dimensions:
      skills, experience, company context, geography, availability. The score is not absolute
      truth — it&apos;s a useful ranking to prioritize outreach.
    </p>

    <h2>The 5 dimensions a good AI evaluates</h2>
    <ol>
      <li>
        <strong>Technical skills.</strong> Stack, languages, frameworks. The best AIs don&apos;t
        stop at the resume: they look at recent GitHub commits.
      </li>
      <li>
        <strong>Experience trajectory.</strong> Seniority, progression, company size. A candidate
        who has shipped at 3 startups in a row is different from someone leaving 8 years at a
        large enterprise.
      </li>
      <li>
        <strong>Company context.</strong> Sector, business model, stage (early, scale-up,
        public). Critical for cultural relevance.
      </li>
      <li>
        <strong>Estimated availability.</strong> Tenure in the current role, weak signals
        (LinkedIn updates, conference activity, side projects).
      </li>
      <li>
        <strong>Geography and mobility.</strong> Current location, openness to remote, time-zone
        compatibility.
      </li>
    </ol>

    <h2>How TrueFit 360 works</h2>
    <p>
      TrueCalling&apos;s TrueFit 360 score produces a rating out of 100 broken down by
      dimension, so a recruiter or hiring manager can understand where the recommendation comes
      from. For a Senior Data Engineer in Paris, you might see something like this:
    </p>
    <ul>
      <li>Technical skills: 92/100 (Spark, dbt, Airflow detected on GitHub).</li>
      <li>Trajectory: 88/100 (6 years, scale-up SaaS).</li>
      <li>Context: 75/100 (coming from a large enterprise, transition feasible).</li>
      <li>Availability: 80/100 (3 years in current role, openness signals).</li>
      <li>Geography: 100/100 (Paris, OK with remote).</li>
      <li>
        <strong>TrueFit 360 total: 89/100.</strong>
      </li>
    </ul>
    <p>
      That explainability changes everything. Hiring managers trust a score they can read; a
      black-box score gets ignored.
    </p>

    <h2>Where the matching score always gets it wrong</h2>

    <h3>1. Cultural fit</h3>
    <p>
      No AI reads company culture correctly. A great technical profile can be a relational
      nightmare. The <strong>candidate matching score</strong> is a relevance indicator, not a
      culture-fit indicator.
    </p>

    <h3>2. Real motivations</h3>
    <p>
      Why would the candidate change jobs? AI can detect signals, but it can&apos;t read minds.
      That&apos;s what the interview is for.
    </p>

    <h3>3. Atypical profiles</h3>
    <p>
      Someone who studied theater and then did backend at Google will rank low on the score. Yet
      that may be your best hire. Always review the outliers manually.
    </p>

    <h3>4. Data freshness</h3>
    <p>
      A score based on a LinkedIn profile that hasn&apos;t been updated in 2 years is wrong. Good
      platforms continuously enrich their data and surface freshness signals.
    </p>

    <h2>Matching score and bias: an ongoing watch</h2>
    <p>
      Any <strong>candidate matching score</strong> can reproduce biases present in training
      data. Gender, age, school, first name — all variables that can unduly weight the score if
      the AI isn&apos;t audited. Ask your vendor:
    </p>
    <ul>
      <li>Is the score auditable variable by variable?</li>
      <li>Are protected attributes excluded or controlled for?</li>
      <li>Is there an &quot;anonymized resume&quot; mode for the scoring phase?</li>
    </ul>

    <h2>How to use a matching score intelligently</h2>
    <ol>
      <li>
        <strong>Sort, don&apos;t exclude.</strong> Work the top 50 scores first, but keep an eye
        on the next 50.
      </li>
      <li>
        <strong>Cross-reference score and human signals.</strong> A cover letter, a side project,
        a story told in an interview are worth more than a raw score.
      </li>
      <li>
        <strong>Revisit the brief if too few candidates score above 80.</strong> The problem is
        often the brief, not the market.
      </li>
      <li>
        <strong>Share the score with the hiring manager.</strong> Broken down by dimension, it
        becomes a discussion tool.
      </li>
    </ol>

    <h2>Matching score and recruiter productivity</h2>
    <p>
      Used well, the <strong>candidate matching score</strong> changes recruiter productivity.
      Instead of skimming 200 profiles, the recruiter works 30 in depth. To go further on
      recruiter productivity, read our article on the{" "}
      <Link
        href="/blog/ai-copilot-for-recruiters-daily"
        className="text-accent underline-offset-4 hover:underline"
      >
        AI copilot for recruiters in daily practice
      </Link>
      .
    </p>

    <h2>How to evaluate a matching score before you buy</h2>
    <p>
      Before signing with a vendor, run this test: take 20 candidates you&apos;ve recently
      hired. Have the engine score them. If the majority come out above 80, the score is
      learning well. Run the inverse test with 20 rejected candidates: most should land below
      60. Without that double test, you&apos;re buying a score blind.
    </p>

    <h2>Conclusion: a matching score is a tool, not an oracle</h2>
    <p>
      A well-designed <strong>candidate matching score</strong> — like TrueFit 360 — speeds up
      triage and improves shortlist quality. But no score replaces your recruiter judgment. The
      golden rule: demand explainability, cross-check with human signals, audit for bias, and
      always keep an eye on the outliers.
    </p>
    <p>
      To see TrueFit 360 in action on one of your briefs,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        See TrueFit 360 in action
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Test TrueFit 360 against your most recent hires
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We&apos;ll show you how TrueFit 360 would have scored your last 20 hired candidates. The
        best way to evaluate a matching score before you buy.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article7Content: ReactNode = (
  <>
    <p>
      Wanting to <strong>reduce time-to-hire</strong> is a legitimate obsession in 2026: on
      in-demand profiles, every day of delay costs you a candidate. The French median for a tech
      role sits at 35 days; the best Talent teams hire in 18 to 22 days. This article breaks down
      7 concrete, quantified levers you can apply without overhauling your entire process.
    </p>

    <h2>Why time-to-hire has become critical</h2>
    <p>
      Three reasons make &quot;<strong>reduce time-to-hire</strong>&quot; a strategic priority:
    </p>
    <ul>
      <li>
        <strong>Fierce competition for scarce profiles.</strong> A Senior Data Engineer in Paris
        gets 3 to 5 competing offers within 10 days.
      </li>
      <li>
        <strong>Opportunity cost of an open role.</strong> Estimated at 1% of the revenue
        generated by the role, per day of vacancy.
      </li>
      <li>
        <strong>Employer brand.</strong> A 60+ day process erodes your Glassdoor score, and
        therefore your future pipelines.
      </li>
    </ul>

    <h2>Lever 1 — Source multichannel from day one</h2>
    <p>
      If you only send InMails, you wait. WhatsApp opens at 90 %, versus 20% for email. Simply
      adding WhatsApp to the outreach sequence{" "}
      <strong>reduces time-to-hire</strong> by 4 to 7 days on average for first responses.
    </p>

    <h2>Lever 2 — Use an AI copilot to draft messages</h2>
    <p>
      Writing 50 personalized messages takes a human 90 minutes; EMILY does it in 5. Multiply by
      3 roles open in parallel and you reclaim half a day per week — reinvested into interviews,
      and therefore conversion. To dig deeper, see our article on the{" "}
      <Link
        href="/blog/ai-copilot-for-recruiters-daily"
        className="text-accent underline-offset-4 hover:underline"
      >
        AI copilot for recruiters
      </Link>
      .
    </p>

    <h2>Lever 3 — Brief the hiring manager in under 30 minutes</h2>
    <p>
      A poorly framed brief costs 7 to 10 days on time-to-hire — and you only spot it during the
      shortlist phase, far too late. Enforce a structured brief format: must-have skills,
      nice-to-haves, validated salary range, top 5 target companies, 3 companies to avoid. With
      EMILY, the brief is even auto-translated into a sourcing query.
    </p>

    <h2>Lever 4 — Cut the number of interview stages</h2>
    <p>
      4 stages in 2026 is the maximum sustainable for a non-C-level role. Beyond that, you lose
      the best candidates to faster competitors. A typical audit:
    </p>
    <ol>
      <li>Recruiter screen (30 min).</li>
      <li>Hiring manager interview (45 min).</li>
      <li>Technical test or business case (60–90 min).</li>
      <li>Team interview and closing (60 min).</li>
    </ol>
    <p>
      Any added stage must prove its usefulness. The rule: if you can&apos;t articulate what that
      stage specifically evaluates, drop it.
    </p>

    <h2>Lever 5 — Schedule interviews self-service</h2>
    <p>
      Manual calendar coordination typically costs 2 to 3 days per stage. With a self-service
      scheduling tool connected to hiring managers&apos; calendars, you drop to 24 hours. On a
      4-stage process, that&apos;s up to 8 days reclaimed.
    </p>

    <h2>Lever 6 — Decide within 48 hours after the interview</h2>
    <p>
      &quot;We&apos;ll get back to you next week&quot; kills more hires than any other factor.
      To <strong>reduce time-to-hire</strong>, enforce a synchronous debrief within 48 hours,
      with a binary decision: move forward or stop. No &quot;let&apos;s discuss again&quot;.
    </p>

    <h2>Lever 7 — Build the offer upfront</h2>
    <p>
      Too many teams start building the offer after the final interview. But constructing a
      serious offer (equity, bonus, signing, full package) takes 3 to 5 days. Build it at stage
      2, not stage 4. You save 4 to 6 days on closing.
    </p>

    <h2>Recap of potential gains</h2>
    <table>
      <thead>
        <tr>
          <th>Lever</th>
          <th>Typical gain (days)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Multichannel sourcing with WhatsApp</td>
          <td>4 to 7 days</td>
        </tr>
        <tr>
          <td>AI copilot for outreach</td>
          <td>2 to 4 days</td>
        </tr>
        <tr>
          <td>Structured hiring manager brief</td>
          <td>3 to 5 days</td>
        </tr>
        <tr>
          <td>Fewer interview stages</td>
          <td>3 to 6 days</td>
        </tr>
        <tr>
          <td>Self-service scheduling</td>
          <td>5 to 8 days</td>
        </tr>
        <tr>
          <td>48-hour debrief</td>
          <td>2 to 4 days</td>
        </tr>
        <tr>
          <td>Offer prepared upfront</td>
          <td>4 to 6 days</td>
        </tr>
        <tr>
          <td>
            <strong>Total stackable</strong>
          </td>
          <td>
            <strong>17 to 35 days</strong>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Not all levers stack linearly, but on a 35-day process, targeting 18 to 22 days is
      perfectly realistic with these 7 levers.
    </p>

    <h2>Real-world case: from 42 to 19 days on a Senior PM role</h2>
    <p>
      A French B2B SaaS scale-up applied the 7 levers to a Senior PM role. Time-to-hire before:
      42 days. After:
    </p>
    <ul>
      <li>D1: structured brief and EMILY query launched.</li>
      <li>D2: 180 candidates scored, 38 contacted multichannel.</li>
      <li>D5: 14 qualified responses.</li>
      <li>D9: 6 hiring manager interviews.</li>
      <li>D14: 3 finalists in business case.</li>
      <li>D17: final decision.</li>
      <li>D19: offer signed.</li>
    </ul>

    <h2>Tools that actually save time</h2>
    <p>
      To <strong>reduce time-to-hire</strong>, equip yourself with the right tools:
    </p>
    <ul>
      <li>An AI sourcing platform with multichannel outreach (TrueCalling).</li>
      <li>A well-integrated ATS (Greenhouse, Lever, Teamtailor).</li>
      <li>A scheduling tool (Calendly, GoodTime).</li>
      <li>A documented process shared with hiring managers.</li>
    </ul>
    <p>
      To estimate the time savings on your current stack,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Calculate my time savings with TrueCalling
      </Link>
      .
    </p>

    <h2>Conclusion: aiming for 20 days is realistic in 2026</h2>
    <p>
      <strong>Reducing time-to-hire</strong> from 35 to 20 days is within reach for any Talent
      team that applies the 7 levers above with discipline. The main blocker isn&apos;t
      technological — it&apos;s the inertia of internal processes. The tools are ready, the
      benchmarks speak for themselves; it&apos;s on you to shorten the loop.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Cut your time-to-hire in half within 90 days
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We audit your current process and identify the 3 levers that will save you the most days,
        starting with your next open role.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article8Content: ReactNode = (
  <>
    <p>
      <strong>Multichannel sourcing</strong> is no longer optional in 2026: it&apos;s the
      requirement for reaching candidates over-solicited on LinkedIn. If you&apos;re still
      relying on InMail as your primary channel, your response rates have been quietly
      collapsing for three years. This article explains why LinkedIn alone is no longer enough
      and what to add alongside it.
    </p>

    <h2>Why LinkedIn alone is no longer enough</h2>
    <p>
      Three structural reasons make <strong>multichannel sourcing</strong> a mandatory standard
      in 2026:
    </p>
    <ul>
      <li>
        <strong>InMail saturation.</strong> A Senior Engineer receives 8 to 15 InMails per
        month. The average open rate has dropped to 18-22%.
      </li>
      <li>
        <strong>Outdated LinkedIn profiles.</strong> 30 to 40% of tech profiles aren&apos;t up
        to date; you miss stacks and availability signals.
      </li>
      <li>
        <strong>Candidate migration to WhatsApp.</strong> 90 % open rate on WhatsApp vs 20% on
        email — the gap is too massive to ignore.
      </li>
    </ul>

    <h2>The 5 channels that make up multichannel sourcing in 2026</h2>

    <h3>1. LinkedIn</h3>
    <p>
      Still useful for identifying profiles and reading their trajectory. It remains an
      excellent directory, but should be downgraded as your primary outreach channel.
    </p>

    <h3>2. WhatsApp</h3>
    <p>
      The channel that massively outperforms in 2026. 90 % open rate, ~45% response rate,
      time-to-first-response divided by 5. It should become your number-one channel on profiles
      where you have a verified phone number.
    </p>

    <h3>3. Professional email</h3>
    <p>
      Still useful for formalization and document delivery (offers, contracts). As a first-touch
      channel, its ROI is dropping, but it remains essential as a follow-up.
    </p>

    <h3>4. Phone</h3>
    <p>
      Underused, yet decisive on senior profiles. A well-prepared direct call converts 3 to 5
      times more than a cold message. Use it on the final shortlist.
    </p>

    <h3>5. GitHub / Stack Overflow / pro Discord</h3>
    <p>
      On tech profiles, professional communities allow a contextual first contact (recent
      commit, Stack Overflow answer, open-source contribution). Response rates are very high
      because the contact is qualitative.
    </p>

    <h2>How to orchestrate multichannel sourcing without losing the thread</h2>
    <p>
      The trap with <strong>multichannel sourcing</strong> is fragmentation: 5 tabs, 3 tools,
      forgotten follow-ups. The solution is a single platform that orchestrates channels and
      manages handoffs automatically. A typical sequence:
    </p>
    <ol>
      <li>D0 — Short, personalized WhatsApp message.</li>
      <li>D3 — If no reply, email with enriched content (job description).</li>
      <li>D7 — WhatsApp follow-up with a different angle.</li>
      <li>D10 — If no reply, phone call.</li>
      <li>D14 — Exit pipeline, archive with note.</li>
    </ol>

    <h2>Real-world case: sourcing a Lead Frontend Vue.js</h2>
    <p>
      80 candidates identified, multichannel sequence over 14 days:
    </p>
    <ul>
      <li>76 WhatsApp messages delivered.</li>
      <li>74 read within 4 hours (97%).</li>
      <li>33 WhatsApp replies (43%).</li>
      <li>9 additional replies via follow-up email.</li>
      <li>4 replies via phone call on warm profiles.</li>
      <li>
        <strong>Total: 46 qualified replies out of 80 (57%)</strong>.
      </li>
    </ul>
    <p>
      The same brief on a LinkedIn-only channel would have converted at 12-15% at best.
    </p>

    <h2>Common mistakes in multichannel sourcing</h2>
    <ol>
      <li>
        <strong>Sending the same message across all channels.</strong> Each channel has its own
        code. WhatsApp = short and direct. Email = slightly longer and more formal. Phone =
        prepared in advance.
      </li>
      <li>
        <strong>Forgetting GDPR compliance.</strong> WhatsApp requires particular care. Read our
        guide to{" "}
        <Link
          href="/blog/whatsapp-recruiting-gdpr-2026"
          className="text-accent underline-offset-4 hover:underline"
        >
          WhatsApp recruiting and GDPR
        </Link>
        .
      </li>
      <li>
        <strong>Failing to measure channel by channel.</strong> Without a per-channel dashboard,
        you&apos;re flying blind.
      </li>
    </ol>

    <h2>The toolkit for serious multichannel sourcing</h2>
    <p>
      Effective <strong>multichannel sourcing</strong> rests on three building blocks:
    </p>
    <ul>
      <li>
        <strong>A single orchestration platform</strong> that handles WhatsApp + email + phone
        natively (TrueCalling).
      </li>
      <li>
        <strong>Verified numbers and identities</strong> via the WhatsApp Business API.
      </li>
      <li>
        <strong>Per-channel reporting</strong> to continuously fine-tune the sequence.
      </li>
    </ul>
    <p>
      To understand how AI orchestrates all of this, see our article on the{" "}
      <Link
        href="/blog/ai-sourcing-agent-new-standard"
        className="text-accent underline-offset-4 hover:underline"
      >
        AI sourcing agent
      </Link>
      .
    </p>

    <h2>How many channels to activate at once?</h2>
    <p>
      Practical rule: 2 to 3 channels per profile in a sequence. Beyond that, you come across as
      pushy and burn the candidate. The default mix: WhatsApp + email + phone on warm profiles,
      WhatsApp + email on the rest.
    </p>

    <h2>When to switch from one channel to another</h2>
    <p>
      Three signals justify a channel switch:
    </p>
    <ul>
      <li>
        <strong>No opens</strong> on the chosen channel after 72 hours.
      </li>
      <li>
        <strong>A partial positive reply</strong> that warrants a more formal exchange (move
        from WhatsApp to email).
      </li>
      <li>
        <strong>A sensitive topic</strong> (negotiation, package) that calls for a phone call.
      </li>
    </ul>

    <h2>Conclusion: LinkedIn becomes a source, not a channel</h2>
    <p>
      In 2026, LinkedIn should go back to being what it really is: a useful professional
      directory for identifying profiles. As a primary outreach channel, it&apos;s saturated.
      Well-orchestrated <strong>multichannel sourcing</strong> — WhatsApp, email, phone, plus
      LinkedIn as a complement — is the only way to keep response rates above 30% on in-demand
      profiles.
    </p>
    <p>
      To activate multichannel sourcing without piling up tools,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        Activate multichannel outreach on TrueCalling
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Launch your first multichannel sequence
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We&apos;ll help you set up a WhatsApp + email + phone sequence on one of your open
        roles. Measurable results within 10 days.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article9Content: ReactNode = (
  <>
    <p>
      The <strong>AI sourcing agent</strong> has become 2026&apos;s most-talked-about topic at HR
      conferences. The promise: an autonomous agent that sources candidates on your behalf, 24/7,
      with no intervention. The reality: we&apos;re not quite there yet, but we&apos;re getting
      close fast. This article gives you an honest read on what AI agents can do, what they
      can&apos;t, and why the future belongs to copilots rather than pure agents.
    </p>

    <h2>AI sourcing agent: what are we actually talking about?</h2>
    <p>
      An <strong>AI sourcing agent</strong> is an autonomous system that can execute a chain of
      tasks without continuous oversight: understand a brief, generate a query, source, qualify,
      reach out, follow up. The key difference from a copilot is autonomy: a copilot suggests, an
      agent decides and executes.
    </p>

    <h2>What an AI sourcing agent can do in 2026</h2>
    <ul>
      <li>
        <strong>Read a brief</strong> written in plain language and extract skills, seniority,
        context.
      </li>
      <li>
        <strong>Generate a multi-source sourcing query</strong> covering LinkedIn, GitHub, Stack
        Overflow, and enriched databases.
      </li>
      <li>
        <strong>Score candidates</strong> with a contextual model like TrueFit 360.
      </li>
      <li>
        <strong>Write personalized messages</strong> grounded in public signals (commits,
        conferences, articles).
      </li>
      <li>
        <strong>Orchestrate multichannel outreach</strong> (WhatsApp, email, phone) with follow-ups
        and channel switching.
      </li>
      <li>
        <strong>Sync the ATS</strong> natively.
      </li>
    </ul>

    <h2>What an AI sourcing agent can&apos;t (yet) do</h2>
    <ul>
      <li>
        <strong>Assess culture fit.</strong> AI can pick up signals but can&apos;t understand a
        team&apos;s internal culture.
      </li>
      <li>
        <strong>Negotiate a complex package.</strong> Equity, bonus, family constraints — that
        takes a human.
      </li>
      <li>
        <strong>Read the room in an interview.</strong> A candidate who hesitates, a red flag on a
        project — that&apos;s human intuition at work.
      </li>
      <li>
        <strong>Triangulate beyond a single source.</strong> A good recruiter cross-references
        multiple signals; an AI agent tends to lean too heavily on the data it has on hand.
      </li>
    </ul>

    <h2>AI agent versus AI copilot: the distinction that matters</h2>
    <p>
      The big confusion in 2026 is between &quot;agent&quot; and &quot;copilot.&quot; A fully
      autonomous <strong>AI sourcing agent</strong> exists on paper; in practice, the best
      platforms — TrueCalling with EMILY in the lead — adopt a hybrid model: agent on repetitive
      tasks, copilot on decisions. That&apos;s the right balance between productivity and control.
    </p>
    <p>
      To go deeper on the copilot&apos;s day-to-day role, see our article on the{" "}
      <Link
        href="/blog/ai-copilot-for-recruiters-daily"
        className="text-accent underline-offset-4 hover:underline"
      >
        AI copilot for recruiters
      </Link>
      .
    </p>

    <h2>A typical workflow with an AI sourcing agent</h2>
    <ol>
      <li>
        <strong>Brief</strong>: you write 2 paragraphs about the role.
      </li>
      <li>
        <strong>Query generation</strong>: the agent extracts skills, seniority, context, and
        geography.
      </li>
      <li>
        <strong>Sourcing</strong>: 200 to 400 candidates surfaced and scored.
      </li>
      <li>
        <strong>Human validation</strong>: you keep or remove the borderline profiles.
      </li>
      <li>
        <strong>Outreach</strong>: the agent writes, sends, follows up, switches channels.
      </li>
      <li>
        <strong>Reporting</strong>: automatic dashboard, alerts on hot profiles.
      </li>
    </ol>
    <p>
      With this workflow, a recruiter spends 2-3 hours per role where they used to spend 15.
    </p>

    <h2>Real-world case: AI agent on 5 roles in parallel</h2>
    <p>
      A Talent team of 3 recruiters runs 5 open roles simultaneously. Without an AI agent, each
      recruiter handles 1.5 to 2 roles in parallel properly. With an{" "}
      <strong>AI sourcing agent</strong> handling sourcing and outreach:
    </p>
    <ul>
      <li>3 recruiters handle 8 to 10 roles in parallel.</li>
      <li>Average time-to-first-response: 36 hours vs. 6 days without an agent.</li>
      <li>Average time-to-hire: 22 days vs. 35 days without an agent.</li>
      <li>Volume of qualified candidates presented to hiring managers: 3x.</li>
    </ul>

    <h2>Limits and guardrails</h2>
    <p>
      Four guardrails are non-negotiable when you deploy an <strong>AI sourcing agent</strong>:
    </p>
    <ol>
      <li>
        <strong>Human validation on outreach.</strong> The agent drafts; the recruiter reviews
        before send during the first few weeks.
      </li>
      <li>
        <strong>Bias auditing.</strong> Protected variables excluded from scoring, regular checks
        on shortlist diversity.
      </li>
      <li>
        <strong>GDPR compliance.</strong> Data hosted in Europe, documented legal basis, opt-out
        managed centrally.
      </li>
      <li>
        <strong>Continuous measurement.</strong> Response rate, shortlist quality, hiring manager
        satisfaction.
      </li>
    </ol>

    <h2>Choosing an AI sourcing agent: 5 questions to ask</h2>
    <ul>
      <li>Can the agent orchestrate multiple channels natively (WhatsApp, email, phone)?</li>
      <li>Is the matching score explainable?</li>
      <li>Is the ATS integration native?</li>
      <li>Is data hosted in Europe?</li>
      <li>Is there a &quot;copilot&quot; mode to keep a human in the loop?</li>
    </ul>
    <p>
      To explore an AI agent in production,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        try the TrueCalling AI agent
      </Link>
      .
    </p>

    <h2>The future: collaborative agents, not autonomous ones</h2>
    <p>
      The direction the best vendors are taking in 2026 isn&apos;t the fully autonomous agent —
      it&apos;s the collaborative agent. EMILY at TrueCalling fits this logic: she takes on
      whatever can be taken on, asks for validation on what matters, and learns from the
      recruiter&apos;s judgment calls. It&apos;s more useful, safer, and more aligned with the
      regulation ahead (AI Act).
    </p>

    <h2>Conclusion: a new standard, not a revolution</h2>
    <p>
      The <strong>AI sourcing agent</strong> isn&apos;t a violent rupture that wipes out the
      recruiter. It&apos;s a new productivity standard: 3x more roles workable in parallel,
      time-to-hire cut in half, higher-quality shortlists. The recruiter&apos;s job doesn&apos;t
      disappear — it shifts toward the highest-value tasks.
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        See the TrueCalling AI agent on a real role
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        In 30 minutes, we run EMILY on one of your briefs and you measure the time saved from the
        very first outreach sequence.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article10Content: ReactNode = (
  <>
    <p>
      <strong>Automating candidate sourcing</strong> scares a lot of Talent teams — and that&apos;s
      understandable. Nobody wants to send bot-like messages or be treated like a spammer by
      candidates. Yet automating without dehumanizing isn&apos;t just possible: it&apos;s exactly
      what the fastest-hiring teams are doing in 2026. Here&apos;s how.
    </p>

    <h2>Why automate sourcing in 2026</h2>
    <p>
      Three reasons make automation unavoidable:
    </p>
    <ul>
      <li>
        <strong>Volume of repetitive tasks</strong>: a recruiter spends 60% of their time on tasks
        that don&apos;t require their judgment.
      </li>
      <li>
        <strong>Pressure on time-to-hire</strong>: the French median sits at 35 days; the best
        teams hire in 18-22 days thanks to automation.
      </li>
      <li>
        <strong>Competition on hard-to-fill profiles</strong>: without automation, you arrive after
        everyone else.
      </li>
    </ul>

    <h2>What to automate</h2>
    <ol>
      <li>
        <strong>Translating the brief into a sourcing query.</strong> No judgment call needed; AI
        does it better and faster.
      </li>
      <li>
        <strong>Multi-source identification.</strong> LinkedIn, GitHub, Stack Overflow, enriched
        databases — 100% automatable.
      </li>
      <li>
        <strong>Initial profile scoring.</strong> The TrueFit 360 score breaks down for you what
        you&apos;d do in 30 minutes per profile.
      </li>
      <li>
        <strong>Sending the outreach sequence.</strong> Once the first human validation is done,
        the engine executes, follows up, and switches channels.
      </li>
      <li>
        <strong>Calendar scheduling.</strong> Calendly-style, connected to hiring managers.
      </li>
      <li>
        <strong>ATS sync.</strong> Greenhouse, Lever, Teamtailor — automatic.
      </li>
    </ol>

    <h2>What NOT to automate</h2>
    <p>
      When you set out to <strong>automate sourcing</strong>, draw a clear line on what stays
      human:
    </p>
    <ul>
      <li>
        <strong>The final call</strong> on the shortlist sent to the hiring manager.
      </li>
      <li>
        <strong>The interview</strong> and the soft-skills assessment.
      </li>
      <li>
        <strong>Offer negotiation.</strong>
      </li>
      <li>
        <strong>The hiring manager brief</strong> and team feedback.
      </li>
    </ul>

    <h2>The 5 rules for automating without dehumanizing</h2>

    <h3>1. Personalize beyond the first name</h3>
    <p>
      A message that says &quot;Hi Pierre, I saw your profile&quot; sounds like a bot. A message
      that says &quot;Hi Pierre, I read your talk at the dbt Coalition conference&quot; sounds
      human. Deep personalization is automatable — EMILY does it by reading each candidate&apos;s
      public signals.
    </p>

    <h3>2. Keep an opt-out clear and visible</h3>
    <p>
      An honest automated message mentions the right to object on first contact. That protects
      your brand and your GDPR compliance. It&apos;s the baseline for{" "}
      <strong>automating sourcing</strong> without breaking the candidate relationship.
    </p>

    <h3>3. Stop automation at the first &quot;yes&quot;</h3>
    <p>
      As soon as a candidate replies positively, automation stops. A human takes over. No
      automated follow-up email after an interested reply — that kills the relationship.
    </p>

    <h3>4. Use the right channel for the candidate</h3>
    <p>
      Not everyone likes WhatsApp. Not everyone opens their email. Smart automation tests channels
      and prioritizes the one where the candidate replies. To go deeper here, see our article on{" "}
      <Link
        href="/blog/multichannel-sourcing-beyond-linkedin"
        className="text-accent underline-offset-4 hover:underline"
      >
        multichannel sourcing
      </Link>
      .
    </p>

    <h3>5. Leave the human voice to your team</h3>
    <p>
      The best templates are written by your recruiters and amplified by AI — not the other way
      around. AI personalizes and adapts; your brand voice comes from your team.
    </p>

    <h2>Real-world case: 200 candidates contacted in 48 hours</h2>
    <p>
      A French Talent team launches a campaign on 200 Go developers for 4 open roles
      simultaneously:
    </p>
    <ul>
      <li>EMILY generates 200 personalized messages in 8 minutes.</li>
      <li>The recruiter reviews and approves 200 messages in 35 minutes.</li>
      <li>Multichannel send goes out over 48 hours.</li>
      <li>76% WhatsApp open rate.</li>
      <li>91 qualified replies in 5 days.</li>
      <li>0 complaints, 0 negative comments on LinkedIn.</li>
    </ul>
    <p>
      The automation is invisible on the candidate side because the personalization is real, not
      fake.
    </p>

    <h2>Signals that you&apos;ve gone too far</h2>
    <ul>
      <li>Unsubscribe rate &gt; 5%.</li>
      <li>Copy-pasted messages spotted on Twitter or LinkedIn.</li>
      <li>Hiring managers complaining about the tone of messages.</li>
      <li>Response rate dropping week after week.</li>
    </ul>
    <p>
      If any of these signals shows up, ease off the automation and put humans back in the loop.
    </p>

    <h2>Tools to automate without dehumanizing</h2>
    <p>
      To <strong>automate sourcing</strong> intelligently, you need:
    </p>
    <ul>
      <li>
        <strong>A platform with an AI copilot</strong> that genuinely personalizes (EMILY).
      </li>
      <li>
        <strong>An explainable matching score</strong> so you&apos;re not relying on a black box.
      </li>
      <li>
        <strong>Native multichannel outreach</strong> (WhatsApp, email, phone).
      </li>
      <li>
        <strong>An ATS integration</strong> so you never lose the history of the relationship.
      </li>
    </ul>
    <p>
      TrueCalling checks all four boxes. To dig deeper into scoring, see our article on the{" "}
      <Link
        href="/blog/candidate-job-matching-score-ai"
        className="text-accent underline-offset-4 hover:underline"
      >
        candidate-job matching score
      </Link>
      .
    </p>

    <h2>Measuring the human quality of your automation</h2>
    <ol>
      <li>
        <strong>Positive response rate</strong>: should stay &gt; 30% on targeted profiles.
      </li>
      <li>
        <strong>Candidate Net Promoter Score</strong>: survey them after the process.
      </li>
      <li>
        <strong>Unsubscribe rate</strong>: should stay &lt; 2%.
      </li>
      <li>
        <strong>Volume of complaints / reports</strong>: should stay at zero.
      </li>
    </ol>

    <h2>Conclusion: automation done right is invisible</h2>
    <p>
      <strong>Automating sourcing</strong> doesn&apos;t mean robotizing the relationship. When
      it&apos;s done right, the candidate doesn&apos;t guess they were contacted via an automation
      platform: they get a relevant, personalized message, on the right channel, at the right
      moment. That&apos;s exactly what a well-designed AI copilot makes possible — and that&apos;s
      why the Talent teams that automate intelligently hire twice as fast as the median.
    </p>
    <p>
      To set up automation that respects your candidates,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        book a TrueCalling demo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Automate without losing the human voice
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We show you how EMILY actually personalizes every message, grounded in each
        candidate&apos;s public signals. 30-minute demo on one of your briefs.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article11Content: ReactNode = (
  <>
    <p>
      Generating a <strong>candidate shortlist</strong> of qualified profiles in under 10 minutes,
      from a single brief, is no longer futuristic in 2026 — it has become a baseline for Talent
      teams that want to level up. A good AI copilot reads your job description, queries the right
      talent pools, scores every profile on explainable criteria and hands you a list of 10 to 20
      candidates ready to contact. Here is, step by step, how to generate a candidate shortlist with
      AI that actually delivers — and what separates a real shortlist from a pile of badly sorted
      profiles.
    </p>

    <h2>AI candidate shortlist: the definition that matters</h2>
    <p>
      An <strong>AI candidate shortlist</strong> is not a raw LinkedIn export and not a keyword
      ranking. It is a list of 10 to 20 profiles max, selected by a model that has read the role,
      compared each candidate across multiple dimensions, and justified its ranking. You should be
      able to click any profile and understand, in two lines, why it is on the list.
    </p>
    <p>
      The difference with a plain &quot;AI search&quot; without explainable scoring is that the
      shortlist is <em>actionable</em>: you know who to contact first, in what order, and with what
      angle.
    </p>

    <h2>The 4 steps to generate a shortlist in under 10 minutes</h2>

    <h3>Step 1 — Describe the role in natural language (2 minutes)</h3>
    <p>
      Forget Boolean strings. You write 3 to 6 sentences describing the role as you would to a
      teammate: seniority, stack, sector, constraints (location, full/part-time, languages). The
      sharper the brief, the denser the shortlist. Example:
    </p>
    <ul>
      <li>
        &quot;Senior Backend Engineer in Go, 6+ years of experience, ideally from a European B2B
        SaaS scale-up, based in Paris or remote France, comfortable with Kubernetes and production
        ops.&quot;
      </li>
    </ul>
    <p>
      EMILY translates that brief into a semantic multi-source query and explores LinkedIn, GitHub
      and our enriched databases.
    </p>

    <h3>Step 2 — Let AI explore and score (4 to 6 minutes)</h3>
    <p>
      The engine returns 200 to 400 relevant profiles, then applies the TrueFit 360 score to each.
      The score breaks relevance into four axes: technical skills, experience context, soft signals,
      and estimated availability. Every score is explainable — click on a candidate and you see why
      they sit at 87/100 or 64/100.
    </p>
    <p>
      This phase runs while you grab a coffee. No human input required.
    </p>

    <h3>Step 3 — Filter the final shortlist (1 to 2 minutes)</h3>
    <p>
      The AI proposes 30 to 40 candidates above the relevance threshold. You keep the top 10 to 20
      in a few clicks, removing profiles that are too senior, in the wrong location, or visibly
      happy where they are. The copilot also flags the top 5 to 10 candidates to prioritize first.
    </p>

    <h3>Step 4 — Launch outreach (1 minute)</h3>
    <p>
      EMILY drafts a first personalized message for every shortlisted candidate, on their preferred
      channel (WhatsApp, email, phone). You review, you approve, you send. That is the moment the
      shortlist becomes a real pipeline.
    </p>

    <h2>What separates a real shortlist from a fake one</h2>
    <ul>
      <li>
        <strong>A real shortlist is explainable.</strong> Every row opens onto a score
        justification.
      </li>
      <li>
        <strong>A real shortlist is short.</strong> 10 to 20 profiles, not 200. Otherwise it is no
        longer a shortlist — it is a search.
      </li>
      <li>
        <strong>A real shortlist is prioritized.</strong> The top 5 is identified, not buried in the
        crowd.
      </li>
      <li>
        <strong>A real shortlist is actionable.</strong> You know who to contact, on which channel,
        with what angle.
      </li>
      <li>
        <strong>A real shortlist is regenerable.</strong> You can iterate if quality is off, without
        starting over from zero.
      </li>
    </ul>

    <h2>Real-world case: Senior Product Manager B2B SaaS, shortlist in 8 minutes</h2>
    <p>
      A French Talent team needs a Senior Product Manager B2B SaaS for a Paris-based role, FR/EN
      bilingual, ideally with growth experience:
    </p>
    <ul>
      <li>Brief typed in 90 seconds.</li>
      <li>EMILY returns 312 relevant profiles in 4 minutes.</li>
      <li>TrueFit 360 scores all 312 in under 2 minutes.</li>
      <li>The recruiter keeps 14 profiles above 78/100.</li>
      <li>EMILY generates 14 personalized WhatsApp messages in 45 seconds.</li>
      <li>Total: 8 minutes from brief to pipeline.</li>
    </ul>
    <p>
      Out of those 14 candidates, 9 reply within 48 hours. Five interviews launched in the first
      week. The role is filled in 19 days, against an internal median of 41 days for equivalent
      roles the previous year.
    </p>

    <h2>The 3 mistakes that ruin an AI shortlist</h2>
    <ol>
      <li>
        <strong>A brief that is too vague.</strong> &quot;A good full-stack developer&quot; will
        never produce a usable shortlist. Give context: stack, seniority, sector.
      </li>
      <li>
        <strong>Wanting too broad a shortlist.</strong> If you keep 50 profiles, you no longer have
        a shortlist — you have a backlog. The ROI lies in tight selection.
      </li>
      <li>
        <strong>Not iterating on rejected profiles.</strong> If you drop 5 profiles from the top 10,
        tell the AI why. The next shortlist will be better.
      </li>
    </ol>

    <h2>Tools to generate an AI shortlist in 2026</h2>
    <ul>
      <li>
        <strong>TrueCalling</strong>: EMILY copilot, explainable TrueFit 360 score, shortlist in 5
        to 10 minutes, native multichannel outreach.
      </li>
      <li>
        <strong>HireSweet</strong>: tech-oriented shortlist generation focused on French scale-ups,
        less explainability on the score.
      </li>
      <li>
        <strong>LinkedIn Recruiter</strong>: returns results but without real AI prioritization —
        you still sort manually.
      </li>
      <li>
        <strong>SeekOut / hireEZ</strong>: deep database, mostly tuned for US enterprises.
      </li>
    </ul>
    <p>
      To dig deeper into the score behind the shortlist, see our article on the{" "}
      <Link
        href="/blog/candidate-job-matching-score-ai"
        className="text-accent underline-offset-4 hover:underline"
      >
        candidate-job matching score
      </Link>
      .
    </p>

    <h2>How much time you actually save</h2>
    <p>
      Over 100 roles per year, moving from a manual shortlist (45 to 90 min per role, i.e. 75 to 150
      hours per year) to an AI shortlist (8 to 12 min per role, i.e. 13 to 20 hours per year) means
      60 to 130 hours of pure sourcing time recovered. At a $70/hour recruiter cost, that is $4,200
      to $9,100 saved per year per recruiter — before counting the time-to-hire gain. To measure
      the end-to-end gain, see our{" "}
      <Link
        href="/blog/time-to-hire-7-levers-2026"
        className="text-accent underline-offset-4 hover:underline"
      >
        time-to-hire: 7 concrete levers
      </Link>{" "}
      guide.
    </p>

    <h2>Conclusion: the shortlist is the new brief</h2>
    <p>
      <strong>Generating a candidate shortlist with AI</strong> in 10 minutes changes the
      recruiter&apos;s posture: you no longer &quot;search&quot;, you &quot;decide&quot;. Sourcing
      becomes a short, repeatable act, and the recruiter&apos;s added value shifts toward brief
      quality, arbitration and candidate relationship. That is exactly the scenario well-designed
      AI copilots like EMILY make possible.
    </p>
    <p>
      To see a shortlist generated live on one of your open roles,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        book a TrueCalling demo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        A shortlist generated live, on one of your actual roles
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Bring a real brief. We show you how EMILY surfaces 10 to 20 scored candidates in under 10
        minutes. Guided 20 to 30-minute demo.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article12Content: ReactNode = (
  <>
    <p>
      <strong>ATS integration</strong> is the number one topic for Talent teams adopting an AI
      sourcing tool in 2026. The reason is simple: an AI copilot that does not talk to your ATS
      creates more problems than it solves. Duplicate entries, broken pipelines, lost candidate
      history, shaky GDPR compliance. Conversely, a well-built ATS integration turns AI sourcing
      into an orchestration layer that enriches your existing stack instead of replacing it. Here is
      how to get it right with Greenhouse, Lever, Recruitee, Teamtailor or Workable without
      breaking your process.
    </p>

    <h2>Why ATS integration is non-negotiable in AI sourcing</h2>
    <p>
      An AI sourcing tool living in a silo guarantees three issues:
    </p>
    <ul>
      <li>
        <strong>Candidate duplicates.</strong> You reach out to a profile a teammate already sourced
        3 months ago — or worse, a candidate already in your final round.
      </li>
      <li>
        <strong>Lost history.</strong> The WhatsApp or email thread you start is invisible inside
        the ATS. If another recruiter takes the role over, they restart from zero.
      </li>
      <li>
        <strong>Fuzzy GDPR compliance.</strong> Without sync, you maintain two processing
        registries, two opt-outs, two data subject access rights. CNIL risk climbs fast.
      </li>
    </ul>
    <p>
      A well-designed <strong>ATS sourcing integration</strong> fixes the three by turning your
      sourcing tool into an upstream engine that pushes into your existing pipeline — never
      replacing it.
    </p>

    <h2>What a good ATS integration should do</h2>
    <ol>
      <li>
        <strong>Automatically push every sourced candidate</strong> to the right job inside the ATS,
        at the right pipeline stage (typically &quot;sourced&quot; or &quot;new lead&quot;).
      </li>
      <li>
        <strong>Sync interactions</strong> from WhatsApp, email and phone to the candidate&apos;s
        ATS record — a message sent via EMILY appears in Greenhouse as a tracked activity.
      </li>
      <li>
        <strong>Detect duplicates</strong> at import time: if a candidate already exists in the ATS,
        the sourcing tool flags it and lets you stop or continue.
      </li>
      <li>
        <strong>Respect candidate status</strong>: a profile marked &quot;do not contact&quot; or
        &quot;permanently rejected&quot; in the ATS never surfaces in the AI shortlist.
      </li>
      <li>
        <strong>Sync GDPR opt-outs</strong> both ways. If a candidate unsubscribes via an outreach
        sequence, their status flips inside the ATS.
      </li>
    </ol>

    <h2>Greenhouse, Lever, Recruitee, Teamtailor, Workable: what changes</h2>

    <h3>Greenhouse</h3>
    <p>
      The Greenhouse Harvest API is complete and stable. A solid <strong>ATS sourcing
      integration</strong> can push candidates into the right job application, add custom sources
      (&quot;EMILY / WhatsApp&quot;) and log every interaction. Watch the permissions: the service
      account you use must have access to sourcing-eligible jobs.
    </p>

    <h3>Lever</h3>
    <p>
      The Lever API handles candidate push with tags and sources cleanly. The mapping from
      &quot;sourcing stage&quot; to a Lever stage works well. Caveat: Lever handles candidate
      consent differently across regions — wire it up properly from the first import.
    </p>

    <h3>Recruitee</h3>
    <p>
      Recruitee accepts candidate imports with custom fields and tagging without friction. Great
      for teams that want a clean &quot;sourcing layer&quot; without disrupting their Recruitee
      pipeline. Watch the API quotas on Smart vs Lead plans.
    </p>

    <h3>Teamtailor</h3>
    <p>
      Teamtailor exposes a modern, well-documented API. Standard scenario: EMILY pushes sourced
      candidates into an &quot;Inbox&quot; stage or a custom stage dedicated to AI sourcing. The
      candidate then follows the usual Teamtailor workflow.
    </p>

    <h3>Workable</h3>
    <p>
      Workable supports enriched imports via API. Watch out: the mapping of
      &quot;disqualification reasons&quot; on the Workable side must be clean, otherwise you lose
      feedback quality on the sourcing tool side.
    </p>

    <h2>Real-world case: Greenhouse + TrueCalling integration on 80 open roles</h2>
    <p>
      A 300-person French B2B SaaS scale-up uses Greenhouse as the single source of truth. Before
      TrueCalling integration: 35 % of sourced candidates duplicated with the in-house team, around
      4 hours per recruiter per week spent on manual reconciliation. After TrueCalling Harvest
      integration:
    </p>
    <ul>
      <li>0 undetected duplicate across 6 weeks.</li>
      <li>100 % of WhatsApp and email threads logged in Greenhouse.</li>
      <li>4 weekly hours recovered per recruiter (5 recruiters = 20 h / week).</li>
      <li>Average time-to-hire from 38 to 24 days on pilot roles.</li>
    </ul>

    <h2>The 5 questions to ask a vendor before buying</h2>
    <ol>
      <li>
        <strong>Is the ATS integration native or via Zapier?</strong> Zapier is fine for a POC, not
        for a production rollout.
      </li>
      <li>
        <strong>Is duplicate detection automatic?</strong> On what criteria (email, LinkedIn ID,
        fuzzy matching)?
      </li>
      <li>
        <strong>Is the sync bidirectional?</strong> If a candidate moves stage inside the ATS, does
        the sourcing tool know?
      </li>
      <li>
        <strong>Do GDPR opt-outs flow back?</strong> Test it during the demo.
      </li>
      <li>
        <strong>How many ATS integrations are included in the plan?</strong> One? Unlimited?
      </li>
    </ol>

    <h2>The hidden cost of a poor integration</h2>
    <p>
      A bad integration is expensive: 4 to 8 weekly hours of reconciliation per recruiter, 12 to
      20 % of candidates handled twice, and a non-trivial GDPR risk. Multiplied across 5 recruiters
      and 12 months, you are looking at more than 1,000 hours lost — the loaded salary of half a
      recruiter. The &quot;free&quot; pricing of a tool without native ATS integration is rarely
      free. For the business-impact angle, see our{" "}
      <Link
        href="/blog/automate-sourcing-without-dehumanizing"
        className="text-accent underline-offset-4 hover:underline"
      >
        automating sourcing without dehumanizing
      </Link>{" "}
      piece.
    </p>

    <h2>4-week integration plan</h2>
    <ol>
      <li>
        <strong>Week 1 — Audit your current ATS pipeline.</strong> Stages, statuses, custom fields,
        sources, GDPR rules.
      </li>
      <li>
        <strong>Week 2 — Mapping and service account.</strong> Create the API account in
        Greenhouse/Lever/Recruitee, map stages, choose sources.
      </li>
      <li>
        <strong>Week 3 — Tests on 1 or 2 pilot roles.</strong> Check duplicates, opt-outs, statuses,
        interaction sync.
      </li>
      <li>
        <strong>Week 4 — Rollout to all open roles.</strong> Recruiter training, weekly monitoring
        plan.
      </li>
    </ol>

    <h2>Conclusion: ATS integration is the multiplier</h2>
    <p>
      <strong>ATS sourcing integration</strong> is not a technical detail: it is the multiplier on
      your stack. An excellent AI sourcing tool without ATS integration produces noise. With native
      ATS integration, it becomes the upstream engine that makes your existing pipeline 2 to 3
      times more efficient. That is exactly what TrueCalling has built with its native Greenhouse,
      Lever, Recruitee, Teamtailor and Workable integrations.
    </p>
    <p>
      To see the integration live with your ATS,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        book a TrueCalling demo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Plug TrueCalling into your ATS without breaking your pipeline
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We show you the native Greenhouse, Lever, Recruitee or Teamtailor integration — push, sync,
        dedupe, opt-outs. Guided 20 to 30-minute demo on your real pipeline.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
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
            "https://truecalling.ai/en/blog/best-ai-sourcing-software-2026#itemlist",
          name: "Best AI Sourcing Software in 2026",
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
                  "AI talent intelligence platform for sourcing, matching, ranking, and WhatsApp candidate engagement.",
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
                  "AI-first recruiting platform combining ATS, CRM, sourcing, scheduling, and analytics.",
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
                  "AI recruiting and candidate sourcing software with managed sourcing support.",
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
                  "Agentic AI recruiting platform for sourcing, CRM, screening, analytics, and internal mobility.",
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
                  "Talent acquisition CRM and sourcing workflow platform for imports, outreach, and pipeline management.",
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
                  "AI recruiting search platform with natural-language candidate search and outbound sourcing workflows.",
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
                  "AI sourcing platform for passive candidate discovery, contact finding, and personalized outreach.",
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
                  "AI recruiting assistant for candidate sourcing, workflow automation, and outreach.",
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
      The best <strong>AI sourcing software</strong> for 2026 depends on what your recruiting team
      needs most — candidate discovery, enrichment, outreach, WhatsApp engagement, CRM, ATS
      rediscovery, or end-to-end workflow automation. The market has matured fast: tools that just
      &quot;searched faster&quot; in 2024 now compete on explainability, multichannel engagement,
      and how well they fit a European, GDPR-bound workflow.
    </p>
    <p>
      This guide compares eight AI sourcing platforms recruiters actually evaluate today, with a
      verdict for each based on the use case it serves best. We listed TrueCalling first because it
      sits at the intersection of the three capabilities most teams now ask for: AI sourcing,
      explainable matching, and WhatsApp candidate engagement in one workflow.
    </p>

    <h2 id="quick-answer">Quick answer: the best AI sourcing software in 2026</h2>
    <p>
      For teams that want AI sourcing, candidate scoring, explainable matching, and WhatsApp-based
      candidate engagement in one workflow, <strong>TrueCalling</strong> is the strongest fit.
      TrueCalling combines semantic talent discovery, 1.2B+ candidate profiles, explainable
      matching, and EMILY™ — an AI sourcing copilot that engages and qualifies candidates on
      WhatsApp before recruiters step in.
    </p>

    <h2 id="comparison-table">Best AI sourcing software by use case</h2>
    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-surface/30">
      <table className="w-full min-w-[640px] text-left text-[13.5px]">
        <thead className="border-b border-ink/[0.08] text-[11px] uppercase tracking-[0.14em] text-ink-muted">
          <tr>
            <th className="px-4 py-3 font-semibold">Tool</th>
            <th className="px-4 py-3 font-semibold">Best for</th>
            <th className="px-4 py-3 font-semibold">Standout strength</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/[0.06]">
          <tr>
            <td className="px-4 py-3 font-semibold text-accent">TrueCalling</td>
            <td className="px-4 py-3 text-ink">Best overall AI sourcing platform</td>
            <td className="px-4 py-3 text-ink-muted">
              WhatsApp outreach, explainable AI matching, 1.2B+ profiles
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Gem</td>
            <td className="px-4 py-3 text-ink">Enterprise recruiting operations</td>
            <td className="px-4 py-3 text-ink-muted">
              ATS, CRM, sourcing, scheduling, analytics in one platform
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Fetcher</td>
            <td className="px-4 py-3 text-ink">Managed sourcing support</td>
            <td className="px-4 py-3 text-ink-muted">
              AI plus human-assisted sourcing workflows
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">hireEZ</td>
            <td className="px-4 py-3 text-ink">Enterprise outbound + rediscovery</td>
            <td className="px-4 py-3 text-ink-muted">
              Open-web sourcing, CRM, analytics, internal mobility
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">HireSweet</td>
            <td className="px-4 py-3 text-ink">European recruiting teams</td>
            <td className="px-4 py-3 text-ink-muted">
              CRM, LinkedIn/ATS imports, multichannel sequences
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Juicebox / PeopleGPT</td>
            <td className="px-4 py-3 text-ink">Natural-language sourcing</td>
            <td className="px-4 py-3 text-ink-muted">
              800M+ profiles and conversational AI search
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">MindHunt AI</td>
            <td className="px-4 py-3 text-ink">Budget-friendly sourcing automation</td>
            <td className="px-4 py-3 text-ink-muted">
              297M+ profiles, contact finding, outreach
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold text-ink">Pin</td>
            <td className="px-4 py-3 text-ink">Startup sourcing workflows</td>
            <td className="px-4 py-3 text-ink-muted">
              AI recruiting assistant with strong user reviews
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="how-we-evaluated">How we evaluated these tools</h2>
    <p>
      Six criteria drove the scoring: depth of AI sourcing (semantic search vs. keyword-only),
      explainability of matching, native multichannel engagement (especially WhatsApp), GDPR and
      EU readiness, integration depth with common ATS, and signal quality from public review
      platforms. We did not test pricing for ranking — pricing varies too much by team size and
      contract structure — but we surface it where verifiable. Where a tool has limited public
      review data, we say so explicitly rather than estimate a rating.
    </p>

    <h2 id="truecalling-ai">1. TrueCalling — Best overall AI sourcing software</h2>
    <p>
      <strong>Best for:</strong> Teams that want AI sourcing, matching, ranking, WhatsApp outreach,
      and candidate qualification in one workflow.
    </p>
    <p>
      TrueCalling is an AI talent intelligence platform built for candidate sourcing, scoring,
      ranking, and engagement. Its core differentiator is that it does not stop at finding
      candidates — it helps recruiters understand why candidates match, build shortlists, and
      engage talent through WhatsApp via EMILY™, its AI sourcing copilot.
    </p>
    <p>
      TrueCalling&apos;s product positioning emphasizes four capabilities that matter for modern
      sourcing teams: semantic talent discovery, multi-layered candidate matching, explainable
      talent intelligence, and WhatsApp candidate engagement. The platform provides access to more
      than 1.2B globally sourced profiles and uses contextual signals rather than only keyword
      matching.
    </p>

    <h3>Why TrueCalling stands out</h3>
    <p>
      Most AI sourcing tools help recruiters search faster. TrueCalling goes further by helping
      recruiters engage candidates where response rates are higher: WhatsApp. EMILY™ can contact
      selected candidates, ask qualifying questions, follow up, and hand off qualified candidates
      to the recruiter or ATS. TrueCalling reports a 90 % open rate on WhatsApp versus 18–25 % for
      LinkedIn InMail.
    </p>
    <p>
      This makes TrueCalling especially strong for teams that want to reduce manual sourcing and
      manual follow-up at the same time. A recruiter can describe the ideal candidate in natural
      language, launch a search, review AI-ranked profiles, and then activate WhatsApp engagement
      without switching tools. For the deeper logic behind the score, see our piece on the{" "}
      <Link
        href="/blog/candidate-job-matching-score-ai"
        className="text-accent underline-offset-4 hover:underline"
      >
        candidate-job matching score
      </Link>
      .
    </p>

    <h3>Pros</h3>
    <ul>
      <li>AI sourcing and candidate engagement in one workflow.</li>
      <li>Explainable matching — every score is justified, not a black box.</li>
      <li>WhatsApp is a real differentiator where InMail is saturated.</li>
      <li>1.2B+ profiles and a multichannel outreach engine (WhatsApp, email, phone).</li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>
        Newer entrant in public third-party review ecosystems — smaller G2 / Capterra footprint
        than incumbents like Gem.
      </li>
      <li>
        Best fit for teams comfortable with WhatsApp as a candidate channel; less relevant if your
        market relies exclusively on email.
      </li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best overall AI sourcing software for teams that want sourcing,
      explainable matching, and WhatsApp qualification in one workflow.
    </p>

    <h2 id="gem">2. Gem — Best for enterprise recruiting operations</h2>
    <p>
      <strong>Best for:</strong> Enterprise and scaling teams that want sourcing, CRM, ATS,
      scheduling, and analytics in one recruiting platform.
    </p>
    <p>
      Gem positions itself as an AI-first all-in-one recruiting platform that combines ATS, CRM,
      sourcing, scheduling, analytics, and access to 800M+ profiles. Its AI Sourcing Agent is
      designed to work continuously, identify top candidate matches, flag past interactions, and
      personalize outreach.
    </p>
    <p>
      Gem is especially relevant for larger teams that want AI sourcing tied to broader recruiting
      operations. Its strength is not only candidate discovery — it&apos;s centralizing candidate
      context, outreach history, relationship management, analytics, and hiring workflows.
    </p>

    <h3>Pros</h3>
    <ul>
      <li>Strong all-in-one platform: sourcing, CRM, ATS, scheduling, analytics.</li>
      <li>Mature operations layer for teams that care about reporting and process visibility.</li>
      <li>4.8/5 on G2 across 279+ reviews.</li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>
        May be more platform than a small team needs. Lean sourcing-only teams will find dedicated
        tools lighter to operate.
      </li>
      <li>Enterprise pricing — not optimized for SMB budgets.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best for enterprise recruiting teams that want AI sourcing connected
      to CRM, ATS, analytics, and recruiting operations.
    </p>

    <h2 id="fetcher">3. Fetcher — Best for managed sourcing support</h2>
    <p>
      <strong>Best for:</strong> Teams that want AI sourcing with additional human support instead
      of a fully self-serve sourcing workflow.
    </p>
    <p>
      Fetcher describes itself as an AI recruiter that automates passive and active sourcing,
      helping teams cut time-to-hire with AI recruiting software and sourcing tools. The platform
      blends AI technology and a team of human sourcing experts to deliver candidate profiles that
      match hiring requirements.
    </p>
    <p>
      The hybrid software-plus-service model is the key difference. Fetcher is useful when teams
      want sourcing help but do not want recruiters spending hours building searches, reviewing
      databases, or managing every top-of-funnel activity manually.
    </p>

    <h3>Pros</h3>
    <ul>
      <li>AI sourcing combined with managed candidate delivery.</li>
      <li>Practical fit for lean people teams or fast-growing companies hiring repeat roles.</li>
      <li>Steady candidate flow with limited internal sourcing capacity required.</li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>
        Less ideal for teams that want full control over every search parameter or a deeply
        customizable AI sourcing workflow.
      </li>
      <li>Buyers should clarify upfront what is software-led vs. service-led.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best for teams that want AI-assisted sourcing with managed candidate
      delivery.
    </p>

    <h2 id="hireez">4. hireEZ — Best for enterprise outbound and talent rediscovery</h2>
    <p>
      <strong>Best for:</strong> Enterprise teams that need open-web sourcing, CRM, outreach
      automation, analytics, rediscovery, and internal mobility.
    </p>
    <p>
      hireEZ describes itself as an agentic AI recruiting platform with AI candidate sourcing,
      resume screening, analytics, talent intelligence, and more. Its platform combines AI
      sourcing, recruitment CRM, recruitment analytics, resume screening, outreach automation,
      internal mobility, talent pools, and sourcing hub capabilities.
    </p>
    <p>
      hireEZ is one of the strongest fits for enterprise teams with complex workflows. It supports
      outbound sourcing as well as rediscovery of existing talent — important for companies with
      large ATS databases.
    </p>

    <h3>Pros</h3>
    <ul>
      <li>Broad feature set for sourcing, CRM, analytics, and screening.</li>
      <li>Talent market insights, performance reporting, and structured campaign workflows.</li>
      <li>
        G2 reviews highlight ease of use, contact data quality, and outreach automation as the
        most commonly praised capabilities.
      </li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>Breadth can be unnecessary for smaller teams.</li>
      <li>Implementation, data workflows, and ATS integration require careful scoping.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best for enterprise outbound recruiting, talent rediscovery, and
      analytics-driven sourcing.
    </p>

    <h2 id="hiresweet">5. HireSweet — Best for European recruiting teams</h2>
    <p>
      <strong>Best for:</strong> Teams that want sourcing CRM, LinkedIn imports, ATS sync, and
      automated multichannel sequences.
    </p>
    <p>
      HireSweet positions itself as talent acquisition software that helps teams organize
      top-of-funnel activity, sync and refresh data across LinkedIn, CSV files, social media, ATS
      data, and resumes. Its software emphasizes LinkedIn, ATS, and CSV profile imports,
      automated multichannel sequences, and faster conversion of prospects into hires or
      placements.
    </p>
    <p>
      HireSweet is particularly relevant for teams that care about recruiter workflow quality. Its
      messaging focuses on making sourcing easier, more organized, and more enjoyable rather than
      only promising larger databases or autonomous AI agents. For the direct head-to-head, see
      our{" "}
      <Link
        href="/blog/truecalling-vs-hiresweet"
        className="text-accent underline-offset-4 hover:underline"
      >
        TrueCalling vs HireSweet comparison
      </Link>
      .
    </p>

    <h3>Pros</h3>
    <ul>
      <li>Strong recruiting CRM and outreach system around existing sourcing workflow.</li>
      <li>4.8/5 on G2 from 23 verified reviews.</li>
      <li>Native fit for European agency-style and in-house recruiting teams.</li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>
        Less differentiated for teams looking specifically for autonomous AI sourcing, massive
        open-web databases, or WhatsApp candidate qualification.
      </li>
      <li>Better framed as a sourcing CRM than as an end-to-end AI sourcing platform.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best for European and agency-style recruiting teams that want CRM,
      imports, and multichannel outreach workflows.
    </p>

    <h2 id="juicebox-peoplegpt">6. Juicebox / PeopleGPT — Best for natural-language sourcing</h2>
    <p>
      <strong>Best for:</strong> Recruiters who want to describe candidates in plain English and
      search across a large profile database.
    </p>
    <p>
      Juicebox&apos;s PeopleGPT is positioned as an AI recruiting search engine with 800M+
      candidate profiles from 30+ data sources. Its AI recruiting platform powers outbound
      sourcing with dynamic, multi-step sequences and reports up to 3× more replies.
    </p>
    <p>
      Juicebox is strongest when the recruiter wants to move away from Boolean-heavy search.
      Instead of manually stacking keywords, filters, and operators, recruiters can describe the
      target profile in natural language and let the platform return likely matches.
    </p>

    <h3>Pros</h3>
    <ul>
      <li>Conversational search — no Boolean syntax required.</li>
      <li>Large 800M+ candidate profile base.</li>
      <li>Good fit for technical and startup recruiting teams.</li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>Public third-party review data is harder to verify than Gem or hireEZ.</li>
      <li>
        Buyers should validate data coverage and contact accuracy on their own use cases before
        committing.
      </li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best for recruiters who want natural-language AI sourcing across a
      large global profile database.
    </p>

    <h2 id="mindhunt-ai">7. MindHunt AI — Best budget-friendly sourcing automation</h2>
    <p>
      <strong>Best for:</strong> Recruiters, agencies, and small teams that want AI sourcing,
      contact finding, and outreach without enterprise complexity.
    </p>
    <p>
      MindHunt AI helps recruiters source passive candidates from LinkedIn and GitHub, find
      verified emails and phone numbers, and create AI-personalized outreach. The platform
      searches 297M+ profiles and supports automated email and Telegram outreach, visual pipeline
      management, and contact discovery.
    </p>
    <p>
      MindHunt AI is a practical fit for teams that want sourcing automation but do not need a
      full ATS, enterprise CRM, or complex recruiting operations platform.
    </p>

    <h3>Pros</h3>
    <ul>
      <li>Clear value proposition: source, find contacts, send personalized outreach.</li>
      <li>Especially relevant for agencies, freelance recruiters, and lean hiring teams.</li>
      <li>Affordable entry point.</li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>Smaller platform than enterprise alternatives; less public third-party review data.</li>
      <li>Validate data coverage, contact accuracy, compliance, and integrations before signing.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best for small recruiting teams and agencies that want affordable
      AI sourcing plus contact finding.
    </p>

    <h2 id="pin">8. Pin — Best for startup sourcing workflows</h2>
    <p>
      <strong>Best for:</strong> Startups and lean recruiting teams that want a fast AI recruiting
      assistant.
    </p>
    <p>
      Pin positions itself as an AI recruiting platform. Its homepage cites a 4.8/5 average rating
      across 27 verified G2 reviews. Public review snippets emphasize ease of setup, workflow
      speed, candidate sourcing, segmentation, reporting, and support.
    </p>
    <p>
      Pin is also notable from an SEO perspective because it has invested in listicle content
      around the AI recruiting and sourcing category. That matters because the SERP for &quot;AI
      sourcing software&quot; has become listicle-heavy and product-only feature pages are less
      likely to match search intent.
    </p>

    <h3>Pros</h3>
    <ul>
      <li>Easy setup, fast time-to-value.</li>
      <li>Strong G2 reviews on workflow speed and usability.</li>
      <li>Right-sized for startups and lean teams.</li>
    </ul>

    <h3>Cons</h3>
    <ul>
      <li>Less appropriate for enterprises needing deep ATS governance and compliance workflows.</li>
      <li>Worth comparing against Gem and hireEZ if you need a broader operations layer.</li>
    </ul>

    <p>
      <strong>Verdict.</strong> Best for startups and lean teams that want an easy-to-use AI
      recruiting assistant.
    </p>

    <h2 id="how-to-choose">How to choose the best AI sourcing software</h2>
    <p>The right AI sourcing platform depends on your recruiting motion.</p>
    <ul>
      <li>
        Choose <strong>TrueCalling</strong> if you want AI sourcing, explainable matching,
        candidate scoring, and WhatsApp qualification in one workflow.
      </li>
      <li>
        Choose <strong>Gem</strong> if your team needs a broader recruiting platform with ATS,
        CRM, sourcing, scheduling, and analytics.
      </li>
      <li>
        Choose <strong>Fetcher</strong> if you want AI-supported candidate sourcing with managed
        help.
      </li>
      <li>
        Choose <strong>hireEZ</strong> if you need enterprise-grade open-web sourcing, CRM,
        rediscovery, analytics, and internal mobility.
      </li>
      <li>
        Choose <strong>HireSweet</strong> if your team wants a sourcing CRM with imports,
        automation, and multichannel sequences.
      </li>
      <li>
        Choose <strong>Juicebox / PeopleGPT</strong> if your recruiters want natural-language
        search across a large global candidate database.
      </li>
      <li>
        Choose <strong>MindHunt AI</strong> if you want a lighter-weight tool for sourcing,
        contact finding, and outreach.
      </li>
      <li>
        Choose <strong>Pin</strong> if you are a startup or lean team looking for a fast AI
        recruiting assistant.
      </li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What is AI sourcing software?</h3>
    <p>
      AI sourcing software helps recruiters identify, score, and engage candidates using machine
      learning rather than manual Boolean searches. Modern AI sourcing platforms combine semantic
      candidate search across public databases, contextual matching against a job brief, and
      multichannel outreach (email, WhatsApp, phone).
    </p>

    <h3>Is AI sourcing GDPR compliant?</h3>
    <p>
      It depends on the vendor and how the platform stores and processes candidate data. Most
      reputable AI sourcing platforms targeting the EU market — including TrueCalling — operate
      under GDPR with a clear legal basis, a data processing agreement (DPA), and respect for
      candidate opt-out requests. Always request the vendor&apos;s DPA and review their data
      retention policy before signing.
    </p>

    <h3>Can AI sourcing tools replace recruiters?</h3>
    <p>
      No. AI sourcing tools automate the repetitive parts of the funnel — initial search,
      scoring, first-touch outreach, follow-ups — but the recruiter still owns the brief, the
      arbitration, the candidate relationship, and the offer. The best teams treat AI as a copilot
      that frees recruiters for higher-value decisions.
    </p>

    <h3>What is the best AI sourcing tool for European recruiters?</h3>
    <p>
      For European teams, TrueCalling and HireSweet are the two most aligned with local market
      reality: native multilingual support, GDPR-first data handling, and integrations with the
      ATS commonly used in Europe (Lever, Greenhouse, Recruitee, Teamtailor, Workable).
      TrueCalling adds WhatsApp candidate engagement, which is a meaningful differentiator in
      France, Spain, Italy, and parts of EMEA.
    </p>

    <h3>How does AI sourcing work with LinkedIn?</h3>
    <p>
      Most AI sourcing platforms enrich LinkedIn data with additional signals (GitHub, Stack
      Overflow, conference talks, ATS history, public web data) to produce a fuller picture than
      LinkedIn alone. For teams considering moving away from LinkedIn Recruiter altogether, see
      our detailed{" "}
      <Link
        href="/blog/truecalling-vs-linkedin-recruiter"
        className="text-accent underline-offset-4 hover:underline"
      >
        TrueCalling vs LinkedIn Recruiter
      </Link>{" "}
      comparison.
    </p>

    <h2 id="final-recommendation">Final recommendation</h2>
    <p>
      For 2026, the best AI sourcing software should do more than return a list of profiles. The
      strongest tools help recruiters understand candidate fit, prioritize outreach, personalize
      engagement, and move qualified candidates into the hiring process faster.
    </p>
    <p>
      <strong>TrueCalling is the best overall choice</strong> because it combines AI sourcing,
      semantic matching, explainable candidate ranking, and WhatsApp-based qualification through
      EMILY™. That combination makes it especially compelling for teams that want to reduce
      manual sourcing and improve candidate engagement at the same time.
    </p>
    <p>
      To see TrueCalling on one of your open roles,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        book a demo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        See the #1 AI sourcing software live on one of your open roles
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Bring a real brief. We show you how EMILY surfaces 10 to 20 scored candidates and engages
        them on WhatsApp in under 10 minutes. Guided 20 to 30-minute demo.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article14Content: ReactNode = (
  <>
    <p>
      <strong>Passive candidate sourcing</strong> has become the #1 lever for Talent teams in 2026.
      When 73% of active professionals never spontaneously apply to posted jobs, relying on
      inbound applications means missing three-quarters of the market. This guide explains what
      passive sourcing really is in 2026, why AI changes everything, and the method to engage
      candidates who aren&apos;t looking.
    </p>

    <h2>Passive sourcing: a useful definition</h2>
    <p>
      <strong>Passive candidate sourcing</strong> means identifying and engaging candidates who
      aren&apos;t actively job-searching. Unlike active sourcing (which targets candidates already
      on the market — applying to a job, openly updating LinkedIn, sending a spontaneous CV),
      passive sourcing goes after profiles who are happy in their current role but potentially
      open to a great opportunity.
    </p>
    <p>
      It&apos;s the broadest and most strategic pool on the market: less competitive, higher
      quality, but also more demanding in method. Approaching a senior developer happy at their
      scale-up has nothing in common with re-contacting a candidate who applied yesterday.
    </p>

    <h2>The 4 levels of candidate intent</h2>
    <p>
      Before talking method, you need to distinguish 4 segments inside the passive pool:
    </p>
    <ol>
      <li>
        <strong>Firmly happy.</strong> No intention to move, with negative signals (recent
        promotion, scope change, side project tied to current job). Skip in short outreach
        campaigns.
      </li>
      <li>
        <strong>Satisfied-curious.</strong> Not looking, but open to a spectacular opportunity.
        ~40% of the passive pool. The main target for AI sourcing in 2026.
      </li>
      <li>
        <strong>Latent.</strong> Growing frustration without active search. Weak signals: sudden
        increase in open-source commits, external conference talks, discreet LinkedIn profile
        updates. Hot target.
      </li>
      <li>
        <strong>Hidden active.</strong> Searching but not showing it (afraid of being spotted by
        their employer). 18% of the pool. Reacts very quickly to a well-crafted message.
      </li>
    </ol>
    <p>
      A modern AI sourcing platform distinguishes these 4 levels by crossing public signals
      (LinkedIn, GitHub, conferences, profile updates) and ML inferences. That&apos;s what the
      TrueFit 360 score does: for each candidate, it estimates not only relevance to the role but
      also intent level. For the methodology, see our piece on the{" "}
      <Link
        href="/blog/candidate-job-matching-score-ai"
        className="text-accent underline-offset-4 hover:underline"
      >
        candidate-job matching score
      </Link>
      .
    </p>

    <h2>Why AI changes everything in 2026</h2>
    <p>
      Passive sourcing 2018-style — a recruiter, Boolean search on LinkedIn, copy-paste of the
      same InMail to 100 profiles — no longer works. Three reasons:
    </p>
    <ol>
      <li>
        <strong>InMail saturation.</strong> Average reply rate dropped from 22% in 2018 to 8% in
        2026. Tech profiles receive 12 to 18 InMails a week.
      </li>
      <li>
        <strong>Channel explosion.</strong> WhatsApp, work email, GitHub, conferences, podcasts: a
        passive candidate has 4 to 6 active channels on average, but mainly replies on their
        personal favorite.
      </li>
      <li>
        <strong>Personalization expectation.</strong> A message saying &quot;Hi Pierre, I saw
        your profile&quot; instantly signals the bot. The best reply rates now come from messages
        referencing a recent and specific signal (commit, talk, publication).
      </li>
    </ol>
    <p>
      AI solves all three at once: it finds the right channel candidate by candidate, reads public
      signals to personalize at scale, and avoids saturated channels. On WhatsApp, average open
      rate stays at 90% versus 20% for email — a gap that changes everything in passive sourcing.
    </p>

    <h2>The TrueCalling method in 5 steps</h2>

    <h3>Step 1 — Describe the ideal profile in natural language (3 min)</h3>
    <p>
      No more Boolean. You describe the role as if talking to a teammate: seniority, stack, sector,
      &quot;type of person&quot; (startup vs scale-up, manager vs IC, etc.). EMILY translates it
      into a semantic multi-source query.
    </p>

    <h3>Step 2 — Let AI explore 1.2 billion profiles (5 min)</h3>
    <p>
      The engine doesn&apos;t stop at LinkedIn. It cross-references GitHub, Stack Overflow,
      conference talks, press mentions, and enriched databases. That&apos;s critical for passive
      sourcing: the best profiles are rarely very active on LinkedIn.
    </p>

    <h3>Step 3 — Filter on intent, not just relevance</h3>
    <p>
      This step separates amateur passive sourcing from professional. You keep profiles that are{" "}
      <strong>relevant</strong> AND <strong>scored as satisfied-curious or latent</strong>. The
      &quot;firmly happy&quot; stay in the pool but get nothing right away.
    </p>

    <h3>Step 4 — Personalize on a recent signal, not on job title</h3>
    <p>
      For each candidate on your shortlist, EMILY identifies a <strong>recent and specific
      signal</strong>: commit on this open-source repo last week, talk at this conference,
      published article, discreet profile update. The first message references that signal —
      that&apos;s what turns a bot-like message into a human conversation.
    </p>

    <h3>Step 5 — Multichannel and patient</h3>
    <p>
      A passive candidate doesn&apos;t reply within 24 hours. The typical converting sequence in
      2026: WhatsApp (D0) → silence → email (D5) → silence → short WhatsApp nudge (D12). Stop on
      the first positive reply. To go deeper, see{" "}
      <Link
        href="/blog/multichannel-sourcing-beyond-linkedin"
        className="text-accent underline-offset-4 hover:underline"
      >
        multichannel sourcing beyond LinkedIn
      </Link>
      .
    </p>

    <h2>Real-world case: Senior Platform Engineer sourced in 6 days</h2>
    <p>
      A French B2B SaaS scale-up needs a Senior Platform Engineer Kubernetes, 7+ years experience,
      happy at a Paris-based scale-up. 100% passive sourcing:
    </p>
    <ul>
      <li>Brief typed in 3 minutes.</li>
      <li>EMILY returns 287 relevant profiles, 41 scored satisfied-curious/latent.</li>
      <li>The recruiter keeps 15 priority profiles.</li>
      <li>EMILY drafts 15 WhatsApp messages referencing a recent signal.</li>
      <li>9 positive replies in 72 hours.</li>
      <li>5 interviews launched.</li>
      <li>Offer accepted 6 days after the first message.</li>
    </ul>
    <p>
      None of those 15 candidates had applied to the client. None were actively searching. The
      role was filled without publishing a single public job.
    </p>

    <h2>The 4 mistakes that kill passive sourcing</h2>
    <ol>
      <li>
        <strong>Identical templates across the shortlist.</strong> Passive candidates spot it
        instantly. Reply rate divided by 4.
      </li>
      <li>
        <strong>Too-direct opening.</strong> &quot;We&apos;re hiring a Senior Engineer at X, want
        in?&quot; — a passive candidate isn&apos;t in application mode, they shut down. Better:
        context, signal, open question.
      </li>
      <li>
        <strong>Pressure and aggressive follow-ups.</strong> A satisfied-curious candidate needs
        time. More than 3 messages without a reply = stop.
      </li>
      <li>
        <strong>Ignoring the preferred channel.</strong> Keeping on InMailing a developer who
        doesn&apos;t open LinkedIn anymore is wasted time. Testing WhatsApp and work email changes
        everything.
      </li>
    </ol>

    <h2>Measuring passive sourcing campaign performance</h2>
    <p>
      KPIs differ from active sourcing. What to track:
    </p>
    <ul>
      <li>
        <strong>Positive reply rate</strong>: target {">"} 35% in well-run AI passive sourcing,
        vs 12% in manual passive sourcing.
      </li>
      <li>
        <strong>Open rate by channel</strong>: WhatsApp {">"} 85%, work email {">"} 35%, LinkedIn
        InMail {">"} 15%.
      </li>
      <li>
        <strong>Median time to first interview</strong>: target {"<"} 8 days.
      </li>
      <li>
        <strong>Unsubscribe / complaint rate</strong>: must stay {"<"} 1%.
      </li>
      <li>
        <strong>Candidate Net Promoter Score</strong>: ask them after the process.
      </li>
    </ul>

    <h2>Passive sourcing and GDPR: what to respect</h2>
    <p>
      Reaching a passive candidate via their professional contact details is legitimate under
      GDPR (legitimate interest + recruiting purpose), provided you:
    </p>
    <ol>
      <li>
        Mention the source clearly on first contact (&quot;I saw your profile on LinkedIn /
        GitHub / etc.&quot;).
      </li>
      <li>Offer an immediate and visible opt-out.</li>
      <li>
        Do not store data beyond what&apos;s necessary (typically 12 months after the last
        interaction).
      </li>
      <li>Be able to handle an access / deletion request within 30 days.</li>
    </ol>
    <p>
      For the compliance angle, see our piece on{" "}
      <Link
        href="/blog/whatsapp-recruiting-gdpr-2026"
        className="text-accent underline-offset-4 hover:underline"
      >
        WhatsApp recruiting and GDPR
      </Link>
      .
    </p>

    <h2>Conclusion: passive sourcing has become sourcing, period</h2>
    <p>
      In 2026, distinguishing passive from active sourcing makes less and less sense. The best
      Talent teams treat <strong>every</strong> candidate as passive by default: strong
      personalization, multichannel, patience, respect for the intent signal. That&apos;s what
      takes reply rates from 8% to 35%+ and time-to-hire from 35 days to 18 days.
    </p>
    <p>
      To see TrueCalling source passive candidates on one of your real roles,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        book a demo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Reach candidates who aren&apos;t looking, on one of your real roles
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        We show you how EMILY identifies satisfied-curious passive candidates, personalizes the
        first message on a recent signal, and starts the conversation on WhatsApp. Guided 20–30
        min demo.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

const Article15Content: ReactNode = (
  <>
    <p>
      AI recruiting left the &quot;hype and experimentation&quot; phase in 2024 and entered mass
      production in 2026. Talent teams still on 2022 methods now pay a visible cost: time-to-hire
      twice as long, reply rates divided by three, profiles lost to equipped competitors. Here are
      the 7 moves you need to know not to fall behind this year.
    </p>

    <h2>1. The end of InMail as the dominant channel</h2>
    <p>
      The 2026 numbers are clear: LinkedIn InMail average reply rate dropped to 8%, vs 22% in
      2018. Tech profiles receive 12 to 18 InMails a week — nobody really opens them anymore.
      Conversely, WhatsApp posts a 90% open rate on well-crafted recruiting messages.
    </p>
    <p>
      The shift isn&apos;t in progress: it&apos;s done. Teams still 100% LinkedIn in 2026 capture
      candidates already saturated by everyone else. For the mechanics, see our{" "}
      <Link
        href="/blog/multichannel-sourcing-beyond-linkedin"
        className="text-accent underline-offset-4 hover:underline"
      >
        multichannel sourcing
      </Link>{" "}
      piece.
    </p>

    <h2>2. AI copilot replaces autonomous AI agent</h2>
    <p>
      2024 saw a flood of promises around autonomous <strong>AI agents</strong> that source,
      qualify, and hire on your behalf. By 2026 the pendulum swung back: the best Talent teams
      learned that total autonomy produces costly errors (poorly qualified candidates, bot-like
      messages, undetected bias) and prefer the <strong>copilot</strong> model: AI does 80% of the
      repetitive work, the recruiter keeps final arbitration.
    </p>
    <p>
      That&apos;s exactly the EMILY positioning at TrueCalling. For the nuance, see our{" "}
      <Link
        href="/blog/ai-sourcing-agent-new-standard"
        className="text-accent underline-offset-4 hover:underline"
      >
        AI sourcing agent
      </Link>{" "}
      piece.
    </p>

    <h2>3. Explainable matching becomes the norm</h2>
    <p>
      AI sourcing tools that scored candidates without explaining how get ejected in 2026. Three
      forces converge:
    </p>
    <ul>
      <li>
        <strong>EU AI Act regulatory pressure</strong>: candidate scoring systems are classified
        &quot;high risk&quot; and must be auditable.
      </li>
      <li>
        <strong>Recruiter demand</strong>: impossible to defend a shortlist to the hiring manager
        if you can&apos;t explain why a candidate is at 87/100.
      </li>
      <li>
        <strong>Legal risk</strong>: undetectable bias in an opaque system creates significant
        discrimination exposure.
      </li>
    </ul>
    <p>
      TrueFit 360 answers this requirement: every score line unfolds line by line. See our{" "}
      <Link
        href="/blog/candidate-job-matching-score-ai"
        className="text-accent underline-offset-4 hover:underline"
      >
        candidate-job matching score
      </Link>{" "}
      piece.
    </p>

    <h2>4. Passive sourcing becomes default sourcing</h2>
    <p>
      73% of active professionals never apply to posted jobs. Betting on inbound applications in
      2026 means giving up three-quarters of the market. All high-performing Talent teams now
      treat <strong>every candidate as passive by default</strong>: strong personalization,
      multichannel, patience, respect for the intent signal. For the deep dive, see our{" "}
      <Link
        href="/blog/passive-candidate-sourcing"
        className="text-accent underline-offset-4 hover:underline"
      >
        passive candidate sourcing
      </Link>{" "}
      guide.
    </p>

    <h2>5. WhatsApp takes over email for candidate outreach</h2>
    <p>
      In 2026, WhatsApp is no longer an &quot;emerging&quot; channel: it&apos;s <strong>the main
      channel</strong> for first candidate contact in the European market. Consolidated numbers:
    </p>
    <ul>
      <li>90% open rate (vs 20% email, 8% InMail).</li>
      <li>Median reply under 4 hours (vs 32 hours email, 5 days InMail).</li>
      <li>Positive reply rate 3× higher on WhatsApp vs work email for the same candidate.</li>
    </ul>
    <p>
      GDPR doesn&apos;t block WhatsApp in recruiting, it frames it. For the rules to respect, see
      our{" "}
      <Link
        href="/blog/whatsapp-recruiting-gdpr-2026"
        className="text-accent underline-offset-4 hover:underline"
      >
        WhatsApp recruiting and GDPR
      </Link>{" "}
      piece.
    </p>

    <h2>6. ATS + AI sourcing consolidation accelerates</h2>
    <p>
      Talent teams running an ATS (Greenhouse, Lever, Recruitee) and a siloed sourcing tool
      figured out in 2026 that the hidden cost of non-integration is huge: 35% of candidates
      sourced twice, 4 to 8 weekly hours of manual reconciliation, non-trivial GDPR risk.
    </p>
    <p>
      The 2026 standard: AI sourcing <strong>natively integrated to the ATS</strong> via API
      (Harvest for Greenhouse, REST API for Lever, etc.), bidirectional sync, automatic dedup,
      GDPR opt-outs synced. For the rollout,{" "}
      <Link
        href="/blog/ats-integration-ai-sourcing-greenhouse-lever"
        className="text-accent underline-offset-4 hover:underline"
      >
        our ATS integration guide
      </Link>{" "}
      details the 4-week plan.
    </p>

    <h2>7. Regional pricing and price transparency rise</h2>
    <p>
      Over 2024-2025, recruiting SaaS vendors ran a single global price grid (often US-based). In
      2026, pressure from European, APAC, and Africa buyers forced the adoption of{" "}
      <strong>regional pricing</strong>: Europe at USD/EUR parity, APAC mid-tier, Africa
      significantly below. Price transparency also progresses: public pricing pages with hard
      numbers (not just &quot;contact us&quot;) went from 30% to 65% of category tools in 18
      months.
    </p>

    <h2>Bonus: 3 moves to watch for 2027</h2>
    <ul>
      <li>
        <strong>Real-time candidate intent scoring</strong>: predicting the probability that a
        satisfied-curious candidate becomes active within 90 days, from public signals.
      </li>
      <li>
        <strong>Automated voice outreach</strong>: early tests of voice AI agents for first
        candidate contact show promising results in some verticals (field, retail).
      </li>
      <li>
        <strong>EU AI Act fully enforced</strong>: from August 2027, transparency and audit
        obligations become enforceable. Non-compliant tools will be banned from the EU market.
      </li>
    </ul>

    <h2>Conclusion: 2026 is the production year</h2>
    <p>
      If 2024 was experimentation and 2025 was early adopters, 2026 is the year AI recruiting
      becomes the B2B SaaS standard. Sticking to older methods costs you visibly now: missed
      candidates, overwhelmed Talent teams, drifting time-to-hire. The 7 moves above aren&apos;t
      optional — they&apos;re prerequisites to staying competitive.
    </p>
    <p>
      To see how TrueCalling combines the 7 moves into a single workflow,{" "}
      <Link href="/" className="text-accent underline-offset-4 hover:underline">
        book a demo
      </Link>
      .
    </p>

    <div className="not-prose mt-12 rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md">
      <div className="text-[11px] uppercase tracking-[0.2em] text-accent">Take action</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
        Bring your stack to the 2026 baseline on one of your real roles
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
        Bring a real brief. We show you the 7 moves in action: AI copilot, explainable matching,
        passive sourcing, WhatsApp, ATS integration. Guided 20–30 min demo.
      </p>
      <div className="mt-5">
        <Link
          href="/book-a-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </>
);

export const articles: Article[] = [
  {
    slug: "passive-candidate-sourcing",
    canonicalId: "passive-candidate-sourcing-2026",
    title: "Passive Candidate Sourcing in 2026: How to Reach Candidates Who Aren't Looking",
    description:
      "Passive candidate sourcing with AI: the TrueCalling 5-step method to identify and engage satisfied-but-open candidates, with a real-world Senior Platform Engineer sourced in 6 days.",
    excerpt:
      "73% of active professionals never apply. The complete method to reach them anyway: 4 intent levels, recent signal, WhatsApp, and 35%+ reply rate.",
    keyword: "passive candidate sourcing",
    category: "AI Sourcing",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    homepageAnchor: "Source passive candidates with TrueCalling",
    content: Article14Content,
  },
  {
    slug: "ai-recruiting-trends-2026",
    canonicalId: "ai-recruiting-trends-2026",
    title: "AI Recruiting Trends 2026: 7 Moves to Know to Stay Ahead",
    description:
      "7 AI recruiting trends in 2026: end of InMail, copilot vs AI agent, explainable matching, passive sourcing by default, WhatsApp, native ATS integration, regional pricing.",
    excerpt:
      "2026 is the mass-production year for AI recruiting. The 7 moves to know to stay competitive, and the 3 to watch for 2027.",
    keyword: "AI recruiting trends 2026",
    category: "AI Sourcing",
    publishedAt: "2026-05-12",
    readingMinutes: 8,
    homepageAnchor: "See the 7 2026 moves in action with TrueCalling",
    content: Article15Content,
  },
  {
    slug: "best-ai-sourcing-software-2026",
    canonicalId: "best-ai-sourcing-software-2026",
    title: "Best AI Sourcing Software in 2026: 8 Tools Compared",
    description:
      "Compare the best AI sourcing software for 2026 — TrueCalling, Gem, Fetcher, hireEZ, HireSweet, Juicebox PeopleGPT, MindHunt AI and Pin. Verdicts, pros, cons, and which one fits your team.",
    excerpt:
      "8 AI sourcing tools compared on features, GDPR readiness, multichannel engagement and pricing. TrueCalling is the best overall pick — here's why, and when the others win.",
    keyword: "AI sourcing software",
    category: "Comparisons",
    publishedAt: "2026-05-12",
    readingMinutes: 12,
    homepageAnchor: "See the #1 AI sourcing software in action",
    content: Article13Content,
  },
  {
    slug: "generate-candidate-shortlist-ai-10-minutes",
    canonicalId: "generate-candidate-shortlist-ai",
    title: "How to Generate a Candidate Shortlist With AI in Under 10 Minutes: The Complete Method",
    description:
      "Generate an AI candidate shortlist in 10 minutes: a 4-step method, a real-world Senior PM case in 8 minutes, and the 3 mistakes that ruin a shortlist.",
    excerpt:
      "From brief to 14 scored candidates in 8 minutes: the complete method to generate an actionable AI candidate shortlist, without drowning in noise.",
    keyword: "generate candidate shortlist",
    category: "AI Sourcing",
    publishedAt: "2026-05-11",
    readingMinutes: 7,
    homepageAnchor: "Generate my first shortlist with TrueCalling",
    content: Article11Content,
  },
  {
    slug: "ats-integration-ai-sourcing-greenhouse-lever",
    canonicalId: "ats-integration-ai-sourcing",
    title: "ATS Integration and AI Sourcing: How to Connect Greenhouse, Lever or Recruitee Without Breaking Your Process",
    description:
      "ATS integration for AI sourcing: what a good integration must do, what changes with Greenhouse, Lever, Recruitee, Teamtailor and Workable, and a 4-week integration plan.",
    excerpt:
      "A well-built ATS sourcing integration recovers 4 weekly hours per recruiter and takes time-to-hire from 38 to 24 days. The complete 2026 guide.",
    keyword: "ATS integration sourcing",
    category: "Tooling",
    publishedAt: "2026-05-05",
    readingMinutes: 7,
    homepageAnchor: "See the TrueCalling ATS integration",
    content: Article12Content,
  },
  {
    slug: "ai-sourcing-guide-2026",
    canonicalId: "ai-sourcing-guide-2026",
    title: "AI Sourcing in 2026: The Complete Guide for Recruiters (Methods, Tools, Examples)",
    description:
      "AI sourcing in 2026: methods, tools, real-world examples, matching scores, and the recommended stack to hire twice as fast without sacrificing quality.",
    excerpt:
      "The complete guide to AI sourcing in 2026: proven methods, tools to know, and a detailed walkthrough on a hard-to-fill tech role.",
    keyword: "AI sourcing",
    category: "AI Sourcing",
    publishedAt: "2026-04-22",
    readingMinutes: 8,
    homepageAnchor: "See the AI sourcing software TrueCalling",
    content: Article1Content,
  },
  {
    slug: "whatsapp-recruiting-gdpr-2026",
    canonicalId: "whatsapp-recruiting-gdpr-2026",
    title: "WhatsApp Recruiting: How to Use It Without GDPR Risk (2026 Guide)",
    description:
      "WhatsApp recruiting and GDPR: rules, tooling, and concrete examples to capture 90 % open rates without risking a CNIL audit in 2026.",
    excerpt:
      "90 % open rate on WhatsApp vs 20% on email: the GDPR rules and tooling to take advantage of it risk-free in 2026.",
    keyword: "WhatsApp recruiting",
    category: "Outreach",
    publishedAt: "2026-03-18",
    readingMinutes: 8,
    homepageAnchor: "Try WhatsApp outreach inside TrueCalling",
    content: Article2Content,
  },
  {
    slug: "ai-copilot-for-recruiters-daily",
    canonicalId: "ai-copilot-for-recruiters-daily",
    title: "AI Copilot for Recruiters: What It Really Changes Day-to-Day",
    description:
      "AI recruiting copilot: what really changes in a recruiter's day, which tasks to automate, which to keep human, and the measured time savings.",
    excerpt:
      "A day with and without an AI recruiting copilot: 8 to 12 hours saved per week and a role refocused on the decisions that actually matter.",
    keyword: "AI recruiting copilot",
    category: "AI Sourcing",
    publishedAt: "2026-02-25",
    readingMinutes: 7,
    homepageAnchor: "Discover EMILY, the TrueCalling AI copilot",
    content: Article3Content,
  },
  {
    slug: "truecalling-vs-hiresweet",
    canonicalId: "truecalling-vs-hiresweet",
    title: "TrueCalling vs HireSweet: Which Sourcing Software for Your Talent Team?",
    description:
      "HireSweet alternative: factual TrueCalling vs HireSweet comparison on sourcing, matching, channels, ATS, pricing, and use cases in 2026.",
    excerpt:
      "TrueCalling vs HireSweet: comparison table, concrete case on a Senior Backend Go, and the criteria for choosing a HireSweet alternative.",
    keyword: "HireSweet alternative",
    category: "Comparisons",
    publishedAt: "2026-01-28",
    readingMinutes: 7,
    homepageAnchor: "Book a TrueCalling demo",
    content: Article4Content,
  },
  {
    slug: "truecalling-vs-linkedin-recruiter",
    canonicalId: "truecalling-vs-linkedin-recruiter",
    title: "TrueCalling vs LinkedIn Recruiter: Limits, Alternatives and Use Cases",
    description:
      "LinkedIn Recruiter alternative: Recruiter's limits in 2026, a TrueCalling vs LinkedIn Recruiter comparison and a 4-week migration plan.",
    excerpt:
      "Why LinkedIn Recruiter is no longer enough in 2026, a detailed TrueCalling comparison and a concrete 4-week migration plan.",
    keyword: "LinkedIn Recruiter alternative",
    category: "Comparisons",
    publishedAt: "2026-01-08",
    readingMinutes: 7,
    homepageAnchor: "Book a TrueCalling demo",
    content: Article5Content,
  },
  {
    slug: "candidate-job-matching-score-ai",
    canonicalId: "candidate-job-matching-score-ai",
    title: "Candidate-Job Matching Score: How AI Evaluates (and Where It Goes Wrong)",
    description:
      "Candidate matching score: how AI calculates fit, what TrueFit 360 measures, biases to watch for and how to evaluate a score before you buy.",
    excerpt:
      "How a candidate matching score works, what TrueFit 360 evaluates and the pitfalls to avoid before buying a tool.",
    keyword: "candidate matching score",
    category: "Methodology",
    publishedAt: "2025-12-12",
    readingMinutes: 7,
    homepageAnchor: "See TrueFit 360 in action",
    content: Article6Content,
  },
  {
    slug: "time-to-hire-7-levers-2026",
    canonicalId: "time-to-hire-7-levers-2026",
    title: "Time-to-hire: 7 concrete levers to cut it in half in 2026",
    description:
      "Reduce time-to-hire: 7 concrete, quantified levers to go from 35 days to under 22, without overhauling your entire recruiting process.",
    excerpt:
      "7 quantified levers to cut time-to-hire from 35 to 20 days in 2026, with a real-world case on a Senior Product Manager role.",
    keyword: "reduce time-to-hire",
    category: "Methodology",
    publishedAt: "2025-11-20",
    readingMinutes: 8,
    homepageAnchor: "Calculate my time savings with TrueCalling",
    content: Article7Content,
  },
  {
    slug: "multichannel-sourcing-beyond-linkedin",
    canonicalId: "multichannel-sourcing-beyond-linkedin",
    title: "Multichannel sourcing: why LinkedIn alone isn&apos;t enough (and what to pair it with)",
    description:
      "Multichannel sourcing: why LinkedIn alone is no longer enough in 2026, the 5 channels to activate, and the typical sequence that converts at 57%.",
    excerpt:
      "InMail saturation, 90 % open rate on WhatsApp: the method to orchestrate multichannel sourcing that converts in 2026.",
    keyword: "multichannel sourcing",
    category: "Outreach",
    publishedAt: "2025-10-30",
    readingMinutes: 7,
    homepageAnchor: "Activate multichannel outreach on TrueCalling",
    content: Article8Content,
  },
  {
    slug: "ai-sourcing-agent-new-standard",
    canonicalId: "ai-sourcing-agent-new-standard",
    title: "AI sourcing agent: the new standard for recruiting?",
    description:
      "AI sourcing agent: what these agents can actually do in 2026, their limits, the distinction with an AI copilot, and the 5 questions to ask before choosing one.",
    excerpt:
      "AI sourcing agent: what agents can (and can&apos;t) do, and why the future belongs to hybrid copilots like EMILY.",
    keyword: "AI sourcing agent",
    category: "AI Sourcing",
    publishedAt: "2025-10-08",
    readingMinutes: 7,
    homepageAnchor: "Try the TrueCalling AI agent",
    content: Article9Content,
  },
  {
    slug: "automate-sourcing-without-dehumanizing",
    canonicalId: "automate-sourcing-without-dehumanizing",
    title: "How to automate candidate sourcing without dehumanizing the process",
    description:
      "Automate sourcing without dehumanizing: 5 rules to personalize at scale, GDPR compliance, and the warning signs that you&apos;ve pushed it too far.",
    excerpt:
      "Automate sourcing without falling into bot-like outreach: 5 concrete rules and a real-world case on 200 candidates contacted in 48 hours.",
    keyword: "automate sourcing",
    category: "Methodology",
    publishedAt: "2025-09-15",
    readingMinutes: 7,
    homepageAnchor: "Book a TrueCalling demo",
    content: Article10Content,
  },
];
