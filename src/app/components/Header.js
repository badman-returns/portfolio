"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--surface-border)]">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <span className="font-medium">Trishnangshu Goswami</span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            Work
          </Link>
          <Link
            href="/writing"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            Writing
          </Link>
          <Link
            href="/about"
            className="font-medium hover:text-[var(--accent)] transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--foreground)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--surface-border)]">
          <nav className="px-6 py-4 flex flex-col gap-4 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/work" onClick={() => setOpen(false)}>
              Work
            </Link>
            <Link href="/writing" onClick={() => setOpen(false)}>
              Writing
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
