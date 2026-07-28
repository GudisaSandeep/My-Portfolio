import Image from 'next/image'
import { IconExtLink } from './Icons'

export default function Contributions() {
  return (
    <section id="contributions" className="section" style={{ background: '#f8f9fc' }}>
      <div className="container">
        <div className="label-tag">Open Source</div>
        <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
          GitHub <span>Contributions</span>
        </h2>
        <p className="section-sub">
          My open-source activity, commit frequency, and continuous development record
        </p>

        <div className="contributions-wrapper">
          {/* Main GitHub Heatmap Board */}
          <div className="contributions-graph-card reveal-on-scroll">
            <div className="contributions-header">
              <div className="contributions-user-info">
                <div className="github-avatar-badge">GS</div>
                <div>
                  <div className="contributions-username">@GudisaSandeep</div>
                  <div className="contributions-subtitle">Continuous Commit History &amp; Open Source Contributions</div>
                </div>
              </div>
              <a
                href="https://github.com/GudisaSandeep"
                target="_blank"
                rel="noopener noreferrer"
                className="view-github-btn"
              >
                Visit GitHub Profile <IconExtLink />
              </a>
            </div>

            {/* Heatmap Image */}
            <div className="contributions-heatmap-container">
              <img
                src="https://ghchart.rshah.org/5b21b6/GudisaSandeep"
                alt="Sandeep Gudisa GitHub Contributions Graph"
                className="contributions-heatmap-img"
              />
            </div>
          </div>

          {/* Key GitHub Stats Cards */}
          <div className="contributions-stats-grid">
            <div className="contrib-stat-card reveal-on-scroll">
              <div className="contrib-stat-num tabular-num">500+</div>
              <div className="contrib-stat-label">Contributions in 2025–2026</div>
              <div className="contrib-stat-desc">Active commits across AI agents &amp; Chrome extension projects</div>
            </div>

            <div className="contrib-stat-card">
              <div className="contrib-stat-num tabular-num">6</div>
              <div className="contrib-stat-label">Major Published Repos</div>
              <div className="contrib-stat-desc">Fixyt, Cline MCP Fork, Browser Agent, Smart Class Monitoring</div>
            </div>

            <div className="contrib-stat-card">
              <div className="contrib-stat-num">Python &amp; TS</div>
              <div className="contrib-stat-label">Primary Languages</div>
              <div className="contrib-stat-desc">Generative AI workflows, Manifest V3 extensions, &amp; Computer Vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
