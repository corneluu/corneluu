import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Miron Cornel-Iosif - Frontend Developer | React & TypeScript Expert",
  description:
    "Professional portfolio of Miron Cornel-Iosif, a frontend developer specializing in React, TypeScript, and modern web technologies.",
  metadataBase: new URL("https://corneluu.github.io"),
  keywords: ["web developer", "frontend developer", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Miron Cornel-Iosif" }],
  robots: "index, follow",
  openGraph: {
    title: "Miron Cornel-Iosif - Frontend Developer",
    description:
      "Building digital experiences with React, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://corneluu.github.io",
    images: ["/corneluu/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miron Cornel-Iosif - Frontend Developer",
    description:
      "Building digital experiences with React, TypeScript, and modern web technologies.",
    images: ["/corneluu/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Miron Cornel-Iosif",
    url: "https://corneluu.github.io",
    jobTitle: "Frontend Developer & Audio Technician",
    sameAs: [
      "https://github.com/corneluu",
      "https://linkedin.com",
    ],
    knowsAbout: ["React", "TypeScript", "Next.js", "Audio Engineering"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Timișoara",
      addressCountry: "Romania",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
