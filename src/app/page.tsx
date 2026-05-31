import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-text mb-4 tracking-wide">
        Words to Santhi
      </h1>
      <p className="text-lg sm:text-xl text-secondary font-heading mb-6">
        A collection of letters written across time.
      </p>
      <p className="text-sm text-secondary max-w-md mb-10 leading-relaxed">
        Some letters are meant for today.
        <br />
        Some are meant for years from now.
      </p>

      <Link
        href="/letters"
        className="inline-block bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 px-8 py-3 rounded-lg transition-all duration-300 text-sm tracking-wider hover:shadow-lg hover:shadow-accent/10"
      >
        Enter Archive
      </Link>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full">
        {[
          {
            href: "/letters", label: "Letters",
            icon: <svg viewBox="0 0 24 24" className="w-6 h-6 mx-auto mb-1 text-accent/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
          },
          {
            href: "/time-capsule", label: "Time Capsules",
            icon: <svg viewBox="0 0 24 24" className="w-6 h-6 mx-auto mb-1 text-accent/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          },
          {
            href: "/birthday-vault", label: "Birthday Vault",
            icon: <svg viewBox="0 0 24 24" className="w-6 h-6 mx-auto mb-1 text-accent/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3c-1.5 0-3 1.5-3 4 0 2 1.5 3 3 3s3-1 3-3c0-2.5-1.5-4-3-4z"/><path d="M19 17v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"/><path d="M5 17a7 7 0 0114 0H5z"/></svg>
          },
          {
            href: "/milestones", label: "Milestones",
            icon: <svg viewBox="0 0 24 24" className="w-6 h-6 mx-auto mb-1 text-accent/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-card border border-accent/10 rounded-lg p-4 text-center hover:border-accent/40 transition-all duration-300 group"
          >
            {item.icon}
            <span className="text-xs text-secondary group-hover:text-accent transition-colors">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
