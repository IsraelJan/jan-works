"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import styles from "./web-design.module.css";

type Project = {
  number: string;
  title: string;
  client: string;
  category: string;
  intro: string;
  structure: string;
  outcome: string;
  image: string;
  secondaryImage?: string;
  mobileImage?: string;
  href?: string;
  externalUrl?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "SHE MEANS BUSINESS",
    client: "Brittany Wright",
    category: "COMMUNITY · NETWORK · EVENTS",
    intro:
      "A community-led digital experience designed to help women understand the network, discover opportunities to participate and move naturally from interest into involvement.",
    structure:
      "The experience is organised around participation. The homepage establishes the community, then creates clear routes toward events, membership, education and connection. Rather than presenting everything at once, the structure answers the visitor's questions in sequence.",
    outcome:
      "The website becomes more than an information page. It acts as the digital front door to a wider community ecosystem and gives the organisation a clearer way to communicate its value.",
    image: "/images/projects/websites/desktop-home.png",
    secondaryImage: "/images/projects/websites/events.png",
    mobileImage: "/images/projects/websites/mobile-home.jpg",
    externalUrl: "https://www.shemeansbusinesstx.com/",
    tags: ["Community", "Membership", "Events", "Responsive"],
  },

  {
    number: "02",
    title: "CONTENTO",
    client: "Tracy King",
    category: "CREATIVE SERVICE · PERSONAL BRAND",
    intro:
      "A visual-first digital experience built around photography, personal branding and the ability to turn content into something useful for a business.",
    structure:
      "The structure establishes visual identity before asking the visitor to understand the services. Photography creates the initial emotional connection, while the service architecture progressively explains what Contento offers and how those services help a client.",
    outcome:
      "The website gives Contento a stronger digital home where visual quality, expertise and service positioning work together instead of competing for attention.",
    image: "/images/projects/websites/contento-home.png",
    secondaryImage: "/images/projects/websites/contento-service.png",
    externalUrl: "https://www.mycontento.com/",
    tags: ["Brand", "Photography", "Services", "Conversion"],
  },

  {
    number: "03",
    title: "REAL TASKING",
    client: "Real Tasking",
    category: "SERVICE BUSINESS · OPERATIONS",
    intro:
      "A service experience for a business whose value comes from taking complex operational work away from its clients.",
    structure:
      "The website needed to make a broad operational offering easier to understand. Services are organised around the problems they solve rather than simply listing capabilities, helping visitors recognise where the business fits into their own operation.",
    outcome:
      "The digital experience communicates the value of operational support more clearly while leaving room for the CRM, workflow and service systems operating behind the website.",
    image: "/images/projects/websites/realtasking-home.png",
    secondaryImage: "/images/projects/websites/realtasking-service.png",
    externalUrl: "https://realtasking.com/",
    tags: ["Operations", "Services", "CRM", "Business"],
  },

  {
    number: "04",
    title: "INVEST IN REAL ESTATE GROUP",
    client: "Invest In Real Estate Group",
    category: "REAL ESTATE · INFORMATION",
    intro:
      "A real-estate experience serving people who may arrive with completely different intentions — buying, selling or investing.",
    structure:
      "The core design problem is information architecture. Different visitor intentions need different pathways, but the experience still needs to feel like one coherent brand. The structure therefore separates intent while maintaining a common visual language.",
    outcome:
      "The website gives visitors a clearer starting point for real-estate conversations without making the business feel fragmented.",
    image: "/images/projects/websites/invest-real-estate.png",
    secondaryImage: "/images/projects/websites/investin-services.png",
    externalUrl: "https://www.investinrealestategroup.com/",
    tags: ["Real Estate", "Architecture", "Services"],
  },

  {
    number: "05",
    title: "THE 5 STAR HOST",
    client: "Nicole Creegan",
    category: "PROPERTY MANAGEMENT · HOSPITALITY",
    intro:
      "A digital experience for a business operating across property management, hospitality and guest experience.",
    structure:
      "The website needs to communicate to different audiences without creating separate disconnected experiences. Property owners, guests and service users are guided through the ecosystem according to what they need from the business.",
    outcome:
      "The result is a clearer representation of a multi-service property operation while preserving a consistent customer-facing experience.",
    image: "/images/projects/websites/five-star-host.png",
    secondaryImage: "/images/projects/websites/5-star-services.png",
    externalUrl: "https://www.the5starhost.com/",
    tags: ["Hospitality", "Property", "Services", "UX"],
  },

  {
    number: "06",
    title: "MARCUS CARS",
    client: "Marcus Leonard",
    category: "AUTOMOTIVE · PRODUCT EXPERIENCE",
    intro:
      "A project that moves from conventional website design toward a digital product for discovering, evaluating and interacting with vehicles.",
    structure:
      "The vehicle becomes the primary object within the experience. Marketplace discovery leads to vehicle details, then into actions such as saving, contacting and bidding. This creates a foundation that can later connect to authentication, auction infrastructure, payments and administration.",
    outcome:
      "The frontend establishes the experience layer for a larger automotive marketplace and live auction product.",
    image: "/images/projects/websites/marketplace.png",
    secondaryImage: "/images/projects/websites/vehicles.png",
    href: "/projects/marcus-cars",
    tags: ["Product", "Frontend", "Automotive", "Auction"],
  },

  {
    number: "07",
    title: "CALMBRIDGE THERAPY",
    client: "Joy Naghea",
    category: "THERAPY · TRUST · SERVICE",
    intro:
      "A service experience where the interface needs to feel clear, calm and trustworthy before the visitor decides to make contact.",
    structure:
      "The information hierarchy introduces the service progressively. Visitors first understand what the service is, then what they can expect and finally the practical information needed to take the next step.",
    outcome:
      "The website creates a more approachable digital entry point without overwhelming users with unnecessary interface complexity.",
    image: "/images/projects/websites/calmbridge-home.png",
    secondaryImage: "/images/projects/websites/calmbridge-services.png",
    externalUrl: "https://calmbridge-therapy--magadhis98.replit.app/",
    tags: ["Trust", "Therapy", "Service", "UX"],
  },
];

const approach = [
  {
    number: "01",
    title: "UNDERSTAND",
    text:
      "Before designing screens, I need to understand the business, audience, offer and the actual problem the website is expected to solve.",
    image: "/images/projects/websites/desktop-home.png",
    label: "BUSINESS CONTEXT",
  },

  {
    number: "02",
    title: "STRUCTURE",
    text:
      "Information is turned into a hierarchy. Navigation, content and calls to action are organised around what the visitor needs to understand next.",
    image: "/images/projects/websites/events.png",
    label: "INFORMATION ARCHITECTURE",
  },

  {
    number: "03",
    title: "DESIGN",
    text:
      "The structure becomes a visual language through typography, spacing, imagery, interaction patterns and responsive behaviour.",
    image: "/images/projects/websites/contento-home.png",
    label: "VISUAL EXPERIENCE",
  },

  {
    number: "04",
    title: "BUILD",
    text:
      "The approved experience becomes a working interface using frontend technologies, CMS platforms or website builders depending on the project.",
    image: "/images/projects/websites/realtasking-home.png",
    label: "FRONTEND IMPLEMENTATION",
  },

  {
    number: "05",
    title: "CONNECT",
    text:
      "The website is considered as part of the wider system connecting forms, CRM, automation, analytics and future digital products where required.",
    image: "/images/projects/websites/marketplace.png",
    label: "CONNECTED SYSTEM",
  },
];

const systemStages = [
  {
    number: "01",
    title: "WEBSITE",
    label: "THE EXPERIENCE",
    description:
      "The visible layer where people discover, understand and interact with the business.",
  },

  {
    number: "02",
    title: "CRM",
    label: "THE RELATIONSHIP",
    description:
      "The system that gives captured customer information somewhere useful to go.",
  },

  {
    number: "03",
    title: "AUTOMATION",
    label: "THE FLOW",
    description:
      "The workflows that reduce repetitive work and move information between systems.",
  },

  {
    number: "04",
    title: "BUSINESS",
    label: "THE OUTCOME",
    description:
      "The actual operation the technology is there to support.",
  },
];

const tools = [
  "VS CODE",
  "FIGMA",
  "FRAMER",
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "WORDPRESS",
  "ELEMENTOR",
  "WIX",
  "GODADDY",
  "GOHIGHLEVEL",
  "GITHUB",
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ProjectChapter({
  project,
}: {
  project: Project;
}) {
  const reduceMotion = useReducedMotion();
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-3%", "3%"]
  );

  return (
    <article className={styles.projectChapter}>
      <div className={styles.projectChapterTop}>
        <span className={styles.chapterNumber}>
          {project.number} / {String(projects.length).padStart(2, "0")}
        </span>

        <span className={styles.chapterCategory}>
          {project.category}
        </span>

        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLink}
          >
            LIVE WEBSITE <span>↗</span>
          </a>
        )}

        {project.href && (
          <Link href={project.href} className={styles.liveLink}>
            CASE STUDY <span>↗</span>
          </Link>
        )}
      </div>

      <div className={styles.projectTitleRow}>
        <div>
          <span className={styles.projectClient}>
            {project.client}
          </span>

          <h3>{project.title}</h3>
        </div>

        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <Reveal>
        <div
          className={styles.projectImageFrame}
          ref={imageRef}
        >
          <motion.div
            className={styles.projectImageInner}
            style={{ y: imageY }}
          >
            <Image
              src={project.image}
              alt={`${project.title} website`}
              fill
              sizes="(max-width: 900px) 100vw, 92vw"
            />
          </motion.div>

          <div className={styles.imageIndex}>
            <span>JAN WORKS</span>
            <span>{project.number}</span>
          </div>
        </div>
      </Reveal>

      <div className={styles.projectStory}>
        <div className={styles.storyLead}>
          <span>THE IDEA</span>
          <p>{project.intro}</p>
        </div>

        <div className={styles.storyBlock}>
          <span>HOW IT IS STRUCTURED</span>
          <p>{project.structure}</p>
        </div>

        <div className={styles.storyBlock}>
          <span>WHAT IT ACHIEVES</span>
          <p>{project.outcome}</p>
        </div>
      </div>

      {project.secondaryImage && (
        <Reveal delay={0.05}>
          <div className={styles.secondaryVisual}>
            <Image
              src={project.secondaryImage}
              alt={`${project.title} supporting interface`}
              fill
              sizes="(max-width: 800px) 100vw, 60vw"
            />

            <div className={styles.secondaryLabel}>
              <span>INTERFACE DETAIL</span>
              <span>{project.number}</span>
            </div>
          </div>
        </Reveal>
      )}

      {project.mobileImage && (
        <section className={styles.mobileExperience}>
          <div className={styles.mobileCopy}>
            <span className={styles.blueEyebrow}>
              RESPONSIVE & MOBILE EXPERIENCE
            </span>

            <h4>
              DESIGN FOR THE
              <br />
              SCREEN PEOPLE
              <br />
              <span>ACTUALLY USE.</span>
            </h4>

            <p>
              A website is no longer designed for one screen. I consider how
              the same experience behaves when the interface moves from a
              large desktop display to a phone — what stays important, what
              changes position and how the user reaches the next action.
            </p>

            <p>
              Responsive work is not simply shrinking a desktop layout.
              I consider content hierarchy, navigation, touch targets,
              typography, spacing, image behaviour and the path to action
              across smaller screens.
            </p>

            <div className={styles.mobileCapabilities}>
              <span>RESPONSIVE LAYOUTS</span>
              <span>MOBILE NAVIGATION</span>
              <span>TOUCH INTERACTION</span>
              <span>FRONTEND IMPLEMENTATION</span>
            </div>

            <div className={styles.mobileNote}>
              <span>01</span>

              <p>
                This creates a practical frontend foundation for mobile web
                experiences. Where a project later requires a dedicated
                application, the same product thinking can inform a separate
                mobile architecture.
              </p>
            </div>
          </div>

          <div className={styles.phoneStage}>
            <div className={styles.phoneGlow} />

            <div className={styles.phone}>
              <div className={styles.phoneSpeaker} />

              <div className={styles.phoneScreen}>
                <Image
                  src={project.mobileImage}
                  alt={`${project.title} mobile experience`}
                  width={719}
                  height={1419}
                  sizes="(max-width: 700px) 280px, 340px"
                  className={styles.mobileScreenshot}
                />
              </div>
            </div>

            <span className={styles.phoneLabel}>
              719 × 1419 / MOBILE VIEW
            </span>
          </div>
        </section>
      )}
    </article>
  );
}

export default function WebDesignPage() {
  const [activeApproach, setActiveApproach] = useState(0);
  const [activeSystem, setActiveSystem] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.07]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "10%"]
  );

  const activeStage = systemStages[activeSystem];
  const activeApproachItem = approach[activeApproach];

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero} ref={heroRef}>
        <motion.div
          className={styles.heroImage}
          style={{ scale: heroScale, y: heroY }}
        >
          <Image
            src="/images/projects/websites/website-hero.jpg"
            alt="ISRAEL JAN WORKS web design project"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className={styles.heroOverlay} />

        <div className={styles.heroGrid}>
          <div className={styles.heroTopline}>
            <span>04 — DIGITAL EXPERIENCES</span>
            <span>ISRAEL JAN WORKS / 2026</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span className={styles.blueDot} />

              <span>
                WEB DESIGN · FRONTEND · DIGITAL SYSTEMS
              </span>
            </div>

            <h1>
              WEBSITES
              <br />
              <span>BUILT AROUND</span>
              <br />
              THE BUSINESS.
            </h1>

            <div className={styles.heroBottom}>
              <p>
                I design and build digital experiences around how a business
                actually works — from first impression to interaction,
                conversion and the systems behind it.
              </p>

              <a
                href="#work"
                className={styles.heroScroll}
              >
                <span>EXPLORE THE WORK</span>
                <span className={styles.scrollArrow}>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>01 — THE APPROACH</span>
            <span>HOW I THINK ABOUT DIGITAL EXPERIENCES</span>
          </div>

          <div className={styles.introHeading}>
            <span className={styles.sectionEyebrow}>
              THE PRINCIPLE
            </span>

            <h2>
              A WEBSITE IS MORE
              <br />
              <span>THAN A WEBSITE.</span>
            </h2>

            <p>
              It is the interface between the business and the person trying
              to understand it.
            </p>
          </div>

          <div className={styles.approachLayout}>
            <div className={styles.approachList}>
              {approach.map((item, index) => {
                const active = activeApproach === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    className={`${styles.approachItem} ${
                      active ? styles.approachActive : ""
                    }`}
                    onMouseEnter={() => setActiveApproach(index)}
                    onFocus={() => setActiveApproach(index)}
                    onClick={() => setActiveApproach(index)}
                  >
                    <span className={styles.approachNumber}>
                      {item.number}
                    </span>

                    <span className={styles.approachTitle}>
                      {item.title}
                    </span>

                    <span className={styles.approachIndicator}>
                      {active ? "−" : "+"}
                    </span>

                    <motion.span
                      className={styles.approachDescription}
                      initial={false}
                      animate={{
                        opacity: active ? 1 : 0,
                        height: active ? "auto" : 0,
                      }}
                    >
                      {item.text}
                    </motion.span>
                  </button>
                );
              })}
            </div>

            <motion.div
              className={styles.approachVisual}
              key={activeApproachItem.number}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={activeApproachItem.image}
                alt={`${activeApproachItem.title} web design stage`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />

              <div className={styles.approachVisualOverlay}>
                <span>{activeApproachItem.label}</span>
                <strong>{activeApproachItem.title}</strong>
              </div>

              <div className={styles.visualCorner}>
                <span>0{activeApproach + 1}</span>
                <span>/ 05</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORK INTRO */}
      <section className={styles.workIntro} id="work">
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>02 — THE WORK</span>
            <span>SELECTED DIGITAL EXPERIENCES</span>
          </div>

          <div className={styles.workIntroGrid}>
            <h2>
              EVERY BUSINESS NEEDS
              <br />
              <span>A DIFFERENT DIGITAL STRUCTURE.</span>
            </h2>

            <div className={styles.workIntroCopy}>
              <p>
                There is no single website formula that works for every
                business.
              </p>

              <p>
                A community needs participation. A service business needs
                clarity. A property business needs information architecture.
                A product needs interaction.
              </p>

              <p className={styles.blueStatement}>
                I design the structure around the business then build the
                interface around that structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.projects}>
        <div className={styles.container}>
          {projects.map((project) => (
            <ProjectChapter
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* LANDING PAGES */}
      <section className={styles.landingSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>03 — LANDING PAGES</span>
            <span>ONE PURPOSE · ONE JOURNEY</span>
          </div>

          <div className={styles.landingGrid}>
            <div className={styles.landingCopy}>
              <span className={styles.sectionEyebrow}>
                CAMPAIGN EXPERIENCES
              </span>

              <h2>
                NOT EVERY
                <br />
                PAGE NEEDS
                <br />
                TO BE A WEBSITE.
              </h2>

              <p>
                Some digital experiences have one job: introduce an offer,
                capture interest, explain an event or move someone toward a
                specific action.
              </p>

              <div className={styles.landingFlow}>
                <span>ATTENTION</span>
                <i>→</i>
                <span>MESSAGE</span>
                <i>→</i>
                <span>TRUST</span>
                <i>→</i>
                <span>ACTION</span>
              </div>
            </div>

            <div className={styles.landingImage}>
              <Image
                src="/images/projects/websites/medicare.png"
                alt="Landing page and event experience"
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
              />

              <div className={styles.landingImageLabel}>
                <span>LANDING EXPERIENCE</span>
                <span>↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED SYSTEM */}
      <section className={styles.systemSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>04 — BEYOND THE WEBSITE</span>
            <span>THE SYSTEM AROUND THE EXPERIENCE</span>
          </div>

          <div className={styles.systemHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                CONNECTED DIGITAL WORK
              </span>

              <h2>
                THE WEBSITE IS
                <br />
                <span>THE FRONT DOOR.</span>
              </h2>
            </div>

            <p>
              A website becomes more valuable when it connects to the systems
              around it. This is where web design starts overlapping with CRM,
              automation and software engineering.
            </p>
          </div>

          <div className={styles.systemExperience}>
            <div className={styles.systemRail}>
              {systemStages.map((stage, index) => {
                const active = activeSystem === index;

                return (
                  <button
                    key={stage.number}
                    type="button"
                    className={`${styles.systemNode} ${
                      active ? styles.systemNodeActive : ""
                    }`}
                    onMouseEnter={() => setActiveSystem(index)}
                    onFocus={() => setActiveSystem(index)}
                    onClick={() => setActiveSystem(index)}
                  >
                    <span>{stage.number}</span>
                    <strong>{stage.title}</strong>

                    {index < systemStages.length - 1 && (
                      <i aria-hidden="true">→</i>
                    )}
                  </button>
                );
              })}
            </div>

            <motion.div
              className={styles.systemDetail}
              key={activeStage.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.systemDetailNumber}>
                {activeStage.number}
              </div>

              <div>
                <span>{activeStage.label}</span>
                <h3>{activeStage.title}</h3>
                <p>{activeStage.description}</p>
              </div>

              <div className={styles.systemDetailLine} />
            </motion.div>

            <div className={styles.systemStatement}>
              <span>THE CONNECTION</span>

              <strong>
                WEBSITE <i>→</i> CRM <i>→</i> AUTOMATION <i>→</i> BUSINESS
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>05 — TOOLS & TECHNOLOGY</span>
            <span>THE WORKBENCH</span>
          </div>

          <div className={styles.toolsIntro}>
            <div>
              <span className={styles.sectionEyebrow}>
                THE TOOLS CHANGE.
              </span>

              <h2>
                THE THINKING
                <br />
                <span>STAYS.</span>
              </h2>
            </div>

            <p>
              Different projects require different tools. I work across
              design, frontend development, CMS platforms, website builders
              and business systems — choosing the right environment around
              the project's needs.
            </p>
          </div>

          <div className={styles.toolsMarquee}>
            <div className={styles.toolsTrack}>
              {[...tools, ...tools].map((tool, index) => (
                <span key={`${tool}-${index}`}>
                  <i />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.toolGroups}>
            <div>
              <span>DESIGN</span>
              <strong>FIGMA · FRAMER</strong>
            </div>

            <div>
              <span>FRONTEND</span>
              <strong>VS CODE · REACT · NEXT.JS · TYPESCRIPT</strong>
            </div>

            <div>
              <span>WEBSITE PLATFORMS</span>
              <strong>WORDPRESS · ELEMENTOR · WIX · GODADDY</strong>
            </div>

            <div>
              <span>BUSINESS SYSTEMS</span>
              <strong>GOHIGHLEVEL · GITHUB</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className={styles.capabilitySection}>
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <span>06 — WHAT WEB DESIGN BRINGS</span>
            <span>FROM INTERFACE TO BUSINESS VALUE</span>
          </div>

          <div className={styles.capabilityGrid}>
            <div className={styles.capabilityLead}>
              <span className={styles.sectionEyebrow}>
                CLIENT VALUE
              </span>

              <h2>
                DESIGN THAT
                <br />
                <span>HAS A JOB TO DO.</span>
              </h2>

              <p>
                My role is not simply to make a website look good. It is to
                understand what the business is trying to communicate and
                translate that into a digital experience people can actually
                use.
              </p>
            </div>

            <div className={styles.capabilityList}>
              <div>
                <span>01</span>
                <h3>CLARITY</h3>
                <p>
                  Visitors understand what the business does and where they
                  should go next.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>CREDIBILITY</h3>
                <p>
                  Strong structure and visual consistency create confidence
                  before the first conversation.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>CONVERSION</h3>
                <p>
                  Pages are structured around meaningful actions rather than
                  decoration alone.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>RESPONSIVENESS</h3>
                <p>
                  The experience adapts across screens without losing its
                  hierarchy or purpose.
                </p>
              </div>

              <div>
                <span>05</span>
                <h3>FRONTEND</h3>
                <p>
                  Design becomes a working interface through modern frontend
                  implementation.
                </p>
              </div>

              <div>
                <span>06</span>
                <h3>CONNECTION</h3>
                <p>
                  The website can become the first layer of a larger digital
                  operating system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaTopline}>
            <span>07 — LET&apos;S BUILD</span>
            <span>WEB · SYSTEMS · SOFTWARE</span>
          </div>

          <div className={styles.ctaContent}>
            <div className={styles.ctaLabel}>
              <span className={styles.blueDot} />
              <span>YOUR WEBSITE SHOULD WORK HARDER.</span>
            </div>

            <h2>
              HAVE A BUSINESS
              <br />
              <span>THAT NEEDS A DIGITAL HOME?</span>
            </h2>

            <p>
              Bring the business idea, the problem or the opportunity. I can
              help translate it into a digital experience that makes sense
              for the people using it and the business operating behind it.
            </p>

            <div className={styles.ctaActions}>
              <Link
                href="/contact"
                className={styles.primaryButton}
              >
                <span>START A PROJECT</span>
                <span>↗</span>
              </Link>

              <a
                href="https://wa.me/254115889691"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <span>WHATSAPP</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className={styles.nextProject}>
        <div className={styles.container}>
          <Link
            href="/projects/crm-automation"
            className={styles.nextProjectLink}
          >
            <div className={styles.nextProjectVisual}>
              <Image
                src="/images/projects/crm/crm-cover.jpg"
                alt="Connected Operations CRM and workflow system"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />

              <div className={styles.nextProjectImageLabel}>
                <span>JAN WORKS / 08</span>
                <span>CONNECTED OPERATIONS</span>
              </div>
            </div>

            <div className={styles.nextProjectContent}>
              <div className={styles.nextProjectTop}>
                <span>08 — NEXT PROJECT</span>
                <span>CONNECTED OPERATIONS</span>
              </div>

              <div className={styles.nextProjectCenter}>
                <span className={styles.nextProjectEyebrow}>
                  CRM · WORKFLOW · AUTOMATION
                </span>

                <h2>
                  FROM
                  <br />
                  <span>WEBSITE</span>
                  <br />
                  TO SYSTEM.
                </h2>

                <p>
                  The next layer after the website is what happens behind
                  it — how leads are captured, how information moves and how
                  repetitive business processes become connected.
                </p>

                <div className={styles.nextProjectButton}>
                  <span>EXPLORE CONNECTED OPERATIONS</span>
                  <span>↗</span>
                </div>
              </div>

              <div className={styles.nextProjectBottom}>
                <span>JAN WORKS</span>
                <span>OPERATIONS · SYSTEMS · TECHNOLOGY</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}