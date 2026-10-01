"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./digital-operations.module.css";

type Operation = {
  number: string;
  label: string;
  title: string;
  description: string;
  experience: string;
  outcome: string;
  capabilities: string[];
};

type Project = {
  client: string;
  category: string;
  title: string;
  description: string;
  experience: string;
  image: string;
  evidence: {
    label: string;
    image: string;
  }[];
};

const assets = {
  hero: "/images/projects/operations/operations-cover.jpg",

  contento: "/images/projects/operations/contento-operations.png",
  contentoEmail: "/images/projects/operations/contento-email.png",
  contentoSms: "/images/projects/operations/contento-sms.png",

  fiveStarHost:
    "/images/projects/operations/five-star-host-operations.png",
  fiveStarEmail:
    "/images/projects/operations/five-star-host-email.png",

  venus: "/images/projects/operations/venus-properties.png",
  executive:
    "/images/projects/operations/executive-operations.png",

  projectManagement:
    "/images/projects/operations/project-management.png",

  systems:
    "/images/projects/operations/business-systems.png",

  reporting:
    "/images/projects/operations/reporting.png",
};

const tools = [
  {
    type: "CRM",
    name: "GoHighLevel",
    icon: "/icons/gohighlevel.svg",
    description: "CRM, pipelines and workflow management",
  },
  {
    type: "CRM",
    name: "HoneyBook",
    icon: "/icons/honeybook.svg",
    description: "Client projects, communication and payments",
  },
  {
    type: "AUTOMATION",
    name: "Zapier",
    icon: "/icons/zapier.svg",
    description: "Cross-platform workflow automation",
  },
  {
    type: "AUTOMATION",
    name: "Make",
    icon: "/icons/make.svg",
    description: "Visual automation and system connections",
  },
  {
    type: "WORKFLOW",
    name: "n8n",
    icon: "/icons/n8n.svg",
    description: "Flexible workflow orchestration",
  },
  {
    type: "DESIGN",
    name: "Canva",
    icon: "/icons/canva.svg",
    description: "Campaign and communication assets",
  },
  {
    type: "DESIGN",
    name: "Figma",
    icon: "/icons/figma.svg",
    description: "Interfaces and digital system design",
  },
  {
    type: "MARKETING",
    name: "Meta",
    icon: "/icons/meta.svg",
    description: "Social and campaign operations",
  },
  {
    type: "ANALYTICS",
    name: "Google Analytics",
    icon: "/icons/google-analytics.svg",
    description: "Measurement and performance visibility",
  },
  {
    type: "DATA",
    name: "Google Sheets",
    icon: "/icons/google-sheets.svg",
    description: "Operational data and reporting",
  },
  {
    type: "COMMUNICATION",
    name: "Email",
    icon: "/icons/mail.svg",
    description: "Customer and business communication",
  },
  {
    type: "COMMUNICATION",
    name: "SMS",
    icon: "/icons/download.png",
    description: "Fast customer communication and follow-up",
  },
];

const operations: Operation[] = [
  {
    number: "01",
    label: "COMMUNICATION",
    title: "Keep the business connected.",
    description:
      "Email, SMS, notifications and client communication become part of a coordinated operating system rather than isolated messages.",
    experience:
      "A customer should not have to wonder whether their request was received, whether someone is handling it or what happens next.",
    outcome:
      "The right information reaches the right person at the right point in the workflow.",
    capabilities: [
      "Email campaigns",
      "SMS campaigns",
      "Client communication",
      "Internal notifications",
      "Follow-up sequences",
      "Campaign coordination",
    ],
  },
  {
    number: "02",
    label: "CLIENT OPERATIONS",
    title: "Turn client activity into an organized experience.",
    description:
      "Client information, onboarding, follow-up, appointments, records and service communication are structured so work can move without unnecessary friction.",
    experience:
      "Every interaction should feel connected from the first enquiry through communication, service delivery and follow-up.",
    outcome:
      "Client activity becomes visible, organized and easier to manage.",
    capabilities: [
      "CRM management",
      "Client onboarding",
      "Contact organization",
      "Appointment coordination",
      "Follow-up",
      "Customer records",
    ],
  },
  {
    number: "03",
    label: "PROJECT OPERATIONS",
    title: "Move work from request to completion.",
    description:
      "Projects need more than a task list. They need ownership, deadlines, communication, approvals, handoffs and a clear definition of done.",
    experience:
      "A seamless project experience means everyone knows what is happening, who owns it and what needs to happen next.",
    outcome:
      "Work becomes trackable from request through delivery.",
    capabilities: [
      "Task management",
      "Project coordination",
      "Deadlines",
      "Deliverables",
      "Approvals",
      "Team handoffs",
    ],
  },
  {
    number: "04",
    label: "PROPERTY OPERATIONS",
    title: "Coordinate the operation behind the property.",
    description:
      "Property operations connect reservations, guests, cleaning, maintenance, vendors, communication and reviews into one continuous workflow.",
    experience:
      "The guest sees a simple experience. Behind it, multiple operational steps need to happen in the correct order.",
    outcome:
      "The property can be managed through a repeatable operational process.",
    capabilities: [
      "Guest communication",
      "Booking coordination",
      "Check-in / check-out",
      "Maintenance coordination",
      "Vendor coordination",
      "Review management",
    ],
  },
  {
    number: "05",
    label: "EXECUTIVE OPERATIONS",
    title: "Create structure around leadership.",
    description:
      "Executive support becomes an information and coordination layer covering calendars, correspondence, meetings, research, documents and follow-up.",
    experience:
      "The objective is to reduce the amount of operational noise surrounding decisions and keep priorities visible.",
    outcome:
      "Important work is organized before it becomes an operational bottleneck.",
    capabilities: [
      "Calendar management",
      "Email management",
      "Meeting coordination",
      "Research",
      "Documentation",
      "Executive follow-up",
    ],
  },
  {
    number: "06",
    label: "MARKETING OPERATIONS",
    title: "Make campaigns operational.",
    description:
      "Marketing execution connects content, campaigns, calendars, audiences, communication and reporting so activity can be planned and measured.",
    experience:
      "A campaign is not finished when an email or post goes live. The response, follow-up and resulting customer activity also matter.",
    outcome:
      "Marketing becomes a repeatable operating process rather than disconnected activity.",
    capabilities: [
      "Campaign planning",
      "Content calendars",
      "Email marketing",
      "SMS marketing",
      "Social coordination",
      "Campaign reporting",
    ],
  },
  {
    number: "07",
    label: "SYSTEMS & AUTOMATION",
    title: "Remove repetitive operational friction.",
    description:
      "Where work follows a predictable pattern, workflows can connect tools, create records, send notifications, assign tasks and move information automatically.",
    experience:
      "Automation should remove unnecessary clicks and handoffs without removing the human decisions that actually matter.",
    outcome:
      "People spend less time moving information between systems.",
    capabilities: [
      "Workflow automation",
      "Zapier",
      "Make",
      "GoHighLevel",
      "HoneyBook",
      "System integrations",
    ],
  },
  {
    number: "08",
    label: "INFORMATION & PROCESS",
    title: "Give the business an operating memory.",
    description:
      "SOPs, documents, templates, records and knowledge need structure. Good operations make information easy to find, understand and reuse.",
    experience:
      "The process should not disappear when one person is unavailable. Important knowledge should remain accessible to the business.",
    outcome:
      "Processes become easier to repeat, delegate and improve.",
    capabilities: [
      "SOP development",
      "Process documentation",
      "Knowledge organization",
      "Document management",
      "Templates",
      "Process improvement",
    ],
  },
  {
    number: "09",
    label: "REPORTING & VISIBILITY",
    title: "Make the operation visible.",
    description:
      "Operational activity becomes useful when it can be measured, reviewed and translated into decisions.",
    experience:
      "Visibility closes the loop: activity creates data, data creates insight, and insight informs the next operational decision.",
    outcome:
      "Teams can see what happened, what is pending and where improvement is needed.",
    capabilities: [
      "Operational reporting",
      "KPI tracking",
      "Campaign reporting",
      "Analytics",
      "Dashboards",
      "Performance monitoring",
    ],
  },
];

const projects: Project[] = [
  {
    client: "CONTENTO",
    category: "MARKETING OPERATIONS",
    title: "Campaigns become a coordinated customer experience.",
    description:
      "Email marketing, SMS communication, customer activity and operational follow-up connected as part of a broader digital workflow.",
    experience:
      "The objective was not simply to send communications. Each touchpoint needed to feel like part of the same customer journey.",
    image: assets.contento,
    evidence: [
      {
        label: "EMAIL CAMPAIGN",
        image: assets.contentoEmail,
      },
      {
        label: "SMS CAMPAIGN",
        image: assets.contentoSms,
      },
    ],
  },
  {
    client: "THE 5 STAR HOST",
    category: "MARKETING + PROPERTY OPERATIONS",
    title: "Marketing and property activity working together.",
    description:
      "A combination of content, communication, customer activity and property-related operations designed around the business workflow.",
    experience:
      "The operational goal was continuity onnecting customer communication and marketing activity with the wider property-service experience.",
    image: assets.fiveStarHost,
    evidence: [
      {
        label: "EMAIL",
        image: assets.fiveStarEmail,
      },
    ],
  },
  {
    client: "VENUS PROPERTIES",
    category: "PROPERTY OPERATIONS",
    title: "The operational layer behind property management.",
    description:
      "Property management involves much more than bookings. Communication, coordination, service delivery, maintenance and guest experience all have to work together.",
    experience:
      "The customer sees a simple property experience. The operation behind it requires coordination across multiple moving parts.",
    image: assets.venus,
    evidence: [],
  },
  {
    client: "EXECUTIVE OPERATIONS",
    category: "EXECUTIVE + ADMINISTRATIVE",
    title: "Structure around people, information and priorities.",
    description:
      "Calendar, email, meetings, research, documentation, follow-up and recurring administrative work organized into a dependable operating rhythm.",
    experience:
      "The focus is reducing operational noise so important information, priorities and actions remain visible.",
    image: assets.executive,
    evidence: [],
  },
];

const experienceFlow = [
  {
    number: "01",
    title: "TRIGGER",
    description: "Something happens.",
  },
  {
    number: "02",
    title: "CAPTURE",
    description: "The information enters the system.",
  },
  {
    number: "03",
    title: "CONTEXT",
    description: "The system understands what it means.",
  },
  {
    number: "04",
    title: "ACTION",
    description: "The right person or workflow responds.",
  },
  {
    number: "05",
    title: "COMMUNICATE",
    description: "The customer or team knows what happens next.",
  },
  {
    number: "06",
    title: "COMPLETE",
    description: "The work reaches an outcome.",
  },
  {
    number: "07",
    title: "RECORD",
    description: "The activity becomes usable information.",
  },
  {
    number: "08",
    title: "IMPROVE",
    description: "The next experience gets better.",
  },
];

export default function DigitalOperationsPage() {
  const [activeOperation, setActiveOperation] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeFlow, setActiveFlow] = useState(0);
  const [showAllTools, setShowAllTools] = useState(false);

  const operation = operations[activeOperation];
  const project = projects[activeProject];

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />

        <div className={styles.heroArchitecture} aria-hidden="true">
          <span className={styles.archCircle} />
          <span className={styles.archCircleInner} />
          <span className={styles.archLineOne} />
          <span className={styles.archLineTwo} />
          <span className={styles.archLabel}>BUSINESS / 07</span>
          <span className={styles.archVertical}>
            OPERATING SYSTEM
          </span>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            07 — DIGITAL OPERATIONS
            <span>BUSINESS SYSTEMS / OPERATIONS</span>
          </p>

          <h1>
            DIGITAL
            <br />
            <em>OPERATIONS.</em>
          </h1>

          <p className={styles.heroStatement}>
            The systems behind the work.
          </p>

          <p className={styles.heroDescription}>
            From communication and project coordination to property
            operations, marketing execution, automation and reporting
            I organize the digital infrastructure that keeps businesses
            moving.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#operating-system"
              className={styles.primaryAction}
            >
              Explore the operating system
              <span>↓</span>
            </a>

            <Link
              href="/projects/lead-generation"
              className={styles.textAction}
            >
              Previous project
              <span>06</span>
            </Link>
          </div>
        </div>

        <div className={styles.heroExperience}>
          <div className={styles.experienceLine} />
          <span>PEOPLE</span>
          <span>PROCESS</span>
          <span>SYSTEMS</span>
          <span>INFORMATION</span>
          <span>EXPERIENCE</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className={styles.introSection}>
        <div className={styles.sectionIndex}>
          01 / THE OPERATING LAYER
        </div>

        <div className={styles.introGrid}>
          <h2>
            A BUSINESS
            <br />
            <span>NEEDS MORE</span>
            <br />
            THAN TOOLS.
          </h2>

          <div className={styles.introCopy}>
            <p className={styles.leadCopy}>
              A CRM does not create an operation. An email platform
              does not create a process. A project-management tool does
              not automatically create accountability.
            </p>

            <p>
              Digital operations is the layer connecting people,
              processes, information and technology so work can move
              consistently from one stage to the next.
            </p>

            <div className={styles.introRule}>
              <span>THE OBJECTIVE</span>
              <strong>
                Make the work easier to understand, execute, repeat
                and improve.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATING SYSTEM
      ===================================================== */}
      <section
        className={styles.systemSection}
        id="operating-system"
      >
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionIndex}>
              02 / BUSINESS SYSTEM
            </span>

            <h2>
              THE OPERATING
              <br />
              <span>SYSTEM.</span>
            </h2>
          </div>

          <p>
            Different businesses require different workflows. The
            underlying logic remains the same: information enters,
            work is organized, people act, systems automate and
            results become visible.
          </p>
        </div>

        <div className={styles.systemMap}>
          <div className={styles.systemOrbit} />
          <div className={styles.systemOrbitSmall} />

          <div className={styles.systemCore}>
            <span>BUSINESS</span>
            <strong>OPERATIONS</strong>
            <small>CONNECTED SYSTEM</small>
          </div>

          {[
            [
              "01",
              "COMMUNICATE",
              "Email · SMS · Clients",
              styles.nodeTop,
            ],
            [
              "02",
              "ORGANIZE",
              "CRM · Data · Information",
              styles.nodeRight,
            ],
            [
              "03",
              "EXECUTE",
              "Projects · Tasks · Delivery",
              styles.nodeBottomRight,
            ],
            [
              "04",
              "AUTOMATE",
              "Workflows · Integrations",
              styles.nodeBottomLeft,
            ],
            [
              "05",
              "MEASURE",
              "Reporting · Visibility",
              styles.nodeLeft,
            ],
          ].map(([number, title, description, position]) => (
            <div
              key={String(number)}
              className={`${styles.systemNode} ${position}`}
            >
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{description}</small>
            </div>
          ))}
        </div>

        <div className={styles.systemStatement}>
          <span>THE PRINCIPLE</span>
          <strong>
            The tools are different. The operating system is one.
          </strong>
        </div>
      </section>

      {/* =====================================================
          OPERATIONAL LAYERS
      ===================================================== */}
      <section className={styles.operationsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionIndex}>
              03 / OPERATIONAL LAYERS
            </span>

            <h2>
              WHAT HAPPENS
              <br />
              <span>INSIDE.</span>
            </h2>
          </div>

          <p>
            Explore the operational layers. Each one represents a
            different type of work that can be structured, connected
            and improved.
          </p>
        </div>

        <div className={styles.operationsLayout}>
          <nav
            className={styles.operationList}
            aria-label="Operational layers"
          >
            {operations.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`${styles.operationButton} ${
                  activeOperation === index
                    ? styles.operationButtonActive
                    : ""
                }`}
                onClick={() => setActiveOperation(index)}
                aria-pressed={activeOperation === index}
              >
                <span>{item.number}</span>
                <strong>{item.label}</strong>
                <i>↗</i>
              </button>
            ))}
          </nav>

          <article className={styles.operationDetail}>
            <div className={styles.operationDetailTop}>
              <span>{operation.number}</span>
              <small>{operation.label}</small>
            </div>

            <h3>{operation.title}</h3>

            <p className={styles.operationDescription}>
              {operation.description}
            </p>

            <div className={styles.experienceNote}>
              <span>USER / CLIENT EXPERIENCE</span>
              <p>{operation.experience}</p>
            </div>

            <div className={styles.capabilityGrid}>
              {operation.capabilities.map((capability) => (
                <div
                  key={capability}
                  className={styles.capability}
                >
                  <span>+</span>
                  {capability}
                </div>
              ))}
            </div>

            <div className={styles.outcome}>
              <span>OPERATIONAL OUTCOME</span>
              <p>{operation.outcome}</p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE FLOW
      ===================================================== */}
      <section className={styles.flowSection}>
        <div className={styles.sectionIndex}>
          04 / THE EXPERIENCE
        </div>

        <div className={styles.flowHeading}>
          <div>
            <h2>
              MAKE THE
              <br />
              <span>WORK FEEL EASY.</span>
            </h2>

            <p>
              Seamless user experience does not happen by accident.
              Behind a simple interaction is usually a sequence of
              carefully connected operational decisions.
            </p>
          </div>

          <div className={styles.flowCounter}>
            <span>ACTIVE STAGE</span>
            <strong>
              {String(activeFlow + 1).padStart(2, "0")}
              <small>/08</small>
            </strong>
          </div>
        </div>

        <div className={styles.experienceFlow}>
          <div className={styles.flowRail}>
            {experienceFlow.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`${styles.flowStage} ${
                  activeFlow === index
                    ? styles.flowStageActive
                    : ""
                }`}
                onClick={() => setActiveFlow(index)}
                aria-pressed={activeFlow === index}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </button>
            ))}
          </div>

          <div className={styles.flowDetail}>
            <span>STAGE {experienceFlow[activeFlow].number}</span>
            <strong>{experienceFlow[activeFlow].title}</strong>
            <p>{experienceFlow[activeFlow].description}</p>

            <div className={styles.flowVisual}>
              <div />
              <div />
              <div />
              <div />
              <span>CONTINUITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}
      <section className={styles.workflowSection}>
        <div className={styles.workflowHeader}>
          <div>
            <span className={styles.sectionIndex}>
              05 / FROM REQUEST TO RESULT
            </span>

            <h2>
              NO LOST
              <br />
              <span>HANDOFFS.</span>
            </h2>
          </div>

          <p>
            A request should not disappear between an email, a
            spreadsheet, a meeting, a task, a CRM record and a
            customer.
          </p>
        </div>

        <div className={styles.workflowDiagram}>
          {[
            ["01", "REQUEST", "Information enters"],
            ["02", "STRUCTURE", "The work is defined"],
            ["03", "ASSIGN", "Ownership becomes clear"],
            ["04", "EXECUTE", "The work moves"],
            ["05", "AUTOMATE", "Repetition is reduced"],
            ["06", "RECORD", "Information is captured"],
            ["07", "REVIEW", "Results become visible"],
            ["08", "IMPROVE", "The process evolves"],
          ].map(([number, title, description], index) => (
            <div
              className={styles.workflowItem}
              key={number}
            >
              <span>{number}</span>

              <div>
                <strong>{title}</strong>
                <small>{description}</small>
              </div>

              {index < 7 && <i>→</i>}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CLIENT WORK
      ===================================================== */}
      <section className={styles.clientSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionIndex}>
              06 / SELECTED EXPERIENCE
            </span>

            <h2>
              REAL
              <br />
              <span>OPERATIONS.</span>
            </h2>
          </div>

          <p>
            Operational work across marketing, customer
            communication, property management, executive support
            and business systems.
          </p>
        </div>

        <div className={styles.clientTabs}>
          {projects.map((item, index) => (
            <button
              key={item.client}
              type="button"
              onClick={() => setActiveProject(index)}
              className={`${styles.clientTab} ${
                activeProject === index
                  ? styles.clientTabActive
                  : ""
              }`}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{item.client}</strong>

              <small>{item.category}</small>
            </button>
          ))}
        </div>

        <div className={styles.projectDisplay}>
          <div className={styles.projectVisual}>
            <Image
              src={project.image}
              alt={`${project.client} digital operations`}
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              className={styles.projectImage}
            />

            <div className={styles.imageMeta}>
              <span>PROJECT EVIDENCE</span>
              <span>{project.client}</span>
            </div>
          </div>

          <div className={styles.projectCopy}>
            <span>{project.category}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className={styles.experiencePanel}>
              <span>EXPERIENCE LAYER</span>
              <p>{project.experience}</p>
            </div>

            <div className={styles.projectEvidence}>
              {project.evidence.length > 0 ? (
                project.evidence.map((item) => (
                  <div
                    className={styles.evidenceItem}
                    key={item.label}
                  >
                    <div className={styles.evidenceImage}>
                      <Image
                        src={item.image}
                        alt={`${project.client} ${item.label}`}
                        fill
                        sizes="180px"
                        className={styles.evidenceImageInner}
                      />
                    </div>

                    <span>{item.label}</span>
                  </div>
                ))
              ) : (
                <div className={styles.noEvidence}>
                  <span>OPERATIONAL WORK</span>
                  <strong>
                    Systems / Coordination / Execution
                  </strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS SYSTEMS
      ===================================================== */}
      <section className={styles.businessSystems}>
        <div className={styles.sectionIndex}>
          07 / BUSINESS SYSTEMS
        </div>

        <div className={styles.businessHeading}>
          <h2>
            CONNECT
            <br />
            <span>THE BUSINESS.</span>
          </h2>

          <p>
            Digital operations becomes powerful when individual
            workflows stop behaving like separate islands.
          </p>
        </div>

        <div className={styles.businessArchitecture}>
          <div className={styles.architectureColumn}>
            <span>01 / PEOPLE</span>
            <strong>Clients</strong>
            <strong>Team</strong>
            <strong>Leadership</strong>
            <strong>Vendors</strong>
          </div>

          <div className={styles.architectureConnector}>
            +
          </div>

          <div className={styles.architectureColumn}>
            <span>02 / PROCESS</span>
            <strong>Requests</strong>
            <strong>Tasks</strong>
            <strong>Approvals</strong>
            <strong>Delivery</strong>
          </div>

          <div className={styles.architectureConnector}>
            +
          </div>

          <div className={styles.architectureColumn}>
            <span>03 / TECHNOLOGY</span>
            <strong>CRM</strong>
            <strong>Automation</strong>
            <strong>Email / SMS</strong>
            <strong>Project Tools</strong>
          </div>

          <div className={styles.architectureConnector}>
            =
          </div>

          <div
            className={`${styles.architectureColumn} ${styles.architectureResult}`}
          >
            <span>04 / BUSINESS SYSTEM</span>
            <strong>Visibility</strong>
            <strong>Consistency</strong>
            <strong>Efficiency</strong>
            <strong>Continuity</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS DESIGN
      ===================================================== */}
      <section className={styles.processSection}>
        <div className={styles.processImage}>
          <Image
            src={assets.systems}
            alt="Business systems and process structure"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.processImageInner}
          />

          <div className={styles.processImageLabel}>
            SYSTEM / PROCESS / DOCUMENTATION
          </div>
        </div>

        <div className={styles.processCopy}>
          <span className={styles.sectionIndex}>
            08 / PROCESS DESIGN
          </span>

          <h2>
            BUILD IT
            <br />
            <span>TO REPEAT.</span>
          </h2>

          <p>
            A process should not live inside one person&apos;s memory.
            It should be documented, structured and repeatable.
          </p>

          <div className={styles.processSteps}>
            {[
              [
                "01",
                "MAP",
                "Understand how the work currently moves.",
              ],
              [
                "02",
                "DOCUMENT",
                "Turn knowledge into a usable process.",
              ],
              [
                "03",
                "STANDARDIZE",
                "Create consistency across execution.",
              ],
              [
                "04",
                "AUTOMATE",
                "Remove unnecessary manual repetition.",
              ],
              [
                "05",
                "IMPROVE",
                "Use results to refine the system.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className={styles.processStep}
              >
                <span>{number}</span>

                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIBILITY
      ===================================================== */}
      <section className={styles.visibilitySection}>
        <div>
          <span className={styles.sectionIndex}>
            09 / VISIBILITY
          </span>

          <h2>
            IF YOU CAN
            <br />
            <span>SEE IT,</span>
            <br />
            YOU CAN IMPROVE IT.
          </h2>
        </div>

        <div className={styles.visibilityContent}>
          <p>
            Operational systems create information. Reporting turns
            that information into visibility.
          </p>

          <div className={styles.visibilityGrid}>
            {[
              ["01", "ACTIVITY", "What happened?"],
              ["02", "STATUS", "Where are we now?"],
              ["03", "PERFORMANCE", "What is working?"],
              ["04", "IMPROVEMENT", "What should change?"],
            ].map(([number, title, description]) => (
              <div key={number}>
                <strong>{number}</strong>
                <span>{title}</span>
                <small>{description}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ===================================================== */}
      <section className={styles.toolsSection}>
        <div className={styles.sectionIndex}>
          10 / TECHNOLOGY LAYER
        </div>

        <div className={styles.toolsHeader}>
          <h2>
            THE TOOLS
            <br />
            <span>BEHIND THE SYSTEM.</span>
          </h2>

          <p>
            Technology is the infrastructure. The value comes from
            how the tools are connected to the way the business
            actually works.
          </p>
        </div>

        <div className={styles.toolsRail}>
          {(showAllTools ? tools : tools.slice(0, 8)).map(
            (tool) => (
              <div
                className={styles.tool}
                key={`${tool.type}-${tool.name}`}
              >
                <div className={styles.toolTop}>
                  <span>{tool.type}</span>

                  <div className={styles.toolIcon}>
                    <Image
                      src={tool.icon}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>
                </div>

                <strong>{tool.name}</strong>

                <small>{tool.description}</small>
              </div>
            ),
          )}
        </div>

        <button
          type="button"
          className={styles.toolsToggle}
          onClick={() => setShowAllTools((current) => !current)}
        >
          {showAllTools
            ? "Show fewer tools"
            : `View all tools · ${tools.length}`}
          <span>{showAllTools ? "↑" : "↓"}</span>
        </button>
      </section>

      {/* =====================================================
          PRINCIPLE
      ===================================================== */}
      <section className={styles.principleSection}>
        <div
          className={styles.principleArchitecture}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
        </div>

        <span className={styles.sectionIndex}>
          11 / OPERATING PRINCIPLE
        </span>

        <h2>
          NOT MORE
          <br />
          <span>TOOLS.</span>
          <br />
          BETTER
          <br />
          <em>SYSTEMS.</em>
        </h2>

        <p>
          The goal is not to add technology to a business. The goal
          is to make the existing work easier to understand, execute,
          measure and improve.
        </p>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className={styles.cta}>
        <div
          className={styles.ctaArchitecture}
          aria-hidden="true"
        >
          <span>PEOPLE</span>
          <span>PROCESS</span>
          <span>SYSTEMS</span>
          <span>DATA</span>
        </div>

        <div className={styles.ctaContent}>
          <span className={styles.sectionIndex}>12 / NEXT</span>

          <h2>
            MAKE THE
            <br />
            <span>BUSINESS MOVE.</span>
          </h2>

          <p>
            Digital operations should make complexity feel organized.
          </p>

          <Link href="/contact" className={styles.ctaButton}>
            Discuss a project
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}
      <section className={styles.nextProject}>
        <div>
          <span>07 / DIGITAL OPERATIONS</span>
          <small>NEXT PROJECT</small>
        </div>

        <Link
          href="/projects/zariq"
          className={styles.nextProjectLink}
        >
          <strong>ZARIQ / PROPTECH</strong>
          <span>Explore project →</span>
        </Link>
      </section>
    </main>
  );
}