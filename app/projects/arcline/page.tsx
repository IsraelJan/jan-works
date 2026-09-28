import Image from "next/image";
import Link from "next/link";
import styles from "./arcline.module.css";

const githubUrl = "https://github.com/IsraelJan/ARCLINE";
const liveUrl = "https://arcline-gold.vercel.app/";

const flowItems = [
  {
    number: "01",
    title: "PROJECTS",
    description:
      "Organise the work, information and operational activity moving through the system.",
    image: "/images/projects/arcline/projects.png",
  },
  {
    number: "02",
    title: "CLIENTS",
    description:
      "Keep client information connected to projects, tasks and activity around it.",
    image: "/images/projects/arcline/clients.png",
  },
  {
    number: "03",
    title: "TASKS",
    description:
      "Turn operational work into structured tasks with clear ownership and progress.",
    image: "/images/projects/arcline/tasks.png",
  },
  {
    number: "04",
    title: "CALENDAR",
    description:
      "Connect schedules, deadlines and activity so the system reflects what happens next.",
    image: "/images/projects/arcline/calendar.png",
  },
  {
    number: "05",
    title: "REPORTING",
    description:
      "Bring activity together into a clearer operational view for decisions and improvement.",
    image: "/images/projects/arcline/reporting.png",
  },
];

const architectureItems = [
  {
    number: "01",
    title: "USER INTERFACE",
    description:
      "The interface through which users interact with the system.",
  },
  {
    number: "02",
    title: "APPLICATION LAYER",
    description:
      "The logic responsible for managing workflows, records and system behaviour.",
  },
  {
    number: "03",
    title: "DATA LAYER",
    description:
      "The structured data required to store, connect and retrieve information.",
  },
  {
    number: "04",
    title: "INTEGRATION LAYER",
    description:
      "The connection point for external services, APIs and future integrations.",
  },
];

const prototypeScreens = [
  {
    title: "Projects",
    description: "Manage and view operational projects",
    image: "/images/projects/arcline/projects.png",
    className: styles.projectsScreen,
  },
  {
    title: "Clients",
    description: "Connected client information",
    image: "/images/projects/arcline/clients.png",
    className: styles.clientsScreen,
  },
  {
    title: "Tasks",
    description: "Track work and operational progress",
    image: "/images/projects/arcline/tasks.png",
    className: styles.tasksScreen,
  },
  {
    title: "Calendar",
    description: "Organise activity and upcoming work",
    image: "/images/projects/arcline/calendar.png",
    className: styles.calendarScreen,
  },
];

const tools = [
  {
    name: "Next.js",
    type: "Framework",
    image: "/images/projects/arcline/tools/nextjs.png",
  },
  {
    name: "TypeScript",
    type: "Language",
    image: "/images/projects/arcline/tools/typescript.png",
  },
  {
    name: "React",
    type: "Library",
    image: "/images/projects/arcline/tools/react.png",
  },
  {
    name: "Tailwind CSS",
    type: "Styling",
    image: "/images/projects/arcline/tools/tailwind.png",
  },
  {
    name: "Prisma",
    type: "ORM",
    image: "/images/projects/arcline/tools/prisma.png",
  },
  {
    name: "PostgreSQL",
    type: "Database",
    image: "/images/projects/arcline/tools/postgresql.png",
  },
  {
    name: "Vercel",
    type: "Deployment",
    image: "/images/projects/arcline/tools/vercel.png",
  },
  {
    name: "Git & GitHub",
    type: "Version Control",
    image: "/images/projects/arcline/tools/github.png",
  },
  {
    name: "ESLint",
    type: "Code Quality",
    image: "/images/projects/arcline/tools/eslint.png",
  },
  {
    name: "Figma",
    type: "UI/UX Design",
    image: "/images/projects/arcline/tools/figma.png",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Define the problem and requirements.",
  },
  {
    number: "02",
    title: "Model",
    description: "Structure the data, flows and relationships.",
  },
  {
    number: "03",
    title: "Design",
    description: "Plan the architecture and user experience.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop and connect the system components.",
  },
  {
    number: "05",
    title: "Test",
    description: "Validate functionality and user flows.",
  },
  {
    number: "06",
    title: "Refine",
    description: "Improve based on feedback and new needs.",
  },
];

export default function ArclinePage() {
  return (
    <div className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroTopline}>
              <span>01 — ARCLINE</span>
              <span>SOFTWARE SYSTEM</span>
            </div>

            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowMark} />
                <span>OPERATING SOFTWARE</span>
              </div>

              <h1>
                ARC<span>LINE</span>
              </h1>

              <p className={styles.heroDescription}>
                A software system being built to connect operational
                information, workflows, data and reporting into one
                structured environment.
              </p>

              <div className={styles.status}>
                <span className={styles.statusDot} />
                <span>IN PROGRESS / ACTIVE DEVELOPMENT</span>
              </div>

              <div className={styles.heroActions}>
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  <span>⌘</span>
                  VIEW ON GITHUB
                  <span>↗</span>
                </Link>

                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryButton}
                >
                  <span>◫</span>
                  VIEW LIVE APP
                  <span>↗</span>
                </Link>
              </div>
            </div>

            <div className={styles.heroBottom}>
              <span>OPERATING SOFTWARE</span>
              <span>SOFTWARE ENGINEERING</span>
              <span>ACTIVE DEVELOPMENT</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/images/projects/arcline/arcline-hero.png"
              alt="ARCLINE operating software interface"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
            />

            <div className={styles.heroImageShade} />
            <div className={styles.heroImageLabel}>
              <span>ARCLINE / SYSTEM VIEW</span>
              <span>ACTIVE BUILD</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT STATUS
      ===================================================== */}
      <section className={styles.statusSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span>02 — PROJECT STATUS</span>
          </div>

          <div className={styles.statusGrid}>
            <div className={styles.statusCard}>
              <span className={styles.statusCardIcon}>◯</span>
              <div>
                <small>PROJECT</small>
                <strong>ARCLINE</strong>
              </div>
            </div>

            <div className={styles.statusCard}>
              <span className={styles.statusCardIcon}>▤</span>
              <div>
                <small>TYPE</small>
                <strong>OPERATING SOFTWARE</strong>
              </div>
            </div>

            <div className={styles.statusCard}>
              <span className={styles.statusCardIcon}>◇</span>
              <div>
                <small>STATE</small>
                <strong>IN DEVELOPMENT</strong>
              </div>
            </div>

            <div className={styles.statusCard}>
              <span className={styles.statusCardIcon}>✦</span>
              <div>
                <small>FOCUS</small>
                <strong>SOFTWARE ENGINEERING</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY ARCLINE
      ===================================================== */}
      <section className={styles.whySection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span>03 — WHY ARCLINE</span>
            <small>SYSTEM THINKING BEFORE FEATURE BUILDING</small>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyMain}>
              <div className={styles.whyNumber}>01</div>

              <h2>
                BUILDING THE{" "}
                <span>SYSTEM</span>
                <br />
                BEFORE BUILDING
                <br />
                EVERY FEATURE.
              </h2>

              <p>
                ARCLINE started from an operational problem: important
                information, workflows and decisions often sit across
                disconnected tools.
              </p>
            </div>

            <div className={styles.whyDetails}>
              <div className={styles.whyDetailIntro}>
                <span className={styles.blueRule} />

                <p>
                  The goal is to bring major operational areas into one
                  connected environment so information can move from one
                  part of the application to another.
                </p>
              </div>

              <div className={styles.principles}>
                <div className={styles.principle}>
                  <span>01</span>
                  <div>
                    <strong>DATA</strong>
                    <p>Structured operational information.</p>
                  </div>
                </div>

                <div className={styles.principle}>
                  <span>02</span>
                  <div>
                    <strong>WORKFLOW</strong>
                    <p>Processes that connect actions together.</p>
                  </div>
                </div>

                <div className={styles.principle}>
                  <span>03</span>
                  <div>
                    <strong>VISIBILITY</strong>
                    <p>A clearer view of what is happening.</p>
                  </div>
                </div>

                <div className={styles.principle}>
                  <span>04</span>
                  <div>
                    <strong>SCALABILITY</strong>
                    <p>An architecture that can grow with the system.</p>
                  </div>
                </div>
              </div>

              <div className={styles.whyNote}>
                <span>THE PRINCIPLE</span>
                <strong>UNDERSTAND THE SYSTEM FIRST.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM FLOW
      ===================================================== */}
      <section className={styles.flowSection}>
        <div className={styles.flowContainer}>
          <div className={styles.darkSectionHeading}>
            <span>04 — SYSTEM FLOW</span>
            <small>CONNECTED OPERATIONAL AREAS</small>
          </div>

          <div className={styles.flowTrack}>
            {flowItems.map((item, index) => (
              <div className={styles.flowItem} key={item.number}>
                <div className={styles.flowCard}>
                  <div className={styles.flowImage}>
                    <Image
                      src={item.image}
                      alt={`${item.title} ARCLINE interface`}
                      fill
                      sizes="(max-width: 800px) 90vw, 240px"
                    />

                    <span>{item.number}</span>
                  </div>

                  <div className={styles.flowText}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                {index < flowItems.length - 1 && (
                  <div className={styles.flowArrow}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM ARCHITECTURE
      ===================================================== */}
      <section className={styles.architectureSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span>05 — SYSTEM ARCHITECTURE</span>
            <small>A MODULAR STRUCTURE FOR A SCALABLE SYSTEM</small>
          </div>

          <div className={styles.architectureGrid}>
            <div className={styles.architectureIntro}>
              <div className={styles.architectureLabel}>
                <span>ARCHITECTURE / 01—04</span>
              </div>

              <h2>
                A SYSTEM
                <br />
                BUILT IN
                <br />
                <span>LAYERS.</span>
              </h2>

              <p>
                The architecture is designed to keep each layer clearly
                connected while maintaining flexibility for future growth,
                integrations and additional application features.
              </p>

              <div className={styles.architectureCallout}>
                <span>DEVELOPMENT NOTE</span>
                <p>
                  The architecture is still evolving as implementation
                  continues.
                </p>
              </div>
            </div>

            <div className={styles.architectureVisual}>
              <div className={styles.architectureGlass}>
                <svg
                  viewBox="0 0 560 470"
                  role="img"
                  aria-label="ARCLINE four-layer software architecture"
                >
                  <defs>
                    <linearGradient
                      id="archLayerOne"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#dceefe" />
                    </linearGradient>

                    <linearGradient
                      id="archLayerTwo"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f5fbff" />
                      <stop offset="100%" stopColor="#bcdcf5" />
                    </linearGradient>

                    <linearGradient
                      id="archLayerThree"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f0f4f7" />
                      <stop offset="100%" stopColor="#c4d0da" />
                    </linearGradient>

                    <linearGradient
                      id="archLayerFour"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#e9f5ff" />
                      <stop offset="100%" stopColor="#8ebbe2" />
                    </linearGradient>

                    <filter
                      id="archShadow"
                      x="-30%"
                      y="-30%"
                      width="170%"
                      height="190%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="16"
                        stdDeviation="12"
                        floodColor="#56728a"
                        floodOpacity=".18"
                      />
                    </filter>
                  </defs>

                  <g filter="url(#archShadow)">
                    <polygon
                      points="280,25 465,105 280,185 95,105"
                      fill="url(#archLayerOne)"
                      stroke="#a9cfee"
                      strokeWidth="2"
                    />

                    <polygon
                      points="280,105 465,185 280,265 95,185"
                      fill="url(#archLayerTwo)"
                      stroke="#92bfe5"
                      strokeWidth="2"
                    />

                    <polygon
                      points="280,185 465,265 280,345 95,265"
                      fill="url(#archLayerThree)"
                      stroke="#b8c8d5"
                      strokeWidth="2"
                    />

                    <polygon
                      points="280,265 465,345 280,425 95,345"
                      fill="url(#archLayerFour)"
                      stroke="#7faed8"
                      strokeWidth="2"
                    />
                  </g>

                  <g
                    fill="#1a2c3c"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    <text x="280" y="111" fontSize="21">
                      01
                    </text>

                    <text x="280" y="191" fontSize="21">
                      02
                    </text>

                    <text x="280" y="271" fontSize="21">
                      03
                    </text>

                    <text x="280" y="351" fontSize="21">
                      04
                    </text>
                  </g>

                  <g
                    stroke="#9fc4ed"
                    strokeWidth="2"
                    strokeDasharray="4 5"
                    fill="none"
                  >
                    <path d="M465 105 H525" />
                    <path d="M465 185 H525" />
                    <path d="M465 265 H525" />
                    <path d="M465 345 H525" />
                  </g>

                  <g
                    fill="#7099bd"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                  >
                    <text x="518" y="98" fontSize="10">
                      UI
                    </text>
                    <text x="518" y="178" fontSize="10">
                      APP
                    </text>
                    <text x="518" y="258" fontSize="10">
                      DATA
                    </text>
                    <text x="518" y="338" fontSize="10">
                      API
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            <div className={styles.architectureList}>
              {architectureItems.map((item) => (
                <div className={styles.architectureItem} key={item.number}>
                  <div className={styles.architectureItemNumber}>
                    {item.number}
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL PROTOTYPE
      ===================================================== */}
      <section className={styles.prototypeSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span>06 — VISUAL PROTOTYPE</span>
            <small>A WORKING INTERFACE IN DEVELOPMENT</small>
          </div>

          <div className={styles.prototypeStage}>
            <div className={styles.prototypeAmbient} />

            {prototypeScreens.map((screen) => (
              <div
                className={`${styles.prototypeScreen} ${screen.className}`}
                key={screen.title}
              >
                <div className={styles.prototypeFrame}>
                  <Image
                    src={screen.image}
                    alt={`${screen.title} ARCLINE screen`}
                    fill
                    sizes="(max-width: 850px) 45vw, 220px"
                  />
                </div>

                <div className={styles.prototypeCaption}>
                  <strong>{screen.title}</strong>
                  <span>{screen.description}</span>
                </div>
              </div>
            ))}

            <div className={styles.prototypeCenter}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <span />
                  <span />
                  <span />
                  <small>ARCLINE / DASHBOARD</small>
                </div>

                <div className={styles.browserScreen}>
                  <Image
                    src="/images/projects/arcline/dashboard.png"
                    alt="ARCLINE dashboard prototype"
                    fill
                    sizes="(max-width: 850px) 94vw, 650px"
                  />
                </div>
              </div>

              <div className={styles.dashboardLabel}>
                <strong>Dashboard</strong>
                <span>Overview of key operational metrics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ===================================================== */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsContainer}>
          <div className={styles.darkSectionHeading}>
            <span>07 — TOOLS USED</span>
            <small>A MODERN WEB TECHNOLOGY STACK</small>
          </div>

          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <div className={styles.tool} key={tool.name}>
                <div className={styles.toolLogo}>
                  <Image
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    width={52}
                    height={52}
                  />
                </div>

                <strong>{tool.name}</strong>
                <span>{tool.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING PROCESS
      ===================================================== */}
      <section className={styles.processSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <span>08 — ENGINEERING PROCESS</span>
            <small>AN ITERATIVE DEVELOPMENT CYCLE</small>
          </div>

          <div className={styles.processTrack}>
            {process.map((item, index) => (
              <div className={styles.processItem} key={item.number}>
                <div className={styles.processNumber}>{item.number}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {index < process.length - 1 && (
                  <span className={styles.processArrow}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GITHUB + CURRENT STATE
      ===================================================== */}
      <section className={styles.caseEvidence}>
        <div className={styles.evidenceGrid}>
          <div className={styles.githubPanel}>
            <div className={styles.panelHeading}>
              <span>09 — GITHUB</span>
            </div>

            <div className={styles.githubContent}>
              <div>
                <h2>
                  THE CODE IS PART
                  <br />
                  OF THE CASE STUDY.
                </h2>

                <p>
                  ARCLINE is an active software engineering project. The
                  repository provides direct evidence of the implementation,
                  structure and ongoing development of the system.
                </p>

                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.darkButton}
                >
                  VIEW ARCLINE ON GITHUB
                  <span>↗</span>
                </Link>
              </div>

              <div className={styles.codeVisual}>
                <div className={styles.codeWindow}>
                  <div className={styles.codeDots}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.codeLines}>
                    <span>01</span>
                    <span>const arcline = createSystem();</span>
                    <span>02</span>
                    <span>const projects = await db.projects();</span>
                    <span>03</span>
                    <span>connect(projects, clients, tasks);</span>
                    <span>04</span>
                    <span>return operatingEnvironment;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.currentPanel}>
            <div className={styles.panelHeading}>
              <span>10 — CURRENT STATE</span>
            </div>

            <div className={styles.currentContent}>
              <div className={styles.currentEyebrow}>
                <span className={styles.currentDot} />
                ACTIVE DEVELOPMENT
              </div>

              <h2>
                THE SYSTEM IS BEING
                <br />
                BUILT, TESTED AND REFINED.
              </h2>

              <p>
                ARCLINE is not presented as a finished commercial product.
                It is an active software engineering project where the
                application structure, workflows and technical decisions
                continue to evolve.
              </p>

              <div className={styles.progress}>
                <div className={styles.progressTrack}>
                  <span />
                </div>

                <div className={styles.progressMeta}>
                  <small>ONGOING DEVELOPMENT</small>
                  <strong>60%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}
      <section className={styles.nextProject}>
        <div className={styles.nextProjectInner}>
          <div className={styles.nextProjectHeading}>
            <span>11 — NEXT PROJECT</span>
            <div className={styles.nextProjectArrow}>↗</div>
          </div>

          <div className={styles.nextProjectCard}>
            <div className={styles.nextProjectImage}>
              <Image
                src="/images/projects/arcline/marcus-cars.png"
                alt="Marcus Cars frontend development project"
                fill
                sizes="100vw"
              />

              <div className={styles.nextProjectImageOverlay} />
            </div>

            <div className={styles.nextProjectInfo}>
              <div>
                <span>FRONTEND DEVELOPMENT</span>
                <h2>MARCUS CARS</h2>
              </div>

              <Link href="/projects/marcus-cars">
                VIEW PROJECT
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}