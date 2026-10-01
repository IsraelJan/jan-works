"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./experience.module.css";

type Experience = {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  category: string;
  summary: string;
  areas: string[];
  details: string[];
};

const experiences: Experience[] = [
  {
    id: "01",
    period: "JAN 2026 — PRESENT",
    company: "THE MARISEL GROUP",
    role: "Senior Operations & Workflow Automation Lead",
    location: "REMOTE",
    category: "OPERATIONS · CRM · AUTOMATION",
    summary:
      "Owning CRM and workflow operations across acquisition, onboarding, follow-up and service-delivery processes.",
    areas: [
      "Operations",
      "CRM Systems",
      "Workflow Automation",
      "Digital Operations",
    ],
    details: [
      "Translate business requirements into structured operational workflows, CRM pipelines, task routing and automation systems.",
      "Coordinate operational handoffs across websites, forms, calendars, chatbots and booking systems.",
      "Configure and maintain GoHighLevel and Zapier workflows for lead capture, follow-up, reminders, notifications and task management.",
      "Maintain CRM records, pipeline stages, tags, statuses and operational information for reliable reporting and follow-through.",
      "Develop repeatable processes and documented workflows that improve consistency and reduce dependency on manual intervention.",
      "Coordinate requirements and deliverables with international clients and stakeholders.",
    ],
  },
  {
    id: "02",
    period: "AUG 2025 — AUG 2026",
    company: "REAL TASKING",
    role: "Senior Operations & Workflow Automation Specialist",
    location: "TEXAS, USA · REMOTE",
    category: "OPERATIONS · CRM · WEB SYSTEMS",
    summary:
      "Managed operational workflows connecting websites, forms, CRM systems, calendars, communications and business tools.",
    areas: [
      "Workflow Management",
      "CRM",
      "Web Systems",
      "Automation",
    ],
    details: [
      "Owned CRM and workflow tasks from requirements gathering through implementation, testing and handover.",
      "Built automated lead responses, follow-ups, reminders and task workflows using GoHighLevel and Zapier.",
      "Coordinated operational requirements across international client environments and translated business needs into actionable system workflows.",
      "Monitored workflow issues, investigated root causes and resolved process or system problems affecting customer-facing operations.",
      "Implemented forms, booking experiences and connected workflows to improve customer movement through operational processes.",
      "Supported integrations with Google Workspace, Calendly, Mailchimp, Stripe, PayPal and Eventbrite.",
    ],
  },
  {
    id: "03",
    period: "MAY 2025 — JAN 2026",
    company: "VENUS PROPERTY AU",
    role: "Property Operations & CRM Lead",
    location: "SYDNEY, AUSTRALIA · REMOTE",
    category: "PROPERTY OPERATIONS · CRM",
    summary:
      "Managed property operations covering bookings, calendars, listings, maintenance coordination and client communication.",
    areas: [
      "Property Operations",
      "CRM",
      "Customer Workflows",
      "Service Delivery",
    ],
    details: [
      "Owned operational workflows for leads, bookings, maintenance requests and customer follow-up.",
      "Configured and maintained CRM systems and workflows using GoHighLevel, HoneyBook and Zapier.",
      "Built and maintained pipelines that provided visibility across customer requests, bookings and operational cases.",
      "Created automated onboarding, follow-up, reminder and status-update workflows.",
      "Coordinated customer and property information across multiple operational systems and communication channels.",
      "Supported WordPress, Wix and GoDaddy environments used for property marketing and lead generation.",
    ],
  },
  {
    id: "04",
    period: "JUN 2025 — OCT 2025",
    company: "THE 5 STAR HOST",
    role: "Digital Operations & CRM Lead",
    location: "MIAMI, USA · REMOTE",
    category: "DIGITAL OPERATIONS · CUSTOMER EXPERIENCE",
    summary:
      "Supported end-to-end digital operations across property marketing, lead capture, customer communication and CRM workflows.",
    areas: [
      "Digital Operations",
      "Property Marketing",
      "CRM",
      "Customer Experience",
    ],
    details: [
      "Coordinated websites, forms, booking systems and lead-capture processes supporting customer acquisition.",
      "Connected websites, forms, calendars and funnels with CRM and business systems.",
      "Built CRM workflows and automated email and SMS follow-up sequences.",
      "Managed operational data associated with IDX/MLS listings and customer inquiries.",
      "Performed quality checks on property information, descriptions, images and location details before publishing.",
      "Supported ongoing updates to pricing, availability and property information.",
    ],
  },
  {
    id: "05",
    period: "APR 2023 — OCT 2025",
    company: "ZARIQ",
    role: "Operations & CRM Specialist",
    location: "NEW SOUTH WALES, AUSTRALIA · REMOTE",
    category: "OPERATIONS · CRM · DIGITAL SYSTEMS",
    summary:
      "Supported digital and business operations for international real estate and service-based clients.",
    areas: [
      "Digital Systems",
      "CRM",
      "Lead Operations",
      "Real Estate",
    ],
    details: [
      "Maintained CRM records, lead information, client interactions and follow-up activities.",
      "Supported lead generation, research, appointment scheduling and customer communication.",
      "Created and managed property listings and supported digital content operations.",
      "Maintained structured information across operational systems to improve visibility and follow-through.",
      "Supported recurring operational tasks and coordinated activities required to move customer and business requests forward.",
      "Supported remote collaboration with international stakeholders and client-facing requirements.",
    ],
  },
  {
    id: "06",
    period: "OCT 2021 — MAR 2025",
    company: "CCI GLOBAL",
    role: "Operations & Customer Experience Specialist",
    location: "KENYA · FULL-TIME",
    category: "LIVE OPERATIONS · CUSTOMER EXPERIENCE",
    summary:
      "Built a foundation in high-volume operations, customer service, workflow discipline, issue resolution and CRM-based case management.",
    areas: [
      "Live Operations",
      "Customer Experience",
      "CRM",
      "Issue Resolution",
    ],
    details: [
      "Supported high-volume daily operations including order processing, scheduling and inventory updates.",
      "Monitored operational workflows and identified delays, exceptions and cases requiring escalation.",
      "Maintained accurate customer records, operational databases and administrative information.",
      "Handled customer inquiries through email, chat and phone across service workflows.",
      "Resolved customer issues and recorded case details accurately within CRM systems.",
      "Worked with Zendesk and Salesforce to manage customer cases, records and operational follow-up.",
    ],
  },
  {
    id: "07",
    period: "JAN 2021 — SEP 2021",
    company: "KFC",
    role: "Customer Operations & Team Support Associate",
    location: "KENYA · PART-TIME",
    category: "CUSTOMER OPERATIONS",
    summary:
      "Early experience in frontline customer service, team support, communication and operational execution.",
    areas: [
      "Customer Service",
      "Team Support",
      "Operations",
      "Communication",
    ],
    details: [
      "Supported customer service and daily restaurant operations in a fast-paced environment.",
      "Helped onboard and mentor team members on company standards and customer service procedures.",
      "Supported communication between management and frontline staff to resolve operational concerns.",
      "Assisted with day-to-day execution of customer-facing operational activities.",
      "Helped reinforce standard operating procedures and customer service expectations.",
    ],
  },
];

const capabilityGroups = [
  {
    title: "OPERATIONS",
    description:
      "Customer journeys, process execution, coordination, service delivery and operational follow-through.",
  },
  {
    title: "SYSTEMS",
    description:
      "CRM administration, workflow design, task routing, integrations and connected business systems.",
  },
  {
    title: "AUTOMATION",
    description:
      "Multi-step workflows, follow-ups, reminders, notifications and reducing repetitive operational work.",
  },
  {
    title: "TECHNOLOGY",
    description:
      "Web implementation, APIs, digital platforms and an expanding software engineering practice.",
  },
];

export default function ExperiencePage() {
  const [activeExperience, setActiveExperience] = useState("01");

  const active =
    experiences.find((item) => item.id === activeExperience) ??
    experiences[0];

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <span>05 / EXPERIENCE</span>
          <span>JAN WORKS</span>
        </div>

        <div className={styles.heroMain}>
          <div className={styles.heroEyebrow}>
            PROFESSIONAL EXPERIENCE
          </div>

          <h1>
            BUILT THROUGH
            <br />
            <span>REAL</span>
            <br />
            <strong>OPERATIONS.</strong>
          </h1>

          <div className={styles.heroStatement}>
            <p>
              From frontline customer operations to CRM, workflow automation,
              digital systems and software.
            </p>

            <div className={styles.heroPath}>
              <span>OPERATIONS</span>
              <i>→</i>
              <span>SYSTEMS</span>
              <i>→</i>
              <span>SOFTWARE</span>
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>2021 — PRESENT</span>
          <span>KENYA · USA · AUSTRALIA · REMOTE</span>
        </div>
      </section>

      {/* =====================================================
          CAREER INTRO
      ===================================================== */}

      <section className={styles.careerIntro}>
        <div className={styles.sectionIndex}>01</div>

        <div className={styles.careerIntroGrid}>
          <div>
            <span className={styles.label}>THE JOURNEY</span>

            <h2>
              EXPERIENCE
              <br />
              THAT BECAME
              <br />
              <span>SYSTEMS.</span>
            </h2>
          </div>

          <div className={styles.careerIntroCopy}>
            <p>
              My professional experience began in customer-facing operations
              and developed through increasingly technology-enabled roles.
            </p>

            <p>
              Over time, the work moved from executing processes to improving
              them, connecting systems, automating repetitive work and
              translating business requirements into digital workflows.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className={styles.timelineSection}>
        <div className={styles.timelineHeader}>
          <div>
            <span className={styles.sectionIndex}>02</span>
            <span className={styles.label}>CAREER TIMELINE</span>
          </div>

          <span className={styles.timelineCount}>
            {experiences.length} EXPERIENCES
          </span>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineList}>
            {experiences.map((experience) => {
              const isActive = activeExperience === experience.id;

              return (
                <button
                  type="button"
                  key={experience.id}
                  className={`${styles.timelineItem} ${
                    isActive ? styles.timelineActive : ""
                  }`}
                  onClick={() => setActiveExperience(experience.id)}
                  onMouseEnter={() =>
                    setActiveExperience(experience.id)
                  }
                >
                  <span className={styles.timelineNumber}>
                    {experience.id}
                  </span>

                  <span className={styles.timelinePeriod}>
                    {experience.period}
                  </span>

                  <span className={styles.timelineCompany}>
                    {experience.company}
                  </span>

                  <span className={styles.timelineArrow}>
                    {isActive ? "↗" : "→"}
                  </span>
                </button>
              );
            })}
          </div>

          <article className={styles.experienceDetail}>
            <div className={styles.detailTop}>
              <span>{active.period}</span>
              <span>{active.location}</span>
            </div>

            <div className={styles.detailMain}>
              <span className={styles.detailCategory}>
                {active.category}
              </span>

              <h2>{active.role}</h2>

              <h3>{active.company}</h3>

              <p className={styles.detailSummary}>
                {active.summary}
              </p>
            </div>

            <div className={styles.areaList}>
              {active.areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>

            <div className={styles.detailWork}>
              <div className={styles.workLabel}>SELECTED RESPONSIBILITIES</div>

              <ul>
                {active.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          WHAT THE EXPERIENCE BUILT
      ===================================================== */}

      <section className={styles.capabilities}>
        <div className={styles.sectionIndex}>03</div>

        <div className={styles.capabilityLayout}>
          <div>
            <span className={styles.label}>WHAT IT BUILT</span>

            <h2>
              FROM
              <br />
              EXECUTION
              <br />
              <span>TO SYSTEMS.</span>
            </h2>

            <p className={styles.capabilityIntro}>
              Across different environments, the common thread has been
              understanding how work moves, where it breaks and how technology
              can make the process more connected.
            </p>
          </div>

          <div className={styles.capabilityList}>
            {capabilityGroups.map((capability, index) => (
              <div
                className={styles.capabilityRow}
                key={capability.title}
              >
                <span>0{index + 1}</span>

                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>

                <span className={styles.capabilityArrow}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section className={styles.education}>
        <div className={styles.sectionIndex}>04</div>

        <div className={styles.educationGrid}>
          <div>
            <span className={styles.label}>EDUCATION & DEVELOPMENT</span>

            <h2>
              ARCHITECTURE
              <br />
              <span>TO SOFTWARE.</span>
            </h2>
          </div>

          <div className={styles.educationList}>
            <div className={styles.educationItem}>
              <span>2026 — PRESENT</span>
              <div>
                <h3>COMPUTER SOFTWARE ENGINEERING</h3>
                <p>Ongoing professional development</p>
              </div>
            </div>

            <div className={styles.educationItem}>
              <span>2025</span>
              <div>
                <h3>DATA ANALYSIS</h3>
                <p>Coursera</p>
              </div>
            </div>

            <div className={styles.educationItem}>
              <span>2018 — 2021</span>
              <div>
                <h3>DIPLOMA IN ARCHITECTURE</h3>
                <p>Nairobi Institute of Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT DIRECTION
      ===================================================== */}

      <section className={styles.direction}>
        <div className={styles.directionInner}>
          <span className={styles.label}>WHERE THIS EXPERIENCE LEADS</span>

          <h2>
            EXPERIENCE
            <br />
            <span>→ SYSTEMS</span>
            <br />
            <strong>→ SOFTWARE</strong>
          </h2>

          <p>
            The next stage is not a departure from the work that came before
            it. It is an extension of it — using operational understanding,
            systems thinking and software to build better digital products.
          </p>

          <Link href="/work" className={styles.directionButton}>
            <span>EXPLORE THE WORK</span>
            <strong>↗</strong>
          </Link>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className={styles.footer}>
        <div>
          <strong>JAN WORKS</strong>
          <span>Systems · Software · Digital Experience</span>
        </div>

        <Link href="/">BACK TO HOME ↑</Link>
      </footer>
    </main>
  );
}