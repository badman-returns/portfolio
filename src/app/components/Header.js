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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        {/* Brand */}
        <Link href="/" className="max-w-[72vw] truncate text-sm font-medium tracking-wide sm:text-base md:max-w-none">
          Trishnangshu Goswami
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex lg:gap-10">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <Link
                href={item.href}
                className="px-1 py-1 font-medium transition-colors hover:text-[var(--accent)]"
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
            <nav className="flex flex-col gap-5 px-4 py-5 text-sm sm:px-6 sm:py-6">
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
