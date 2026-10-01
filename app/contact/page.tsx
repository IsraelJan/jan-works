"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import styles from "./contact.module.css";

const contactChannels = [
  {
    label: "WHATSAPP",
    value: "Start a conversation",
    href: "https://wa.me/254115889691",
    icon: "/icons/whatsapp.svg",
    external: true,
  },
  {
    label: "EMAIL",
    value: "israeljan.78@gmail.com",
    href: "mailto:israeljan.78@gmail.com",
    icon: "/icons/mail.svg",
    external: false,
  },
  {
    label: "LINKEDIN",
    value: "Israel Jan",
    href: "https://www.linkedin.com/in/israel-jan-35a702308/",
    icon: "/icons/linkedin.svg",
    external: true,
  },
  {
    label: "GITHUB",
    value: "IsraelJan",
    href: "https://github.com/IsraelJan",
    icon: "/icons/github.svg",
    external: true,
  },
];

const socialLinks = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/israel_jan78/",
    icon: "/icons/instagram.svg",
  },
  {
    label: "FACEBOOK",
    href: "https://www.facebook.com/israel.jan.78",
    icon: "/icons/facebook.svg",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/israel-jan-35a702308/",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "GITHUB",
    href: "https://github.com/IsraelJan",
    icon: "/icons/github.svg",
  },
  {
    label: "PINTEREST",
    href: "https://www.pinterest.com/israeljan78/",
    icon: "/icons/pinterest.svg",
  },
];

const projectTypes = [
  "Website / Digital Experience",
  "Business Systems",
  "Automation / CRM",
  "Software / Product",
  "Lead Generation",
  "Digital Operations",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroShade} />

        <div className={styles.heroTop}>
          <span>06 / CONTACT</span>
          <span>JAN WORKS</span>
        </div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            START A CONVERSATION
          </span>

          <h1>
            LET&apos;S
            <br />
            <span>MAKE</span>
            <br />
            <strong>IT WORK.</strong>
          </h1>

          <div className={styles.heroDescription}>
            <p>
              Have a project, system, product or idea
              <br className={styles.desktopBreak} />
              that needs to move forward?
            </p>

            <span className={styles.heroLine} />
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>PROJECT INQUIRIES</span>
          <span>SCROLL ↓</span>
        </div>
      </section>

      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section className={styles.contactArea}>
        <div className={styles.sectionIntro}>
          <div>
            <span className={styles.sectionIndex}>01</span>
            <span className={styles.sectionLabel}>CONTACT</span>
          </div>

          <p>
            Tell me what you are building, improving or trying to solve.
            You do not need a perfect brief to start the conversation.
          </p>
        </div>

        <div className={styles.contactLayout}>
          {/* DIRECT CONTACT */}

          <aside className={styles.contactInfo}>
            <div className={styles.infoHeading}>
              <span className={styles.smallLabel}>DIRECT</span>

              <h2>
                TALK
                <br />
                <span>DIRECTLY.</span>
              </h2>

              <p>
                Prefer a direct conversation? Reach me through any of the
                channels below.
              </p>
            </div>

            <div className={styles.channelList}>
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className={styles.channel}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                >
                  <span className={styles.channelIcon}>
                    <img src={channel.icon} alt="" />
                  </span>

                  <span className={styles.channelDetails}>
                    <small>{channel.label}</small>
                    <strong>{channel.value}</strong>
                  </span>

                  <span className={styles.channelArrow}>↗</span>
                </a>
              ))}
            </div>
          </aside>

          {/* PREMIUM FORM */}

          <div className={styles.formShell}>
            {!submitted ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formTop}>
                  <div>
                    <span className={styles.formKicker}>
                      PROJECT INQUIRY
                    </span>

                    <h2>
                      TELL ME
                      <br />
                      <span>WHAT YOU HAVE IN MIND.</span>
                    </h2>
                  </div>

                  <span className={styles.formNumber}>01 / 05</span>
                </div>

                {/* NAME / EMAIL */}

                <div className={styles.formGrid}>
                  <label className={styles.field}>
                    <span>01 — YOUR NAME</span>

                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span>02 — EMAIL ADDRESS</span>

                    <input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                </div>

                {/* COMPANY / TYPE */}

                <div className={styles.formGrid}>
                  <label className={styles.field}>
                    <span>03 — COMPANY / ORGANISATION</span>

                    <input
                      name="company"
                      type="text"
                      placeholder="Optional"
                    />
                  </label>

                  <label className={styles.field}>
                    <span>04 — PROJECT TYPE</span>

                    <select
                      name="projectType"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a project
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {/* MESSAGE */}

                <label className={styles.messageField}>
                  <span>05 — TELL ME ABOUT THE PROJECT</span>

                  <textarea
                    name="message"
                    rows={7}
                    placeholder="What are you trying to build, improve, automate or solve?"
                    required
                  />
                </label>

                {/* FORM FOOTER */}

                <div className={styles.formFooter}>
                  <div>
                    <span className={styles.formStatus}>
                      READY WHEN YOU ARE
                    </span>

                    <p>
                      Share the context. I&apos;ll take it from there.
                    </p>
                  </div>

                  <button type="submit" className={styles.submit}>
                    <span>SEND INQUIRY</span>
                    <strong>↗</strong>
                  </button>
                </div>
              </form>
            ) : (
              <div className={styles.success}>
                <span className={styles.successMark}>✓</span>

                <span className={styles.formKicker}>
                  INQUIRY RECEIVED
                </span>

                <h2>
                  THANK
                  <br />
                  <span>YOU.</span>
                </h2>

                <p>
                  Your project details have been received. I&apos;ll review
                  the information and get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL
      ===================================================== */}

      <section className={styles.social}>
        <div className={styles.socialHeader}>
          <div>
            <span className={styles.sectionIndex}>02</span>
            <span className={styles.sectionLabel}>SOCIAL</span>
          </div>

          <div>
            <span className={styles.smallLabel}>ELSEWHERE</span>

            <h2>
              FIND ME
              <br />
              <span>ONLINE.</span>
            </h2>
          </div>
        </div>

        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={styles.socialItem}
            >
              <span className={styles.socialNumber}>
                0{index + 1}
              </span>

              <span className={styles.socialIcon}>
                <img src={social.icon} alt="" />
              </span>

              <strong>{social.label}</strong>

              <span className={styles.socialArrow}>↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className={styles.footer}>
        <div>
          <strong>JAN WORKS</strong>
          <span>Systems · Software · Digital Experience</span>
        </div>

        <Link href="/">BACK TO HOME ↑</Link>
      </footer>
    </main>
  );
}