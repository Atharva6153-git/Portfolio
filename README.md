<div align="center">

# Atharva Jadhav — Developer Portfolio

**Full Stack Developer · Mumbai, India**

[🌐 Live Site](https://portfolio-apexgg.vercel.app/) &nbsp;·&nbsp;
[📫 Email](mailto:atharvaj7822@gmail.com) &nbsp;·&nbsp;
[💼 LinkedIn](https://www.linkedin.com/in/atharva-jadhav-8a0830334/) &nbsp;·&nbsp;
[🐙 GitHub](https://github.com/Atharva6153-git)

</div>

---

## About

Personal developer portfolio for **Atharva Jadhav**, a Computer Engineering student (B.E. 2024–2028) from Mumbai specialising in full-stack development, microservices architecture, and AI-integrated applications.

The site presents projects, hackathon experience, tech stack, GitHub activity, and contact information in a clean, animated single-page layout. Every section is data-driven through a central `mock.js` file, making content updates straightforward without touching component logic.

**Live at:** https://portfolio-apexgg.vercel.app/

---

## Features

- **3D interactive tech keyboard** — hero section keyboard built with pure CSS 3D transforms and stacked `div` layers. No Three.js or WebGL. Each key is clickable and shows the technology name.
- **Dark / Light theme** — system-aware default with a manual toggle. Theme state managed via React Context.
- **Project case studies** — each project card opens a full case study modal with: overview, problem statement, solution, contribution, architecture diagram, key features, challenges, outcome, and links.
- **Interactive architecture diagrams** — per-project diagrams rendered in pure React/CSS showing real data flow layers (Client → API → Database → External Services) with hover tooltips on each node.
- **Featured projects section** — three highlighted projects displayed as large horizontal cards above the full project grid.
- **Hackathons & Experience timeline** — vertical timeline of all six hackathon/project events with expandable tech and links per entry.
- **GitHub section** — live data from the GitHub API: public repos, followers, total stars, language breakdown bar, top 6 repos by stars. Graceful fallback UI on API failure.
- **Currently Learning** — three-track learning status (Learning / Improving / Next Goal) embedded in the About section.
- **Working contact form** — EmailJS integration sends messages directly to inbox with no backend required.
- **SEO** — meta description, Open Graph, Twitter Card, JSON-LD Person schema, canonical URL, robots.txt, sitemap.xml.
- **Fully responsive** — mobile-first layout across all sections.

---

## Tech Stack

### Frontend

| Category | Technologies |
|---|---|
| Framework | React 19 |
| Styling | Tailwind CSS 3.4, CSS custom properties |
| Animations | Framer Motion 12 |
| Component library | shadcn/ui (Radix UI primitives) |
| Icons | Lucide React |
| Routing | React Router 7 |
| Forms | React Hook Form + Zod |
| Build tool | Create React App + CRACO |
| Email | EmailJS (browser-side, no backend) |

### Backend (scaffold — not used by the live frontend)

The `backend/` directory contains a FastAPI + MongoDB scaffold that was part of the original project template. It is **not connected to the deployed portfolio frontend**. The frontend runs entirely standalone.

| Technology | Version |
|---|---|
| FastAPI | 0.110.1 |
| Uvicorn | 0.25.0 |
| Motor (async MongoDB) | 3.3.1 |
| Pydantic | ≥ 2.6.4 |
| Python-dotenv | ≥ 1.0.1 |

### Deployment

| Service | Purpose |
|---|---|
| Vercel | Frontend hosting + CI/CD (auto-deploy on push to `main`) |
| GitHub | Source control |

---

## Project Structure

```
Portfolio/
├── frontend/                        # React application (deployed)
│   ├── public/
│   │   ├── index.html               # Full SEO meta tags, OG, Twitter Card, JSON-LD
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Fixed nav with theme toggle + fullscreen menu
│   │   │   ├── Hero.jsx             # Landing section + 3D keyboard + social links
│   │   │   ├── TechKeyboard.jsx     # Pure CSS 3D isometric keyboard component
│   │   │   ├── About.jsx            # Bio, stats, Currently Learning tracks
│   │   │   ├── Achievements.jsx     # Stack narrative cards + hackathon badges
│   │   │   ├── Experience.jsx       # Vertical hackathon/project timeline
│   │   │   ├── GitHubSection.jsx    # Live GitHub API data — repos, languages, stats
│   │   │   ├── Projects.jsx         # Featured cards + grid + case study modals
│   │   │   │                        #   └─ includes ArchitectureDiagram component
│   │   │   ├── Contact.jsx          # EmailJS contact form + social link cards
│   │   │   ├── Footer.jsx
│   │   │   └── ui/                  # shadcn/ui primitives (auto-generated)
│   │   ├── context/
│   │   │   └── ThemeContext.jsx     # Dark/light theme state
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── mock/
│   │   │   └── mock.js              # Single source of truth for all content
│   │   ├── lib/
│   │   │   └── utils.js
│   │   ├── App.js                   # Root component + route
│   │   ├── App.css                  # Global styles, keyboard CSS, achievement CSS
│   │   └── index.css                # Tailwind directives + CSS variable tokens
│   ├── .env.example
│   ├── craco.config.js
│   ├── jsconfig.json
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js (auto-generated by shadcn)
│
├── backend/                         # FastAPI scaffold (not connected to frontend)
│   ├── server.py                    # FastAPI app with /api/status endpoints
│   ├── requirements.txt
│   └── pytest.ini
│
└── README.md
```

---

## Running Locally

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Frontend setup

```bash
# 1. Clone the repository
git clone https://github.com/Atharva6153-git/Portfolio.git
cd Portfolio/frontend

# 2. Install dependencies
npm install
# or
yarn install

# 3. Copy the environment file
cp .env.example .env

# 4. Fill in your EmailJS credentials (see Environment Variables below)
# The site works without them — the contact form will log to console instead

# 5. Start the dev server
npm start
```

Open **http://localhost:3000**

### Backend setup (optional)

The backend is a standalone FastAPI service not connected to the portfolio frontend. You only need this if you want to run or extend the API scaffold.

```bash
cd Portfolio/backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create a .env file with required variables
# (see Environment Variables below)

# Start the server
uvicorn server:app --reload --port 8001
```

API will be available at **http://localhost:8001/api**

---

## Environment Variables

### Frontend — `frontend/.env`

```env
# Backend URL (only needed if connecting the FastAPI backend)
REACT_APP_BACKEND_URL=http://localhost:8001

# Required for the WebSocket dev server on some setups
WDS_SOCKET_PORT=443

# EmailJS — get these at https://www.emailjs.com/
# Without these, the contact form logs to console instead of sending
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Setting up EmailJS:**

1. Sign up at [emailjs.com](https://www.emailjs.com/) — free tier is 200 emails/month
2. Connect your Gmail as an Email Service
3. Create a template with variables: `{{name}}`, `{{phone}}`, `{{doubt}}`
4. Copy your Service ID, Template ID, and Public Key into `.env`

### Backend — `backend/.env`

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
CORS_ORIGINS=http://localhost:3000
```

---

## Deployment

The frontend deploys to Vercel automatically on every push to `main`.

### Manual Vercel setup (first time)

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository
2. Set **Root Directory** to `frontend` — this is required, the build will fail without it
3. Vercel auto-detects Create React App and sets the build command to `npm run build`
4. Add environment variables under **Settings → Environment Variables**:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**

**No `vercel.json` is needed.** The project relies on Vercel's auto-detection for CRA.

### What's deployed

Only the `frontend/` directory is deployed. The `backend/` directory is not connected to the live site.

---

## Content Updates

All portfolio content — projects, hackathons, skills, personal info, timeline events, and learning tracks — lives in a single file:

```
frontend/src/mock/mock.js
```

To update content, edit that file and push. Vercel redeploys automatically.

**Key exports in `mock.js`:**

| Export | Used by |
|---|---|
| `personalInfo` | Hero, About, Contact, Footer |
| `projects` | Projects (cards, modals, case studies, architecture) |
| `techStack` | TechKeyboard |
| `hackathons` | Achievements |
| `timelineEvents` | Experience timeline |
| `stackNarratives` | Achievements section |
| `currentlyLearning` | About section |
| `emailjsConfig` | Contact form |

---

## Screenshots

> Add screenshots here by dropping images into the repository and referencing them below.

```
📸  Screenshots coming soon.
    To add: drop images into /screenshots and update the paths below.
```

<!-- Uncomment and fill in once screenshots are added:
![Hero Section](./screenshots/hero.png)
![Projects Section](./screenshots/projects.png)
![Case Study Modal](./screenshots/case-study.png)
![Experience Timeline](./screenshots/experience.png)
-->

---

## Planned Improvements

These are genuine next steps based on the current state of the project — not speculative feature lists.

- Add the updated resume PDF to `frontend/public/` so the resume button triggers a download instead of opening a hosted link
- Add a `manifest.json` for PWA installability
- Replace the boilerplate `backend/` with a real API if backend features are added in future (e.g. a view counter, guestbook)
- Add `og:image` with a generated social preview card (e.g. via Vercel's `@vercel/og`)
- Migrate from Create React App to Vite for faster dev builds

---

## Author

**Atharva Jadhav**
Computer Engineering student · B.E. 2024–2028
Smt. Indira Gandhi College of Engineering, Navi Mumbai

- Portfolio: https://portfolio-apexgg.vercel.app/
- GitHub: https://github.com/Atharva6153-git
- LinkedIn: https://www.linkedin.com/in/atharva-jadhav-8a0830334/
- Email: atharvaj7822@gmail.com

---

## License

This project is open source. You are welcome to fork it and use it as a base for your own portfolio — just swap out the content in `mock.js` with your own information.
