"use client";

import { motion, Variants } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";
import { ArrowDown, Download } from "lucide-react";

const codeSnippet = `import { useState } from 'react';

interface Portfolio {
  name: string;
  role: string;
  skills: string[];
}

const developer: Portfolio = {
  name: "Miron Cornel-Iosif",
  role: "Frontend Developer",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
  ],
};

export default developer;`;

export default function Hero() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay,
                ease: [0.4, 0, 0.2, 1],
            },
        }),
    };

    return (
        <section
            className="relative flex min-h-[700px] max-h-[1000px] items-center pt-16"
            style={{ height: "100vh" }}
        >
            {/* Background grid effect */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_0.7fr] lg:px-12">
                {/* Left Column - Text */}
                <div>
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
                    >
                        👋 Available for work
                    </motion.div>

                    <motion.h1
                        custom={0.1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="max-w-[600px] text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[56px] lg:text-[72px]"
                    >
                        Building digital experiences that matter
                    </motion.h1>

                    <motion.p
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-6 max-w-[540px] text-lg leading-relaxed text-muted-foreground"
                    >
                        I&apos;m Miron Cornel-Iosif, a frontend developer, audio technician, and choir bass specializing in React,
                        TypeScript, and modern web technologies. I create accessible,
                        performant, and beautiful user interfaces.
                    </motion.p>

                    <motion.div
                        custom={0.3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <button
                            onClick={() => {
                                const el = document.getElementById("projects");
                                if (el) {
                                    const yOffset = -80; // offset for fixed header
                                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                    smoothScrollTo(y);
                                }
                            }}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:scale-[1.05] active:scale-95 shadow-lg shadow-primary/20"
                        >
                            View My Work
                            <ArrowDown className="h-4 w-4" />
                        </button>
                        <a
                            href="/corneluu/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:scale-[1.05] active:scale-95"
                        >
                            Download CV
                            <Download className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-12 flex items-center gap-6"
                    >
                        {[
                            { number: "2+", label: "Years Experience" },
                            { number: "10+", label: "Projects" },
                            { number: "5+", label: "Technologies" },
                        ].map((stat, index) => (
                            <div key={stat.label} className="flex items-center gap-6">
                                {index > 0 && (
                                    <div className="h-8 w-px bg-border" />
                                )}
                                <div>
                                    <div className="text-sm font-semibold text-foreground">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column - Code Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="hidden animate-float lg:block"
                >
                    <div className="overflow-hidden rounded-xl border border-border bg-card">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                            <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
                            <div className="h-3 w-3 rounded-full bg-[#eab308]" />
                            <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
                            <span className="ml-2 text-xs text-muted-foreground">
                                portfolio.tsx
                            </span>
                        </div>
                        {/* Code Content */}
                        <div className="p-4">
                            <pre className="font-mono text-sm leading-relaxed text-muted-foreground">
                                <code>
                                    {codeSnippet.split("\n").map((line, i) => (
                                        <div key={i} className="flex">
                                            <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/40 select-none">
                                                {i + 1}
                                            </span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: highlightCode(line),
                                                }}
                                            />
                                        </div>
                                    ))}
                                </code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function highlightCode(line: string): string {
    return line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        // 1. Strings first, use single quotes for class to avoid double-quote collision later if any
        .replace(
            /(["'])(.*?)\1/g,
            "<span class='text-[#86efac]'>$1$2$1</span>"
        )
        // 2. Comments
        .replace(
            /\/\/.*/g,
            "<span class='text-[#525252]'>$&</span>"
        )
        // 3. Keywords
        .replace(
            /\b(import|from|interface|const|export|default)\b/g,
            "<span class='text-[#c084fc]'>$1</span>"
        )
        // 4. Types
        .replace(
            /\b(string|number|boolean)\b/g,
            "<span class='text-[#06b6d4]'>$1</span>"
        );
}
