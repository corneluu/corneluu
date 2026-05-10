"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
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
                body: JSON.stringify(formData),
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

    const inputClasses =
        "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-[#525252] transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="contact-name" className="sr-only">
                    Name
                </label>
                <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    aria-required="true"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                />
            </div>
            <div>
                <label htmlFor="contact-email" className="sr-only">
                    Email
                </label>
                <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    aria-required="true"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                />
            </div>
            <div>
                <label htmlFor="contact-subject" className="sr-only">
                    Subject
                </label>
                <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                    aria-required="true"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputClasses}
                />
            </div>
            <div>
                <label htmlFor="contact-message" className="sr-only">
                    Message
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    aria-required="true"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                />
            </div>

            <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary/20"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        I agree to be contacted via email regarding my inquiry.
                    </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary/20"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        I confirm that the information provided is correct and I&apos;m ready to collaborate.
                    </span>
                </label>
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
            >
                {status === "sending" ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="h-4 w-4" />
                    </>
                )}
            </button>

            {status === "success" && (
                <p className="text-center text-sm text-green-400">
                    Message sent successfully! I&apos;ll get back to you soon.
                </p>
            )}
            {status === "error" && (
                <p className="text-center text-sm text-destructive">
                    Something went wrong. Please try again or email me directly.
                </p>
            )}
        </form>
    );
}
