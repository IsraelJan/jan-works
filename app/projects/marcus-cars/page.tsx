import Image from "next/image";
import Link from "next/link";
import styles from "./marcus-cars.module.css";

const liveUrl = "https://marcus-cars-frontend.vercel.app/";
const githubUrl = "https://github.com/IsraelJan/marcus-cars-frontend";
const whatsappUrl = "https://wa.me/254115889691";
const email = "mailto:israeljan.78@gmail.com";

const productAreas = [
  {
    number: "01",
    title: "VEHICLE DISCOVERY",
    description:
      "A marketplace experience designed to help users discover vehicles through strong imagery, structured information and clear actions.",
  },
  {
    number: "02",
    title: "VEHICLE DETAIL",
    description:
      "A focused vehicle experience where users can understand the vehicle before deciding whether to save, contact or participate.",
  },
  {
    number: "03",
    title: "LIVE AUCTIONS",
    description:
      "An interface centred around auction status, timing, current bids, activity and the primary bidding action.",
  },
  {
    number: "04",
    title: "ACCOUNT EXPERIENCE",
    description:
      "A structured account environment for saved vehicles, activity, bid history, profiles and future user functionality.",
  },
];

const userJourney = [
  "DISCOVER",
  "SEARCH",
  "FILTER",
  "VIEW VEHICLE",
  "UNDERSTAND",
  "SAVE / CONTACT / BID",
  "MANAGE ACTIVITY",
];

const tools = [
  {
    number: "01",
    name: "NEXT.JS",
    icon: "/icons/next.js.svg",
  },
  {
    number: "02",
    name: "REACT",
    icon: "/icons/react.svg",
  },
  {
    number: "03",
    name: "TYPESCRIPT",
    icon: "/icons/typescript.svg",
  },
  {
    number: "04",
    name: "TAILWIND CSS",
    icon: "/icons/css.svg",
  },
  {
    number: "05",
    name: "GITHUB",
    icon: "/icons/github.svg",
  },
];

const frontendWork = [
  "Marketplace interface",
  "Vehicle listing experience",
  "Vehicle detail pages",
  "Live auction interface",
  "Account experience",
  "Saved vehicles",
  "Activity and bid history",
  "Responsive layouts",
  "Reusable components",
  "Structured vehicle data",
  "Application routing",
  "Product-oriented frontend architecture",
];

const architectureLayers = [
  {
    number: "01",
    title: "FRONTEND",
    description:
      "The customer-facing layer for vehicles, auctions, accounts and product actions.",
  },
  {
    number: "02",
    title: "APPLICATION SERVICES",
    description:
      "The layer that will connect authentication, business logic and platform functionality to the interface.",
  },
  {
    number: "03",
    title: "DATA & AUCTION SYSTEM",
    description:
      "The future data and auction infrastructure supporting vehicles, users, bids and real-time activity.",
  },
  {
    number: "04",
    title: "PLATFORM SERVICES",
    description:
      "Payments, notifications and administration can connect around the core product as it develops.",
  },
];

export default function MarcusCarsPage() {
  return (
    <div className={styles.page}>
      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTopline}>
            <span>01 — CASE STUDY</span>
            <span>MARCUS CARS / 2026</span>
          </div>

          <div className={styles.heroIntro}>
            <div className={styles.heroEyebrow}>
              <span className={styles.blueDot} />
              LIVE AUTOMOTIVE AUCTION PLATFORM
            </div>

            <h1>
              BUILDING THE
              <br />
              <span>FRONTEND FOR THE DEAL.</span>
            </h1>

            <p>
              Marcus Cars was approached as more than a vehicle website. The
              frontend was designed as the customer-facing layer of a digital
              automotive marketplace built around vehicle discovery, live
              auctions, bidding and the buying and selling journey.
            </p>
          </div>

          <div className={styles.heroProduct}>
            <div className={styles.heroProductImage}>
              <video
                className={styles.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/projects/arcline/marcus-cars.png"
              >
                <source
                  src="/videos/marcus-cars-hero.mp4"
                  type="video/mp4"
                />
              </video>

              <div className={styles.heroImageOverlay} />

              <div className={styles.heroImageLabel}>
                <span>MARCUS CARS / FRONTEND EXPERIENCE</span>
                <span>PRODUCT VIEW / 01</span>
              </div>
            </div>
          </div>

          <div className={styles.heroStory}>
            <div className={styles.storyItem}>
              <span>THE CHALLENGE</span>
              <p>
                Create a digital automotive experience where finding a vehicle,
                understanding an auction and taking action feel connected.
              </p>
            </div>

            <div className={styles.storyItem}>
              <span>THE APPROACH</span>
              <p>
                Structure the frontend around the customer journey rather than
                treating each page as an isolated interface.
              </p>
            </div>

            <div className={styles.storyItem}>
              <span>THE RESULT</span>
              <p>
                A responsive frontend product prototype designed as the
                foundation for a larger automotive auction platform.
              </p>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <div>
              <span>ROLE</span>
              <strong>FRONTEND DEVELOPMENT</strong>
            </div>

            <div>
              <span>PRODUCT</span>
              <strong>AUTOMOTIVE AUCTION</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>ACTIVE PROTOTYPE</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>NEXT.JS / REACT / TYPESCRIPT</strong>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              VIEW LIVE PLATFORM <span>↗</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              VIEW GITHUB <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — PRODUCT OBJECTIVE
      ===================================================== */}

      <section className={styles.objectiveSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>02 — PRODUCT OBJECTIVE</span>
            <span>WHY THE FRONTEND EXISTS</span>
          </div>

          <div className={styles.objectiveGrid}>
            <div>
              <span className={styles.sectionEyebrow}>
                FROM LISTING TO AUCTION EXPERIENCE
              </span>

              <h2>
                NOT JUST
                <br />
                <span>A CAR WEBSITE.</span>
              </h2>
            </div>

            <div className={styles.objectiveCopy}>
              <p>
                The goal was to create a frontend experience capable of
                supporting the behaviour of an automotive marketplace.
              </p>

              <p>
                Instead of simply displaying vehicles, the interface needed to
                help users understand what was available, what was happening
                live and what they could do next.
              </p>

              <div className={styles.objectiveFormula}>
                <span>VEHICLE</span>
                <i>→</i>
                <span>INFORMATION</span>
                <i>→</i>
                <span>AUCTION</span>
                <i>→</i>
                <strong>ACTION</strong>
              </div>
            </div>
          </div>

          <div className={styles.productGrid}>
            {productAreas.map((item) => (
              <article className={styles.productCard} key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — USER JOURNEY
      ===================================================== */}

      <section className={styles.journeySection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>03 — USER JOURNEY</span>
            <span>THE EXPERIENCE IS THE PRODUCT</span>
          </div>

          <div className={styles.sectionHeadingDark}>
            <div>
              <span className={styles.sectionEyebrow}>
                DESIGNED AROUND DECISION MAKING
              </span>

              <h2>
                FROM DISCOVERY
                <br />
                <span>TO ACTION.</span>
              </h2>
            </div>

            <p>
              The frontend was structured around the sequence a customer
              naturally follows when evaluating and participating in an
              automotive marketplace.
            </p>
          </div>

          <div className={styles.journeyFlow}>
            {userJourney.map((step, index) => (
              <div className={styles.journeyStep} key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>

                {index < userJourney.length - 1 && (
                  <i aria-hidden="true">→</i>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — VISUAL PROTOTYPE
      ===================================================== */}

      <section className={styles.prototypeSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>04 — VISUAL PROTOTYPE</span>
            <span>INTERFACE / PRODUCT DIRECTION</span>
          </div>

          <div className={styles.prototypeHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                TRANSLATING THE PRODUCT INTO INTERFACE
              </span>

              <h2>
                MAKING THE
                <br />
                <span>PRODUCT VISIBLE.</span>
              </h2>
            </div>

            <p>
              The prototype brings the key customer-facing experiences into
              one visual system from understanding vehicles and selling them
              to learning how the marketplace works and participating in
              auctions.
            </p>
          </div>

          <div className={styles.prototypeBoard}>
            <div className={styles.prototypeMain}>
              <div
                className={`${styles.prototypeScreen} ${styles.screenPrimary}`}
              >
                <Image
                  src="/images/projects/marcus-cars/auction.png"
                  alt="Marcus Cars primary live auction experience"
                  fill
                  sizes="(max-width: 900px) 100vw, 72vw"
                />
              </div>

              <div
                className={`${styles.prototypeScreen} ${styles.screenDiscovery}`}
              >
                <Image
                  src="/images/projects/marcus-cars/vehicle-discovery.png"
                  alt="Marcus Cars vehicle discovery experience"
                  fill
                  sizes="(max-width: 900px) 100vw, 72vw"
                />
              </div>

              <div
                className={`${styles.prototypeScreen} ${styles.screenAuction}`}
              >
                <Image
                  src="/images/projects/marcus-cars/vehicle-sell.png"
                  alt="Marcus Cars vehicle selling experience"
                  fill
                  sizes="(max-width: 900px) 100vw, 72vw"
                />
              </div>

              <div
                className={`${styles.prototypeScreen} ${styles.screenAccount}`}
              >
                <Image
                  src="/images/projects/marcus-cars/how-it-works.png"
                  alt="Marcus Cars how it works experience"
                  fill
                  sizes="(max-width: 900px) 100vw, 72vw"
                />
              </div>

              <div className={styles.prototypeMainOverlay} />

              <div className={styles.prototypeLabel}>
                <span>01 / PRIMARY EXPERIENCE</span>
                <strong>USER JOURNEY</strong>
              </div>
            </div>

            <div className={styles.prototypeSide}>
              <div
                className={`${styles.prototypeConcept} ${styles.prototypePrimary}`}
              >
                <span>01</span>
                <strong>USER JOURNEY</strong>
                <p>
                  The primary product experience bringing vehicle information,
                  auction status and bidding activity together.
                </p>
              </div>

              <div
                className={`${styles.prototypeConcept} ${styles.prototypeDiscovery}`}
              >
                <span>02</span>
                <strong>VEHICLE DISCOVERY</strong>
                <p>
                  Clear visual hierarchy for browsing and understanding
                  vehicles.
                </p>
              </div>

              <div
                className={`${styles.prototypeConcept} ${styles.prototypeAuction}`}
              >
                <span>03</span>
                <strong>VEHICLE SELLING</strong>
                <p>
                  A dedicated path for clients who want to bring their vehicle
                  to the marketplace.
                </p>
              </div>

              <div
                className={`${styles.prototypeConcept} ${styles.prototypeAccount}`}
              >
                <span>04</span>
                <strong>HOW IT WORKS</strong>
                <p>
                  Explaining the marketplace journey so new users can
                  understand how discovery, auctions and participation work.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.prototypeCaption}>
            <span>HOVER TO EXPLORE THE PRODUCT</span>

            <p>
              Each panel represents a different customer-facing part of the
              platform. Hovering over a panel changes the main visual so the
              interface can be explored as a connected product rather than a
              collection of separate screens.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — LIVE AUCTION
      ===================================================== */}

      <section className={styles.auctionSection}>
        <div className={styles.container}>
          <div className={styles.auctionGrid}>
            <div className={styles.auctionCopy}>
              <span className={styles.sectionEyebrow}>
                05 — LIVE AUCTION
              </span>

              <h2>
                DESIGNED FOR
                <br />
                <span>LIVE DECISIONS.</span>
              </h2>

              <p>
                The auction experience was treated as one of the platform&apos;s
                core product moments. The customer needs to understand what is
                being sold, whether the auction is live, the current bid, the
                remaining time and the next available action.
              </p>

              <div className={styles.auctionPoints}>
                <div>
                  <span>01</span>
                  <p>Live auction status</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Countdown and timing</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Current bid and activity</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Clear bidding action</p>
                </div>
              </div>
            </div>

            <div className={styles.auctionVisual}>
              <div className={styles.auctionVisualTop}>
                <span>
                  <i />
                  LIVE NOW
                </span>

                <span>AUCTION EXPERIENCE</span>
              </div>

              <div className={styles.auctionImage}>
                <Image
                  src="/images/projects/marcus-cars/auction.png"
                  alt="Marcus Cars live auction interface"
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — TOOLS
      ===================================================== */}

      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>06 — TOOLS & TECHNOLOGY</span>
            <span>FRONTEND TOOLKIT</span>
          </div>

          <div className={styles.toolsIntro}>
            <div>
              <span className={styles.sectionEyebrow}>
                TECHNOLOGY USED
              </span>

              <h2>
                BUILT WITH
                <br />
                <span>THE RIGHT TOOLS.</span>
              </h2>
            </div>

            <p>
              The Marcus Cars frontend uses a modern React-based stack to
              structure the interface, routes, data and responsive product
              experience.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <div className={styles.toolCard} key={tool.name}>
                <span className={styles.toolNumber}>{tool.number}</span>

                <div className={styles.toolIcon}>
                  <Image
                    src={tool.icon}
                    alt=""
                    width={34}
                    height={34}
                  />
                </div>

                <h3>{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — WHAT I BUILT
      ===================================================== */}

      <section className={styles.builtSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>07 — MY CONTRIBUTION</span>
            <span>FRONTEND DEVELOPMENT</span>
          </div>

          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>
                WHAT I BUILT
              </span>

              <h2>
                THE FRONTEND
                <br />
                <span>FOUNDATION.</span>
              </h2>
            </div>

            <p>
              The work combined frontend development with product structure,
              responsive behaviour and interaction thinking.
            </p>
          </div>

          <div className={styles.builtGrid}>
            {frontendWork.map((item, index) => (
              <div className={styles.builtItem} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — PRODUCT ARCHITECTURE
      ===================================================== */}

      <section className={styles.architectureSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeadingDark}>
            <div>
              <span className={styles.sectionEyebrow}>
                08 — HOW THE PRODUCT IS STRUCTURED
              </span>

              <h2>
                BUILT TO GROW
                <br />
                <span>BEYOND THE INTERFACE.</span>
              </h2>
            </div>

            <p>
              The frontend is the visible customer layer. Around it, the
              product can evolve into a connected platform supporting
              authentication, data, auctions and other services.
            </p>
          </div>

          <div className={styles.architectureDiagram}>
            {architectureLayers.map((layer, index) => (
              <div className={styles.architectureLayer} key={layer.number}>
                <div className={styles.layerNumber}>{layer.number}</div>

                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>
                </div>

                {index < architectureLayers.length - 1 && (
                  <span className={styles.layerConnector}>↓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — EVIDENCE
      ===================================================== */}

      <section className={styles.evidenceSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>09 — PROJECT EVIDENCE</span>
            <span>LIVE / REPOSITORY</span>
          </div>

          <div className={styles.evidenceContent}>
            <span className={styles.sectionEyebrow}>
              SEE THE WORK IN CONTEXT
            </span>

            <h2>
              THE INTERFACE
              <br />
              <span>IS LIVE.</span>
            </h2>

            <p>
              Explore the deployed frontend or inspect the repository to see
              how the product experience is structured in code.
            </p>

            <div className={styles.evidenceActions}>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.evidencePrimary}
              >
                OPEN LIVE PLATFORM <span>↗</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.evidenceSecondary}
              >
                VIEW GITHUB REPOSITORY <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — CURRENT STATE
      ===================================================== */}

      <section className={styles.currentSection}>
        <div className={styles.container}>
          <div className={styles.currentGrid}>
            <div>
              <span className={styles.sectionEyebrow}>
                10 — CURRENT STATE
              </span>

              <h2>
                FRONTEND
                <br />
                <span>PRODUCT PROTOTYPE.</span>
              </h2>
            </div>

            <div className={styles.currentCopy}>
              <p>
                Marcus Cars currently demonstrates the frontend and product
                experience for an automotive marketplace and live-auction
                platform.
              </p>

              <p>
                The current work focuses on the interface, responsive
                behaviour, product structure and frontend architecture. The
                wider system is intentionally structured so that backend
                services, real-time auction infrastructure, payments,
                notifications and administration can be connected as the
                product develops.
              </p>

              <div className={styles.currentStatus}>
                <span className={styles.blueDot} />
                FRONTEND / ACTIVE DEVELOPMENT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — CTA
      ===================================================== */}

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaTopline}>
            <span>11 — START A PROJECT</span>
            <span>JAN WORKS</span>
          </div>

          <div className={styles.ctaContent}>
            <span className={styles.sectionEyebrow}>
              WEB · SYSTEMS · SOFTWARE
            </span>

            <h2>
              BUILDING A
              <br />
              <span>DIGITAL PRODUCT?</span>
            </h2>

            <p>
              I work across frontend development, web design, CRM systems,
              workflow automation and digital products — connecting business
              requirements with technology that works.
            </p>

            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                START A PROJECT <span>↗</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                WHATSAPP +254 115 889 691 <span>↗</span>
              </a>
            </div>

            <div className={styles.ctaLinks}>
              <a href={email}>EMAIL</a>

              <a
                href="https://www.linkedin.com/in/israel-jan-35a702308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>

              <a
                href="https://github.com/IsraelJan"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          12 — NEXT PROJECT
      ===================================================== */}

      <section className={styles.nextProject}>
        <div className={styles.nextProjectTop}>
          <span>12 — NEXT PROJECT</span>
          <span>WEB DESIGN & DEVELOPMENT</span>
        </div>

        <Link href="/projects/web-design" className={styles.nextProjectLink}>
          <div className={styles.nextProjectImage}>
            <Image
              src="/images/projects/websites/websites-cover.jpg"
              alt="Web Design and Development project"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />

            <div className={styles.nextImageOverlay} />

            <span className={styles.nextImageLabel}>
              WEB DESIGN / DIGITAL EXPERIENCE
            </span>
          </div>

          <div className={styles.nextProjectContent}>
            <span>CONTINUE EXPLORING</span>

            <h2>
              WEB DESIGN
              <br />
              <span>& DEVELOPMENT</span>
            </h2>

            <p>
              Digital experiences designed, developed and connected to the
              businesses behind them.
            </p>

            <div className={styles.nextProjectArrow}>
              VIEW PROJECT <span>↗</span>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}