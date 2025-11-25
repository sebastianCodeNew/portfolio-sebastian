/**
 * Portfolio data - projects, experience, education, skills
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export const projects: Project[] = [
  {
    id: "film-genre-prediction",
    title: "Film Genre Prediction (CNN + CLIP)",
    description:
      "AI-powered movie genre prediction using state-of-the-art CLIP and BERT models. Research on Implementation of Convolutional Neural Network (CNN) and Contrastive Language-Image Pretraining (CLIP) for film genre prediction based on poster analysis. Published in Jurnal Dharmawangsa.",
    techStack: ["Python", "CNN", "CLIP", "BERT", "Deep Learning", "Next.js", "FastAPI"],
    github: "https://github.com/sebastianCodeNew",
    demo: "https://clip-movie-classifier.vercel.app/",
    image: "/images/film-genre-app.png",
  },
  {
    id: "lpr-system",
    title: "License Plate Recognition System",
    description:
      "Developed an AI-powered license plate recognition system, implementing OCR and computer vision techniques for automated vehicle identification.",
    techStack: ["Python", "OCR", "Computer Vision", "AI"],
    github: "https://github.com/sebastianCodeNew",
    image: "/images/project-lpr.jpg",
  },
  {
    id: "bangkit-capstone",
    title: "Bangkit Capstone Project",
    description:
      "Collaborative capstone project applying machine learning and data science techniques to address real-world problems. Built production-level AI models and pipelines.",
    techStack: ["Machine Learning", "Data Science", "Python", "TensorFlow"],
    github: "https://github.com/sebastianCodeNew",
    image: "/images/project-fraud.jpg", // Placeholder
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Indosat Ooredoo Hutchicon Digital Camp",
    role: "AI Engineer Learner",
    period: "Sep 2025 - Present",
    description: [
      "Building production-level AI models and pipelines (classification, regression, generative models).",
      "Following best practices in model validation, tuning, and version control.",
      "Developing and integrating AI modules into real or mock applications through the AI Integration Track.",
      "Collaborating with cross-disciplinary teams on capstone projects.",
    ],
  },
  {
    id: "exp-2",
    company: "Bank Central Asia",
    role: "AI Engineer Internship",
    period: "May 2025 - Aug 2025",
    description: [
      "Engineered end-to-end AI pipelines for financial and banking use cases.",
      "Developed robust preprocessing workflows for large-scale financial datasets.",
      "Integrated machine learning models into banking systems, collaborating with data engineering and DevOps teams.",
    ],
  },
  {
    id: "exp-3",
    company: "DB Klik",
    role: "Data Science Internship",
    period: "Jan 2025 - Apr 2025",
    description: [
      "Conducted data analysis on advertising performance to extract key insights.",
      "Developed and implemented machine learning models to improve ad targeting and audience segmentation.",
      "Collaborated with cross-functional teams to translate business needs into data-driven solutions.",
    ],
  },
  {
    id: "exp-4",
    company: "Qarir Generator",
    role: "Data Science Learner",
    period: "Oct 2024 - Mar 2025",
    description: [
      "Completed intensive project-based Data Science training.",
      "Executed end-to-end data analysis projects using Python (Pandas, Matplotlib, Scikit-learn).",
      "Participated in weekly mentoring sessions and code reviews.",
    ],
  },
  {
    id: "exp-5",
    company: "Indosat Ooredoo Hutchicon Digital Camp",
    role: "Data Science Learner",
    period: "Aug 2024 - Jan 2025",
    description: [
      "Mastered SQL fundamentals for database management.",
      "Learned Python programming for data analysis and visualization.",
      "Gained understanding of machine learning algorithms and built basic ML models.",
    ],
  },
  {
    id: "exp-6",
    company: "Bank DBS",
    role: "Machine Learning Cohort",
    period: "Jan 2025 - Jul 2025",
    description: [
      "Participated in industry-grade bootcamp covering Python, SQL, and ML applications.",
      "Sponsored by DBS Foundation and Dicoding.",
    ],
  },
  {
    id: "exp-7",
    company: "Sanata Dharma University",
    role: "Teaching Assistant",
    period: "Feb 2024 - Jun 2024",
    description: [
      "Collaborated to develop OOP curriculum materials using Java.",
      "Facilitated hands-on sessions applying OOP principles.",
      "Provided constructive feedback on assignments focusing on logic and best practices.",
    ],
  },
  {
    id: "exp-8",
    company: "Google | Gojek | Tokopedia | Traveloka (Bangkit)",
    role: "Machine Learning Cohort",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Gained expertise in foundational and advanced machine learning concepts.",
      "Participated in collaborative capstone project addressing real-world problems.",
      "Received training in soft skills and industry knowledge.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Universitas Sanata Dharma - Indonesia",
    degree: "Bachelor of Computer Science",
    period: "Aug 2021 - Apr 2025",
    description: "GPA: 3.65/4.00. Research on AI-based movie genre classification.",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Deep Learning (CNN, CLIP)", level: 90 },
      { name: "Computer Vision (Object Detection, OCR)", level: 90 },
      { name: "TensorFlow / TensorFlow Lite", level: 85 },
      { name: "Supervised/Unsupervised Learning", level: 88 },
      { name: "Edge Computing", level: 80 },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Python (Pandas, Scikit-learn)", level: 95 },
      { name: "Data Visualization (Matplotlib)", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Data Analysis & Preprocessing", level: 90 },
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      { name: "Java (OOP)", level: 85 },
      { name: "Git & GitHub", level: 88 },
      { name: "Model Deployment", level: 80 },
      { name: "API Integration", level: 82 },
    ],
  },
];
