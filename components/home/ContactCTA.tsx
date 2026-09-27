"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactCTA.module.css";

const contactLinks = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/israel-jan-35a702308/",
  },
  {
    label: "GITHUB",
    href: "https://github.com/IsraelJan",
  },
  {
    label: "WHATSAPP",
    href: "https://wa.me/254700000000",
  },
  {
    label: "EMAIL",
    href: "mailto:hello@israeljan.com",
  },
];

export default function ContactCTA() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>

        {/* TOP LABEL */}

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>CONTACT</span>
          </div>

          <div className={styles.headerMeta}>
            <span>JAN WORKS</span>
            <span>OPEN FOR SELECT PROJECTS</span>
          </div>
        </header>

        {/* CONTACT EXPERIENCE */}

        <div className={styles.contactArea}>

          {/* BACKGROUND IMAGE */}

          <div
            className={styles.backgroundImage}
            aria-hidden="true"
          />

          <div className={styles.imageOverlay} />

          {/* LEFT SIDE */}

          <div className={styles.leftColumn}>
            <div className={styles.leftTop}>
              <span className={styles.index}>01</span>

              <span className={styles.kicker}>
                START A CONVERSATION
              </span>
            </div>

            <div className={styles.leftMain}>
              <h2 className={styles.heading}>
                LET&apos;S BUILD
                <span>SOMETHING</span>
                <span>THAT WORKS.</span>
              </h2>

              <p className={styles.description}>
                Have a project, system or business problem
                you&apos;d like to discuss? Tell me what you&apos;re
                working on and I&apos;ll get back to you.
              </p>

              <div className={styles.availability}>
                <span className={styles.statusDot} />
                <span>AVAILABLE FOR SELECT PROJECTS</span>
              </div>
            </div>

            {/* DIRECT CONTACT */}

            <div className={styles.directContact}>
              <div className={styles.directHeader}>
                <span>CONNECT DIRECTLY</span>
              </div>

              <div className={styles.contactLinks}>
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}

          <div className={styles.formColumn}>
            <div className={styles.formPanel}>

              <div className={styles.formHeader}>
                <div>
                  <span className={styles.formIndex}>
                    02
                  </span>

                  <h3>PROJECT INQUIRY</h3>
                </div>

                <span className={styles.formStatus}>
                  JAN WORKS / CONTACT
                </span>
              </div>

              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">
                      NAME
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">
                      EMAIL
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">
                    COMPANY / PROJECT
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company or project name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">
                    TELL ME ABOUT THE PROJECT
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you looking to build, improve or automate?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === "sending"}
                >
                  <span>
                    {status === "sending"
                      ? "SENDING..."
                      : "SEND INQUIRY"}
                  </span>

                  <span aria-hidden="true">
                    {status === "sending" ? "..." : "↗"}
                  </span>
                </button>

                {status === "success" && (
                  <p className={styles.success}>
                    Your inquiry has been sent. I&apos;ll get
                    back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className={styles.error}>
                    Something went wrong. Please try again
                    or contact me directly.
                  </p>
                )}
              </form>

            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}

        <div className={styles.bottom}>
          <div className={styles.bottomLabel}>
            <span className={styles.bottomLine} />
            <span>THE NEXT STEP</span>
          </div>

          <p className={styles.bottomStatement}>
            GOOD SYSTEMS START WITH A GOOD CONVERSATION.
          </p>

          <span className={styles.year}>
            2026
          </span>
        </div>
      </div>
    </section>
  );
}