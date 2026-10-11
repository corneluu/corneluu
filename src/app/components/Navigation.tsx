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
            const yOffset = -80; // offset for fixed header
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            smoothScrollTo(y);
        }
    };

    return (
        <>
            <nav
                aria-label="Main navigation"
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 h-16 transition-transform duration-300",
                    "bg-background/80 backdrop-blur-[12px]",
                    mounted && scrollY > 50 && "border-b border-border",
                    mounted && !isNavVisible && scrollY > 100 && "-translate-y-full"
                )}
            >
                <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-12">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo(0);
                        }}
                        className="text-xl font-bold text-foreground transition-colors duration-200 hover:text-primary"
                    >
                        Corneluu
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-7 md:flex">
                        {navItems.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={cn(
                                    "text-sm font-medium transition-all duration-300 hover:scale-105",
                                    activeSection === link.href.slice(1)
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="ml-2 pl-4 border-l border-border/70">
                            <LanguageSelector />
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-3 md:hidden">
                        <LanguageSelector />
                        <button
                            className="flex items-center justify-center p-1 rounded-md text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Sheet */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div
                        id="mobile-menu"
                        className="absolute right-0 top-0 h-full w-[290px] bg-card border-l border-border p-6 pt-20 flex flex-col justify-between"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col gap-5">
                            {navItems.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={cn(
                                        "text-left text-lg font-medium transition-colors duration-200",
                                        activeSection === link.href.slice(1)
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        <div className="pb-6">
                            <LanguageSelector isMobile />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
