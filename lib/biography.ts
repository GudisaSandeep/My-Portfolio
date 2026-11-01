import { profileQuestions } from "./site";

export type BiographyGlyph =
  | "browser"
  | "agent"
  | "tools"
  | "vision"
  | "document"
  | "voice"
  | "cloud"
  | "conversation";

export const biographyProjects: {
  id: string;
  name: string;
  category: string;
  glyph: BiographyGlyph;
  summary: string;
  problem: string;
  approach: string;
  context: string;
  tools: string[];
  url: string;
  image?: string;
}[] = [
  {
    id: "fixyt",
    name: "Fixyt",
    category: "FOUNDER / VISUAL BROWSER WORKSPACE",
    glyph: "browser",
    summary:
      "A visual workspace for the web. I founded, built, and launched Fixyt to help people organize their browser activity around the way they actually work.",
    problem:
      "Research, development, and planning spread working context across pages, windows, and tools. A linear tab strip offers little explanation of how those pieces belong together.",
    approach:
      "Fixyt brings tabs onto a canvas, with workspaces that can be saved and reopened. My portfolio also describes TabFlow workflows, multiple workspaces, and session restoration. The product connects browser-extension engineering with a more visual way to organize a project.",
    context:
      "The initial build is complete. Current features and installation options are available on the official product site; the founder story explains my role and the purpose behind the product.",
    tools: [
      "Browser extensions",
      "Manifest V3",
      "Visual interfaces",
      "Workspace state",
    ],
    url: "https://fixyt.in/",
    image: "/project_screenshots/fixyt.png",
  },
  {
    id: "browser-agent",
    name: "Browser Agent",
    category: "AGENTIC SYSTEMS / LOCAL MODELS",
    glyph: "agent",
    summary:
      "Connecting model reasoning to the state and actions of a real webpage, through a browser-extension interface.",
    problem:
      "A language model needs more than a prompt to interact with a website. It needs a useful description of the page, a way to identify targets, and actions it can request.",
    approach:
      "The current public README describes a Web Agent / OmniChat extension using locally hosted models through LM Studio. Screenshots, semantic page information, and element identifiers provide context for actions such as clicking, typing, navigating, and scrolling.",
    context:
      "Earlier portfolio material describes a Gemini-based version. The repository documents the local-model direction; these are different architectural descriptions, rather than one fixed implementation.",
    tools: ["Local LLMs", "LM Studio", "Browser state", "Tool calls"],
    url: "https://github.com/GudisaSandeep/Browser_Agent",
  },
  {
    id: "cline-mcp",
    name: "Cline MCP workspace tools",
    category: "DEVELOPER TOOLS / MODEL CONTEXT PROTOCOL",
    glyph: "tools",
    summary:
      "Exploring a defined interface between external agents and the capabilities of a development workspace.",
    problem:
      "Agents working with a codebase need access to operations such as inspecting files, editing content, searching a project, and running commands.",
    approach:
      "The Cline-related repository includes documentation for a local MCP workspace-tool host. Its interface describes file access, editing, terminal operations, search, and directory inspection: a way to connect reasoning systems with development operations.",
    context:
      "This work builds on the upstream Cline project. Cline’s original agent and ecosystem remain the work of their upstream authors; my project should be understood in that open-source context.",
    tools: [
      "MCP",
      "Workspace integration",
      "File operations",
      "Developer workflows",
    ],
    url: "https://github.com/GudisaSandeep/cline-MCP",
  },
  {
    id: "class-monitoring",
    name: "Smart Class Monitoring",
    category: "COMPUTER VISION / TRAINING ANALYTICS",
    glyph: "vision",
    summary:
      "Bringing camera input, model-assisted analysis, and a dashboard together in an applied AI project.",
    problem:
      "Training environments produce visual information that is difficult to organize into a useful overview for educators and supervisors.",
    approach:
      "The public repository describes a Flask application with OpenCV, DeepFace, Gemini, and a web dashboard. Camera input moves through video processing and periodic analysis before appearing as structured information in the interface.",
    context:
      "My professional profile connects the work with Smart India Hackathon 2024 finalist participation. The project is an engineering application; model classifications should be interpreted within their evaluation limits.",
    tools: ["Python", "Flask", "OpenCV", "DeepFace", "Gemini"],
    url: "https://github.com/GudisaSandeep/smart-class-monitoring-system",
  },
  {
    id: "resumefuse",
    name: "ResumeFuse",
    category: "LANGUAGE APPLICATIONS / PROFESSIONAL INFORMATION",
    glyph: "document",
    summary:
      "An AI-assisted résumé workflow that connects professional information with the requirements of a particular opportunity.",
    problem:
      "A person’s projects and skills need to be organized clearly for a target role. That information often exists across separate profiles and documents.",
    approach:
      "The public README describes Gemini-assisted résumé generation, GitHub-derived information, job-description tailoring, and a React / TypeScript interface. The application brings model integration into a structured document workflow.",
    context:
      "The portfolio also describes retrieval and vector-search work. The current README primarily documents résumé generation; architecture details should be associated with their respective versions. LinkedIn synchronization is listed as a future feature there.",
    tools: ["Gemini", "React", "TypeScript", "GitHub integration"],
    url: "https://github.com/GudisaSandeep/profile-resume-fuse",
  },
  {
    id: "ai-partner",
    name: "AI Partner",
    category: "MULTIMODAL INTERACTION / VOICE & VISION",
    glyph: "conversation",
    summary:
      "A configurable assistant interface that brings voice and visual interaction into a Python application.",
    problem:
      "An interactive assistant needs to connect live input, model responses, and user controls in a coherent application experience.",
    approach:
      "The current repository describes Gemini Live API integration with voice interaction, camera or screen input, and configurable interfaces. It offers a concrete example of connecting multimodal model capabilities to a desktop-style experience.",
    context:
      "Older résumé material describes a GPT-4 Vision approach. The current documentation represents the Gemini-based direction, so the model architecture is version-specific.",
    tools: ["Python", "Gemini", "Voice interaction", "Visual input"],
    url: "https://github.com/GudisaSandeep/AI-Partner",
  },
  {
    id: "smart-review",
    name: "Smart Review System",
    category: "AZURE AI / COURSE INFORMATION",
    glyph: "cloud",
    summary:
      "A course-information and review application connecting language, search, vision, and speech capabilities.",
    problem:
      "Course discovery and review interpretation involve information in multiple forms: search results, written feedback, and sometimes text within images.",
    approach:
      "The project README describes a Flask application with Azure services for review sentiment, image-to-text processing, search, and speech output. The software brings several model services into a shared web workflow.",
    context:
      "The project is associated in my professional material with Microsoft × AICTE / Future Ready Talent learning and project experience.",
    tools: ["Flask", "Azure AI", "Search", "Language & speech"],
    url: "https://github.com/GudisaSandeep/Smart-Review-System",
  },
  {
    id: "ai-tts",
    name: "AI-TTS",
    category: "SPEECH APPLICATIONS / AUDIO TOOLS",
    glyph: "voice",
    summary:
      "A direct, interactive way to turn written text into speech with language and voice selection.",
    problem:
      "Speech generation becomes useful when people can choose an appropriate voice, preview the result, and keep the generated output.",
    approach:
      "The public README describes a Streamlit interface for entering text, choosing languages and voices, generating speech, and downloading audio. It credits me as the developer.",
    context:
      "This project illustrates the application layer around a model capability: controls, output handling, and a clear task-oriented interface.",
    tools: ["Python", "Streamlit", "Text-to-speech", "Audio output"],
    url: "https://github.com/GudisaSandeep/AI-TTS",
  },
  {
    id: "monosid",
    name: "MonoSid",
    category: "CONVERSATIONAL AI / WELLBEING INTERFACE",
    glyph: "conversation",
    summary:
      "A conversational AI project exploring an avatar-led interface and multimodal interaction in a wellbeing context.",
    problem:
      "Conversational software needs an interface that makes the exchange understandable and gives users a sense of continuity.",
    approach:
      "My portfolio describes founder-engineering work on a conversational agent, an avatar interface, and browser-based visual interaction. The work forms part of my wider exploration of bringing AI into user-facing products.",
    context:
      "The public repository currently has a starter README. A deeper implementation account remains to be documented; this project is presented as conversational software rather than a claim of clinical effectiveness.",
    tools: [
      "Conversational interfaces",
      "React",
      "TypeScript",
      "Avatar interaction",
    ],
    url: "https://github.com/GudisaSandeep/MonoSid_New",
  },
];

export const biographyExpertise: {
  title: string;
  glyph: BiographyGlyph;
  description: string;
  tools: string[];
}[] = [
  {
    title: "Agentic applications",
    glyph: "agent",
    description:
      "Connecting model reasoning with tool use and application state. Browser actions and development-workspace operations are two recurring contexts in my work.",
    tools: ["Tool interfaces", "MCP", "Task loops", "State representation"],
  },
  {
    title: "Browser products",
    glyph: "browser",
    description:
      "Building around the browser as a working environment, from visual workspaces and saved context to extensions that interact with pages.",
    tools: [
      "Manifest V3",
      "JavaScript",
      "DOM interaction",
      "Workspace persistence",
    ],
  },
  {
    title: "Language & retrieval",
    glyph: "document",
    description:
      "Applying language models to structured information and document workflows. My broader toolkit includes retrieval, embeddings, and vector-search approaches.",
    tools: ["Gemini", "LLM APIs", "RAG", "Semantic search"],
  },
  {
    title: "Vision & multimodal AI",
    glyph: "vision",
    description:
      "Connecting camera or screen input with processing pipelines, model services, and useful interfaces for reviewing the resulting information.",
    tools: ["OpenCV", "DeepFace", "Camera input", "Multimodal context"],
  },
  {
    title: "Voice experiences",
    glyph: "voice",
    description:
      "Turning speech capabilities into interactive software with voice selection, live conversation, and accessible ways to receive information.",
    tools: ["Speech generation", "Audio interaction", "Python", "Streamlit"],
  },
  {
    title: "Product engineering",
    glyph: "tools",
    description:
      "Joining the model, backend, and interface into a complete application. I work across the layers that turn a capability into a usable experience.",
    tools: ["React", "TypeScript", "Python", "Flask", "APIs"],
  },
];

export const earlierExperience = [
  {
    period: "2025–2026",
    name: "MyTeGEN",
    title: "Generative AI internship",
    description:
      "Professional work involving browser automation, local-model integration, and educational AI workflows. This connects model reasoning with the state and behavior of web applications.",
    link: "https://mytegen.com",
    label: "Company website",
  },
  {
    period: "EARLIER PROJECT",
    name: "MonoSid",
    title: "Founder-engineering experience",
    description:
      "Work described in my portfolio on a conversational wellbeing application, bringing together an agent, an avatar interface, and browser-based interaction.",
    link: "https://github.com/GudisaSandeep/MonoSid_New",
    label: "Public repository",
  },
  {
    period: "2024",
    name: "Microsoft × AICTE",
    title: "Azure AI learning & project experience",
    description:
      "The Smart Review System project brought Azure language, vision, search, and speech services into a Flask application. My professional material associates this work with Future Ready Talent.",
    link: "https://github.com/GudisaSandeep/Smart-Review-System",
    label: "Explore the project",
  },
];

export const biographyQuestions = [
  ...profileQuestions,
  {
    question: "Where is Sandeep based?",
    answer:
      "My current public location is Mumbai, India. Some older profiles show Bengaluru or Vijayawada, reflecting earlier professional information.",
  },
  {
    question: "What is Sandeep’s role at Vector?",
    answer:
      "I work full-time as a Software Development Engineer at Vector, starting in October 2026. My work on WhiteSea Labs is part-time alongside that role.",
  },
  {
    question: "What is the connection to MCP?",
    answer:
      "My Cline-related repository documents a local MCP interface for workspace tools, including files, search, editing, and terminal operations. It builds on the upstream Cline ecosystem.",
  },
  {
    question: "Does Sandeep work with local language models?",
    answer:
      "The Browser_Agent repository documents an extension that connects models hosted through LM Studio with visual and semantic webpage context and browser actions.",
  },
  {
    question: "What is Sandeep’s academic background?",
    answer:
      "My academic background is in computer science with an AI and machine-learning specialization at Andhra Loyola Institute of Engineering and Technology, Vijayawada. My public profile lists the study period as 2022–2026.",
  },
  {
    question: "Where can I explore the code?",
    answer:
      "My public GitHub account is GudisaSandeep. It includes repositories for browser agents, Cline-related MCP tools, classroom analytics, résumé workflows, multimodal assistants, and speech applications. Each repository provides its own documentation and attribution.",
  },
  {
    question: "What does the growth statement mean?",
    answer:
      "“Building a path for sustained, limitless growth” is my professional direction: keep learning, strengthen the engineering, and turn ideas into useful products. It is a statement of purpose rather than a claim about business performance.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "For professional conversations, email sandeep.gudisa7@gmail.com or connect with Sandeep Gudisa on LinkedIn. My public profiles also include GitHub and Threads.",
  },
];

export const biographySections = [
  { id: "biography-story", name: "The professional story" },
  { id: "biography-career", name: "Experience" },
  { id: "biography-projects", name: "Projects" },
  { id: "biography-expertise", name: "Expertise" },
  { id: "biography-learning", name: "Education & recognition" },
  { id: "questions", name: "Questions" },
] as const;
