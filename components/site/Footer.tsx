import Link from "next/link";
import styles from "./Footer.module.css";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Systems", href: "/systems" },
  { label: "Engineering", href: "/engineering" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* MAIN FOOTER */}

        <div className={styles.main}>

          {/* BRAND */}

          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              ISRAEL JAN WORKS<span>.</span>
            </Link>

            <p>
              Operations · Systems · Technology
            </p>
          </div>

          {/* STATEMENT */}

          <div className={styles.statement}>
            <span className={styles.statementLabel}>
              THE WORK
            </span>

            <p>
              Building digital systems that make
              businesses work better.
            </p>
          </div>

          {/* NAVIGATION */}

          <nav className={styles.navigation} aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navLink}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* CONTACT STRIP */}

        <div className={styles.contactStrip}>

          <div className={styles.availability}>
            <span className={styles.statusDot} />
            <span>AVAILABLE FOR SELECT PROJECTS</span>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/IsraelJan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/israel-jan-35a702308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:hello@israeljan.com">
              Email
            </a>
          </div>

          <span className={styles.year}>
            © {new Date().getFullYear()} JAN WORKS
          </span>
        </div>

      </div>
    </footer>
  );
}