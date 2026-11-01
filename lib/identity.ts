import { absoluteUrl, profile } from "./site";

export const personId = absoluteUrl("/#person");
export const websiteId = absoluteUrl("/#website");
export const fixytOrganizationId = "https://fixyt.in/#organization";
export const fixytApplicationId = "https://fixyt.in/#application";

export const identityGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: profile.alternateName,
      url: absoluteUrl("/about"),
      image: absoluteUrl("/sandeep_hero_main.png"),
      description: profile.description,
      jobTitle: [
        "AI Engineer",
        "Software Development Engineer",
        "Founder of Fixyt",
        "Co-Founder of WhiteSea Labs",
      ],
      sameAs: [profile.linkedin, profile.github, profile.threads],
      knowsAbout: [
        "AI application development",
        "Agentic systems",
        "Browser automation",
        "Model Context Protocol",
        "Software product engineering",
      ],
      workLocation: { "@type": "City", name: "Mumbai" },
      worksFor: [
        { "@type": "Organization", name: "Vector" },
        { "@id": "https://whitesealabs.com/#organization" },
        { "@id": fixytOrganizationId },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: absoluteUrl("/"),
      name: profile.name,
      description: profile.description,
      inLanguage: "en-IN",
      publisher: { "@id": personId },
    },
    {
      "@type": "Organization",
      "@id": fixytOrganizationId,
      name: "Fixyt",
      url: profile.fixyt,
      description:
        "A visual browser workspace for organizing tabs and saving working context.",
      founder: { "@id": personId },
    },
    {
      "@type": "Organization",
      "@id": "https://whitesealabs.com/#organization",
      name: "WhiteSea Labs",
      url: profile.whitesea,
      description:
        "WhiteSea Labs is a software engineering studio that helps businesses put AI to work.",
      founder: { "@id": personId },
    },
  ],
};

export function webPageSchema(path: string, name: string, type = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    ...(type === "ProfilePage" ? { mainEntity: { "@id": personId } } : {}),
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
