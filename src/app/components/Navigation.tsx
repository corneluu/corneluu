"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn, smoothScrollTo } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { scrollY, isNavVisible, activeSection } = useScrollPosition();
    const { t } = useLanguage();

    const navItems = [
        { label: t.nav.about, href: "#about" },
        { label: t.nav.projects, href: "#projects" },
        { label: t.nav.skills, href: "#skills" },
        { label: t.nav.experience, href: "#experience" },
        { label: t.nav.hobbies, href: "#hobbies" },
        { label: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            smoothScrollTo(el.getBoundingClientRect().top + window.scrollY);
        }
    };

    return (
        <>
            <nav
                aria-label="Main navigation"
                className={cn(
                    "fixed left-0 right-0 top-0 z-50 h-16 border-b border-transparent transition-[transform,border-color,background-color] duration-300",
                    mounted && scrollY > 50 && "border-border bg-background/80 backdrop-blur-md",
                    mounted && !isNavVisible && scrollY > 100 && !isMobileMenuOpen && "-translate-y-full"
                )}
            >
                <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6 lg:px-10">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo(0);
                        }}
                        className="text-[15px] font-semibold tracking-[-0.01em] text-foreground"
                    >
                        Miron Cornel-Iosif
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 lg:flex">
                        {navItems.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
                                className={cn(
                                    "text-sm transition-colors duration-200",
                                    activeSection === link.href.slice(1)
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </button>
                        ))}
                        <LanguageSelector />
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <LanguageSelector />
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-40 flex flex-col bg-background px-6 pb-8 pt-24 lg:hidden"
                >
                    <div className="flex flex-col">
                        {navItems.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={cn(
                                    "border-b border-border py-4 text-left text-xl tracking-[-0.01em] transition-colors duration-200",
                                    activeSection === link.href.slice(1)
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                    <div className="mt-auto">
                        <LanguageSelector isMobile />
                    </div>
                </div>
            )}
        </>
    );
}
