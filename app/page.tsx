const projects = [
  {
    title: "Diabeteasy",
    desc: "Smart insole monitoring foot pressure to prevent diabetic ulcers.",
    href: "https://devpost.com/software/diabeteasy",
    winner: true,
  },
  {
    title: "CleanMars",
    desc: "Robot-based autonomous trash collection system.",
    href: "https://devpost.com/software/cleanmars",
    winner: true,
  },
  {
    title: "NeuroSync",
    desc: "Productivity timer using EEG to adapt to real-time brain focus levels.",
    href: "https://devpost.com/software/neurosync-n3x9aq",
    winner: false,
  },
  {
    title: "Mind+",
    desc: "A new way to interact with agents — your brain, but optimized.",
    href: "https://devpost.com/software/neurofocus-myvzab",
    winner: false,
  },
  {
    title: "asthmaornah",
    desc: "Wearable detecting early asthma attack signs via sound and breathing pattern analysis.",
    href: "https://devpost.com/software/asthmaornot",
    winner: false,
  },
  {
    title: "WTF — What the Fold",
    desc: "Predicts amino acid mutation frequency and protein structure effects.",
    href: "https://devpost.com/software/wtf-what-the-fold",
    winner: false,
  },
  {
    title: "qwkly",
    desc: "Video editing tool powered by AI.",
    href: "https://devpost.com/software/qwkly",
    winner: false,
  },
  {
    title: "Hello Fridge",
    desc: "Kitchen app identifying food, generating recipes, and promoting sustainability.",
    href: "https://devpost.com/software/hello-fridge-owaz4k",
    winner: false,
  },
  {
    title: "beat bash",
    desc: "Music rhythm game that runs in the terminal.",
    href: "https://devpost.com/software/tbd-eokyi2",
    winner: false,
  },
  {
    title: "Calories Calculator",
    desc: "Image-based food recognition and nutritional content estimator.",
    href: "https://devpost.com/software/calories-calculator",
    winner: false,
  },
];

const skills = [
  "Python", "JavaScript", "TypeScript", "HTML / CSS",
  "SQL", "Bash", "Linux", "Django", "Flask", "PostgreSQL", "Kali",
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 pb-32">

      {/* Header */}
      <header className="mb-20">
        <h1 className="text-4xl font-serif font-normal tracking-tight mb-2">Elijah Chen</h1>
        <p className="text-sm text-gray-500 italic mb-5">Yu-Hong Elijah Chen</p>
        <nav className="flex gap-5 font-mono text-sm">
          <a
            href="https://devpost.com/Journalwere"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-40 transition-opacity"
          >
            Devpost
          </a>
          <a
            href="https://www.linkedin.com/in/yu-hong-elijah-chen-47553931a/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-40 transition-opacity"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      {/* About */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-5 pb-2 border-b border-gray-200">
          About
        </h2>
        <p className="text-base leading-relaxed max-w-lg">
          Builder interested in biosensors, AI tools, and systems at the edge of hardware and software.
          I ship things at hackathons and keep going from there.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-5 pb-2 border-b border-gray-200">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li
              key={s}
              className="font-mono text-xs border border-gray-300 px-2.5 py-1"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2 className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-5 pb-2 border-b border-gray-200">
          Projects
        </h2>
        <ul>
          {projects.map((p, i) => (
            <li
              key={i}
              className="flex items-baseline justify-between gap-4 py-4 border-b border-gray-100 first:border-t first:border-gray-200"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base">{p.title}</span>
                  {p.winner && (
                    <span className="font-mono text-[10px] tracking-widest uppercase border border-black px-1.5 py-0.5 leading-none">
                      Winner
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 italic mt-1">{p.desc}</p>
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs whitespace-nowrap border-b border-black pb-px hover:opacity-40 transition-opacity shrink-0"
              >
                view →
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-20 font-mono text-xs text-gray-400">
        elijah0904@gmail.com
      </footer>
    </main>
  );
}
