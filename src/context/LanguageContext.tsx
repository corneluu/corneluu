"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/types";
import { translations, TranslationData } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const VALID_LANGUAGES: Language[] = ["en", "ro", "de", "it"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const storedLang = localStorage.getItem("portfolio_lang") as Language | null;
        if (storedLang && VALID_LANGUAGES.includes(storedLang)) {
            setLanguageState(storedLang);
            document.documentElement.lang = storedLang;
            return;
        }

        // Check browser preference if nothing stored
        const browserLang = navigator.language?.slice(0, 2).toLowerCase();
        if (browserLang && VALID_LANGUAGES.includes(browserLang as Language)) {
            setLanguageState(browserLang as Language);
            document.documentElement.lang = browserLang;
        }
    }, []);

    const setLanguage = (lang: Language) => {
        if (!VALID_LANGUAGES.includes(lang)) return;
        setLanguageState(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem("portfolio_lang", lang);
            document.documentElement.lang = lang;
        }
    };

    const t = translations[language] || translations.en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
