"use client";

import { useEffect, useState } from "react";
import { letters } from "@/data/letters";

const unlocked = letters.filter((l) => !l.unlockDate || new Date(l.unlockDate) <= new Date());

export default function ProgressTracker() {
  const [opened, setOpened] = useState<string[]>([]);

  useEffect(() => {
    const update = () => {
      try {
        const data = JSON.parse(localStorage.getItem("opened-letters") || "[]");
        setOpened(data);
      } catch {}
    };
    update();
    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, []);

  const openedCount = unlocked.filter((l) => opened.includes(l.id)).length;
  const total = unlocked.length;
  const pct = total > 0 ? Math.round((openedCount / total) * 100) : 0;

  return (
    <div className="bg-card rounded-lg border border-accent/20 p-4" role="region" aria-label="Archive progress">
      <p className="text-sm text-secondary mb-2">
        Archive Progress
      </p>
      <p className="text-lg font-heading text-text">
        {openedCount} of {total} letters opened
      </p>
      <div className="mt-2 h-1.5 bg-bg rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
