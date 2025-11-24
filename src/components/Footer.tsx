import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/seo";

/**
 * Footer component - Site footer with social links and copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 border-t border-border py-8 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
              aria-label="Visit GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
