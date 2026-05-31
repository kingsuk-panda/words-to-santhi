"use client";

import { useState, useEffect, useRef } from "react";
import {
  getCurrentUser,
  setCurrentUser,
  resetAllProgress,
  exportAllData,
  importAllData,
  type UserId,
} from "@/lib/storage";

export default function SettingsPage() {
  const [user, setUser] = useState<UserId>("santhi");
  const [resetConfirm, setResetConfirm] = useState(false);
  const [importStatus, setImportStatus] = useState("");
  const [exportStatus, setExportStatus] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const handleUserSwitch = (u: UserId) => {
    setCurrentUser(u);
    setUser(u);
    setResetConfirm(false);
    window.location.reload();
  };

  const handleReset = () => {
    resetAllProgress();
    setResetConfirm(false);
    setExportStatus("Progress reset.");
  };

  const handleExport = () => {
    const data = exportAllData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `words-to-santhi-backup-${user}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExportStatus("Exported!");
    setTimeout(() => setExportStatus(""), 3000);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result;
      if (typeof text === "string") {
        if (importAllData(text)) {
          setImportStatus("Imported! Reloading...");
          setTimeout(() => window.location.reload(), 1000);
        } else {
          setImportStatus("Invalid file.");
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-heading text-text mb-8">Settings</h1>

      <div className="space-y-6">
        <div className="bg-card border border-accent/10 rounded-lg p-6">
          <h2 className="text-lg font-heading text-text mb-3">Who is using this archive?</h2>
          <p className="text-xs text-secondary mb-4">
            Switch between readers. Each person has their own progress and milestone notes.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => handleUserSwitch("santhi")}
              className={`px-5 py-2.5 rounded-lg text-sm transition-all ${
                user === "santhi"
                  ? "bg-accent text-bg font-medium"
                  : "bg-accent/10 text-accent hover:bg-accent/20"
              }`}
            >
              Santhi
            </button>
            <button
              onClick={() => handleUserSwitch("kingsuk")}
              className={`px-5 py-2.5 rounded-lg text-sm transition-all ${
                user === "kingsuk"
                  ? "bg-accent text-bg font-medium"
                  : "bg-accent/10 text-accent hover:bg-accent/20"
              }`}
            >
              Kingsuk
            </button>
          </div>
        </div>

        <div className="bg-card border border-accent/10 rounded-lg p-6">
          <h2 className="text-lg font-heading text-text mb-3">Backup &amp; Restore</h2>
          <p className="text-xs text-secondary mb-4">
            Export your progress and milestone notes as a file. Import on another device to sync.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleExport}
              className="bg-accent/10 hover:bg-accent/20 text-accent text-sm px-4 py-2 rounded transition-colors"
            >
              Export Data
            </button>
            <label className="bg-accent/10 hover:bg-accent/20 text-accent text-sm px-4 py-2 rounded transition-colors cursor-pointer inline-block">
              Import Data
              <input
                ref={fileRef}
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
            {exportStatus && <p className="text-xs text-success self-center">{exportStatus}</p>}
            {importStatus && <p className="text-xs text-success self-center">{importStatus}</p>}
          </div>
        </div>

        <div className="bg-card border border-red-900/30 rounded-lg p-6">
          <h2 className="text-lg font-heading text-text mb-3">Reset Archive Progress</h2>
          <p className="text-xs text-secondary mb-4">
            This will clear all opened letters and milestone notes for the current reader. This cannot be undone.
          </p>
          {resetConfirm ? (
            <div className="flex items-center gap-3">
              <p className="text-xs text-red-400">Are you sure?</p>
              <button
                onClick={handleReset}
                className="bg-red-900/30 hover:bg-red-900/50 text-red-400 text-sm px-4 py-2 rounded transition-colors"
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setResetConfirm(false)}
                className="text-xs text-secondary hover:text-text transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setResetConfirm(true)}
              className="bg-red-900/20 hover:bg-red-900/40 text-red-400 text-sm px-4 py-2 rounded transition-colors"
            >
              Reset Progress
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
