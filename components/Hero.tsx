import Image from 'next/image'
import { IconDownload, IconArrow, IconGithub, IconLinkedin, IconMail, IconSparkle, IconInstagram, IconPhone } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column */}
        <div className="hero-left">
          {/* Pill Badge */}
          <div className="hero-pill anim">
            <IconSparkle />
            <span>AI ENGINEER&nbsp;&nbsp;•&nbsp;&nbsp;BUILDER&nbsp;&nbsp;•&nbsp;&nbsp;PROBLEM SOLVER</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="hero-h1 anim delay-1">
            Hi, I&apos;m<br />
            Gudisa <span className="hero-name-accent">Sandeep</span>
          </h1>

          {/* Subtitle / Role Tagline */}
          <p className="hero-tagline anim delay-2">
            <strong>AI Engineer</strong> building Agentic AI systems.<br />
            RAG applications and real-world AI products.
          </p>

          {/* Description Paragraph */}
          <p className="hero-desc anim delay-2">
            I combine Agentic AI, LLMs and MCPs to build intelligent solutions that solve real-world problems.
          </p>

          {/* Technology Chips */}
          <div className="hero-chips anim delay-2">
            <span className="hero-chip">Generative AI</span>
            <span className="hero-chip">RAG</span>
            <span className="hero-chip">Agentic Workflows</span>
            <span className="hero-chip">Computer Vision</span>
            <span className="hero-chip">Full Stack</span>
            <span className="hero-chip">MLOps</span>
            <span className="hero-chip">Harness</span>
            <span className="hero-chip">Claude Code CLI</span>
            <span className="hero-chip">Codex</span>
            <span className="hero-chip">MCP</span>
            <span className="hero-chip">A2A</span>
            <span className="hero-chip">LangGraph</span>
            <span className="hero-chip">Langchain</span>
            <span className="hero-chip">HuggingFace</span>
            <span className="hero-chip">TensorFlow</span>
            <span className="hero-chip">PyTorch</span>

          </div>

          {/* Action Buttons */}
          <div className="hero-ctas anim delay-3">
            <a
              href="/resume.md"
              className="btn-hero-primary"
              download
              aria-label="Download Resume"
            >
              <IconDownload />
              <span>Download Resume</span>
            </a>
            <a href="#projects" className="btn-hero-outline" aria-label="View my work">
              <span>View My Work</span>
              <IconArrow />
            </a>
            <a
              href="https://github.com/GudisaSandeep"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon-btn"
              aria-label="GitHub profile"
            >
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeepgudisa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon-btn"
              aria-label="LinkedIn profile"
            >
              <IconLinkedin />
            </a>
            <a
              href="https://www.instagram.com/gudisasandeep/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon-btn"
              aria-label="Instagram profile"
            >
              <IconInstagram />
            </a>
            <a
              href="mailto:sandeep.gudisa7@gmail.com"
              className="hero-icon-btn"
              aria-label="Send email"
            >
              <IconMail />
            </a>
            <a
              href="tel:+916300050907"
              className="hero-icon-btn"
              aria-label="Call Sandeep"
            >
              <IconPhone />
            </a>
          </div>
        </div>

        {/* Right Column — Photo */}
        <div className="hero-right anim delay-2">
          <div className="hero-card-backdrop">
            {/* Profile Photo */}
            <div className="hero-photo-wrapper">
              <Image
                src="/sandeep_hero_main.png"
                alt="Sandeep Gudisa — Generative AI Engineer"
                width={800}
                height={800}
                priority
                className="hero-photo-img"
              />
            </div>

            {/* Floating "Open to Work" Card */}
            <div className="hero-open-work-card">
              <div className="open-work-header">
                <span className="open-work-dot" aria-hidden="true" />
                <span className="open-work-title">Open to Work</span>
              </div>
              <p className="open-work-subtitle">AI Engineer Roles</p>
              <div className="open-work-divider" />
              <a
                href="https://www.linkedin.com/in/sandeepgudisa/"
                target="_blank"
                rel="noopener noreferrer"
                className="open-work-link"
              >
                <span>Let&apos;s Connect</span>
                <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
