"use client";

import { letters } from "@/data/letters";
import Envelope from "@/components/Envelope";
import ProgressTracker from "@/components/ProgressTracker";
import SearchBar from "@/components/SearchBar";

export default function LettersPage() {
  const letterItems = letters.filter(
    (l) => l.category === "letter"
  );

  if (letterItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading text-text mb-2">Letters</h1>
        <p className="text-secondary text-sm">No letters available yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-heading text-text">Letters</h1>
          <p className="text-sm text-secondary mt-1">
            Open these whenever you need them.
          </p>
        </div>
        <SearchBar />
      </div>

      <div className="mb-8">
        <ProgressTracker />
      </div>

      <div className="grid gap-4">
        {letterItems.map((letter) => (
          <Envelope key={letter.id} letter={letter} />
        ))}
      </div>
    </div>
  );
}
