"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.4fr_0.6fr]">
                    {/* Left Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="relative"
                    >
                        <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src="/corneluu/images/profile.jpg"
                                alt="Miron Cornel-Iosif - Frontend Developer"
                                fill
                                className="object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority
                            />
                        </div>
                        {/* Decorative accent line */}
                        <div className="absolute -bottom-5 -left-5 h-20 w-[2px] bg-primary hidden lg:block" />
                        {/* Experience badge */}
                        <div className="absolute -top-4 -right-4 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hidden lg:block">
                            {t.about.badgeYears}
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                            {t.about.badge}
                        </span>

                        <h2 className="mb-6 text-4xl font-bold leading-[1.2] tracking-[-0.02em] text-foreground lg:text-[36px]">
                            {t.about.heading}
                        </h2>

                        <div className="space-y-4 text-base leading-[1.7] text-muted-foreground">
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                        </div>

                        {/* Personal Details Grid */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {[
                                { label: t.about.details.nameLabel, value: "Miron Cornel-Iosif" },
                                { label: t.about.details.locationLabel, value: t.about.details.locationValue },
                                { label: t.about.details.emailLabel, value: "cornelmrn18@gmail.com" },
                                { label: t.about.details.availabilityLabel, value: t.about.details.availabilityValue },
                            ].map((detail) => (
                                <div key={detail.label}>
                                    <span className="text-sm text-[#525252]">
                                        {detail.label}
                                    </span>
                                    <p className="text-sm font-medium text-foreground">
                                        {detail.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
