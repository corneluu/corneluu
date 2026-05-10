"use client";

import { ArrowUp } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
    const scrollToTop = () => {
        smoothScrollTo(0);
    };

    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-12">
                <div className="flex flex-col items-center gap-2 sm:items-start">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                        className="text-xl font-bold text-foreground transition-colors hover:text-primary"
                    >
                        Corneluu
                    </a>
                    <p className="text-sm text-[#525252] flex items-center gap-2">
                        <span>© {new Date().getFullYear()} All rights reserved.</span>
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-mono font-medium tracking-wider text-muted-foreground">v2.0.0</span>
                    </p>
                </div>

                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-transparent transition-all duration-300 hover:scale-110 hover:bg-secondary active:scale-95"
                >
                    <ArrowUp className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                </button>
            </div>
        </footer>
    );
}
