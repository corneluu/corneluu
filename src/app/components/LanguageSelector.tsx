"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageOption {
    code: Language;
    label: string;
    flag: string;
    short: string;
}

const LANGUAGES: LanguageOption[] = [
    { code: "en", label: "English", flag: "🇬🇧", short: "EN" },
    { code: "ro", label: "Română", flag: "🇷🇴", short: "RO" },
    { code: "de", label: "Deutsch", flag: "🇩🇪", short: "DE" },
    { code: "it", label: "Italiano", flag: "🇮🇹", short: "IT" },
];

interface LanguageSelectorProps {
    className?: string;
    isMobile?: boolean;
}

export default function LanguageSelector({ className, isMobile = false }: LanguageSelectorProps) {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleSelect = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    if (isMobile) {
        return (
            <div className={cn("w-full border-t border-border pt-4 mt-2", className)}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-primary" />
                    Language / Limbă
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((item) => {
                        const isSelected = item.code === language;
                        return (
                            <button
                                key={item.code}
                                onClick={() => handleSelect(item.code)}
                                className={cn(
                                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all",
                                    isSelected
                                        ? "bg-primary/15 text-primary border border-primary/30"
                                        : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-base leading-none">{item.flag}</span>
                                    <span>{item.label}</span>
                                </span>
                                {isSelected && <Check className="h-3.5 w-3.5 text-primary" />}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div ref={dropdownRef} className={cn("relative inline-block text-left", className)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`Select language. Current language: ${currentLang.label}`}
                className={cn(
                    "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200",
                    isOpen
                        ? "border-primary/50 bg-secondary text-foreground shadow-sm"
                        : "border-border bg-card/60 text-muted-foreground hover:border-primary/30 hover:bg-secondary/70 hover:text-foreground"
                )}
            >
                <Globe className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm leading-none">{currentLang.flag}</span>
                <span className="font-mono">{currentLang.short}</span>
                <ChevronDown
                    className={cn(
                        "h-3 w-3 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180 text-primary"
                    )}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-44 origin-top-right rounded-xl border border-border bg-card/95 p-1.5 shadow-xl backdrop-blur-md z-50 focus:outline-none"
                        role="listbox"
                        aria-label="Languages"
                    >
                        <div className="space-y-1">
                            {LANGUAGES.map((item) => {
                                const isSelected = item.code === language;
                                return (
                                    <button
                                        key={item.code}
                                        role="option"
                                        aria-selected={isSelected}
                                        onClick={() => handleSelect(item.code)}
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-colors",
                                            isSelected
                                                ? "bg-primary/10 text-primary font-semibold"
                                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                        )}
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <span className="text-base leading-none">{item.flag}</span>
                                            <span>{item.label}</span>
                                        </span>
                                        {isSelected && (
                                            <Check className="h-3.5 w-3.5 text-primary" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
