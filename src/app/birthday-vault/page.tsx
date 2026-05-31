"use client";

import { useState, useMemo } from "react";
import LetterReader from "@/components/LetterReader";

const BIRTH_DATE = "2004-06-15";
const BIRTHDAY_CONTENT = `Dear Santhi,

Happy Birthday.

I know I say this every year, but I mean it more each time: You matter. Not because of what you've accomplished or what you've become, but because of who you are.

You are kind. You are strong. You are brilliant. You are worthy of every good thing that comes your way.

On your birthday, I hope you take a moment to look back at how far you've come. I hope you see the growth, the healing, the moments of courage that nobody witnessed. I hope you recognize that the person you are today is the result of every version of you that came before.

You've made it through every hard day you've ever had. That's not luck. That's you.

Thank you for being in this world. It is better because you are in it.

With all my love, always,
Kingsuk`;

function getAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function BirthdayVaultPage() {
  const [reading, setReading] = useState(false);
  const currentAge = useMemo(() => getAge(BIRTH_DATE), []);

  const letter = {
    id: "birthday",
    title: `${ordinal(currentAge)} Birthday`,
    description: `Your ${ordinal(currentAge)} birthday letter from Kingsuk.`,
    content: `Happy ${ordinal(currentAge)} Birthday, Santhi.\n\n${BIRTHDAY_CONTENT}`,
    category: "birthday" as const,
    order: 100,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-heading text-text">Birthday Vault</h1>
        <p className="text-sm text-secondary mt-1">
          A letter that updates every year on your birthday.
        </p>
      </div>

      <div className="bg-card border border-accent/20 rounded-lg p-8 mb-8 text-center">
        <p className="text-accent font-heading text-lg mb-1">Current Age</p>
        <p className="text-5xl font-heading text-text">{currentAge}</p>
        <p className="text-sm text-secondary mt-2">Born {new Date(BIRTH_DATE).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      <button
        onClick={() => setReading(true)}
        className="bg-card border border-accent/20 hover:border-accent/50 rounded-lg p-6 w-full text-left transition-all duration-300 group cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading text-text group-hover:text-accent transition-colors">
              {ordinal(currentAge)} Birthday Letter
            </h3>
            <p className="text-sm text-secondary mt-1">
              Open this on your birthday. The age updates every year.
            </p>
          </div>
          <span className="text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Open &rarr;
          </span>
        </div>
      </button>

      {reading && (
        <LetterReader
          letter={letter}
          onClose={() => setReading(false)}
        />
      )}
    </div>
  );
}
