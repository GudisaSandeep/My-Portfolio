const productionUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://sandeepgudisa.vercel.app/",
);
if (
  !["https:", "http:"].includes(productionUrl.protocol) ||
  productionUrl.pathname !== "/" ||
  productionUrl.search ||
  productionUrl.hash
) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, query, or fragment.",
  );
}

export const siteUrl = productionUrl.origin;
export const allowIndexing =
  process.env.SITE_NOINDEX !== "true" &&
  !["preview", "development"].includes(process.env.VERCEL_ENV || "");
export const absoluteUrl = (path: string) =>
  new URL(path, `${siteUrl}/`).toString();

export const profile = {
  name: "Sandeep Gudisa",
  alternateName: "Gudisa Sandeep",
  title: "AI Engineer & Founder of Fixyt",
  description:
    "Sandeep Gudisa is an AI engineer in Mumbai, founder of Fixyt, co-founder of WhiteSea Labs, and Software Development Engineer at Vector.",
  email: "sandeep.gudisa7@gmail.com",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/sandeepgudisa/",
  github: "https://github.com/GudisaSandeep",
  threads: "https://www.threads.com/@gudisasandeep",
  fixyt: "https://fixyt.in/",
  whitesea: "https://whitesealabs.com/",
} as const;

export const profileQuestions = [
  {
    question: "Who is Sandeep Gudisa?",
    answer:
      "Sandeep Gudisa is an AI engineer and software developer based in Mumbai, India. He is the founder of Fixyt, co-founder of WhiteSea Labs, and a Software Development Engineer at Vector.",
  },
  {
    question: "What is Fixyt, and who founded it?",
    answer:
      "Fixyt is a visual browser workspace founded by Sandeep Gudisa. It helps people organize tabs on a canvas and save and reopen their working context. Sandeep built and launched the product.",
  },
  {
    question: "What does Sandeep work on?",
    answer:
      "His work focuses on practical AI applications, agentic systems, browser automation, and product engineering. His portfolio also includes projects involving retrieval, computer vision, and multimodal interfaces.",
  },
  {
    question: "What is WhiteSea Labs?",
    answer:
      "WhiteSea Labs is a software engineering studio that helps businesses put AI to work. Sandeep Gudisa co-founded the studio in October 2026 and works on it part-time alongside his full-time Software Development Engineer role at Vector.",
  },
] as const;
