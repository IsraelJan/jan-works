import Link from "next/link";
import styles from "./ExperiencePreview.module.css";

const experience = [
  {
    number: "01",
    category: "DIGITAL OPERATIONS",
    title: "OPERATIONS",
    description:
      "Managing digital operations, client workflows and business processes across technology-driven environments.",
    capabilities: [
      "Client Operations",
      "Process Management",
      "Property Operations",
      "Digital Infrastructure",
    ],
  },
  {
    number: "02",
    category: "CRM & AUTOMATION",
    title: "SYSTEMS",
    description:
      "Designing connected CRM and automation systems that organize information, streamline workflows and improve how teams operate.",
    capabilities: [
      "CRM Architecture",
      "Workflow Automation",
      "API Integrations",
      "AI Systems",
    ],
  },
  {
    number: "03",
    category: "WEB / DIGITAL",
    title: "DIGITAL EXPERIENCES",
    description:
      "Designing and developing websites, landing pages and digital experiences around business goals and user needs.",
    capabilities: [
      "Web Design",
      "Frontend Development",
      "WordPress",
      "Wix",
    ],
  },
  {
    number: "04",
    category: "SOFTWARE ENGINEERING",
    title: "ENGINEERING",
    description:
      "Building modern web applications and software systems with a growing focus on scalable frontend architecture and full-stack development.",
    capabilities: [
      "React",
      "TypeScript",
      "APIs",
      "Web Applications",
    ],
  },
];

export default function ExperiencePreview() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>EXPERIENCE</span>
            </div>

            <a
              href="/documents/Israel-Jan-CV.pdf"
              download
              className={styles.cvButton}
            >
              <span>Download CV</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.heading}>
              FROM OPERATIONS
              <span>TO ENGINEERING.</span>
            </h2>

            <div className={styles.introduction}>
              <p>
                My work has evolved across digital operations,
                CRM systems, automation, web development and
                software engineering.
              </p>

              <span className={styles.introductionLine} />
            </div>
          </div>
        </header>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <article
              key={item.number}
              className={styles.experienceItem}
            >
              <div className={styles.number}>
                {item.number}
              </div>

              <div className={styles.category}>
                {item.category}
              </div>

              <div className={styles.main}>
                <h3 className={styles.title}>
                  {item.title}
                </h3>

                <p className={styles.description}>
                  {item.description}
                </p>
              </div>

              <div className={styles.capabilities}>
                {item.capabilities.map((capability) => (
                  <span
                    key={capability}
                    className={styles.capability}
                  >
                    {capability}
                  </span>
                ))}
              </div>

              <span
                className={styles.arrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLabel}>
            <span className={styles.bottomLine} />
            <span>THE COMMON THREAD</span>
          </div>

          <div className={styles.bottomContent}>
            <div className={styles.bottomText}>
              <p>
                Understanding complex systems and making
                them work better.
              </p>

              <span className={styles.cvMeta}>
                PDF · UPDATED 2026
              </span>
            </div>

            <a
              href="/documents/Israel-Jan-CV.pdf"
              download
              className={styles.bottomCvButton}
            >
              <span>Download CV</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}