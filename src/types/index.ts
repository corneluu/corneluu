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

export type Language = "en" | "ro" | "de" | "it";

export type SkillLevel = "Advanced" | "Intermediate" | "Beginner" | "Learning";

export interface Skill {
    name: string;
    level: SkillLevel;
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

