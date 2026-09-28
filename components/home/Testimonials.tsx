"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    number: "01",
    name: "TRACY KING",
    company: "REAL TASKING",
    location: "Katty, Texas US",
    category: "OPERATIONS · ENGINEERING · DIGITAL SYSTEMS",
    quote:
      "Israel understood both the work and the system behind it. He moved easily between operations, technology and the details that kept everything moving.",
    image: "/images/testimonials/tracy-king.jpg",
  },
  {
    number: "02",
    name: "NICOLE CREEGAN",
    company: "THE 5 STAR HOST",
    location: "Miami, FL",
    category: "AIRBNB WEBSITE MANAGEMENT · CONCIERGE",
    quote:
      "Israel understood what the business needed and took care of the digital side with real attention to detail. He was reliable, responsive and easy to work with.",
    image: "/images/testimonials/nicole-creegan.jpg",
  },
  {
    number: "03",
    name: "GORDANA HAMATI",
    company: "REAL ESTATE",
    location: "Manvel, TX",
    category: "SOCIAL MEDIA MANAGEMENT",
    quote:
      "Israel brought structure and consistency to my social media. He understood the image I wanted for my real estate business and helped turn that into a stronger digital presence.",
    image: "/images/testimonials/gordana-hamati.jpg",
  },
  {
    number: "04",
    name: "BRITTANY WRIGHT",
    company: "SHE MEANS BUSINESS",
    location: "Houston, TX",
    category: "WEB DEVELOPMENT · MOBILE DEVELOPMENT · CRM",
    quote:
      "Israel took our ideas and turned them into practical digital solutions. He understood the bigger picture while bringing the web, mobile and CRM pieces together.",
    image: "/images/testimonials/brittany-wright.jpg",
  },
  {
    number: "05",
    name: "NICHOLAS BRAND",
    company: "VENUS PROPERTY",
    location: "New South Wales, Australia",
    category: "PROPERTY OPERATIONS & MANAGEMENT",
    quote:
      "Israel understood how the property operation worked before approaching the digital side. That made the work practical, organised and aligned with the way the business actually operated.",
    image: "/images/testimonials/nicholas-brand.jpg",
  },
  {
    number: "06",
    name: "JACK WILLIAMS",
    company: "SPRINGER",
    location: "Lisburn, UK",
    category: "OPERATIONS · WORKFLOW · DIGITAL SYSTEMS",
    quote:
      "Israel has a strong understanding of how operations, workflows and technology connect. He brought clarity to complex processes and helped turn them into systems that were easier to manage.",
    image: "/images/testimonials/jack-williams.jpg",
  },
  {
    number: "07",
    name: "MARCUS LEONARD",
    company: "MARCUS CARS",
    location: "New York, NY",
    category: "FRONTEND DEVELOPMENT",
    quote:
      "Israel brought together strong frontend development and design thinking. He understood the concept, paid attention to the details and turned it into a polished digital experience.",
    image: "/images/testimonials/marcus-leonard.jpg",
  },
];

function Stars() {
  return (
    <div className={styles.rating}>
      <span className={styles.stars} aria-hidden="true">
        ★ ★ ★ ★ ★ ★
      </span>

      <span className={styles.ratingLabel}>
        CLIENT FEEDBACK
      </span>
    </div>
  );
}

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  function scrollRail(direction: "left" | "right") {
    const rail = railRef.current;

    if (!rail) return;

    rail.scrollBy({
      left: direction === "right" ? 590 : -590,
      behavior: "smooth",
    });
  }

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    const rail = railRef.current;

    if (!rail) return;

    setDragging(true);

    rail.setPointerCapture(event.pointerId);

    rail.dataset.startX = String(event.clientX);
    rail.dataset.startScroll = String(rail.scrollLeft);
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    const rail = railRef.current;

    if (!rail || !dragging) return;

    const startX = Number(rail.dataset.startX);
    const startScroll = Number(rail.dataset.startScroll);

    const distance = event.clientX - startX;

    rail.scrollLeft = startScroll - distance;
  }

  function handlePointerUp() {
    setDragging(false);
  }

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>TESTIMONIALS</span>
          </div>

          <div className={styles.headerMeta}>
            <span>CLIENT PERSPECTIVES</span>
            <span>JAN WORKS / 2026</span>
          </div>
        </header>

        <div className={styles.introduction}>
          <h2 className={styles.heading}>
            TRUSTED
            <span>THROUGH REAL WORK.</span>
          </h2>

          <div className={styles.introRight}>
            <p className={styles.description}>
              A selection of perspectives from clients and
              collaborators across operations, digital
              systems, property, web development and
              technology.
            </p>

            <div className={styles.controls}>
              <span className={styles.dragLabel}>
                DRAG TO EXPLORE
              </span>

              <button
                type="button"
                className={styles.controlButton}
                onClick={() => scrollRail("left")}
                aria-label="Previous testimonial"
              >
                ←
              </button>

              <button
                type="button"
                className={styles.controlButton}
                onClick={() => scrollRail("right")}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        className={`${styles.rail} ${
          dragging ? styles.dragging : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div className={styles.track}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.number}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>
                  {testimonial.number}
                </span>

                <span className={styles.category}>
                  {testimonial.category}
                </span>

                <Stars />
              </div>

              <div className={styles.cardContent}>
                <blockquote className={styles.quote}>
                  <span className={styles.quoteMark}>
                    “
                  </span>

                  {testimonial.quote}

                  <span className={styles.quoteMark}>
                    ”
                  </span>
                </blockquote>
              </div>

              <div className={styles.client}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    fill
                    sizes="52px"
                    className={styles.clientImage}
                  />
                </div>

                <div className={styles.clientInfo}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                  <small>{testimonial.location}</small>
                </div>

                <span
                  className={styles.clientArrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles.bottomLabel}>
            <span className={styles.bottomLine} />
            <span>THE EXPERIENCE</span>
          </div>

          <p className={styles.bottomStatement}>
            CLEAR COMMUNICATION. RELIABLE EXECUTION.
            SYSTEMS THAT WORK.
          </p>
        </div>
      </div>
    </section>
  );
}