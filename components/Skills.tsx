const capabilities = [
  {
    title: "Agent systems",
    text: "Connecting reasoning with action. Agents that use tools, navigate browsers, and work through multi-step tasks.",
    tools: "MCP · LangChain · CrewAI · AutoGen",
    type: "agent",
  },
  {
    title: "Retrieval & language",
    text: "Connecting the right context to the right question through semantic search and retrieval-augmented generation.",
    tools: "Pinecone · ChromaDB · Embeddings · LLM APIs",
    type: "retrieval",
  },
  {
    title: "Applied intelligence",
    text: "Turning visual signals into useful insights with computer vision, model adaptation, and real-time inference.",
    tools: "Python · OpenCV · PyTorch · TensorFlow",
    type: "vision",
  },
  {
    title: "Product engineering",
    text: "Bringing the whole system together, from APIs and browser extensions to considered web experiences.",
    tools: "TypeScript · React · FastAPI · Docker",
    type: "product",
  },
];
function CapabilityGlyph({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      {type === "agent" ? (
        <>
          <path d="M15 35h30m30 0h30M60 10v12m0 26v12" />
          <path d="m60 20 16 15-16 15-16-15Z" />
          <circle cx="15" cy="35" r="5" />
          <circle cx="105" cy="35" r="5" />
          <circle cx="60" cy="35" r="4" />
        </>
      ) : type === "retrieval" ? (
        <>
          <rect x="15" y="17" width="28" height="36" rx="2" />
          <path d="M22 27h14m-14 8h14m-14 8h8M43 35h30" />
          <circle cx="88" cy="32" r="14" />
          <path d="m98 42 12 12" />
        </>
      ) : type === "vision" ? (
        <>
          <path d="M10 35s20-24 50-24 50 24 50 24-20 24-50 24-50-24-50-24Z" />
          <circle cx="60" cy="35" r="14" />
          <circle cx="60" cy="35" r="5" />
          <path d="M60 3v13m0 38v13" />
        </>
      ) : (
        <>
          <rect x="15" y="12" width="90" height="48" rx="3" />
          <path d="M15 23h90M48 32l-8 9 8 9m24-18 8 9-8 9m-8-21-8 24" />
          <circle cx="23" cy="18" r="1" />
          <circle cx="29" cy="18" r="1" />
        </>
      )}
    </svg>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="section capabilities-section">
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">03 / HOW I BUILD</span>
          <span className="section-aside">
            THE RIGHT TOOLS. A CLEAR PURPOSE.
          </span>
        </div>
        <div className="section-header">
          <h2>
            Different layers.
            <br />
            One connected system<span className="blue">.</span>
          </h2>
          <p>
            I work across the AI stack to connect intelligent models with
            products people can actually use.
          </p>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((c, i) => (
            <article className="capability" key={c.title}>
              <div className="capability-top">
                <span>0{i + 1}</span>
                <CapabilityGlyph type={c.type} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="capability-tools">{c.tools}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
