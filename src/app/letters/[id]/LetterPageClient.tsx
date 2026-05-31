"use client";

import { use } from "react";
import { letters } from "@/data/letters";
import LetterReader from "@/components/LetterReader";
import Link from "next/link";

export default function LetterPageClient({ id }: { id: Promise<string> | string }) {
  const resolvedId = typeof id === "string" ? id : use(id);
  const letter = letters.find((l) => l.id === resolvedId);

  if (!letter) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-xl font-heading text-text mb-4">Letter not found</h1>
        <Link href="/letters" className="text-accent text-sm hover:underline">
          Back to Letters
        </Link>
      </div>
    );
  }

  const isLocked = letter.unlockDate && new Date(letter.unlockDate) > new Date();

  if (isLocked) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <svg className="w-12 h-12 text-secondary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
        <h1 className="text-xl font-heading text-text mb-2">{letter.title}</h1>
        <p className="text-sm text-secondary mb-4">
          This letter is locked until{" "}
          {new Date(letter.unlockDate!).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <Link href="/letters" className="text-accent text-sm hover:underline">
          Back to Letters
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <LetterReader
        letter={letter}
        onClose={() => window.history.back()}
      />
    </div>
  );
}
