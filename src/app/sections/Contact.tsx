"use client";

import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";
import ContactForm from "@/app/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import Section, { Reveal } from "@/app/components/Section";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <Section id="contact" title={t.contact.heading} lead={t.contact.description}>
            <div className="grid gap-14 xl:grid-cols-[1fr_240px] xl:gap-16">
                <Reveal>
                    <ContactForm />
                </Reveal>

                <Reveal delay={0.1}>
                    <dl className="space-y-7 text-[15px]">
                        <div>
                            <dt className="text-sm text-faint">{t.contact.emailLabel}</dt>
                            <dd className="mt-1">
                                <a href="mailto:cornelmrn18@gmail.com" className="link">
                                    cornelmrn18@gmail.com
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm text-faint">{t.contact.locationLabel}</dt>
                            <dd className="mt-1 text-foreground">{t.contact.locationValue}</dd>
                        </div>
                        <div>
                            <dt className="text-sm text-faint">{t.contact.socialHeading}</dt>
                            <dd className="mt-2">
                                <ul className="space-y-2">
                                    {socialLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="h-3.5 w-3.5 text-faint" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </Reveal>
            </div>
        </Section>
    );
}
