"use client";

import { motion } from "framer-motion";
import {
    GitBranch,
    Github,
    Code2,
    Figma,
    Triangle,
    Package,
    Boxes,
    FlaskConical,
    Box,
    Smartphone,
    Network,
} from "lucide-react";
import { skills, tools, learningTools } from "@/lib/data";
import SkillBar from "@/app/components/SkillBar";
import { Tool } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    GitBranch,
    Github,
    Code2,
    Figma,
    Triangle,
    Package,
    Boxes,
    FlaskConical,
    Box,
    Smartphone,
    Network,
};

function ToolItem({ tool, index }: { tool: Tool; index: number }) {
    const Icon = iconMap[tool.icon];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex flex-col items-center gap-2"
        >
            {Icon && (
                <Icon className="h-8 w-8 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            )}
            <span className="text-sm text-[#525252]">{tool.name}</span>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-[1200px]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                        Expertise
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-foreground lg:text-5xl">
                        Technologies I work with
                    </h2>
                    <p className="max-w-[600px] text-lg text-muted-foreground">
                        My technical toolkit for building modern web applications.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Technical Skills - Progress Bars */}
                    <div>
                        <h3 className="mb-8 text-lg font-semibold text-foreground">
                            Frontend Development
                        </h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="mb-8 text-lg font-semibold text-foreground">
                                Tools & Workflow
                            </h3>
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                                {tools.map((tool, index) => (
                                    <ToolItem key={tool.name} tool={tool} index={index} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-8 text-lg font-semibold text-foreground">
                                Currently Learning
                            </h3>
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                                {learningTools.map((tool, index) => (
                                    <ToolItem key={tool.name} tool={tool} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
