"use client";

import { skills, tools, learningTools } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import Section, { Reveal } from "@/app/components/Section";

export default function Skills() {
    const { t } = useLanguage();

    const groups = [
        {
            heading: t.skills.coreHeading,
            items: skills.filter((s) => s.level !== "Learning").map((s) => s.name),
        },
        { heading: t.skills.toolsHeading, items: tools.map((tool) => tool.name) },
        {
            heading: t.skills.learningHeading,
            items: [
                ...skills.filter((s) => s.level === "Learning").map((s) => s.name),
                ...learningTools.map((tool) => tool.name),
            ],
        },
    ];

    return (
        <Section id="skills" title={t.skills.heading} lead={t.skills.description}>
            <dl className="border-b border-border">
                {groups.map((group, index) => (
                    <Reveal
                        key={group.heading}
                        delay={index * 0.06}
                        className="grid gap-4 border-t border-border py-7 sm:grid-cols-[200px_1fr] sm:gap-8"
                    >
                        <dt className="text-[15px] font-medium text-foreground">{group.heading}</dt>
                        <dd>
                            <ul className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className={index === 0 ? "tag border-faint/50 text-foreground" : "tag"}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </Reveal>
                ))}
            </dl>
        </Section>
    );
}
