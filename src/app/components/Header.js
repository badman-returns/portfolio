"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--surface-border)] bg-[color:color-mix(in_oklab,var(--background)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="font-medium tracking-wide">
          Trishnangshu Goswami
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <Link
                href={item.href}
                className="font-medium transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="border-t border-[var(--surface-border)] md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-4 px-6 py-4 text-sm">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
