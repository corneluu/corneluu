"use client";

import { useLanguage } from "@/context/LanguageContext";
import Section, { Reveal } from "@/app/components/Section";

export default function About() {
    const { t } = useLanguage();

    const details = [
        { label: t.about.details.nameLabel, value: "Miron Cornel-Iosif" },
        { label: t.about.details.locationLabel, value: t.about.details.locationValue },
        { label: t.about.details.emailLabel, value: "cornelmrn18@gmail.com", href: "mailto:cornelmrn18@gmail.com" },
        { label: t.about.details.availabilityLabel, value: t.about.details.availabilityValue },
    ];

    return (
        <Section id="about" title={t.about.heading}>
            <Reveal className="max-w-[640px] space-y-5 text-lg leading-[1.65] text-muted-foreground">
                <p className="text-foreground">{t.about.p1}</p>
                <p>{t.about.p2}</p>
            </Reveal>

            <Reveal delay={0.1}>
                <dl className="mt-12 grid max-w-[640px] grid-cols-1 gap-x-10 sm:grid-cols-2">
                    {details.map((detail) => (
                        <div key={detail.label} className="border-t border-border py-4">
                            <dt className="text-sm text-faint">{detail.label}</dt>
                            <dd className="mt-1 text-[15px] text-foreground">
                                {detail.href ? (
                                    <a href={detail.href} className="link">
                                        {detail.value}
                                    </a>
                                ) : (
                                    detail.value
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        </Section>
    );
}
