import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/seo";

/**
 * Hero component - Main landing section with animated entrance
 * Features gradient text, CTA buttons with glow effects, and social links
 */
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight"
        >
          <span className="gradient-text">Sebastian Kurniawan</span>
          <br />
          <span className="gradient-text">Windu Wiwaha</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          AI Engineer | Machine Learning Engineer | Data Science
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-neon-blue text-background hover:bg-neon-blue/90 glow-blue transition-all duration-300 hover:glow-blue-strong font-semibold"
            aria-label="Scroll to projects section"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:glow-purple transition-all duration-300 font-semibold"
            aria-label="Scroll to contact section"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 justify-center"
        >
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
            aria-label="Visit GitHub profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
