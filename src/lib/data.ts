export const siteConfig = {
  name: "Zelalem Habtamu",
  shortName: "zelalem",
  initials: "ZH",
  title: "Software Engineer",
  location: "Addis Ababa, Ethiopia",
  email: "zelalemhab19@gmail.com",
  phone: "0967787318",
  links: {
    github: "https://github.com/zelalem61",
    linkedin: "https://www.linkedin.com/in/zelalem-habtamu-6abab7264/",
    leetcode: "https://leetcode.com/u/zelalem61/",
    upwork: "https://www.upwork.com/freelancers/~019a7c37b5f2be212f",
  },
  hero: {
    headline: "Software engineer",
    accent: "scalable systems",
    description:
      "I build production-grade backend services, full-stack platforms, and AI-powered systems with a focus on microservices, async messaging, machine learning, RAG pipelines, LLM agents, and developer experience at scale.",
  },
  about: {
    title: "Creating scalable systems and",
    accent: "AI solutions",
    description:
      "My work spans backend architecture, AI engineering, and full-stack development, building scalable NestJS services, distributed systems, RAG pipelines, and LLM-powered applications.",
    highlights: [
      {
        label: "Projects",
        text: "Senior Backend Developer at Aladia: core platform features, Google Pub/Sub messaging across 8+ microservices, and CI/CD pipelines for 100+ releases.",
      },
      {
        label: "Approach",
        text: "I prioritize scalable architectures, well-defined service boundaries, observable distributed systems, and maintainable code, with a strong emphasis on code quality, testing, and engineering best practices.",
      },
    ],
  },
};

export type Project = {
  id: string;
  title: string;
  company: string;
  period: string;
  category: string;
  secondaryCategory?: string;
  description: string;
  details: string;
  role: string;
  tags: string[];
  gradient: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "syscode",
    title: "SysCode",
    company: "Orizon Tech",
    period: "Feb 2025 — Jun 2025",
    category: "Platform",
    secondaryCategory: "AI",
    description:
      "Scalable system design platform with AI-assisted architecture recommendations.",
    details:
      "Built and enhanced a system design platform using React, NestJS, and TypeScript. Integrated a fine-tuned LLaMA 4 model on RunPod for AI-assisted architecture recommendations. Developed real-time collaboration features and responsive UI components.",
    role: "Full-stack developer",
    tags: [
      "React",
      "NestJS",
      "TypeScript",
      "LLaMA 4",
      "RunPod",
      "Microservices",
    ],
    gradient: "from-violet-900/80 via-purple-800/60 to-indigo-900/40",
    image: "/projects/syscode.png",
    liveUrl: "https://syscode-i6c6.onrender.com/",
  },
  {
    id: "aladia",
    title: "Aladia Platform",
    company: "Aladia",
    period: "Mar 2024 — Jan 2026",
    category: "Platform",
    secondaryCategory: "Backend",
    description:
      "Core learning platform features serving 10,000+ users with microservices architecture.",
    details:
      "Designed and delivered core platform features using NestJS, TypeScript, and MongoDB. Integrated Google Pub/Sub across 8+ NestJS microservices. Built automated CI/CD pipelines with GitHub Actions for 100+ releases. Led a team of 3 junior developers.",
    role: "Senior backend developer",
    tags: [
      "NestJS",
      "TypeScript",
      "MongoDB",
      "GCP",
      "Pub/Sub",
      "GitHub Actions",
    ],
    gradient: "from-amber-900/80 via-orange-800/60 to-yellow-900/40",
    image: "/projects/aladia.png",
    liveUrl: "https://istitutoformativoaladia.it/",
  },
  {
    id: "csbsn",
    title: "CSBSN",
    company: "CSBSN",
    period: "2025 — Present",
    category: "Platform",
    secondaryCategory: "Blockchain",
    description:
      "Empowering Small Businesses with Community Support & Transparency.",
    details:
      "Join a decentralized funding network where small businesses raise funds transparently, supporters contribute securely, and impact is tracked in real-time.",
    role: "Full-stack developer",
    tags: ["NestJS", "Next.js", "Ethereum", "Blockchain", "Web3"],
    gradient: "from-slate-900/80 via-zinc-800/60 to-stone-900/40",
    image: "/projects/csbsn.png",
    liveUrl: "https://csbsn-frontend.vercel.app/",
  },
];

export type Experience = {
  id: string;
  yearRange: string;
  period: string;
  location: string;
  title: string;
  company: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "aladia",
    yearRange: "2024 — 2026",
    period: "Mar 2024 — Jan 2026",
    location: "Brescia, Italy · Remote",
    title: "Senior Backend Developer",
    company: "Aladia",
    bullets: [
      "Designed and delivered a core platform feature using NestJS, TypeScript, and MongoDB, improving the learning experience for 10,000+ users.",
      "Integrated asynchronous messaging with Google Pub/Sub across 8+ NestJS microservices, reducing system downtime by 20%.",
      "Built and maintained automated CI/CD pipelines using GitHub Actions for 100+ releases, reducing manual verification time by 50%.",
      "Led a team of 3 junior developers, coordinating feature delivery, conducting code reviews, and enforcing engineering best practices.",
    ],
    tags: [
      "NestJS",
      "TypeScript",
      "MongoDB",
      "GCP",
      "Pub/Sub",
      "GitHub Actions",
      "Microservices",
    ],
  },
  {
    id: "csbsn",
    yearRange: "2025 — Present",
    period: "2025 — Present",
    location: "Remote",
    title: "Full-Stack Developer",
    company: "CSBSN",
    bullets: [
      "Built a decentralized funding platform empowering small businesses with community support and transparent fundraising.",
      "Developed the platform using NestJS and Next.js with Ethereum ecosystem integration for secure supporter contributions.",
      "Implemented real-time impact tracking so businesses and supporters can monitor funding outcomes transparently.",
    ],
    tags: ["NestJS", "Next.js", "Ethereum", "Blockchain", "Web3"],
  },
  {
    id: "orizon",
    yearRange: "2025",
    period: "Feb 2025 — Jun 2025",
    location: "Addis Ababa, Ethiopia",
    title: "Full-Stack Developer",
    company: "Orizon Tech",
    bullets: [
      "Built and enhanced a scalable system design platform using React, NestJS, and TypeScript.",
      "Integrated a fine-tuned LLaMA 4 model deployed on RunPod for AI-assisted architecture recommendations.",
      "Developed real-time collaboration features and responsive UI components using React.",
    ],
    tags: ["React", "NestJS", "TypeScript", "LLaMA 4", "RunPod"],
  },
  {
    id: "micro-sun",
    yearRange: "2024",
    period: "Feb 2024 — May 2024",
    location: "Addis Ababa, Ethiopia",
    title: "Frontend Development Intern",
    company: "Micro Sun & Sol",
    bullets: [
      "Built responsive and accessible user interfaces using Next.js, TypeScript, and Tailwind CSS.",
      "Integrated REST APIs and implemented state management with Zustand for real-time learning progress tracking.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
  },
];

export const skills = {
  languages: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Go",
    "SQL",
    "HTML/CSS",
    "C",
    "C++",
  ],
  frameworks: [
    "React",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Next.js",
    "Angular",
    "Flutter",
  ],
  ai: ["LangChain", "LangGraph", "RAG", "MCP"],
  cloud: ["GCP", "Docker", "Kubernetes", "Google Pub/Sub", "RabbitMQ"],
  tools: ["Git", "GitHub", "GitHub Actions", "RunPod", "VS Code", "PyCharm"],
};

export const education = [
  {
    school: "Addis Ababa University",
    degree: "BSc in Software Engineering",
    period: "June 2021 — June 2025",
    location: "Addis Ababa, Ethiopia",
    details: "CGPA: 3.63/4.0",
    url: "https://aau.edu.et",
  },
  {
    school: "Africa To Silicon Valley",
    degree: "Coding Bootcamp",
    period: "Feb 2024 — Nov 2024",
    location: "Addis Ababa, Ethiopia",
    details:
      "Data Structures, Algorithms, Problem Solving, LeetCode, Codeforces",
    url: "https://a2sv.org",
  },
];

export const achievements = [
  {
    title: "350+ LeetCode Problems",
    description: "Solved 500+ algorithmic problems on LeetCode.",
    link: siteConfig.links.leetcode,
  },
  {
    title: "Top Rated on Upwork",
    description:
      "Earned $30K+ delivering high-quality software solutions to global clients.",
    link: siteConfig.links.upwork,
  },
];

export const navLinks = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
