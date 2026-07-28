import {
  IconGrad, IconBriefcase, IconCode, IconTrophy,
  IconPin, IconTarget, IconBrain, IconRocket
} from './Icons'

const statCards = [
  {
    icon: <IconGrad />,
    label: 'Education',
    value: 'B.Tech CSE (AI & ML)',
    desc: 'Andhra Loyola Institute of Engineering and Technology',
    link: 'April 2026',
  },
  {
    icon: <IconBriefcase />,
    label: 'Experience',
    value: '1+ Years',
    desc: "Built several AI products",
    link: null,
  },
  {
    icon: <IconCode />,
    label: 'Projects',
    value: '6 Major Projects',
    link: null,
  },
  {
    icon: <IconTrophy />,
    label: 'Achievements',
    value: 'Multiple Awards',
    link: null,
  },
  {
    icon: <IconPin />,
    label: 'Location',
    value: 'Bangalore, India',
    link: null,
  },
  {
    icon: <IconTarget />,
    label: 'Current Focus',
    value: 'Agentic AI & RAG',
    link: null,
  },
]

const traits = [
  {
    icon: <IconBrain />,
    title: 'Problem Solver',
    desc: 'I love breaking down complex problems into elegant AI-powered solutions.',
  },
  {
    icon: <IconRocket />,
    title: 'Builder',
    desc: 'From ideation to deployment, I enjoy building end-to-end AI products that create real impact.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div>
            <div className="label-tag">About Me</div>
            <h2 className="section-heading" style={{ marginTop: '0.75rem' }}>
              I build AI systems<br />
              that solve <span>real-world</span><br />
              problems.
            </h2>

            <p className="about-body-text">
              I&apos;m a Computer Science (AI &amp; ML) student and AI Engineer
              passionate about building intelligent systems.
            </p>
            {traits.map((t) => (
              <div key={t.title} className="about-trait reveal-on-scroll">
                <div className="trait-icon" aria-hidden="true">{t.icon}</div>
                <div>
                  <div className="trait-title">{t.title}</div>
                  <div className="trait-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — stat cards grid */}
          <div className="about-right">
            <div className="about-stats-grid">
              {statCards.map((card) => (
                <div key={card.label} className="stat-card reveal-on-scroll">
                  <div className="stat-card-header">
                    <div className="stat-card-icon" aria-hidden="true">{card.icon}</div>
                    <div className="stat-card-label">{card.label}</div>
                  </div>
                  <div className="stat-card-value tabular-num">{card.value}</div>
                  <div className="stat-card-desc">{card.desc}</div>
                  {card.link && (
                    <span className="stat-card-link">{card.link}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
