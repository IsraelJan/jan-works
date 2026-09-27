import Image from "next/image";
import Link from "next/link";

import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>ABOUT</span>
          </div>

        </header>

        <div className={styles.content}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/profile/israel-profile.jpg"
                alt="Israel Jan"
                fill
                sizes="(max-width: 700px) 100vw, 42vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.imageLabel}>
                <span>ISRAEL JAN</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          <div className={styles.textColumn}>
            <h2 className={styles.heading}>
              I WORK BETWEEN
              <span>BUSINESS &amp; TECHNOLOGY.</span>
            </h2>

            <div className={styles.introduction}>
              <p>
                I&apos;m Israel Jan a systems-focused digital
                professional working across operations, CRM,
                automation, web development and software
                engineering.
              </p>

              <p>
                My work sits at the intersection of understanding
                how a business operates and building the digital
                systems that help it operate better.
              </p>
            </div>

            <div className={styles.principles}>
              <div className={styles.principle}>
                <span className={styles.principleNumber}>
                  01
                </span>

                <div>
                  <h3>THINK IN SYSTEMS</h3>
                  <p>
                    I look beyond individual tools and
                    understand how the different parts of a
                    business connect.
                  </p>
                </div>
              </div>

              <div className={styles.principle}>
                <span className={styles.principleNumber}>
                  02
                </span>

                <div>
                  <h3>BUILD WITH PURPOSE</h3>
                  <p>
                    Technology should solve a real problem,
                    simplify a process or create a better
                    experience.
                  </p>
                </div>
              </div>

              <div className={styles.principle}>
                <span className={styles.principleNumber}>
                  03
                </span>

                <div>
                  <h3>KEEP LEARNING</h3>
                  <p>
                    I continue developing my software
                    engineering skills while applying them to
                    real business and digital systems.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/about" className={styles.aboutLink}>
              <span>More About Me</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLabel}>
            <span className={styles.bottomLine} />
            <span>WHAT CONNECTS IT ALL</span>
          </div>

          <p className={styles.bottomStatement}>
            <span>BUSINESS UNDERSTANDING.</span>
            <span>SYSTEMS THINKING.</span>
            <span>TECHNICAL EXECUTION.</span>
          </p>
        </div>
      </div>
    </section>
  );
}