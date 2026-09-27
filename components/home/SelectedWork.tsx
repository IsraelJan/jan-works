import Link from "next/link";
import Image from "next/image";

import styles from "./SelectedWork.module.css";

const workCategories = [
  {
    number: "01",
    category: "SOFTWARE ENGINEERING",
    title: "ARCLINE",
    description:
      "Software systems, web applications and digital products designed around real operational needs.",
    projects: [
      "ARCLINE",
      "Web Applications",
      "Dashboards",
      "Software Systems",
    ],
    image: "/images/projects/arcline/arcline-cover.png",
    href: "/projects/arcline",
  },

  {
    number: "02",
    category: "PRODUCT · FRONTEND",
    title: "MARCUS CARS",
    description:
      "Digital product experiences combining interface design, frontend development and conversion-focused thinking.",
    projects: [
      "Marcus Cars",
      "Frontend Interfaces",
      "Responsive Experiences",
      "Product Development",
    ],
    image: "/images/projects/marcus-cars/marcus-cars-cover.png",
    href: "/projects/marcus-cars",
  },

  {
    number: "03",
    category: "WEB DESIGN & DEVELOPMENT",
    title: "DIGITAL EXPERIENCES",
    description:
      "Websites and digital experiences designed to communicate clearly, perform well and support business objectives.",
    projects: [
      "Business Websites",
      "WordPress",
      "Wix",
      "Landing Pages",
    ],
    image: "/images/projects/websites/websites-cover.jpg",
    href: "/projects/web-design",
  },

  {
    number: "04",
    category: "CRM & WORKFLOW SYSTEMS",
    title: "CONNECTED OPERATIONS",
    description:
      "CRM architecture, workflows and integrations that connect people, processes, data and technology.",
    projects: [
      "GoHighLevel",
      "HoneyBook",
      "Workflow Automation",
      "CRM Integrations",
    ],
    image: "/images/projects/crm/crm-cover.jpg",
    href: "/projects/crm-automation",
  },

  {
    number: "05",
    category: "SOCIAL MEDIA & CONTENT",
    title: "DIGITAL PRESENCE",
    description:
      "Content systems and digital campaigns built to support consistent communication and audience growth.",
    projects: [
      "Social Media",
      "Content Systems",
      "Campaigns",
      "Digital Content",
    ],
    image: "/images/projects/social/social-cover.jpg",
    href: "/projects/social-media",
  },

  {
    number: "06",
    category: "LEAD GENERATION & FUNNELS",
    title: "GROWTH SYSTEMS",
    description:
      "Lead capture, funnel architecture and follow-up systems designed to move prospects through the customer journey.",
    projects: [
      "Lead Capture",
      "Conversion Funnels",
      "Email Systems",
      "Follow-up Workflows",
    ],
    image: "/images/projects/funnels/funnels-cover.jpg",
    href: "/projects/lead-generation",
  },

  {
    number: "07",
    category: "DIGITAL OPERATIONS",
    title: "BUSINESS SYSTEMS",
    description:
      "Operational systems that organize information, improve workflows and create more consistent ways of working.",
    projects: [
      "Property Operations",
      "Client Operations",
      "Process Systems",
      "Digital Infrastructure",
    ],
    image: "/images/projects/operations/operations-cover.jpg",
    href: "/projects/digital-operations",
  },

  {
    number: "08",
    category: "PROPTECH",
    title: "ZARIQ",
    description:
      "A property technology concept exploring how software can improve the way real estate information and operations are managed.",
    projects: [
      "ZariQ",
      "Property Technology",
      "Real Estate Systems",
      "Digital Property Tools",
    ],
    image: "/images/projects/zariq/zariq-cover.png",
    href: "/projects/zariq",
  },
];

export default function SelectedWork() {
  return (
    <section className={styles.section} id="selected-work">
      <div className={styles.container}>
        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>SELECTED WORK</span>
            </div>

            <Link href="/work" className={styles.viewAll}>
              <span>View All Work</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className={styles.headingRow}>
            <h2 className={styles.heading}>
              SELECTED
              <span>PROJECTS.</span>
            </h2>

            <div className={styles.introduction}>
              <p>
                A selection of systems, digital products,
                websites and operational work built across
                technology, business and digital operations.
              </p>

              <span className={styles.introductionLine} />
            </div>
          </div>
        </header>

        {/* =====================================
            WORK GRID
        ===================================== */}

        <div className={styles.grid}>
          {workCategories.map((work) => (
            <article
              key={work.number}
              className={styles.workItem}
            >
              {/* Project metadata */}

              <div className={styles.workMeta}>
                <span className={styles.number}>
                  {work.number}
                </span>

                <span className={styles.category}>
                  {work.category}
                </span>
              </div>

              {/* Project image */}

              <Link
                href={work.href}
                className={styles.imageLink}
                aria-label={`Explore ${work.title}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={work.image}
                    alt={`${work.title} project`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    className={styles.image}
                  />

                  <div className={styles.imageShade} />

                  <div className={styles.imageAction}>
                    <span>Explore</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>

              {/* Project content */}

              <div className={styles.content}>
                <div className={styles.titleBlock}>
                  <h3 className={styles.title}>
                    {work.title}
                  </h3>

                  <p className={styles.description}>
                    {work.description}
                  </p>
                </div>

                <div className={styles.projectList}>
                  {work.projects.map((project, index) => (
                    <div
                      key={project}
                      className={styles.project}
                    >
                      <span className={styles.projectNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={styles.projectName}>
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project footer */}

              <div className={styles.workFooter}>
                <span className={styles.footerLabel}>
                  {work.category}
                </span>

                <Link
                  href={work.href}
                  className={styles.exploreLink}
                >
                  <span>Explore Work</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className={styles.bottom}>
          <div className={styles.bottomLabel}>
            <span className={styles.bottomLine} />
            <span>MORE WORK</span>
          </div>

          <Link href="/work" className={styles.bottomLink}>
            <span>Explore the complete work archive</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}