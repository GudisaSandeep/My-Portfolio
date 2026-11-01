"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ALL = "all";

const projects = [
  {
    id: 1,
    name: "Fixyt — Chrome Extension",
    category: "browser-extension",
    categoryLabel: "Founder · Published Chrome Extension · 2026",
    displayUrl: "fixyt.in",
    desc: "Visual tab-management extension that turns browser tabs into interactive cards on an infinite canvas with TabFlow visual automation.",
    tags: [
      "Chrome Extension",
      "Manifest V3",
      "JavaScript",
      "TabFlow",
      "Infinite Canvas",
    ],
    image: "/project_screenshots/fixyt.png",
    url: "https://fixyt.in",
  },
  {
    id: 2,
    name: "Cline MCP Fork — Headless Agent Framework",
    category: "agentic-ai",
    categoryLabel: "Headless Agent Framework · 2026",
    displayUrl: "github.com/GudisaSandeep/cline-MCP",
    desc: "Forked and redesigned Cline AI assistant exposing core file editing, terminal execution, and Git ops as MCP tools for autonomous agents.",
    tags: [
      "TypeScript",
      "MCP Protocol",
      "Agentic AI",
      "Headless CLI",
      "Git Ops",
    ],
    image: "/project_screenshots/cline_mcp.png",
    url: "https://github.com/GudisaSandeep/cline-MCP",
  },
  {
    id: 3,
    name: "Smart Class Monitoring",
    category: "computer-vision",
    categoryLabel: "Grand Finalist, SIH 2024 · Dec 2024",
    displayUrl: "github.com/GudisaSandeep/smart-class-monitoring",
    desc: "Real-time computer vision analytics system using OpenCV and Python to track drowsiness, head pose, and instructor engagement summaries.",
    tags: ["OpenCV", "Python", "Azure AI", "OpenAI API", "Edge Deployment"],
    image: "/project_screenshots/smart-class-monitoring.png",
    url: "https://github.com/GudisaSandeep/smart-class-monitoring-system",
  },
  {
    id: 4,
    name: "Web Agent — Autonomous Browser Extension",
    category: "agentic-ai",
    categoryLabel: "Autonomous Browser Agent · Feb 2025",
    displayUrl: "github.com/GudisaSandeep/Browser_Agent",
    desc: "Manifest V3 Chrome Extension executing complex natural language commands through structured DOM manipulation using the Gemini API.",
    tags: [
      "Manifest V3",
      "Gemini API",
      "JavaScript",
      "DOM Automation",
      "Chrome API",
    ],
    image: "/project_screenshots/Web_agent.png",
    url: "https://github.com/GudisaSandeep/Browser_Agent",
  },
  {
    id: 5,
    name: "MyTeGEN Website & AI Agents",
    category: "generative-ai",
    categoryLabel: "Company Website & AI Chatbot · 2026",
    displayUrl: "mytegen.com",
    desc: "Official company website for MyTeGEN featuring integrated AI chatbot customer support and autonomous AI agents for educational workflows.",
    tags: ["React", "Node.js", "AI Chatbot", "AI Agents", "Full Stack"],
    image: "/project_screenshots/mytegen_website.png",
    url: "https://mytegen.com",
  },
  {
    id: 6,
    name: "ResumeFuse — RAG Resume Analysis System",
    category: "rag-llm",
    categoryLabel: "RAG / Vector Search · Jan 2025",
    displayUrl: "resumefuseai.vercel.app",
    desc: "RAG pipeline using Gemini API and Pinecone vector search to semantically match candidate resumes with target job descriptions.",
    tags: ["RAG", "Pinecone", "Gemini API", "Embeddings", "Python"],
    image: "/project_screenshots/resume-fuse.png",
    url: "https://resumefuseai.vercel.app/",
  },
];

const filters = [
  { id: ALL, label: "All Projects" },
  { id: "browser-extension", label: "Browser Extensions" },
  { id: "agentic-ai", label: "Agentic AI" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "generative-ai", label: "Generative AI" },
  { id: "rag-llm", label: "RAG / LLM" },
];

const projectNotes: Record<number, { challenge: string; approach: string }> = {
  1: {
    challenge: "Make a crowded browser easier to navigate and organize.",
    approach:
      "An infinite canvas turns tabs into visual cards. TabFlow adds browser workflows, with multiple workspaces and session restore.",
  },
  2: {
    challenge:
      "Make coding-assistant capabilities accessible to autonomous agents.",
    approach:
      "A headless Cline fork exposes file editing, terminal execution, and Git operations through the Model Context Protocol.",
  },
  3: {
    challenge: "Help instructors understand classroom engagement in real time.",
    approach:
      "A Python and OpenCV pipeline combines drowsiness and head-pose tracking with AI-generated instructional summaries.",
  },
};
export default function Projects() {
  const [active, setActive] = useState(ALL);
  const visible =
    active === ALL ? projects : projects.filter((p) => p.category === active);
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">01 / SELECTED WORK</span>
          <span className="section-aside">IDEAS MADE REAL · 2024—2026</span>
        </div>
        <div className="section-header">
          <h2>
            A few things
            <br />
            I’ve put into the world<span className="blue">.</span>
          </h2>
          <p>
            Independent products, autonomous agents, and applied AI. Built with
            purpose, from the ground up.
          </p>
        </div>
        <div
          className="projects-filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              aria-pressed={active === f.id}
              className={`filter-btn${active === f.id ? " active" : ""}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
              {f.id === ALL && <span>06</span>}
            </button>
          ))}
        </div>
        <div
          className={`projects-grid${active === ALL ? " is-all" : ""}`}
          aria-live="polite"
          aria-atomic="false"
        >
          {visible.map((p) => (
            <article
              key={p.id}
              className={`project-card project-${p.id}${p.id === 1 && active === ALL ? " project-featured" : ""}`}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-visual"
                aria-label={`Visit ${p.name}`}
              >
                <div className="project-visual-label">
                  <span>PROJECT / {String(p.id).padStart(2, "0")}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="project-browser">
                  <div className="browser-bar">
                    <span aria-hidden="true">● ● ●</span>
                    <span>{p.displayUrl}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <Image
                    src={p.image}
                    alt={`${p.name} interface`}
                    width={1000}
                    height={600}
                    sizes="(max-width: 700px) 92vw, (max-width: 1000px) 80vw, 46vw"
                    className="project-image"
                  />
                </div>
                <span className="project-visual-foot">{p.categoryLabel}</span>
              </a>
              <div className="project-body">
                <p className="eyebrow project-category">{p.categoryLabel}</p>
                <h3>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.name}
                    <span aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="project-description">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.id === 1 && (
                  <Link
                    className="text-link project-story-link"
                    href="/projects/fixyt"
                  >
                    Read the founder story ↗
                  </Link>
                )}
                {projectNotes[p.id] && (
                  <details className="project-details">
                    <summary>
                      Behind the build <span aria-hidden="true">+</span>
                    </summary>
                    <div>
                      <h4>The challenge</h4>
                      <p>{projectNotes[p.id].challenge}</p>
                      <h4>The approach</h4>
                      <p>{projectNotes[p.id].approach}</p>
                    </div>
                  </details>
                )}
              </div>
            </article>
          ))}
        </div>
        <a
          className="work-footer"
          href="https://github.com/GudisaSandeep"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>THERE’S MORE IN THE REPOSITORIES.</span>
          <span>Explore GitHub ↗</span>
        </a>
      </div>
    </section>
  );
}
