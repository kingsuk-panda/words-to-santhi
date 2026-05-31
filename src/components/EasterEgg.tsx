"use client";

import { useState } from "react";
import { letters } from "@/data/letters";
import LetterReader from "./LetterReader";

export default function EasterEgg() {
  const [found, setFound] = useState(false);
  const [reading, setReading] = useState(false);
  const [clicks, setClicks] = useState(0);

  const egg = letters.find((l) => l.id === "easter-egg");

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) {
      setFound(true);
    }
  };

  if (!egg) return null;

  if (reading) {
    return (
      <LetterReader
        letter={egg}
        onClose={() => {
          setReading(false);
          setFound(false);
          setClicks(0);
        }}
      />
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50" role="complementary" aria-label="Hidden easter egg">
      <button
        onClick={handleClick}
        className={`w-10 h-10 rounded-full transition-all duration-300 ${
          found
            ? "bg-accent cursor-pointer animate-glow"
            : "bg-transparent border border-card hover:border-accent/30 cursor-pointer"
        }`}
        aria-label={found ? "Open secret letter" : "Hidden button"}
        title="..."
      />

      {found && (
        <div className="absolute bottom-14 right-0 bg-card border border-accent/30 rounded-lg p-4 shadow-xl min-w-48">
          <p className="text-xs text-secondary mb-2">You found it.</p>
          <button
            onClick={() => setReading(true)}
            className="text-accent text-sm hover:underline"
          >
            Open secret letter
          </button>
        </div>
      )}
    </div>
  );
}
