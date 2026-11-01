import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroPortrait from "@/components/HeroPortrait";
import ProfileAnswers from "@/components/ProfileAnswers";
import StructuredData from "@/components/StructuredData";
import {
  BiographyIcon,
  ConnectedWorkIllustration,
  BrowserWorkspaceIllustration,
} from "@/components/BiographyIllustrations";
import { pageMetadata } from "@/lib/seo";
import { profile } from "@/lib/site";
import {
  biographyProjects,
  biographyExpertise,
  biographyQuestions,
  earlierExperience,
  biographySections,
} from "@/lib/biography";
import { breadcrumbSchema } from "@/lib/identity";
import { biographyPageSchema } from "@/lib/biography-seo";

export const metadata = pageMetadata(
  "About Sandeep Gudisa | AI Engineer & Founder of Fixyt",
  "Explore Sandeep Gudisa’s biography, career, AI projects, and expertise. Mumbai-based AI engineer, founder of Fixyt, and co-founder of WhiteSea Labs.",
  "/about",
);

function SectionLabel({
  number,
  children,
  aside,
}: {
  number: string;
  children: React.ReactNode;
  aside: string;
}) {
  return (
    <div className="section-topline">
      <span className="eyebrow">
        {number} / {children}
      </span>
      <span className="section-aside">{aside}</span>
    </div>
  );
}

export default function BiographyPage() {
  return (
    <>
      <StructuredData data={biographyPageSchema} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Sandeep Gudisa", path: "/about" },
        ])}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content" className="biography-page">
        <section className="section detail-intro bio-intro">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About</span>
            </nav>
            <div className="detail-hero-grid">
              <div>
                <p className="eyebrow">
                  THE PERSON BEHIND THE WORK / MUMBAI, INDIA
                </p>
                <h1>
                  Sandeep
                  <br />
                  Gudisa<span className="blue">.</span>
                </h1>
                <p className="detail-deck">
                  An engineer’s mind.
                  <br />A builder’s instinct.
                </p>
                <p className="detail-introduction">
                  I’m an AI engineer, founder of Fixyt, and co-founder of
                  WhiteSea Labs. I connect intelligent models with the tools,
                  interfaces, and workflows people use every day.
                </p>
                <div className="hero-actions">
                  <a
                    className="button button-primary"
                    href="/resume.md"
                    download
                  >
                    Download résumé ↓
                  </a>
                  <a
                    className="text-link"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn ↗
                  </a>
                </div>
                <div className="bio-intro-note">
                  <span className="status-dot" />
                  <span>BUILDING A PATH FOR SUSTAINED, LIMITLESS GROWTH.</span>
                </div>
              </div>
              <HeroPortrait />
            </div>
            <dl className="bio-facts">
              <div>
                <dt>BASED IN</dt>
                <dd>Mumbai, India</dd>
              </div>
              <div>
                <dt>FOUNDER</dt>
                <dd>
                  <Link href="/projects/fixyt">Fixyt ↗</Link>
                </dd>
              </div>
              <div>
                <dt>CO-FOUNDER</dt>
                <dd>
                  <a href={profile.whitesea}>WhiteSea Labs ↗</a>
                </dd>
              </div>
              <div>
                <dt>CURRENT ROLE</dt>
                <dd>Software Development Engineer, Vector</dd>
              </div>
            </dl>
          </div>
        </section>
        <nav className="bio-index" aria-label="Explore this biography">
          <div className="container">
            <span className="bio-index-label">IN THIS STORY</span>
            {biographySections.map((s, i) => (
              <a href={`#${s.id}`} key={s.id}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.name}
              </a>
            ))}
          </div>
        </nav>

        <section id="biography-story" className="section bio-section bio-story">
          <div className="container">
            <SectionLabel number="01" aside="THE CONNECTIONS MATTER">
              MY PROFESSIONAL STORY
            </SectionLabel>
            <div className="bio-story-grid">
              <div className="bio-story-copy">
                <h2>
                  From an idea
                  <br />
                  to something
                  <br />
                  <span className="blue">people can use.</span>
                </h2>
                <p className="bio-large-copy">
                  I enjoy the space between “what if” and “it works.”
                </p>
                <div className="prose">
                  <p>
                    I’m Sandeep Gudisa, also known as Gudisa Sandeep, an AI
                    engineer and software developer based in Mumbai. My work
                    spans agentic systems, browser automation, and applied AI
                    products. The common thread is making a model’s capabilities
                    useful inside a real application.
                  </p>
                  <p>
                    An AI product needs more than a response from a model. It
                    needs a clear problem, relevant context, dependable
                    application logic, and an interface that makes sense to the
                    person using it. I like working across those connections,
                    from the first prototype to the final interaction.
                  </p>
                  <p>
                    That interest takes different forms in my portfolio. A
                    browser agent needs a way to understand a page and request
                    an action. A development agent needs an interface to files
                    and tools. A résumé application needs to organize
                    professional information around a particular opportunity. A
                    multimodal assistant needs to bring voice or visual input
                    into a coherent exchange.
                  </p>
                  <p>
                    Alongside this work, I am a full-time Software Development
                    Engineer at Vector and a part-time co-founder of WhiteSea
                    Labs. I founded and launched Fixyt to explore how
                    browser-based work can be organized more visually. These
                    roles connect engineering with the practical experience of
                    building products.
                  </p>
                </div>
              </div>
              <div className="bio-story-visual">
                <ConnectedWorkIllustration />
                <div className="bio-principle">
                  <span>THE THROUGH LINE</span>
                  <p>
                    Start with the problem.
                    <br />
                    Connect the right pieces.
                    <br />
                    Make the result useful.
                  </p>
                </div>
              </div>
            </div>
            <div className="bio-belief">
              <span className="eyebrow">A DIRECTION, NOT A FINISH LINE</span>
              <p>
                “Building a path for sustained, limitless growth” means
                continuing to learn, strengthening the engineering, and turning
                ideas into useful products.
              </p>
            </div>
          </div>
        </section>

        <section
          id="biography-career"
          className="section bio-section bio-career"
        >
          <div className="container">
            <SectionLabel number="02" aside="ENGINEERING & ENTREPRENEURSHIP">
              THE PROFESSIONAL JOURNEY
            </SectionLabel>
            <div className="section-header">
              <h2>
                Different roles.
                <br />A consistent drive <span className="blue">to build.</span>
              </h2>
              <p>
                Product development, software engineering, and company building
                shape how I approach practical problems.
              </p>
            </div>
            <div className="bio-role-grid">
              <article className="bio-role">
                <div className="bio-role-top">
                  <span className="bio-company-mark">FX</span>
                  <span>FOUNDER / BUILT & LAUNCHED</span>
                </div>
                <h3>Fixyt</h3>
                <p className="bio-role-caption">Visual browser workspace</p>
                <p>
                  I founded, built, and launched Fixyt to organize browser
                  activity on a visual canvas. Its workspaces bring related
                  pages and project context together, with a focus on how people
                  navigate their work online.
                </p>
                <p>
                  The initial build is complete. That delivery milestone is
                  separate from later maintenance and product development.
                </p>
                <Link className="text-link" href="/projects/fixyt">
                  Read the founder story ↗
                </Link>
              </article>
              <article className="bio-role">
                <div className="bio-role-top">
                  <span className="bio-company-mark">WL</span>
                  <span>OCT 2026—PRESENT / PART-TIME</span>
                </div>
                <h3>WhiteSea Labs</h3>
                <p className="bio-role-caption">Co-founder</p>
                <p>
                  WhiteSea Labs is a software engineering studio that helps
                  businesses put AI to work. I co-founded the studio in October
                  2026 and contribute to it part-time alongside my full-time
                  engineering role.
                </p>
                <p>
                  The studio connects my interest in applied AI with the
                  software needs of businesses.
                </p>
                <a
                  className="text-link"
                  href={profile.whitesea}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore WhiteSea Labs ↗
                </a>
              </article>
              <article className="bio-role">
                <div className="bio-role-top">
                  <span className="bio-company-mark">V</span>
                  <span>OCT 2026—PRESENT / FULL-TIME</span>
                </div>
                <h3>Vector</h3>
                <p className="bio-role-caption">
                  Software Development Engineer
                </p>
                <p>
                  I work full-time as a Software Development Engineer at Vector,
                  beginning in October 2026. This role forms part of my
                  professional practice alongside my product and founder work.
                </p>
                <p>
                  My independent portfolio provides a public view of the
                  applications and engineering interests I can share.
                </p>
                <a
                  className="text-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Professional profile ↗
                </a>
              </article>
            </div>
            <div className="bio-earlier">
              <div>
                <span className="eyebrow">EARLIER CHAPTERS</span>
                <h3>
                  Learning through
                  <br />
                  real applications.
                </h3>
                <p>
                  Internship, learning, and founder-engineering experiences that
                  helped shape the work I do today.
                </p>
              </div>
              <div className="bio-earlier-list">
                {earlierExperience.map((item) => (
                  <article key={item.name}>
                    <span className="bio-period">{item.period}</span>
                    <h4>{item.name}</h4>
                    <p className="bio-earlier-title">{item.title}</p>
                    <p>{item.description}</p>
                    <a
                      className="text-link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label} ↗
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bio-browser-band">
          <div className="container">
            <div>
              <span className="eyebrow">A RECURRING QUESTION IN MY WORK</span>
              <h2>
                What if your browser
                <br />
                could hold the <span>whole picture?</span>
              </h2>
              <p>
                Fixyt explores how work is organized. Browser agents explore how
                software can act within it. Together, these interests connect
                the workspace with the workflow.
              </p>
            </div>
            <BrowserWorkspaceIllustration />
          </div>
        </section>

        <section
          id="biography-projects"
          className="section bio-section bio-projects"
        >
          <div className="container">
            <SectionLabel
              number="03"
              aside="PRODUCTS, EXPERIMENTS & APPLICATIONS"
            >
              A CLOSER LOOK AT THE WORK
            </SectionLabel>
            <div className="section-header">
              <h2>
                Ideas, implemented<span className="blue">.</span>
                <br />
                The portfolio in detail.
              </h2>
              <p>
                Explore the problem, approach, and technical context behind each
                project. Open a build note to go deeper.
              </p>
            </div>
            <div className="bio-project-grid">
              {biographyProjects.map((project, i) => (
                <article
                  id={`project-${project.id}`}
                  key={project.id}
                  className={`bio-project${project.id === "fixyt" ? " bio-project-featured" : ""}`}
                >
                  {project.image && (
                    <div className="bio-project-picture">
                      <div className="bio-project-picture-label">
                        <span>PRODUCT / 01</span>
                        <span>FOUNDED BY SANDEEP GUDISA</span>
                      </div>
                      <Image
                        src={project.image}
                        alt="Fixyt visual browser workspace interface and product overview"
                        width={1000}
                        height={700}
                        sizes="(max-width: 650px) 90vw, 45vw"
                      />
                      <Link href="/projects/fixyt">
                        The story behind the product ↗
                      </Link>
                    </div>
                  )}
                  <div className="bio-project-content">
                    <div className="bio-project-top">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <BiographyIcon kind={project.glyph} />
                    </div>
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="bio-project-summary">{project.summary}</p>
                    <div className="bio-tags">
                      {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <details className="bio-build-notes">
                      <summary>
                        Problem, approach & context{" "}
                        <span aria-hidden="true">+</span>
                      </summary>
                      <div>
                        <h4>The problem</h4>
                        <p>{project.problem}</p>
                        <h4>The approach</h4>
                        <p>{project.approach}</p>
                        <h4>Project context</h4>
                        <p>{project.context}</p>
                      </div>
                    </details>
                    <a
                      className="text-link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.id === "fixyt"
                        ? "Visit Fixyt"
                        : "Explore the repository"}{" "}
                      ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="bio-project-footnote">
              <span className="eyebrow">BUILT ON SHARED KNOWLEDGE</span>
              <p>
                Project documentation describes the implementation and its
                context. Collaborative and upstream work is credited at the
                source; individual repositories provide their own licensing and
                contribution information.
              </p>
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse GitHub ↗
              </a>
            </div>
          </div>
        </section>

        <section
          id="biography-expertise"
          className="section bio-section bio-expertise"
        >
          <div className="container">
            <SectionLabel
              number="04"
              aside="THE MODEL IS ONE PART OF THE SYSTEM"
            >
              HOW I WORK ACROSS THE STACK
            </SectionLabel>
            <div className="section-header">
              <h2>
                Different capabilities.
                <br />
                One connected <span>practice.</span>
              </h2>
              <p>
                My focus is the application around the intelligence: context,
                tools, interfaces, and the experience of using them.
              </p>
            </div>
            <div className="bio-expertise-grid">
              {biographyExpertise.map((item, i) => (
                <article key={item.title}>
                  <div className="bio-expertise-top">
                    <span>0{i + 1}</span>
                    <BiographyIcon kind={item.glyph} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="bio-expertise-tools">
                    {item.tools.join(" / ")}
                  </div>
                </article>
              ))}
            </div>
            <div className="bio-working-loop">
              <span>THE WORKING LOOP</span>
              <ol>
                <li>
                  <b>01</b> Understand the goal
                </li>
                <li>
                  <b>02</b> Connect the context
                </li>
                <li>
                  <b>03</b> Build the interaction
                </li>
                <li>
                  <b>04</b> Review & improve
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section
          id="biography-learning"
          className="section bio-section bio-learning"
        >
          <div className="container">
            <SectionLabel number="05" aside="FOUNDATIONS & MILESTONES">
              LEARNING NEVER STOPS
            </SectionLabel>
            <div className="bio-learning-grid">
              <div>
                <h2>
                  A technical foundation.
                  <br />
                  An ongoing <span className="blue">education.</span>
                </h2>
                <p className="bio-large-copy">
                  Curiosity is the starting point.
                  <br />
                  Building is how I keep learning.
                </p>
                <div className="bio-education">
                  <span className="eyebrow">
                    ACADEMIC BACKGROUND / 2022–2026
                  </span>
                  <h3>
                    Computer Science
                    <br />
                    Artificial Intelligence & Machine Learning
                  </h3>
                  <p>
                    Andhra Loyola Institute of Engineering and Technology
                    <br />
                    Vijayawada, India
                  </p>
                  <p>
                    My academic background brings computer science together with
                    AI and machine learning. The public profile lists the study
                    period as 2022–2026.
                  </p>
                </div>
                <div className="bio-study">
                  <h3>Further learning interests</h3>
                  <ul>
                    <li>Question-answering applications with Azure AI</li>
                    <li>Software engineering and Agile development</li>
                    <li>Development testing and Extreme Programming</li>
                  </ul>
                  <p>
                    These learning areas appear in my professional material
                    alongside the practical projects in this portfolio.
                  </p>
                </div>
              </div>
              <div className="bio-milestones">
                <article>
                  <div className="bio-milestone-icon">
                    <BiographyIcon kind="vision" />
                  </div>
                  <span className="eyebrow">SMART INDIA HACKATHON / 2024</span>
                  <h3>
                    Building under
                    <br />a real challenge.
                  </h3>
                  <p>
                    My public professional profile records finalist
                    participation in Smart India Hackathon 2024. The associated
                    classroom-monitoring project connects computer vision,
                    model-assisted analysis, and a dashboard.
                  </p>
                  <p>
                    The experience sits within a wider interest in applying AI
                    to practical problems and explaining how the underlying
                    system fits together.
                  </p>
                  <a
                    className="text-link"
                    href="https://github.com/GudisaSandeep/smart-class-monitoring-system"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore the project ↗
                  </a>
                </article>
                <article>
                  <div className="bio-milestone-icon">
                    <BiographyIcon kind="voice" />
                  </div>
                  <span className="eyebrow">
                    ASSISTIVE TECHNOLOGY / PUBLIC PROFILE
                  </span>
                  <h3>
                    Technology with
                    <br />
                    people in mind.
                  </h3>
                  <p>
                    My professional profile describes work on a voice-driven
                    virtual assistant for visually impaired users. It also
                    records an ETV Andhra Pradesh feature connected with the
                    assistive-technology work.
                  </p>
                  <p>
                    Accessibility, speech, and human interaction remain useful
                    contexts for thinking about what an AI application should
                    help someone do.
                  </p>
                  <a
                    className="text-link"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the professional profile ↗
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section bio-public-work">
          <div className="container">
            <div>
              <span className="eyebrow">WORK, IN THE OPEN</span>
              <h2>
                Build it.
                <br />
                Explain it.
                <br />
                <span className="blue">Keep learning.</span>
              </h2>
            </div>
            <div className="prose">
              <p>
                Alongside my project work, I share perspectives on AI
                development, browser workflows, and the experience of building
                software. My public repositories offer a place to inspect
                project documentation and understand the implementation context.
              </p>
              <p>
                The next layer of that work is explanation: architecture,
                demonstrations, decisions, and the lessons behind an
                application. I’m interested in making the connections clear
                enough for someone else to learn from them.
              </p>
              <div className="bio-profile-links">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>CODE & PROJECTS</span>
                  <strong>GitHub ↗</strong>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>PROFESSIONAL STORY</span>
                  <strong>LinkedIn ↗</strong>
                </a>
                <a
                  href={profile.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>SOCIAL PROFILE</span>
                  <strong>Threads ↗</strong>
                </a>
              </div>
            </div>
          </div>
        </section>
        <ProfileAnswers
          questions={biographyQuestions}
          showBiographyLink={false}
        />
      </main>
      <Footer />
    </>
  );
}
