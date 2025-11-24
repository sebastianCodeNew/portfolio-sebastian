/**
 * SEO utility functions and constants
 */

export const siteConfig = {
  name: "Sebastian Kurniawan Windu Wiwaha",
  title: "Sebastian Kurniawan Windu Wiwaha | AI Engineer & Data Scientist",
  description:
    "AI Engineer and Machine Learning Engineer specializing in Computer Vision, Deep Learning, and Edge Computing. Building intelligent systems for real-world applications.",
  url: "https://sebastian-portfolio.lovable.app", // Keeping existing URL structure
  ogImage: "https://sebastian-portfolio.lovable.app/og-image.png",
  links: {
    linkedin: "https://www.linkedin.com/in/sebastian-k-988b85221/",
    github: "https://github.com/sebastianCodeNew",
  },
};

/**
 * Generate JSON-LD Person schema for SEO
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sebastian Kurniawan Windu Wiwaha",
  jobTitle: "AI Engineer & Data Scientist",
  url: siteConfig.url,
  sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
  description: siteConfig.description,
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Edge AI",
    "Data Science",
  ],
};

/**
 * Inject JSON-LD schema into the page
 */
export const injectSchema = () => {
  if (typeof window === "undefined") return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(personSchema);
  document.head.appendChild(script);
};
