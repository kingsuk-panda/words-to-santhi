export type UserId = "santhi" | "kingsuk";

const USER_KEY = "words-to-santhi-user";

export function getCurrentUser(): UserId {
  if (typeof window === "undefined") return "santhi";
  try {
    const u = localStorage.getItem(USER_KEY);
    if (u === "kingsuk" || u === "santhi") return u;
  } catch {}
  return "santhi";
}

export function setCurrentUser(user: UserId): void {
  try {
    localStorage.setItem(USER_KEY, user);
    localStorage.removeItem(namespaceKey("opened-letters"));
    localStorage.removeItem(namespaceKey("milestone-notes"));
    window.dispatchEvent(new Event("storage"));
  } catch {}
}

function namespaceKey(key: string): string {
  const user = getCurrentUser();
  return `wts:${user}:${key}`;
}

export function getOpenedLetters(): string[] {
  try {
    return JSON.parse(localStorage.getItem(namespaceKey("opened-letters")) || "[]");
  } catch {
    return [];
  }
}

export function addOpenedLetter(id: string): void {
  try {
    const opened = getOpenedLetters();
    if (!opened.includes(id)) {
      opened.push(id);
      localStorage.setItem(namespaceKey("opened-letters"), JSON.stringify(opened));
      window.dispatchEvent(new Event("storage"));
    }
  } catch {}
}

export function getMilestoneNotes(): Record<string, { note: string; date: string }> {
  try {
    return JSON.parse(localStorage.getItem(namespaceKey("milestone-notes")) || "{}");
  } catch {
    return {};
  }
}

export function setMilestoneNote(
  letterId: string,
  note: string,
  date: string
): void {
  try {
    const notes = getMilestoneNotes();
    notes[letterId] = { note, date };
    localStorage.setItem(namespaceKey("milestone-notes"), JSON.stringify(notes));
    window.dispatchEvent(new Event("storage"));
  } catch {}
}

export function resetAllProgress(): void {
  try {
    localStorage.removeItem(namespaceKey("opened-letters"));
    localStorage.removeItem(namespaceKey("milestone-notes"));
    window.dispatchEvent(new Event("storage"));
  } catch {}
}

export function exportAllData(): string {
  const data: Record<string, unknown> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("wts:")) {
        data[key] = JSON.parse(localStorage.getItem(key) || "{}");
      }
    }
  } catch {}
  return JSON.stringify(data, null, 2);
}

export function importAllData(json: string): boolean {
  try {
    const data = JSON.parse(json);
    for (const key of Object.keys(data)) {
      if (key.startsWith("wts:")) {
        localStorage.setItem(key, JSON.stringify(data[key]));
      }
    }
    window.dispatchEvent(new Event("storage"));
    return true;
  } catch {
    return false;
  }
}
