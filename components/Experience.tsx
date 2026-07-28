import { IconArrow, IconBriefcase, IconCode, IconUsers, IconTrophy, IconAward } from './Icons'

// Small company logo squares
function LogoSquare({ label, color, textColor = 'white' }: { label: string; color: string; textColor?: string }) {
  return (
    <div
      className="exp-logo"
      style={{ background: color, color: textColor, fontSize: '0.65rem', fontWeight: 800 }}
      aria-hidden="true"
    >
      {label}
    </div>
  )
}

// Microsoft logo
function MsLogo() {
  return (
    <div className="exp-logo" style={{ padding: '6px', background: '#fff', border: '1px solid #e2e8f0' }} aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 21 21" fill="none">
        <rect x="1" y="1" width="9" height="9" fill="#f35325" />
        <rect x="11" y="1" width="9" height="9" fill="#81bc06" />
        <rect x="1" y="11" width="9" height="9" fill="#05a6f0" />
        <rect x="11" y="11" width="9" height="9" fill="#ffba08" />
      </svg>
    </div>
  )
}

// SIH logo
function SIHLogo() {
  return (
    <div
      className="exp-logo"
      style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', color: 'white', fontSize: '0.55rem', fontWeight: 800, textAlign: 'center', lineHeight: 1.2 }}
      aria-hidden="true"
    >
      SIH<br />2024
    </div>
  )
}

const highlights = [
  { icon: <IconBriefcase />, val: '1+ Years', desc: 'Professional Experience' },
  { icon: <IconCode />, val: '6', desc: 'Major AI Products' },
  { icon: <IconUsers />, val: '5000+', desc: 'Users Impacted' },
  { icon: <IconTrophy />, val: 'Top 3%', desc: 'Microsoft Engage 2024' },
  { icon: <IconAward />, val: '2nd Place', desc: 'SIH 2024 (1500+ Teams)' },
]

const experiences = [
  {
    date: 'Nov 2025 –\nPresent',
    logo: <LogoSquare label="FX" color="#5b21b6" />,
    role: 'Building Fixyt',
    company: 'Chrome Extension / Infinite Workspace',
    meta: ['Published', 'Product'],
    bullets: [
      'Architected and launched Fixyt, a visual tab-management platform turning browser tabs into interactive cards on an infinite canvas.',
      'Engineered TabFlow to automate repetitive browser workflows client-side with multi-workspace support and 1-click session restore.',
    ],
  },
  {
    date: 'Dec 2025 –\nMar 2026',
    logo: <LogoSquare label="MT" color="#0f172a" />,
    role: 'Generative AI Intern',
    company: 'MyTeGEN EDUCATIONAL SERVICES PVT LTD',
    meta: ['Internship', 'Local AI'],
    bullets: [
      "Developing 'BrowserAgent,' a privacy-focused local AI automation framework for intelligent web interaction using locally running LLMs and Chrome Extensions.",
      'Built AI chatbot support and autonomous AI agent workflows for company educational services.',
    ],
  },
  {
    date: 'Nov 2024 –\nJan 2026',
    logo: <LogoSquare label="MS" color="#312e81" />,
    role: 'Building MonoSid',
    company: 'MonoSid — Mental Health SaaS',
    meta: ['Co-Founder', 'AI SaaS'],
    bullets: [
      'Architected real-time conversational AI therapists and on-device facial emotion detection for therapeutic continuity.',
      'Built real-time 3D avatar interaction ("Sky") using GPT-4, TensorFlow.js, and Three.js under a GDPR-compliant privacy architecture.',
    ],
  },
  {
    date: 'Apr 2024 –\nJun 2024',
    logo: <MsLogo />,
    role: 'AI Engineering Intern',
    company: 'Microsoft (AICTE)',
    meta: ['Remote', 'Internship'],
    bullets: [
      'Developed a GenAI-powered Smart Review System to automate course review summarization, significantly reducing student research time.',
      'Integrated Azure Cognitive Services and Bing Search API for sentiment analysis and natural language course discovery.',
      'Optimized LLM outputs using advanced prompt engineering, improving content relevance and reducing hallucination rates.',
    ],
  },
  {
    date: 'Dec 2024',
    logo: <SIHLogo />,
    role: 'Grand Finalist (Runner Up)',
    company: 'Smart India Hackathon 2024',
    meta: ['National Level', 'Runner-up'],
    bullets: [
      'Led a team to build an AI-powered Smart Class Monitoring system for real-time computer vision analytics and engagement insights.',
      'Secured 2nd place among 1,500+ teams at the national level.',
      'Integrated Computer Vision, Azure AI and OpenAI to deliver actionable reports.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: '#f8f9fc' }}>
      <div className="container">
        {/* Header */}
        <div className="label-tag">Experience &amp; Education</div>
        <h2 className="section-heading">
          My Professional <span>Journey</span>
        </h2>
        <p className="section-sub">
          My journey through education and professional milestones
        </p>

        <div className="experience-layout" style={{ marginTop: '2.5rem' }}>
          {/* Timeline */}
          <div className="exp-timeline">
            {experiences.map((exp) => (
              <div key={exp.role + exp.company} className="exp-item reveal-on-scroll">
                <div className="exp-date tabular-num" style={{ whiteSpace: 'pre-line' }}>{exp.date}</div>
                <div className="exp-right">
                  <div className="exp-card">
                    <div className="exp-card-header">
                      {exp.logo}
                      <div>
                        <div className="exp-role">{exp.role}</div>
                        <div className="exp-company-row">
                          <span className="exp-company">{exp.company}</span>
                          {exp.meta.map((m) => (
                            <span key={m} className="exp-meta">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                              </svg>
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ul className="exp-bullets" aria-label="Key contributions">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="exp-sidebar" aria-label="Experience highlights">
            <div className="exp-highlights-card reveal-on-scroll">
              <div className="exp-highlights-title">
                <IconTrophy /> Experience Highlights
              </div>

              {highlights.map((h) => (
                <div key={h.val + h.desc} className="exp-highlight-item">
                  <div className="exp-highlight-icon" aria-hidden="true">{h.icon}</div>
                  <div>
                    <div className="exp-highlight-val tabular-num">{h.val}</div>
                    <div className="exp-highlight-desc">{h.desc}</div>
                  </div>
                </div>
              ))}

              <div className="exp-cta-box">
                <a href="https://www.linkedin.com/in/sandeepgudisa/" target="_blank" rel="noopener noreferrer" className="exp-cta-link">
                  Let&apos;s Connect <IconArrow />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
