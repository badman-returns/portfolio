'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const current = document.documentElement.getAttribute('data-theme');
    const resolvedTheme = saved || current || 'dark';

    document.documentElement.setAttribute('data-theme', resolvedTheme);
    setTheme(resolvedTheme);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-md border border-[var(--surface-border)] px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
