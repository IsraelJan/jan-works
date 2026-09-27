import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    label: "CRM",
    title: "CRM SYSTEMS",
    description:
      "Customer data, pipelines and lifecycle systems structured around the way your business operates.",
    tags: ["CRM Architecture", "Pipelines", "Client Lifecycle"],
  },
  {
    number: "02",
    label: "AUTOMATION",
    title: "WORKFLOW AUTOMATION",
    description:
      "Connected workflows that move information, trigger actions and reduce repetitive work.",
    tags: ["Workflows", "Integrations", "AI"],
  },
  {
    number: "03",
    label: "WEB",
    title: "WEB / DIGITAL",
    description:
      "Websites and digital experiences designed around communication, usability and business objectives.",
    tags: ["Websites", "Landing Pages", "Interfaces"],
  },
  {
    number: "04",
    label: "ENGINEERING",
    title: "SOFTWARE",
    description:
      "Modern applications, dashboards and software systems built around real requirements.",
    tags: ["React", "TypeScript", "APIs"],
  },
  {
    number: "05",
    label: "OPERATIONS",
    title: "DIGITAL OPERATIONS",
    description:
      "Digital infrastructure that organizes processes, information and the way teams work.",
    tags: ["Processes", "Infrastructure", "Reporting"],
  },
  {
    number: "06",
    label: "GROWTH",
    title: "LEAD GENERATION",
    description:
      "Lead capture and conversion systems connecting forms, funnels, follow-up and CRM.",
    tags: ["Funnels", "Lead Capture", "Follow-up"],
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>

        {/* HEADER */}

        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>WHAT I BUILD</span>
            </div>

            <span className={styles.headerIndex}>
              06 SERVICES
            </span>
          </div>

          <div className={styles.headingArea}>
            <h2 className={styles.heading}>
              ONE BUSINESS.
              <span>CONNECTED SYSTEMS.</span>
            </h2>

            <p className={styles.introduction}>
              I bring together the digital capabilities a
              business needs and connect them into systems
              that work together.
            </p>
          </div>
        </header>

        {/* SYSTEM MAP */}

        <div className={styles.systemMap}>

          <div className={styles.mapLabel}>
            <span>SYSTEM MAP</span>
            <span>01 — 06</span>
          </div>

          {/* CONNECTING LINES */}

          <div className={`${styles.connection} ${styles.connectionTop}`} />
          <div className={`${styles.connection} ${styles.connectionRight}`} />
          <div className={`${styles.connection} ${styles.connectionBottom}`} />
          <div className={`${styles.connection} ${styles.connectionLeft}`} />

          {/* TOP LEFT */}

          <article className={`${styles.serviceCard} ${styles.topLeft}`}>
            <div className={styles.cardHeader}>
              <span>{services[0].number}</span>
              <span>{services[0].label}</span>
            </div>

            <h3>{services[0].title}</h3>

            <p>{services[0].description}</p>

            <div className={styles.tags}>
              {services[0].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {/* TOP RIGHT */}

          <article className={`${styles.serviceCard} ${styles.topRight}`}>
            <div className={styles.cardHeader}>
              <span>{services[1].number}</span>
              <span>{services[1].label}</span>
            </div>

            <h3>{services[1].title}</h3>

            <p>{services[1].description}</p>

            <div className={styles.tags}>
              {services[1].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {/* MIDDLE LEFT */}

          <article className={`${styles.serviceCard} ${styles.middleLeft}`}>
            <div className={styles.cardHeader}>
              <span>{services[2].number}</span>
              <span>{services[2].label}</span>
            </div>

            <h3>{services[2].title}</h3>

            <p>{services[2].description}</p>

            <div className={styles.tags}>
              {services[2].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {/* MIDDLE RIGHT */}

          <article className={`${styles.serviceCard} ${styles.middleRight}`}>
            <div className={styles.cardHeader}>
              <span>{services[3].number}</span>
              <span>{services[3].label}</span>
            </div>

            <h3>{services[3].title}</h3>

            <p>{services[3].description}</p>

            <div className={styles.tags}>
              {services[3].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {/* BOTTOM LEFT */}

          <article className={`${styles.serviceCard} ${styles.bottomLeft}`}>
            <div className={styles.cardHeader}>
              <span>{services[4].number}</span>
              <span>{services[4].label}</span>
            </div>

            <h3>{services[4].title}</h3>

            <p>{services[4].description}</p>

            <div className={styles.tags}>
              {services[4].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {/* BOTTOM RIGHT */}

          <article className={`${styles.serviceCard} ${styles.bottomRight}`}>
            <div className={styles.cardHeader}>
              <span>{services[5].number}</span>
              <span>{services[5].label}</span>
            </div>

            <h3>{services[5].title}</h3>

            <p>{services[5].description}</p>

            <div className={styles.tags}>
              {services[5].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {/* CENTRAL NODE */}

          <div className={styles.centerNode}>
            <span className={styles.centerEyebrow}>
              THE CORE
            </span>

            <strong>BUSINESS</strong>

            <span className={styles.centerText}>
              SYSTEM
            </span>

            <span className={styles.centerDot} />
          </div>
        </div>

        {/* BOTTOM STATEMENT */}

        <div className={styles.bottom}>
          <div className={styles.bottomLabel}>
            <span className={styles.bottomLine} />
            <span>THE PRINCIPLE</span>
          </div>

          <div className={styles.bottomContent}>
            <div>
              <p className={styles.statement}>
                BUILD WHAT THE BUSINESS NEEDS.
              </p>

              <p className={styles.subStatement}>
                CONNECT WHAT IT ALREADY HAS.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.cta}
            >
              <span>Start a Project</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}