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
    },
    caseStudy: {
      overview: "ZenoGuard is an AI-powered micro-insurance platform built for gig economy workers who lack access to traditional insurance. The platform delivers personalized, risk-based insurance policies with automated KYC, claim verification via computer vision, and blockchain-enforced payouts.",
      problem: "Gig workers — delivery drivers, freelancers, and daily wage earners — are excluded from conventional insurance due to irregular income and lack of formal employment records. Claim fraud and manual verification delays make existing solutions economically unviable for this segment.",
      solution: "We built a full-stack platform that uses ML-based risk scoring to price policies individually, automates KYC using Tesseract OCR and document parsing, verifies claims through YOLO-based image detection, and processes payouts via Razorpay with Solidity smart contracts enforcing policy terms on-chain.",
      contribution: "I handled the entire backend architecture — FastAPI service design, PostgreSQL schema, SQLAlchemy ORM layer, JWT authentication, and integration of the YOLO-based claim verification pipeline. I also integrated Razorpay payment flows and coordinated API contracts with the frontend team.",
      keyFeatures: [
        "Risk-based dynamic policy pricing using ML scoring",
        "Automated KYC with Tesseract OCR document verification",
        "YOLO deep learning model for visual claim verification",
        "Solidity smart contracts for transparent payout enforcement",
        "Razorpay payment gateway for premium collection and disbursements",
        "Cloudinary image management for claim document uploads",
        "JWT-secured REST API with role-based access control"
      ],
      challenges: [
        {
          challenge: "Integrating YOLO inference inside a FastAPI service without blocking the event loop",
          solution: "Offloaded model inference to a background task using FastAPI's BackgroundTasks, returning a job ID immediately and polling for results."
        },
        {
          challenge: "Coordinating smart contract state with the off-chain PostgreSQL database",
          solution: "Used Web3.py event listeners to sync on-chain payout events back to the database, keeping both layers consistent."
        },
        {
          challenge: "Building and shipping a full production backend within the hackathon time limit",
          solution: "Prioritised API contracts early so frontend and backend could develop in parallel. Used Pydantic models as the single source of truth for request/response shapes."
        }
      ],
      outcome: "Submitted at Antilabs Hackathon where the team reached the finals. The platform demonstrated an end-to-end working flow from policy creation through claim verification to payout."
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
    featured: {
      frontend: ["React", "Tailwind CSS", "Axios"],
      backend: ["Express.js", "MongoDB", "JWT", "Stripe"]
    },
    caseStudy: {
      overview: "A full-stack e-commerce web application with a product catalog, shopping cart, user authentication, and secure checkout — built to practice and demonstrate end-to-end MERN stack development.",
      problem: "Learning e-commerce architecture requires handling state management across many moving parts: cart persistence, auth flows, protected routes, and payment integration. Most tutorials stop short of a production-grade implementation.",
      solution: "Built a complete MERN stack application with JWT-based authentication, a MongoDB product catalog, React context for cart state, and Stripe for checkout. Deployed the frontend on Vercel.",
      contribution: "Sole developer. Designed and built the full stack — Express REST API, MongoDB schemas, React UI, cart logic, auth middleware, and payment integration.",
      keyFeatures: [
        "Product catalog with search and category filtering",
        "Shopping cart with persistent state via React Context",
        "JWT-based user registration and login",
        "Protected checkout route requiring authentication",
        "Stripe payment gateway integration",
        "Responsive UI built with Tailwind CSS"
      ],
      challenges: [
        {
          challenge: "Keeping cart state in sync across page refreshes without a backend cart service",
          solution: "Persisted cart state to localStorage and rehydrated on load, so the cart survives refreshes without requiring a server round-trip."
        },
        {
          challenge: "Securing API routes without over-engineering middleware",
          solution: "Used a single reusable JWT verification middleware applied selectively to protected Express routes."
        }
      ],
      outcome: "A fully functional and deployed e-commerce application. Served as the foundation for understanding full-stack architecture patterns used in later, more complex projects."
    }
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
    featured: {
      frontend: ["React", "Tailwind CSS", "Axios"],
      backend: ["Flask", "Python", "Gemini API", "SQLAlchemy"]
    },
    caseStudy: {
      overview: "B-Bot MedGuide is an AI-powered health chatbot that provides users with preliminary medical guidance using Google Gemini's language model. The goal was to make basic health information more accessible through a conversational interface.",
      problem: "People often search for medical information across multiple unreliable sources. A conversational interface grounded in a capable LLM can provide clearer, contextual responses while clearly communicating that it is not a substitute for professional medical advice.",
      solution: "Built a Flask backend that routes user queries to the Gemini API with a system prompt constraining responses to health-related topics. The React frontend renders a chat-style interface with message history and loading states.",
      contribution: "Full-stack sole developer. Designed the Flask API, prompt engineering for medical context, Gemini API integration, SQLAlchemy conversation storage, and the React chat UI.",
      keyFeatures: [
        "Conversational chat interface with message history",
        "Google Gemini API integration with health-scoped system prompt",
        "Conversation persistence with SQLAlchemy",
        "Flask REST API with CORS handling for React frontend",
        "Empathetic response tone enforced through prompt design",
        "Deployed on Render with environment-based API key management"
      ],
      challenges: [
        {
          challenge: "Preventing the model from responding to off-topic or harmful queries",
          solution: "Crafted a detailed system prompt that scopes the model strictly to health guidance and instructs it to redirect off-topic questions."
        },
        {
          challenge: "Managing latency from the Gemini API in the chat UI",
          solution: "Added a typing indicator on the frontend while awaiting the API response, improving perceived responsiveness."
        }
      ],
      outcome: "A deployed, publicly accessible chatbot demonstrating LLM integration in a health context. Strengthened understanding of prompt engineering, Flask API design, and AI product UX patterns."
    }
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "A modern developer portfolio built with React, Tailwind CSS, and Framer Motion. Features a 3D interactive tech keyboard, animated sections, dark mode, project modals, hackathon showcase, and a working contact form via EmailJS.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    github: "https://github.com/Atharva6153-git/Portfolio",
    live: "https://portfolio-apexgg.vercel.app/",
    highlight: "Portfolio",
    year: "2026",
    featured: {
      frontend: ["React", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Lucide Icons"],
      backend: ["EmailJS", "Python Flask", "Vercel", "CRACO"]
    },
    caseStudy: {
      overview: "A personal developer portfolio designed to present projects, technical skills, and hackathon achievements in a clean, animated interface. Built from scratch with React and deployed on Vercel.",
      problem: "Generic portfolio templates don't communicate personal style or technical depth. The goal was to build something that feels designed — not assembled — and showcases frontend skills directly through the interface itself.",
      solution: "Designed and built a single-page portfolio with a component-per-section architecture. Used Framer Motion for scroll-triggered animations, shadcn/ui for accessible components, and a custom 3D CSS keyboard to display the tech stack interactively.",
      contribution: "Sole developer and designer. Every component, animation, layout decision, and data structure was built and iterated on personally.",
      keyFeatures: [
        "3D interactive tech keyboard with press-down animation and click-to-reveal tech names",
        "Scroll-triggered entrance animations using Framer Motion",
        "Project grid with expandable detail modals and case study drawer",
        "Hackathon achievements section with tiered gold/silver/neutral badges",
        "Stack narrative cards explaining how technologies connect to outcomes",
        "Dark mode with CSS custom properties",
        "Working contact form via EmailJS — no backend required",
        "Fully responsive across mobile and desktop"
      ],
      challenges: [
        {
          challenge: "Creating a convincing 3D keyboard with pure CSS and React — no 3D library",
          solution: "Used stacked absolutely-positioned div layers with translateZ to simulate depth, and Framer Motion variants for the press-down hover animation."
        },
        {
          challenge: "Repeated Vercel build failures due to package manager conflicts and JSON syntax errors",
          solution: "Audited package.json for trailing commas, removed the packageManager field to let Vercel auto-detect npm, deleted yarn.lock to force clean resolution, and removed all custom vercel.json overrides."
        }
      ],
      outcome: "Live at portfolio-apexgg.vercel.app. Used as the primary professional presence when applying for opportunities and sharing work."
    }
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
    featured: {
      frontend: ["React", "Tailwind CSS", "Firebase"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT"]
    },
    caseStudy: {
      overview: "UNIFIND is a student-focused discovery platform that helps users find universities, courses, and scholarships matched to their academic profile. Built as a collaborative hackathon project by Team Gambit.",
      problem: "Students researching higher education face fragmented information spread across dozens of websites. There was no single platform to filter universities and scholarships based on a student's specific academic background and preferences.",
      solution: "Built a web platform where students enter their profile details and receive filtered, relevant university and scholarship listings. Used Firebase for authentication, MongoDB for data storage, and Node.js/Express for the API layer.",
      contribution: "Worked on the frontend React components, Firebase authentication integration, and connecting the UI to the backend API. Collaborated with the team under hackathon time constraints to ship a working product.",
      keyFeatures: [
        "Profile-based university and course discovery",
        "Scholarship listings filtered by student eligibility",
        "Firebase authentication for secure user accounts",
        "MongoDB-backed data layer for universities and scholarships",
        "Node.js/Express REST API",
        "Responsive UI built with React and Tailwind CSS"
      ],
      challenges: [
        {
          challenge: "Coordinating frontend and backend development simultaneously within a hackathon",
          solution: "Agreed on API contracts upfront using mock data on the frontend, so both sides could build in parallel and integrate at the end."
        },
        {
          challenge: "Filtering relevant results without a recommendation engine",
          solution: "Implemented server-side query filtering based on user profile fields, which was fast to build and sufficient for the hackathon scope."
        }
      ],
      outcome: "Shipped a fully working platform within the hackathon deadline. The project is live at teamgambit.tech and remains accessible as a demonstration of the team's collaborative capability."
    }
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
