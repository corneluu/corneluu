"use client";

import { motion, Variants } from "framer-motion";
import { Music, Fish, Target, Gamepad2, Cpu, Camera, ExternalLink, LucideIcon } from "lucide-react";
import { hobbies } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
    Music,
    Fish,
    Target,
    Gamepad2,
    Cpu,
    Camera,
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-32 px-6 lg:px-12 bg-secondary/30">
            <div className="mx-auto max-w-[1200px]">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                >
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                        Free Time
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-foreground lg:text-5xl">
                        What I like to do
                    </h2>
                    <p className="max-w-[600px] text-lg text-muted-foreground">
                        When I&apos;m not writing code, you can find me recharging through these activities.
                    </p>
                </motion.div>

                {/* Hobbies Grid */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {hobbies.map((hobby, index) => {
                        const Icon = iconMap[hobby.icon];
                        return (
                            <motion.div
                                key={hobby.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-primary/10"
                            >
                                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-foreground">
                                    {hobby.name}
                                </h3>
                                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                                    {hobby.description}
                                </p>

                                {hobby.linkUrl && (
                                    <div className="mt-auto">
                                        <a
                                            href={hobby.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                                        >
                                            {hobby.linkText}
                                            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
