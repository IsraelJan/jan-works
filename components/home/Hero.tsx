"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Atmospheric background image */}
      <div className={styles.heroImage} aria-hidden="true">
        <Image
          src="/images/hero-image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImagePhoto}
        />

        <div className={styles.imageFade} />
      </div>

      {/* Editorial background grid */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.container}>
        {/* --------------------------------
            TOP META
        -------------------------------- */}
        <header className={styles.meta}>
          <div className={styles.metaLeft}>
            <span className={styles.metaLine} />

            <span>
              OPERATIONS · SYSTEMS · TECHNOLOGY
            </span>
          </div>

          <span className={styles.metaRight}>
            ISRAEL JAN / 2026
          </span>
        </header>

        {/* --------------------------------
            HERO CONTENT
        -------------------------------- */}
        <main className={styles.main}>
          <div className={styles.content}>
            <p className={styles.kicker}>
              SYSTEMS THINKING FOR MODERN BUSINESS
            </p>

            <h1 className={styles.title}>
              <span className={styles.lineOne}>
                I BUILD
              </span>

              <span className={styles.lineTwo}>
                THE SYSTEMS
              </span>

              <span className={styles.accentLine}>
                BEHIND BETTER
              </span>

              <span className={styles.lineFour}>
                BUSINESS.
              </span>
            </h1>

            <div className={styles.descriptionWrap}>
              <span
                className={styles.descriptionLine}
                aria-hidden="true"
              />

              <p className={styles.description}>
                I design and connect CRM, workflows,
                websites and digital systems around
                the way your business actually operates.
              </p>
            </div>

            <div className={styles.actions}>
              <Link
                href="/work"
                className={styles.primaryAction}
              >
                <span>Explore My Work</span>

                <span
                  className={styles.actionArrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryAction}
              >
                Let&apos;s Work
              </Link>
            </div>
          </div>
        </main>

        {/* --------------------------------
            CAPABILITIES
        -------------------------------- */}
        <section className={styles.capabilities}>
          <div className={styles.capabilityIntro}>
            <span>WHAT I BUILD</span>

            <span
              className={styles.capabilityArrow}
              aria-hidden="true"
            >
              ↓
            </span>
          </div>

          <div className={styles.capabilityList}>
            <span>CRM SYSTEMS</span>
            <span>WORKFLOW AUTOMATION</span>
            <span>WEB DESIGN</span>
            <span>DIGITAL SYSTEMS</span>
            <span>SOFTWARE ENGINEERING</span>
          </div>
        </section>

        {/* --------------------------------
            BOTTOM META
        -------------------------------- */}
        <footer className={styles.bottom}>
          <span>
            WORKING GLOBALLY · REMOTELY
          </span>

          <span className={styles.bottomStatus}>
            <i aria-hidden="true" />
            AVAILABLE FOR SELECTED PROJECTS
          </span>
        </footer>
      </div>
    </section>
  );
}