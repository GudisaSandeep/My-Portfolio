'use client'
import { useState } from 'react'
import Image from 'next/image'
import { IconExtLink } from './Icons'

const ALL = 'all'

const projects = [
  {
    id: 1,
    name: 'Fixyt — Chrome Extension',
    category: 'browser-extension',
    categoryLabel: 'Published Chrome Extension · 2026',
    displayUrl: 'fixyt.in',
    desc: 'Visual tab-management extension that turns browser tabs into interactive cards on an infinite canvas with TabFlow visual automation.',
    tags: ['Chrome Extension', 'Manifest V3', 'JavaScript', 'TabFlow', 'Infinite Canvas'],
    image: '/project_screenshots/fixyt.png',
    url: 'https://fixyt.in',
  },
  {
    id: 2,
    name: 'Cline MCP Fork — Headless Agent Framework',
    category: 'agentic-ai',
    categoryLabel: 'Headless Agent Framework · 2026',
    displayUrl: 'github.com/GudisaSandeep/cline-MCP',
    desc: 'Forked and redesigned Cline AI assistant exposing core file editing, terminal execution, and Git ops as MCP tools for autonomous agents.',
    tags: ['TypeScript', 'MCP Protocol', 'Agentic AI', 'Headless CLI', 'Git Ops'],
    image: '/project_screenshots/cline_mcp.png',
    url: 'https://github.com/GudisaSandeep/cline-MCP',
  },
  {
    id: 3,
    name: 'Smart Class Monitoring',
    category: 'computer-vision',
    categoryLabel: 'Grand Finalist, SIH 2024 · Dec 2024',
    displayUrl: 'github.com/GudisaSandeep/smart-class-monitoring',
    desc: 'Real-time computer vision analytics system using OpenCV and Python to track drowsiness, head pose, and instructor engagement summaries.',
    tags: ['OpenCV', 'Python', 'Azure AI', 'OpenAI API', 'Edge Deployment'],
    image: '/project_screenshots/smart-class-monitoring.png',
    url: 'https://github.com/GudisaSandeep/smart-class-monitoring-system',
  },
  {
    id: 4,
    name: 'Web Agent — Autonomous Browser Extension',
    category: 'agentic-ai',
    categoryLabel: 'Autonomous Browser Agent · Feb 2025',
    displayUrl: 'github.com/GudisaSandeep/Browser_Agent',
    desc: 'Manifest V3 Chrome Extension executing complex natural language commands through structured DOM manipulation using the Gemini API.',
    tags: ['Manifest V3', 'Gemini API', 'JavaScript', 'DOM Automation', 'Chrome API'],
    image: '/project_screenshots/Web_agent.png',
    url: 'https://github.com/GudisaSandeep/Browser_Agent',
  },
  {
    id: 5,
    name: 'MyTeGEN Website & AI Agents',
    category: 'generative-ai',
    categoryLabel: 'Company Website & AI Chatbot · 2026',
    displayUrl: 'mytegen.com',
    desc: 'Official company website for MyTeGEN featuring integrated AI chatbot customer support and autonomous AI agents for educational workflows.',
    tags: ['React', 'Node.js', 'AI Chatbot', 'AI Agents', 'Full Stack'],
    image: '/project_screenshots/mytegen_website.png',
    url: 'https://mytegen.com',
  },
  {
    id: 6,
    name: 'ResumeFuse — RAG Resume Analysis System',
    category: 'rag-llm',
    categoryLabel: 'RAG / Vector Search · Jan 2025',
    displayUrl: 'resumefuseai.vercel.app',
    desc: 'RAG pipeline using Gemini API and Pinecone vector search to semantically match candidate resumes with target job descriptions.',
    tags: ['RAG', 'Pinecone', 'Gemini API', 'Embeddings', 'Python'],
    image: '/project_screenshots/resume-fuse.png',
    url: 'http://resumefuseai.vercel.app/',
  },
]

const filters = [
  { id: ALL, label: 'All Projects' },
  { id: 'browser-extension', label: 'Browser Extensions' },
  { id: 'agentic-ai', label: 'Agentic AI' },
  { id: 'computer-vision', label: 'Computer Vision' },
  { id: 'generative-ai', label: 'Generative AI' },
  { id: 'rag-llm', label: 'RAG / LLM' },
]

export default function Projects() {
  const [active, setActive] = useState(ALL)

  const visible =
    active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <div>
            <div className="label-tag">Featured Projects</div>
            <h2 className="section-heading">
              Things I&apos;ve <span>Built</span>
            </h2>
          </div>
          <a
            href="https://github.com/GudisaSandeep"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            View All Projects <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Filter tabs */}
        <div className="projects-filters" role="tablist" aria-label="Project categories">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              className={`filter-btn${active === f.id ? ' active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid — 3 per row */}
        <div className="projects-grid" role="tabpanel">
          {visible.map((p) => (
            <article key={p.id} className="project-card reveal-on-scroll">
              {/* Interactive Browser Topbar Mockup */}
              <div className="browser-topbar">
                <div className="browser-dots" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="browser-url">
                  <span className="lock-icon" aria-hidden="true">🔒</span>
                  <span>{p.displayUrl}</span>
                </div>
                <div className="browser-action" aria-hidden="true">
                  <IconExtLink />
                </div>
              </div>

              {/* Clickable Image Preview with Hover Launch Badge */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-preview"
                aria-label={`Launch ${p.name}`}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={450}
                  className="project-preview-img"
                />
                <div className="project-hover-overlay">
                  <span className="launch-badge">
                    Click to Launch Site ↗
                  </span>
                </div>
              </a>

              {/* Body */}
              <div className="project-body">
                <div className="project-cat">{p.categoryLabel}</div>
                <h3 className="project-name">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    {p.name}
                  </a>
                </h3>
                <p className="project-desc line-clamp-2">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="ptag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
