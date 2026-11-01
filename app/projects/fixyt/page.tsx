import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, profile } from "@/lib/site";
import {
  breadcrumbSchema,
  personId,
  fixytApplicationId,
  fixytOrganizationId,
  websiteId,
} from "@/lib/identity";

export const metadata = pageMetadata(
  "Fixyt — A Visual Browser Workspace Founded by Sandeep Gudisa",
  "Explore Fixyt, the visual browser workspace founded by Sandeep Gudisa. Discover the product’s purpose, saved workspaces, and approach to browser-based work.",
  "/projects/fixyt",
);

const projectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/projects/fixyt#webpage"),
      url: absoluteUrl("/projects/fixyt"),
      name: "Fixyt — Founded by Sandeep Gudisa",
      description:
        "The story of Fixyt, a visual browser workspace founded, built, and launched by Sandeep Gudisa.",
      about: { "@id": fixytApplicationId },
      author: { "@id": personId },
      isPartOf: { "@id": websiteId },
    },
    {
      "@type": "SoftwareApplication",
      "@id": fixytApplicationId,
      name: "Fixyt",
      url: profile.fixyt,
      description:
        "A visual browser workspace for organizing tabs on a canvas and saving working context.",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Chromium-based browsers",
      image: absoluteUrl("/project_screenshots/fixyt.png"),
      creator: { "@id": personId },
      publisher: { "@id": fixytOrganizationId },
    },
  ],
};

export default function FixytPage() {
  return (
    <>
      <StructuredData data={projectSchema} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fixyt", path: "/projects/fixyt" },
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
              <span aria-current="page">Fixyt</span>
            </nav>
            <div className="section-topline">
              <span className="eyebrow">
                PRODUCT / FOUNDED BY SANDEEP GUDISA
              </span>
              <span className="section-aside">BUILT & LAUNCHED</span>
            </div>
            <h1 className="product-detail-title">
              A workspace for
              <br />
              the way you <span className="blue">think.</span>
            </h1>
            <div className="product-detail-lead">
              <p>
                <strong>Fixyt</strong> is a visual browser workspace founded by
                Sandeep Gudisa. It brings browser tabs and saved working context
                into a canvas, giving people a way to organize related pages
                around a project.
              </p>
              <a
                className="button button-primary"
                href={profile.fixyt}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit fixyt.in ↗
              </a>
            </div>
            <div className="product-detail-image">
              <Image
                src="/project_screenshots/fixyt.png"
                alt="Fixyt visual browser workspace product website"
                width={1400}
                height={850}
                sizes="(max-width: 650px) 90vw, 85vw"
                priority
              />
            </div>
            <div className="product-facts">
              <div>
                <span>FOUNDER</span>
                <Link href="/about">Sandeep Gudisa ↗</Link>
              </div>
              <div>
                <span>PRODUCT</span>
                <strong>Visual browser workspace</strong>
              </div>
              <div>
                <span>STATUS</span>
                <strong>Built & launched</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="section detail-story">
          <div className="container detail-story-grid">
            <div>
              <span className="eyebrow">THE PRODUCT STORY</span>
              <h2>
                Keep the context.
                <br />
                Find your flow<span className="blue">.</span>
              </h2>
            </div>
            <div className="prose">
              <h3>Why I built Fixyt</h3>
              <p>
                Research, development, and planning often happen across many web
                pages. A row of tabs can show what is open, but it does little
                to express how those pages fit together. Fixyt approaches that
                problem as one of workspace organization.
              </p>
              <h3>From a tab list to a visual workspace</h3>
              <p>
                Fixyt’s product site describes a spatial canvas where related
                tabs can be arranged and connected. Saved workspaces let a user
                return to a working context. Layout tools, notes, and checklists
                help keep supporting information close to the work.
              </p>
              <h3>My role</h3>
              <p>
                I am Sandeep Gudisa, the founder of Fixyt. I built and launched
                the product, bringing together browser-extension engineering and
                a visual approach to web productivity. The initial build is
                complete; that milestone is separate from future maintenance and
                product development.
              </p>
              <h3>The connection to my wider work</h3>
              <p>
                Fixyt sits alongside my work on browser agents and AI tooling.
                Those projects examine how software can help people work across
                interfaces and tools. Fixyt itself is presented here as a
                browser workspace product, without assuming that every product
                capability is AI-powered.
              </p>
              <h3>Explore the current product</h3>
              <p>
                For the current feature set, installation options,
                compatibility, and pricing, visit the{" "}
                <a
                  href={profile.fixyt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official Fixyt website
                </a>
                . This portfolio describes my relationship to the product and
                its purpose; the product site is the reference for current
                availability.
              </p>
              <div className="profile-answer-links">
                <Link className="text-link" href="/about">
                  About the founder ↗
                </Link>
                <Link className="text-link" href="/#projects">
                  More selected work ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
