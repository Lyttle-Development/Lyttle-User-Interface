"use client";

import * as React from "react";
import Link from "next/link";

const navItems = [
  { href: "#colors", label: "Colors" },
  { href: "#typography", label: "Typography" },
  { href: "#buttons", label: "Buttons" },
  { href: "#forms", label: "Forms" },
  { href: "#feedback", label: "Feedback" },
  { href: "#data-display", label: "Data" },
  { href: "#navigation", label: "Navigation" },
  { href: "#overlays", label: "Overlays" },
  { href: "#layout", label: "Layout" },
];

export function ShowcaseNav() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
          : "bg-background border-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-foreground no-underline transition-opacity hover:opacity-80"
            aria-label="Lyttle Framework home"
          >
            <span style={{ color: "var(--brand-purple)" }}>Lyttle</span>
            <span className="text-foreground"> Framework</span>
          </Link>
          <nav aria-label="Section navigation">
            <ul className="m-0 hidden list-none items-center gap-1 p-0 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center rounded-md px-3 py-2 text-sm text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="http://localhost:6006"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground sm:flex"
              aria-label="Open Storybook component explorer"
            >
              <StorybookIcon />
              Storybook
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

function StorybookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 256 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M188.56 0L185.5 68.26a3.46 3.46 0 0 0 5.78 2.78l18.94-14.42 16.4 15.12a3.46 3.46 0 0 0 5.68-2.99L228.04 0h-39.48zM6.38 36.74L0 318.28l205.16 10.9L256 35.2 6.38 36.74z"
        fill="#FF4785"
      />
      <path
        d="M161.11 95.43l-1.46 24.93-54.42 2.08C92 122.86 84.68 130.1 84.68 139.3c0 10.94 8.86 19.67 19.8 19.67 26.36 0 44.6-1.3 44.6-1.3l-2.58 44.16S132.22 204 114 204c-47.04 0-81.56-23.95-81.56-72.95 0-47.2 33.18-71.5 78.42-72.96l50.25-2.66zM162.7 146.3l-2.12 36.32-48 1.84L162.7 146.3z"
        fill="white"
      />
    </svg>
  );
}

function ThemeToggle() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {dark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}