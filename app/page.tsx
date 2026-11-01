import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contributions from "@/components/Contributions";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import ProfileAnswers from "@/components/ProfileAnswers";
import StructuredData from "@/components/StructuredData";
import { webPageSchema } from "@/lib/identity";

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={webPageSchema(
          "/",
          "Sandeep Gudisa — AI Engineer & Founder of Fixyt",
        )}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Achievements />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contributions />
        <ProfileAnswers />
      </main>
      <Footer />
    </>
  );
}
