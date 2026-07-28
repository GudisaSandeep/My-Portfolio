import { IconTrophy, IconAward, IconTv, IconMedal } from './Icons'

const achievements = [
  {
    icon: <IconTrophy />,
    title: '2nd Place',
    sub: 'Smart India Hackathon 2024',
    desc: 'Among 1500+ teams',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 21 21" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="9" height="9" fill="#f35325"/>
        <rect x="11" y="1" width="9" height="9" fill="#81bc06"/>
        <rect x="1" y="11" width="9" height="9" fill="#05a6f0"/>
        <rect x="11" y="11" width="9" height="9" fill="#ffba08"/>
      </svg>
    ),
    title: 'Top 3%',
    sub: 'Microsoft Engage 2024',
    desc: 'Selected from 82,000+ applicants',
  },
  {
    icon: <IconMedal />,
    title: '1st Prize',
    sub: 'AICTE Challenge',
    desc: 'Assistive Devices for Visually Challenged',
  },
  {
    icon: <IconTv />,
    title: 'Featured on TV',
    sub: 'ETV Andhra Pradesh',
    desc: 'Showcased for Assistive Vision AI Project',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: '#f8f9fc' }}>
      <div className="container">
        <div className="label-tag">Achievements</div>
        <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
          Recognition &amp; <span>Awards</span>
        </h2>

        <div className="achievements-grid">
          {achievements.map((a) => (
            <div key={a.title + a.sub} className="achievement-card">
              <div className="achievement-icon-wrap" aria-hidden="true">{a.icon}</div>
              <div className="achievement-title tabular-num">{a.title}</div>
              <div className="achievement-sub">{a.sub}</div>
              <div className="achievement-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
