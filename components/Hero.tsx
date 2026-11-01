import HeroPortrait from "./HeroPortrait";
function VectorStar() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M20 2v36M2 20h36M7.3 7.3l25.4 25.4M7.3 32.7 32.7 7.3" />
    </svg>
  );
}
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-topline">
          <span>PORTFOLIO / SANDEEP GUDISA</span>
          <span>MUMBAI, INDIA · UTC +05:30</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-growth-headline">
              <span>Building a path</span> <span>for sustained,</span>{" "}
              <span className="hero-accent">limitless growth.</span>
            </h1>
            <p className="hero-description">
              I’m Sandeep. I build AI agents, retrieval systems, and digital
              products that turn complex problems into useful experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a href="/resume.md" download className="text-link">
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-specialties">
              <span>AGENTIC AI</span>
              <span>RAG & LLMs</span>
              <span>PRODUCT ENGINEERING</span>
            </div>
          </div>
          <HeroPortrait />
        </div>
        <div className="hero-bottom">
          <p>From the first idea to the final interaction.</p>
          <a href="#achievements">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="expertise-strip">
        <div className="container">
          <span>INTELLIGENCE, APPLIED.</span>
          <span>AI agents</span>
          <span className="strip-star" aria-hidden="true">
            <VectorStar />
          </span>
          <span>Browser automation</span>
          <span className="strip-star" aria-hidden="true">
            <VectorStar />
          </span>
          <span>Retrieval systems</span>
          <span className="strip-star" aria-hidden="true">
            <VectorStar />
          </span>
          <span>Real-world products</span>
        </div>
      </div>
    </section>
  );
}
