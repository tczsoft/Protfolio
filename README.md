# Vinayagam S — Portfolio

A dark, forge-themed personal portfolio built with **React + Vite + Tailwind CSS**. Inspired by the brutalist-modern aesthetic of [forged.build](https://forged.build).

## Run it

```bash
cd portfolio
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

The output goes to `dist/` and can be deployed to Vercel, Netlify, Cloudflare Pages, or any static host.

## Edit content

All copy lives in **one file**: `src/data/site.js`. Update name, role, email, projects, experience there — every component reads from it.

## Project structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Nav, Hero, About, Stack, Experience, Projects, Contact, Footer, Marquee
│   ├── data/site.js       # All resume content — single source of truth
│   ├── hooks/useReveal.js # Scroll-triggered fade-in
│   ├── App.jsx            # Page composition
│   ├── main.jsx           # React entry
│   └── index.css          # Tailwind + global styles
├── index.html
├── tailwind.config.js     # Custom colors (ink, ember), fonts, animations
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Design notes

- **Palette:** `ink-*` for the dark base (zinc 950→500), `ember-*` (orange) as the single accent.
- **Type:** Inter (body) · Space Grotesk (display) · JetBrains Mono (labels & numerals).
- **Motifs:** Section numbers (01–05), mono uppercase eyebrows, faint grid background, radial ember glow under the hero, subtle noise overlay, marquee tech band.
- **Motion:** `useReveal` IntersectionObserver hook fades sections in on scroll. No animation libraries — pure CSS keyframes.

## Customize the accent color

In `tailwind.config.js`, change the `ember` palette to whatever vibe you want — try amber, lime, sky, fuchsia. Everything updates centrally.

## Deploy

**Vercel** (one-liner from this folder):

```bash
npx vercel
```

**Netlify drag-and-drop:** run `npm run build`, then drag `dist/` onto netlify.com.
