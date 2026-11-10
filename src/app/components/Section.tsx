"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export function Reveal({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay, ease: easeOut }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* Shared section frame: heading on the left (sticky on desktop), content on the right. */
export default function Section({
    id,
    title,
    lead,
    wide = false,
    children,
}: {
    id: string;
    title: string;
    lead?: string;
    wide?: boolean;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="border-t border-border px-6 py-20 lg:px-10 lg:py-28">
            <div
                className={cn(
                    "mx-auto max-w-[1120px]",
                    !wide && "grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20"
                )}
            >
                <Reveal className={cn(wide ? "mb-14 max-w-[560px]" : "lg:sticky lg:top-28 lg:self-start")}>
                    <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground lg:text-[28px] lg:leading-[1.2]">
                        {title}
                    </h2>
                    {lead && (
                        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                            {lead}
                        </p>
                    )}
                </Reveal>
                <div>{children}</div>
            </div>
        </section>
    );
}
