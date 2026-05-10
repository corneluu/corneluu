import { Project, Skill, Tool, Experience, NavLink } from "@/types";

export const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Hobbies", href: "#hobbies" },
    { label: "Contact", href: "#contact" },
];

export const hobbies = [
    {
        name: "Listening to music",
        icon: "Music",
        description: "Exploring new genres and compiling playlists. Music is an essential part of my daily creative process.",
        linkUrl: "https://open.spotify.com/user/xy4vp5d2xp0a8w8itcv0bgvfp?si=d1638c4de38142f2",
        linkText: "Follow on Spotify"
    },
    {
        name: "Fishing",
        icon: "Fish",
        description: "Spending quiet, patient time by the water. It's my favorite way to disconnect and recharge.",
        linkUrl: null,
        linkText: null
    },
    {
        name: "Playing pool",
        icon: "Target",
        description: "Enjoying friendly but strategic games of pool. It's a great exercise in geometry and focus.",
        linkUrl: null,
        linkText: null
    },
    {
        name: "Gaming",
        icon: "Gamepad2",
        description: "Immersing myself in interactive worlds. Gaming inspires my approach to digital experiences and problem-solving.",
        linkUrl: null,
        linkText: null
    },
    {
        name: "Creating prototype apps",
        icon: "Cpu",
        description: "Tinkering with code and sketching out new UI concepts just for the fun of building something new.",
        linkUrl: null,
        linkText: null
    },
    {
        name: "Photography & Videography",
        icon: "Camera",
        description: "Capturing moments, making videos, and editing them to tell a compelling visual story.",
        linkUrl: "https://www.instagram.com/corneluu__/",
        linkText: "Follow on Instagram"
    },
];

export const projects: Project[] = [
    {
        id: "mgm-bastion",
        title: "MGM Bastion",
        description:
            "A refined bilingual digital menu for an Italian restaurant located in Timișoara's historic Bastion. Focuses on a wood-fired pizza and panini menu with a rustic, authentic aesthetic.",
        image: "/corneluu/images/mgm.png",
        category: "web-app",
        technologies: ["React", "Vite", "Lucide React", "CSS"],
        liveUrl: "https://corneluu.github.io/mgm/",
        githubUrl: "https://github.com/corneluu/mgm",
        featured: true,
    },
    {
        id: "feeling",
        title: "Feeling",
        description:
            "A quiet, human, and intentional application that offers emotionally aligned verses and reflections based on how you feel. AI-driven spiritual reflection.",
        image: "/corneluu/images/feeling.png",
        category: "web-app",
        technologies: ["React", "Node.js", "Express", "OpenAI"],
        liveUrl: "https://corneluu.github.io/feeling/",
        githubUrl: "https://github.com/corneluu/feeling",
        featured: true,
    },
    {
        id: "harmonia-christi",
        title: "Harmonia Christi",
        description:
            "A secure choir sheet music platform with code-based authentication. Provides chorists with protected access to partiture and audio resources.",
        image: "/corneluu/images/harmonia-christi.jpg",
        category: "web-app",
        technologies: ["React", "Vite", "JavaScript", "CSS"],
        liveUrl: "https://corneluu.github.io/harmonia-christi/",
        githubUrl: "https://github.com/corneluu/harmonia-christi",
        featured: true,
    },
    {
        id: "ai-marketing",
        title: "AI Marketing Assistant",
        description:
            "A custom-designed AI character that helps with marketing work. This 3D-style persona streamlines creative tasks and assists in building a unique brand presence.",
        image: "/corneluu/images/ai-character.jpg",
        category: "experiment",
        technologies: ["AI Generation", "Digital Design", "Marketing Strategy"],
        featured: true,
    },
    {
        id: "portfolio",
        title: "Portfolio Website",
        description:
            "A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and accessibility.",
        image: "/corneluu/images/profile.jpg",
        category: "web-app",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://corneluu.github.io/corneluu/",
        githubUrl: "https://github.com/corneluu/corneluu",
        featured: true,
    },
    {
        id: "2026-lockin",
        title: "Quiet Progress (2026 Lock In)",
        description:
            "A private, React-based habit tracker that syncs daily progress directly to Google Sheets via Webhooks.",
        image: "/corneluu/images/projects/2026-lockin.png",
        category: "web-app",
        technologies: ["React", "Vite", "Google Apps Script"],
        liveUrl: "https://corneluu.github.io/2026lockin/",
        githubUrl: "https://github.com/corneluu/2026lockin",
        featured: false,
    },
    {
        id: "code-preview",
        title: "CodePen Local",
        description:
            "A modern, offline-capable, in-browser replica of CodePen with drag-and-drop import and zip export.",
        image: "/corneluu/images/projects/code-preview.png",
        category: "web-app",
        technologies: ["React", "Vite", "Tailwind CSS", "Monaco"],
        liveUrl: "https://corneluu.github.io/code-preview/",
        githubUrl: "https://github.com/corneluu/code-preview",
        featured: false,
    },
    {
        id: "scream",
        title: "Scream Runner",
        description:
            "A voice-controlled 3D endless runner game where players must scream into their microphone to move.",
        image: "/corneluu/images/projects/scream-runner.png",
        category: "experiment",
        technologies: ["HTML", "JavaScript", "Web Audio API"],
        liveUrl: "https://corneluu.github.io/scream/",
        githubUrl: "https://github.com/corneluu/scream",
        featured: false,
    },
    {
        id: "moneytracker",
        title: "Money Tracker",
        description:
            "A personal finance web application for tracking and managing daily expenses.",
        image: "/corneluu/images/projects/money-tracker.png",
        category: "web-app",
        technologies: ["React", "Vite", "JavaScript"],
        liveUrl: "https://corneluu.github.io/moneytracker/",
        githubUrl: "https://github.com/corneluu/moneytracker",
        featured: false,
    },
    {
        id: "calculator-aluat",
        title: "Calculator Aluat",
        description:
            "A specialized utility for calculating dough ingredients and hydration levels for baking.",
        image: "/corneluu/images/projects/calculator-aluat.png",
        category: "web-app",
        technologies: ["React", "Vite", "JavaScript"],
        liveUrl: "https://corneluu.github.io/calculator-aluat/",
        githubUrl: "https://github.com/corneluu/calculator-aluat",
        featured: false,
    },
];

export const skills: Skill[] = [
    { name: "React", level: "Advanced", percentage: 95 },
    { name: "TypeScript", level: "Advanced", percentage: 90 },
    { name: "Next.js", level: "Advanced", percentage: 85 },
    { name: "Tailwind CSS", level: "Advanced", percentage: 90 },
    { name: "JavaScript", level: "Advanced", percentage: 95 },
    { name: "HTML/CSS", level: "Advanced", percentage: 95 },
];

export const tools: Tool[] = [
    { name: "Git", icon: "GitBranch" },
    { name: "GitHub", icon: "Github" },
    { name: "VS Code", icon: "Code2" },
    { name: "Figma", icon: "Figma" },
    { name: "Vercel", icon: "Triangle" },
    { name: "npm", icon: "Package" },
    { name: "Webpack", icon: "Boxes" },
    { name: "Jest", icon: "FlaskConical" },
];

export const learningTools: Tool[] = [
    { name: "Three.js", icon: "Box" },
    { name: "React Native", icon: "Smartphone" },
    { name: "GraphQL", icon: "Network" },
];

export const experiences: Experience[] = [
    {
        period: "2024 - Present",
        title: "Frontend Developer",
        organization: "Freelance",
        description:
            "Building modern web applications for clients using React and Next.js. Delivering responsive, accessible, and performant solutions.",
    },
    {
        period: "2024 - Present",
        title: "Audio Technician & Choir Bass",
        organization: "Concert Venues & Choir Team",
        description:
            "Installing and operating professional audio systems for live events while performing as a bass in the choir team. Ensuring technical excellence and musical harmony.",
    },
    {
        period: "2023 - Present",
        title: "Computer Science Student",
        organization: "Tibiscus University",
        description:
            "Studying web development and software engineering at the Faculty of Computer Science and Informatics (FCIA).",
    },
    {
        period: "2023 - 2024",
        title: "Pizza Maker",
        organization: "Local Restaurant",
        description:
            "Developed time management and teamwork skills in fast-paced environment. Expert in working with various dough types and electric ovens.",
    },
    {
        period: "2019 - 2023",
        title: "High School Graduate",
        organization: "Liceul de Arte Ion Vidu",
        description:
            "Specialized in arts with focus on creative design principles. Developed strong foundation in creative thinking and artistic expression.",
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/corneluu",
        iconPath: "/corneluu/images/social/github.png",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com",
        iconPath: "/corneluu/images/social/linkedin.png",
    },
    {
        name: "Instagram (Personal)",
        url: "https://www.instagram.com/corneluu_/",
        iconPath: "/corneluu/images/social/instagram1.png",
    },
    {
        name: "Instagram (Work)",
        url: "https://www.instagram.com/corneluu__/",
        iconPath: "/corneluu/images/social/instagram2.png",
    },
];
