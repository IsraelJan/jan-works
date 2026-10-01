"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./zariq.module.css";

const journey = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Search, explore and compare properties through a structured discovery experience built around real user intent.",
  },
  {
    number: "02",
    title: "UNDERSTAND",
    description:
      "Turn property information into useful intelligence — location, pricing, availability, characteristics, amenities and context.",
  },
  {
    number: "03",
    title: "CONNECT",
    description:
      "Capture enquiries with enough context to connect buyers, tenants, agents, owners and property teams.",
  },
  {
    number: "04",
    title: "TRANSACT",
    description:
      "Move the property journey from enquiry and viewing through documentation, negotiation and the next operational step.",
  },
  {
    number: "05",
    title: "OPERATE",
    description:
      "Continue beyond the transaction with property management, service requests, maintenance, communication and records.",
  },
  {
    number: "06",
    title: "LEARN",
    description:
      "Turn activity and operational data into reporting, automation and intelligence that can improve future decisions.",
  },
];

const layers = [
  {
    number: "01",
    title: "PROPERTY DISCOVERY",
    eyebrow: "EXPERIENCE",
    description:
      "The visible discovery layer where people search, evaluate and enquire about property.",
    items: [
      "Search",
      "Filtering",
      "Comparison",
      "Maps",
      "Saved properties",
      "Viewing requests",
    ],
  },
  {
    number: "02",
    title: "PROPERTY INTELLIGENCE",
    eyebrow: "DATA",
    description:
      "A structured property record that turns fragmented information into usable context.",
    items: [
      "Property profile",
      "Location data",
      "Pricing",
      "Availability",
      "Specifications",
      "Market context",
    ],
  },
  {
    number: "03",
    title: "TRANSACTION LAYER",
    eyebrow: "CONVERSION",
    description:
      "A connected path from interest to enquiry, qualification, viewing and transaction.",
    items: [
      "Enquiry capture",
      "Qualification",
      "Viewing",
      "Communication",
      "Documents",
      "Progression",
    ],
  },
  {
    number: "04",
    title: "PROPERTY OPERATIONS",
    eyebrow: "MANAGEMENT",
    description:
      "The operating layer that continues after a property relationship is established.",
    items: [
      "Tenant operations",
      "Owner communication",
      "Service requests",
      "Maintenance",
      "Vendors",
      "Reporting",
    ],
  },
  {
    number: "05",
    title: "INTELLIGENCE",
    eyebrow: "AUTOMATION",
    description:
      "An intelligence layer designed to assist decisions without removing human control.",
    items: [
      "Property matching",
      "Lead qualification",
      "Communication",
      "Document intelligence",
      "Alerts",
      "Portfolio insights",
    ],
  },
];

const architecture = [
  {
    title: "DISCOVER",
    text: "Search, explore, compare and save.",
  },
  {
    title: "CONNECT",
    text: "Capture intent and route it to the right person.",
  },
  {
    title: "TRANSACT",
    text: "Move the relationship toward a real property outcome.",
  },
  {
    title: "OPERATE",
    text: "Continue the relationship after the transaction.",
  },
  {
    title: "INTELLIGENCE",
    text: "Use structured data and automation to improve decisions.",
  },
];

const changes = [
  {
    before: "FRAGMENTED JOURNEYS",
    after: "CONNECTED JOURNEYS",
    text: "Discovery, enquiry, transaction and operations are designed as one continuous experience.",
  },
  {
    before: "LISTINGS",
    after: "PROPERTY INTELLIGENCE",
    text: "A property becomes more than a listing. Its information becomes part of an operating record.",
  },
  {
    before: "LEAD FORMS",
    after: "CONTEXT-RICH ENQUIRIES",
    text: "The system can preserve what the person wants and why they are interested.",
  },
  {
    before: "MANUAL FOLLOW-UP",
    after: "CONNECTED WORKFLOWS",
    text: "Triggers, routing and notifications can reduce unnecessary operational handoffs.",
  },
  {
    before: "DISCONNECTED DATA",
    after: "PROPERTY DATA LAYER",
    text: "Information becomes reusable across discovery, transactions, management and reporting.",
  },
  {
    before: "SEPARATE TOOLS",
    after: "OPERATING ENVIRONMENT",
    text: "The long-term direction is a connected environment rather than another isolated point solution.",
  },
];

const technologies = [
  {
    name: "NEXT.JS",
    category: "FRONTEND",
    description: "Application framework and product interface layer.",
    mark: "N",
    tone: "dark",
  },
  {
    name: "REACT",
    category: "UI",
    description: "Component architecture for interactive product experiences.",
    mark: "R",
    tone: "cyan",
  },
  {
    name: "TYPESCRIPT",
    category: "LANGUAGE",
    description: "Typed application development across the product.",
    mark: "TS",
    tone: "blue",
  },
  {
    name: "POSTGRESQL",
    category: "DATA",
    description: "Structured relational data foundation for property records.",
    mark: "PG",
    tone: "postgres",
  },
  {
    name: "SUPABASE",
    category: "BACKEND",
    description: "Backend services, database infrastructure and application support.",
    mark: "S",
    tone: "green",
  },
  {
    name: "FASTAPI",
    category: "API",
    description: "Backend API direction for service and intelligence layers.",
    mark: "F",
    tone: "teal",
  },
  {
    name: "GITHUB",
    category: "ENGINEERING",
    description: "Source control and collaborative software development.",
    mark: "GH",
    tone: "github",
  },
  {
    name: "DOCKER",
    category: "INFRASTRUCTURE",
    description: "Containerization and reproducible development environments.",
    mark: "D",
    tone: "docker",
  },
  {
    name: "AWS",
    category: "CLOUD",
    description: "Planned cloud infrastructure and scalable deployment direction.",
    mark: "AWS",
    tone: "aws",
  },
  {
    name: "OPENAI",
    category: "INTELLIGENCE",
    description: "Potential AI layer for recommendations and intelligent workflows.",
    mark: "AI",
    tone: "openai",
  },
  {
    name: "M-PESA",
    category: "PAYMENTS",
    description: "Planned local digital payment integration.",
    mark: "M",
    tone: "mpesa",
  },
  {
    name: "STRIPE",
    category: "PAYMENTS",
    description: "Planned card and international payment integration.",
    mark: "S",
    tone: "stripe",
  },
];

const projects = [
  {
    number: "01",
    title: "WEB DESIGN",
    category: "DIGITAL EXPERIENCE",
    description:
      "Interfaces, websites and responsive experiences built around clarity and conversion.",
    href: "/projects/web-design",
    image: "/images/projects/websites/hero.jpg",
  },
  {
    number: "02",
    title: "SOCIAL MEDIA",
    category: "MARKETING OPERATIONS",
    description:
      "Content systems connecting brand, audience, production and measurable activity.",
    href: "/projects/social-media",
    image: "/images/projects/social/cover.jpg",
  },
  {
    number: "03",
    title: "LEAD GENERATION",
    category: "GROWTH / MARKETING",
    description:
      "Acquisition systems connecting traffic, capture, CRM, automation and conversion.",
    href: "/projects/lead-generation",
    image: "/images/projects/funnels/funnels-cover.jpg",
  },
  {
    number: "04",
    title: "DIGITAL OPERATIONS",
    category: "BUSINESS SYSTEMS",
    description:
      "Operational systems connecting communication, processes, information and execution.",
    href: "/projects/digital-operations",
    image: "/images/projects/operations/operations-cover.jpg",
  },
  {
    number: "05",
    title: "ARCLINE",
    category: "SOFTWARE ENGINEERING",
    description:
      "A general operating software concept bringing structured workflows into a product.",
    href: "/projects/arcline",
    image: "/images/projects/arcline/arcline-hero.png",
  },
  {
    number: "06",
    title: "MARCUS CARS",
    category: "FRONTEND PRODUCT",
    description:
      "A responsive automotive product experience built as a real frontend application.",
    href: "/projects/marcus-cars",
    image: "/images/projects/marcus-cars/marcus-cars-cover.png",
  },
];

const architectureNodeClasses = [
  styles.archNode1,
  styles.archNode2,
  styles.archNode3,
  styles.archNode4,
  styles.archNode5,
];

export default function ZariqPage() {
  const [activeJourney, setActiveJourney] = useState<number | null>(0);
  const [activeLayer, setActiveLayer] = useState<number | null>(0);
  const [activeChange, setActiveChange] = useState<number | null>(0);
  const [activeTechnology, setActiveTechnology] = useState<number | null>(0);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <span>08 — ZARIQ</span>
          <span>PROPTECH / IN PROGRESS</span>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>REAL ESTATE OPERATING SYSTEM</p>

            <h1>
              REAL ESTATE,
              <br />
              <span>CONNECTED.</span>
            </h1>

            <p className={styles.heroLead}>
              ZariQ is a PropTech product concept designed to connect property
              discovery, property intelligence, transactions, operations and
              customer experience through one digital layer.
            </p>

            <div className={styles.heroMeta}>
              <div>
                <span>STATUS</span>
                <strong>IN PROGRESS</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>PROPTECH</strong>
              </div>

              <div>
                <span>APPROACH</span>
                <strong>PRODUCT SYSTEM</strong>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualHeader}>
              <span>ZARIQ / CORE</span>
              <span>01</span>
            </div>

            <div className={styles.coreSystem}>
              <div className={styles.coreRing} />
              <div className={`${styles.coreRing} ${styles.ringTwo}`} />
              <div className={`${styles.coreRing} ${styles.ringThree}`} />

              <div className={styles.coreCenter}>
                <span>Z</span>
                <small>PROPERTY</small>
              </div>

              <span className={`${styles.node} ${styles.nodeOne}`}>
                DISCOVER
              </span>

              <span className={`${styles.node} ${styles.nodeTwo}`}>
                CONNECT
              </span>

              <span className={`${styles.node} ${styles.nodeThree}`}>
                OPERATE
              </span>

              <span className={`${styles.node} ${styles.nodeFour}`}>
                DATA
              </span>
            </div>

            <div className={styles.visualFooter}>
              <span>DISCOVER</span>
              <i />
              <span>UNDERSTAND</span>
              <i />
              <span>OPERATE</span>
              <i />
              <span>LEARN</span>
            </div>
          </div>
        </div>
      </section>

      {/* IDEA */}
      <section className={styles.introSection}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          <span>THE IDEA</span>
        </div>

        <div className={styles.introGrid}>
          <h2>
            NOT JUST A PROPERTY
            <br />
            <span>LISTING PLATFORM.</span>
          </h2>

          <div className={styles.introBody}>
            <p className={styles.largeText}>
              ZariQ is being designed as a connected digital layer for the
              property journey.
            </p>

            <p>
              Instead of treating property discovery, enquiries, transactions,
              management and data as separate experiences, the product brings
              them into a single operating model.
            </p>

            <p>
              The objective is to make property information more useful, make
              transitions between people and systems more seamless, and create
              a foundation where automation and intelligence can operate on
              structured information.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className={styles.journeySection}>
        <div className={styles.sectionLabel}>
          <span>02</span>
          <span>THE PROPERTY JOURNEY</span>
        </div>

        <div className={styles.sectionHeading}>
          <h2>
            FROM FIRST SEARCH
            <br />
            <span>TO ONGOING OPERATIONS.</span>
          </h2>

          <p>
            The product is structured around continuity. Every stage should
            create useful context for the next.
          </p>
        </div>

        <div className={styles.journeyLayout}>
          <div className={styles.journeyList}>
            {journey.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`${styles.journeyItem} ${
                  activeJourney === index ? styles.journeyItemActive : ""
                }`}
                onMouseEnter={() => setActiveJourney(index)}
                onClick={() =>
                  setActiveJourney(activeJourney === index ? null : index)
                }
              >
                <span>{item.number}</span>

                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>

                <b>↗</b>
              </button>
            ))}
          </div>

          <div className={styles.journeyPreview}>
            <div className={styles.previewTop}>
              <span>ZARIQ / JOURNEY</span>
              <span>
                {activeJourney !== null
                  ? journey[activeJourney].number
                  : "—"}
              </span>
            </div>

            <div className={styles.previewDiagram}>
              <div className={styles.previewCircle}>
                <span>
                  {activeJourney !== null
                    ? journey[activeJourney].title.slice(0, 1)
                    : "Z"}
                </span>
              </div>

              <div className={styles.previewLines}>
                <i />
                <i />
                <i />
              </div>

              <div className={styles.previewLabel}>
                <span>
                  {activeJourney !== null
                    ? journey[activeJourney].title
                    : "PROPERTY"}
                </span>

                <small>
                  {activeJourney !== null
                    ? journey[activeJourney].description
                    : "CONNECTED PROPERTY EXPERIENCE"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className={styles.layersSection}>
        <div className={styles.sectionLabel}>
          <span>03</span>
          <span>THE SYSTEM</span>
        </div>

        <div className={styles.sectionHeading}>
          <h2>
            FIVE LAYERS.
            <br />
            <span>ONE OPERATING MODEL.</span>
          </h2>

          <p>
            ZariQ is intentionally broader than a marketplace. The architecture
            connects the experience layer with the operational and intelligence
            layers underneath it.
          </p>
        </div>

        <div className={styles.layersGrid}>
          {layers.map((layer, index) => (
            <article
              key={layer.number}
              className={`${styles.layerCard} ${
                activeLayer === index ? styles.layerCardActive : ""
              }`}
              onMouseEnter={() => setActiveLayer(index)}
              onClick={() =>
                setActiveLayer(activeLayer === index ? null : index)
              }
            >
              <div className={styles.layerTop}>
                <span>{layer.number}</span>
                <span>{layer.eyebrow}</span>
              </div>

              <h3>{layer.title}</h3>

              <p>{layer.description}</p>

              <div className={styles.layerItems}>
                {layer.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.layerArrow}>↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className={styles.architectureSection}>
        <div className={styles.sectionLabel}>
          <span>04</span>
          <span>PRODUCT ARCHITECTURE</span>
        </div>

        <div className={styles.architectureIntro}>
          <h2>
            THE SYSTEM IS
            <br />
            <span>THE PRODUCT.</span>
          </h2>

          <p>
            The visible interface is only one part of ZariQ. Underneath it sits
            a connected architecture designed to preserve context as a person,
            property or operational request moves through the system.
          </p>
        </div>

        <div className={styles.architectureDiagram}>
          <div className={styles.architectureCenter}>
            <span>ZARIQ</span>
            <small>REAL ESTATE OS</small>
          </div>

          {architecture.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.archNode} ${architectureNodeClasses[index]}`}
            >
              <span>0{index + 1}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          ))}

          <div className={styles.architectureLine} />
          <div className={styles.architectureOrbit} />
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className={styles.technologySection}>
        <div className={styles.sectionLabel}>
          <span>05</span>
          <span>TECHNOLOGY / PRODUCT STACK</span>
        </div>

        <div className={styles.technologyIntro}>
          <div>
            <p className={styles.kicker}>FROM INTERFACE TO INFRASTRUCTURE</p>

            <h2>
              BUILT AS A
              <br />
              <span>SOFTWARE PRODUCT.</span>
            </h2>
          </div>

          <div className={styles.technologyLead}>
            <p>
              ZariQ is being approached as a product architecture rather than
              a collection of static screens.
            </p>

            <p>
              The stack is designed around a responsive frontend, structured
              property data, APIs, cloud infrastructure, integrations and an
              intelligence layer that can evolve with the product.
            </p>

            <div className={styles.stackSignal}>
              <span>STACK PRINCIPLE</span>
              <strong>
                Build the foundation first. Add intelligence where it creates
                useful leverage.
              </strong>
            </div>
          </div>
        </div>

        <div className={styles.technologyGrid}>
          {technologies.map((technology, index) => (
            <button
              type="button"
              key={technology.name}
              className={`${styles.technologyCard} ${
                activeTechnology === index
                  ? styles.technologyCardActive
                  : ""
              }`}
              onMouseEnter={() => setActiveTechnology(index)}
              onClick={() =>
                setActiveTechnology(
                  activeTechnology === index ? null : index
                )
              }
            >
              <div className={`${styles.toolMark} ${styles[technology.tone]}`}>
                {technology.mark}
              </div>

              <div className={styles.technologyContent}>
                <span>{technology.category}</span>
                <strong>{technology.name}</strong>
                <p>{technology.description}</p>
              </div>

              <span className={styles.technologyArrow}>↗</span>
            </button>
          ))}
        </div>
      </section>

      {/* PROPTECH OPPORTUNITY */}
      <section className={styles.opportunitySection}>
        <div className={styles.sectionLabel}>
          <span>06</span>
          <span>THE PROPTECH OPPORTUNITY</span>
        </div>

        <div className={styles.opportunityGrid}>
          <h2>
            THE PROBLEM IS
            <br />
            <span>DISCONNECTION.</span>
          </h2>

          <div className={styles.opportunityBody}>
            <p className={styles.largeText}>
              Real estate technology can become fragmented across listings,
              CRMs, communication tools, transaction systems, property
              management platforms and reporting environments.
            </p>

            <p>
              ZariQ is designed around the opposite idea: information should
              travel with the property journey instead of being repeatedly
              recreated at every handoff.
            </p>

            <div className={styles.signal}>
              <span>DESIGN PRINCIPLE</span>
              <strong>
                Every interaction should create context for the next action.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGNED CHANGE */}
      <section className={styles.changeSection}>
        <div className={styles.sectionLabel}>
          <span>07</span>
          <span>DESIGNED CHANGE</span>
        </div>

        <div className={styles.sectionHeading}>
          <h2>
            FROM FRAGMENTED
            <br />
            <span>TO CONNECTED.</span>
          </h2>

          <p>
            These are the product objectives ZariQ is being designed around,
            rather than claimed live-market results.
          </p>
        </div>

        <div className={styles.changeList}>
          {changes.map((change, index) => (
            <button
              key={change.before}
              type="button"
              className={`${styles.changeRow} ${
                activeChange === index ? styles.changeRowActive : ""
              }`}
              onMouseEnter={() => setActiveChange(index)}
              onClick={() =>
                setActiveChange(activeChange === index ? null : index)
              }
            >
              <span className={styles.changeNumber}>
                0{index + 1}
              </span>

              <div className={styles.changeBefore}>
                <small>FROM</small>
                <strong>{change.before}</strong>
              </div>

              <span className={styles.changeArrow}>→</span>

              <div className={styles.changeAfter}>
                <small>TO</small>
                <strong>{change.after}</strong>
              </div>

              <p>{change.text}</p>
            </button>
          ))}
        </div>
      </section>

      {/* INTELLIGENCE */}
      <section className={styles.intelligenceSection}>
        <div className={styles.sectionLabel}>
          <span>08</span>
          <span>INTELLIGENCE LAYER</span>
        </div>

        <div className={styles.intelligenceGrid}>
          <div>
            <p className={styles.kicker}>DATA → CONTEXT → AUTOMATION</p>

            <h2>
              AI SHOULD SIT
              <br />
              <span>ON TOP OF GOOD SYSTEMS.</span>
            </h2>
          </div>

          <div className={styles.intelligenceBody}>
            <p>
              ZariQ's intelligence layer is treated as an extension of the
              operating system, not as a decorative AI feature.
            </p>

            <p>
              Potential applications include property matching, enquiry
              qualification, communication assistance, document extraction,
              service-request routing, portfolio insights and operational
              alerts.
            </p>

            <p>
              The direction keeps people in control of important decisions
              while using structured data and automation to reduce repetitive
              work.
            </p>
          </div>
        </div>

        <div className={styles.intelligenceFlow}>
          <div>
            <span>01</span>
            <strong>DATA</strong>
            <small>Property + people + activity</small>
          </div>

          <i>→</i>

          <div>
            <span>02</span>
            <strong>CONTEXT</strong>
            <small>Understand the current state</small>
          </div>

          <i>→</i>

          <div>
            <span>03</span>
            <strong>AUTOMATION</strong>
            <small>Route the next useful action</small>
          </div>

          <i>→</i>

          <div>
            <span>04</span>
            <strong>DECISION</strong>
            <small>Human-controlled outcomes</small>
          </div>
        </div>
      </section>

      {/* PRODUCT STATUS */}
      <section className={styles.statusSection}>
        <div className={styles.statusBox}>
          <div>
            <span className={styles.kicker}>CURRENT STATUS</span>

            <h2>
              THE PRODUCT IS
              <br />
              <span>IN PROGRESS.</span>
            </h2>
          </div>

          <div className={styles.statusCopy}>
            <p>
              ZariQ is currently being developed as a PropTech product
              direction. The architecture, user journeys and product thinking
              shown here represent the direction of the platform.
            </p>

            <p>
              The case study will evolve alongside the product as working
              interfaces, integrations and measurable outcomes become
              available.
            </p>

            <div className={styles.statusBadge}>
              <i />
              PRODUCT DEVELOPMENT
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED PORTFOLIO */}
      <section className={styles.connectionSection}>
        <div className={styles.sectionLabel}>
          <span>09</span>
          <span>FROM SYSTEMS TO SOFTWARE</span>
        </div>

        <div className={styles.connectionIntro}>
          <h2>
            ZARIQ IS WHERE
            <br />
            <span>THE WORK CONNECTS.</span>
          </h2>

          <p>
            The product brings together the disciplines behind JAN WORKS —
            experience design, marketing systems, acquisition, operations and
            software engineering.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <Link
              href={project.href}
              key={project.number}
              className={styles.projectLink}
            >
              <div className={styles.projectImage}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                ) : (
                  <div className={styles.projectFallback}>
                    <span>{project.number}</span>
                    <strong>{project.title}</strong>
                    <small>VIEW PROJECT</small>
                  </div>
                )}

                <div className={styles.projectImageOverlay} />
              </div>

              <div className={styles.projectTop}>
                <span>{project.number}</span>
                <span>↗</span>
              </div>

              <div className={styles.projectContent}>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.finalStatement}>
          <div className={styles.finalLine} />

          <p>
            WEB DESIGN
            <span>→</span>
            SOCIAL
            <span>→</span>
            ACQUISITION
            <span>→</span>
            OPERATIONS
            <span>→</span>
            SOFTWARE
            <span>→</span>
            PROPTECH
          </p>

          <h2>
            DISCOVER. UNDERSTAND.
            <br />
            CONNECT.  OPERATE.
            <br />
            <span>LEARN.</span>
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaTop}>
          <span>JAN WORKS / ZARIQ</span>
          <span>08 / 08</span>
        </div>

        <h2>
          BUILDING THE
          <br />
          <span>NEXT LAYER.</span>
        </h2>

        <p>
          ZariQ is a work in progress a PropTech product exploring what
          happens when property experience, operations, data and software are
          designed as one connected system.
        </p>

        <div className={styles.ctaActions}>
          <Link href="/projects" className={styles.primaryButton}>
            VIEW ALL PROJECTS <span>↗</span>
          </Link>

          <Link href="/contact" className={styles.secondaryButton}>
            START A CONVERSATION <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}