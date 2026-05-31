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
          This is a digital archive of letters from Kingsuk to Santhi.
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

      <div className="mt-8 bg-card border border-accent/10 rounded-lg p-6">
        <h2 className="text-lg font-heading text-text mb-3">How to Edit Letters</h2>
        <div className="text-xs text-secondary space-y-2 leading-relaxed">
          <p>
            All letters are stored in <code className="text-accent">src/data/letters.ts</code>.
            Each letter has the following fields:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong className="text-text">id</strong> &mdash; A unique identifier (used in the URL)</li>
            <li><strong className="text-text">title</strong> &mdash; The letter title</li>
            <li><strong className="text-text">description</strong> &mdash; A short description</li>
            <li><strong className="text-text">content</strong> &mdash; The letter body text</li>
            <li><strong className="text-text">category</strong> &mdash; One of: letter, time-capsule, milestone, special, easter-egg</li>
            <li><strong className="text-text">unlockDate</strong> &mdash; ISO date for time capsules (e.g., &quot;2027-05-31&quot;)</li>
            <li><strong className="text-text">order</strong> &mdash; Display order</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-card border border-accent/10 rounded-lg p-6">
        <h2 className="text-lg font-heading text-text mb-3">How to Change Unlock Dates</h2>
        <div className="text-xs text-secondary space-y-2 leading-relaxed">
          <p>
            For time capsule letters, edit the <code className="text-accent">unlockDate</code> field in
            <code className="text-accent"> src/data/letters.ts</code>. The date must be in ISO format
            (YYYY-MM-DD). The letter will remain locked until that date.
          </p>
          <p>
            To make a milestone letter available, change its <code className="text-accent">category</code> from
            &quot;milestone&quot; to &quot;letter&quot;.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-card border border-accent/10 rounded-lg p-6">
        <h2 className="text-lg font-heading text-text mb-3">Technical Details</h2>
        <div className="text-xs text-secondary space-y-1 leading-relaxed">
          <p>Built with Next.js, TypeScript, and TailwindCSS</p>
          <p>Fully static &mdash; no backend, no database, no server costs</p>
          <p>Letters stored in local storage for progress tracking only</p>
          <p>No analytics, no trackers, no cookies, no third-party data collection</p>
        </div>
      </div>
    </div>
  );
}
