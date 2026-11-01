import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroPortrait from "@/components/HeroPortrait";
import ProfileAnswers from "@/components/ProfileAnswers";
import StructuredData from "@/components/StructuredData";
import { pageMetadata } from "@/lib/seo";
import { profile } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/identity";

export const metadata = pageMetadata(
  "About Sandeep Gudisa | AI Engineer & Founder of Fixyt",
  "Meet Sandeep Gudisa: Mumbai-based AI engineer, founder of Fixyt, co-founder of WhiteSea Labs, and Software Development Engineer at Vector.",
  "/about",
);

export default function BiographyPage() {
  return (
    <>
      <StructuredData
        data={webPageSchema("/about", "About Sandeep Gudisa", "ProfilePage")}
      />
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
      <main id="main-content">
        <section className="section detail-intro">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About</span>
            </nav>
            <div className="detail-hero-grid">
              <div>
                <p className="eyebrow">BIOGRAPHY / MUMBAI, INDIA</p>
                <h1>
                  Sandeep
                  <br />
                  Gudisa<span className="blue">.</span>
                </h1>
                <p className="detail-deck">
                  AI engineer. Founder of Fixyt.
                  <br />
                  Co-founder of WhiteSea Labs.
                </p>
                <p className="detail-introduction">
                  I connect AI with the tools and workflows people use every
                  day. My work spans agentic systems, browser automation, and
                  practical software products.
                </p>
                <div className="hero-actions">
                  <a
                    className="button button-primary"
                    href={profile.fixyt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Fixyt ↗
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
              </div>
              <HeroPortrait />
            </div>
          </div>
        </section>
        <section className="section detail-story">
          <div className="container detail-story-grid">
            <div>
              <span className="eyebrow">THE PROFESSIONAL STORY</span>
              <h2>
                Models, tools,
                <br />
                and useful products<span className="blue">.</span>
              </h2>
            </div>
            <div className="prose">
              <p>
                Sandeep Gudisa, also known as Gudisa Sandeep, is an AI engineer
                and software developer based in Mumbai, India. He is the founder
                of <a href={profile.fixyt}>Fixyt</a>, a visual browser
                workspace, and co-founder of{" "}
                <a href={profile.whitesea}>WhiteSea Labs</a>, a software
                engineering studio that helps businesses put AI to work.
              </p>
              <p>
                Since October 2026, he has worked full-time as a Software
                Development Engineer at Vector. He co-founded WhiteSea Labs in
                the same month and contributes to the studio part-time.
              </p>
              <p>
                His engineering interests centre on connecting intelligent
                models with real software environments. Browser agents need a
                representation of the page and a set of actions. Developer
                agents need an interface to files and tools. AI applications
                need an interface, application logic, and a clear purpose
                alongside the model.
              </p>
              <p>
                Fixyt brings that product focus to the browser. Sandeep founded,
                built, and launched the product to help people organize
                browser-based work visually. Its canvas and saved workspaces
                offer a way to keep related pages and project context together.
              </p>
              <p>
                His broader portfolio includes browser-agent software,
                Cline-related MCP workspace tooling, résumé applications,
                classroom computer vision, and multimodal assistants. The
                Cline-related work builds on an existing open-source project;
                the upstream project and Sandeep’s individual contributions
                remain distinct.
              </p>
              <p>
                His academic background is in computer science with an AI and
                machine-learning specialization at Andhra Loyola Institute of
                Engineering and Technology, Vijayawada. Today, his focus remains
                practical: turning ideas into understandable, usable software.
              </p>
              <Link href="/#projects" className="text-link">
                Explore the project portfolio ↗
              </Link>
            </div>
          </div>
        </section>
        <section className="section detail-roles">
          <div className="container">
            <div className="section-topline">
              <span className="eyebrow">CURRENT ROLES</span>
              <span className="section-aside">
                ENGINEERING & ENTREPRENEURSHIP
              </span>
            </div>
            <div className="detail-role-grid">
              <article>
                <span className="eyebrow">FOUNDER / BUILT & LAUNCHED</span>
                <h2>Fixyt</h2>
                <p>
                  A visual browser workspace for organizing tabs and returning
                  to a saved working context.
                </p>
                <Link className="text-link" href="/projects/fixyt">
                  Read the product story ↗
                </Link>
              </article>
              <article>
                <span className="eyebrow">CO-FOUNDER / PART-TIME</span>
                <h2>WhiteSea Labs</h2>
                <p>
                  A software engineering studio that helps businesses put AI to
                  work. Co-founded in October 2026.
                </p>
                <a
                  className="text-link"
                  href={profile.whitesea}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  whitesealabs.com ↗
                </a>
              </article>
              <article>
                <span className="eyebrow">SOFTWARE DEVELOPMENT ENGINEER</span>
                <h2>Vector</h2>
                <p>
                  Full-time Software Development Engineer since October 2026,
                  alongside a continuing focus on practical software
                  engineering.
                </p>
                <Link className="text-link" href="/#experience">
                  View the professional timeline ↗
                </Link>
              </article>
            </div>
          </div>
        </section>
        <ProfileAnswers />
      </main>
      <Footer />
    </>
  );
}
