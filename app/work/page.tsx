import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";

const projects = [
  {
    number: "01",
    title: "ARCLINE",
    category: "SOFTWARE\nENGINEERING",
    description:
      "Software systems, web applications and digital products designed around real operational needs.",
    href: "/projects/arcline",
  },
  {
    number: "02",
    title: "MARCUS CARS",
    category: "PRODUCT ·\nFRONTEND",
    description:
      "A digital product experience combining interface design, frontend development and conversion-focused thinking.",
    href: "/projects/marcus-cars",
  },
  {
    number: "03",
    title: "DIGITAL EXPERIENCES",
    category: "WEB DESIGN &\nDEVELOPMENT",
    description:
      "Websites and digital experiences designed to communicate clearly and support business objectives.",
    href: "/projects/web-design",
  },
  {
    number: "04",
    title: "CONNECTED OPERATIONS",
    category: "CRM & WORKFLOW\nSYSTEMS",
    description:
      "Connected CRM, workflow and integration systems designed to organize information and improve how businesses operate.",
    href: "/projects/crm-automation",
  },
  {
    number: "05",
    title: "DIGITAL PRESENCE",
    category: "SOCIAL MEDIA &\nCONTENT",
    description:
      "Content systems and digital campaigns built around consistent communication and audience engagement.",
    href: "/projects/social-media",
  },
  {
    number: "06",
    title: "GROWTH SYSTEMS",
    category: "LEAD GENERATION\n& FUNNELS",
    description:
      "Lead capture, funnel architecture and follow-up systems designed around the customer journey.",
    href: "/projects/lead-generation",
  },
  {
    number: "07",
    title: "BUSINESS SYSTEMS",
    category: "DIGITAL\nOPERATIONS",
    description:
      "Operational systems that organize information, improve workflows and create more consistent ways of working.",
    href: "/projects/digital-operations",
  },
  {
    number: "08",
    title: "ZARIQ",
    category: "PROPTECH",
    description:
      "A property technology concept exploring how software can improve real estate information and operations.",
    href: "/projects/zariq",
  },
];

export default function WorkPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* PAGE HEADER */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>WORK</span>
            </div>

            <div className={styles.headerMeta}>
              <span>SELECTED WORK</span>
              <span>JAN WORKS / 2026</span>
            </div>
          </div>

          {/* HERO */}
          <div className={styles.hero}>
            <div className={styles.heroImage}>
              <Image
                src="/images/projects/arcline/arcline-dashboard.jpg"
                alt="ARCLINE software system"
                fill
                priority
                sizes="100vw"
                className={styles.heroImageAsset}
              />

              <div className={styles.heroFade} />

              <div className={styles.heroLabel}>
                <span>01</span>
                <span>ARCLINE / SOFTWARE SYSTEM</span>
              </div>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <span>WORK</span>
              </div>

              <h1 className={styles.heading}>
                BUILT FOR
                <span>REAL WORK.</span>
              </h1>

              <p className={styles.heroDescription}>
                A collection of systems, digital products and
                technology built around how businesses
                actually operate.
              </p>

              <div className={styles.heroMeta}>
                <span>08 PROJECTS</span>
                <span className={styles.metaDivider} />
                <span>GLOBAL / REMOTE</span>
              </div>
            </div>
          </div>
        </header>

        {/* PROJECT ARCHIVE */}
        <div className={styles.workList}>
          {projects.map((project) => (
            <article
              key={project.number}
              className={styles.project}
            >
              <div className={styles.projectNumber}>
                {project.number}
              </div>

              <div className={styles.projectCategory}>
                {project.category.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>

              <div className={styles.projectMain}>
                <h2>{project.title}</h2>

                <p className={styles.description}>
                  {project.description}
                </p>
              </div>

              <Link
                href={project.href}
                className={styles.projectLink}
              >
                <span>VIEW WORK</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className={styles.bottom}>
          <div className={styles.bottomLabel}>
            <span className={styles.bottomLine} />
            <span>THE APPROACH</span>
          </div>

          <p className={styles.bottomStatement}>
            UNDERSTAND THE BUSINESS. DESIGN THE SYSTEM.
            BUILD THE TECHNOLOGY.
          </p>
        </div>
      </div>
    </section>
  );
}