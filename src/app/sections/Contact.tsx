"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { socialLinks } from "@/lib/data";
import { SocialLink } from "@/types";
import ContactForm from "@/app/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-32 px-6 lg:px-12">
            <div className="mx-auto max-w-[1200px]">
                {/* Decorative background gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-card/50" />

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.4fr_0.6fr]">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                            {t.contact.badge}
                        </span>
                        <h2 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-foreground lg:text-5xl">
                            {t.contact.heading}
                        </h2>
                        <p className="mb-12 text-lg text-muted-foreground">
                            {t.contact.description}
                        </p>

                        <div className="space-y-8">
                            {/* Contact Methods */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-full bg-primary/10 p-3 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="mb-1 text-sm text-[#525252]">{t.contact.emailLabel}</div>
                                    <a
                                        href="mailto:cornelmrn18@gmail.com"
                                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                                    >
                                        cornelmrn18@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-full bg-primary/10 p-3 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="mb-1 text-sm text-[#525252]">{t.contact.locationLabel}</div>
                                    <div className="text-base font-medium text-foreground">
                                        {t.contact.locationValue}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Grid */}
                        <div className="mt-12">
                            <div className="mb-4 text-sm font-semibold text-foreground">
                                {t.contact.socialHeading}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {(socialLinks as SocialLink[]).map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.name}
                                        className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-secondary transition-all hover:bg-primary/20 hover:ring-2 hover:ring-primary/50"
                                    >
                                        {link.iconPath ? (
                                            <Image
                                                src={link.iconPath}
                                                alt={link.name}
                                                width={48}
                                                height={48}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        ) : (
                                            <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
                                                {link.name.substring(0, 2)}
                                            </span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
