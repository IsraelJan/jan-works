import Image from "next/image";
import styles from "./Tools.module.css";

const tools = [
  {
    name: "React",
    logo: "/icons/react.svg",
  },
  {
    name: "TypeScript",
    logo: "/icons/typescript.svg",
  },
  {
    name: "Next.js",
    logo: "/icons/nextjs.svg",
  },
  {
    name: "JavaScript",
    logo: "/icons/javascript.svg",
  },
  {
    name: "HTML5",
    logo: "/icons/html5.svg",
  },
  {
    name: "CSS3",
    logo: "/icons/css3.svg",
  },
  {
    name: "WordPress",
    logo: "/icons/wordpress.svg",
  },
  {
    name: "Wix",
    logo: "/icons/wix.svg",
  },
  {
    name: "GoHighLevel",
    logo: "/icons/gohighlevel.svg",
  },
  {
    name: "HoneyBook",
    logo: "/icons/honeybook.svg",
  },
  {
    name: "Zapier",
    logo: "/icons/zapier.svg",
  },
  {
    name: "Make",
    logo: "/icons/make.svg",
  },
  {
    name: "n8n",
    logo: "/icons/n8n.svg",
  },
  {
    name: "Figma",
    logo: "/icons/figma.svg",
  },
  {
    name: "GitHub",
    logo: "/icons/github.svg",
  },
  {
    name: "Cloudflare",
    logo: "/icons/cloudflare.svg",
  },
  {
    name: "Vercel",
    logo: "/icons/vercel.svg",
  },
];

function ToolRow({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const items = [...tools, ...tools];

  return (
    <div
      className={`${styles.marquee} ${
        reverse ? styles.reverse : ""
      }`}
    >
      <div className={styles.track}>
        {items.map((tool, index) => (
          <div
            className={styles.tool}
            key={`${tool.name}-${index}`}
          >
            <div className={styles.logo}>
              <Image
                src={tool.logo}
                alt=""
                width={22}
                height={22}
              />
            </div>

            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <section className={styles.section} id="tools">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.line} />
            <span>TOOLS &amp; TECHNOLOGY</span>
          </div>

          <p className={styles.introduction}>
            The platforms, frameworks and technologies
            behind the systems I build.
          </p>
        </div>

        <div className={styles.marqueeArea}>
          <ToolRow />
          <ToolRow reverse />
        </div>

        <div className={styles.footer}>
          <span>BUSINESS SYSTEMS</span>
          <span className={styles.footerDot}>·</span>
          <span>DIGITAL EXPERIENCES</span>
          <span className={styles.footerDot}>·</span>
          <span>SOFTWARE ENGINEERING</span>
        </div>
      </div>
    </section>
  );
}