# Atharva Jadhav — Portfolio

A modern, animated portfolio website built with React, Tailwind CSS, and Framer Motion. Features a 3D isometric tech-stack keyboard, dark/light theme toggle, smooth scroll animations, and a fully working contact form powered by EmailJS.

**Live:** _(add your Vercel URL here after deploy)_

## Tech Stack

- **Frontend:** React 19, Tailwind CSS, Framer Motion, shadcn/ui, lucide-react
- **Contact form:** EmailJS (client-side email delivery)
- **Fonts:** Space Grotesk, Inter

## Sections

- Hero with animated 3D tech keyboard
- About
- Tech Stack (icon grid + category breakdown)
- Projects (Crypto Pulse, E-Commerce, B-Bot MedGuide, UNIFIND)
- Contact form (Name, Phone, Message)
- Dark / Light theme toggle

## Local Development

```bash
cd frontend
yarn install
cp .env.example .env   # then fill in EmailJS keys
yarn start
```

App runs at `http://localhost:3000`.

## Environment Variables

Create `frontend/.env` with:

```
REACT_APP_BACKEND_URL=http://localhost:8001
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deploy on Vercel

1. Import this repo on [Vercel](https://vercel.com/new).
2. Set **Root Directory** to `frontend`.
3. Add the three `REACT_APP_EMAILJS_*` environment variables in Vercel project settings.
4. Deploy.

## Contact

- Email: [atharvaj7822@gmail.com](mailto:atharvaj7822@gmail.com)
- LinkedIn: [Atharva Jadhav](https://www.linkedin.com/in/atharva-jadhav-8a0830334/)
- GitHub: [@Atharva6153-git](https://github.com/Atharva6153-git)

---

Built with React — designed for a clean, professional yet modern feel.
