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
    isFeatured: true,
    featuredOrder: 1,
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
    architecture: {
      layers: [
        {
          id: "client",
          label: "Client",
          color: "#3b82f6",
          nodes: [
            { id: "react", name: "React + Vite", desc: "SPA — policy dashboard, KYC upload, claim submission UI" },
            { id: "tailwind", name: "Tailwind CSS", desc: "Utility-first styling for responsive layouts" },
            { id: "axios", name: "Axios", desc: "HTTP client — sends form data and polls claim status" }
          ]
        },
        {
          id: "api",
          label: "API Layer",
          color: "#8b5cf6",
          nodes: [
            { id: "fastapi", name: "FastAPI", desc: "REST API — handles auth, policy pricing, claim intake" },
            { id: "pydantic", name: "Pydantic", desc: "Request/response schema validation" },
            { id: "jwt", name: "JWT Auth", desc: "Stateless token-based authentication for all routes" },
            { id: "sqlalchemy", name: "SQLAlchemy ORM", desc: "Database abstraction layer over PostgreSQL" }
          ]
        },
        {
          id: "database",
          label: "Database",
          color: "#10b981",
          nodes: [
            { id: "postgres", name: "PostgreSQL", desc: "Persistent store for users, policies, and claim records" }
          ]
        },
        {
          id: "external",
          label: "External Services",
          color: "#f59e0b",
          nodes: [
            { id: "yolo", name: "YOLO Model", desc: "Deep learning model for visual claim damage detection" },
            { id: "tesseract", name: "Tesseract OCR", desc: "Extracts text from uploaded KYC identity documents" },
            { id: "razorpay", name: "Razorpay", desc: "Handles premium payments and payout disbursements" },
            { id: "web3", name: "Web3.py + Solidity", desc: "Smart contracts enforce policy terms and on-chain payouts" },
            { id: "cloudinary", name: "Cloudinary", desc: "Cloud storage and CDN for claim document images" }
          ]
        }
      ],
      flows: [
        { from: "client", to: "api", label: "HTTPS REST" },
        { from: "api", to: "database", label: "SQL via ORM" },
        { from: "api", to: "external", label: "ML inference / payments / blockchain" }
      ]
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
    architecture: {
      layers: [
        {
          id: "client",
          label: "Client",
          color: "#3b82f6",
          nodes: [
            { id: "react", name: "React", desc: "SPA — product catalog, cart, auth, checkout pages" },
            { id: "context", name: "React Context", desc: "Global cart state — persisted to localStorage" },
            { id: "tailwind", name: "Tailwind CSS", desc: "Responsive utility-first UI" },
            { id: "axios", name: "Axios", desc: "API calls to Express backend" }
          ]
        },
        {
          id: "api",
          label: "API Layer",
          color: "#8b5cf6",
          nodes: [
            { id: "express", name: "Express.js", desc: "REST API — product, auth, cart, order routes" },
            { id: "jwt", name: "JWT Middleware", desc: "Protects checkout and order routes" },
            { id: "mongoose", name: "Mongoose ODM", desc: "MongoDB schema definition and query layer" }
          ]
        },
        {
          id: "database",
          label: "Database",
          color: "#10b981",
          nodes: [
            { id: "mongo", name: "MongoDB", desc: "Document store — users, products, and orders" }
          ]
        },
        {
          id: "external",
          label: "External Services",
          color: "#f59e0b",
          nodes: [
            { id: "stripe", name: "Stripe", desc: "Secure payment processing at checkout" }
          ]
        }
      ],
      flows: [
        { from: "client", to: "api", label: "HTTPS REST" },
        { from: "api", to: "database", label: "Mongoose queries" },
        { from: "api", to: "external", label: "Stripe API calls" }
      ]
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
    isFeatured: true,
    featuredOrder: 2,
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
    architecture: {
      layers: [
        {
          id: "client",
          label: "Client",
          color: "#3b82f6",
          nodes: [
            { id: "react", name: "React", desc: "Chat UI — message history, input, loading state" },
            { id: "tailwind", name: "Tailwind CSS", desc: "Responsive chat interface styling" },
            { id: "axios", name: "Axios", desc: "Posts user messages to Flask API" }
          ]
        },
        {
          id: "api",
          label: "API Layer",
          color: "#8b5cf6",
          nodes: [
            { id: "flask", name: "Flask", desc: "Receives user query, builds prompt, calls Gemini, returns response" },
            { id: "sqlalchemy", name: "SQLAlchemy", desc: "Persists conversation history to database" },
            { id: "cors", name: "Flask-CORS", desc: "Allows cross-origin requests from React frontend" }
          ]
        },
        {
          id: "database",
          label: "Database",
          color: "#10b981",
          nodes: [
            { id: "db", name: "SQLite / PostgreSQL", desc: "Stores conversation sessions and message history" }
          ]
        },
        {
          id: "external",
          label: "External Services",
          color: "#f59e0b",
          nodes: [
            { id: "gemini", name: "Google Gemini API", desc: "LLM — generates health-scoped responses via engineered system prompt" }
          ]
        }
      ],
      flows: [
        { from: "client", to: "api", label: "HTTPS POST /chat" },
        { from: "api", to: "database", label: "Save conversation" },
        { from: "api", to: "external", label: "Gemini API call" }
      ]
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
    architecture: {
      layers: [
        {
          id: "client",
          label: "Client",
          color: "#3b82f6",
          nodes: [
            { id: "react", name: "React", desc: "Single-page app — all sections rendered as components" },
            { id: "framer", name: "Framer Motion", desc: "Scroll-triggered animations and modal transitions" },
            { id: "tailwind", name: "Tailwind CSS", desc: "Utility-first styling with CSS custom property theming" },
            { id: "shadcn", name: "shadcn/ui", desc: "Accessible Radix-based component primitives" }
          ]
        },
        {
          id: "api",
          label: "Build / Config",
          color: "#8b5cf6",
          nodes: [
            { id: "craco", name: "CRACO", desc: "Create React App config override — custom webpack plugins" },
            { id: "router", name: "React Router", desc: "Client-side routing — single / route for the portfolio" }
          ]
        },
        {
          id: "external",
          label: "External Services",
          color: "#f59e0b",
          nodes: [
            { id: "emailjs", name: "EmailJS", desc: "Sends contact form submissions directly from the browser — no backend" },
            { id: "vercel", name: "Vercel", desc: "CI/CD — auto-deploys on every push to main" },
            { id: "flask", name: "Python Flask (backend/)", desc: "Lightweight API server included in the repo" }
          ]
        }
      ],
      flows: [
        { from: "client", to: "api", label: "CRACO bundles React app" },
        { from: "client", to: "external", label: "EmailJS direct from browser" },
        { from: "api", to: "external", label: "Deployed via Vercel" }
      ]
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
    isFeatured: true,
    featuredOrder: 3,
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
    architecture: {
      layers: [
        {
          id: "client",
          label: "Client",
          color: "#3b82f6",
          nodes: [
            { id: "react", name: "React", desc: "SPA — student profile form, discovery results, scholarship listings" },
            { id: "tailwind", name: "Tailwind CSS", desc: "Responsive layout and component styling" },
            { id: "firebase_auth", name: "Firebase SDK", desc: "Client-side authentication with Firebase" }
          ]
        },
        {
          id: "api",
          label: "API Layer",
          color: "#8b5cf6",
          nodes: [
            { id: "express", name: "Express.js", desc: "REST API — profile-based filtering of universities and scholarships" },
            { id: "jwt", name: "JWT Middleware", desc: "Secures user-specific routes" },
            { id: "mongoose", name: "Mongoose ODM", desc: "Schema and query layer over MongoDB" }
          ]
        },
        {
          id: "database",
          label: "Database",
          color: "#10b981",
          nodes: [
            { id: "mongo", name: "MongoDB", desc: "Stores universities, scholarships, and user profile data" }
          ]
        },
        {
          id: "external",
          label: "External Services",
          color: "#f59e0b",
          nodes: [
            { id: "firebase", name: "Firebase Auth", desc: "Manages user sign-up, login, and session tokens" }
          ]
        }
      ],
      flows: [
        { from: "client", to: "api", label: "HTTPS REST" },
        { from: "api", to: "database", label: "Mongoose queries" },
        { from: "client", to: "external", label: "Firebase Auth SDK" }
      ]
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

// Timeline events — used in the Hackathons & Experience section
// Data is sourced only from verified project + hackathon entries already in this file.
export const timelineEvents = [
  {
    id: "antilabs",
    type: "hackathon",
    result: "Finalist",
    tier: "silver",
    org: "Antilabs",
    event: "Antilabs Hackathon",
    year: "2026",
    role: "Backend Developer",
    project: "ZenoGuard",
    projectId: 1,
    description: "Reached the finals building ZenoGuard — an AI-powered micro-insurance platform for gig workers. I designed and implemented the entire backend: FastAPI services, PostgreSQL schema, JWT auth, YOLO-based claim verification, and Razorpay payment integration.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "YOLO", "Tesseract OCR", "Razorpay", "Web3.py", "Solidity"],
    links: [
      { label: "GitHub", url: "https://github.com/Shreyas-patil07/ZenoGuard_final" },
      { label: "Live Demo", url: "https://zeno-guard.vercel.app/" },
    ],
  },
  {
    id: "rkdemy",
    type: "hackathon",
    result: "Winner",
    tier: "gold",
    org: "Rkdemy",
    event: "Rkdemy Hackathon",
    year: "2026",
    role: "Full Stack Developer",
    project: null,
    description: "Built and shipped a winning product from scratch within the hackathon time limit.",
    tech: [],
    links: [],
  },
  {
    id: "unifind",
    type: "project",
    result: "Shipped",
    tier: "neutral",
    org: "Team Gambit",
    event: "Collaborative Hackathon Project",
    year: "2026",
    role: "Frontend Developer & Firebase Integration",
    project: "UNIFIND",
    projectId: 4,
    description: "Collaborated with Team Gambit to build UNIFIND — a platform helping students discover universities, courses, and scholarships matched to their profile. Worked on React frontend, Firebase authentication, and API integration under hackathon time constraints.",
    tech: ["React", "Tailwind CSS", "Firebase", "Node.js", "Express.js", "MongoDB"],
    links: [
      { label: "GitHub", url: "https://github.com/Shreyas-patil07/UNIFIND" },
      { label: "Live", url: "https://www.teamgambit.tech/home" },
    ],
  },
  {
    id: "sih25",
    type: "hackathon",
    result: "Participated",
    tier: "neutral",
    org: "Ministry of Education · Govt. of India",
    event: "Smart India Hackathon 2025",
    year: "2025",
    role: "Participant",
    project: null,
    description: "Participated in India's largest national hackathon, solving real problem statements issued by government ministries and industry partners.",
    tech: [],
    links: [],
  },
  {
    id: "aws",
    type: "hackathon",
    result: "Participated",
    tier: "neutral",
    org: "Amazon Web Services",
    event: "AWS Bharat Hackathon",
    year: "2025",
    role: "Participant",
    project: null,
    description: "Participated in this national-level cloud-focused hackathon organised by Amazon Web Services, working with AWS services in a competitive build environment.",
    tech: ["AWS"],
    links: [],
  },
  {
    id: "google",
    type: "hackathon",
    result: "Participated",
    tier: "neutral",
    org: "Google Developers · NMIMS Mumbai",
    event: "Google Developer Hackathon",
    year: "2025",
    role: "Participant",
    project: null,
    description: "Took part in a 24-hour build sprint at NMIMS Mumbai, organised by Google Developers. Worked under pressure to design and prototype a product within the deadline.",
    tech: [],
    links: [],
  },
];

export const emailjsConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
