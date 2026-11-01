import { IconTrophy, IconTv, IconMedal } from "./Icons";

const achievements = [
  {
    icon: <IconTrophy />,
    title: "2nd Place",
    sub: "Smart India Hackathon 2024",
    desc: "Among 1500+ teams",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 21 21"
        fill="none"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="9" height="9" fill="#f35325" />
        <rect x="11" y="1" width="9" height="9" fill="#81bc06" />
        <rect x="1" y="11" width="9" height="9" fill="#05a6f0" />
        <rect x="11" y="11" width="9" height="9" fill="#ffba08" />
      </svg>
    ),
    title: "Top 3%",
    sub: "Microsoft Engage 2024",
    desc: "Selected from 82,000+ applicants",
  },
  {
    icon: <IconMedal />,
    title: "1st Prize",
    sub: "AICTE Challenge",
    desc: "Assistive Devices for Visually Challenged",
  },
  {
    icon: <IconTv />,
    title: "Featured on TV",
    sub: "ETV Andhra Pradesh",
    desc: "Showcased for Assistive Vision AI Project",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="recognition-section">
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">A FEW MILESTONES ALONG THE WAY</span>
          <span className="section-aside">RECOGNITION</span>
        </div>
        <div className="recognition-grid">
          {achievements.map((a) => (
            <article className="recognition" key={a.title}>
              <div className="recognition-icon" aria-hidden="true">
                {a.icon}
              </div>
              <h3>{a.title}</h3>
              <p>{a.sub}</p>
              <span>{a.desc}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
