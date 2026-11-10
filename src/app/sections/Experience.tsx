"use client";

import { useLanguage } from "@/context/LanguageContext";
import Section, { Reveal } from "@/app/components/Section";

export default function Experience() {
    const { t } = useLanguage();

    return (
        <Section id="experience" title={t.experience.heading} lead={t.experience.description}>
            <ol className="border-b border-border">
                {t.experience.items.map((exp, index) => (
                    <li key={exp.title + exp.period}>
                        <Reveal
                            delay={index * 0.05}
                            className="grid gap-2 border-t border-border py-7 sm:grid-cols-[200px_1fr] sm:gap-8"
                        >
                            <p className="pt-0.5 font-mono text-[13px] tabular-nums text-faint">
                                {exp.period}
                            </p>
                            <div>
                                <h3 className="text-[17px] font-medium text-foreground">{exp.title}</h3>
                                <p className="mt-0.5 text-[15px] text-muted-foreground">
                                    {exp.organization}
                                </p>
                                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted-foreground">
                                    {exp.description}
                                </p>
                            </div>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
