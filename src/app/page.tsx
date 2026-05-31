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
          { href: "/letters", label: "Letters", icon: "✉️" },
          { href: "/time-capsule", label: "Time Capsules", icon: "⏳" },
          { href: "/birthday-vault", label: "Birthday Vault", icon: "🎂" },
          { href: "/milestones", label: "Milestones", icon: "🏆" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-card border border-accent/10 rounded-lg p-4 text-center hover:border-accent/40 transition-all duration-300 group"
          >
            <span className="text-xl block mb-1">{item.icon}</span>
            <span className="text-xs text-secondary group-hover:text-accent transition-colors">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
