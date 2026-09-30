"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import styles from "./crm-automation.module.css";

const systemQuestions = [
  {
    number: "01",
    question: "WHERE DOES THE LEAD COME FROM?",
    answer: "Website, Meta, Google, social, referral, landing page or another entry point?",
  },
  {
    number: "02",
    question: "WHERE DOES THE INFORMATION GO?",
    answer: "CRM, inbox, spreadsheet, project system or multiple disconnected platforms?",
  },
  {
    number: "03",
    question: "WHAT HAPPENS NEXT?",
    answer: "Does someone respond, does a workflow trigger, is a task created or is the lead simply waiting?",
  },
  {
    number: "04",
    question: "WHO OWNS THE NEXT ACTION?",
    answer: "Sales, operations, client success, property management or another team member?",
  },
  {
    number: "05",
    question: "WHAT HAPPENS IF NOBODY ACTS?",
    answer: "Follow-up, reminder, nurture, escalation or another automated response?",
  },
  {
    number: "06",
    question: "HOW DO WE KNOW IT WORKED?",
    answer: "Appointment, payment, conversion, delivery, retention or operational visibility?",
  },
];

const capabilities = [
  {
    number: "01",
    title: "CRM ARCHITECTURE",
    text: "Contacts, pipelines, stages, tags, opportunities, records and operational visibility.",
    tools: "GoHighLevel · HoneyBook",
  },
  {
    number: "02",
    title: "WORKFLOW AUTOMATION",
    text: "Triggers, conditions, routing, notifications, follow-ups and repetitive task automation.",
    tools: "GoHighLevel · Zapier · Make · n8n",
  },
  {
    number: "03",
    title: "SYSTEM INTEGRATIONS",
    text: "Connecting websites, forms, calendars, payments, CRM platforms and external services.",
    tools: "APIs · Webhooks · Calendars · Payments",
  },
  {
    number: "04",
    title: "CLIENT JOURNEYS",
    text: "Designing what happens from first interaction through qualification, conversion, onboarding and delivery.",
    tools: "Traffic · CRM · Communication · Operations",
  },
];

const systemStages = [
  {
    number: "01",
    title: "ATTRACT",
    description: "Bring the right people into the system.",
    items: "Meta · Google · Social · Website · Referral",
  },
  {
    number: "02",
    title: "CAPTURE",
    description: "Turn interaction into usable information.",
    items: "Forms · Landing Pages · Inquiries · Bookings",
  },
  {
    number: "03",
    title: "ORGANIZE",
    description: "Give the information a structured home.",
    items: "CRM · Contacts · Tags · Pipeline · Source",
  },
  {
    number: "04",
    title: "AUTOMATE",
    description: "Create the next action without unnecessary manual work.",
    items: "Triggers · Conditions · Email · SMS · Tasks",
  },
  {
    number: "05",
    title: "CONVERT",
    description: "Move the relationship toward a commercial outcome.",
    items: "Appointments · Proposals · Payments · Sales",
  },
  {
    number: "06",
    title: "OPERATE",
    description: "Continue the relationship after conversion.",
    items: "Onboarding · Delivery · Communication · Reporting",
  },
];

const contentoJourney = [
  "INQUIRY RECEIVED",
  "WELCOME & DISCOVERY",
  "PROPOSAL / CONTRACT",
  "PAYMENT",
  "SCHEDULING",
  "PROJECT KICKOFF",
];

const workflowSteps = [
  {
    number: "01",
    title: "NEW INQUIRY",
    text: "A new inquiry enters through a digital form or website.",
  },
  {
    number: "02",
    title: "AUTOMATION TRIGGER",
    text: "The workflow recognizes the event and starts the next action.",
  },
  {
    number: "03",
    title: "CRM ENTRY",
    text: "The lead is captured and organized with the information required.",
  },
  {
    number: "04",
    title: "EMAIL / SMS",
    text: "Communication is triggered to acknowledge and engage the lead.",
  },
  {
    number: "05",
    title: "APPOINTMENT",
    text: "The lead can move into a scheduled conversation.",
  },
  {
    number: "06",
    title: "PAYMENT / INVOICE",
    text: "Commercial actions can connect back into the operational journey.",
  },
];

const workflowLibrary = [
  "NEW INQUIRIES",
  "CONSULTATIONS",
  "PROPOSAL SENT & SIGNED",
  "CLIENT ONBOARDING",
  "PROGRESS WORKFLOW",
  "DELIVERY COMPLETED",
];

const propertyStages = [
  {
    number: "01",
    title: "PROPERTY DATA",
    text: "Listing details, photos, amenities, pricing and location information.",
  },
  {
    number: "02",
    title: "LISTING SETUP",
    text: "Property information organized for presentation across the relevant platforms.",
  },
  {
    number: "03",
    title: "QUALITY CHECK",
    text: "Information verified for accuracy, consistency and presentation.",
  },
  {
    number: "04",
    title: "PUBLISH & SYNC",
    text: "Listings and connected information maintained across platforms.",
  },
  {
    number: "05",
    title: "UPDATES",
    text: "Changes to pricing, availability and property details move through the system.",
  },
];

const systemDomains = [
  {
    title: "CUSTOMER SYSTEMS",
    items: ["CRM", "Pipelines", "Lead Management", "Client Onboarding", "Communication"],
  },
  {
    title: "REVENUE SYSTEMS",
    items: ["Lead Capture", "Qualification", "Appointments", "Follow-up", "Payments"],
  },
  {
    title: "PROPERTY SYSTEMS",
    items: ["IDX / MLS", "Property Data", "Listings", "Lead Capture", "Operations"],
  },
  {
    title: "AUTOMATION SYSTEMS",
    items: ["Triggers", "Conditions", "Routing", "Notifications", "Webhooks"],
  },
  {
    title: "OPERATIONAL SYSTEMS",
    items: ["Tasks", "Calendars", "SOPs", "Reporting", "Internal Workflows"],
  },
];

const technologyLayers = [
  {
    number: "01",
    title: "INTERFACE",
    text: "Website · Form · Landing Page · Checkout",
  },
  {
    number: "02",
    title: "BUSINESS LOGIC",
    text: "CRM · Pipeline · Stages · Rules",
  },
  {
    number: "03",
    title: "AUTOMATION",
    text: "GoHighLevel · Zapier · Make · n8n",
  },
  {
    number: "04",
    title: "INTEGRATIONS",
    text: "APIs · Webhooks · Calendar · Payments",
  },
  {
    number: "05",
    title: "DATA",
    text: "Contacts · Opportunities · Projects · Activity",
  },
  {
    number: "06",
    title: "REPORTING",
    text: "Performance · Conversion · Operations · Visibility",
  },
];

const platforms = [
  "GoHighLevel",
  "HoneyBook",
  "Zapier",
  "Make",
  "n8n",
  "Calendly",
  "Stripe",
  "WordPress",
  "Wix",
  "IDX / MLS",
  "Google Workspace",
  "APIs",
  "Webhooks",
  "Meta",
];

const clientExperience = [
  ["01", "DISCOVER", "Understand the business and the current operating process."],
  ["02", "MAP", "Visualize where information enters, moves and gets stuck."],
  ["03", "ARCHITECT", "Design the system before connecting the technology."],
  ["04", "BUILD", "Configure the CRM, workflows, forms and integrations."],
  ["05", "CONNECT", "Make the different platforms exchange information."],
  ["06", "TEST", "Run the journey from trigger to final outcome."],
  ["07", "OPTIMIZE", "Improve the system around actual business usage."],
];

export default function CrmAutomationPage() {
  const reducedMotion = useReducedMotion();

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroOrb} />

        <div className={styles.heroInner}>
          <div className={styles.heroMeta}>
            <span>04 / SYSTEMS</span>
            <span>CRM · AUTOMATION · INTEGRATIONS</span>
          </div>

          <div className={styles.heroMain}>
            <motion.div
              className={styles.heroEyebrow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              CONNECTED OPERATIONS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              FROM TRAFFIC
              <br />
              <span>TO OPERATION.</span>
            </motion.h1>

            <motion.div
              className={styles.heroDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <p>
                CRM architecture, workflows and integrations designed to move
                information through the business from the first interaction
                to conversion, onboarding and ongoing operations.
              </p>

              <div className={styles.heroSystem}>
                <span>ATTRACT</span>
                <i>→</i>
                <span>CAPTURE</span>
                <i>→</i>
                <span>CRM</span>
                <i>→</i>
                <span>AUTOMATE</span>
                <i>→</i>
                <span>OPERATE</span>
              </div>
            </motion.div>
          </div>

          <div className={styles.heroFooter}>
            <span>PEOPLE</span>
            <span>PROCESS</span>
            <span>DATA</span>
            <span>TECHNOLOGY</span>
            <span className={styles.heroFooterLast}>01 — 04</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span>THE SYSTEM</span>
          </div>

          <div className={styles.introGrid}>
            <h2>
              A CRM IS NOT
              <br />
              <span>THE SYSTEM.</span>
            </h2>

            <div className={styles.introText}>
              <p className={styles.introLead}>
                It is one part of a larger business journey.
              </p>

              <p>
                The work begins by understanding where people come from, how
                information enters the business, where it needs to go and what
                should happen next.
              </p>

              <p>
                CRM architecture, automation and integrations then become the
                infrastructure connecting those decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUESTIONS
      ===================================================== */}
      <section className={styles.questions}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span>THE QUESTIONS</span>
          </div>

          <div className={styles.questionsHeader}>
            <div>
              <p className={styles.smallBlue}>BEFORE BUILDING A SYSTEM</p>

              <h2>
                WHERE DOES
                <br />
                <span>INFORMATION GET STUCK?</span>
              </h2>
            </div>

            <p>
              The right automation starts with business questions not with
              opening a software platform and choosing a trigger.
            </p>
          </div>

          <div className={styles.questionGrid}>
            {systemQuestions.map((item) => (
              <motion.article
                key={item.number}
                className={styles.questionCard}
                whileHover={
                  reducedMotion ? undefined : { y: -5 }
                }
              >
                <span>{item.number}</span>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className={styles.capabilities}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <span>WHAT I BUILD</span>
          </div>

          <div className={styles.capabilityIntro}>
            <h2>
              CONNECTED
              <br />
              <span>CAPABILITIES.</span>
            </h2>

            <p>
              Different business problems require different technical layers.
              The objective is to connect them into one operating structure.
            </p>
          </div>

          <div className={styles.capabilityList}>
            {capabilities.map((item) => (
              <article key={item.number} className={styles.capabilityRow}>
                <span className={styles.capabilityNumber}>
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <small>{item.tools}</small>
                </div>

                <span className={styles.rowArrow}>↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM ARCHITECTURE
      ===================================================== */}
      <section className={styles.architecture}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>04</span>
            <span>THE SYSTEM ARCHITECTURE</span>
          </div>

          <div className={styles.architectureHeading}>
            <h2>
              START WITH
              <br />
              <span>THE FLOW.</span>
            </h2>

            <p>
              A connected business system begins before the CRM and continues
              long after the lead has been captured.
            </p>
          </div>

          <div className={styles.stageFlow}>
            {systemStages.map((stage, index) => (
              <div className={styles.stage} key={stage.number}>
                <div className={styles.stageTop}>
                  <span>{stage.number}</span>
                  {index < systemStages.length - 1 && <i>→</i>}
                </div>

                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <small>{stage.items}</small>
              </div>
            ))}
          </div>

          <div className={styles.architectureStatement}>
            <span>THE OBJECTIVE</span>
            <strong>
              MOVE THE RIGHT INFORMATION TO THE RIGHT PERSON, SYSTEM OR ACTION
              AT THE RIGHT TIME.
            </strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENTO CASE STUDY
      ===================================================== */}
      <section className={styles.caseStudy}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>05</span>
            <span>CLIENT EXPERIENCE / 01</span>
          </div>

          <div className={styles.caseHeader}>
            <div>
              <p className={styles.smallBlue}>CONTENTO · TRACY KING</p>

              <h2>
                CLIENT ONBOARDING
                <br />
                <span>AS A SYSTEM.</span>
              </h2>
            </div>

            <p>
              A designed customer journey that connects inquiry, onboarding,
              proposal, payment, scheduling and project initiation into one
              visible experience.
            </p>
          </div>

          <div className={styles.evidenceFrame}>
            <Image
              src="/images/projects/crm/contento-client-portal.png"
              alt="Contento client onboarding and automation portal"
              fill
              sizes="(max-width: 900px) 100vw, 1400px"
            />

            <div className={styles.evidenceCaption}>
              <span>CONTENTO</span>
              <span>CLIENT ONBOARDING & AUTOMATION PORTAL</span>
            </div>
          </div>

          <div className={styles.clientJourney}>
            <div className={styles.journeyIntro}>
              <span>WHAT THE CLIENT EXPERIENCES</span>
              <p>
                The system should make the next action visible instead of
                making the customer wonder what happens after they submit,
                sign or pay.
              </p>
            </div>

            <div className={styles.journeySteps}>
              {contentoJourney.map((step, index) => (
                <div className={styles.journeyStep} key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                  {index < contentoJourney.length - 1 && <i>↓</i>}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.caseOutcome}>
            <div>
              <span>THE SYSTEM DESIGN</span>
              <h3>
                THE CUSTOMER JOURNEY BECOMES VISIBLE, STRUCTURED AND CONNECTED.
              </h3>
            </div>

            <div>
              <p>
                The work brings together journey mapping, automated
                communication, proposal and contract steps, scheduling,
                payment workflow integration and project initiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW EVIDENCE
      ===================================================== */}
      <section className={styles.workflowSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>06</span>
            <span>WORKFLOW EVIDENCE</span>
          </div>

          <div className={styles.workflowHeader}>
            <div>
              <p className={styles.smallBlue}>AUTOMATION THAT DRIVES THE JOURNEY</p>

              <h2>
                WHEN ONE ACTION
                <br />
                <span>HAPPENS, WHAT HAPPENS NEXT?</span>
              </h2>
            </div>

            <p>
              A workflow becomes valuable when every trigger has a reason,
              every action has an owner and every transition moves the
              customer or operation closer to its intended outcome.
            </p>
          </div>

          <div className={styles.workflowEvidence}>
            <Image
              src="/images/projects/crm/workflow-automation-system.png"
              alt="Workflow automation system architecture"
              fill
              sizes="(max-width: 900px) 100vw, 1400px"
            />
          </div>

          <div className={styles.workflowMap}>
            {workflowSteps.map((step, index) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>

                {index < workflowSteps.length - 1 && (
                  <i>→</i>
                )}
              </article>
            ))}
          </div>

          <div className={styles.workflowQuestion}>
            <span>CLIENT QUESTION</span>
            <h3>
              COULD YOUR BUSINESS RUN THIS JOURNEY WITHOUT SOMEONE MANUALLY
              MOVING INFORMATION BETWEEN EVERY STEP?
            </h3>
          </div>

          <div className={styles.workflowLibrary}>
            <div className={styles.libraryHeading}>
              <span>WORKFLOW LIBRARY</span>
              <span>06 SYSTEMS</span>
            </div>

            <div className={styles.libraryGrid}>
              {workflowLibrary.map((workflow, index) => (
                <div key={workflow}>
                  <span>0{index + 1}</span>
                  <strong>{workflow}</strong>
                  <span>↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY / IDX MLS
      ===================================================== */}
      <section className={styles.propertyCase}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>07</span>
            <span>CLIENT EXPERIENCE / 02</span>
          </div>

          <div className={styles.propertyHeader}>
            <div>
              <p className={styles.smallBlue}>
                THE 5 STAR HOST · NICOLE CREEGAN
              </p>

              <h2>
                PROPERTY DATA
                <br />
                <span>MEETS OPERATIONS.</span>
              </h2>
            </div>

            <p>
              IDX / MLS-related work demonstrates another side of connected
              operations: property data, listing workflows, lead activity,
              communication and platform synchronization.
            </p>
          </div>

          <div className={styles.propertyEvidence}>
            <Image
              src="/images/projects/crm/idx-mls-workflow.png"
              alt="IDX MLS workflow and automation evidence"
              fill
              sizes="(max-width: 900px) 100vw, 1400px"
            />
          </div>

          <div className={styles.propertySystem}>
            <div className={styles.propertySystemIntro}>
              <span>PROPERTY SYSTEM FLOW</span>
              <p>
                The property itself becomes a data object moving through
                multiple digital and operational layers.
              </p>
            </div>

            <div className={styles.propertyStages}>
              {propertyStages.map((stage) => (
                <article key={stage.number}>
                  <span>{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.propertyQuestion}>
            <span>THE SYSTEM QUESTION</span>
            <h3>
              WHEN PROPERTY INFORMATION CHANGES, HOW MANY PLACES SHOULD A
              PERSON HAVE TO UPDATE MANUALLY?
            </h3>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM DOMAINS
      ===================================================== */}
      <section className={styles.domains}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>08</span>
            <span>SYSTEM DOMAINS</span>
          </div>

          <div className={styles.domainsHeader}>
            <h2>
              DIFFERENT BUSINESS
              <br />
              <span>PROBLEMS. ONE SYSTEMS MINDSET.</span>
            </h2>

            <p>
              My work has touched different operational environments. The
              common thread is understanding how people, processes, data and
              technology interact.
            </p>
          </div>

          <div className={styles.domainGrid}>
            {systemDomains.map((domain) => (
              <article key={domain.title}>
                <h3>{domain.title}</h3>

                <div>
                  {domain.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY ARCHITECTURE
      ===================================================== */}
      <section className={styles.technology}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>09</span>
            <span>TECHNOLOGY ARCHITECTURE</span>
          </div>

          <div className={styles.techHeader}>
            <h2>
              THE TOOLS
              <br />
              <span>ARE ONE LAYER.</span>
            </h2>

            <p>
              I don't start with a software platform. I start with the
              operating logic, then choose the tools that support it.
            </p>
          </div>

          <div className={styles.techStack}>
            {technologyLayers.map((layer, index) => (
              <div className={styles.techRow} key={layer.number}>
                <span>{layer.number}</span>

                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </div>

                {index < technologyLayers.length - 1 && (
                  <i>↓</i>
                )}
              </div>
            ))}
          </div>

          <div className={styles.platforms}>
            <div className={styles.platformTop}>
              <span>PLATFORMS & TECHNOLOGIES</span>
              <span>{platforms.length}+</span>
            </div>

            <div className={styles.platformList}>
              {platforms.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLIENT EXPERIENCE
      ===================================================== */}
      <section className={styles.clientExperience}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>10</span>
            <span>CLIENT EXPERIENCE</span>
          </div>

          <div className={styles.clientExperienceHeader}>
            <h2>
              BUILD THE SYSTEM.
              <br />
              <span>EXPLAIN THE SYSTEM.</span>
            </h2>

            <p>
              A client should not need to understand every technical detail.
              They should understand the problem, the architecture, what is
              changing and what the system enables.
            </p>
          </div>

          <div className={styles.experienceList}>
            {clientExperience.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM THINKING
      ===================================================== */}
      <section className={styles.systemThinking}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>11</span>
            <span>SYSTEM THINKING</span>
          </div>

          <div className={styles.thinkingHeading}>
            <p>THE SYSTEM SHOULD ANSWER FOUR QUESTIONS.</p>

            <h2>
              DATA.
              <br />
              LOGIC.
              <br />
              PEOPLE.
              <br />
              <span>OUTCOME.</span>
            </h2>
          </div>

          <div className={styles.thinkingGrid}>
            <article>
              <span>01</span>
              <h3>DATA</h3>
              <p>Where does the information live?</p>
            </article>

            <article>
              <span>02</span>
              <h3>LOGIC</h3>
              <p>What should happen when something changes?</p>
            </article>

            <article>
              <span>03</span>
              <h3>PEOPLE</h3>
              <p>Who needs to act, approve, respond or decide?</p>
            </article>

            <article>
              <span>04</span>
              <h3>OUTCOME</h3>
              <p>What should the system ultimately help the business achieve?</p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT — SOCIAL MEDIA
      ===================================================== */}
      <section className={styles.nextProject}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>12</span>
            <span>NEXT PROJECT</span>
          </div>

          <Link
            href="/projects/social-media"
            className={styles.nextProjectLink}
          >
            <div className={styles.nextProjectVisual}>
              <Image
                src="/images/projects/social/social-cover.jpg"
                alt="Social Media and Content System"
                fill
                sizes="(max-width: 850px) 100vw, 60vw"
              />
            </div>

            <div className={styles.nextProjectContent}>
              <span>SOCIAL MEDIA / CONTENT SYSTEM</span>

              <h2>
                FROM SYSTEMS
                <br />
                <em>TO ATTENTION.</em>
              </h2>

              <p>
                Explore how content, social media operations and digital
                communication become structured systems for attracting,
                engaging and moving audiences.
              </p>

              <div className={styles.nextArrow}>
                EXPLORE SOCIAL MEDIA SYSTEM
                <span>↗</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span>CONNECTED OPERATIONS</span>

          <h2>
            WHERE DOES YOUR
            <br />
            <em>INFORMATION GET STUCK?</em>
          </h2>

          <p>
            Let's map the journey, identify the gaps and build the system
            around how your business actually operates.
          </p>

          <Link href="/contact" className={styles.ctaButton}>
            START A PROJECT
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}