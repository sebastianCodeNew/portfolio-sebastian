import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { experiences, education } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

/**
 * Timeline component - Experience and Education display
 * Vertical timeline with animated entrance and hover effects
 */
const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-20 px-4 bg-surface/30"
      aria-label="Experience and education timeline"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-2 text-neon-blue">
            <Briefcase className="h-6 w-6" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 border-border hover:border-neon-blue/50 transition-all duration-300 hover:glow-blue group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-foreground group-hover:text-neon-blue transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-neon-purple font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neon-blue mr-2">▹</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-2 text-neon-purple">
            <GraduationCap className="h-6 w-6" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 border-border hover:border-neon-purple/50 transition-all duration-300 hover:glow-purple group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-foreground group-hover:text-neon-purple transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-neon-blue font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
