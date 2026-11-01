import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Sandeep Gudisa — AI Engineer",
  description:
    "AI Engineer building Agentic AI systems, RAG applications and real-world AI products. Grand Finalist at Smart India Hackathon 2024. Founder of MonoSid AI Therapy Platform.",
  icons: {
    icon: [{ url: "/mark.svg", type: "image/svg+xml" }],
    shortcut: "/mark.svg",
    apple: "/sandeep_hero_main.png",
  },
  openGraph: {
    title: "Sandeep Gudisa — AI Engineer",
    description:
      "AI Engineer • Builder • Problem Solver. Building intelligent systems that solve meaningful problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/space-grotesk-500.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-400.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
