import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <section id="about">
        <About />
        <SkillsSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
