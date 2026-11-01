import type { BiographyGlyph } from "@/lib/biography";

export function BiographyIcon({ kind }: { kind: BiographyGlyph }) {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "browser" ? (
        <>
          <rect x="8" y="9" width="64" height="46" rx="3" />
          <path d="M8 20h64M15 14h2m5 0h2m5 0h2" />
          <rect x="16" y="28" width="20" height="18" rx="1" />
          <rect x="44" y="28" width="19" height="9" rx="1" />
          <path d="M44 43h19M44 48h13" />
        </>
      ) : kind === "agent" ? (
        <>
          <path d="m40 14 19 11v22L40 58 21 47V25Z" />
          <path d="m21 25 19 11 19-11M40 36v22M40 14V5M9 35h12m38 0h12" />
          <circle cx="40" cy="5" r="3" />
          <circle cx="8" cy="35" r="3" />
          <circle cx="72" cy="35" r="3" />
        </>
      ) : kind === "tools" ? (
        <>
          <rect x="9" y="10" width="62" height="44" rx="3" />
          <path d="M9 21h62M29 30l-8 8 8 8m22-16 8 8-8 8M44 27l-8 23" />
          <path d="M16 15h2m5 0h2" />
        </>
      ) : kind === "vision" ? (
        <>
          <path d="M5 33S18 14 40 14s35 19 35 19-13 19-35 19S5 33 5 33Z" />
          <circle cx="40" cy="33" r="11" />
          <circle cx="40" cy="33" r="3" />
          <path d="M13 9H5v8m62-8h8v8M5 48v8h8m62-8v8h-8" />
        </>
      ) : kind === "document" ? (
        <>
          <path d="M20 6h28l12 12v40H20Z" />
          <path d="M48 6v13h12M29 28h22M29 36h22M29 44h14" />
          <circle cx="58" cy="47" r="10" />
          <path d="m65 54 8 7" />
        </>
      ) : kind === "voice" ? (
        <>
          <rect x="32" y="8" width="16" height="31" rx="8" />
          <path d="M24 30v2a16 16 0 0032 0v-2M40 48v10m-10 0h20M12 25v14m6-21v28m44-28v28m6-21v14" />
        </>
      ) : kind === "cloud" ? (
        <>
          <path d="M19 45a12 12 0 01-2-24 18 18 0 0134-6 15 15 0 0112 30H19Z" />
          <path d="M29 34h22M40 28v12M40 45v12m-14 0h28" />
        </>
      ) : (
        <>
          <path d="M11 12h48v32H33L19 54V44h-8Z" />
          <path d="M59 23h10v31H54l-10 7V44M22 23h26M22 32h18" />
        </>
      )}
    </svg>
  );
}

export function ConnectedWorkIllustration() {
  return (
    <figure className="bio-system-figure">
      <div className="bio-figure-label">
        <span>HOW THE PIECES CONNECT</span>
        <span>FIG. 01</span>
      </div>
      <svg
        viewBox="0 0 560 440"
        role="img"
        aria-labelledby="bio-system-title bio-system-description"
      >
        <title id="bio-system-title">
          Connecting an idea with a useful software experience
        </title>
        <desc id="bio-system-description">
          An AI application connects human intent, context, tools, and an
          interface. A feedback loop returns the outcome to the person using it.
        </desc>
        <defs>
          <pattern
            id="bio-dot-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".8" fill="#c6cdc5" />
          </pattern>
        </defs>
        <rect width="560" height="440" fill="url(#bio-dot-grid)" />
        <g fill="none" stroke="#bac2b8" strokeWidth="1">
          <circle cx="280" cy="220" r="132" />
          <path d="M280 25v390M40 220h480" strokeDasharray="4 7" />
        </g>
        <g fill="none" stroke="#2855e8" strokeWidth="1.5">
          <path d="M117 109h98v56M443 109h-98v56M117 331h98v-56M443 331h-98v-56" />
          <path
            d="M71 151v137q0 43 44 43M489 288V151q0-42-44-42"
            strokeDasharray="4 6"
          />
        </g>
        <g fill="#f7f6f2" stroke="#2855e8">
          <rect x="29" y="79" width="172" height="60" rx="2" />
          <rect x="359" y="79" width="172" height="60" rx="2" />
          <rect x="29" y="301" width="172" height="60" rx="2" />
          <rect x="359" y="301" width="172" height="60" rx="2" />
        </g>
        <g
          fontFamily="monospace"
          fontSize="12"
          fill="#182023"
          textAnchor="middle"
        >
          <text x="115" y="114">
            HUMAN INTENT
          </text>
          <text x="445" y="114">
            RELEVANT CONTEXT
          </text>
          <text x="115" y="336">
            TOOLS & ACTIONS
          </text>
          <text x="445" y="336">
            USABLE INTERFACE
          </text>
        </g>
        <path d="m280 143 67 39v76l-67 39-67-39v-76Z" fill="#2855e8" />
        <g stroke="#fff" fill="none" strokeWidth="1.4">
          <path d="m280 170 44 25v50l-44 25-44-25v-50Z" />
          <path d="m236 195 44 25 44-25m-44 25v50m0-100v50" />
        </g>
        <circle cx="280" cy="220" r="5" fill="#fff" />
        <g fill="#2855e8">
          <circle cx="215" cy="144" r="4" />
          <circle cx="345" cy="294" r="4" />
        </g>
        <text
          x="280"
          y="402"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#626865"
        >
          IDEA → APPLICATION → FEEDBACK
        </text>
      </svg>
      <figcaption>
        My work lives in the connections: between a person’s goal, a model’s
        capabilities, and the application around them.
      </figcaption>
    </figure>
  );
}

export function BrowserWorkspaceIllustration() {
  return (
    <svg
      className="bio-workspace-illustration"
      viewBox="0 0 530 300"
      fill="none"
      role="img"
      aria-labelledby="bio-workspace-title"
    >
      <title id="bio-workspace-title">
        Browser pages arranged as connected cards on a workspace
      </title>
      <g stroke="#4668bd" strokeWidth="1">
        <path d="M28 26h474v248H28Z" />
        <path d="M28 56h474M43 41h3m7 0h3m7 0h3" />
      </g>
      <g stroke="#9bb3ff" strokeWidth="1.3">
        <path d="M163 135h62v53h65M364 133h69v79h-51" />
        <circle cx="225" cy="158" r="4" fill="#182023" />
      </g>
      <g fill="#202d35" stroke="#9bb3ff">
        <rect x="55" y="87" width="140" height="97" rx="3" />
        <rect x="288" y="80" width="156" height="84" rx="3" />
        <rect x="260" y="192" width="139" height="58" rx="3" />
      </g>
      <g stroke="#9bb3ff">
        <path d="M55 106h140M288 100h156M70 120h72m-72 10h103m-103 10h89m-89 23h44M303 115h68m-68 10h120m-120 10h82M275 207h74m-74 11h106m-106 11h87" />
      </g>
      <path d="M465 233v24m-12-12h24" stroke="#9bb3ff" />
      <g fontFamily="monospace" fontSize="9" fill="#cad5f4">
        <text x="212" y="45">
          A PLACE FOR THE WHOLE PROJECT
        </text>
        <text x="62" y="267">
          CONTEXT, CONNECTED.
        </text>
      </g>
    </svg>
  );
}
