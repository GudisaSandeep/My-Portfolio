const experiences = [
  {
    date: "Oct 2026 – Present",
    mark: "V",
    role: "Software Development Engineer",
    company: "Vector",
    meta: ["Full-time"],
    bullets: [],
  },
  {
    date: "Oct 2026 – Present",
    mark: "WL",
    role: "Co-Founder",
    company: "WhiteSea Labs",
    description:
      "WhiteSea Labs is a software engineering studio that helps businesses put AI to work.",
    url: "https://whitesealabs.com/",
    meta: ["Part-time", "IT services"],
    bullets: [],
  },
  {
    date: "Started Nov 2025",
    mark: "FX",
    role: "Fixyt — Built & Launched",
    company: "Chrome Extension / Infinite Workspace",
    url: "https://fixyt.in/",
    meta: ["Completed", "Published product"],
    bullets: [
      "Architected and launched Fixyt, a visual tab-management platform turning browser tabs into interactive cards on an infinite canvas.",
      "Engineered TabFlow to automate repetitive browser workflows client-side with multi-workspace support and 1-click session restore.",
    ],
  },
  {
    date: "Dec 2025 –\nMar 2026",
    mark: "MT",
    role: "Generative AI Intern",
    company: "MyTeGEN EDUCATIONAL SERVICES PVT LTD",
    meta: ["Internship", "Local AI"],
    bullets: [
      "Developing 'BrowserAgent,' a privacy-focused local AI automation framework for intelligent web interaction using locally running LLMs and Chrome Extensions.",
      "Built AI chatbot support and autonomous AI agent workflows for company educational services.",
    ],
  },
  {
    date: "Nov 2024 –\nJan 2026",
    mark: "MO",
    role: "Building MonoSid",
    company: "MonoSid — Mental Health SaaS",
    meta: ["Co-Founder", "AI SaaS"],
    bullets: [
      "Architected real-time conversational AI therapists and on-device facial emotion detection for therapeutic continuity.",
      'Built real-time 3D avatar interaction ("Sky") using GPT-4, TensorFlow.js, and Three.js under a GDPR-compliant privacy architecture.',
    ],
  },
  {
    date: "Apr 2024 –\nJun 2024",
    mark: "MS",
    role: "AI Engineering Intern",
    company: "Microsoft (AICTE)",
    meta: ["Remote", "Internship"],
    bullets: [
      "Developed a GenAI-powered Smart Review System to automate course review summarization, significantly reducing student research time.",
      "Integrated Azure Cognitive Services and Bing Search API for sentiment analysis and natural language course discovery.",
      "Optimized LLM outputs using advanced prompt engineering, improving content relevance and reducing hallucination rates.",
    ],
  },
  {
    date: "Dec 2024",
    mark: "SIH",
    role: "Grand Finalist (Runner Up)",
    company: "Smart India Hackathon 2024",
    meta: ["National Level", "Runner-up"],
    bullets: [
      "Led a team to build an AI-powered Smart Class Monitoring system for real-time computer vision analytics and engagement insights.",
      "Secured 2nd place among 1,500+ teams at the national level.",
      "Integrated Computer Vision, Azure AI and OpenAI to deliver actionable reports.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">02 / THE JOURNEY</span>
          <span className="section-aside">LEARNING THROUGH BUILDING</span>
        </div>
        <div className="experience-layout">
          <div className="experience-intro">
            <h2>
              Good work.
              <br />
              Real experience<span className="blue">.</span>
            </h2>
            <p>
              From software engineering and co-founding an IT services company
              to independent AI products, each chapter shapes how I build and
              solve.
            </p>
            <a className="text-link" href="/resume.md" download>
              The full résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <article
                className="timeline-item"
                key={`${exp.company}-${exp.role}`}
              >
                <div className="timeline-date">
                  {exp.date.replace("\n", " ")}
                </div>
                <div className="timeline-heading">
                  <span className="company-mark">{exp.mark}</span>
                  <div>
                    <h3>{exp.role}</h3>
                    <p>{exp.company}</p>
                  </div>
                </div>
                <div className="timeline-meta">
                  {exp.meta.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
                {exp.description && (
                  <p className="timeline-description">{exp.description}</p>
                )}
                {exp.bullets.length > 0 && (
                  <ul>
                    {exp.bullets.slice(0, 2).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {exp.url && (
                  <a
                    className="text-link timeline-website"
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {new URL(exp.url).hostname} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
