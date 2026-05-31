"use client";

import { letters } from "@/data/letters";
import Envelope from "@/components/Envelope";

export default function MilestonesPage() {
  const milestoneLetters = letters.filter(
    (l) => l.category === "milestone"
  );

  if (milestoneLetters.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading text-text mb-2">Life Milestones</h1>
        <p className="text-secondary text-sm">No milestone letters yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-heading text-text">Life Milestones</h1>
        <p className="text-sm text-secondary mt-1">
          Letters for important moments. These unlock when the time is right.
        </p>
      </div>

      <div className="grid gap-4">
        {milestoneLetters.map((letter) => (
          <Envelope
            key={letter.id}
            letter={letter}
            locked={true}
          />
        ))}
      </div>
    </div>
  );
}
