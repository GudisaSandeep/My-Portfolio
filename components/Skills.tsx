import {
  LogoPython,
  LogoPyTorch,
  LogoTensorFlow,
  LogoOpenCV,
  LogoDocker,
  LogoReact,
  LogoNextjs,
  LogoTypeScript,
  LogoOpenAI,
  LogoPinecone,
  LogoPostgres,
  LogoFastAPI,
  LogoTailwind,
  LogoChrome,
  LogoThreeJS,
  LogoMCP,
  LogoGit,
} from './TechLogos'

const skillCategories = [
  {
    title: 'Generative AI & Agents',
    badge: 'AI Engineer Core',
    badgeColor: '#5b21b6',
    skills: [
      { name: 'MCP (Model Context Protocol)', icon: <LogoMCP /> },
      { name: 'LangChain & LlamaIndex', icon: <LogoOpenAI /> },
      { name: 'CrewAI & AutoGen Frameworks', icon: <LogoMCP /> },
      { name: 'LLM APIs (GPT-4, Gemini, Claude)', icon: <LogoOpenAI /> },
      { name: 'Autonomous Browser Agents', icon: <LogoChrome /> },
      { name: 'RAG & Hybrid Search', icon: <LogoPinecone /> },
      { name: 'Prompt Engineering & Tools', icon: <LogoOpenAI /> },
    ],
  },
  {
    title: 'ML & Computer Vision',
    badge: 'ML Engineer Core',
    badgeColor: '#0284c7',
    skills: [
      { name: 'PyTorch & TensorFlow', icon: <LogoPyTorch /> },
      { name: 'Computer Vision (OpenCV, YOLO)', icon: <LogoOpenCV /> },
      { name: 'Model Fine-Tuning (LoRA, PEFT)', icon: <LogoPyTorch /> },
      { name: 'Quantization (vLLM, GGUF, ONNX)', icon: <LogoTensorFlow /> },
      { name: 'Head Pose & Drowsiness Tracking', icon: <LogoOpenCV /> },
      { name: 'Scikit-Learn, NumPy & Pandas', icon: <LogoPython /> },
    ],
  },
  {
    title: 'Vector DBs & Search',
    badge: 'Retrieval & RAG',
    badgeColor: '#7c3aed',
    skills: [
      { name: 'Pinecone Vector Search', icon: <LogoPinecone /> },
      { name: 'ChromaDB & Qdrant', icon: <LogoPinecone /> },
      { name: 'Embeddings & Semantic Search', icon: <LogoOpenAI /> },
      { name: 'Vector Index Tuning & Hybrid RAG', icon: <LogoPinecone /> },
      { name: 'PostgreSQL & pgvector', icon: <LogoPostgres /> },
    ],
  },
  {
    title: 'AI Backend & Systems',
    badge: 'Engineering',
    badgeColor: '#0f172a',
    skills: [
      { name: 'Python (AsyncIO, FastMCP)', icon: <LogoPython /> },
      { name: 'FastAPI & Flask REST APIs', icon: <LogoFastAPI /> },
      { name: 'Node.js & TypeScript', icon: <LogoTypeScript /> },
      { name: 'Docker & Containerization', icon: <LogoDocker /> },
      { name: 'Git, GitHub & CI/CD Pipelines', icon: <LogoGit /> },
    ],
  },
  {
    title: 'AI UI & Frontend',
    badge: 'Product & Web',
    badgeColor: '#16a34a',
    skills: [
      { name: 'React & Next.js App Router', icon: <LogoReact /> },
      { name: 'Three.js (3D Web Avatars)', icon: <LogoThreeJS /> },
      { name: 'Chrome Extensions (Manifest V3)', icon: <LogoChrome /> },
      { name: 'Tailwind CSS Design Systems', icon: <LogoTailwind /> },
      { name: 'WebSockets & Voice/Streaming UI', icon: <LogoNextjs /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="label-tag">Technical Matrix</div>
        <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
          Skills &amp; <span>Capabilities</span>
        </h2>

        {/* Skills Unboxed Grid */}
        <div className="skills-board-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills-board-card reveal-on-scroll">
              <div className="skills-board-header">
                <h3 className="skills-board-title">{cat.title}</h3>
                <span
                  className="skills-board-badge"
                  style={{ background: cat.badgeColor }}
                >
                  {cat.badge}
                </span>
              </div>

              <ul className="skills-board-list">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="skills-board-item">
                    <div className="skills-brand-icon" aria-hidden="true">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
