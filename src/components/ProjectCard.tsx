import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * ProjectCard - Individual project display with hover animations
 * Features neon border glow on hover and CTA buttons
 */
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-card border-border hover:border-neon-blue/50 transition-all duration-300 hover:glow-blue">
        {/* Project Image - Placeholder gradient */}
        <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-background/80 group-hover:bg-background/60 transition-colors duration-300"></div>
          <span className="relative text-6xl font-heading font-bold text-muted-foreground/20">
            {index + 1}
          </span>
        </div>

        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-surface border border-border rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex-1 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:glow-blue"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code for ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                size="sm"
                asChild
                className="flex-1 bg-neon-purple text-background hover:bg-neon-purple/90 glow-purple hover:glow-purple-strong"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
