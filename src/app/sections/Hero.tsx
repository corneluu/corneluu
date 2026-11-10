"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { easeOut } from "@/app/components/Section";

const rise = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function Hero() {
    const { t } = useLanguage();

    const stats = [
        { number: "2+", label: t.hero.stats.yearsExp },
        { number: "10+", label: t.hero.stats.projects },
        { number: "5+", label: t.hero.stats.technologies },
    ];

    return (
        <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-44">
            {/* Soft light from the top edge */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
                style={{
                    background:
                        "radial-gradient(60% 100% at 50% 0%, rgba(240,179,90,0.07) 0%, rgba(255,255,255,0.02) 45%, transparent 100%)",
                }}
            />

            <div className="mx-auto grid max-w-[1120px] items-end gap-14 lg:grid-cols-[1fr_340px] lg:gap-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.08 }}
                >
                    <motion.p
                        variants={rise}
                        className="mb-8 inline-flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        {t.hero.status}
                    </motion.p>

                    <motion.h1
                        variants={rise}
                        className="text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[76px]"
                    >
                        Miron
                        <br />
                        Cornel-Iosif
                    </motion.h1>

                    <motion.p
                        variants={rise}
                        className="mt-7 max-w-[520px] text-xl leading-snug tracking-[-0.01em] text-foreground lg:text-2xl"
                    >
                        {t.hero.role}
                    </motion.p>

                    <motion.p
                        variants={rise}
                        className="mt-5 max-w-[540px] text-base leading-relaxed text-muted-foreground"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div variants={rise} className="mt-9 flex flex-wrap gap-3">
                        <button
                            onClick={() => {
                                const el = document.getElementById("projects");
                                if (el) {
                                    smoothScrollTo(el.getBoundingClientRect().top + window.scrollY);
                                }
                            }}
                            className="btn-primary"
                        >
                            {t.hero.ctaWork}
                            <ArrowDown className="h-4 w-4" />
                        </button>
                        <a
                            href="/corneluu/Miron%20Cornel%20Iosif.pdf"
                            download="Miron Cornel Iosif.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                        >
                            {t.hero.ctaCv}
                            <Download className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.dl
                        variants={rise}
                        className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-baseline gap-2">
                                <dd className="text-base font-medium tabular-nums text-foreground">
                                    {stat.number}
                                </dd>
                                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                            </div>
                        ))}
                    </motion.dl>
                </motion.div>

                {/* Portrait: unveils upward once, the page's one authored moment */}
                <motion.div
                    initial={{ clipPath: "inset(100% 0% 0% 0% round 16px)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0% round 16px)" }}
                    transition={{ duration: 1.2, delay: 0.25, ease: easeOut }}
                    className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-2xl bg-card lg:mx-0"
                >
                    <motion.div
                        initial={{ scale: 1.12 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.6, delay: 0.25, ease: easeOut }}
                        className="absolute inset-0"
                    >
                        {/* Source photo is full-length; these offsets crop it to head and shoulders. */}
                        <Image
                            src="/corneluu/images/profile.jpg"
                            alt="Miron Cornel-Iosif"
                            width={685}
                            height={1024}
                            priority
                            className="absolute max-w-none"
                            style={{ width: "160%", height: "auto", left: "-35%", top: "-45%" }}
                        />
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </motion.div>
            </div>
        </section>
    );
}
