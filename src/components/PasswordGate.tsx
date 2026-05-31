"use client";

import { useEffect, useState, type ReactNode } from "react";
import { getCurrentUser } from "@/lib/storage";

const PASSWORDS: Record<string, string> = {
  santhi: "santhihidimbi",
  kingsuk: "kingsuk",
};

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const user = getCurrentUser();
      const stored = sessionStorage.getItem("words-to-santhi-auth");
      if (stored === PASSWORDS[user]) {
        setAuthed(true);
      }
    } catch {}
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = getCurrentUser();
    if (input === PASSWORDS[user]) {
      try {
        sessionStorage.setItem("words-to-santhi-auth", input);
      } catch {}
      window.location.reload();
    } else {
      setError(true);
    }
  };

  if (loading) return null;

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="bg-card border border-accent/20 rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-heading text-text mb-2">Words to Santhi</h1>
        <p className="text-sm text-secondary mb-6">Enter the password to continue.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            className="w-full bg-bg border border-accent/20 rounded-lg px-4 py-2.5 text-sm text-text placeholder-secondary focus:outline-none focus:border-accent/50 transition-colors"
            autoFocus
            aria-label="Password"
          />
          {error && (
            <p className="text-xs text-red-400">Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-lg transition-all text-sm"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
