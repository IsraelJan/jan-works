import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";

const whatsappUrl = "https://wa.me/254115889691";

const projects = [
  {
    number: "01",
    title: "ARCLINE",
    category: "SOFTWARE SYSTEM",
    description:
      "An operating software system being developed to connect projects, clients, tasks, calendars and reporting within one structured environment.",
    image: "/images/projects/arcline/arcline-hero.png",
    href: "/projects/arcline",
    meta: "ACTIVE DEVELOPMENT",
  },
  {
    number: "02",
    title: "MARCUS CARS",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A frontend experience focused on presenting automotive inventory through a clear, responsive and conversion-oriented digital interface.",
    image: "/images/projects/arcline/marcus-cars.png",
    href: "/projects/marcus-cars",
    meta: "DIGITAL PRODUCT",
  },
  {
    number: "03",
    title: "WEB DESIGN & DEVELOPMENT",
    category: "DIGITAL EXPERIENCES",
    description:
      "Web experiences designed around clarity, responsive behaviour, strong visual hierarchy and the practical needs of the business behind them.",
    image: "/images/projects/websites/websites-cover.jpg",
    href: "/projects/web-design",
    meta: "WEB / DIGITAL",
  },
  {
    number: "04",
    title: "CRM / AUTOMATION SYSTEMS",
    category: "OPERATIONS / AUTOMATION",
    description:
      "Connected CRM and automation systems designed to move information between people, processes and platforms with less manual work.",
    image: "/images/projects/crm/crm-cover.jpg",
    href: "/projects/crm-automation",
    meta: "SYSTEMS",
  },
  {
    number: "05",
    title: "SOCIAL MEDIA / CONTENT SYSTEMS",
    category: "CONTENT / BRAND",
    description:
      "Digital content systems built to create a more consistent brand presence across social platforms and customer touchpoints.",
    image: "/images/projects/social/social-cover.jpg",
    href: "/projects/social-media",
    meta: "CONTENT / BRAND",
  },
  {
    number: "06",
    title: "LEAD GENERATION / FUNNELS",
    category: "GROWTH / MARKETING",
    description:
      "Lead-generation journeys connecting campaigns, landing pages, forms, CRM workflows and follow-up into measurable acquisition systems.",
    image: "/images/projects/funnels/funnels-cover.jpg",
    href: "/projects/lead-generation",
    meta: "GROWTH",
  },
  {
    number: "07",
    title: "DIGITAL OPERATIONS",
    category: "BUSINESS SYSTEMS",
    description:
      "A collection of operational projects covering processes, information, workflows and reporting. Business Systems represents multiple projects rather than a single product.",
    image: "/images/projects/operations/operations-cover.jpg",
    href: "/projects/digital-operations",
    meta: "MULTIPLE PROJECTS",
  },
  {
    number: "08",
    title: "ZARIQ",
    category: "PROPTECH / SOFTWARE",
    description:
      "A software concept exploring how technology can connect property data, operational workflows and digital experiences within a scalable platform.",
    image: "/images/projects/zariq/zariq-cover.png",
    href: "/projects/zariq",
    meta: "SOFTWARE CONCEPT",
  },
];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTopline}>
            <span>01 — SELECTED WORK</span>
            <span>JAN WORKS / 2026</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>
                <span className={styles.heroDot} />
                <span>OPERATIONS · SYSTEMS · TECHNOLOGY</span>
              </div>

              <h1>
                BUILT FOR
                <br />
                <span>REAL WORK.</span>
              </h1>

              <p className={styles.heroDescription}>
                A selection of systems, digital products and experiences
                built across operations, automation, web development and
                software engineering.
              </p>

              <div className={styles.heroMeta}>
                <span>08 PROJECTS</span>
                <span>GLOBAL / REMOTE</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/images/projects/arcline/work-dashboard.jpg"
                alt="ARCLINE dashboard and JAN WORKS project workspace"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 52vw"
              />

              <div className={styles.heroVisualOverlay} />

              <div className={styles.heroVisualLabel}>
                <span>OPERATIONS / SYSTEM VIEW</span>
                <span>01 / 08</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT ARCHIVE
      ===================================================== */}
      <section className={styles.archive}>
        <div className={styles.archiveContainer}>
          <div className={styles.archiveHeading}>
            <div>
              <span className={styles.sectionEyebrow}>
                02 — PROJECT ARCHIVE
              </span>

              <h2>
                SELECTED
                <br />
                <span>WORK.</span>
              </h2>
            </div>

            <p>
              Projects across software, systems, digital experiences and
              operational technology.
            </p>
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <Link
                href={project.href}
                className={styles.project}
                key={project.number}
              >
                <div className={styles.projectMain}>
                  <div className={styles.projectNumber}>
                    {project.number}
                  </div>

                  <div className={styles.projectTitle}>
                    <h3>{project.title}</h3>

                    <div className={styles.projectCategory}>
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <div className={styles.projectMeta}>
                    <span>{project.meta}</span>
                  </div>

                  <div className={styles.projectArrow}>↗</div>
                </div>

                <div className={styles.projectReveal}>
                  <div className={styles.projectImage}>
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 800px) 100vw, 420px"
                    />
                  </div>

                  <div className={styles.projectDescription}>
                    <div className={styles.descriptionLine} />

                    <div>
                      <span className={styles.descriptionLabel}>
                        ABOUT THE PROJECT
                      </span>

                      <p>{project.description}</p>
                    </div>

                    <span className={styles.viewProject}>
                      VIEW PROJECT <span>↗</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaTopline}>
            <span>03 — START A PROJECT</span>
            <span>AVAILABLE FOR SELECT PROJECTS</span>
          </div>

          <div className={styles.ctaContent}>
            <div className={styles.ctaLabel}>
              <span className={styles.ctaDot} />
              <span>LET&apos;S BUILD SOMETHING THAT WORKS</span>
            </div>

            <h2>
              HAVE A SYSTEM
              <br />
              <span>THAT NEEDS BUILDING?</span>
            </h2>

            <p>
              Whether you need a digital product, operational system,
              automation workflow or a better-connected digital experience,
              let&apos;s talk about what you are building.
            </p>

            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryCta}>
                <span>START A PROJECT</span>
                <span>↗</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCta}
              >
                <span>WHATSAPP</span>
                <span>↗</span>
              </a>
            </div>

            <div className={styles.contactLinks}>
              <Link href="/contact">CONTACT FORM</Link>
              <a href="mailto:israeljan.78@gmail.com">EMAIL</a>
              <a
                href="https://www.linkedin.com/in/israel-jan-35a702308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          <div className={styles.ctaFooter}>
            <span>OPERATIONS</span>
            <span>SYSTEMS</span>
            <span>SOFTWARE ENGINEERING</span>
          </div>
        </div>
      </section>
    </div>
  );
}