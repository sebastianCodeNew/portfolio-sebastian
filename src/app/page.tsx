"use client";

import { useEffect } from "react";
import { injectSchema } from "@/lib/seo";
import SkipToContent from "@/components/SkipToContent";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    injectSchema();
  }, []);

  return (
    <>
      <SkipToContent />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
