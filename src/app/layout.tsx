import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import EasterEgg from "@/components/EasterEgg";
import PasswordGate from "@/components/PasswordGate";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Words to Santhi",
  description: "A collection of letters written across time.",
  openGraph: {
    title: "Words to Santhi",
    description: "A collection of letters written across time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text font-body relative">
        <PasswordGate>
          <Navigation />
          <main className="flex-1">{children}</main>
          <EasterEgg />
          <footer className="py-8 text-center text-secondary text-sm">
            <p>Words to Santhi &mdash; A collection of letters written across time.</p>
          </footer>
        </PasswordGate>
      </body>
    </html>
  );
}
