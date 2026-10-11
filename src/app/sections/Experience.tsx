"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import TimelineItem from "@/app/components/TimelineItem";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
    const { t } = useLanguage();
    const experienceList = t.experience.items || experiences;

    return (
        <section id="experience" className="py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-[800px]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="mb-16"
                >
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                        {t.experience.badge}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-foreground lg:text-5xl">
                        {t.experience.heading}
                    </h2>
                    <p className="max-w-[600px] text-lg text-muted-foreground">
                        {t.experience.description}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative ml-4 lg:ml-6">
                    {experienceList.map((exp, index) => (
                        <TimelineItem
                            key={exp.title + exp.period}
                            experience={exp}
                            index={index}
                            isLast={index === experienceList.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
