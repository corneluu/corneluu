"use client";

import { motion } from "framer-motion";
import { Experience as ExperienceType } from "@/types";

interface TimelineItemProps {
    experience: ExperienceType;
    index: number;
    isLast: boolean;
}

export default function TimelineItem({
    experience,
    index,
    isLast,
}: TimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
            }}
            className="relative flex gap-8"
        >
            {/* Timeline marker */}
            <div className="relative flex flex-col items-center">
                <div className="relative z-10 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                {!isLast && (
                    <div className="absolute top-3 h-full w-[2px] bg-border" />
                )}
            </div>

            {/* Content */}
            <div className="pb-12">
                <span className="text-sm font-semibold text-primary">
                    {experience.period}
                </span>
                <div className="mt-2 rounded-xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                        {experience.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {experience.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                        {experience.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
