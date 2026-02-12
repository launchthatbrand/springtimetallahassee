import Link from "next/link";

const versions = [
  {
    name: "Main",
    route: "/",
    description: "Primary Target Zero page (Gotham styling).",
  },
  {
    name: "Boxed",
    route: "/boxed",
    description: "Main layout constrained to max-w-7xl with white side bars.",
  },
  {
    name: "Slides",
    route: "/slides",
    description: "Mobile-first slide flow with interactive pledge steps.",
  },
];

export default function VersionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-5xl px-4">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1c3e6f]">
            Archive View
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-700">
            Explore each built page variant. Every link opens in a new tab.
          </p>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {versions.map((version) => (
            <article
              key={version.route}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="text-2xl font-black text-[#1c3e6f]">{version.name}</h2>
              <p className="mt-2 text-slate-700">{version.description}</p>
              <div className="mt-4">
                <Link
                  href={version.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#1c3e6f] px-4 py-2 text-sm font-bold text-white hover:bg-[#17335b]"
                >
                  Open {version.name}
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}