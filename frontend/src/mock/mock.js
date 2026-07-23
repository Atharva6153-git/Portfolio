// Mock data for Atharva Jadhav's portfolio

export const personalInfo = {
  name: "Atharva Jadhav",
  role: "A Full Stack Developer",
  greeting: "Hi, I am",
  email: "atharvaj7822@gmail.com",
  linkedin: "https://www.linkedin.com/in/atharva-jadhav-8a0830334/",
  github: "https://github.com/Atharva6153-git",
  resumeUrl: "https://customer-assets-eiarnc6j.emergentagent.net/job_f3518247-f981-4f25-8ee1-a7fedc37f576/artifacts/pekzka57_Atharva%20Resume.pdf",
  about: "I'm a passionate Full Stack Developer who loves crafting clean, efficient, and scalable web applications. From building responsive interfaces with React to architecting robust backends with Node.js and Python, I enjoy every layer of the stack. I'm continually exploring modern architectures like microservices, event-driven systems with Kafka, and AI-powered experiences using Groq and Google Gemini APIs.",
  location: "India",
  availability: "Open to opportunities",
  profileImage: "https://customer-assets-lqy194kg.emergentagent.net/job_dev-atharva-1/artifacts/fssavhav_Atharva%20PFP.jpeg",
};

export const techStack = [
  // Languages
  { name: "JavaScript", category: "Languages", color: "#F7DF1E", short: "JS", bg: "#F7DF1E", text: "#000" },
  { name: "Python", category: "Languages", color: "#3776AB", short: "PY", bg: "#3776AB", text: "#FFD43B" },
  { name: "Java", category: "Languages", color: "#EA2D2E", short: "JV", bg: "#EA2D2E", text: "#fff" },
  { name: "C", category: "Languages", color: "#A8B9CC", short: "C", bg: "#283593", text: "#fff" },

  // Frontend
  { name: "React", category: "Frontend", color: "#61DAFB", short: "RE", bg: "#20232A", text: "#61DAFB" },
  { name: "Tailwind", category: "Frontend", color: "#06B6D4", short: "TW", bg: "#0F172A", text: "#38BDF8" },
  { name: "Bootstrap", category: "Frontend", color: "#7952B3", short: "BS", bg: "#7952B3", text: "#fff" },

  // Backend
  { name: "Node.js", category: "Backend", color: "#339933", short: "NJ", bg: "#1A2E1A", text: "#68A063" },
  { name: "Express", category: "Backend", color: "#000000", short: "EX", bg: "#1F1F1F", text: "#fff" },
  { name: "Flask", category: "Backend", color: "#000000", short: "FL", bg: "#111", text: "#fff" },
  { name: "FastAPI", category: "Backend", color: "#009688", short: "FA", bg: "#009688", text: "#fff" },

  // Databases
  { name: "MongoDB", category: "Database", color: "#47A248", short: "MG", bg: "#0F3B1E", text: "#4DB33D" },
  { name: "PostgreSQL", category: "Database", color: "#336791", short: "PG", bg: "#336791", text: "#fff" },
  { name: "Firebase", category: "Database", color: "#FFCA28", short: "FB", bg: "#FFA000", text: "#fff" },

  // DevOps
  { name: "Docker", category: "DevOps", color: "#2496ED", short: "DK", bg: "#2496ED", text: "#fff" },
  { name: "Kafka", category: "DevOps", color: "#231F20", short: "KF", bg: "#231F20", text: "#fff" },
  { name: "Microservices", category: "DevOps", color: "#4A5568", short: "MS", bg: "#4A5568", text: "#fff" },

  // Tools
  { name: "Git", category: "Tools", color: "#F05032", short: "GT", bg: "#F05032", text: "#fff" },
  { name: "GitHub", category: "Tools", color: "#181717", short: "GH", bg: "#181717", text: "#fff" },
  { name: "Postman", category: "Tools", color: "#FF6C37", short: "PM", bg: "#FF6C37", text: "#fff" },
  { name: "Groq AI", category: "AI", color: "#F55036", short: "GQ", bg: "#F55036", text: "#fff" },
  { name: "Gemini", category: "AI", color: "#4285F4", short: "GE", bg: "#4285F4", text: "#fff" },
];

export const techCategories = [
  {
    title: "Languages",
    items: ["C", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "FastAPI"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Architecture & DevOps",
    items: ["Microservices", "Apache Kafka", "Docker"],
  },
  {
    title: "Tools & APIs",
    items: ["Git", "GitHub", "Postman", "Groq AI API", "Google Gemini API"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Crypto Pulse",
    description: "A real-time cryptocurrency tracking application that provides live market data, price alerts, and portfolio management. Built with modern web technologies for a fast, responsive experience.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/Atharva6153-git/Crypto-Pulse",
    live: null,
    highlight: "Fintech",
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce web application with product catalog, shopping cart, user authentication, and secure checkout. Designed with scalability and user experience in mind.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Atharva6153-git/E-Commerce",
    live: null,
    highlight: "Commerce",
    year: "2024",
  },
  {
    id: 3,
    title: "B-Bot MedGuide",
    description: "An AI-powered medical assistance chatbot that helps users get preliminary health guidance. Integrates advanced language models for accurate, empathetic responses.",
    tech: ["Python", "Flask", "Gemini API", "React"],
    github: "https://github.com/Atharva6153-git/B-Bot-Medguide",
    live: null,
    highlight: "AI / Health",
    year: "2024",
  },
  {
    id: 4,
    title: "UNIFIND",
    description: "A hackathon-winning platform that helps students discover universities, courses, and scholarships tailored to their profile. Collaborative project built under tight deadlines.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/Shreyas-patil07/UNIFIND",
    live: null,
    highlight: "Hackathon",
    year: "2024",
  },
];

export const emailjsConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
