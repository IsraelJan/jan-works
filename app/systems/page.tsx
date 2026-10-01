"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./systems.module.css";

const systemStages = [
  {
    id: "attract",
    number: "01",
    title: "ATTRACT",
    label: "Demand",
    description:
      "Create the entry point through campaigns, websites, social content, landing pages and other acquisition channels.",
    outputs: ["Traffic", "Campaigns", "Landing pages", "Lead sources"],
  },
  {
    id: "capture",
    number: "02",
    title: "CAPTURE",
    label: "Information",
    description:
      "Turn interest into structured information that the business can actually use.",
    outputs: ["Forms", "Instant Forms", "Contact data", "Enquiries"],
  },
  {
    id: "connect",
    number: "03",
    title: "CONNECT",
    label: "CRM",
    description:
      "Move information into the right system and create a reliable record of the customer or client journey.",
    outputs: ["CRM", "Pipelines", "Tags", "Records"],
  },
  {
    id: "automate",
    number: "04",
    title: "AUTOMATE",
    label: "Logic",
    description:
      "Define what should happen next, when it should happen and which system or person should receive it.",
    outputs: ["Triggers", "Conditions", "Actions", "Notifications"],
  },
  {
    id: "operate",
    number: "05",
    title: "OPERATE",
    label: "Execution",
    description:
      "Connect the system to the actual work: communication, bookings, projects, payments, service and delivery.",
    outputs: ["Bookings", "Communication", "Tasks", "Service"],
  },
  {
    id: "measure",
    number: "06",
    title: "MEASURE",
    label: "Visibility",
    description:
      "Create visibility into what is happening so teams can identify gaps, opportunities and performance.",
    outputs: ["Analytics", "Reports", "Tracking", "Dashboards"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "SYSTEMS STRATEGY",
    description:
      "Translate business requirements into connected digital systems, processes and information flows.",
    skills: [
      "Process mapping",
      "System architecture",
      "Requirements mapping",
      "Lifecycle design",
    ],
  },
  {
    number: "02",
    title: "CRM ARCHITECTURE",
    description:
      "Structure customer information so teams can understand where every contact, lead or opportunity sits.",
    skills: [
      "CRM configuration",
      "Pipeline design",
      "Contact lifecycle",
      "Tags & segmentation",
    ],
  },
  {
    number: "03",
    title: "WORKFLOW AUTOMATION",
    description:
      "Design the logic that moves work forward without relying on repetitive manual actions.",
    skills: [
      "Triggers & actions",
      "Conditional logic",
      "Notifications",
      "Workflow testing",
    ],
  },
  {
    number: "04",
    title: "SYSTEM INTEGRATION",
    description:
      "Connect platforms so information can move between systems without unnecessary duplication.",
    skills: [
      "Data mapping",
      "Webhooks",
      "API workflows",
      "Platform integration",
    ],
  },
  {
    number: "05",
    title: "CUSTOMER JOURNEYS",
    description:
      "Design what happens from first interaction through conversion, service and follow-up.",
    skills: [
      "Lead routing",
      "Booking flows",
      "Client onboarding",
      "Follow-up systems",
    ],
  },
  {
    number: "06",
    title: "OPERATIONAL SYSTEMS",
    description:
      "Connect communication, projects, documentation, scheduling and reporting into a usable operating environment.",
    skills: [
      "Process design",
      "SOP development",
      "Task systems",
      "Operational visibility",
    ],
  },
];

const systemDomains = [
  {
    title: "CRM & CLIENT MANAGEMENT",
    description:
      "Centralized records, pipelines, lifecycle stages and client information.",
  },
  {
    title: "LEAD & ACQUISITION",
    description:
      "Traffic, forms, qualification, routing and conversion workflows.",
  },
  {
    title: "MARKETING OPERATIONS",
    description:
      "Email, SMS, campaigns, content workflows and performance tracking.",
  },
  {
    title: "AUTOMATION",
    description:
      "Triggers, conditions, actions, notifications and cross-platform workflows.",
  },
  {
    title: "CLIENT EXPERIENCE",
    description:
      "Bookings, onboarding, communication, payments, service and follow-up.",
  },
  {
    title: "DATA & VISIBILITY",
    description:
      "Information structure, reporting, analytics and operational visibility.",
  },
];

const tools = [
  {
    name: "GoHighLevel",
    category: "CRM / AUTOMATION",
    icon: "/icons/gohighlevel.svg",
    type: "image",
  },
  {
    name: "HoneyBook",
    category: "CLIENT MANAGEMENT",
    mark: "HB",
    type: "mark",
  },
  {
    name: "Zapier",
    category: "AUTOMATION",
    icon: "/icons/zapier.svg",
    type: "image",
  },
  {
    name: "Make",
    category: "AUTOMATION",
    mark: "M",
    type: "mark",
  },
  {
    name: "n8n",
    category: "WORKFLOW ENGINE",
    mark: "n8",
    type: "mark",
  },
  {
    name: "Meta",
    category: "ACQUISITION",
    icon: "/icons/meta.svg",
    type: "image",
  },
  {
    name: "Google Analytics",
    category: "MEASUREMENT",
    icon: "/icons/google-analytics.svg",
    type: "image",
  },
  {
    name: "Google Sheets",
    category: "DATA",
    icon: "/icons/google-sheets.svg",
    type: "image",
  },
  {
    name: "Notion",
    category: "OPERATIONS",
    icon: "/icons/notion.svg",
    type: "image",
  },
  {
    name: "Mailchimp",
    category: "EMAIL",
    mark: "MC",
    type: "mark",
  },
  {
    name: "Calendly",
    category: "BOOKING",
    mark: "C",
    type: "mark",
  },
  {
    name: "Stripe",
    category: "PAYMENTS",
    mark: "S",
    type: "mark",
  },
];

const principles = [
  {
    number: "01",
    title: "MAP BEFORE BUILDING",
    description:
      "Understand the process, people, information and desired outcome before selecting tools or creating workflows.",
  },
  {
    number: "02",
    title: "ONE SOURCE OF TRUTH",
    description:
      "Important information should have a clear home instead of being scattered across disconnected platforms.",
  },
  {
    number: "03",
    title: "AUTOMATE WITH PURPOSE",
    description:
      "Automation should remove unnecessary work and improve consistency, not make a simple process unnecessarily complicated.",
  },
  {
    number: "04",
    title: "DESIGN FOR THE USER",
    description:
      "A technically connected system still fails if the people using it cannot understand or operate it.",
  },
  {
    number: "05",
    title: "MEASURE THE FLOW",
    description:
      "A system should make it possible to understand what entered, what moved, what stopped and what converted.",
  },
];

export default function SystemsPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);

  const stage = systemStages[activeStage];
  const capability = capabilities[activeCapability];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>SYSTEMS / BUSINESS INFRASTRUCTURE</p>

            <h1>
              BUSINESS
              <br />
              <span>SYSTEMS.</span>
            </h1>

            <p className={styles.heroLead}>
              Connecting people, processes, technology and information into
              systems that keep businesses moving.
            </p>

            <div className={styles.heroMeta}>
              <span>CRM</span>
              <span>AUTOMATION</span>
              <span>INTEGRATION</span>
              <span>OPERATIONS</span>
            </div>
          </div>

          <div className={styles.heroArchitecture}>
            <div className={styles.heroArchitectureLabel}>
              <span>SYSTEM ARCHITECTURE</span>
              <span>01 / 01</span>
            </div>

            <div className={styles.heroDiagram}>
              <div className={styles.diagramNode}>TRAFFIC</div>
              <div className={styles.diagramLine} />
              <div className={styles.diagramNode}>CAPTURE</div>
              <div className={styles.diagramLine} />
              <div className={styles.diagramNode}>CRM</div>
              <div className={styles.diagramLine} />
              <div className={styles.diagramNode}>AUTOMATION</div>
              <div className={styles.diagramLine} />
              <div className={styles.diagramNode}>OUTCOME</div>
            </div>

            <div className={styles.heroArchitectureFooter}>
              <span>PEOPLE</span>
              <span>PROCESS</span>
              <span>DATA</span>
              <span>TECHNOLOGY</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.introSection}>
        <div className={styles.sectionNumber}>01 — SYSTEMS THINKING</div>

        <div className={styles.introGrid}>
          <h2>
            Businesses don't
            <br />
            <span>run on tools.</span>
          </h2>

          <div className={styles.introText}>
            <p className={styles.largeText}>
              They run on connections.
            </p>

            <p>
              A CRM on its own is just a database. An automation platform is
              just an engine. A form is just a form.
            </p>

            <p>
              The value appears when those pieces are deliberately connected
              around the way a business actually works.
            </p>

            <p>
              That is where systems thinking begins: understanding the
              journey, defining the information flow, connecting the right
              platforms and making the next action clear.
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className={styles.flowSection}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionNumber}>02 — THE SYSTEM</div>
            <h2>From interaction to outcome.</h2>
          </div>

          <p>
            Every system has a flow. The objective is to understand what enters
            the system, what happens to it and what the business should receive
            at the end.
          </p>
        </div>

        <div className={styles.flowLayout}>
          <div className={styles.stageList}>
            {systemStages.map((item, index) => (
              <button
                key={item.id}
                className={`${styles.stageButton} ${
                  activeStage === index ? styles.stageActive : ""
                }`}
                onMouseEnter={() => setActiveStage(index)}
                onFocus={() => setActiveStage(index)}
                onClick={() => setActiveStage(index)}
              >
                <span>{item.number}</span>

                <span className={styles.stageButtonMain}>
                  <strong>{item.title}</strong>
                  <small>{item.label}</small>
                </span>

                <span className={styles.stageArrow}>↗</span>
              </button>
            ))}
          </div>

          <div className={styles.stageDetail}>
            <div className={styles.stageDetailTop}>
              <span>{stage.number}</span>
              <span>{stage.label}</span>
            </div>

            <h3>{stage.title}</h3>

            <p>{stage.description}</p>

            <div className={styles.outputList}>
              {stage.outputs.map((output) => (
                <span key={output}>{output}</span>
              ))}
            </div>

            <div className={styles.stageFooter}>
              <span>SYSTEM LAYER</span>
              <span>{String(activeStage + 1).padStart(2, "0")} / 06</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionNumber}>03 — CAPABILITIES</div>
            <h2>What I build into a system.</h2>
          </div>

          <p>
            The focus is not on collecting tools. It is on designing the
            structure that makes those tools useful.
          </p>
        </div>

        <div className={styles.capabilityLayout}>
          <div className={styles.capabilityList}>
            {capabilities.map((item, index) => (
              <button
                key={item.title}
                className={`${styles.capabilityButton} ${
                  activeCapability === index
                    ? styles.capabilityActive
                    : ""
                }`}
                onMouseEnter={() => setActiveCapability(index)}
                onFocus={() => setActiveCapability(index)}
                onClick={() => setActiveCapability(index)}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <span>↗</span>
              </button>
            ))}
          </div>

          <div className={styles.capabilityDetail}>
            <span className={styles.detailNumber}>
              {capability.number}
            </span>

            <h3>{capability.title}</h3>

            <p>{capability.description}</p>

            <div className={styles.skillGrid}>
              {capability.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className={styles.domainsSection}>
        <div className={styles.sectionNumber}>04 — SYSTEM DOMAINS</div>

        <div className={styles.domainsIntro}>
          <h2>
            Different systems.
            <br />
            <span>One connected environment.</span>
          </h2>

          <p>
            Systems can sit across marketing, sales, customer experience and
            internal operations. The architecture changes with the business,
            but the principle remains the same: information should move with
            purpose.
          </p>
        </div>

        <div className={styles.domainGrid}>
          {systemDomains.map((domain, index) => (
            <article key={domain.title} className={styles.domainCard}>
              <span>0{index + 1}</span>
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.experienceSection}>
        <div className={styles.sectionNumber}>05 — SYSTEM DELIVERY</div>

        <div className={styles.experienceHeader}>
          <h2>
            From business
            <br />
            <span>problem to system.</span>
          </h2>

          <p>
            A good system is not built by immediately opening a workflow
            builder. It starts by understanding what the business needs to
            accomplish.
          </p>
        </div>

        <div className={styles.experienceFlow}>
          {[
            ["01", "UNDERSTAND", "Business goals, people and constraints."],
            ["02", "MAP", "Processes, information and decision points."],
            ["03", "ARCHITECT", "Systems, platforms and relationships."],
            ["04", "BUILD", "CRM structures, workflows and interfaces."],
            ["05", "CONNECT", "Integrations, data movement and triggers."],
            ["06", "TEST", "Edge cases, handoffs and user experience."],
            ["07", "OPTIMIZE", "Performance, visibility and continuous improvement."],
          ].map(([number, title, description]) => (
            <div key={number} className={styles.experienceStep}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS & EXPERTISE */}
      <section className={styles.skillsSection}>
        <div className={styles.sectionNumber}>06 — SKILLS & EXPERTISE</div>

        <div className={styles.skillsHeader}>
          <h2>
            Systems are where
            <br />
            <span>strategy becomes infrastructure.</span>
          </h2>

          <p>
            My systems work sits at the intersection of business operations,
            CRM, automation, marketing technology and digital experience.
          </p>
        </div>

        <div className={styles.skillsMatrix}>
          <div className={styles.skillColumn}>
            <span className={styles.skillColumnNumber}>01</span>
            <h3>STRATEGY</h3>
            <ul>
              <li>Business process mapping</li>
              <li>System requirements</li>
              <li>Customer journey design</li>
              <li>Workflow architecture</li>
              <li>Operational analysis</li>
            </ul>
          </div>

          <div className={styles.skillColumn}>
            <span className={styles.skillColumnNumber}>02</span>
            <h3>CRM</h3>
            <ul>
              <li>CRM configuration</li>
              <li>Pipeline architecture</li>
              <li>Contact lifecycle design</li>
              <li>Lead qualification</li>
              <li>Segmentation & tagging</li>
            </ul>
          </div>

          <div className={styles.skillColumn}>
            <span className={styles.skillColumnNumber}>03</span>
            <h3>AUTOMATION</h3>
            <ul>
              <li>Workflow design</li>
              <li>Triggers & conditions</li>
              <li>Cross-platform automation</li>
              <li>Notifications</li>
              <li>Follow-up systems</li>
            </ul>
          </div>

          <div className={styles.skillColumn}>
            <span className={styles.skillColumnNumber}>04</span>
            <h3>INTEGRATION</h3>
            <ul>
              <li>Data mapping</li>
              <li>API workflows</li>
              <li>Webhooks</li>
              <li>Platform connections</li>
              <li>Information synchronization</li>
            </ul>
          </div>

          <div className={styles.skillColumn}>
            <span className={styles.skillColumnNumber}>05</span>
            <h3>OPERATIONS</h3>
            <ul>
              <li>Process design</li>
              <li>SOP development</li>
              <li>Project workflows</li>
              <li>Client onboarding</li>
              <li>Operational visibility</li>
            </ul>
          </div>

          <div className={styles.skillColumn}>
            <span className={styles.skillColumnNumber}>06</span>
            <h3>INTELLIGENCE</h3>
            <ul>
              <li>AI-assisted workflows</li>
              <li>Information processing</li>
              <li>Intelligent routing</li>
              <li>Decision support</li>
              <li>Workflow optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className={styles.technologySection}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionNumber}>07 — TECHNOLOGY</div>
            <h2>The systems stack.</h2>
          </div>

          <p>
            Tools change. The underlying systems principles remain. These are
            platforms used across CRM, automation, marketing, operations,
            measurement and client experience.
          </p>
        </div>

        <div className={styles.toolsGrid}>
          {tools.map((tool) => (
            <div key={tool.name} className={styles.toolCard}>
              <div className={styles.toolVisual}>
                {tool.type === "image" && tool.icon ? (
                  <Image
                    src={tool.icon}
                    alt=""
                    width={34}
                    height={34}
                  />
                ) : (
                  <span>{tool.mark}</span>
                )}
              </div>

              <div>
                <strong>{tool.name}</strong>
                <small>{tool.category}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className={styles.principlesSection}>
        <div className={styles.principlesSide}>
          <div className={styles.sectionNumber}>08 — PRINCIPLES</div>

          <h2>
            Good systems
            <br />
            feel <span>simple.</span>
          </h2>

          <p>
            Complexity should live inside the architecture, not inside the
            user's day.
          </p>
        </div>

        <div className={styles.principlesList}>
          {principles.map((principle) => (
            <article key={principle.number} className={styles.principle}>
              <span>{principle.number}</span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SYSTEM STATEMENT */}
      <section className={styles.statementSection}>
        <div className={styles.statementGrid}>
          <div>
            <span className={styles.sectionNumber}>09 — THE PRINCIPLE</span>

            <div className={styles.statementMark}>S</div>
          </div>

          <div>
            <p className={styles.statementEyebrow}>
              CONNECTED BUSINESS INFRASTRUCTURE
            </p>

            <h2>
              The goal isn't
              <br />
              <span>more automation.</span>
            </h2>

            <p className={styles.statementBody}>
              The goal is a business where the right information reaches the
              right person, the right action happens at the right time, and the
              customer experience does not depend on someone remembering every
              step manually.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div>
          <span className={styles.sectionNumber}>10 — NEXT</span>

          <h2>
            Systems
            <br />
            <span>→ software.</span>
          </h2>

          <p>
            Systems thinking defines what should happen. Engineering builds
            the technology that makes it possible.
          </p>
        </div>

        <Link href="/engineering" className={styles.ctaButton}>
          EXPLORE ENGINEERING
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}