"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const inputClasses =
    "mt-2 w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-[15px] text-foreground placeholder:text-faint transition-colors duration-200 hover:border-faint/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const labelClasses = "block text-sm text-muted-foreground";

export default function ContactForm() {
    const { t } = useLanguage();
    const f = t.contact.form;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://formspree.io/f/xgokpbqn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Formspree uses the "subject" field as the email subject line.
                body: JSON.stringify({
                    ...formData,
                    subject: `Portfolio: ${formData.subject} (from ${formData.name})`,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error("Failed to send");
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const set = (key: keyof typeof formData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setFormData({ ...formData, [key]: e.target.value });

    return (
        <form onSubmit={handleSubmit} className="max-w-[560px] space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClasses}>
                    {f.nameLabel}
                    <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder={f.namePlaceholder}
                        required
                        value={formData.name}
                        onChange={set("name")}
                        className={inputClasses}
                    />
                </label>
                <label className={labelClasses}>
                    {f.emailLabel}
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder={f.emailPlaceholder}
                        required
                        value={formData.email}
                        onChange={set("email")}
                        className={inputClasses}
                    />
                </label>
            </div>
            <label className={labelClasses}>
                {f.subjectLabel}
                <input
                    type="text"
                    name="subject"
                    placeholder={f.subjectPlaceholder}
                    required
                    value={formData.subject}
                    onChange={set("subject")}
                    className={inputClasses}
                />
            </label>
            <label className={labelClasses}>
                {f.messageLabel}
                <textarea
                    name="message"
                    rows={5}
                    placeholder={f.messagePlaceholder}
                    required
                    value={formData.message}
                    onChange={set("message")}
                    className={`${inputClasses} resize-none`}
                />
            </label>

            <div className="space-y-3 pt-1">
                {[f.consentEmail, f.consentAccuracy].map((consent) => (
                    <label key={consent} className="flex cursor-pointer items-start gap-3">
                        <input
                            type="checkbox"
                            required
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[#f0b35a]"
                        />
                        <span className="text-sm leading-snug text-muted-foreground">{consent}</span>
                    </label>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
                <button type="submit" disabled={status === "sending"} className="btn-primary">
                    {status === "sending" ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {f.sending}
                        </>
                    ) : (
                        <>
                            {f.submit}
                            <ArrowRight className="h-4 w-4" />
                        </>
                    )}
                </button>
                <p role="status" className="text-sm">
                    {status === "success" && <span className="text-emerald-400">{f.success}</span>}
                    {status === "error" && <span className="text-destructive">{f.error}</span>}
                </p>
            </div>
        </form>
    );
}
