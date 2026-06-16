# 📘 Project Documentation — Ahammadali Shaik Portfolio

A complete, beginner-friendly walkthrough of **what this project is**, **the technologies it uses**, **every file of code (what it does and why)**, and **how to put it live on the internet for free**.

> Goal: anyone — even a developer who has never seen this codebase — should be able to read this single file and fully understand the project **without opening the code**.

---

## Table of contents

1. [What is this project?](#1-what-is-this-project)
2. [Technology stack](#2-technology-stack)
3. [How to run it locally](#3-how-to-run-it-locally)
4. [Site map — the pages/routes](#4-site-map--the-pagesroutes)
5. [Folder structure](#5-folder-structure)
6. [Every file explained](#6-every-file-explained)
7. [How the pieces fit together (data flow)](#7-how-the-pieces-fit-together-data-flow)
8. [How to customize content](#8-how-to-customize-content)
9. [SEO & performance](#9-seo--performance)
10. [Things to update before going live](#10-things-to-update-before-going-live)
11. [🚀 Deploying for FREE (going live)](#11--deploying-for-free-going-live)

---

## 1. What is this project?

A **premium personal portfolio website** for **Ahammadali Shaik** — *Senior Python Backend Developer · AI Engineer · AWS Developer*. It is a modern, dark-themed, heavily-animated website inspired by the design language of **Apple, Stripe, Vercel, Linear, and Raycast**.

It is a **multi-page website**. The visitor lands on a hero/home page and navigates to dedicated pages for **About, Skills, Experience, Projects, Testimonials, Blog, and Contact**. Projects and blog posts each have their own detail pages too.

### Is there a separate backend?

**No — and this is important.** This portfolio is **one single Next.js application**. In Next.js, the "frontend" and "backend" live together in the same server:

| Concern | Where it runs |
|---|---|
| **Frontend** (what you see: HTML, animations, UI) | Next.js renders React components |
| **Backend** (server-side rendering, `/sitemap.xml`, `/robots.txt`, future API routes) | The **same** Next.js server (Node.js) |

So the launcher (`start_portfolio.bat`) starts **one** server that serves both halves. There is no second process for a backend.

> Almost the entire site is **statically pre-rendered** at build time (21 static pages), which is why it loads instantly and is cheap/free to host.

---

## 2. Technology stack

| Technology | Version | Why it's used |
|---|---|---|
| **Next.js** | 15.x (App Router) | The full-stack React framework. Handles routing, server-side rendering, SEO files (sitemap/robots), image optimization, and bundling. This is the single "frontend + backend" engine. |
| **React** | 19 | The UI library used to build all components. |
| **TypeScript** | 5.7 | Adds static types to JavaScript for safer, self-documenting code. |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework used for all styling (colors, spacing, layout, responsiveness). |
| **tailwindcss-animate** | 1.0 | Tailwind plugin providing ready-made animation utilities. |
| **Framer Motion** | 11 | The animation library powering scroll reveals, the typewriter, magnetic buttons, 3D tilt, counters, and page transitions. |
| **Lucide React** | 0.469 | The icon set (clean, consistent SVG icons used throughout). |
| **class-variance-authority (cva)** | 0.7 | Generates style variants for UI components (e.g. button styles/sizes). |
| **clsx** + **tailwind-merge** | — | Utilities to combine and de-duplicate Tailwind class names safely (the `cn()` helper). |
| **Inter** + **JetBrains Mono** | via `next/font` | The web fonts, loaded and optimized automatically by Next.js. |
| **Node.js** | 18.18+ (24 used in dev) | The runtime that executes the Next.js server. Required to run the project. |

### Design techniques used
- **Glassmorphism** (frosted-glass cards via `backdrop-blur` + translucent backgrounds)
- **AI neural-network canvas background** (nodes twinkle, signal pulses travel along connections, nodes react to cursor gravity)
- **Animated gradients**, **glowing borders**, **floating gradient orbs**, **film-grain overlay**
- **Custom cursor** with a lagging glow ring
- **Scroll progress bar**, **loading screen**, **smooth page transitions**
- **Micro-interactions**: magnetic buttons, 3D spotlight tilt cards, count-up numbers, typewriter, word-by-word reveals, infinite tech marquee
- **Accessibility**: honors the OS "reduce motion" setting, semantic HTML, keyboard-focusable controls

---

## 3. How to run it locally

### The easy way (Windows)
**Double-click `start_portfolio.bat`.** It will:
1. Check that Node.js / npm is installed.
2. Install dependencies automatically on the first run (`npm install`).
3. Start the Next.js server on **http://localhost:3030**.
4. Wait until the server responds, then open your browser automatically.

Keep the **"Portfolio Server"** window open while browsing. Close it to stop the site.

> Port **3030** was chosen on purpose so it does not clash with the PrepForge project (port 3000).

### The manual way (any OS)
```bash
npm install        # first time only
npm run dev        # development mode (hot reload) -> http://localhost:3000
# or, to test the real production build:
npm run build      # create an optimized production build
npm run start      # serve the production build
```

### The npm scripts
| Script | What it does |
|---|---|
| `npm run dev` | Start the development server (hot reload). |
| `npm run build` | Compile an optimized production build (also type-checks + lints). |
| `npm run start` | Serve the production build created by `build`. |
| `npm run lint` | Run ESLint to check code quality. |

---

## 4. Site map — the pages/routes

This is a multi-page site. Every nav link opens its **own page** (not just a scroll on one long page).

| URL | Page | What it contains |
|---|---|---|
| `/` | **Home** | Hero (name + typewriter roles + CTAs + stat cards) → tech marquee → "Explore" grid linking to every page. |
| `/about` | **About** | The six "focus area" cards **+ Education & Languages**. |
| `/skills` | **Skills** | Six skill categories with animated proficiency bars. |
| `/experience` | **Experience** | Vertical career timeline **+ Achievements + Certifications**. |
| `/projects` | **Projects** | Grid of the 5 featured AI projects (each card links to its case study). |
| `/projects/[slug]` | **Project case study** | A full detail page per project: overview, challenge, solution, architecture, outcomes, features, narrative, and a "next project" link. (5 pages, one per project.) |
| `/testimonials` | **Testimonials** | Quote cards from managers/collaborators. |
| `/blog` | **Blog** | Index of technical articles. |
| `/blog/[slug]` | **Blog article** | A full article rendered from structured content blocks. (3 posts.) |
| `/contact` | **Contact** | Contact channels + a contact form. |
| `/sitemap.xml` | (auto) | Machine-readable list of all pages for search engines. |
| `/robots.txt` | (auto) | Crawler rules + sitemap pointer. |

**Navigation behaviour:** the **Navbar** and **Footer** are defined once in the root layout, so they appear on every page. The Navbar highlights the page you're currently on (based on the URL).

---

## 5. Folder structure

```
Portfolio_Project/
├── start_portfolio.bat        # One-click Windows launcher
├── package.json               # Dependencies + npm scripts
├── package-lock.json          # Locked dependency versions (reproducible installs)
├── tsconfig.json              # TypeScript settings + "@/..." path alias
├── tailwind.config.ts         # Design tokens, colors, keyframe animations
├── postcss.config.mjs         # Enables Tailwind + autoprefixer
├── next.config.mjs            # Next.js build settings
├── components.json            # shadcn UI configuration
├── .eslintrc.json             # Linting rules
├── .gitignore                 # Files Git should ignore
├── README.md                  # Short project intro
├── PROJECT_DOCUMENTATION.md   # (this file) full documentation
├── public/                    # Static assets served as-is
│   ├── favicon.svg            # Browser tab icon ("AS" gradient badge)
│   ├── og.svg                 # Social-share preview image (OpenGraph)
│   ├── resume.pdf             # The real CV (opened by every "Resume" button)
│   └── projects/              # Self-hosted project screenshots
│       ├── enterprise-rag.png
│       ├── ai-interview-prep.png
│       ├── ai-cinematic-video.png
│       └── ai-face-attendance.png
└── src/
    ├── app/                   # Next.js App Router (pages, layout, SEO)
    │   ├── layout.tsx         # Root layout: fonts, SEO, global effects, Navbar+Footer
    │   ├── template.tsx       # Page-transition wrapper (fade/slide on navigation)
    │   ├── page.tsx           # Home page
    │   ├── globals.css        # Global styles + design system
    │   ├── sitemap.ts         # Generates /sitemap.xml
    │   ├── robots.ts          # Generates /robots.txt
    │   ├── about/page.tsx
    │   ├── skills/page.tsx
    │   ├── experience/page.tsx
    │   ├── projects/page.tsx
    │   ├── projects/[slug]/page.tsx
    │   ├── testimonials/page.tsx
    │   ├── contact/page.tsx
    │   ├── blog/page.tsx
    │   └── blog/[slug]/page.tsx
    ├── components/
    │   ├── effects/           # Visual / animation effects
    │   ├── layout/            # Navbar + Footer
    │   ├── sections/          # The page sections + detail-page renderers
    │   └── ui/                # Reusable UI building blocks
    └── lib/                   # Data + helper functions
        ├── data.ts            # ⭐ ALL site content lives here
        └── utils.ts           # cn() class-name helper
```

---

## 6. Every file explained

### 6.1 Root configuration files

| File | What it does |
|---|---|
| **`package.json`** | Lists all dependencies and the npm scripts (`dev`, `build`, `start`, `lint`). |
| **`package-lock.json`** | Auto-generated. Locks exact dependency versions so installs are reproducible. |
| **`tsconfig.json`** | TypeScript compiler config. Notably sets the `@/*` alias so imports like `@/components/...` map to `src/...`. |
| **`tailwind.config.ts`** | The design system in code: brand colors (as CSS variables), container width, and custom keyframe animations (`float`, `aurora`, `shimmer`, `gradient-shift`, `marquee`, `pulse-glow`, etc.). |
| **`postcss.config.mjs`** | Tells the build to process CSS through Tailwind and Autoprefixer. |
| **`next.config.mjs`** | Next.js options: React strict mode, removes `console.*` in production, modern image formats (AVIF/WebP), hides the `X-Powered-By` header. |
| **`components.json`** | Configuration for the shadcn UI convention (style, aliases, icon library). |
| **`.eslintrc.json`** | Extends Next.js' recommended linting rules (`next/core-web-vitals`). |
| **`.gitignore`** | Prevents committing `node_modules`, `.next` build output, env files, etc. |
| **`start_portfolio.bat`** | The Windows one-click launcher (see section 3). |
| **`next-env.d.ts`** | Auto-generated TypeScript types for Next.js. Do not edit. |

### 6.2 `public/` — static assets

| File | What it does |
|---|---|
| **`favicon.svg`** | The small icon in the browser tab — a gradient rounded square with the initials "AS". |
| **`og.svg`** | The 1200×630 preview image shown when the site is shared on social media / chat apps. |
| **`resume.pdf`** | The **real 2-page CV** of Ahammadali Shaik. The hero, navbar, and footer "Resume" buttons all open this file. |
| **`projects/*.png`** | The four **live-app screenshots** shown on the project cards (Enterprise RAG, Interview Prep, Cinematic Video, Face Attendance). Add `projects/ai-coding-agent.png` later to give that card a screenshot too. |

### 6.3 `src/lib/` — data & helpers

| File | What it does |
|---|---|
| **`data.ts`** | ⭐ **The single source of truth for ALL content.** Every piece of text and data lives here in clearly named exports: `PERSONAL`, `NAV_LINKS`, `EXPLORE_CARDS`, `STATS`, `MARQUEE_TECH`, `ABOUT_CARDS`, `SKILL_CATEGORIES`, `EXPERIENCE`, `PROJECTS`, `ACHIEVEMENTS`, `CERTIFICATIONS`, `EDUCATION`, `LANGUAGES`, `TESTIMONIALS`, `BLOG_POSTS`, and `SITE_URL`. **Edit this one file to update the whole website.** |
| **`utils.ts`** | The `cn()` helper that merges Tailwind class names intelligently (`clsx` + `tailwind-merge`) so conflicting classes resolve correctly. |

### 6.4 `src/app/` — the App Router (pages, layout, SEO)

| File | What it does |
|---|---|
| **`layout.tsx`** | The **root layout** wrapping every page. Loads fonts, applies dark mode, mounts the global background effects (particles, gradient orbs, grain, cursor glow, scroll progress, loading screen), renders the **Navbar and Footer once for all pages**, and defines all **SEO metadata** (title, description, keywords, OpenGraph + Twitter cards, favicon, theme color, robots). |
| **`template.tsx`** | Wraps every route and re-mounts on navigation, giving a **smooth fade/slide page transition**. |
| **`page.tsx`** | The **home page**: Hero → Tech Marquee → Section Divider → Explore grid. Also injects **JSON-LD structured data** (`Person` schema) so search engines understand who the site is about. |
| **`globals.css`** | Global styles + design system: CSS color variables, glassmorphism (`.glass`) classes, animated gradient text, glowing-border effect, custom scrollbar, selection color, and `prefers-reduced-motion` accessibility rules. |
| **`sitemap.ts`** | Generates `/sitemap.xml` (home, all section pages, every project, every blog post). |
| **`robots.ts`** | Generates `/robots.txt` (allows crawlers, points to the sitemap). |
| **`about/page.tsx`** | The `/about` route → renders the `About` + `Education` sections. |
| **`skills/page.tsx`** | The `/skills` route → renders the `Skills` section. |
| **`experience/page.tsx`** | The `/experience` route → renders `Experience` + `Achievements` + `Certifications`. |
| **`projects/page.tsx`** | The `/projects` route → renders the `Projects` grid. |
| **`projects/[slug]/page.tsx`** | A **dynamic route** that builds one case-study page per project. Uses `generateStaticParams` (pre-build all 5) and `generateMetadata` (per-page SEO). Renders `ProjectCaseStudy`. |
| **`testimonials/page.tsx`** | The `/testimonials` route → renders the `Testimonials` section. |
| **`contact/page.tsx`** | The `/contact` route → renders the `Contact` section. |
| **`blog/page.tsx`** | The `/blog` index → renders `BlogList`. |
| **`blog/[slug]/page.tsx`** | A **dynamic route** that builds one page per blog post (`generateStaticParams` + `generateMetadata`). Renders `BlogArticle`. |

> **Why are section pages so short?** Each section page just imports the matching section component(s) from `src/components/sections/` and drops them into a `<main>`. The actual content/animation lives in the component, and the text lives in `data.ts`.

### 6.5 `src/components/ui/` — reusable building blocks

Small, generic pieces reused across the site (shadcn-style, but self-contained — no external Radix dependency).

| File | What it does |
|---|---|
| **`button.tsx`** | The `Button` component with variants (default gradient, outline, ghost, secondary, link) and sizes. Supports `asChild` to render as a link. |
| **`slot.tsx`** | A tiny helper that makes `asChild` work — merges a component's props onto its child element (e.g. render a Button *as* an `<a>`/`<Link>`). |
| **`card.tsx`** | A glassmorphism `Card` plus `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. |
| **`badge.tsx`** | Small rounded labels/pills (e.g. tech tags) with color variants. |
| **`input.tsx`** | A styled text input used in the contact form. |
| **`textarea.tsx`** | A styled multi-line text box used in the contact form. |
| **`reveal.tsx`** | `Reveal` and `StaggerContainer` — wrappers that fade + blur-up their children when scrolled into view. |
| **`section-heading.tsx`** | The consistent heading block at the top of each section (eyebrow label + animated title + description). |
| **`text-reveal.tsx`** | Reveals a string **word-by-word** with a blur-up stagger (micro-interaction for headings). |

### 6.6 `src/components/effects/` — visual & animation effects

| File | What it does |
|---|---|
| **`particles.tsx`** | The **AI neural-network** canvas background: drifting nodes connected by constellation lines, **signal pulses** that travel along close connections, and **cursor gravity** that nudges nearby nodes. Pauses when the tab is hidden; respects reduced-motion. |
| **`cursor-glow.tsx`** | The **custom cursor** — a precise dot plus a lagging glowing ring that grows over buttons/links. Disabled on touch devices. |
| **`gradient-orbs.tsx`** | The **floating blurred gradient orbs** + faint grid overlay (ambient background). |
| **`grain.tsx`** | A fixed **film-grain / noise overlay** for a premium, tactile finish (pure CSS/SVG, no JS cost). |
| **`scroll-progress.tsx`** | The thin **gradient progress bar** at the very top that fills as you scroll. |
| **`section-divider.tsx`** | An animated **gradient divider** with a travelling glow, placed between sections. |
| **`tech-marquee.tsx`** | An infinite, seamless **marquee** of core technologies; pauses on hover. |
| **`loading-screen.tsx`** | The branded **intro/loading screen** (animated "AS" badge + progress bar) shown briefly on first load, then fades. |
| **`animated-counter.tsx`** | Numbers that **count up from 0** to their target when scrolled into view (hero stat cards). |
| **`typewriter.tsx`** | The **typewriter effect** that types/deletes the rotating job titles in the hero. |
| **`magnetic.tsx`** | Makes buttons **magnetically pull toward the cursor** on hover. |
| **`spotlight-card.tsx`** | The premium card used across the site: a glass card with a **cursor-following spotlight glow**, a **glowing border**, and optional subtle **3D tilt**. |

### 6.7 `src/components/layout/` — navigation

| File | What it does |
|---|---|
| **`navbar.tsx`** | The top **navigation bar** (rendered once in the root layout). Becomes a frosted glass pill on scroll, **highlights the current page based on the URL**, has a GitHub button + Resume button, and a full mobile hamburger menu. |
| **`footer.tsx`** | The **footer**: name, tagline, quick links, social icons (GitHub, LinkedIn, Email), copyright, and a "Back home" link. |

### 6.8 `src/components/sections/` — the page content

| File | Used by | What it shows |
|---|---|---|
| **`hero.tsx`** | `/` | Intro: availability badge, location, **"Hello, I'm" + Ahammadali Shaik**, the typewriter of roles, subtitle, three CTAs (View Projects / Download Resume / Contact Me), and 4 animated stat cards. |
| **`explore.tsx`** | `/` | A grid of cards on the home page linking to every other page (About, Skills, Experience, Projects, Testimonials, Blog, Contact). |
| **`about.tsx`** | `/about` | Six cards: Python backend, Django & REST APIs, Cloud/AWS, LLM engineering, RAG systems, Agentic AI. |
| **`education.tsx`** | `/about` | Education timeline (B.Tech ECE — JNTU Kakinada, Intermediate, SSC) + Languages (English/Telugu/Hindi) proficiency bars. |
| **`skills.tsx`** | `/skills` | Six skill categories with **animated proficiency bars**. |
| **`experience.tsx`** | `/experience` | An **animated vertical timeline**: Cognizant (client JP Morgan Chase) ×2 engagements + Accenture, each with highlights. |
| **`achievements.tsx`** | `/experience` | Accenture ACE Award, Accenture Star Award, 7.4+ years experience, enterprise client experience. |
| **`certifications.tsx`** | `/experience` | Four cards across AWS, Python, AI/ML, and Cloud Technologies. |
| **`projects.tsx`** | `/projects` | Cards for the 5 AI projects. Each card shows a **live screenshot** (or animated mockup if none), feature tags, tech badges, and **Case Study / Code / Live Demo** buttons. |
| **`project-case-study.tsx`** | `/projects/[slug]` | The full case-study renderer (banner, outcomes, challenge/solution, architecture, features, narrative, next-project link). |
| **`testimonials.tsx`** | `/testimonials` | Quote cards from managers/collaborators. |
| **`blog-list.tsx`** | `/blog` | The blog index cards (category, date, read-time). |
| **`blog-article.tsx`** | `/blog/[slug]` | Renders a post from structured content blocks (`h2`, `p`, `ul`, `code`, `quote`) + a "next article" link. |
| **`contact.tsx`** | `/contact` | Contact channels (email, GitHub, LinkedIn, location) + a **contact form** that opens the visitor's email app pre-filled. |

---

## 7. How the pieces fit together (data flow)

```
                 ┌─────────────────────────┐
                 │   src/lib/data.ts       │  ← ALL text + data content
                 │ (PERSONAL, PROJECTS, …) │
                 └───────────┬─────────────┘
                             │ imported by
                             ▼
   src/components/sections/*.tsx   (Hero, About, Skills, Projects, Blog, …)
                             │ use
                             ▼
   src/components/ui/*  +  src/components/effects/*   (buttons, cards, animations)
                             │ assembled in
                             ▼
   src/app/<route>/page.tsx   (/, /about, /projects, /blog, …)
                             │ wrapped by
                             ▼
   src/app/template.tsx  →  src/app/layout.tsx   (transitions, fonts, SEO,
                             │                     global effects, Navbar+Footer)
                             ▼
                  Next.js server (frontend + backend)
                             │ started by
                             ▼
              start_portfolio.bat  ▶  http://localhost:3030
```

---

## 8. How to customize content

Almost everything is data-driven, so you rarely touch component code.

| I want to… | Edit this |
|---|---|
| Change name, title, email, phone, social links, hero text | `src/lib/data.ts` → `PERSONAL` |
| Change the stat cards | `data.ts` → `STATS` |
| Change skills / proficiency % | `data.ts` → `SKILL_CATEGORIES` |
| Change work experience | `data.ts` → `EXPERIENCE` |
| Add / edit a **project** (incl. case-study text, tech, GitHub, live demo URL, screenshot) | `data.ts` → `PROJECTS` (set `image: "/projects/<slug>.png"` and drop the file in `public/projects/`) |
| Add / edit a **blog post** | `data.ts` → `BLOG_POSTS` (uses content blocks: `h2`, `p`, `ul`, `code`, `quote`) |
| Edit education / languages / testimonials / certifications / achievements | `data.ts` → the matching export |
| Change the nav links or home "Explore" cards | `data.ts` → `NAV_LINKS` / `EXPLORE_CARDS` |
| Change colors / fonts / animations | `tailwind.config.ts` + `src/app/globals.css` |
| Change which sections appear on a page, or the order | the relevant `src/app/<route>/page.tsx` |

> **Adding a new project automatically** creates its `/projects/<slug>` case-study page, adds it to the sitemap, and links it from the grid — no extra wiring needed.

---

## 9. SEO & performance

- **Metadata, OpenGraph & Twitter cards**: base values in `src/app/layout.tsx`; per-page overrides via `generateMetadata` on project/blog pages and `metadata` exports on section pages.
- **JSON-LD structured data** (`Person` schema): `src/app/page.tsx`.
- **`sitemap.xml`** and **`robots.txt`**: generated automatically (include all 21 routes).
- The production build is fully **static** (21 pre-rendered pages) — fast loads, cheap hosting.
- Code passes **ESLint with zero warnings**.
- Animations respect the OS **"reduce motion"** setting; images use Next.js `<Image>` optimization.

---

## 10. Things to update before going live

1. **`SITE_URL`** in `src/lib/data.ts` → your real domain (used by SEO tags + sitemap). Example: `https://ahammadali.vercel.app`.
2. **`TESTIMONIALS`** in `src/lib/data.ts` → real recommendations (currently realistic, role-based placeholders). Swap in genuine quotes (e.g. from LinkedIn) when available.
3. *(Optional)* Add `public/projects/ai-coding-agent.png` and set `image` on that project once it's deployed.
4. *(Optional)* Connect the **contact form** to a real email service (e.g. a Next.js Route Handler + [Resend](https://resend.com)) instead of the current "open your email app" fallback.

> ✅ `public/resume.pdf` (real CV) and the **LinkedIn URL** are already set — no action needed.

---

## 11. 🚀 Deploying for FREE (going live)

Your app is a standard **Next.js** project, so the easiest and best free host is **Vercel** (the company that makes Next.js). Your other apps already run on Vercel, so this will feel familiar. Below is the recommended path plus free alternatives.

### Recommended: **Vercel** (best fit for Next.js)

**Why Vercel:** zero config for Next.js, free "Hobby" tier, automatic HTTPS, global CDN, and automatic re-deploys every time you push to GitHub.

#### Step 0 — One-time prep
1. Make sure the project builds locally: `npm run build` (it should say *Compiled successfully*).
2. In `src/lib/data.ts`, set `SITE_URL` to the domain you'll use (you can update it after you know the final URL).

#### Step 1 — Put the code on GitHub
If it isn't a Git repo yet:
```bash
git init
git add .
git commit -m "Portfolio website"
```
Then create a new **empty** repository on GitHub (e.g. `portfolio`) and push:
```bash
git branch -M main
git remote add origin https://github.com/ahammadsk-000/portfolio.git
git push -u origin main
```
> `node_modules` and `.next` are already in `.gitignore`, so they won't be uploaded — that's correct.

#### Step 2 — Import to Vercel
1. Go to **https://vercel.com** → sign in **with GitHub**.
2. Click **Add New… → Project**.
3. Select your `portfolio` repository → **Import**.
4. Vercel auto-detects **Next.js**. Leave all build settings as default:
   - Framework: *Next.js*
   - Build command: `next build`
   - Output: handled automatically
5. Click **Deploy**. Wait ~1–2 minutes.

You'll get a free URL like **`https://portfolio-xxxx.vercel.app`**. 🎉

#### Step 3 — After it's live
1. Copy your real URL, paste it into `SITE_URL` in `src/lib/data.ts`.
2. Commit & push — Vercel **auto-redeploys** on every push:
   ```bash
   git add src/lib/data.ts
   git commit -m "Set production SITE_URL"
   git push
   ```

#### Step 4 — (Optional) Custom domain
- In Vercel: **Project → Settings → Domains → Add**. You can:
  - Use a free `*.vercel.app` subdomain (rename the project for a nicer URL), or
  - Connect a domain you own (e.g. from Namecheap/GoDaddy) by adding the DNS records Vercel shows you. Vercel issues the HTTPS certificate automatically.

#### Step 5 — (Optional) Rename for a clean URL
Vercel → **Project → Settings → General → Project Name**. Renaming to `ahammadali` gives you `https://ahammadali.vercel.app`.

---

### Free alternatives (all work with this project)

| Host | Free tier | Notes |
|---|---|---|
| **Vercel** ⭐ | Yes (Hobby) | **Recommended.** Made by the Next.js team — zero config, best Next.js support. |
| **Netlify** | Yes | Great too. Import the GitHub repo; it auto-detects Next.js (installs the Next runtime). Build command `next build`. |
| **Cloudflare Pages** | Yes (generous) | Import repo, choose **Next.js** preset. Fast global edge network. |
| **Render** | Yes (free web service) | Choose "Web Service", build `npm run build`, start `npm run start`. Free instances sleep when idle (cold starts). |

> **A note on GitHub Pages:** GitHub Pages only serves *static* files and does **not** run a Next.js server. This site is mostly static, but uses Next.js server features (the App Router, image optimization). Stick with Vercel/Netlify/Cloudflare Pages — they support Next.js fully and for free. (Exporting a fully-static version is possible but would require extra config and is unnecessary given the free options above.)

### Deployment checklist
- [ ] `npm run build` succeeds locally
- [ ] Code pushed to GitHub (without `node_modules` / `.next`)
- [ ] Imported into Vercel (or chosen host) and deployed
- [ ] `SITE_URL` in `data.ts` updated to the live URL, then pushed (auto-redeploys)
- [ ] Visit `/sitemap.xml` and `/robots.txt` on the live site to confirm SEO files work
- [ ] Test the Resume button, all nav pages, project Live Demo links, and the contact form

---

_Built with Next.js, TypeScript, Tailwind CSS, Framer Motion & Lucide Icons._
