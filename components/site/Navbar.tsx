"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Systems", href: "/systems" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="JAN WORKS home">
          JAN WORKS<span>.</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="/documents/Israel-Jan-CV.pdf"
            download
            className={styles.cv}
          >
            Download CV
          </a>

          <Link href="/contact" className={styles.contact}>
            <span>Let&apos;s Work</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}

          <a
            href="/documents/Israel-Jan-CV.pdf"
            download
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            <span>Download CV</span>
            <span aria-hidden="true">↓</span>
          </a>

          <Link
            href="/contact"
            className={styles.mobileContact}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Work →
          </Link>
        </nav>
      </div>
    </header>
  );
}