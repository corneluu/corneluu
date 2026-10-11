"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import ProjectCard from "@/app/components/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const categories = [
        { label: t.projects.filters.all, value: "all" },
        { label: t.projects.filters.webApp, value: "web-app" },
        { label: t.projects.filters.mobile, value: "mobile" },
        { label: t.projects.filters.experiment, value: "experiment" },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-[1200px]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                        {t.projects.badge}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-foreground lg:text-5xl">
                        {t.projects.heading}
                    </h2>
                    <p className="max-w-[600px] text-lg text-muted-foreground">
                        {t.projects.description}
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="mt-10 mb-12 flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setActiveFilter(cat.value)}
                            className={cn(
                                "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                                activeFilter === cat.value
                                    ? "bg-secondary text-foreground"
                                    : "bg-transparent text-[#525252] hover:text-muted-foreground"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
