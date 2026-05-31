"use client";

import { useState, useEffect, type ReactNode } from "react";

const PASSWORD = "santhihidimbi";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("words-to-santhi-auth");
      if (stored === PASSWORD) {
        setAuthenticated(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("words-to-santhi-auth", input);
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (authenticated) return <>{children}</>;

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
