import Image from "next/image";
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
            <Image
              src="/sandeep_hero_main.png"
              alt="Sandeep Gudisa"
              width={650}
              height={700}
              sizes="(max-width: 700px) 90vw, 35vw"
            />
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
              I’m an AI engineer focused on agentic systems, retrieval, and
              practical AI products. My work spans autonomous browser tools,
              classroom computer vision, and conversational experiences.
            </p>
            <p>
              I like breaking complex problems into clear, usable systems—and
              staying close to the product from the first prototype to the final
              interaction.
            </p>
            <div className="education">
              <span className="eyebrow">EDUCATION / 2026</span>
              <h3>B.Tech · Computer Science (AI & ML)</h3>
              <p>Andhra Loyola Institute of Engineering and Technology</p>
            </div>
            <div className="about-links">
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
