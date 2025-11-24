import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * About component - Professional summary section
 * Animated entrance when scrolled into view
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-surface/30"
      aria-label="About section"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">
            <span className="gradient-text">About</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Passionate about <strong className="text-foreground">Artificial Intelligence</strong>,{" "}
              <strong className="text-foreground">Machine Learning</strong>, and{" "}
              <strong className="text-foreground">Edge Computing</strong>, with a strong background in computer vision and deep
              learning. Experienced in developing AI models for real-time object detection, image classification, and pattern recognition.
            </p>

            <p>
              Conducted research on CNN and CLIP for movie genre classification, and currently focused on advancing AI-driven healthcare applications.
              Eager to contribute to the development of real-time AI systems and edge computing technologies for smart healthcare solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
