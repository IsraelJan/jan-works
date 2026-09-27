import styles from "./SystemsApproach.module.css";

const approach = [
  {
    number: "01",
    title: "UNDERSTAND",
    description:
      "Understand the business, its people, processes, problems and objectives before defining the solution.",
  },
  {
    number: "02",
    title: "MAP",
    description:
      "Map the existing workflows, information, tools and points of friction to see how everything currently connects.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Design the structure, experience and system around the actual requirements of the business.",
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "Build the website, CRM, automation, application or digital infrastructure required to make the system work.",
  },
  {
    number: "05",
    title: "CONNECT",
    description:
      "Connect systems, data, people and technology so the different parts of the business work together.",
  },
  {
    number: "06",
    title: "IMPROVE",
    description:
      "Measure, refine and improve the system as the business changes, grows and evolves.",
  },
];

export default function SystemsApproach() {
  return (
    <section className={styles.section} id="systems-approach">
      <div className={styles.container}>

        {/* =====================================
            HEADER
        ===================================== */}

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>SYSTEMS &amp; APPROACH</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.heading}>
              I DON&apos;T JUST BUILD
              <span>THE TECHNOLOGY.</span>
            </h2>

            <div className={styles.introduction}>
              <p>
                I start by understanding how the business
                works, then design and build the systems
                that make the work clearer, faster and
                more connected.
              </p>

              <span className={styles.introductionLine} />
            </div>
          </div>
        </header>

        {/* =====================================
            APPROACH
        ===================================== */}

        <div className={styles.approach}>
          {approach.map((step) => (
            <article
              key={step.number}
              className={styles.step}
            >
              <div className={styles.stepNumber}>
                {step.number}
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>

                <p className={styles.stepDescription}>
                  {step.description}
                </p>
              </div>

              <span
                className={styles.stepArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>

        {/* =====================================
            SYSTEM STATEMENT
        ===================================== */}

        <div className={styles.statement}>
          <div className={styles.statementLabel}>
            <span className={styles.statementLine} />
            <span>THE CONNECTION</span>
          </div>

          <div className={styles.systemFlow}>
            <span>BUSINESS</span>
            <span className={styles.flowArrow}>→</span>
            <span>SYSTEM</span>
            <span className={styles.flowArrow}>→</span>
            <span>TECHNOLOGY</span>
          </div>

          <p className={styles.statementText}>
            Better technology starts with a better
            understanding of the system around it.
          </p>
        </div>

      </div>
    </section>
  );
}