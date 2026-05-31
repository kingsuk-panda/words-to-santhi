"use client";

import { useState, useMemo } from "react";
import LetterReader from "@/components/LetterReader";

const BIRTH_DATE = "1994-06-15";
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

function getBirthdayCount(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let count = 0;
  for (let y = birth.getFullYear(); y <= today.getFullYear(); y++) {
    const bd = new Date(birth);
    bd.setFullYear(y);
    if (bd <= today) count++;
  }
  return count;
}

export default function BirthdayVaultPage() {
  const [reading, setReading] = useState<number | null>(null);

  const currentAge = useMemo(() => getAge(BIRTH_DATE), []);
  const birthdayCount = useMemo(() => getBirthdayCount(BIRTH_DATE), []);
  const birthdays = useMemo(() => {
    const arr: number[] = [];
    const birth = new Date(BIRTH_DATE);
    for (let y = birth.getFullYear(); y <= birth.getFullYear() + birthdayCount - 1; y++) {
      const bd = new Date(birth);
      bd.setFullYear(y);
      if (bd <= new Date()) {
        const age = y - birth.getFullYear();
        arr.push(age);
      }
    }
    return arr;
  }, [birthdayCount]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-heading text-text">Birthday Vault</h1>
        <p className="text-sm text-secondary mt-1">
          A letter for every birthday. Each one carries the same message, updated for the age you are.
        </p>
      </div>

      <div className="bg-card border border-accent/20 rounded-lg p-6 mb-8 text-center">
        <p className="text-accent font-heading text-lg">Current Age</p>
        <p className="text-4xl font-heading text-text mt-2">{currentAge}</p>
        <p className="text-sm text-secondary mt-1">Happy {currentAge}<sup>th</sup> Birthday, Santhi</p>
      </div>

      <div className="grid gap-3">
        {birthdays.map((age) => {
          const suffix = age % 10 === 1 && age !== 11 ? "st" : age % 10 === 2 && age !== 12 ? "nd" : age % 10 === 3 && age !== 13 ? "rd" : "th";
          const content = `Happy ${age}${suffix} Birthday, Santhi.\n\n${BIRTHDAY_CONTENT}`;
          const letter = {
            id: `birthday-${age}`,
            title: `${age}${suffix} Birthday`,
            description: `Your ${age}${suffix} birthday letter.`,
            content,
            category: "birthday" as const,
            order: 100 + age,
          };

          return (
            <button
              key={age}
              onClick={() => setReading(age)}
              className="bg-card border border-accent/10 hover:border-accent/40 rounded-lg p-4 text-left transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-text text-sm group-hover:text-accent transition-colors">
                    {age}{suffix} Birthday
                  </h3>
                  <p className="text-xs text-secondary mt-0.5">
                    A letter from Kingsuk
                  </p>
                </div>
                <span className="text-accent text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Open &rarr;
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {reading !== null && (
        <LetterReader
          letter={{
            id: `birthday-${reading}`,
            title: `${reading}${reading % 10 === 1 && reading !== 11 ? "st" : reading % 10 === 2 && reading !== 12 ? "nd" : reading % 10 === 3 && reading !== 13 ? "rd" : "th"} Birthday`,
            description: `Your ${reading}${reading % 10 === 1 && reading !== 11 ? "st" : reading % 10 === 2 && reading !== 12 ? "nd" : reading % 10 === 3 && reading !== 13 ? "rd" : "th"} birthday letter.`,
            content: `Happy ${reading}${reading % 10 === 1 && reading !== 11 ? "st" : reading % 10 === 2 && reading !== 12 ? "nd" : reading % 10 === 3 && reading !== 13 ? "rd" : "th"} Birthday, Santhi.\n\n${BIRTHDAY_CONTENT}`,
            category: "birthday",
            order: 100 + reading,
          }}
          onClose={() => setReading(null)}
        />
      )}
    </div>
  );
}
