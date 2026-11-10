"use client";

import { Music, Fish, Target, Gamepad2, Cpu, Camera, ArrowUpRight, LucideIcon } from "lucide-react";
import { hobbies } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import Section, { Reveal } from "@/app/components/Section";

const iconMap: Record<string, LucideIcon> = { Music, Fish, Target, Gamepad2, Cpu, Camera };

export default function Hobbies() {
    const { t } = useLanguage();

    return (
        <Section id="hobbies" title={t.hobbies.heading} lead={t.hobbies.description}>
            <Reveal>
                <ul className="grid gap-x-12 sm:grid-cols-2">
                    {hobbies.map((hobby) => {
                        const Icon = iconMap[hobby.icon];
                        const item = t.hobbies.items[hobby.name];

                        return (
                            <li key={hobby.name} className="flex gap-4 border-t border-border py-6">
                                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-faint" strokeWidth={1.5} />
                                <div>
                                    <h3 className="text-base font-medium text-foreground">
                                        {item?.name || hobby.name}
                                    </h3>
                                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                                        {item?.description || hobby.description}
                                    </p>
                                    {hobby.linkUrl && (
                                        <a
                                            href={hobby.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link mt-3 text-sm"
                                        >
                                            {item?.linkText || hobby.linkText}
                                            <ArrowUpRight className="h-3.5 w-3.5 text-faint" />
                                        </a>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Reveal>
        </Section>
    );
}
