"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/letters", label: "Letters" },
  { href: "/time-capsule", label: "Time Capsules" },
  { href: "/birthday-vault", label: "Birthday Vault" },
  { href: "/milestones", label: "Milestones" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-card" role="navigation" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-accent font-heading text-lg tracking-wide hover:opacity-80 transition-opacity"
          aria-label="Words to Santhi - Home"
        >
          Words to Santhi
        </Link>

        <button
          className="md:hidden text-text p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === link.href
                  ? "text-accent"
                  : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-card px-4 py-3 flex flex-col gap-3" role="menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-secondary"
              }`}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
