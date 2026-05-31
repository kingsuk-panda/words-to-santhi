"use client";

import { useState, useRef, useEffect } from "react";
import { letters } from "@/data/letters";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof letters>([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = letters.filter(
      (l) =>
        l.title.toLowerCase().includes(q) &&
        (!l.unlockDate || new Date(l.unlockDate) <= new Date()) &&
        l.category !== "easter-egg"
    );
    setResults(filtered.slice(0, 8));
  }, [query]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (id: string) => {
    setQuery("");
    setResults([]);
    setFocused(false);
    router.push(`/letters/${id}`);
  };

  return (
    <div ref={ref} className="relative w-full max-w-md" role="search" aria-label="Search letters">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Search letters..."
          className="w-full bg-card border border-accent/20 rounded-lg pl-10 pr-3 py-2 text-sm text-text placeholder-secondary focus:outline-none focus:border-accent/50 transition-colors"
          aria-label="Search letters by title"
        />
      </div>

      {focused && results.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-card border border-accent/20 rounded-lg shadow-xl z-40 max-h-60 overflow-y-auto" role="listbox">
          {results.map((r) => (
            <button
              key={r.id}
              onClick={() => handleSelect(r.id)}
              className="w-full text-left px-3 py-2 text-sm text-text hover:bg-accent/10 transition-colors border-b border-accent/5 last:border-b-0"
              role="option"
            >
              <span className="text-accent text-xs mr-2">
                {r.category === "time-capsule" ? "⏳" : r.category === "milestone" ? "🏆" : "✉️"}
              </span>
              {r.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
