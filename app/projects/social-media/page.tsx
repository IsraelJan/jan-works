"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import styles from "./social-media.module.css";

const assets = {
  hero: "/images/projects/social/cover.jpg",

  contentoPost: "/images/projects/social/contento-posts.png",
  contentoCalendar: "/images/projects/social/contento-calendar.png",
  contentoCampaign: "/images/projects/social/contento-static.png",

  fiveStarPost: "/images/projects/social/five-star-host-post.png",
  fiveStarReel: "/images/projects/social/five-star-host-static.png",
  fiveStarCalendar: "/images/projects/social/five-star-host-calendar.png",

  gordanaRealEstate: "/images/projects/social/gordana-real-estates.png",
  gordanaPersonal: "/images/projects/social/real-estate.png",
  gordanaCalendar: "/images/projects/social/gordana-calendar.png",

  analytics: "/images/projects/social/social-analytics.png",
  socialReporting: "/images/projects/social/social-reporting.png",
  reel: "/images/projects/social/reel-cover.png",

  nextProject: "/images/projects/funnels/funnels-cover.jpg",
};

const expectationItems = [
  {
    number: "01",
    title: "KNOW WHAT WE'RE PUBLISHING.",
    label: "CONTENT CALENDAR",
    description:
      "The content calendar is the master plan for everything that will be published. It gives the client visibility into the platform, date, format, creative, caption, responsibility and status before content goes live.",
    details: [
      "Platform",
      "Date & publishing time",
      "Content format",
      "Caption",
      "Creative",
      "Approval status",
    ],
    image: assets.contentoCalendar,
  },
  {
    number: "02",
    title: "KNOW WHY WE'RE PUBLISHING IT.",
    label: "CONTENT PILLARS",
    description:
      "Content pillars give every post a purpose and strategic category. Instead of asking what to post today, the content system establishes recurring themes that support the brand and business objectives.",
    details: [
      "Educate",
      "Build trust",
      "Showcase",
      "Engage",
      "Convert",
      "Reinforce",
    ],
    image: assets.gordanaCalendar,
  },
  {
    number: "03",
    title: "SEE THE WORK BEFORE IT GOES LIVE.",
    label: "CREATIVE REVIEW",
    description:
      "Creative review creates a clear quality-control and approval stage before publication. The client can review the visual, caption, branding, CTA, links, messaging and platform formatting.",
    details: [
      "Draft",
      "Internal review",
      "Client review",
      "Revisions",
      "Approval",
      "Scheduling",
    ],
    image: assets.contentoPost,
  },
  {
    number: "04",
    title: "KNOW WHAT IS PERFORMING.",
    label: "REPORTING",
    description:
      "Reporting turns social activity into measurable information. The reporting process identifies what happened, which content performed and what those signals mean for the business.",
    details: [
      "Reach",
      "Engagement",
      "Audience",
      "Top content",
      "Traffic",
      "Leads",
    ],
    image: assets.socialReporting,
  },
  {
    number: "05",
    title: "KNOW WHAT WE ARE CHANGING.",
    label: "OPTIMIZATION",
    description:
      "Optimization turns reporting into action. The objective is to use what happened to change the next content cycle, test new ideas and improve the system.",
    details: [
      "Identify",
      "Interpret",
      "Change",
      "Test",
      "Measure",
      "Repeat",
    ],
    image: assets.fiveStarReel,
  },
  {
    number: "06",
    title: "UNDERSTAND WHERE SOCIAL FITS.",
    label: "TRAFFIC / LEADS",
    description:
      "Social media can be an entry point into a larger digital system. Content can create interest, drive traffic, capture information and connect an audience with landing pages, CRM workflows and follow-up.",
    details: [
      "Social content",
      "CTA",
      "Landing page",
      "Lead form",
      "CRM",
      "Follow-up",
    ],
    image: assets.contentoCampaign,
  },
];

const systemSteps = [
  ["01", "BRAND", "Identity, positioning and visual direction."],
  ["02", "AUDIENCE", "Who the business needs to reach and understand."],
  ["03", "CONTENT", "The messages, formats and creative produced."],
  ["04", "DISTRIBUTION", "Where and when content reaches the audience."],
  ["05", "ACTION", "Traffic, enquiries, forms, appointments or other next steps."],
  ["06", "DATA", "What the audience response tells us."],
  ["07", "OPTIMIZATION", "What changes in the next content cycle."],
];

const clientJourney = [
  ["01", "DISCOVERY", "Business, audience, offers and existing presence."],
  ["02", "AUDIT", "Brand, content, positioning and performance review."],
  ["03", "STRATEGY", "Content pillars, voice, visual direction and objectives."],
  ["04", "CALENDAR", "Structured publishing plan and production schedule."],
  ["05", "PRODUCTION", "Posts, graphics, captions, Reels and supporting assets."],
  ["06", "PUBLISH", "Consistent publishing and platform management."],
  ["07", "REPORT", "Review content, audience and business signals."],
  ["08", "OPTIMIZE", "Apply learning to the next cycle."],
];

const contentPillars = [
  ["01", "EDUCATE", "Market knowledge, guides, advice and useful information."],
  ["02", "BUILD TRUST", "Proof, expertise, testimonials and behind-the-scenes content."],
  ["03", "SHOWCASE", "Properties, services, projects and visual brand moments."],
  ["04", "ENGAGE", "Questions, opinions, conversations and community content."],
  ["05", "CONVERT", "Offers, calls-to-action and paths toward business action."],
  ["06", "REINFORCE", "Recurring messages that make the brand recognizable."],
];

const productionSteps = [
  "IDEA",
  "BRIEF",
  "COPY",
  "DESIGN / VIDEO",
  "REVIEW",
  "SCHEDULE",
  "PUBLISH",
  "MEASURE",
];

const metricGroups: [string, string[]][] = [
  ["ATTENTION", ["Reach", "Impressions", "Video views", "Watch time"]],
  ["ENGAGEMENT", ["Likes", "Comments", "Saves", "Shares"]],
  ["INTENT", ["Profile visits", "Link clicks", "Website visits", "DMs"]],
  ["BUSINESS", ["Leads", "Forms", "Appointments", "Opportunities"]],
];

const tools = [
  { name: "Canva", icon: "/icons/canva.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Meta", icon: "/icons/meta.svg" },
  { name: "Instagram", icon: "/icons/instagram.svg" },
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "CapCut", icon: "/icons/capcut.svg" },
  { name: "Google Analytics", icon: "/icons/google-analytics.svg" },
  { name: "Google Sheets", icon: "/icons/google-sheets.svg" },
  { name: "Notion", icon: "/icons/notion.svg" },
  { name: "GoHighLevel", icon: "/icons/gohighlevel.svg" },
  { name: "Zapier", icon: "/icons/zapier.svg" },
];

const clientProfiles = [
  {
    client: "GORDANA HAMATI",
    role: "REAL ESTATE / PERSONAL BRAND",
    links: [
      {
        label: "Instagram",
        icon: "/icons/instagram.svg",
        url: "https://www.instagram.com/gordanah.realtor/",
      },
      {
        label: "Facebook",
        icon: "/icons/facebook.svg",
        url: "https://www.facebook.com/profile.php?id=100089991326155",
      },
    ],
  },
  {
    client: "CONTENTO",
    role: "PHOTOGRAPHY / BRAND CONTENT",
    links: [
      {
        label: "Instagram",
        icon: "/icons/instagram.svg",
        url: "https://www.instagram.com/my.contento/",
      },
    ],
  },
  {
    client: "THE 5 STAR HOST",
    role: "SHORT-TERM RENTAL / HOSPITALITY",
    links: [
      {
        label: "Instagram",
        icon: "/icons/instagram.svg",
        url: "https://www.instagram.com/the5starhost/",
      },
      {
        label: "Facebook",
        icon: "/icons/facebook.svg",
        url: "https://www.facebook.com/The5StarHost",
      },
    ],
  },
];

const myProfiles = [
  {
    label: "LinkedIn",
    icon: "/icons/linkedin.svg",
    url: "https://www.linkedin.com/in/israel-jan-35a702308/",
  },
  {
    label: "Facebook",
    icon: "/icons/facebook.svg",
    url: "https://www.facebook.com/israel.jan.78",
  },
  {
    label: "Instagram",
    icon: "/icons/instagram.svg",
    url: "https://www.instagram.com/israel_jan78/",
  },
  {
    label: "GitHub",
    icon: "/icons/github.svg",
    url: "https://github.com/IsraelJan",
  },
  {
    label: "Pinterest",
    icon: "/icons/pinterest.svg",
    url: "https://www.pinterest.com/israeljan78/",
  },
];

const caseStudies = [
  {
    number: "01",
    client: "CONTENTO",
    category: "PHOTOGRAPHY / BRAND CONTENT",
    title: "BUILDING A CONTENT PRESENCE AROUND THE BRAND.",
    description:
      "Contento demonstrates how photography, brand storytelling, service positioning and planned social content can work together rather than existing as isolated posts.",
    primary: assets.contentoPost,
    secondary: assets.contentoCampaign,
    links: clientProfiles[1].links,
  },
  {
    number: "02",
    client: "THE 5 STAR HOST",
    category: "SHORT-TERM RENTAL / HOSPITALITY",
    title: "TURNING PROPERTY EXPERIENCE INTO CONTENT.",
    description:
      "The content direction included property-focused communication, hospitality education, short-form video and visual storytelling designed around the short-term rental audience.",
    primary: assets.fiveStarPost,
    secondary: assets.fiveStarReel,
    links: clientProfiles[2].links,
  },
  {
    number: "03",
    client: "GORDANA HAMATI",
    category: "REAL ESTATE / PERSONAL BRAND",
    title: "TWO CONTENT IDENTITIES. ONE STRATEGIC SYSTEM.",
    description:
      "Real estate communication and personal-brand content require different messages and visual approaches. The work demonstrates how expertise, properties, personality and authority can coexist within a planned content system.",
    primary: assets.gordanaRealEstate,
    secondary: assets.gordanaPersonal,
    links: clientProfiles[0].links,
  },
];

const problems = [
  ["01", "INCONSISTENCY", "Posting happens whenever someone has time."],
  ["02", "UNCLEAR POSITIONING", "The audience does not immediately understand the brand."],
  ["03", "CONTENT WITHOUT PURPOSE", "Posts exist without a larger communication objective."],
  ["04", "NO PRODUCTION PIPELINE", "Ideas, copy, design and approval are disconnected."],
  ["05", "WEAK NEXT STEP", "Attention is created without a clear action path."],
  ["06", "NO FEEDBACK LOOP", "Performance is measured but not consistently applied."],
];

const conversionSteps = [
  ["01", "SOCIAL", "Content creates attention."],
  ["02", "CTA", "The audience receives a next action."],
  ["03", "LANDING PAGE", "Interest becomes focused traffic."],
  ["04", "FORM", "Useful information is captured."],
  ["05", "CRM", "The opportunity enters the system."],
  ["06", "FOLLOW-UP", "Communication continues."],
];

export default function SocialMediaPage() {
  const reducedMotion = useReducedMotion();
  const [activeExpectation, setActiveExpectation] = useState<number | null>(0);

  const handleExpectationLeave = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches
    ) {
      setActiveExpectation(null);
    }
  };

  const activeItem =
    activeExpectation !== null
      ? expectationItems[activeExpectation]
      : null;

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <Image
          src={assets.hero}
          alt="Social media content system"
          fill
          priority
          className={styles.heroBackground}
          sizes="100vw"
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <span>SOCIAL MEDIA · CONTENT · GROWTH</span>
            <span>05 / SYSTEMS</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>
                SOCIAL MEDIA / CONTENT SYSTEM
              </p>

              <h1>
                SOCIAL MEDIA
                <br />
                <span>WITH A SYSTEM.</span>
              </h1>

              <p className={styles.heroLead}>
                Content strategy, creative production, publishing and
                measurement designed around how the business actually
                operates.
              </p>

              <div className={styles.heroFlow}>
                <span>STRATEGY</span>
                <i>→</i>
                <span>CONTENT</span>
                <i>→</i>
                <span>DISTRIBUTION</span>
                <i>→</i>
                <span>DATA</span>
              </div>
            </div>

            <div className={styles.heroSide}>
              <span>CONTENT / CREATIVE / PERFORMANCE</span>
              <span>01 — 06</span>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>CONTENT STRATEGY</span>
            <span>CREATIVE PRODUCTION</span>
            <span>SOCIAL MANAGEMENT</span>
            <span>REPORTING</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span>THE CONTENT SYSTEM</span>
          </div>

          <div className={styles.introGrid}>
            <div>
              <p className={styles.accentLabel}>THE BIGGER PICTURE</p>

              <h2>
                SOCIAL MEDIA
                <br />
                <span>IS MORE THAN POSTING.</span>
              </h2>
            </div>

            <div>
              <p className={styles.largeCopy}>
                A strong social presence connects brand identity, content
                strategy, creative production, publishing and measurement.
              </p>

              <p>
                The objective is to give the client a visible brand, a
                predictable content operation and a clear understanding of
                what is happening at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM
      ===================================================== */}

      <section className={styles.softSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span>THE CLIENT PROBLEM</span>
          </div>

          <div className={styles.splitHeading}>
            <div>
              <p className={styles.accentLabel}>THE COMMON PATTERN</p>

              <h2>
                GOOD BUSINESS.
                <br />
                <span>NO CONTENT SYSTEM.</span>
              </h2>
            </div>

            <p>
              Businesses often have strong services and stories but lack the
              structure required to communicate them consistently.
            </p>
          </div>

          <div className={styles.problemGrid}>
            {problems.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM
      ===================================================== */}

      <section className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>03</span>
            <span>HOW THE SYSTEM WORKS</span>
          </div>

          <div className={styles.darkHeading}>
            <div>
              <p className={styles.accentLabel}>THE SOCIAL CONTENT ENGINE</p>

              <h2>
                CONTENT IS
                <br />
                <span>THE OUTPUT.</span>
              </h2>
            </div>

            <p>
              The work behind the post connects the brand, audience, creative
              operation, distribution and business objectives.
            </p>
          </div>

          <div className={styles.architecture}>
            {systemSteps.map(([number, title, text], index) => (
              <div className={styles.architectureStep} key={number}>
                <span>{number}</span>

                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>

                {index < systemSteps.length - 1 && (
                  <i className={styles.architectureArrow}>↓</i>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLIENT JOURNEY
      ===================================================== */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            <span>CLIENT EXPERIENCE</span>
          </div>

          <div className={styles.splitHeading}>
            <div>
              <p className={styles.accentLabel}>WHAT HAPPENS AFTER WE START?</p>

              <h2>
                FROM DISCOVERY
                <br />
                <span>TO OPTIMIZATION.</span>
              </h2>
            </div>

            <p>
              The client should always understand what stage the work is in,
              what is being produced and what happens next.
            </p>
          </div>

          <div className={styles.journeyGrid}>
            {clientJourney.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT PILLARS
      ===================================================== */}

      <section className={styles.softSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>05</span>
            <span>CONTENT STRATEGY</span>
          </div>

          <div className={styles.splitHeading}>
            <div>
              <p className={styles.accentLabel}>WHY ARE WE POSTING THIS?</p>

              <h2>
                EVERY POST
                <br />
                <span>HAS A JOB.</span>
              </h2>
            </div>

            <p>
              Content pillars prevent the brand from becoming a stream of
              disconnected posts. They establish recurring themes with a
              purpose.
            </p>
          </div>

          <div className={styles.pillarGrid}>
            {contentPillars.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLIENT WORK
      ===================================================== */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>06</span>
            <span>SELECTED CLIENT WORK</span>
          </div>

          <div className={styles.splitHeading}>
            <div>
              <p className={styles.accentLabel}>REAL CLIENT WORK</p>

              <h2>
                DIFFERENT BRANDS.
                <br />
                <span>DIFFERENT STORIES.</span>
              </h2>
            </div>

            <p>
              The system changes according to the audience, industry,
              personality and business objective.
            </p>
          </div>

          <div className={styles.caseList}>
            {caseStudies.map((project, index) => (
              <motion.article
                key={project.client}
                className={styles.case}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: index * 0.05 }
                }
              >
                <div className={styles.caseTop}>
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <div className={styles.caseHeading}>
                  <div>
                    <p>{project.client}</p>
                    <h3>{project.title}</h3>

                    <div className={styles.caseLinks}>
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={link.icon}
                            alt=""
                            width={15}
                            height={15}
                          />
                          {link.label}
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p>{project.description}</p>
                </div>

                <div className={styles.caseVisuals}>
                  <div className={styles.imageSurface}>
                    <Image
                      src={project.primary}
                      alt={`${project.client} social media work`}
                      fill
                      sizes="(max-width: 800px) 100vw, 65vw"
                    />

                    <div className={styles.imageNote}>
                      <span>SELECTED CREATIVE</span>
                      <span>{project.number} / 02</span>
                    </div>
                  </div>

                  <div className={styles.imageSurface}>
                    <Image
                      src={project.secondary}
                      alt={`${project.client} additional content`}
                      fill
                      sizes="(max-width: 800px) 100vw, 35vw"
                    />

                    <div className={styles.imageNote}>
                      <span>SUPPORTING WORK</span>
                      <span>VIEW</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CALENDAR
      ===================================================== */}

      <section className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>07</span>
            <span>CONTENT CALENDAR</span>
          </div>

          <div className={styles.darkHeading}>
            <div>
              <p className={styles.accentLabel}>THE MASTER PLAN</p>

              <h2>
                CONTENT STARTS
                <br />
                <span>WITH THE PLAN.</span>
              </h2>
            </div>

            <p>
              What is being published, where, when, why, in which format and
              who is responsible for moving it forward.
            </p>
          </div>

          <div className={styles.calendarShowcase}>
            <div className={styles.calendarImage}>
              <Image
                src={assets.contentoCalendar}
                alt="Content calendar"
                fill
                sizes="(max-width: 800px) 100vw, 70vw"
              />

              <div className={styles.darkImageNote}>
                <span>CONTENT CALENDAR</span>
                <span>MASTER PLAN / 01</span>
              </div>
            </div>

            <div className={styles.calendarInfo}>
              <span>CONTENT CALENDAR</span>

              <h3>
                THE CLIENT
                <br />
                <strong>KNOWS WHAT&apos;S NEXT.</strong>
              </h3>

              <p>
                A strong calendar makes the content operation visible before
                the audience ever sees the post.
              </p>

              <ul>
                <li>Platform</li>
                <li>Date &amp; time</li>
                <li>Format</li>
                <li>Caption</li>
                <li>Creative</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTION
      ===================================================== */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>08</span>
            <span>CONTENT PRODUCTION</span>
          </div>

          <div className={styles.splitHeading}>
            <div>
              <p className={styles.accentLabel}>FROM IDEA TO PUBLISHED</p>

              <h2>
                THE WORK
                <br />
                <span>BEHIND THE POST.</span>
              </h2>
            </div>

            <p>
              Social management is a production process. The idea becomes a
              brief, then creative, then an approved and published piece of
              communication.
            </p>
          </div>

          <div className={styles.productionFlow}>
            {productionSteps.map((step, index) => (
              <div key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>

          <div className={styles.contentWall}>
            <div className={styles.wallLarge}>
              <Image
                src={assets.contentoPost}
                alt="Contento social content"
                fill
                sizes="(max-width: 700px) 100vw, 55vw"
              />
              <span>CONTENTO / CREATIVE SYSTEM</span>
            </div>

            <div>
              <Image
                src={assets.fiveStarPost}
                alt="The 5 Star Host content"
                fill
                sizes="(max-width: 700px) 100vw, 22vw"
              />
            </div>

            <div>
              <Image
                src={assets.gordanaRealEstate}
                alt="Gordana Hamati real estate content"
                fill
                sizes="(max-width: 700px) 100vw, 22vw"
              />
            </div>

            <div>
              <Image
                src={assets.gordanaPersonal}
                alt="Gordana Hamati personal brand content"
                fill
                sizes="(max-width: 700px) 100vw, 22vw"
              />
            </div>

            <div>
              <Image
                src={assets.fiveStarReel}
                alt="Short form video content"
                fill
                sizes="(max-width: 700px) 100vw, 22vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REELS
      ===================================================== */}

      <section className={styles.softSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>09</span>
            <span>SHORT-FORM VIDEO</span>
          </div>

          <div className={styles.reelSection}>
            <div className={styles.reelVisual}>
              <Image
                src={assets.reel}
                alt="Short-form Reel content"
                fill
                sizes="(max-width: 800px) 100vw, 35vw"
              />
            </div>

            <div>
              <p className={styles.accentLabel}>REELS / PROPERTY / AIRBNB</p>

              <h2>
                SHORT-FORM
                <br />
                <span>EARNS ATTENTION.</span>
              </h2>

              <p className={styles.reelDescription}>
                Reels create another layer of communication. The objective is
                to combine a strong opening, visual storytelling, brand
                identity and a useful next action.
              </p>

              <div className={styles.reelPrinciples}>
                <span>HOOK</span>
                <span>STORY</span>
                <span>BRAND</span>
                <span>CTA</span>
                <span>DISTRIBUTION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL TO BUSINESS
      ===================================================== */}

      <section className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>10</span>
            <span>SOCIAL → BUSINESS SYSTEM</span>
          </div>

          <div className={styles.darkHeading}>
            <div>
              <p className={styles.accentLabel}>WHERE DOES THE ATTENTION GO?</p>

              <h2>
                SOCIAL CAN
                <br />
                <span>OPEN THE DOOR.</span>
              </h2>
            </div>

            <p>
              Social does not always need to be the final destination. It can
              introduce the audience to the larger digital journey.
            </p>
          </div>

          <div className={styles.conversionFlow}>
            {conversionSteps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className={styles.businessConnection}>
            <span>CONNECTED OPERATIONS</span>

            <strong>
              SOCIAL MEDIA CAN CONNECT WITH THE CRM, AUTOMATION AND
              LEAD-GENERATION SYSTEMS BEHIND THE BUSINESS.
            </strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          METRICS
      ===================================================== */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>11</span>
            <span>REPORTING &amp; MEASUREMENT</span>
          </div>

          <div className={styles.splitHeading}>
            <div>
              <p className={styles.accentLabel}>WHAT DOES SUCCESS LOOK LIKE?</p>

              <h2>
                MORE THAN
                <br />
                <span>FOLLOWERS.</span>
              </h2>
            </div>

            <p>
              Different metrics answer different questions. Useful reporting
              connects attention, engagement, intent and business activity.
            </p>
          </div>

          <div className={styles.metricGrid}>
            {metricGroups.map(([title, metrics]) => (
              <article key={title}>
                <span>{title}</span>

                <div>
                  {(metrics as string[]).map((metric) => (
                    <strong key={metric}>{metric}</strong>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.feedbackLoop}>
            <span>THE FEEDBACK LOOP</span>

            <div>
              <strong>CREATE</strong>
              <i>→</i>
              <strong>PUBLISH</strong>
              <i>→</i>
              <strong>MEASURE</strong>
              <i>→</i>
              <strong>LEARN</strong>
              <i>→</i>
              <strong>CHANGE</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL REPORTING
      ===================================================== */}

      <section className={styles.reportSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>12</span>
            <span>SOCIAL REPORTING</span>
          </div>

          <div className={styles.reportGrid}>
            <div className={styles.reportCopy}>
              <p className={styles.accentLabel}>THE REPORTING LAYER</p>

              <h2>
                TURN ACTIVITY
                <br />
                INTO <span>INSIGHT.</span>
              </h2>

              <p className={styles.reportLead}>
                Reporting gives the client a structured view of what happened
                across the social channels and creates a reference point for
                the next content cycle.
              </p>

              <div className={styles.reportList}>
                <span>PERFORMANCE OVERVIEW</span>
                <span>CONTENT PERFORMANCE</span>
                <span>AUDIENCE RESPONSE</span>
                <span>TRAFFIC &amp; INTENT</span>
                <span>RECOMMENDATIONS</span>
              </div>

              <Link
                href="/projects/social-reporting"
                className={styles.reportLink}
              >
                VIEW SOCIAL REPORTING
                <span>↗</span>
              </Link>
            </div>

            <Link
              href="/projects/social-reporting"
              className={styles.reportVisual}
            >
              <Image
                src={assets.socialReporting}
                alt="Social reporting dashboard"
                fill
                sizes="(max-width: 800px) 100vw, 58vw"
              />

              <div className={styles.reportVisualMeta}>
                <span>SOCIAL REPORTING</span>
                <span>VIEW PROJECT ↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICS
      ===================================================== */}

      <section className={styles.softSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>13</span>
            <span>DATA &amp; OPTIMIZATION</span>
          </div>

          <div className={styles.analyticsGrid}>
            <div>
              <p className={styles.accentLabel}>
                WHAT DID THE AUDIENCE TELL US?
              </p>

              <h2>
                REPORTING
                <br />
                <span>DRIVES CHANGE.</span>
              </h2>

              <p className={styles.reelDescription}>
                Reporting tells us what happened. Optimization asks what we
                should do differently because of it.
              </p>

              <div className={styles.analyticsQuestions}>
                <span>WHAT GOT ATTENTION?</span>
                <span>WHAT CREATED ENGAGEMENT?</span>
                <span>WHAT CREATED INTENT?</span>
                <span>WHAT SHOULD CHANGE?</span>
              </div>
            </div>

            <div className={styles.analyticsImage}>
              <Image
                src={assets.analytics}
                alt="Social media analytics"
                fill
                sizes="(max-width: 800px) 100vw, 55vw"
              />

              <div className={styles.imageNote}>
                <span>ANALYTICS / PERFORMANCE</span>
                <span>01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ===================================================== */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>14</span>
            <span>TOOLS &amp; TECHNOLOGY</span>
          </div>

          <div className={styles.splitHeading}>
            <div>
              <p className={styles.accentLabel}>THE TECHNOLOGY STACK</p>

              <h2>
                TOOLS SUPPORT
                <br />
                <span>THE SYSTEM.</span>
              </h2>
            </div>

            <p>
              Strategy and creative thinking remain central, but the right
              tools make planning, production, publishing, reporting and
              conversion easier to operate.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <div key={tool.name} className={styles.tool}>
                <div className={styles.toolIcon}>
                  <Image
                    src={tool.icon}
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>

                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL PRESENCE
      ===================================================== */}

      <section className={styles.socialPresence}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span>15</span>
            <span>SOCIAL PRESENCE</span>
          </div>

          <div className={styles.socialPresenceIntro}>
            <div>
              <p className={styles.accentLabel}>SOCIAL IS ALSO EVIDENCE</p>

              <h2>
                I BUILD
                <br />
                <span>MY OWN PRESENCE TOO.</span>
              </h2>
            </div>

            <p>
              Social media work is not only about managing other brands. My
              own channels are part of the same digital practice — documenting
              work, technology, design, development and ideas.
            </p>
          </div>

          <div className={styles.profileGroups}>
            <div className={styles.profileGroup}>
              <span>CLIENT ACCOUNTS</span>

              <div className={styles.clientProfiles}>
                {clientProfiles.map((profile) => (
                  <div
                    key={profile.client}
                    className={styles.clientProfile}
                  >
                    <div>
                      <strong>{profile.client}</strong>
                      <small>{profile.role}</small>
                    </div>

                    <div className={styles.profileLinks}>
                      {profile.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={link.icon}
                            alt=""
                            width={16}
                            height={16}
                          />
                          {link.label}
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.profileGroup}>
              <span>MY ACCOUNTS</span>

              <div className={styles.myProfiles}>
                {myProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.myProfile}
                  >
                    <Image
                      src={profile.icon}
                      alt=""
                      width={22}
                      height={22}
                    />

                    <span>{profile.label}</span>

                    <strong>↗</strong>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPECTATIONS
      ===================================================== */}

      <section className={styles.expectations}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>16</span>
            <span>CLIENT EXPERIENCE</span>
          </div>

          <div className={styles.expectationIntro}>
            <div>
              <p className={styles.accentLabel}>
                WHAT SHOULD A CLIENT EXPECT?
              </p>

              <h2>
                KNOW WHAT
                <br />
                <span>HAPPENS NEXT.</span>
              </h2>
            </div>

            <p>
              Hover over a stage to see the explanation and supporting work.
              On mobile, tap a stage to expand it.
            </p>
          </div>

          <div
            className={styles.expectationLayout}
            onMouseLeave={handleExpectationLeave}
          >
            <div className={styles.expectationList}>
              {expectationItems.map((item, index) => {
                const active = activeExpectation === index;

                return (
                  <button
                    type="button"
                    key={item.number}
                    className={`${styles.expectationItem} ${
                      active ? styles.expectationActive : ""
                    }`}
                    onMouseEnter={() => setActiveExpectation(index)}
                    onFocus={() => setActiveExpectation(index)}
                    onClick={() => setActiveExpectation(index)}
                    aria-expanded={active}
                  >
                    <span className={styles.expectationNumber}>
                      {item.number}
                    </span>

                    <div className={styles.expectationTitle}>
                      <strong>{item.title}</strong>
                      <small>{item.label}</small>
                    </div>

                    <span className={styles.expectationArrow}>
                      {active ? "↘" : "→"}
                    </span>

                    <div className={styles.expectationMobileBody}>
                      <div className={styles.mobileExpectationImage}>
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          sizes="100vw"
                        />
                      </div>

                      <p>{item.description}</p>

                      <div className={styles.expectationTags}>
                        {item.details.map((detail) => (
                          <span key={detail}>{detail}</span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeItem && (
              <motion.div
                className={styles.expectationPreview}
                key={activeItem.image}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 18,
                      }
                }
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                transition={{ duration: 0.3 }}
              >
                <div className={styles.previewImage}>
                  <Image
                    src={activeItem.image}
                    alt={activeItem.label}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />

                  <div className={styles.previewImageMeta}>
                    <span>{activeItem.label}</span>
                    <span>{activeItem.number}</span>
                  </div>
                </div>

                <div className={styles.previewCopy}>
                  <span>
                    {activeItem.number} / {activeItem.label}
                  </span>

                  <p>{activeItem.description}</p>

                  <div>
                    {activeItem.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {!activeItem && (
              <div className={styles.expectationEmpty}>
                <span>MOVE ACROSS A STAGE</span>
                <strong>SEE THE WORK BEHIND IT.</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          OPTIMIZATION
      ===================================================== */}

      <section className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabelDark}>
            <span>17</span>
            <span>CONTINUOUS IMPROVEMENT</span>
          </div>

          <div className={styles.optimization}>
            <p className={styles.accentLabel}>REPORTING IS NOT THE END.</p>

            <h2>
              PUBLISH.
              <br />
              MEASURE.
              <br />
              <span>IMPROVE.</span>
            </h2>

            <div className={styles.optimizationFlow}>
              <span>PUBLISH</span>
              <i>→</i>
              <span>MEASURE</span>
              <i>→</i>
              <span>LEARN</span>
              <i>→</i>
              <span>CHANGE</span>
              <i>→</i>
              <span>TEST</span>
              <i>→</i>
              <span>PUBLISH AGAIN</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.cta}>
        <div>
          <span>SOCIAL MEDIA / CONTENT SYSTEM</span>

          <h2>
            BUILD THE
            <br />
            <em>SYSTEM AROUND THE BRAND.</em>
          </h2>

          <p>
            Content strategy, creative production, publishing, measurement and
            the digital journey beyond social.
          </p>

          <Link href="/contact" className={styles.ctaButton}>
            START A PROJECT
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT — HERO-LIKE BANNER
      ===================================================== */}

      <section className={styles.nextProject}>
        <div className={styles.nextProjectBanner}>
          <Image
            src={assets.nextProject}
            alt="Lead Generation and Funnels"
            fill
            sizes="100vw"
            className={styles.nextProjectBackground}
          />

          <div className={styles.nextProjectOverlay} />

          <div className={styles.nextProjectContent}>
            <div className={styles.nextProjectTop}>
              <span>NEXT SYSTEM / 18</span>
              <span>LEAD GENERATION / FUNNELS</span>
            </div>

            <div className={styles.nextProjectMiddle}>
              <div>
                <p className={styles.nextProjectEyebrow}>
                  FROM SOCIAL ATTENTION
                </p>

                <h2>
                  TO
                  <br />
                  <span>ACQUISITION.</span>
                </h2>
              </div>

              <p>
                Campaigns, landing pages, forms, CRM workflows and follow-up
                connected into measurable acquisition systems.
              </p>
            </div>

            <div className={styles.nextProjectBottom}>
              <span>EXPLORE LEAD GENERATION</span>
              <span>VIEW PROJECT ↗</span>
            </div>
          </div>

          <Link
            href="/projects/lead-generation"
            className={styles.nextProjectHitArea}
            aria-label="View Lead Generation project"
          />
        </div>
      </section>
    </main>
  );
}