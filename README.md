# Sneh Prasad — Portfolio

Personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. **Resume**: drop your actual `resume.pdf` into `/public/resume.pdf` — the "Download Resume" button in the hero links to `/resume.pdf`.
2. **OG image**: add a 1200×630 image at `/public/og-image.png` for link previews (used in `app/layout.tsx`).
3. **Favicon**: add `/public/favicon.ico`.
4. **Domain**: replace `https://snehprasad.dev` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your real domain once deployed.
5. **GitHub stats**: `components/GithubStats.tsx` pulls live, no-key-needed images from github-readme-stats.vercel.app and ghchart.rshah.org for the username `spsneh07` — update the `USERNAME` constant if that changes.
6. **Contact form**: currently opens the visitor's email client via `mailto:` (no backend). Swap in a real endpoint (Formspree, Resend, a Next.js Route Handler) if you want submissions to land somewhere without the visitor's mail client.

## Structure

```
app/            routes, layout, metadata, sitemap, robots, 404, loading
components/     one component per section + shared primitives
lib/data.ts     all resume content — edit this file to update copy
```

## Deploying

Push to GitHub and import the repo on [vercel.com/new](https://vercel.com/new) — zero config needed.
