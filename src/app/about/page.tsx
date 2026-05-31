import { letters } from "@/data/letters";

export default function AboutPage() {
  const totalLetters = letters.length;
  const timeCapsules = letters.filter((l) => l.category === "time-capsule").length;
  const milestones = letters.filter((l) => l.category === "milestone").length;
  const normalLetters = letters.filter((l) => l.category === "letter").length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-heading text-text mb-6">About This Archive</h1>

      <div className="prose prose-invert max-w-none text-secondary text-sm leading-relaxed space-y-4">
        <p>
          This is a digital archive of letters from a lost brother to his equally lost sister, for whenever and wherever she needs it.
        </p>

        <p>
          Some letters are meant for today. Some are meant for years from now.
          Some are for specific moments in life. Some are for no reason at all
          except to remind Santhi that she is valued.
        </p>

        <p>
          This archive is designed to remain meaningful regardless of age,
          location, career, or relationship status. It exists outside of time.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-card border border-accent/10 rounded-lg p-4 text-center">
          <p className="text-2xl font-heading text-accent">{totalLetters}</p>
          <p className="text-xs text-secondary mt-1">Total Letters</p>
        </div>
        <div className="bg-card border border-accent/10 rounded-lg p-4 text-center">
          <p className="text-2xl font-heading text-accent">{normalLetters}</p>
          <p className="text-xs text-secondary mt-1">Available Now</p>
        </div>
        <div className="bg-card border border-accent/10 rounded-lg p-4 text-center">
          <p className="text-2xl font-heading text-accent">{timeCapsules}</p>
          <p className="text-xs text-secondary mt-1">Time Capsules</p>
        </div>
        <div className="bg-card border border-accent/10 rounded-lg p-4 text-center">
          <p className="text-2xl font-heading text-accent">{milestones}</p>
          <p className="text-xs text-secondary mt-1">Milestones</p>
        </div>
      </div>
    </div>
  );
}
