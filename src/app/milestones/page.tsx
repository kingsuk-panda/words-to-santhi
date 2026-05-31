"use client";

import { useState, useEffect } from "react";
import { letters } from "@/data/letters";
import LetterReader from "@/components/LetterReader";
import { getMilestoneNotes, setMilestoneNote } from "@/lib/storage";

export default function MilestonesPage() {
  const [notes, setNotes] = useState<Record<string, { note: string; date: string }>>({});
  const [promptLetterId, setPromptLetterId] = useState<string | null>(null);
  const [promptNote, setPromptNote] = useState("");
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);

  useEffect(() => {
    setNotes(getMilestoneNotes());
    const handler = () => setNotes(getMilestoneNotes());
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const milestoneLetters = letters.filter((l) => l.category === "milestone");

  const handleOpenClick = (id: string) => {
    if (notes[id]) {
      setOpenLetterId(id);
    } else {
      setPromptLetterId(id);
      setPromptNote("");
    }
  };

  const handleSaveNote = () => {
    if (!promptLetterId) return;
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setMilestoneNote(promptLetterId, promptNote, date);
    setNotes(getMilestoneNotes());
    setPromptLetterId(null);
    setPromptNote("");
    setOpenLetterId(promptLetterId);
  };

  const openLetter = milestoneLetters.find((l) => l.id === openLetterId);

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
          Letters for the big moments. Click one to dedicate it to something real.
        </p>
      </div>

      <div className="grid gap-4">
        {milestoneLetters.map((letter) => {
          const note = notes[letter.id];
          return (
            <div
              key={letter.id}
              className="bg-card rounded-lg border border-accent/20 p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:shadow-accent/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-heading text-base text-text truncate">
                    {note ? (
                      <span className="flex items-center gap-2">
                        {letter.title}
                        <span className="text-xs text-success">&#9679; Unlocked</span>
                      </span>
                    ) : letter.title}
                  </h3>
                  {note ? (
                    <div className="mt-2 text-xs text-secondary border-l-2 border-accent/30 pl-3 italic">
                      &ldquo;{note.note}&rdquo;
                      <span className="block text-xs text-accent/60 mt-1 not-italic">{note.date}</span>
                    </div>
                  ) : (
                    <p className="text-xs text-secondary mt-1">{letter.description}</p>
                  )}
                </div>

                <button
                  onClick={() => handleOpenClick(letter.id)}
                  className="shrink-0 bg-accent/10 hover:bg-accent/20 text-accent text-xs px-3 py-1.5 rounded transition-colors"
                >
                  {note ? "Read" : "Open"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {promptLetterId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setPromptLetterId(null); }}
          role="dialog"
          aria-modal="true"
          aria-label="Add a note for this milestone"
        >
          <div className="bg-card border border-accent/20 rounded-lg p-6 max-w-md w-full animate-scale-in">
            <h2 className="text-lg font-heading text-text mb-1">
              {milestoneLetters.find((l) => l.id === promptLetterId)?.title}
            </h2>
            <p className="text-sm text-secondary mb-4">
              What happened? Write a note to remember this moment.
            </p>
            <textarea
              value={promptNote}
              onChange={(e) => setPromptNote(e.target.value)}
              placeholder="Tell the story of this milestone..."
              rows={4}
              className="w-full bg-bg border border-accent/20 rounded-lg px-3 py-2 text-sm text-text placeholder-secondary focus:outline-none focus:border-accent/50 transition-colors resize-none"
              autoFocus
            />
            <div className="flex gap-3 mt-4 justify-end">
              <button
                onClick={() => setPromptLetterId(null)}
                className="text-xs text-secondary hover:text-text transition-colors px-3 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                disabled={!promptNote.trim()}
                className="bg-accent/10 hover:bg-accent/20 text-accent text-xs px-4 py-2 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Save &amp; Open Letter
              </button>
            </div>
          </div>
        </div>
      )}

      {openLetter && (
        <LetterReader
          letter={openLetter}
          onClose={() => setOpenLetterId(null)}
        />
      )}
    </div>
  );
}
