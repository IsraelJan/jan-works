"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./about.module.css";

type Tool = {
  name: string;
  icon: string;
};

const toolGroups = [
  {
    title: "SOFTWARE & DEVELOPMENT",
    tools: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
    ],
  },
  {
    title: "CRM & AUTOMATION",
    tools: [
      { name: "GoHighLevel", icon: "/icons/gohighlevel.svg" },
      { name: "HoneyBook", icon: "/icons/honeybook.svg" },
      { name: "Zapier", icon: "/icons/zapier.svg" },
      { name: "Make", icon: "/icons/make.svg" },
      { name: "n8n", icon: "/icons/n8n.svg" },
    ],
  },
  {
    title: "WEB & DESIGN",
    tools: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Canva", icon: "/icons/canva.svg" },
      { name: "WordPress", icon: "/icons/wordpress.svg" },
      { name: "Wix", icon: "/icons/wix.svg" },
      { name: "Elementor", icon: "/icons/elementor.svg" },
    ],
  },
  {
    title: "BUSINESS & MARKETING",
    tools: [
      { name: "Google Analytics", icon: "/icons/google-analytics.svg" },
      { name: "Google Sheets", icon: "/icons/google-sheets.svg" },
      { name: "Notion", icon: "/icons/notion.svg" },
      { name: "Meta", icon: "/icons/meta.svg" },
      { name: "Mailchimp", icon: "/icons/mailchimp.svg" },
      { name: "wise", icon: "/icons/wise.svg" },
      { name: "Deel.", icon: "/icons/deel.svg" },
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Business & Digital Operations",
    text: "I understand the work behind the interface: clients, teams, communication, information, handoffs, scheduling, follow-up and delivery. That operational understanding helps me build solutions around how a business actually works.",
  },
  {
    number: "02",
    title: "CRM & Workflow Systems",
    text: "I build and maintain systems that connect websites, forms, CRM pipelines, calendars, communication channels and follow-up processes so information can move through a business without being repeatedly handled by people.",
  },
  {
    number: "03",
    title: "Web & Frontend Development",
    text: "I build responsive interfaces and websites with a focus on usability, structure and the relationship between the interface and the systems behind it.",
  },
  {
    number: "04",
    title: "Automation & Integrations",
    text: "I look for repetitive handoffs and manual bottlenecks, then connect the appropriate tools through workflows, APIs, forms, notifications and automation.",
  },
];

const languages = [
  {
    name: "English",
    level: "C1 — Advanced Professional Proficiency",
  },
  {
    name: "Kiswahili",
    level: "Fluent",
  },
];

const education = [
  {
    period: "2026 — PRESENT",
    title: "Computer Software Engineering",
    detail: "Professional software engineering studies",
  },
  {
    period: "2025",
    title: "Data Analysis",
    detail: "Coursera",
  },
  {
    period: "2018 — 2021",
    title: "Diploma in Architecture",
    detail: "Nairobi Institute of Technology",
  },
];

export default function AboutPage() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroStory}>
            <div className={styles.heroEyebrow}>
              <span className={styles.blueDot} />
              ABOUT ISRAEL JAN
            </div>

            <h2>
              BUILT THROUGH 
              <span> EXPERIENCE.</span>
            
            </h2>

            <div className={styles.heroStoryText}>
              <p>
                My work sits between business operations and technology. I
                help businesses understand what needs to happen, structure the
                process behind it, connect the tools involved, and increasingly
                build the software that brings those systems together.
              </p>

              <p>
                That perspective came from experience rather than a single
                discipline. I started in customer and business operations,
                moved into property and digital operations, then increasingly
                worked with CRM systems, automation, websites and integrations.
                Today, I am taking that same systems thinking deeper into
                software engineering.
              </p>
            </div>

            <div className={styles.heroPath}>
              <span>OPERATIONS</span>
              <i>→</i>
              <span>SYSTEMS</span>
              <i>→</i>
              <span>SOFTWARE</span>
            </div>
          </div>

          <div className={styles.heroPortrait}>
            <div className={styles.portraitFrame}>
              <Image
                src="/images/profile/israel-profile.jpg"
                alt="Israel Jan"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 45vw"
                className={styles.portraitImage}
              />

              <div className={styles.portraitOverlay}>
                <div>
                  <span>ISRAEL JAN</span>
                  <small>OPERATIONS / SYSTEMS / SOFTWARE</small>
                </div>

                <span className={styles.portraitNumber}>01</span>
              </div>
            </div>

            <div className={styles.portraitCaption}>
              <span className={styles.captionLine} />

              <p>
                Based in Nairobi, working remotely with international teams and
                clients.
              </p>
            </div>

            <div className={styles.floatingLabel}>
              <span>THE APPROACH</span>
              <strong>UNDERSTAND → STRUCTURE → CONNECT → BUILD</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}
      <section className={styles.storySection}>
        <div className={styles.storyLayout}>
          <div className={styles.storyLabel}>
            <span>01</span>
            <p>THE STORY</p>
          </div>

          <article className={styles.storyArticle}>
            <p className={styles.storyOpening}>
              I did not start my career as a software engineer.
            </p>

            <p>
              My first professional experiences taught me something that has
              stayed with me: most business problems do not exist inside one
              tool. They exist between people, processes, information and
              systems.
            </p>

            <p>
              I spent years working close to customers and day-to-day
              operations. That meant dealing with requests, resolving issues,
              keeping information accurate, following processes, coordinating
              work and making sure something that entered the system actually
              reached the other side. Those experiences gave me an appreciation
              for the operational details that are often invisible from the
              outside.
            </p>

            <p>
              As my work moved into digital operations and real estate, the
              problems became more connected. A property enquiry could involve
              a website, a form, a CRM, a calendar, an agent, a customer, a
              follow-up sequence and eventually a transaction or service
              process. Managing those pieces individually was possible. Making
              them work together was much more valuable.
            </p>

            <p>
              That is where my interest in systems grew.
            </p>

            <p>
              I began working with CRM platforms, workflow automation,
              websites, forms, calendars, communication tools and integrations.
              Instead of simply completing the task in front of me, I started
              asking what happened before it, what should happen next, where
              information should go and what could be made automatic.
            </p>

            <p>
              Today, that thinking influences how I approach web development
              and software. I am not interested in building an interface in
              isolation. I want to understand what the interface is connected
              to, what the user is trying to accomplish and what the business
              needs to happen behind it.
            </p>

            <p className={styles.storyClosing}>
              <strong>
                The result is a way of working that combines operational
                understanding with systems thinking and increasingly deeper
                software engineering.
              </strong>
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          WHY THIS MATTERS
      ===================================================== */}
      <section className={styles.valueSection}>
        <div className={styles.valueIntro}>
          <div className={styles.sectionMiniLabel}>02 / WHY IT MATTERS</div>

          <h2>
            You do not always need
            <span> another tool.</span>
          </h2>

          <p>
            Sometimes the problem is that the tools you already have are not
            connected properly.
          </p>
        </div>

        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <span>01</span>
            <h3>SEE THE WHOLE JOURNEY</h3>
            <p>
              I look beyond the individual task and consider the journey from
              the first interaction through to the next operational handoff.
            </p>
          </div>

          <div className={styles.valueCard}>
            <span>02</span>
            <h3>UNDERSTAND THE OPERATION</h3>
            <p>
              My operations background helps me understand the practical
              constraints that sit behind a digital requirement.
            </p>
          </div>

          <div className={styles.valueCard}>
            <span>03</span>
            <h3>CONNECT THE PIECES</h3>
            <p>
              Websites, forms, CRM, calendars, communications and payments can
              become one connected journey rather than isolated tools.
            </p>
          </div>

          <div className={styles.valueCard}>
            <span>04</span>
            <h3>BUILD TOWARD THE FUTURE</h3>
            <p>
              I am continuing to deepen my software engineering capability so
              that I can move from configuring systems to building more of the
              technology behind them.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className={styles.capabilitySection}>
        <div className={styles.capabilityHeader}>
          <div>
            <div className={styles.sectionMiniLabel}>03 / CAPABILITIES</div>

            <h2>What I can bring to a project.</h2>
          </div>

          <p>
            My strongest value comes from working across disciplines rather
            than treating operations, technology and design as completely
            separate problems.
          </p>
        </div>

        <div className={styles.capabilityInterface}>
          <div className={styles.capabilityList}>
            {capabilities.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`${styles.capabilityItem} ${
                  activeCapability === index ? styles.capabilityActive : ""
                }`}
                onMouseEnter={() => setActiveCapability(index)}
                onFocus={() => setActiveCapability(index)}
                onClick={() => setActiveCapability(index)}
              >
                <span>{item.number}</span>

                <strong>{item.title}</strong>

                <span className={styles.capabilityArrow}>↗</span>
              </button>
            ))}
          </div>

          <div className={styles.capabilityDetail}>
            <div className={styles.detailNumber}>
              {capabilities[activeCapability].number}
            </div>

            <h3>{capabilities[activeCapability].title}</h3>

            <p>{capabilities[activeCapability].text}</p>

            <div className={styles.detailBottom}>
              <span>CAPABILITY</span>
              <span>JAN WORKS</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ===================================================== */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsHeader}>
          <div>
            <div className={styles.sectionMiniLabel}>04 / TOOLS</div>
            <h2>The technology I work with.</h2>
          </div>

          <p>
            Tools are important, but they are not the strategy. I choose them
            according to the workflow, product or business problem they need
            to support.
          </p>
        </div>

        <div className={styles.toolGroups}>
          {toolGroups.map((group) => (
            <div className={styles.toolGroup} key={group.title}>
              <div className={styles.toolGroupTitle}>
                {group.title}
              </div>

              <div className={styles.toolGrid}>
                {group.tools.map((tool: Tool) => (
                  <div className={styles.toolCard} key={tool.name}>
                    <div className={styles.toolIcon}>
                      <img
                        src={tool.icon}
                        alt=""
                        aria-hidden="true"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                          event.currentTarget.parentElement?.classList.add(
                            styles.iconFallback
                          );
                        }}
                      />

                      <span>{tool.name.charAt(0)}</span>
                    </div>

                    <span>{tool.name}</span>

                    <span className={styles.toolArrow}>↗</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          LANGUAGES
      ===================================================== */}
      <section className={styles.languagesSection}>
        <div className={styles.languagesIntro}>
          <div className={styles.sectionMiniLabel}>05 / LANGUAGES</div>

          <h2>Clear communication is part of the work.</h2>

          <p>
            I work across technical and non-technical environments, including
            international client relationships where requirements need to be
            understood clearly and translated into practical execution.
          </p>
        </div>

        <div className={styles.languageRows}>
          {languages.map((language) => (
            <div className={styles.languageRow} key={language.name}>
              <strong>{language.name}</strong>
              <span>{language.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}
      <section className={styles.educationSection}>
        <div className={styles.educationIntro}>
          <div className={styles.sectionMiniLabel}>06 / EDUCATION</div>

          <h2>Still building the technical depth.</h2>

          <p>
            My education reflects the same progression as my career: design,
            analysis, systems and increasingly software.
          </p>
        </div>

        <div className={styles.educationRows}>
          {education.map((item) => (
            <div className={styles.educationRow} key={item.title}>
              <span className={styles.educationPeriod}>{item.period}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}
      <section className={styles.closingSection}>
        <div className={styles.closingInner}>
          <div className={styles.sectionMiniLabel}>THE DIRECTION</div>

          <div className={styles.closingGrid}>
            <h2>
              I am building toward
              <span> one thing:</span>
            </h2>

            <div>
              <p>
                becoming someone who can understand a business problem,
                structure the system around it, automate what should be
                automated and build the software required to make the
                experience work.
              </p>

              <p>
                That is the direction behind JAN WORKS — not simply making
                websites or configuring tools, but understanding the system
                underneath and making it work better.
              </p>

              <div className={styles.closingLinks}>
                <Link href="/work">See the work →</Link>
                <Link href="/systems">Explore systems →</Link>
                <Link href="/experience">View experience →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <strong>JAN WORKS</strong>
          <span>OPERATIONS × SYSTEMS × SOFTWARE</span>
        </div>

        <div className={styles.footerLinks}>
          <a href="mailto:israeljan.78@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/israel-jan-35a702308/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/IsraelJan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}