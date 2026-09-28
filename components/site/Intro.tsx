"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";

const INTRO_DURATION = 9000;
const EXIT_DURATION = 1000;

export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const exitTimerRef = useRef<number | null>(null);
  const hasExitedRef = useRef(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(
      "israel-jan-portfolio-intro-seen"
    );

    if (seen) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const introTimer = window.setTimeout(() => {
      exitIntro();
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(introTimer);

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }

      document.body.style.overflow = "";
    };
  }, []);

  function exitIntro() {
    if (hasExitedRef.current) return;

    hasExitedRef.current = true;

    sessionStorage.setItem(
      "israel-jan-portfolio-intro-seen",
      "true"
    );

    setLeaving(true);

    exitTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, EXIT_DURATION);
  }

  if (!visible) return null;

  return (
    <section
      className={`${styles.intro} ${
        leaving ? styles.leaving : ""
      }`}
      role="dialog"
      aria-label="Israel Jan Portfolio introduction"
    >
      {/* BACKGROUND */}

      <div className={styles.background} />
      <div className={styles.grid} />
      <div className={styles.glow} />

      {/* TOP BAR */}

      <header className={styles.top}>
        <div className={styles.identity}>
          <span className={styles.identityName}>
            ISRAEL JAN.
          </span>

          <span className={styles.identityDivider}>
            /
          </span>

          <span>
            ISRAEL JAN PORTFOLIO
          </span>
        </div>

        <span className={styles.year}>
          2026
        </span>
      </header>

      {/* MAIN EXPERIENCE */}

      <main className={styles.main}>
        {/* LEFT CONTENT */}

        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            <span>
              OPERATIONS · SYSTEMS · TECHNOLOGY
            </span>
          </div>

          <div className={styles.headline}>
            <span>
              I BUILD
            </span>

            <span>
              SYSTEMS
            </span>

            <span className={styles.accentLine}>
              THAT WORK.
            </span>
          </div>

          <div className={styles.description}>
            <p>
              CRM, workflow automation and digital
              systems supported by software engineering
              to connect processes, people and technology.
            </p>
          </div>

          <div className={styles.capabilities}>
            <span>
              <i />
              OPERATIONS
            </span>

            <span>
              <i />
              CRM SYSTEMS
            </span>

            <span>
              <i />
              WORKFLOW AUTOMATION
            </span>

            <span>
              <i />
              DIGITAL SYSTEMS
            </span>

            <span>
              <i />
              SOFTWARE ENGINEERING
            </span>
          </div>
        </div>

        {/* RIGHT PORTRAIT */}

        <div className={styles.visual}>
          <div className={styles.visualNumber}>
            01
          </div>

          <div className={styles.visualFrame}>
            <div className={styles.blueFrame} />

            <div className={styles.portrait}>
              <Image
                src="/images/profile/israel-profile.jpg"
                alt="Israel Jan"
                fill
                priority
                sizes="(max-width: 768px) 82vw, 45vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.cornerTop} />
            <div className={styles.cornerBottom} />

            <div className={styles.visualLabel}>
              <span>
                ISRAEL JAN.
              </span>

              <span>
                OPERATIONS / SYSTEMS
              </span>
            </div>
          </div>

          <div className={styles.verticalLabel}>
            <span>
              SYSTEMS
            </span>

            <span>
              TECHNOLOGY
            </span>
          </div>
        </div>
      </main>

      {/* BOTTOM BAR */}

      <footer className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <span>
            PORTFOLIO / 2026
          </span>

          <span className={styles.bottomDivider} />

          <span>
            REMOTE
          </span>
        </div>

        <div className={styles.entering}>
          <span className={styles.enteringDot} />

          <span>
            ENTERING PORTFOLIO
          </span>

          <span className={styles.enteringDots}>
            <span />
            <span />
            <span />
          </span>
        </div>

        <button
          type="button"
          onClick={exitIntro}
          className={styles.enterButton}
        >
          <span>
            ENTER PORTFOLIO
          </span>

          <span className={styles.arrow}>
            →
          </span>
        </button>
      </footer>

      {/* BLUE ACCENT LINE */}

      <div className={styles.accentBar} />
    </section>
  );
}