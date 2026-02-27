import "./globals.css";
import Header from "./components/Header";

const siteUrl = "https://trishgoswami.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trishnangshu Goswami — Frontend Engineer",
    template: "%s | Trish Goswami",
  },
  description:
    "Trishnangshu Sekhar Goswami (Trish Goswami) — Frontend Engineer specializing in performance-critical, real-time UI systems. Building and debugging trading platforms, healthcare products, and long-running frontends.",
  keywords: [
    "Trishnangshu Goswami",
    "Trish Goswami",
    "Trishnangshu Sekhar Goswami",
    "Trish",
    "Trishnangshu",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "JavaScript engineer",
    "real-time UI",
    "trading platform frontend",
    "web performance",
  ],
  authors: [{ name: "Trishnangshu Sekhar Goswami", url: siteUrl }],
  creator: "Trishnangshu Goswami",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Trish Goswami",
    title: "Trishnangshu Goswami — Frontend Engineer",
    description:
      "Trish Goswami — Frontend Engineer building performance-critical, real-time frontend systems across trading, healthcare, and consumer products.",
    images: [
      {
        url: "/dp.png",
        width: 1200,
        height: 630,
        alt: "Trishnangshu Goswami — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trishnangshu Goswami — Frontend Engineer",
    description:
      "Trish Goswami — building & debugging performance-critical frontend systems.",
    creator: "@ts_goswami",
    images: ["/dp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/dp.png" }],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Trishnangshu Sekhar Goswami",
    alternateName: ["Trish Goswami", "Trish", "Trishnangshu Goswami"],
    url: "https://trishgoswami.com",
    jobTitle: "Frontend Engineer",
    sameAs: [
      "https://github.com/badman-returns",
      "https://linkedin.com/in/trishnangshugoswami",
      "https://x.com/ts_goswami",
    ],
    knowsAbout: [
      "Frontend Engineering",
      "React",
      "Next.js",
      "JavaScript",
      "Real-time UI Systems",
      "Web Performance",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main */}
        <main className="flex-1 mx-auto max-w-6xl px-6">{children}</main>

        {/* Footer */}
        <footer className="border-t border-[var(--surface-border)]">
          <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
            <p>
              © {new Date().getFullYear()} Trishnangshu Goswami. All rights
              reserved.
            </p>

            <p className="text-[var(--muted-light)]">
              Built with clarity over cleverness.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
