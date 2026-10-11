"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Skill } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface SkillBarProps {
    skill: Skill;
    index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
    const { t } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const localizedLevel = t.skills.levels[skill.level] || skill.level;

    return (
        <div ref={ref} className="space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-foreground">
                    {skill.name}
                </span>
                <span className="text-xs text-[#525252]">{localizedLevel}</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="h-full rounded-full bg-primary"
                />
            </div>
        </div>
    );
}
