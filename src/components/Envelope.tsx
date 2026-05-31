"use client";

import { useState } from "react";
import type { Letter } from "@/data/letters";
import LetterReader from "./LetterReader";

interface Props {
  letter: Letter;
  locked?: boolean;
  highlight?: boolean;
}

export default function Envelope({ letter, locked, highlight }: Props) {
  const [open, setOpen] = useState(false);

  if (open) {
    return <LetterReader letter={letter} onClose={() => setOpen(false)} />;
  }

  return (
    <div
      className={`bg-card rounded-lg border p-5 transition-all duration-300 ${
        highlight
          ? "border-accent animate-glow"
          : locked
          ? "border-card opacity-60"
          : "border-accent/20 hover:border-accent/50 hover:shadow-md hover:shadow-accent/10"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {locked && (
              <svg className="w-4 h-4 text-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            )}
            <h3 className={`font-heading text-base truncate ${locked ? "text-secondary" : "text-text"}`}>
              {letter.title}
            </h3>
          </div>
          <p className="text-xs text-secondary line-clamp-2 mt-1">{letter.description}</p>
          {locked && letter.unlockDate && (
            <p className="text-xs text-accent/60 mt-2">
              Unlocks: {new Date(letter.unlockDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>

        {!locked && (
          <button
            onClick={() => setOpen(true)}
            className="shrink-0 bg-accent/10 hover:bg-accent/20 text-accent text-xs px-3 py-1.5 rounded transition-colors"
            aria-label={`Open ${letter.title}`}
          >
            Open
          </button>
        )}
      </div>
    </div>
  );
}
