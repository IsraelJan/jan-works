import styles from "./Capabilities.module.css";

const capabilities = [
  {
    number: "01",
    title: "Operations",
    icon: "people",
    statement: "I understand how businesses actually operate.",
    items: [
      "Business Process",
      "CRM",
      "SOPs",
      "Lead Management",
      "Client Lifecycle",
      "Reporting",
    ],
  },
  {
    number: "02",
    title: "Systems",
    icon: "settings",
    statement: "I connect the moving parts.",
    items: [
      "CRM Architecture",
      "Workflow Automation",
      "API Integrations",
      "AI Systems",
      "Data Flows",
      "Business Intelligence",
    ],
  },
  {
    number: "03",
    title: "Engineering",
    icon: "laptop",
    statement: "I turn systems into digital products.",
    items: [
      "Web Applications",
      "Dashboards",
      "Frontend Development",
      "Responsive Interfaces",
      "APIs",
      "Software Architecture",
    ],
  },
];

function CapabilityIcon({
  type,
}: {
  type: "people" | "settings" | "laptop";
}) {
  if (type === "people") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={styles.icon}
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.5-3.2 2.3-5 5.5-5s5 1.8 5.5 5" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M15 14.5c2.8.1 4.5 1.6 5 4.5" />
      </svg>
    );
  }

  if (type === "settings") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        <path d="M19 13.5v-3l-2-.5a7.4 7.4 0 0 0-.8-1.9l1.1-1.7-2.1-2.1-1.7 1.1a7.4 7.4 0 0 0-1.9-.8l-.5-2h-3l-.5 2a7.4 7.4 0 0 0-1.9.8L4 4.3 1.9 6.4 3 8.1a7.4 7.4 0 0 0-.8 1.9l-2 .5v3l2 .5c.2.7.4 1.3.8 1.9l-1.1 1.7L4 19.7l1.7-1.1c.6.4 1.2.6 1.9.8l.5 2h3l.5-2c.7-.2 1.3-.4 1.9-.8l1.7 1.1 1.7 1.1 2.1-2.1-1.1-1.7c.4-.6.6-1.2.8-1.9l2-.5Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.icon}
    >
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6.5 7.5h11M6.5 10h7" />
    </svg>
  );
}

export default function Capabilities() {
  return (
    <section className={styles.section} id="capabilities">
      <div className={styles.container}>
        <div className={styles.capabilitiesBox}>
          {/* =====================================
              HEADER
          ===================================== */}

          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>CAPABILITIES</span>
            </div>

            <div className={styles.headerContent}>
              <h2 className={styles.heading}>
                FROM BUSINESS OPERATIONS TO
                <span>DIGITAL SYSTEMS.</span>
              </h2>

              <p className={styles.introduction}>
                I work across the operational and technical
                layers of a business understanding how
                things work, designing better systems, and
                building the technology that connects them.
              </p>
            </div>
          </div>

          {/* =====================================
              CAPABILITY COLUMNS
          ===================================== */}

          <div className={styles.grid}>
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className={styles.capability}
              >
                <div className={styles.identity}>
                  <div className={styles.identityTop}>
                    <span className={styles.number}>
                      {capability.number}
                    </span>

                    <CapabilityIcon
                      type={
                        capability.icon as
                          | "people"
                          | "settings"
                          | "laptop"
                      }
                    />
                  </div>

                  <h3>{capability.title}</h3>

                  <p>{capability.statement}</p>
                </div>

                <ul className={styles.services}>
                  {capability.items.map((item) => (
                    <li key={item} className={styles.service}>
                      <span className={styles.bullet}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* =====================================
              ONE APPROACH
          ===================================== */}

          <div className={styles.approach}>
            <div className={styles.approachLabel}>
              <span className={styles.approachLine} />
              <span>ONE APPROACH</span>
            </div>

            <p className={styles.approachText}>
              Understand the business. Build the system.
              Make the technology work together.
            </p>

            <span
              className={styles.approachArrow}
              aria-hidden="true"
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}