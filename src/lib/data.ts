/**
 * Single source of truth for all portfolio content.
 * Edit here to update copy across the entire site.
 */
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Boxes,
  BrainCircuit,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  FolderGit2,
  GitBranch,
  GraduationCap,
  Layers,
  Mail,
  MessageSquareQuote,
  Network,
  PenLine,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Trophy,
  User,
  Workflow,
} from "lucide-react";

export const SITE_URL = "https://ahammad-portfolio-app.vercel.app";

export const PERSONAL = {
  name: "Ahammadali Shaik",
  shortName: "Ahammadali",
  title: "Senior Python Backend Developer · AI Engineer · AWS Developer",
  roles: [
    "Senior Python Backend Developer",
    "AI Engineer",
    "AWS Developer",
    "LLM & Agentic AI Builder",
    "Django Specialist",
  ],
  location: "Guntur, Andhra Pradesh, India",
  phone: "+91 70934 50401",
  experience: "7.4+ Years",
  backendExperience: "6.4 Years",
  email: "ahammad1499@gmail.com",
  github: "https://github.com/ahammadsk-000",
  githubHandle: "ahammadsk-000",
  linkedin: "https://www.linkedin.com/in/ahammadali-shaik",
  resumeUrl: "/Ahammadali_Shaik_Resume.pdf",
  tagline: "Building Scalable Backend Systems & Intelligent AI Solutions",
  heroSubtitle:
    "Senior Python Developer with 7.4+ years of total IT experience (6.4 in backend) building enterprise-grade applications, cloud-native systems, and next-generation AI products.",
  summary:
    "Python Backend Developer with 6.4 years of relevant backend experience and 7.4 years of total IT experience. Skilled in Python, Django and the MVT architecture, delivering efficient, scalable solutions. Known for a proactive approach, strong problem-solving, and success in fast-paced, deadline-driven environments — with a deep focus on maintainability, performance, and modern AI.",
  availability: "Open to senior backend, AI engineering & cloud roles",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export type ExploreCard = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

/** Cards on the home landing page that link out to each dedicated page. */
export const EXPLORE_CARDS: ExploreCard[] = [
  {
    label: "About",
    href: "/about",
    description: "My background, education & focus areas",
    icon: User,
  },
  {
    label: "Skills",
    href: "/skills",
    description: "Backend, AI, cloud & DevOps toolkit",
    icon: Sparkles,
  },
  {
    label: "Experience",
    href: "/experience",
    description: "Roles, awards & certifications",
    icon: Briefcase,
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Featured AI products & case studies",
    icon: FolderGit2,
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    description: "What collaborators & leaders say",
    icon: MessageSquareQuote,
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Notes on AI & backend engineering",
    icon: PenLine,
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Let's build something intelligent",
    icon: Mail,
  },
] as const;

export type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
};

export const STATS: Stat[] = [
  { value: 7.4, suffix: "+", label: "Years IT Experience", icon: Rocket },
  { value: 20, suffix: "+", label: "Enterprise Features Delivered", icon: Layers },
  { value: 5, suffix: "+", label: "AI Products Built", icon: BrainCircuit },
  { value: 2, suffix: "", label: "Accenture Awards Won", icon: Trophy },
];

/** Tech logos shown in the infinite marquee strip under the hero. */
export const MARQUEE_TECH: string[] = [
  "Python",
  "Django",
  "Flask",
  "REST APIs",
  "LangChain",
  "RAG",
  "Agentic AI",
  "Ollama",
  "HuggingFace",
  "ChromaDB",
  "QLoRA",
  "AWS",
  "EC2",
  "Lambda",
  "S3",
  "Docker",
  "Kubernetes",
  "React",
  "MySQL",
  "CI/CD",
];

export type AboutCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: "Python Backend Development",
    description:
      "Designing high-throughput, maintainable services with Python — clean architecture, typed contracts, Pandas/NumPy data flows, and battle-tested patterns.",
    icon: Code2,
  },
  {
    title: "Django & REST APIs",
    description:
      "Production Django apps following MVT architecture, secure Django REST Framework APIs, and robust ORM data layers at enterprise scale.",
    icon: ServerCog,
  },
  {
    title: "Cloud Engineering · AWS",
    description:
      "Cloud-native systems on AWS — EC2, Lambda, S3, EBS, ASG, RDS, CloudFront, IAM, VPC and Route53 — built for resilience and scale.",
    icon: Cloud,
  },
  {
    title: "LLM Engineering",
    description:
      "Shipping LLM-powered products with LangChain & Gradio, fine-tuning via QLoRA, and self-hosted inference with Ollama & HuggingFace.",
    icon: BrainCircuit,
  },
  {
    title: "RAG Systems",
    description:
      "Hybrid retrieval pipelines with semantic search, citations, and vector stores (ChromaDB) for grounded, trustworthy answers.",
    icon: Database,
  },
  {
    title: "Agentic AI",
    description:
      "Autonomous multi-agent systems that plan, reason, and act — orchestrating tools, memory, and code-aware workflows.",
    icon: Network,
  },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; level: number }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend",
    icon: ServerCog,
    accent: "from-sky-400 to-blue-600",
    skills: [
      { name: "Python", level: 96 },
      { name: "Django", level: 93 },
      { name: "Flask", level: 88 },
      { name: "Django REST API", level: 92 },
      { name: "ORM", level: 90 },
      { name: "Pandas / NumPy", level: 84 },
    ],
  },
  {
    title: "AI & LLM",
    icon: BrainCircuit,
    accent: "from-fuchsia-400 to-purple-600",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "RAG", level: 92 },
      { name: "Agentic AI", level: 88 },
      { name: "Multi-Agent Systems", level: 87 },
      { name: "Ollama", level: 86 },
      { name: "HuggingFace", level: 84 },
      { name: "ChromaDB", level: 85 },
      { name: "QLoRA / Gradio", level: 80 },
    ],
  },
  {
    title: "Cloud · AWS",
    icon: Cloud,
    accent: "from-amber-400 to-orange-600",
    skills: [
      { name: "EC2 / EBS / ASG", level: 88 },
      { name: "S3 / CloudFront", level: 90 },
      { name: "Lambda", level: 84 },
      { name: "IAM / VPC", level: 85 },
      { name: "RDS", level: 84 },
      { name: "Route53 / SDK", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    accent: "from-emerald-400 to-teal-600",
    skills: [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 80 },
      { name: "Jest", level: 76 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Boxes,
    accent: "from-rose-400 to-pink-600",
    skills: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 78 },
      { name: "Linux", level: 90 },
      { name: "Git / GitHub", level: 92 },
      { name: "CI/CD (Jules)", level: 84 },
      { name: "Postman / Jira", level: 88 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-indigo-400 to-violet-600",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "SQLite3", level: 86 },
    ],
  },
];

export type ExperienceItem = {
  company: string;
  client?: string;
  role: string;
  project?: string;
  period: string;
  location: string;
  highlights: string[];
  icon: LucideIcon;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Cognizant Technology Solutions",
    client: "JP Morgan Chase",
    role: "Senior Infrastructure Developer",
    project: "Piscataway Platform",
    period: "Dec 2024 — May 2026",
    location: "Hyderabad, India",
    icon: ShieldCheck,
    highlights: [
      "Worked on the Piscataway platform managing the Ashburn & Piscataway data centres",
      "Developed Flask applications for Hortonworks and VAPVSI servers",
      "Led Disaster Recovery (DR) & System Resiliency (SR) — primary↔secondary failover",
      "Migrated Tableau and Control-M jobs, tracking running data and jobs",
      "Drove GitHub code migration from Bitbucket to GitHub",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    client: "JP Morgan Chase",
    role: "Senior Infrastructure Developer",
    project: "Decom Automation Tool",
    period: "Aug 2022 — Dec 2024",
    location: "Hyderabad, India",
    icon: Workflow,
    highlights: [
      "Built the Decom Automation Tool to decommission OS servers, DBs, web, SAN/NAS storage & distributed assets",
      "Generated work orders (AD, EPV, Keon, Backup, DB, NAS, Web, scheduled jobs, LPAR/VM deletes) via ServiceNow",
      "Managed the complete order lifecycle from creation to closure across lines of business",
      "Automated enterprise asset retirement, reducing manual effort across teams",
    ],
  },
  {
    company: "Accenture",
    role: "Software Engineer",
    project: "MD Survey & AIL CAL",
    period: "Jan 2019 — Aug 2022",
    location: "Hyderabad, India",
    icon: Cpu,
    highlights: [
      "Designed RESTful APIs, MVT architecture & CRUD with Django + SQLite for downstream integration",
      "Built MD Survey & AIL CAL — internal survey apps for Managers & Senior Managing Directors",
      "Processed enterprise asset data from Verum and managed logical decommissioning workflows",
      "Integrated & migrated work-order generation to ServiceNow (SNOW), automating asset retirement",
      "Collaborated in Agile teams to deliver enhancements, resolve defects, and maintain stability",
      "Recognized with the Accenture ACE & Star awards for high-impact delivery",
    ],
  },
];

export type ProjectSection = { heading: string; body: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  status: string;
  features: string[];
  tech: string[];
  icon: LucideIcon;
  gradient: string;
  github: string;
  demo: string;
  /** Optional self-hosted preview screenshot in /public/projects. */
  image?: string;
  /** Case-study long-form content for the detail page. */
  overview: string;
  challenge: string;
  solution: string;
  architecture: string[];
  outcomes: { value: string; label: string }[];
  sections: ProjectSection[];
};

export const PROJECTS: Project[] = [
  {
    slug: "ai-coding-agent",
    title: "AI Coding Agent Platform",
    tagline: "Autonomous, repository-aware coding copilot",
    description:
      "A Cursor / OpenHands-style platform where multiple agents understand, plan, and modify codebases autonomously.",
    year: "2026",
    role: "Architect & Lead Engineer",
    status: "In active development",
    features: [
      "Multi-agent architecture",
      "Code understanding",
      "Repository analysis",
      "GitHub integration",
      "Autonomous coding workflows",
      "Intelligent code generation",
    ],
    tech: ["Python", "LangChain", "Multi-Agent", "Ollama", "FastAPI", "Next.js"],
    icon: Code2,
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    github: "https://github.com/ahammadsk-000",
    demo: "#",
    overview:
      "An autonomous AI-powered coding assistant that understands an entire codebase, plans changes across files, and executes them through coordinated agents — bringing a Cursor / OpenHands-style experience to local, privacy-first development.",
    challenge:
      "General LLMs lose track of large repositories, hallucinate APIs, and can't safely apply multi-file changes. The goal was a system that reasons about a real codebase and ships changes without a human babysitting every edit.",
    solution:
      "A multi-agent orchestrator splits work between a Planner, a Code-Understanding agent, and an Executor. A repository indexer builds a semantic map of the project, while a GitHub integration handles branching, commits, and PRs. Ollama keeps inference local and free.",
    architecture: [
      "Planner agent decomposes a task into an ordered edit plan",
      "Repository indexer embeds files for semantic retrieval",
      "Executor applies edits with diff-aware, write-to-disk delivery",
      "GitHub integration manages branches, commits & PRs",
      "Zustand-driven Next.js UI streams agent reasoning live",
    ],
    outcomes: [
      { value: "Multi-file", label: "autonomous edits" },
      { value: "100%", label: "local & private (Ollama)" },
      { value: "10-phase", label: "engineered build" },
    ],
    sections: [
      {
        heading: "Why I built it",
        body: "I wanted a coding agent I fully control — one that runs offline, respects my repo conventions, and can take a high-level task to a working PR without leaking code to a third-party API.",
      },
      {
        heading: "What makes it different",
        body: "Most copilots autocomplete; this platform plans. Agents negotiate a shared plan, ground every change in retrieved code, and verify edits before writing them to disk — closer to a junior engineer than an autocomplete box.",
      },
    ],
  },
  {
    slug: "enterprise-rag",
    title: "Enterprise RAG Platform",
    tagline: "Grounded knowledge with citations at scale",
    description:
      "Hybrid retrieval system delivering precise, citation-backed answers over enterprise knowledge bases.",
    year: "2026",
    role: "Backend & AI Engineer",
    status: "Phase 1 foundation complete",
    features: [
      "Hybrid retrieval",
      "Citation generation",
      "Knowledge management",
      "Multi-user authentication",
      "Semantic search",
      "Secure document access",
    ],
    tech: ["Python", "RAG", "ChromaDB", "LangChain", "Postgres", "Next.js"],
    icon: Database,
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-violet-500/20",
    github: "https://github.com/ahammadsk-000",
    demo: "https://enterprise-rag-platfom.vercel.app/",
    image: "/projects/enterprise-rag.png",
    overview:
      "An enterprise knowledge assistant enabling intelligent document search with citation-based responses, hybrid retrieval, and secure multi-user access — so teams trust the answer and can verify the source.",
    challenge:
      "Enterprises need answers grounded in their own documents, not the open web — with citations, access control, and no hallucinations. Pure vector search misses exact terms; pure keyword search misses meaning.",
    solution:
      "A hybrid retriever blends dense (ChromaDB) and sparse search, re-ranks results, and forces the LLM to cite the exact chunks it used. Multi-user auth and per-document permissions keep sensitive knowledge scoped to the right people.",
    architecture: [
      "Ingestion pipeline chunks, embeds & indexes documents",
      "Hybrid retriever fuses dense + keyword results and re-ranks",
      "Citation layer ties every sentence to a source chunk",
      "Auth & RBAC scope documents per user / team",
      "Streaming answer UI with inline citation chips",
    ],
    outcomes: [
      { value: "Hybrid", label: "dense + sparse retrieval" },
      { value: "Cited", label: "every answer is sourced" },
      { value: "Multi-user", label: "secure RBAC access" },
    ],
    sections: [
      {
        heading: "The trust problem",
        body: "An assistant that can't show its sources is unusable in an enterprise. Every response links back to the exact passage it came from, so reviewers verify in one click.",
      },
      {
        heading: "Retrieval that actually works",
        body: "Combining semantic and keyword retrieval — then re-ranking — recovers both 'what does our refund policy mean' and exact clause lookups, which neither approach nails alone.",
      },
    ],
  },
  {
    slug: "ai-interview-prep",
    title: "AI Interview Preparation System",
    tagline: "Voice-first mock interviews & scoring",
    description:
      "PrepForge — an AI coach that runs realistic mock interviews, analyzes resumes, and scores candidate performance.",
    year: "2026",
    role: "Full-stack & AI Engineer",
    status: "Backend complete · Frontend Phase 1",
    features: [
      "Resume analysis",
      "Mock interviews",
      "Voice interactions",
      "Candidate scoring",
      "Performance reports",
      "Coding & analytics modules",
    ],
    tech: ["Python", "FastAPI", "Voice AI", "LLM", "Next.js", "TypeScript"],
    icon: BrainCircuit,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    github: "https://github.com/ahammadsk-000",
    demo: "https://ai-interview-prep-project.vercel.app/",
    image: "/projects/ai-interview-prep.png",
    overview:
      "An AI-driven interview platform featuring resume analysis, realistic mock interviews, natural voice interactions, and automated candidate performance evaluation with detailed reports.",
    challenge:
      "Candidates lack realistic, affordable practice with actionable feedback. Static question banks don't adapt, and human mock interviews don't scale.",
    solution:
      "PrepForge analyzes the candidate's resume, generates role-specific questions, conducts a voice-based interview, then scores answers across competencies and returns a structured performance report with concrete next steps.",
    architecture: [
      "Resume parser extracts skills & experience signals",
      "Question generator tailors rounds to the target role",
      "Voice AI handles speech-to-text & text-to-speech turns",
      "Scoring engine grades answers across rubrics",
      "Report generator produces a shareable performance summary",
    ],
    outcomes: [
      { value: "120+", label: "backend tests passing" },
      { value: "Voice", label: "natural spoken interviews" },
      { value: "10", label: "backend phases complete" },
    ],
    sections: [
      {
        heading: "Realistic by design",
        body: "Questions adapt to the resume and role, and the voice loop makes practice feel like the real thing — pressure included.",
      },
      {
        heading: "Feedback that helps",
        body: "Every session ends with a rubric-based score and specific, prioritized improvements — not a vague 'good job'.",
      },
    ],
  },
  {
    slug: "ai-cinematic-video",
    title: "AI Cinematic Video Generation Platform",
    tagline: "Text to cinematic video, fully automated",
    description:
      "Cineforge — generates cinematic videos from text with AI voice, scene generation, and automated editing.",
    year: "2026",
    role: "AI Systems Engineer",
    status: "Phase 1 complete",
    features: [
      "Text-to-video",
      "AI voice generation",
      "Scene generation",
      "Automated editing",
      "Open-source generative models",
    ],
    tech: ["Python", "ComfyUI", "Diffusion", "FastAPI", "GPU Workers"],
    icon: Sparkles,
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    github: "https://github.com/ahammadsk-000",
    demo: "https://ai-cinematic-project-five.vercel.app/",
    image: "/projects/ai-cinematic-video.png",
    overview:
      "Cineforge is an end-to-end AI video generation system that transforms text scripts into cinematic videos using open-source generative AI models — free, self-hosted, and fully automated.",
    challenge:
      "Cinematic AI video usually means expensive proprietary APIs and manual editing. The goal: a free, open-source pipeline that goes from script to finished video.",
    solution:
      "A split CPU-backend / GPU-worker architecture orchestrates ComfyUI for scene generation, an AI voice model for narration, and an automated editor that stitches scenes, audio, and transitions into a final cut.",
    architecture: [
      "Script parser breaks text into scenes & shots",
      "GPU workers run ComfyUI diffusion for each scene",
      "AI voice model narrates the script",
      "Automated editor assembles scenes, audio & transitions",
      "CPU backend queues jobs and tracks render progress",
    ],
    outcomes: [
      { value: "$0", label: "open-source, no paid APIs" },
      { value: "Script→Video", label: "fully automated" },
      { value: "GPU", label: "distributed render workers" },
    ],
    sections: [
      {
        heading: "Free, end-to-end",
        body: "Everything runs on open-source models and self-hosted GPU workers — no per-second cloud video billing.",
      },
      {
        heading: "Cinematic, not slideshow",
        body: "Scene-aware generation plus automated editing produces a paced, narrated cut rather than a string of disconnected clips.",
      },
    ],
  },
  {
    slug: "ai-face-attendance",
    title: "AI Security & Face Recognition Attendance System",
    tagline: "Secure, spoof-proof real-time attendance",
    description:
      "Real-time face recognition attendance & security with liveness detection, anti-spoofing, and an analytics dashboard.",
    year: "2025",
    role: "Computer Vision Engineer",
    status: "Production-ready",
    features: [
      "Face recognition",
      "Anti-spoofing",
      "Liveness detection",
      "Analytics dashboard",
      "Real-time attendance",
      "Edge AI deployment",
    ],
    tech: ["Python", "OpenCV", "Deep Learning", "FastAPI", "React"],
    icon: ShieldCheck,
    gradient: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
    github: "https://github.com/ahammadsk-000",
    demo: "https://face-recognition-attendence-system-omega.vercel.app",
    image: "/projects/ai-face-attendance.png",
    overview:
      "A real-time facial recognition attendance and security platform with liveness detection, anti-spoofing, analytics, and edge AI deployment support — built to stop photo/video attacks cold.",
    challenge:
      "Naive face attendance is trivially fooled by a phone photo. Real deployments need liveness, anti-spoofing, and an analytics layer managers actually use.",
    solution:
      "A recognition pipeline pairs face embeddings with a liveness/anti-spoofing model to reject presentation attacks, logs attendance in real time, and surfaces trends through an analytics dashboard — deployable to the edge.",
    architecture: [
      "Detector + embedding model identifies faces",
      "Liveness & anti-spoofing model rejects photos/videos",
      "Real-time attendance logging with timestamps",
      "Analytics dashboard for trends & exceptions",
      "Edge deployment for low-latency on-site inference",
    ],
    outcomes: [
      { value: "Real-time", label: "live attendance logging" },
      { value: "Anti-spoof", label: "liveness verified" },
      { value: "Edge", label: "on-device inference" },
    ],
    sections: [
      {
        heading: "Security first",
        body: "Liveness detection and anti-spoofing are the whole point — without them, face attendance is a liability, not a feature.",
      },
      {
        heading: "Useful to managers",
        body: "The analytics dashboard turns raw check-ins into attendance trends, anomalies, and exportable reports.",
      },
    ],
  },
];

export type Achievement = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Accenture ACE Award",
    description: "Recognized for outstanding contribution and engineering excellence.",
    icon: Trophy,
  },
  {
    title: "Accenture Star Award",
    description: "Awarded for consistent high-impact delivery and team leadership.",
    icon: Award,
  },
  {
    title: "7.4+ Years Industry Experience",
    description: "A track record of shipping enterprise software across domains.",
    icon: Rocket,
  },
  {
    title: "Enterprise Client Experience",
    description: "Delivered for global clients including JP Morgan Chase.",
    icon: ShieldCheck,
  },
];

export type Certification = {
  title: string;
  area: string;
  icon: LucideIcon;
  gradient: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Cloud Development",
    area: "AWS",
    icon: Cloud,
    gradient: "from-amber-400/30 to-orange-600/20",
  },
  {
    title: "Python Engineering",
    area: "Python",
    icon: Code2,
    gradient: "from-sky-400/30 to-blue-600/20",
  },
  {
    title: "AI / Machine Learning",
    area: "AI/ML",
    icon: BrainCircuit,
    gradient: "from-fuchsia-400/30 to-purple-600/20",
  },
  {
    title: "Cloud Technologies",
    area: "Cloud",
    icon: GitBranch,
    gradient: "from-emerald-400/30 to-teal-600/20",
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  location: string;
  year: string;
  score: string;
  icon: LucideIcon;
};

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics & Communication Engineering",
    school: "JNTU Kakinada",
    location: "Guntur, AP",
    year: "2014 — 2018",
    score: "68.2%",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (MPC)",
    field: "Maths, Physics, Chemistry",
    school: "Board of Intermediate Education, AP",
    location: "Mangalagiri, AP",
    year: "2012 — 2014",
    score: "84.2%",
    icon: GraduationCap,
  },
  {
    degree: "Secondary Education (SSC)",
    field: "Board of Secondary Education",
    school: "Board of Secondary Education, AP",
    location: "Pedaparimi, AP",
    year: "2012",
    score: "8.5 CGPA",
    icon: GraduationCap,
  },
];

export type Language = { name: string; level: string; proficiency: number };

export const LANGUAGES: Language[] = [
  { name: "English", level: "C2 · Proficient", proficiency: 100 },
  { name: "Telugu", level: "C2 · Native", proficiency: 100 },
  { name: "Hindi", level: "C2 · Proficient", proficiency: 95 },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

/**
 * NOTE: Replace these with real testimonials/recommendations.
 * They are written as realistic placeholders so the section looks complete.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ahammadali owns problems end-to-end. He took our disaster-recovery automation from manual checklists to reliable, repeatable runbooks — and the failovers just worked.",
    name: "Engineering Manager",
    role: "JP Morgan Chase (via Cognizant)",
    initials: "EM",
    accent: "from-sky-500 to-blue-600",
  },
  {
    quote:
      "Rare combination of strong backend fundamentals and genuine AI depth. His RAG pipeline actually cited its sources — that's the difference between a demo and something we can trust.",
    name: "AI Product Lead",
    role: "Enterprise RAG Initiative",
    initials: "AP",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    quote:
      "On the ServiceNow decommissioning automation, he untangled a messy multi-team workflow and shipped it on time. Proactive, calm under deadlines, and a great teammate.",
    name: "Senior Manager",
    role: "Accenture",
    initials: "SM",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "He thinks in systems. Whether it's Django APIs or a multi-agent AI platform, the architecture is clean, the code is maintainable, and it scales.",
    name: "Technical Architect",
    role: "Platform Engineering",
    initials: "TA",
    accent: "from-amber-500 to-orange-600",
  },
];

export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang: string; code: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  content: BlogContentBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-grounded-rag-systems",
    title: "Building RAG Systems That Actually Cite Their Sources",
    excerpt:
      "Why hybrid retrieval beats pure vector search, and how to force an LLM to ground every sentence in a real document chunk.",
    date: "May 2026",
    readTime: "7 min read",
    category: "AI Engineering",
    gradient: "from-fuchsia-500/20 to-purple-600/10",
    content: [
      {
        type: "p",
        text: "A RAG system that can't show its sources is a liability in any enterprise. The fix isn't a bigger model — it's better retrieval and a disciplined prompt contract that ties every claim to a chunk.",
      },
      { type: "h2", text: "Vector search alone is not enough" },
      {
        type: "p",
        text: "Dense embeddings capture meaning but miss exact terms — clause numbers, error codes, product SKUs. Keyword (sparse) search nails those but misses paraphrase. Hybrid retrieval fuses both, then re-ranks.",
      },
      {
        type: "ul",
        items: [
          "Dense retrieval (ChromaDB) for semantic recall",
          "Sparse/keyword retrieval for exact-match precision",
          "A re-ranker to fuse and order the merged candidates",
        ],
      },
      { type: "h2", text: "Make citations non-optional" },
      {
        type: "p",
        text: "I pass retrieved chunks with stable IDs and require the model to attach the chunk IDs it used to each sentence. The UI then renders those as clickable citation chips.",
      },
      {
        type: "code",
        lang: "text",
        code: "Answer using ONLY the context below.\nAfter each sentence, append the chunk IDs you used like [c3, c7].\nIf the context is insufficient, say so — do not guess.",
      },
      {
        type: "quote",
        text: "An assistant that can't be verified won't be trusted — and won't be used.",
      },
      { type: "h2", text: "Takeaways" },
      {
        type: "ul",
        items: [
          "Hybrid + re-rank beats either retriever alone",
          "Force citations at the sentence level, not the answer level",
          "Show sources in the UI so reviewers verify in one click",
        ],
      },
    ],
  },
  {
    slug: "designing-multi-agent-coding-systems",
    title: "Designing Multi-Agent Systems for Autonomous Coding",
    excerpt:
      "Planners, executors, and code-understanding agents — how to split responsibilities so an AI can ship a multi-file change safely.",
    date: "Apr 2026",
    readTime: "8 min read",
    category: "Agentic AI",
    gradient: "from-sky-500/20 to-indigo-600/10",
    content: [
      {
        type: "p",
        text: "A single LLM loop struggles to edit a real repository: it loses context, hallucinates APIs, and applies risky changes. Splitting the work across specialized agents fixes most of that.",
      },
      { type: "h2", text: "One agent per responsibility" },
      {
        type: "ul",
        items: [
          "Planner — turns a task into an ordered, file-level edit plan",
          "Code-Understanding — retrieves and explains relevant code",
          "Executor — applies diffs and writes to disk safely",
          "Reviewer — validates the change before it's committed",
        ],
      },
      { type: "h2", text: "Ground every step in retrieval" },
      {
        type: "p",
        text: "Before any edit, agents retrieve the actual code they're about to touch. Grounding kills most hallucinated function calls because the real signature is right there in context.",
      },
      { type: "h2", text: "Keep humans in the loop, cheaply" },
      {
        type: "p",
        text: "Streaming each agent's reasoning into the UI lets a developer catch a bad plan early — far cheaper than reviewing a broken PR at the end.",
      },
      {
        type: "quote",
        text: "Good autocomplete finishes your line. A good agent finishes your task.",
      },
    ],
  },
  {
    slug: "running-llms-locally-with-ollama",
    title: "Running LLMs Locally with Ollama for Private, Free AI",
    excerpt:
      "How self-hosted inference keeps your code and data private, removes per-token billing, and still ships real products.",
    date: "Mar 2026",
    readTime: "5 min read",
    category: "LLM Engineering",
    gradient: "from-emerald-500/20 to-teal-600/10",
    content: [
      {
        type: "p",
        text: "Not every AI product should ship your source code to a third-party API. For internal tools and dev assistants, local inference with Ollama is private, free, and surprisingly capable.",
      },
      { type: "h2", text: "Why local-first" },
      {
        type: "ul",
        items: [
          "Privacy — code and documents never leave the machine",
          "Cost — no per-token billing on heavy, iterative workloads",
          "Control — pin model versions and run fully offline",
        ],
      },
      { type: "h2", text: "Where it shines" },
      {
        type: "p",
        text: "RAG over internal docs, code assistants, and agent loops that make many cheap calls all benefit from local inference. Reserve frontier hosted models for the few steps that truly need them.",
      },
      {
        type: "quote",
        text: "Default to local. Reach for a hosted frontier model only when the task demands it.",
      },
    ],
  },
];

export const SECTION_NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
