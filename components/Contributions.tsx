export default function Contributions() {
  return (
    <section id="contributions" className="section open-source-section">
      <div className="container open-source-layout">
        <div>
          <span className="eyebrow">05 / IN THE OPEN</span>
          <h2>
            Always building.
            <br />
            Always sharing<span className="blue">.</span>
          </h2>
          <p>
            Explore the code behind the products, experiments, and agent
            frameworks.
          </p>
          <a
            className="text-link"
            href="https://github.com/GudisaSandeep"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me on GitHub ↗
          </a>
        </div>
        <div className="repo-list">
          {[
            {
              name: "cline-MCP",
              tag: "HEADLESS AGENT FRAMEWORK",
              url: "cline-MCP",
            },
            {
              name: "Browser_Agent",
              tag: "AUTONOMOUS BROWSER EXTENSION",
              url: "Browser_Agent",
            },
            {
              name: "smart-class-monitoring",
              tag: "COMPUTER VISION",
              url: "smart-class-monitoring-system",
            },
          ].map((r) => (
            <a
              key={r.name}
              href={`https://github.com/GudisaSandeep/${r.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="repo-icon" aria-hidden="true">
                ⌘
              </span>
              <span>
                <strong>{r.name}</strong>
                <small>{r.tag}</small>
              </span>
              <span className="repo-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
