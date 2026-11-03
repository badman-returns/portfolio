import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "./components/Header";

const siteUrl = "https://trishgoswami.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trishnangshu Goswami — Senior Software Engineer",
    template: "%s | Trish Goswami",
  },
  description:
    "Trishnangshu Sekhar Goswami (Trish Goswami) — Senior Software Engineer who builds AI products end to end: voice and text agents, streaming agent chat, MCP tools, LLM cost reporting, and the React layer that renders model output. Before that: real-time trading, healthcare, and e-commerce products.",
  keywords: [
    "Trishnangshu Goswami",
    "Trish Goswami",
    "Trishnangshu Sekhar Goswami",
    "Trish",
    "Trishnangshu",
    "senior software engineer",
    "AI engineer",
    "LLM applications",
    "Model Context Protocol",
    "agent workflows",
    "Node.js",
    "PostgreSQL",
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
    title: "Trishnangshu Goswami — Senior Software Engineer",
    description:
      "Trish Goswami — Senior Software Engineer building AI products end to end: agents, streaming chat, MCP tools, and the React layer that renders model output.",
    images: [
      {
        url: "/dp.png",
        width: 1200,
        height: 630,
        alt: "Trishnangshu Goswami — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trishnangshu Goswami — Senior Software Engineer",
    description:
      "Trish Goswami — building & debugging AI products end to end.",
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
    jobTitle: "Senior Software Engineer",
    sameAs: [
      "https://github.com/badman-returns",
      "https://linkedin.com/in/trishnangshugoswami",
      "https://x.com/ts_goswami",
    ],
    knowsAbout: [
      "Software Engineering",
      "AI Product Engineering",
      "LLM Applications",
      "Model Context Protocol",
      "Node.js",
      "PostgreSQL",
      "React",
      "Next.js",
      "JavaScript",
      "Real-time UI Systems",
      "Web Performance",
    ],
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: 'html::-webkit-scrollbar{display:none}html{scrollbar-width:none;-ms-overflow-style:none}' }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col scrollbar-hide">
        {/* Header */}
        <Header />

        {/* Main */}
        <main className="flex-1">{children}</main>

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
