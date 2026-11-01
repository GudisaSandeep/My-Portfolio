import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">04 / THE PERSON BEHIND THE WORK</span>
          <span className="section-aside">CURIOUS BY DEFAULT</span>
        </div>
        <div className="about-grid">
          <div className="about-portrait">
            <div className="portrait-registration" aria-hidden="true">
              +
            </div>
            <div className="about-portrait-image">
              <Image
                src="/sandeep_hero_main.png"
                alt="Sandeep Gudisa"
                fill
                sizes="(max-width: 650px) 90vw, 40vw"
              />
            </div>
            <div className="portrait-caption">
              <span>SANDEEP GUDISA</span>
              <span>MUMBAI, IN ↗</span>
            </div>
          </div>
          <div className="about-copy">
            <h2>
              An engineer’s mind.
              <br />A builder’s instinct<span className="blue">.</span>
            </h2>
            <p className="about-lead">
              I enjoy the space between “what if” and “it works.”
            </p>
            <p>
              I’m Sandeep Gudisa, an AI engineer based in Mumbai, founder of{" "}
              <Link href="/projects/fixyt">Fixyt</Link>, and co-founder of{" "}
              <a href="https://whitesealabs.com/">WhiteSea Labs</a>. I work
              full-time as a Software Development Engineer at Vector.
            </p>
            <p>
              My work connects agentic AI, browser automation, and practical
              software products. I like breaking complex problems into clear,
              usable systems, from the first prototype to the final interaction.
            </p>
            <div className="education">
              <span className="eyebrow">EDUCATION / 2026</span>
              <h3>B.Tech · Computer Science (AI & ML)</h3>
              <p>Andhra Loyola Institute of Engineering and Technology</p>
            </div>
            <div className="about-links">
              <Link className="text-link" href="/about">
                Full biography ↗
              </Link>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/sandeepgudisa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a className="text-link" href="/resume.md" download>
                My résumé ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
