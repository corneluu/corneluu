"use client";

import { useState, useEffect, useCallback } from "react";

export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [activeSection, setActiveSection] = useState<string>("");
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setScrollDirection("down");
            setIsNavVisible(false);
        } else {
            setScrollDirection("up");
            setIsNavVisible(true);
        }

        setScrollY(currentScrollY);
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const sectionIds = ["about", "projects", "skills", "experience", "contact"];
        const observer = new IntersectionObserver(
            (entries) => {
                // Track all intersecting entries and pick the one with the highest intersection ratio
                // or just rely on the strict root margin to only have a single intersection
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "-20% 0px -70% 0px" }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return { scrollY, scrollDirection, isNavVisible, activeSection };
}
