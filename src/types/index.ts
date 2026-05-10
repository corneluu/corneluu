export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: "web-app" | "mobile" | "experiment";
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface Skill {
    name: string;
    level: "Advanced" | "Intermediate" | "Beginner";
    percentage: number;
}

export interface Tool {
    name: string;
    icon: string;
}

export interface Experience {
    period: string;
    title: string;
    organization: string;
    description: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon?: string;
    iconPath?: string;
}

