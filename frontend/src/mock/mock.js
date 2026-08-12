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
  { name: "JavaScript", category: "Languages", color: "#F7DF1E", short: "JS", bg: "#F7DF1E", text: "#000", icon: "javascript" },
  { name: "Python", category: "Languages", color: "#3776AB", short: "PY", bg: "#3776AB", text: "#FFD43B", icon: "python" },
  { name: "Java", category: "Languages", color: "#EA2D2E", short: "JV", bg: "#EA2D2E", text: "#fff", icon: "java" },
  { name: "C", category: "Languages", color: "#00599C", short: "C", bg: "#ffffff", text: "#00599C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg" },

  // Frontend
  { name: "React", category: "Frontend", color: "#61DAFB", short: "RE", bg: "#20232A", text: "#61DAFB", icon: "react" },
  { name: "Tailwind", category: "Frontend", color: "#06B6D4", short: "TW", bg: "#222", text: "#38BDF8", icon: "tailwindcss" },
  { name: "Bootstrap", category: "Frontend", color: "#7952B3", short: "BS", bg: "#7952B3", text: "#fff", icon: "bootstrap" },

  // Backend
  { name: "Node.js", category: "Backend", color: "#339933", short: "NJ", bg: "#222", text: "#68A063", icon: "nodejs" },
  { name: "Express", category: "Backend", color: "#ffffff", short: "EX", bg: "#1F1F1F", text: "#fff", icon: "express", invertIcon: true },
  { name: "Flask", category: "Backend", color: "#ffffff", short: "FL", bg: "#111", text: "#fff", icon: "flask", invertIcon: true },
  { name: "FastAPI", category: "Backend", color: "#009688", short: "FA", bg: "#222", text: "#009688", icon: "fastapi" },

  // Databases
  { name: "MongoDB", category: "Database", color: "#47A248", short: "MG", bg: "#0F3B1E", text: "#4DB33D", icon: "mongodb" },
  { name: "PostgreSQL", category: "Database", color: "#336791", short: "PG", bg: "#336791", text: "#fff", icon: "postgresql" },
  { name: "Firebase", category: "Database", color: "#FFCA28", short: "FB", bg: "#FFA000", text: "#fff", icon: "firebase" },

  // DevOps
  { name: "Docker", category: "DevOps", color: "#2496ED", short: "DK", bg: "#2496ED", text: "#fff", icon: "docker" },
  { name: "Kafka", category: "DevOps", color: "#231F20", short: "KF", bg: "#231F20", text: "#fff", icon: "apachekafka", invertIcon: true },
  { name: "Microservices", category: "DevOps", color: "#ffffff", short: "MS", bg: "#222", text: "#fff", icon: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/network.svg", invertIcon: true },

  // Tools
  { name: "Git", category: "Tools", color: "#F05032", short: "GT", bg: "#222", text: "#fff", icon: "git" },
  { name: "GitHub", category: "Tools", color: "#ffffff", short: "GH", bg: "#181717", text: "#fff", icon: "github", invertIcon: true },
  { name: "Postman", category: "Tools", color: "#FF6C37", short: "PM", bg: "#222", text: "#FF6C37", icon: "postman" },
  { name: "Groq AI", category: "AI", color: "#F55036", short: "GQ", bg: "#ffffff", text: "#F55036", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/lobe-icons/src/components/Groq/style/logo.svg" },
  { name: "Gemini", category: "AI", color: "#4285F4", short: "GE", bg: "#4285F4", text: "#fff", icon: "google" },
  { name: "Linux", category: "DevOps", color: "#FCC624", short: "LX", bg: "#222", text: "#fff", icon: "linux" },
  { name: "AWS", category: "DevOps", color: "#FF9900", short: "AWS", bg: "#232F3E", text: "#FF9900", icon: "amazonwebservices", invertIcon: false },
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
    title: "ZenoGuard",
    description: "AI-powered blockchain micro-insurance platform for gig workers. Built with personalized risk-based pricing, automated KYC verification, claim verification, and blockchain-enforced payouts. Backend: FastAPI + PostgreSQL + ML services + Web3.py",
    tech: ["React", "FastAPI", "PostgreSQL", "Solidity", "Web3.py", "Razorpay", "YOLO", "Cloudinary"],
    github: "https://github.com/Shreyas-patil07/ZenoGuard_final",
    live: "https://zeno-guard.vercel.app/",
    highlight: "Antilabs Hackathon",
    year: "2026",
    featured: {
      frontend: ["React", "Vite", "Tailwind CSS", "Axios"],
      backend: ["FastAPI", "SQLAlchemy", "JWT", "Pydantic", "YOLO DL Detection", "Tesseract OCR"]
    }
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce web application with product catalog, shopping cart, user authentication, and secure checkout. Designed with scalability and user experience in mind.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Atharva6153-git/E-Commerce",
    live: "https://e-commerce-apexgg.vercel.app/",
    highlight: "Commerce",
    year: "2026",
  },
  {
    id: 3,
    title: "B-Bot MedGuide",
    description: "An AI-powered medical assistance chatbot that helps users get preliminary health guidance. Integrates advanced language models for accurate, empathetic responses.",
    tech: ["Python", "Flask", "Gemini API", "React"],
    github: "https://github.com/Atharva6153-git/B-Bot-Medguide",
    live: "https://b-bot-medguide.onrender.com/",
    highlight: "AI / Health",
    year: "2026",
  },
  {
    id: 4,
    title: "UNIFIND",
    description: "A hackathon-winning platform that helps students discover universities, courses, and scholarships tailored to their profile. Collaborative project built under tight deadlines.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/Shreyas-patil07/UNIFIND",
    live: "https://www.teamgambit.tech/home",
    highlight: "Hackathon",
    year: "2026",
  },
];

export const stackNarratives = [
  {
    title: "Full Stack Apps",
    description: "End-to-end web apps from responsive UIs to scalable APIs and persistent data layers.",
    stack: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    color: "#61DAFB",
    icon: "layers",
  },
  {
    title: "AI-Powered Products",
    description: "Intelligent applications powered by LLMs — from medical chatbots to smart recommendation engines.",
    stack: ["Python", "Flask", "FastAPI", "Gemini API", "Groq AI"],
    color: "#A855F7",
    icon: "sparkles",
  },
  {
    title: "Scalable Infrastructure",
    description: "Production-grade architectures using containers, message queues, and microservice patterns.",
    stack: ["Docker", "Kafka", "Microservices", "AWS", "Linux"],
    color: "#F97316",
    icon: "server",
  },
];

export const hackathons = [
  {
    name: "Rkdemy Hackathon",
    result: "Winner",
    tier: "gold",
    description: "Built and shipped a winning product from scratch.",
    org: "Rkdemy",
  },
  {
    name: "Antilabs Hackathon",
    result: "Finalist",
    tier: "silver",
    description: "Shortlisted among top teams out of all participants.",
    org: "Antilabs",
  },
  {
    name: "Google Developer Hackathon",
    result: "Participated",
    tier: "neutral",
    description: "24-hour build sprint at NMIMS Mumbai, organized by Google Developers.",
    org: "Google Developers · NMIMS Mumbai",
  },
  {
    name: "AWS Bharat Hackathon",
    result: "Participated",
    tier: "neutral",
    description: "National-level cloud-focused hackathon organized by Amazon Web Services.",
    org: "Amazon Web Services",
  },
  {
    name: "Smart India Hackathon 2025",
    result: "Participated",
    tier: "neutral",
    description: "India's largest hackathon, solving real government and industry problem statements.",
    org: "Ministry of Education · Govt. of India",
  },
];

export const emailjsConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
