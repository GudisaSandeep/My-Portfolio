import { biographyProjects, biographySections } from "./biography";
import { absoluteUrl, profile } from "./site";
import { webPageSchema } from "./identity";

export const biographyPageSchema = {
  ...webPageSchema("/about", "About Sandeep Gudisa", "ProfilePage"),
  description:
    "The professional biography, career, nine project profiles, technical expertise, education, and public questions about Sandeep Gudisa, AI engineer and founder of Fixyt.",
  author: { "@id": absoluteUrl("/#person") },
  relatedLink: [
    profile.linkedin,
    profile.github,
    profile.threads,
    absoluteUrl("/projects/fixyt"),
  ],
  hasPart: biographySections.map((section) => ({
    "@type": "WebPageElement",
    "@id": absoluteUrl(`/about#${section.id}`),
    url: absoluteUrl(`/about#${section.id}`),
    name: section.name,
    isPartOf: { "@id": absoluteUrl("/about#webpage") },
    ...(section.id === "biography-projects"
      ? {
          mainEntity: {
            "@type": "ItemList",
            name: "Project profiles in Sandeep Gudisa’s biography",
            numberOfItems: biographyProjects.length,
            itemListElement: biographyProjects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "WebPageElement",
                "@id": absoluteUrl(`/about#project-${project.id}`),
                name: project.name,
                url: absoluteUrl(`/about#project-${project.id}`),
                description: project.summary,
              },
            })),
          },
        }
      : {}),
  })),
};
