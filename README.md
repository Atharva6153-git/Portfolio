<div align="center">

# ⚡ Atharva Jadhav — Portfolio

### _Full Stack Developer · Building things that ship._

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-A78BFA?style=for-the-badge)](#-license)

<br />

**🌐 Live Demo** · _add your Vercel URL here_  &nbsp;·&nbsp;  **📫 Contact** · [atharvaj7822@gmail.com](mailto:atharvaj7822@gmail.com)

</div>

---

## 🎨 About This Portfolio

A modern, animated developer portfolio built from the ground up — inspired by minimalist agency-style websites, engineered with clean React architecture, and finished with an animated 3D isometric tech keyboard as the hero centerpiece.

> _"Design is not just what it looks like and feels like. Design is how it works."_ — Steve Jobs

<br />

## ✨ Highlights

|  | Feature |
|:---:|:---|
| 🎹 | **Animated 3D tech-stack keyboard** rendered with pure CSS 3D transforms — no libraries |
| 🌗 | **Dark ↔ Light theme toggle** with buttery-smooth Framer Motion sun/moon transitions |
| ✉️ | **Working contact form** powered by EmailJS — messages hit your inbox in real time |
| 🚀 | **60fps scroll animations** — every section entrance is choreographed with Framer Motion |
| 📱 | **Fully responsive** — pixel-perfect from 4K displays down to mobile |
| 🎯 | **Zero backend** — pure frontend, deploys in seconds on Vercel / Netlify / GitHub Pages |
| 💾 | **Downloadable resume** — one-click PDF download button in the hero |

<br />

## 🛠️ Built With

### Frontend Stack
```
⚛  React 19          🎨  Tailwind CSS       🎬  Framer Motion
🧩  shadcn/ui         🔤  Space Grotesk      💠  lucide-react
```

### Integrations & Tooling
```
📧  EmailJS           🎯  React Router 7     ⚡  Craco / CRA
📦  Yarn              🐙  Git + GitHub       🚀  Vercel
```

<br />

## 🗺️ Site Map

```
┌─────────────────────────────────────────┐
│  🏠  Hero          →  3D tech keyboard  │
│  👤  About         →  Bio + stats       │
│  🧰  Tech Stack    →  20+ tools grid    │
│  💼  Projects      →  4 featured builds │
│  ✉️   Contact       →  EmailJS form      │
│  🦶  Footer        →  Social links      │
└─────────────────────────────────────────┘
```

<br />

## 🚀 Quick Start

```bash
# 1️⃣  Clone the repo
git clone https://github.com/Atharva6153-git/Portfolio.git
cd Portfolio/frontend

# 2️⃣  Install dependencies
yarn install

# 3️⃣  Set up environment
cp .env.example .env
# Then edit .env with your EmailJS keys

# 4️⃣  Fire it up 🔥
yarn start
```

Now open **http://localhost:3000** — your portfolio is live locally!

<br />

## 🔑 Environment Variables

Create `frontend/.env` with the following:

```env
# React backend (optional, only if adding a backend later)
REACT_APP_BACKEND_URL=http://localhost:8001

# EmailJS — get these at https://www.emailjs.com/
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

<details>
<summary><b>📮 Setting up EmailJS (click to expand)</b></summary>

1. Sign up free at [emailjs.com](https://www.emailjs.com/) (200 emails/month)
2. Connect your Gmail as an **Email Service**
3. Create a template with variables: `{{name}}`, `{{phone}}`, `{{doubt}}`
4. Copy your Service ID, Template ID, and Public Key into `.env`
5. Restart the dev server → contact form is live 🎉

</details>

<br />

## 🌐 Deploy on Vercel

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Atharva6153-git/Portfolio)

</div>

**Manual steps:**

1. Import this repo on [vercel.com/new](https://vercel.com/new)
2. Set **Root Directory** → `frontend` ⚠️ _(critical)_
3. Add all three `REACT_APP_EMAILJS_*` env vars under **Settings → Environment Variables**
4. Click **Deploy** → done in ~90 seconds 🚀

<br />

## 📁 Project Structure

```
Portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx           ← Landing + 3D keyboard
│   │   │   ├── About.jsx
│   │   │   ├── TechStack.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx        ← EmailJS wired here
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── TechKeyboard.jsx   ← Pure CSS 3D magic ✨
│   │   ├── context/
│   │   │   └── ThemeContext.jsx   ← Dark/light state
│   │   ├── mock/
│   │   │   └── mock.js            ← All content lives here
│   │   ├── App.js
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

<br />

## 💼 Featured Projects

| Project | Stack | Link |
|:---|:---|:---:|
| 📈 **Crypto Pulse** — Real-time crypto tracker | React · Node · MongoDB | [🔗](https://github.com/Atharva6153-git/Crypto-Pulse) |
| 🛒 **E-Commerce Platform** — Full-featured store | React · Express · MongoDB | [🔗](https://github.com/Atharva6153-git/E-Commerce) |
| 🩺 **B-Bot MedGuide** — AI health assistant | Python · Flask · Gemini API | [🔗](https://github.com/Atharva6153-git/B-Bot-Medguide) |
| 🎓 **UNIFIND** — University discovery (Hackathon) | React · Node · Firebase | [🔗](https://github.com/Shreyas-patil07/UNIFIND) |

<br />

## 🎯 Tech I Ship With

<div align="center">

**Languages**
`C` `Java` `Python` `JavaScript`

**Frontend**
`React.js` `Tailwind CSS` `Bootstrap`

**Backend**
`Node.js` `Express.js` `Flask` `FastAPI`

**Databases**
`MongoDB` `PostgreSQL` `Firebase`

**Architecture & DevOps**
`Microservices` `Apache Kafka` `Docker`

**Tools & APIs**
`Git` `GitHub` `Postman` `Groq AI` `Google Gemini`

</div>

<br />

## 📬 Let's Connect

<div align="center">

[![Email](https://img.shields.io/badge/Email-atharvaj7822@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:atharvaj7822@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Atharva_Jadhav-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atharva-jadhav-8a0830334/)
[![GitHub](https://img.shields.io/badge/GitHub-Atharva6153--git-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Atharva6153-git)

</div>

<br />

## 📝 License

This project is open source and available under the **MIT License**. Feel free to fork, remix, and make it your own.

---

<div align="center">

**Built with ☕ and a lot of `console.log()` by [Atharva Jadhav](https://github.com/Atharva6153-git)**

⭐ _If you like this portfolio, drop a star — it makes my day!_ ⭐

</div>
