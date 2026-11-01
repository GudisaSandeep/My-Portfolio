import Image from "next/image";
import portrait from "@/public/WhatsApp Image 2026-11-01 at 12.42.26 PM.jpeg";

export default function HeroPortrait() {
  return (
    <figure className="hero-portrait">
      <div className="hero-portrait-label">
        <span>
          <span className="status-dot" /> THE PERSON BEHIND THE SYSTEMS
        </span>
        <span aria-hidden="true">01 / SG</span>
      </div>
      <div className="hero-portrait-photo">
        <Image
          src={portrait}
          alt="Sandeep Gudisa standing beside the waterfront at night"
          sizes="(max-width: 650px) calc(100vw - 64px), (max-width: 1100px) 42vw, 460px"
          placeholder="blur"
          priority
        />
        <svg
          className="hero-portrait-star"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M20 2v36M2 20h36M7.3 7.3l25.4 25.4M7.3 32.7 32.7 7.3" />
        </svg>
        <a
          href="#contact"
          className="hero-portrait-link"
          aria-label="Get in touch with Sandeep"
        >
          LET’S BUILD <span aria-hidden="true">↗</span>
        </a>
      </div>
      <figcaption className="hero-portrait-caption">
        <span>Sandeep Gudisa</span>
        <span>AI ENGINEER &amp; BUILDER</span>
      </figcaption>
    </figure>
  );
}
