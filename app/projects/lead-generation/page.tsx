"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./lead-generation.module.css";

type Stage = {
  number: string;
  label: string;
  title: string;
  statement: string;
  explanation: string;
  outcome: string;
  image: string;
};

const assets = {
  overview: "/images/projects/funnels/lead-generation-overview.png",
  architecture:
    "/images/projects/funnels/lead-generation-architecture.png",

  traffic: "/images/projects/funnels/lead-generation-traffic.png",
  capture: "/images/projects/funnels/lead-generation-capture.png",
  qualify: "/images/projects/funnels/lead-generation-qualify.png",
  route: "/images/projects/funnels/lead-generation-route.png",
  automation:
    "/images/projects/funnels/lead-generation-automation.png",
  convert: "/images/projects/funnels/lead-generation-convert.png",
  deliver: "/images/projects/funnels/lead-generation-deliver.png",
  measure: "/images/projects/funnels/lead-generation-measure.png",

  contentoJourney:
    "/images/projects/funnels/lead-generation-contento-journey.png",
  booking: "/images/projects/funnels/lead-generation-booking.png",

  realTasking:
    "/images/projects/funnels/lead-generation-real-tasking.png",
  contento:
    "/images/projects/funnels/lead-generation-contento.png",
  fiveStarHost:
    "/images/projects/funnels/lead-generation-five-star-host.png",

  optimization:
    "/images/projects/funnels/lead-generation-optimization.png",
};

const stages: Stage[] = [
  {
    number: "01",
    label: "TRAFFIC",
    title: "Where attention begins.",
    statement:
      "Every acquisition system starts somewhere — an advert, a social post, a website or another digital touchpoint.",
    explanation:
      "The first responsibility is understanding where attention originates and making sure that traffic has a deliberate next step rather than simply landing on a page.",
    outcome:
      "A defined entry point gives the rest of the journey something measurable to work from.",
    image: assets.traffic,
  },
  {
    number: "02",
    label: "CAPTURE",
    title: "Turn attention into information.",
    statement:
      "A visitor becomes useful to the business when the right information can be captured.",
    explanation:
      "Landing pages, website forms and Meta Instant Forms can collect the information required to begin a structured customer journey.",
    outcome:
      "The business receives structured lead data instead of disconnected enquiries.",
    image: assets.capture,
  },
  {
    number: "03",
    label: "QUALIFY",
    title: "Make the information useful.",
    statement:
      "Not every enquiry should enter the same process.",
    explanation:
      "Captured information can be structured through fields, tags, source information and qualification criteria so that the business understands what has entered the system.",
    outcome:
      "The lead becomes an identifiable record rather than an isolated form submission.",
    image: assets.qualify,
  },
  {
    number: "04",
    label: "ROUTE",
    title: "Put the lead in the right place.",
    statement:
      "Good systems remove the question of where a new enquiry should go.",
    explanation:
      "CRM pipelines, tags, notifications and routing logic can move information into the operational area where it needs attention.",
    outcome:
      "The right information reaches the right process without unnecessary manual handling.",
    image: assets.route,
  },
  {
    number: "05",
    label: "AUTOMATE",
    title: "Remove repetitive work.",
    statement:
      "Once the journey is structured, repetitive actions can become system actions.",
    explanation:
      "Emails, internal notifications, follow-ups, status changes and other repeatable actions can be triggered by events inside the journey.",
    outcome:
      "The system continues working between human interactions.",
    image: assets.automation,
  },
  {
    number: "06",
    label: "CONVERT",
    title: "Move toward a real business outcome.",
    statement:
      "A lead is not the final objective.",
    explanation:
      "The acquisition journey should ultimately move people toward an action that matters to the business — a conversation, appointment, booking, purchase or another defined outcome.",
    outcome:
      "Marketing activity becomes connected to something the business can actually act upon.",
    image: assets.convert,
  },
  {
    number: "07",
    label: "DELIVER",
    title: "Continue beyond conversion.",
    statement:
      "The system should not disappear after the customer says yes.",
    explanation:
      "For service businesses, the journey can continue through booking, client communication, service delivery, client spaces, follow-up and feedback.",
    outcome:
      "The acquisition system becomes part of the customer experience rather than a disconnected marketing layer.",
    image: assets.deliver,
  },
  {
    number: "08",
    label: "MEASURE",
    title: "Understand what happened.",
    statement:
      "A system becomes more valuable when its results can be observed.",
    explanation:
      "Tracking sources, stages, responses, bookings and outcomes creates a feedback loop that can inform future campaigns and system improvements.",
    outcome:
      "The next iteration can be informed by what the previous one revealed.",
    image: assets.measure,
  },
];

function ImageEvidence({
  src,
  label,
  caption,
  className = "",
}: {
  src: string;
  label: string;
  caption: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`${styles.evidence} ${className}`}>
      <div className={styles.evidenceTop}>
        <span>{label}</span>
        <span>PROJECT EVIDENCE</span>
      </div>

      <div className={styles.imageFrame}>
        {!failed ? (
          <Image
            src={src}
            alt={caption}
            fill
            sizes="(max-width: 900px) 100vw, 70vw"
            className={styles.projectImage}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderIndex}>IMAGE</span>
            <strong>{label}</strong>
            <small>{src.split("/").pop()}</small>
          </div>
        )}
      </div>

      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function StageVisual({ stage }: { stage: Stage }) {
  return (
    <div className={styles.stageVisual}>
      <div className={styles.stageVisualHeader}>
        <span>VISUAL EVIDENCE</span>
        <span>{stage.number} / 08</span>
      </div>

      <div className={styles.stageImage}>
        <ImageEvidence
          src={stage.image}
          label={stage.label}
          caption={`${stage.label} — ${stage.title}`}
        />
      </div>
    </div>
  );
}

export default function LeadGenerationPage() {
  const [activeStage, setActiveStage] = useState(0);

  const currentStage = stages[activeStage];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroArchitecture}>
          <span className={styles.heroLineOne} />
          <span className={styles.heroLineTwo} />
          <span className={styles.heroCircle} />
          <span className={styles.heroDiagonal} />
          <span className={styles.heroCorner} />
        </div>

        <div className={styles.heroTop}>
          <span>06 — ACQUISITION SYSTEM</span>
          <span>JAN WORKS.</span>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.blueDot} />
            LEAD GENERATION · FUNNELS · CRM · AUTOMATION
          </div>

          <h1>
            LEAD
            <span>GENERATION.</span>
          </h1>

          <div className={styles.heroBottom}>
            <p>
              Acquisition systems designed to connect attention, lead capture,
              CRM, automation and the customer journey into one clear process.
            </p>

            <a href="#system" className={styles.heroLink}>
              <span>EXPLORE THE SYSTEM</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className={styles.heroFooter}>
          <span>ACQUISITION SYSTEM / 06</span>
          <span>OPERATIONS · SYSTEMS · TECHNOLOGY</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={`${styles.section} ${styles.introduction}`}>
        <div className={styles.sectionMeta}>
          <span>01 — INTRODUCTION</span>
          <span>THE PRINCIPLE</span>
        </div>

        <div className={styles.introGrid}>
          <div>
            <p className={styles.eyebrow}>THE LEAD IS ONLY THE START.</p>

            <h2>
              A funnel becomes
              <br />
              valuable when the
              <span> journey works.</span>
            </h2>
          </div>

          <div className={styles.introCopy}>
            <p>
              Lead generation is not simply about putting a form at the end of
              an advert. It is about designing what happens before the form,
              inside the CRM and after the information enters the business.
            </p>

            <p>
              I approach acquisition as a connected system: where attention
              originates, what information is captured, how it is qualified,
              where it is routed, what happens automatically and how the
              customer eventually reaches a meaningful business outcome.
            </p>

            <div className={styles.statementLine}>
              <span>01</span>
              <strong>
                I DESIGN ACQUISITION SYSTEMS — NOT JUST FUNNELS.
              </strong>
            </div>
          </div>
        </div>

        <ImageEvidence
          src={assets.overview}
          label="SYSTEM OVERVIEW"
          caption="A visual overview of the acquisition journey — from initial attention through CRM, automation and eventual customer action."
        />
      </section>

      {/* ARCHITECTURE */}
      <section
        id="system"
        className={`${styles.section} ${styles.architectureSection}`}
      >
        <div className={styles.sectionMeta}>
          <span>02 — SYSTEM ARCHITECTURE</span>
          <span>ATTENTION → OUTCOME</span>
        </div>

        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>FROM ATTENTION TO OUTCOME.</p>
            <h2>
              Eight connected
              <br />
              movements.
            </h2>
          </div>

          <p>
            Each stage has a responsibility. Together they create a journey
            that can be understood, operated and improved.
          </p>
        </div>

        <div className={styles.architectureRail}>
          {stages.map((stage, index) => (
            <button
              key={stage.number}
              className={`${styles.stageButton} ${
                activeStage === index ? styles.stageButtonActive : ""
              }`}
              onClick={() => setActiveStage(index)}
              onMouseEnter={() => setActiveStage(index)}
              type="button"
            >
              <span>{stage.number}</span>
              <strong>{stage.label}</strong>
            </button>
          ))}
        </div>

        <div className={styles.stageDetail}>
          <div className={styles.stageText}>
            <div className={styles.stageNumber}>{currentStage.number}</div>

            <p className={styles.eyebrow}>{currentStage.label}</p>

            <h3>{currentStage.title}</h3>

            <p className={styles.stageStatement}>
              {currentStage.statement}
            </p>

            <p className={styles.stageExplanation}>
              {currentStage.explanation}
            </p>

            <div className={styles.outcome}>
              <span>WHAT THIS CREATES</span>
              <p>{currentStage.outcome}</p>
            </div>
          </div>

          <StageVisual stage={currentStage} />
        </div>
      </section>

      {/* ARCHITECTURE EVIDENCE */}
      <section className={styles.section}>
        <div className={styles.sectionMeta}>
          <span>03 — THE CONNECTIVE LAYER</span>
          <span>HOW THE PARTS WORK TOGETHER</span>
        </div>

        <div className={styles.connectionIntro}>
          <p className={styles.eyebrow}>THE SYSTEM IS THE CONNECTION.</p>

          <h2>
            Traffic means little
            <br />
            without <span>continuity.</span>
          </h2>

          <p>
            The strength of an acquisition system comes from what happens
            between the visible touchpoints. The advert, landing page, form,
            CRM and follow-up should not behave like separate tools.
          </p>
        </div>

        <div className={styles.connectionMap}>
          <div>
            <span>01</span>
            <strong>ATTENTION</strong>
            <small>Meta Ads · Social · Website</small>
          </div>

          <i>→</i>

          <div>
            <span>02</span>
            <strong>CAPTURE</strong>
            <small>Landing Page · Instant Form · Web Form</small>
          </div>

          <i>→</i>

          <div>
            <span>03</span>
            <strong>CRM</strong>
            <small>Contact · Tags · Pipeline</small>
          </div>

          <i>→</i>

          <div>
            <span>04</span>
            <strong>AUTOMATION</strong>
            <small>Email · Notification · Follow-up</small>
          </div>

          <i>→</i>

          <div>
            <span>05</span>
            <strong>OUTCOME</strong>
            <small>Booking · Customer · Delivery</small>
          </div>
        </div>

        <ImageEvidence
          src={assets.architecture}
          label="ACQUISITION ARCHITECTURE"
          caption="The system architecture showing how acquisition channels connect into capture, CRM, automation and customer outcomes."
        />
      </section>

      {/* TECHNICAL LAYER */}
      <section className={`${styles.section} ${styles.technical}`}>
        <div className={styles.sectionMeta}>
          <span>04 — TECHNICAL LAYER</span>
          <span>THE INFRASTRUCTURE</span>
        </div>

        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>TOOLS ARE COMPONENTS.</p>
            <h2>
              The technology
              <br />
              follows the system.
            </h2>
          </div>

          <p>
            The platform is selected around the journey — not the other way
            around.
          </p>
        </div>

        <div className={styles.techGrid}>
          {[
            ["01", "META ADS", "Traffic & campaign acquisition"],
            ["02", "INSTANT FORMS", "Native lead capture"],
            ["03", "LANDING PAGES", "Message & conversion"],
            ["04", "CRM", "Records, tags & pipeline"],
            ["05", "AUTOMATION", "Triggers & follow-up"],
            ["06", "A/B TESTING", "Continuous experimentation"],
            ["07", "BOOKING", "Appointment & service flow"],
            ["08", "MEASUREMENT", "Performance & feedback"],
          ].map(([number, title, text]) => (
            <div key={number} className={styles.techItem}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENTO JOURNEY */}
      <section className={`${styles.section} ${styles.contentoSection}`}>
        <div className={styles.sectionMeta}>
          <span>05 — CUSTOMER JOURNEY</span>
          <span>CONTENTO</span>
        </div>

        <div className={styles.clientIntro}>
          <div>
            <p className={styles.eyebrow}>THE JOURNEY CONTINUES.</p>

            <h2>
              From enquiry
              <br />
              to <span>experience.</span>
            </h2>
          </div>

          <p>
            Contento illustrates why acquisition should not stop at lead
            capture. Once someone enters the system, the operational journey
            can continue through booking, service delivery and post-service
            experience.
          </p>
        </div>

        <div className={styles.customerJourney}>
          {[
            ["01", "LEAD", "Enquiry enters the system."],
            ["02", "BOOKING", "Customer selects a service."],
            ["03", "SERVICE", "The scheduled experience takes place."],
            ["04", "DELIVERY", "The completed work reaches the client."],
            ["05", "FEEDBACK", "The experience creates another signal."],
          ].map(([number, title, text], index) => (
            <div key={number} className={styles.journeyStep}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
              {index < 4 && <i>→</i>}
            </div>
          ))}
        </div>

        <div className={styles.twoEvidence}>
          <ImageEvidence
            src={assets.contentoJourney}
            label="CLIENT JOURNEY"
            caption="The broader customer journey showing how a lead can continue into booking, service and client experience."
          />

          <ImageEvidence
            src={assets.booking}
            label="BOOKING EXPERIENCE"
            caption="Booking as a continuation of the acquisition system rather than a separate process."
          />
        </div>
      </section>

      {/* CLIENT WORK */}
      <section className={`${styles.section} ${styles.workSection}`}>
        <div className={styles.sectionMeta}>
          <span>06 — SELECTED EXPERIENCE</span>
          <span>REAL CLIENT SYSTEMS</span>
        </div>

        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>SYSTEMS IN PRACTICE.</p>

            <h2>
              Built around
              <br />
              <span>real journeys.</span>
            </h2>
          </div>

          <p>
            These projects show different points in the acquisition and
            operational spectrum — from CRM and lead management to booking,
            marketing and customer experience.
          </p>
        </div>

        <div className={styles.clientProjects}>
          <article className={styles.clientProject}>
            <div className={styles.clientProjectNumber}>01</div>

            <div className={styles.clientProjectContent}>
              <p>REAL TASKING · CRM · LEAD SYSTEMS</p>

              <h3>Acquisition connected to operations.</h3>

              <span>
                Work involving lead journeys, CRM structure and workflow
                automation — connecting incoming information to an organised
                operational process.
              </span>
            </div>

            <ImageEvidence
              src={assets.realTasking}
              label="REAL TASKING"
              caption="CRM and lead-management evidence from Real Tasking."
            />
          </article>

          <article className={styles.clientProject}>
            <div className={styles.clientProjectNumber}>02</div>

            <div className={styles.clientProjectContent}>
              <p>CONTENTO · BOOKING · CLIENT JOURNEY</p>

              <h3>From enquiry to delivered experience.</h3>

              <span>
                A broader journey connecting enquiry, booking, service delivery
                and the customer experience beyond the initial conversion.
              </span>
            </div>

            <ImageEvidence
              src={assets.contento}
              label="CONTENTO"
              caption="Contento project evidence showing the customer journey and operational system."
            />
          </article>

          <article className={styles.clientProject}>
            <div className={styles.clientProjectNumber}>03</div>

            <div className={styles.clientProjectContent}>
              <p>THE 5 STAR HOST · MARKETING · WEB</p>

              <h3>Marketing connected to the business.</h3>

              <span>
                Website, marketing and digital operations brought together so
                that online attention could lead into a practical business
                process.
              </span>
            </div>

            <ImageEvidence
              src={assets.fiveStarHost}
              label="THE 5 STAR HOST"
              caption="Marketing and digital-system evidence from The 5 Star Host."
            />
          </article>
        </div>
      </section>

      {/* OPTIMIZATION */}
      <section className={`${styles.section} ${styles.optimization}`}>
        <div className={styles.sectionMeta}>
          <span>07 — OPTIMIZATION</span>
          <span>THE FEEDBACK LOOP</span>
        </div>

        <div className={styles.optimizationIntro}>
          <p className={styles.eyebrow}>SYSTEMS SHOULD LEARN.</p>

          <h2>
            Observe.
            <br />
            Test.
            <br />
            Connect.
            <br />
            <span>Improve.</span>
          </h2>

          <p>
            The first version of a journey is not necessarily the final one.
            Performance data, user behaviour and operational feedback reveal
            where friction exists and where the system can become clearer.
          </p>
        </div>

        <div className={styles.optimizationLoop}>
          {[
            ["01", "OBSERVE", "Understand behaviour and performance."],
            ["02", "TEST", "Experiment with messages, pages and flows."],
            ["03", "CONNECT", "Remove gaps between tools and teams."],
            ["04", "IMPROVE", "Turn what was learned into the next iteration."],
          ].map(([number, title, text]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <ImageEvidence
          src={assets.optimization}
          label="OPTIMIZATION LOOP"
          caption="A visual representation of how acquisition performance feeds the next iteration of the system."
        />
      </section>

      {/* BUSINESS VALUE */}
      <section className={`${styles.section} ${styles.valueSection}`}>
        <div className={styles.sectionMeta}>
          <span>08 — BUSINESS VALUE</span>
          <span>WHY THE SYSTEM MATTERS</span>
        </div>

        <div className={styles.valueGrid}>
          {[
            [
              "01",
              "LESS FRICTION",
              "Fewer disconnected steps between attention and action.",
            ],
            [
              "02",
              "FASTER RESPONSE",
              "Automation helps the business respond without every action depending on manual intervention.",
            ],
            [
              "03",
              "BETTER VISIBILITY",
              "CRM structure makes incoming information easier to understand and manage.",
            ],
            [
              "04",
              "CONTINUOUS LEARNING",
              "Measurement creates information that can improve the next iteration.",
            ],
          ].map(([number, title, text]) => (
            <div key={number} className={styles.valueItem}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className={`${styles.section} ${styles.approach}`}>
        <div className={styles.sectionMeta}>
          <span>09 — APPROACH</span>
          <span>THE JAN WORKS. METHOD</span>
        </div>

        <div className={styles.approachGrid}>
          <div>
            <p className={styles.eyebrow}>THINK BEYOND THE FUNNEL.</p>

            <h2>
              Business first.
              <br />
              System second.
              <br />
              <span>Technology third.</span>
            </h2>
          </div>

          <div className={styles.approachSteps}>
            <div>
              <span>01</span>
              <strong>UNDERSTAND THE BUSINESS</strong>
              <p>Identify the actual acquisition and operational problem.</p>
            </div>

            <div>
              <span>02</span>
              <strong>MAP THE JOURNEY</strong>
              <p>Define what should happen from first interaction onward.</p>
            </div>

            <div>
              <span>03</span>
              <strong>CONNECT THE SYSTEM</strong>
              <p>Bring the right tools, information and automation together.</p>
            </div>

            <div>
              <span>04</span>
              <strong>MEASURE THE RESULT</strong>
              <p>Use evidence to identify what should happen next.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaArchitecture}>
          <span />
          <span />
          <span />
          <span />
        </div>

        <p className={styles.eyebrow}>ACQUISITION · SYSTEMS · AUTOMATION</p>

        <h2>
          MAKE THE
          <br />
          <span>JOURNEY WORK.</span>
        </h2>

        <p>
          The goal is not simply to generate more leads. It is to create a
          system that knows what to do with them.
        </p>

        <Link href="/contact" className={styles.ctaButton}>
          LET&apos;S WORK
          <span>→</span>
        </Link>
      </section>

      {/* NEXT PROJECT */}
      <section className={styles.nextProject}>
        <div className={styles.nextProjectMeta}>
          <span>07 — NEXT PROJECT</span>
          <span>DIGITAL OPERATIONS</span>
        </div>

        <Link href="/projects/digital-operations" className={styles.nextLink}>
          <div className={styles.nextImage}>
            <Image
              src="/images/projects/operations/operations-cover.jpg"
              alt="Digital Operations"
              fill
              sizes="(max-width: 900px) 100vw, 70vw"
              className={styles.nextProjectImage}
            />
          </div>

          <div className={styles.nextContent}>
            <p>BUSINESS SYSTEMS · MULTIPLE PROJECTS</p>
            <h2>
              DIGITAL
              <br />
              OPERATIONS.
            </h2>

            <span>
              Explore the systems behind processes, information, workflows and
              reporting.
            </span>

            <strong>
              VIEW PROJECT <i>→</i>
            </strong>
          </div>
        </Link>
      </section>
    </main>
  );
}