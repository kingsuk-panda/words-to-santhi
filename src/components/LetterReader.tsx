"use client";

import { useEffect, useState } from "react";
import type { Letter } from "@/data/letters";
import { addOpenedLetter } from "@/lib/storage";

interface Props {
  letter: Letter;
  onClose: () => void;
}

export default function LetterReader({ letter, onClose }: Props) {
  const [phase, setPhase] = useState<"envelope" | "opening" | "letter">("envelope");

  useEffect(() => {
    if (phase === "opening") {
      const t = setTimeout(() => {
        setPhase("letter");
        addOpenedLetter(letter.id);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [phase, letter.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={letter.title}
    >
      {phase === "envelope" && (
        <div className="text-center animate-scale-in will-change-transform">
          <button
            onClick={() => setPhase("opening")}
            className="group cursor-pointer bg-transparent border-none"
            aria-label="Open letter"
          >
            <div className="w-48 h-56 sm:w-56 sm:h-64 bg-card rounded-lg border border-accent/30 relative flex items-center justify-center mx-auto transition-all duration-300 ease-out group-hover:border-accent group-hover:shadow-xl group-hover:shadow-accent/20 group-hover:scale-105 will-change-transform">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-accent/70 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 8l10 6 10-6" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs text-secondary">Click to open</p>
              </div>
            </div>
          </button>
          <h2 className="mt-6 text-xl font-heading text-text">{letter.title}</h2>
          <p className="mt-1 text-sm text-secondary">{letter.description}</p>
          <button
            onClick={onClose}
            className="mt-4 text-xs text-secondary hover:text-accent transition-colors"
            aria-label="Close"
          >
            Close
          </button>
        </div>
      )}

      {phase === "opening" && (
        <div className="text-center will-change-transform">
          <div className="w-48 h-56 sm:w-56 sm:h-64 bg-card rounded-lg border border-accent/30 flex items-center justify-center mx-auto animate-envelope-open will-change-transform">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
        </div>
      )}

      {phase === "letter" && (
        <div className="bg-card border border-accent/30 rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-letter-slide will-change-transform">
          <div className="sticky top-0 bg-card border-b border-accent/10 flex items-center justify-between p-4">
            <h2 className="text-lg font-heading text-accent pr-4">{letter.title}</h2>
            <button
              onClick={onClose}
              className="text-secondary hover:text-text transition-colors shrink-0"
              aria-label="Close letter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 sm:p-8 text-text leading-relaxed whitespace-pre-line text-sm sm:text-base animate-fade-in">
            {letter.content}
          </div>
        </div>
      )}
    </div>
  );
}
