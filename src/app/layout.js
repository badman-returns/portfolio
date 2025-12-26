import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
