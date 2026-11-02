import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen font-sans bg-[#06060f] noise-overlay">
        {/* Cursor Glow */}
        <div
          className="cursor-glow hidden md:block"
          style={{ left: mousePos.x, top: mousePos.y }}
        />

        <Navbar />
        <main>
          <Hero />
          <div className="gradient-line" />
          <AnimatedSection animation="fadeUp">
            <About />
          </AnimatedSection>
          <div className="gradient-line" />
          <AnimatedSection animation="fadeUp" delay={100}>
            <Projects />
          </AnimatedSection>
          <div className="gradient-line" />
          <AnimatedSection animation="fadeUp" delay={100}>
            <Experience />
          </AnimatedSection>
          <div className="gradient-line" />
          <AnimatedSection animation="fadeUp" delay={100}>
            <Education />
          </AnimatedSection>
          <div className="gradient-line" />
          <AnimatedSection animation="fadeUp" delay={100}>
            <Skills />
          </AnimatedSection>
          <div className="gradient-line" />
          <AnimatedSection animation="fadeUp" delay={100}>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
