export default function SystemIllustration() {
  return (
    <div className="system-art">
      <div className="art-caption">
        <span className="status-dot" /> FROM INTENT TO IMPACT{" "}
        <span>FIG. 01</span>
      </div>
      <svg
        viewBox="0 0 500 470"
        role="img"
        aria-labelledby="system-title system-desc"
      >
        <title id="system-title">
          An idea, connected to an intelligent system
        </title>
        <desc id="system-desc">
          A geometric agent core connects human intent with memory, tools, and
          useful outcomes.
        </desc>
        <defs>
          <pattern
            id="art-grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="#b9bdbd" />
          </pattern>
        </defs>
        <rect width="500" height="470" fill="url(#art-grid)" />
        <g fill="none" stroke="#c6c9c6" strokeWidth="1">
          <circle cx="250" cy="235" r="155" />
          <circle cx="250" cy="235" r="105" />
          <path d="M250 30V440M35 235H465" strokeDasharray="3 7" />
          <path d="M140 125L360 345M360 125L140 345" />
        </g>
        <g
          className="diagram-path"
          fill="none"
          stroke="#2855e8"
          strokeWidth="1.5"
        >
          <path d="M95 130H170V197M335 235H398V130M250 295V368H370M165 235H95V345" />
        </g>
        <g fill="#f7f6f2" stroke="#2855e8" strokeWidth="1.5">
          <circle cx="95" cy="130" r="5" />
          <circle cx="398" cy="130" r="5" />
          <circle cx="370" cy="368" r="5" />
          <circle cx="95" cy="345" r="5" />
        </g>
        <g className="agent-core">
          <path
            d="M250 135L337 185V285L250 335L163 285V185Z"
            fill="#e7ebfb"
            stroke="#2855e8"
          />
          <path d="M250 155L320 195V275L250 315L180 275V195Z" fill="#2855e8" />
          <g fill="none" stroke="#fff" strokeWidth="1.5">
            <path d="M250 184L294 210V260L250 286L206 260V210Z" />
            <path d="M206 210L250 235L294 210M250 235V286M250 184V235M206 260L250 235L294 260" />
          </g>
          <circle cx="250" cy="235" r="7" fill="#fff" />
        </g>
        <g
          fill="#182023"
          fontFamily="monospace"
          fontSize="10"
          letterSpacing="1.3"
        >
          <text x="54" y="107">
            01 / INTENT
          </text>
          <text x="354" y="107">
            02 / TOOLS
          </text>
          <text x="40" y="376">
            03 / MEMORY
          </text>
          <text x="331" y="399">
            04 / OUTCOME
          </text>
        </g>
        <g stroke="#182023" fill="none" strokeWidth="1.5">
          <path d="M78 156h34m-34 7h24m-24 7h30" />
          <path d="M385 154l-8 8 8 8m24-16 8 8-8 8m-14-20-5 24" />
          <ellipse cx="95" cy="310" rx="14" ry="5" />
          <path d="M81 310v14c0 7 28 7 28 0v-14m-28 7c0 7 28 7 28 0" />
          <path d="M357 341l9 9 17-20" />
        </g>
        <g fill="#2855e8">
          <circle className="signal-dot" cx="170" cy="163" r="4" />
          <circle cx="398" cy="200" r="4" />
        </g>
        <g stroke="#182023">
          <path d="M18 18h12m-6-6v12M470 18h12m-6-6v12M18 452h12m-6-6v12M470 452h12m-6-6v12" />
        </g>
      </svg>
      <div className="art-footer">
        <span>HUMAN IDEAS. ENGINEERED INTELLIGENCE.</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
