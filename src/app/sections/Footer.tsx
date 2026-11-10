"use client";

import { ArrowUp } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-border px-6 py-10 lg:px-10">
            <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-5 text-sm text-faint sm:flex-row sm:items-center">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-muted-foreground">Miron Cornel-Iosif</span>
                    <span>
                        © {new Date().getFullYear()} {t.footer.rights}
                    </span>
                    <span className="font-mono text-xs">v2.0.1</span>
                </p>

                <button
                    onClick={() => smoothScrollTo(0)}
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                    {t.footer.backToTop}
                    <ArrowUp className="h-3.5 w-3.5" />
                </button>
            </div>
        </footer>
    );
}
