"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import LetterReader from "@/components/LetterReader";

const BIRTH_DATE = "2005-05-31";

const BIRTHDAY_CONTENT = `Dear Santhi,

Happy Birthday.

I know I say this every year, but I mean it more each time: You matter. Not because of what you've accomplished or what you've become, but because of who you are.

You are kind. You are strong. You are brilliant. You are worthy of every good thing that comes your way.

On your birthday, I hope you take a moment to look back at how far you've come. I hope you see the growth, the healing, the moments of courage that nobody witnessed. I hope you recognize that the person you are today is the result of every version of you that came before.

You've made it through every hard day you've ever had. That's not luck. That's you.

Thank you for being in this world. It is better because you are in it.

With all my love, always,
Your brother,
Kingsuk`;

function getNextBirthday(birthDate: string): { date: Date; age: number } {
  const birth = new Date(birthDate);
  const now = new Date();
  const year = now.getFullYear();
  const next = new Date(birth);
  next.setFullYear(year);
  if (next <= now) {
    next.setFullYear(year + 1);
  }
  const age = next.getFullYear() - birth.getFullYear();
  return { date: next, age };
}

function isBirthdayToday(birthDate: string): boolean {
  const birth = new Date(birthDate);
  const now = new Date();
  return now.getMonth() === birth.getMonth() && now.getDate() === birth.getDate();
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function calcTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function BirthdayVaultPage() {
  const [reading, setReading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(getNextBirthday(BIRTH_DATE).date));

  const birthdayToday = useMemo(() => isBirthdayToday(BIRTH_DATE), []);
  const next = useMemo(() => getNextBirthday(BIRTH_DATE), []);

  useEffect(() => {
    if (birthdayToday) return;
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft(next.date));
    }, 1000);
    return () => clearInterval(timer);
  }, [birthdayToday, next.date]);

  const letter = useMemo(() => ({
    id: "birthday",
    title: `${ordinal(next.age)} Birthday`,
    description: `Your ${ordinal(next.age)} birthday letter from Kingsuk.`,
    content: `Happy ${ordinal(next.age)} Birthday, Santhi.\n\n${BIRTHDAY_CONTENT}`,
    category: "birthday" as const,
    order: 100,
  }), [next.age]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-heading text-text">Birthday Vault</h1>
        <p className="text-sm text-secondary mt-1">
          A letter that unlocks every year on your birthday.
        </p>
      </div>

      <div className="bg-card border border-accent/20 rounded-lg p-8 mb-8 text-center">
        {birthdayToday ? (
          <p className="text-3xl font-heading text-accent animate-glow inline-block px-6 py-3 rounded-lg">
            Happy Birthday!
          </p>
        ) : (
          <>
            <p className="text-accent font-heading text-lg mb-4">Next Birthday In</p>
            <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((unit) => (
                <div key={unit.label}>
                  <p className="text-3xl font-heading text-text">{String(unit.value).padStart(2, "0")}</p>
                  <p className="text-xs text-secondary mt-1">{unit.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary mt-4">
              Turning <span className="text-accent">{ordinal(next.age)}</span> on {next.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </>
        )}
      </div>

      <button
        onClick={() => birthdayToday && setReading(true)}
        disabled={!birthdayToday}
        className={`bg-card border rounded-lg p-6 w-full text-left transition-all duration-300 group ${
          birthdayToday
            ? "border-accent animate-glow hover:border-accent cursor-pointer"
            : "border-accent/10 opacity-60 cursor-not-allowed"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              {!birthdayToday && (
                <svg className="w-4 h-4 text-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              )}
              <h3 className={`font-heading ${birthdayToday ? "text-text group-hover:text-accent" : "text-secondary"}`}>
                {ordinal(next.age)} Birthday Letter
              </h3>
            </div>
            <p className="text-sm text-secondary mt-1">
              {birthdayToday
                ? "Your birthday letter is ready. Open it now."
                : `Unlocks on ${next.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
            </p>
          </div>
          {birthdayToday && (
            <span className="text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Open &rarr;
            </span>
          )}
        </div>
      </button>

      {reading && birthdayToday && (
        <LetterReader
          letter={letter}
          onClose={() => setReading(false)}
        />
      )}
    </div>
  );
}
