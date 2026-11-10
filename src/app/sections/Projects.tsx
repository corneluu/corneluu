"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import Section, { Reveal } from "@/app/components/Section";

const SHOWCASE_COUNT = 4;

function ProjectLinks({ project }: { project: Project }) {
    const { t } = useLanguage();
    return (
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link">
                    {t.projects.live}
                    <ArrowUpRight className="h-3.5 w-3.5 text-faint" />
                </a>
            )}
            {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link">
                    {t.projects.source}
                    <ArrowUpRight className="h-3.5 w-3.5 text-faint" />
                </a>
            )}
        </div>
    );
}

export default function Projects() {
    const { t } = useLanguage();
    const showcase = projects.slice(0, SHOWCASE_COUNT);
    const rest = projects.slice(SHOWCASE_COUNT);
    const text = (p: Project) => ({
        title: t.projects.items[p.id]?.title || p.title,
        description: t.projects.items[p.id]?.description || p.description,
    });

    return (
        <Section id="projects" title={t.projects.heading} lead={t.projects.description} wide>
            <div className="space-y-20 lg:space-y-28">
                {showcase.map((project, index) => {
                    const { title, description } = text(project);
                    return (
                        <Reveal key={project.id}>
                            <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                                <a
                                    href={project.liveUrl || project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex={-1}
                                    aria-hidden
                                    className={cn(
                                        "group relative block aspect-[16/10] overflow-hidden rounded-xl bg-card lg:col-span-7",
                                        index % 2 === 1 && "lg:order-2"
                                    )}
                                >
                                    <Image
                                        src={project.image}
                                        alt=""
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                        sizes="(max-width: 1024px) 100vw, 650px"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                                </a>

                                <div className="lg:col-span-5">
                                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground lg:text-[32px]">
                                        {title}
                                    </h3>
                                    <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted-foreground">
                                        {description}
                                    </p>
                                    <ul className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <li key={tech} className="tag">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-7">
                                        <ProjectLinks project={project} />
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </div>

            <Reveal className="mt-24 lg:mt-32">
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
                    {t.projects.moreHeading}
                </h3>
                <ul className="mt-6 border-b border-border">
                    {rest.map((project) => {
                        const { title, description } = text(project);
                        return (
                            <li
                                key={project.id}
                                className="grid gap-x-8 gap-y-3 border-t border-border py-6 sm:grid-cols-[176px_1fr] lg:grid-cols-[176px_1fr_auto]"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-card sm:row-span-2 lg:row-span-1">
                                    <Image
                                        src={project.image}
                                        alt=""
                                        fill
                                        loading="lazy"
                                        className="object-cover object-top"
                                        sizes="(max-width: 640px) 100vw, 176px"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
                                </div>
                                <div>
                                    <h4 className="mb-1.5 text-base font-medium text-foreground">{title}</h4>
                                    <p className="max-w-[60ch] text-[15px] leading-relaxed text-muted-foreground">
                                        {description}
                                    </p>
                                    <p className="mt-2 text-sm text-faint">
                                        {project.technologies.join(" · ")}
                                    </p>
                                </div>
                                <ProjectLinks project={project} />
                            </li>
                        );
                    })}
                </ul>
            </Reveal>
        </Section>
    );
}
