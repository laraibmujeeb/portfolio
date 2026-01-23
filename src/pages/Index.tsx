
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

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AnimatedSection animation="fadeUp">
          <About />
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={100}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={100}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={100}>
          <Education />
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={100}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={100}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
