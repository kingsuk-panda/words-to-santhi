import { letters } from "@/data/letters";
import LetterPageClient from "./LetterPageClient";

export function generateStaticParams() {
  return letters.map((l) => ({ id: l.id }));
}

export default function LetterPage({ params }: { params: Promise<{ id: string }> }) {
  return <LetterPageClient id={Promise.resolve(params).then(p => p.id)} />;
}
