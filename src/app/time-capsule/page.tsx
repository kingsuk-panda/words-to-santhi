"use client";

import { letters } from "@/data/letters";
import Envelope from "@/components/Envelope";
import ProgressTracker from "@/components/ProgressTracker";

export default function TimeCapsulePage() {
  const capsuleLetters = letters
    .filter((l) => l.category === "time-capsule")
    .sort((a, b) => {
      if (!a.unlockDate || !b.unlockDate) return 0;
      return new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime();
    });

  if (capsuleLetters.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading text-text mb-2">Time Capsules</h1>
        <p className="text-secondary text-sm">No time capsule letters yet.</p>
      </div>
    );
  }

  const now = new Date();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-heading text-text">Time Capsules</h1>
        <p className="text-sm text-secondary mt-1">
          Letters that unlock automatically as time passes.
        </p>
      </div>

      <div className="mb-8">
        <ProgressTracker />
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/20" aria-hidden="true" />

        <div className="space-y-6">
          {capsuleLetters.map((letter, i) => {
            const unlocked = letter.unlockDate ? new Date(letter.unlockDate) <= now : false;

            return (
              <div key={letter.id} className="relative pl-10">
                <div
                  className={`absolute left-2.5 top-5 w-[9px] h-[9px] rounded-full border-2 -translate-x-1/2 ${
                    unlocked
                      ? "bg-accent border-accent"
                      : "bg-card border-secondary"
                  }`}
                  aria-hidden="true"
                />
                <div className="text-xs text-secondary mb-1">
                  {letter.unlockDate
                    ? new Date(letter.unlockDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Someday"}
                </div>
                <Envelope letter={letter} locked={!unlocked} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
